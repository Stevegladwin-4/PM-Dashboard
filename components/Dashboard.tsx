"use client";

import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  Activity,
  AlertTriangle,
  BadgeCheck,
  BarChart3,
  Building2,
  CalendarDays,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Database,
  Download,
  FileSpreadsheet,
  Layers,
  LogIn,
  MonitorCog,
  Pencil,
  PieChart,
  Plus,
  RefreshCw,
  RotateCcw,
  Save,
  Search,
  ShieldCheck,
  Trash2,
  TrendingUp,
  Upload,
  Wrench,
  X,
} from "lucide-react";
import * as XLSX from "xlsx";
import EquipmentMasterDashboard from "./EquipmentMasterDashboard";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { supabase } from "@/lib/supabase-browser";
import { getPMStatus } from "@/lib/pm";
import type {
  Equipment,
  PMSchedule,
  PMStatus,
  UserRole,
  Section,
} from "@/lib/types";

const emptyStats: Record<PMStatus, number> = {
  Done: 0,
  Overdue: 0,
  Pending: 0,
  Scheduled: 0,
  "N/A": 0,
};

type EquipmentForm = {
  section: Section;
  sno: string;
  department: string;
  inventory_no: string;
  location: string;
  equipment_name: string;
  model: string;
  serial_no: string;
  make: string;
  campus: string;
  contract: string;
  working_status: string;
  pm1_date: string;
  pm2_date: string;
  pm3_date: string;
  pm4_date: string;
  pm1_na: boolean;
  pm2_na: boolean;
  pm3_na: boolean;
  pm4_na: boolean;
};

const emptyEquipmentForm: EquipmentForm = {
  section: "HIGH_END_RADIOLOGY",
  sno: "",
  department: "",
  inventory_no: "",
  location: "",
  equipment_name: "",
  model: "",
  serial_no: "",
  make: "",
  campus: "",
  contract: "",
  working_status: "ACTIVE",
  pm1_date: "",
  pm2_date: "",
  pm3_date: "",
  pm4_date: "",
  pm1_na: false,
  pm2_na: false,
  pm3_na: false,
  pm4_na: false,
};

function fmtDate(value: string | Date | null) {
  if (!value) return "N/A";

  if (typeof value === "string") {
    const [year, month, day] = value.split("-");
    if (year && month && day) return `${day}-${month}-${year}`;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(
    value instanceof Date ? value : new Date(`${value}T00:00:00`)
  );
}

function cleanDate(value: unknown): string {
  if (!value) return "";

  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "number") {
    const date = XLSX.SSF.parse_date_code(value);
    if (date) {
      return `${date.y}-${String(date.m).padStart(2, "0")}-${String(
        date.d
      ).padStart(2, "0")}`;
    }
  }

  const text = String(value).trim();

  if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    return text;
  }

  const parsed = new Date(text);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }

  return "";
}

function excelValue(row: Record<string, unknown>, names: string[]) {
  const keys = Object.keys(row);

  for (const name of names) {
    const found = keys.find(
      (key) =>
        key.trim().toLowerCase().replace(/[ .-]+/g, "_") ===
        name.toLowerCase().replace(/[ .-]+/g, "_")
    );

    if (found !== undefined) {
      return row[found];
    }
  }

  return "";
}

type DashboardView = "MASTER" | "PM";

export default function Dashboard() {
  const router = useRouter();
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [search, setSearch] = useState("");
  const [equipmentFilter, setEquipmentFilter] = useState("All");
  const [sectionFilter, setSectionFilter] = useState("All");
  const [campus, setCampus] = useState("All");
  const [department, setDepartment] = useState("All");
  const [contract, setContract] = useState("All");
  const [status, setStatus] = useState("Any status");
  const [pmNumber, setPmNumber] = useState("All");
  const [scheduleSearch, setScheduleSearch] = useState("");
  const [dashboardView, setDashboardView] = useState<DashboardView>("MASTER");

  const [masterSearch, setMasterSearch] = useState("");
  const [masterEquipmentFilter, setMasterEquipmentFilter] = useState("All");
  const [masterSectionFilter, setMasterSectionFilter] = useState("All");
  const [masterDepartmentFilter, setMasterDepartmentFilter] = useState("All");
  const [masterCampusFilter, setMasterCampusFilter] = useState("All");
  const [masterContractFilter, setMasterContractFilter] = useState("All");
  const [masterMakeFilter, setMasterMakeFilter] = useState("All");
  const [masterModelFilter, setMasterModelFilter] = useState("All");
  const [masterWorkingStatusFilter, setMasterWorkingStatusFilter] = useState("All");

  const [masterDepartment, setMasterDepartment] = useState("All");
  const [masterCampus, setMasterCampus] = useState("All");
  const [masterContract, setMasterContract] = useState("All");
  const [masterEquipment, setMasterEquipment] = useState("All");
  const [masterMake, setMasterMake] = useState("All");
  const [masterModel, setMasterModel] = useState("All");

  const [dataLoading, setDataLoading] = useState(true);
  const [connected, setConnected] = useState(true);

  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [userSection, setUserSection] = useState<Section | null>(null);

  const [authOpen, setAuthOpen] = useState(false);
  const [loginType, setLoginType] = useState<"loginId" | "email">(
    "loginId"
  );
  const [loginId, setLoginId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showUserManagement, setShowUserManagement] = useState(false);
  const [newUser, setNewUser] = useState({
    login_id: "",
    email: "",
    password: "",
    role: "technician",
    section: "HIGH_END_RADIOLOGY",
  });
  const [creatingUser, setCreatingUser] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  const [showEquipmentForm, setShowEquipmentForm] = useState(false);
  const [showDueSoon, setShowDueSoon] = useState(false);
  const [showOverdue, setShowOverdue] = useState(false);
  const [editingEquipment, setEditingEquipment] =
    useState<Equipment | null>(null);

  const [equipmentForm, setEquipmentForm] =
    useState<EquipmentForm>(emptyEquipmentForm);

  const [importing, setImporting] = useState(false);

  const [editingPM, setEditingPM] = useState<PMSchedule | null>(null);
  const [pmDate, setPmDate] = useState("");

  const isSuperAdmin = userRole === "SUPER_ADMIN";
  const isSuperViewer = userRole === "SUPER_VIEWER";
  const isSectionAdmin = userRole === "section_admin";
  const isTechnician = userRole === "technician";

  const canManageEquipment =
    isSuperAdmin || isSectionAdmin;

  const canUpdatePM =
    isSuperAdmin || isSectionAdmin || isTechnician;

  function canAccessEquipment(item: Equipment) {
    if (isSuperAdmin || isSuperViewer) {
      return true;
    }

    return Boolean(
      userSection &&
        item.section &&
        item.section === userSection
    );
  }

  function canManageThisEquipment(item: Equipment) {
    if (isSuperAdmin) {
      return true;
    }

    return (
      isSectionAdmin &&
      userSection !== null &&
      item.section === userSection
    );
  }

  function canUpdateThisPM(item: Equipment) {
    if (isSuperAdmin) {
      return true;
    }

    return (
      (isSectionAdmin || isTechnician) &&
      userSection !== null &&
      item.section === userSection
    );
  }

  const getSectionHeading = () => {
    if (
      userRole === "SUPER_ADMIN" ||
      userRole === "SUPER_VIEWER"
    ) {
      return getSectionLabel(sectionFilter).toUpperCase();
    }

    return userSection
      ? getSectionLabel(userSection).toUpperCase()
      : "SECTION";
  };

  async function createUser() {
    if (!newUser.login_id.trim()) {
      setUserMessage("Login ID is required");
      return;
    }

    if (!newUser.email.trim()) {
      setUserMessage("Email is required");
      return;
    }

    if (!newUser.password) {
      setUserMessage("Password is required");
      return;
    }

    setCreatingUser(true);
    setUserMessage("");

    try {
      const response = await fetch("/api/admin/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Failed to create user"
        );
      }

      setUserMessage(
        `User ${newUser.login_id} created successfully`
      );

      setNewUser({
        login_id: "",
        email: "",
        password: "",
        role: "technician",
        section: "HIGH_END_RADIOLOGY",
      });
    } catch (error) {
      setUserMessage(
        error instanceof Error
          ? error.message
          : "Failed to create user"
      );
    } finally {
      setCreatingUser(false);
    }
  }

  async function loadUserRole() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setUserEmail("");
      setUserRole(null);
      setUserSection(null);
      return;
    }

    setUserEmail(user.email ?? "");

    const { data, error } = await supabase
      .from("user_roles")
      .select("role, section")
      .eq("user_id", user.id)
      .maybeSingle();

    if (error) {
      console.error("Failed to load user role:", error);
      setUserRole(null);
      setUserSection(null);
      return;
    }

    setUserRole((data?.role as UserRole) ?? null);
    setUserSection((data?.section as Section) ?? null);
  }

  async function load() {
    setDataLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUserEmail(user?.email ?? null);

    if (!user) {
      setEquipment([]);
      setConnected(true);
      setDataLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("equipment")
      .select("*, pm_schedules(*)")
      .order("sno");

    if (error) {
      console.error(error);
      setConnected(false);
      setEquipment([]);
    } else {
      setConnected(true);
      setEquipment((data ?? []) as Equipment[]);
    }

    setDataLoading(false);
  }

  useEffect(() => {
    load();
    loadUserRole();

    const channel = supabase
      .channel("biomedical-dashboard-realtime")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "pm_schedules",
        },
        () => load()
      )
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "equipment",
        },
        () => load()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    if (
      userRole !== "SUPER_ADMIN" &&
      userRole !== "SUPER_VIEWER" &&
      userSection
    ) {
      setSectionFilter(userSection);
    }
  }, [userRole, userSection]);

  const sectionScopedEquipment = useMemo(() => {
    if (
      userRole === "SUPER_ADMIN" ||
      userRole === "SUPER_VIEWER"
    ) {
      if (sectionFilter === "All") {
        return equipment;
      }

      return equipment.filter(
        (e) => e.section === sectionFilter
      );
    }

    if (userSection) {
      return equipment.filter(
        (e) => e.section === userSection
      );
    }

    return [];
  }, [
    equipment,
    sectionFilter,
    userRole,
    userSection,
  ]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();

    return sectionScopedEquipment.filter((e) => {
      const text = [
        e.sno,
        e.department,
        e.inventory_no,
        e.location,
        e.equipment_name,
        e.model,
        e.serial_no,
        e.make,
        e.campus,
        e.contract,
      ]
        .join(" ")
        .toLowerCase();

      if (q && !text.includes(q)) return false;
      if (
        equipmentFilter !== "All" &&
        e.equipment_name !== equipmentFilter
      ) {
        return false;
      }

      if (campus !== "All" && e.campus !== campus) return false;
      if (department !== "All" && e.department !== department) return false;
      if (contract !== "All" && e.contract !== contract) return false;

      const activePMs = (e.pm_schedules ?? []).filter(
        (pm) => pm.scheduled_date !== null
      );

      if (pmNumber !== "All") {
        const selectedPM = activePMs.find(
          (pm) => pm.pm_no === Number(pmNumber)
        );

        if (!selectedPM) return false;
        if (
          status !== "Any status" &&
          getPMStatus(selectedPM) !== status
        ) {
          return false;
        }
      } else if (
        status !== "Any status" &&
        !activePMs.some((pm) => getPMStatus(pm) === status)
      ) {
        return false;
      }

      return true;
    });
  }, [
    sectionScopedEquipment,
    search,
    equipmentFilter,
    campus,
    department,
    contract,
    status,
    pmNumber,
  ]);

  const scheduleFiltered = useMemo(() => {
    const q = scheduleSearch.toLowerCase().trim();

    if (!q) {
      return filtered;
    }

    return filtered.filter((e) => {
      const searchableText = [
        e.sno,
        e.department,
        e.inventory_no,
        e.location,
        e.equipment_name,
        e.model,
        e.serial_no,
        e.make,
        e.campus,
        e.contract,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(q);
    });
  }, [filtered, scheduleSearch]);

  const pmStatusStats = useMemo(() => {
    const pms = filtered.flatMap((e) =>
      (e.pm_schedules ?? []).filter(
        (pm) => pm.scheduled_date !== null
      )
    );

    return {
      Done: pms.filter((pm) => getPMStatus(pm) === "Done").length,
      Overdue: pms.filter((pm) => getPMStatus(pm) === "Overdue").length,
      Pending: pms.filter((pm) => getPMStatus(pm) === "Pending").length,
      Scheduled: pms.filter((pm) => getPMStatus(pm) === "Scheduled").length,
    };
  }, [filtered]);

  const pmCounters = useMemo(() => {
    const pms = filtered.flatMap((e) =>
      (e.pm_schedules ?? []).filter(
        (pm) => pm.scheduled_date !== null
      )
    );

    const dueSoon = pms.filter(
      (pm) => getPMStatus(pm) === "Pending"
    ).length;

    const overdue = pms.filter(
      (pm) => getPMStatus(pm) === "Overdue"
    ).length;

    return {
      dueSoon,
      overdue,
      yetToBeDone: dueSoon + overdue,
    };
  }, [filtered]);

  const filteredPMs = useMemo(
    () =>
      filtered.flatMap((e) =>
        (e.pm_schedules ?? []).filter(
          (pm) => pm.scheduled_date !== null
        )
      ),
    [filtered]
  );

  const filteredCounts = {
    ...pmStatusStats,
    total:
      pmStatusStats.Done +
      pmStatusStats.Overdue +
      pmStatusStats.Pending +
      pmStatusStats.Scheduled,
    NA: filtered.reduce(
      (total, e) =>
        total +
        (e.pm_schedules ?? []).filter(
          (pm) => pm.scheduled_date === null
        ).length,
      0
    ),
  };

  const counts = pmStatusStats;
  const allPMs = filteredPMs;

  const overallCompliance = useMemo(() => {
    const pms = filtered.flatMap((e) =>
      (e.pm_schedules ?? []).filter(
        (pm) => pm.scheduled_date !== null
      )
    );

    const done = pms.filter(
      (pm) => getPMStatus(pm) === "Done"
    ).length;

    return pms.length > 0
      ? Math.round((done / pms.length) * 100)
      : 0;
  }, [filtered]);

  const complianceDone = pmStatusStats.Done;
  const complianceTotal =
    pmStatusStats.Done +
    pmStatusStats.Overdue +
    pmStatusStats.Pending +
    pmStatusStats.Scheduled;

  const monthlyCompliance = useMemo(() => {
    const now = new Date();

    const monthStart = new Date(
      now.getFullYear(),
      now.getMonth(),
      1
    );

    const nextMonthStart = new Date(
      now.getFullYear(),
      now.getMonth() + 1,
      1
    );

    const monthPMs = filtered.flatMap((e) =>
      (e.pm_schedules ?? []).filter((pm) => {
        if (!pm.scheduled_date) return false;

        const scheduled = new Date(
          `${pm.scheduled_date}T00:00:00`
        );

        return (
          scheduled >= monthStart &&
          scheduled < nextMonthStart
        );
      })
    );

    const done = monthPMs.filter(
      (pm) => getPMStatus(pm) === "Done"
    ).length;

    return {
      done,
      total: monthPMs.length,
      compliance:
        monthPMs.length > 0
          ? Math.round((done / monthPMs.length) * 100)
          : 0,
    };
  }, [filtered]);

  const filteredCampuses = [
    ...new Set(
      filtered
        .map((e) => e.campus)
        .filter(
          (value): value is string => Boolean(value)
        )
    ),
  ].sort();

  const compliancePercentage = overallCompliance;

  const dueSoonRows = filtered
    .flatMap((equipment) =>
      (equipment.pm_schedules ?? []).map((pm) => ({
        equipment,
        pm,
      }))
    )
    .filter(
      ({ pm }) =>
        pm.scheduled_date !== null &&
        getPMStatus(pm) === "Pending"
    )
    .sort(
      (a, b) =>
        new Date(`${a.pm.scheduled_date}T00:00:00`).getTime() -
        new Date(`${b.pm.scheduled_date}T00:00:00`).getTime()
    );

  const overdueRows = filtered
    .flatMap((equipment) =>
      (equipment.pm_schedules ?? []).map((pm) => ({
        equipment,
        pm,
      }))
    )
    .filter(
      ({ pm }) =>
        pm.scheduled_date !== null &&
        getPMStatus(pm) === "Overdue"
    )
    .sort(
      (a, b) =>
        new Date(`${a.pm.scheduled_date}T00:00:00`).getTime() -
        new Date(`${b.pm.scheduled_date}T00:00:00`).getTime()
    );

  const campusPerformance = filteredCampuses.map((campusName) => {
    const campusPMs = filtered
      .filter((e) => e.campus === campusName)
      .flatMap((e) => e.pm_schedules ?? [])
      .filter((pm) => pm.scheduled_date !== null);
    const done = campusPMs.filter(
      (pm) => getPMStatus(pm) === "Done"
    ).length;

    return {
      name: campusName,
      total: campusPMs.length,
      percentage: campusPMs.length
        ? Math.round((done / campusPMs.length) * 100)
        : 0,
    };
  });

  const departmentPerformance = [
    ...new Set(filtered.map((e) => e.department).filter(Boolean)),
  ].map((departmentName) => {
    const departmentPMs = filtered
      .filter((e) => e.department === departmentName)
      .flatMap((e) => e.pm_schedules ?? [])
      .filter((pm) => pm.scheduled_date !== null);

    return {
      name: departmentName,
      total: departmentPMs.length,
      done: departmentPMs.filter(
        (pm) => getPMStatus(pm) === "Done"
      ).length,
    };
  });

  const pmDistribution = [1, 2, 3, 4].map((pmNo) => ({
    name: `PM ${pmNo}`,
    total: filteredPMs.filter((pm) => pm.pm_no === pmNo).length,
    done: filteredPMs.filter(
      (pm) => pm.pm_no === pmNo && getPMStatus(pm) === "Done"
    ).length,
  }));

  const monthlyTrend = Array.from({ length: 6 }, (_, index) => {
    const date = new Date();
    date.setDate(1);
    date.setMonth(date.getMonth() - (5 - index));
    const month = date.toISOString().slice(0, 7);
    const value = filteredPMs.filter(
      (pm) =>
        getPMStatus(pm) === "Done" &&
        pm.completed_date?.startsWith(month)
    ).length;

    return {
      name: date.toLocaleDateString("en-US", { month: "short" }),
      value,
      percentage: value
        ? Math.round((value / Math.max(1, filteredCounts.Done)) * 100)
        : 0,
    };
  });

  const pmStatusData = [
    { name: "Done", value: filteredCounts.Done },
    { name: "Due Soon", value: filteredCounts.Pending },
    { name: "Overdue", value: filteredCounts.Overdue },
    { name: "Scheduled", value: filteredCounts.Scheduled },
  ];

  const campusPMData = filteredCampuses.map((campusName) => {
    const pms = filtered
      .filter((e) => e.campus === campusName)
      .flatMap((e) => e.pm_schedules ?? [])
      .filter((pm) => pm.scheduled_date !== null);

    return {
      campus: campusName,
      Done: pms.filter((pm) => getPMStatus(pm) === "Done").length,
      "Due Soon": pms.filter((pm) => getPMStatus(pm) === "Pending").length,
      Overdue: pms.filter((pm) => getPMStatus(pm) === "Overdue").length,
      Scheduled: pms.filter((pm) => getPMStatus(pm) === "Scheduled").length,
    };
  });

  const departmentPMData = departmentPerformance.map((item) => {
    const pms = filtered
      .filter((e) => e.department === item.name)
      .flatMap((e) => e.pm_schedules ?? [])
      .filter((pm) => pm.scheduled_date !== null);

    return {
      department: item.name,
      Done: pms.filter((pm) => getPMStatus(pm) === "Done").length,
      "Due Soon": pms.filter((pm) => getPMStatus(pm) === "Pending").length,
      Overdue: pms.filter((pm) => getPMStatus(pm) === "Overdue").length,
      Scheduled: pms.filter((pm) => getPMStatus(pm) === "Scheduled").length,
    };
  });

  const campusComplianceData = campusPerformance.map((item) => ({
    campus: item.name,
    compliance: item.percentage,
  }));

  const campuses = useMemo(
    () =>
      Array.from(
        new Set(
          sectionScopedEquipment
            .map((e) => e.campus)
            .filter(
              (value): value is string => Boolean(value)
            )
        )
      ).sort(),
    [sectionScopedEquipment]
  );

  const departments = useMemo(
    () =>
      Array.from(
        new Set(
          sectionScopedEquipment
            .map((e) => e.department)
            .filter(Boolean)
        )
      ).sort(),
    [sectionScopedEquipment]
  );

  const contracts = useMemo(
    () =>
      Array.from(
        new Set(
          sectionScopedEquipment
            .map((e) => e.contract)
            .filter(
              (value): value is string => Boolean(value)
            )
        )
      ).sort(),
    [sectionScopedEquipment]
  );

  const equipmentNames = useMemo(
    () =>
      Array.from(
        new Set(
          sectionScopedEquipment
            .map((e) => e.equipment_name)
            .filter(Boolean)
        )
      ).sort(),
    [sectionScopedEquipment]
  );

  const masterDepartments = useMemo(
    () =>
      [
        ...new Set(
          sectionScopedEquipment
            .map((e) => e.department)
            .filter(Boolean)
        ),
      ].sort(),
    [sectionScopedEquipment]
  );

  const masterCampuses = useMemo(
    () =>
      [
        ...new Set(
          sectionScopedEquipment
            .map((e) => e.campus)
            .filter(
              (value): value is string => Boolean(value)
            )
        ),
      ].sort(),
    [sectionScopedEquipment]
  );

  const masterContracts = useMemo(
    () =>
      [
        ...new Set(
          sectionScopedEquipment
            .map((e) => e.contract)
            .filter(
              (value): value is string => Boolean(value)
            )
        ),
      ].sort(),
    [sectionScopedEquipment]
  );

  const masterEquipmentNames = useMemo(
    () =>
      [
        ...new Set(
          sectionScopedEquipment
            .map((e) => e.equipment_name)
            .filter(Boolean)
        ),
      ].sort(),
    [sectionScopedEquipment]
  );

  const masterMakes = useMemo(
    () =>
      [
        ...new Set(
          sectionScopedEquipment
            .map((e) => e.make)
            .filter(
              (value): value is string => Boolean(value)
            )
        ),
      ].sort(),
    [sectionScopedEquipment]
  );

  const masterModels = useMemo(
    () =>
      [
        ...new Set(
          sectionScopedEquipment
            .map((e) => e.model)
            .filter(
              (value): value is string => Boolean(value)
            )
        ),
      ].sort(),
    [sectionScopedEquipment]
  );

  const masterFiltered = useMemo(() => {
    const q = masterSearch.toLowerCase().trim();

    return sectionScopedEquipment.filter((e) => {
      const text = [
        e.sno,
        e.section,
        getSectionLabel(e.section),
        e.department,
        e.inventory_no,
        e.location,
        e.equipment_name,
        e.model,
        e.serial_no,
        e.make,
        e.campus,
        e.contract,
        e.working_status,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      if (q && !text.includes(q)) return false;
      if (
        masterDepartment !== "All" &&
        e.department !== masterDepartment
      ) {
        return false;
      }
      if (masterCampus !== "All" && e.campus !== masterCampus) {
        return false;
      }
      if (
        masterContract !== "All" &&
        e.contract !== masterContract
      ) {
        return false;
      }
      if (
        masterEquipment !== "All" &&
        e.equipment_name !== masterEquipment
      ) {
        return false;
      }
      if (masterMake !== "All" && e.make !== masterMake) {
        return false;
      }
      if (masterModel !== "All" && e.model !== masterModel) {
        return false;
      }

      return true;
    });
  }, [
    sectionScopedEquipment,
    masterSearch,
    masterDepartment,
    masterCampus,
    masterContract,
    masterEquipment,
    masterMake,
    masterModel,
  ]);

  const masterSectionData = useMemo(() => {
    const counts = new Map<string, number>();

    masterFiltered.forEach((equipment) => {
      const section = equipment.section
        ? getSectionLabel(equipment.section)
        : "N/A";

      counts.set(section, (counts.get(section) ?? 0) + 1);
    });

    return Array.from(counts.entries()).map(([name, value]) => ({
      name,
      value,
    }));
  }, [masterFiltered]);

  const masterCampusData = useMemo(() => {
    const counts = new Map<string, number>();

    masterFiltered.forEach((equipment) => {
      const campus = equipment.campus || "N/A";

      counts.set(campus, (counts.get(campus) ?? 0) + 1);
    });

    return Array.from(counts.entries()).map(([name, value]) => ({
      name,
      value,
    }));
  }, [masterFiltered]);

  const masterDepartmentData = useMemo(() => {
    const counts = new Map<string, number>();

    masterFiltered.forEach((equipment) => {
      const department = equipment.department || "N/A";

      counts.set(department, (counts.get(department) ?? 0) + 1);
    });

    return Array.from(counts.entries()).map(([name, value]) => ({
      name,
      value,
    }));
  }, [masterFiltered]);

  const masterContractData = useMemo(() => {
    const counts = new Map<string, number>();

    masterFiltered.forEach((equipment) => {
      const contract = equipment.contract || "N/A";

      counts.set(contract, (counts.get(contract) ?? 0) + 1);
    });

    return Array.from(counts.entries()).map(([name, value]) => ({
      name,
      value,
    }));
  }, [masterFiltered]);

  const masterPMs = useMemo(
    () =>
      masterFiltered.flatMap((e) =>
        (e.pm_schedules ?? []).filter(
          (pm) => pm.scheduled_date !== null
        )
      ),
    [masterFiltered]
  );

  const masterDone = masterPMs.filter(
    (pm) => getPMStatus(pm) === "Done"
  ).length;
  const masterPending = masterPMs.filter(
    (pm) => getPMStatus(pm) === "Pending"
  ).length;
  const masterOverdue = masterPMs.filter(
    (pm) => getPMStatus(pm) === "Overdue"
  ).length;
  const masterScheduled = masterPMs.filter(
    (pm) => getPMStatus(pm) === "Scheduled"
  ).length;
  const masterCompliance = masterPMs.length
    ? Math.round((masterDone / masterPMs.length) * 100)
    : 0;

  const masterTotal = masterFiltered.length;

  const masterActive = masterFiltered.filter((e) => {
    const status = String(e.working_status ?? "")
      .trim()
      .toUpperCase();
    return status === "ACTIVE" || status === "WORKING";
  }).length;

  const masterAMC = masterFiltered.filter((e) =>
    String(e.contract ?? "")
      .trim()
      .toUpperCase()
      .includes("AMC")
  ).length;

  const masterWarranty = masterFiltered.filter((e) =>
    String(e.contract ?? "")
      .trim()
      .toUpperCase()
      .includes("WARRANTY")
  ).length;

  const masterActivePercentage =
    masterTotal > 0
      ? Math.round((masterActive / masterTotal) * 100)
      : 0;

  const masterAMCPercentage =
    masterTotal > 0
      ? Math.round((masterAMC / masterTotal) * 100)
      : 0;

  const masterWarrantyPercentage =
    masterTotal > 0
      ? Math.round((masterWarranty / masterTotal) * 100)
      : 0;

  async function updatePM(pm: PMSchedule, markDone: boolean) {
    try {
      const equipmentItem = equipment.find((item) =>
        item.pm_schedules?.some((schedule) => schedule.id === pm.id)
      );

      if (!equipmentItem) {
        alert("Equipment not found");
        return;
      }

      if (!canUpdateThisPM(equipmentItem)) {
        alert("You do not have permission to update this PM.");
        return;
      }

      if (!pm.scheduled_date) {
        return;
      }

      const response = await fetch(`/api/pm/${pm.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed_date: markDone
            ? new Date().toISOString().split("T")[0]
            : null,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to update PM");
      }

      await load();
    } catch (error) {
      console.error("PM UPDATE ERROR:", error);

      alert(
        error instanceof Error ? error.message : "Failed to update PM"
      );
    }
  }

  async function markAll(e: Equipment) {
    if (!canUpdateThisPM(e)) {
      alert("You do not have permission to update this equipment.");
      return;
    }

    const pendingPMs = (e.pm_schedules ?? []).filter(
      (pm) => pm.scheduled_date !== null && pm.completed_date === null
    );

    if (pendingPMs.length === 0) {
      return;
    }

    try {
      for (const pm of pendingPMs) {
        await updatePM(pm, true);
      }

      await load();
    } catch (error) {
      console.error("MARK ALL ERROR:", error);
    }
  }

  function openEquipmentForm(e?: Equipment) {
    setEditingEquipment(e ?? null);

    if (e) {
      const getPMDate = (number: number) =>
        e.pm_schedules?.find((pm) => pm.pm_no === number)
          ?.scheduled_date ?? "";
      const getPMNA = (number: number) =>
        e.pm_schedules?.find((pm) => pm.pm_no === number)
          ?.scheduled_date === null;

      setEquipmentForm({
        section: e.section ?? "HIGH_END_RADIOLOGY",
        sno: String(e.sno ?? ""),
        department: e.department ?? "",
        inventory_no: e.inventory_no ?? "",
        location: e.location ?? "",
        equipment_name: e.equipment_name ?? "",
        model: e.model ?? "",
        serial_no: e.serial_no ?? "",
        make: e.make ?? "",
        campus: e.campus ?? "",
        contract: e.contract ?? "",
        working_status: e.working_status ?? "ACTIVE",
        pm1_date: getPMDate(1),
        pm2_date: getPMDate(2),
        pm3_date: getPMDate(3),
        pm4_date: getPMDate(4),
        pm1_na: getPMNA(1),
        pm2_na: getPMNA(2),
        pm3_na: getPMNA(3),
        pm4_na: getPMNA(4),
      });
    } else {
      setEquipmentForm(emptyEquipmentForm);
    }

    setShowEquipmentForm(true);
  }

  function updateEquipmentField(
    field: keyof EquipmentForm,
    value: string
  ) {
    setEquipmentForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function saveEquipment() {
    if (
      !equipmentForm.section ||
      !equipmentForm.sno ||
      !equipmentForm.department ||
      !equipmentForm.inventory_no ||
      !equipmentForm.equipment_name
    ) {
      alert(
        "Section, S.NO, Department, Inventory No and Equipment are required."
      );
      return;
    }

    const equipmentPayload = {
      ...equipmentForm,
      section: isSuperAdmin
        ? equipmentForm.section
        : userSection ?? equipmentForm.section,
      working_status: equipmentForm.working_status,
      pm_dates: {
        1: equipmentForm.pm1_na ? null : equipmentForm.pm1_date,
        2: equipmentForm.pm2_na ? null : equipmentForm.pm2_date,
        3: equipmentForm.pm3_na ? null : equipmentForm.pm3_date,
        4: equipmentForm.pm4_na ? null : equipmentForm.pm4_date,
      },
    };

    const response = await fetch("/api/equipment", {
      method: editingEquipment ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        editingEquipment
          ? {
              ...equipmentPayload,
              id: editingEquipment.id,
            }
          : equipmentPayload
      ),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error ?? "Could not save equipment.");
      return;
    }

    setShowEquipmentForm(false);
    setEditingEquipment(null);
    await load();
  }

  async function deleteEquipment(id: string) {
    if (
      !window.confirm(
        "Delete this equipment and its PM schedules?"
      )
    ) {
      return;
    }

    const response = await fetch("/api/equipment", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error ?? "Could not delete equipment.");
      return;
    }

    await load();
  }

  function openPMDateEditor(pm: PMSchedule) {
    setEditingPM(pm);
    setPmDate(pm.scheduled_date ?? "");
  }

  async function savePMDate() {
    if (!editingPM || !pmDate) return;

    const response = await fetch(`/api/pm/${editingPM.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        scheduled_date: pmDate,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error ?? "Could not update PM date.");
      return;
    }

    setEditingPM(null);
    setPmDate("");
    await load();
  }

  /*
   * EXCEL EXPORT
   */
  function exportExcel() {
    const rows: Record<string, string | number>[] = [];

    filtered.forEach((e) => {
      const getPM = (number: number) =>
        e.pm_schedules?.find((pm) => pm.pm_no === number);

      const pm1 = getPM(1);
      const pm2 = getPM(2);
      const pm3 = getPM(3);
      const pm4 = getPM(4);

      rows.push({
        "S.NO": e.sno,
        Section: e.section ?? "",
        Department: e.department,
        "Inventory No": e.inventory_no,
        Location: e.location ?? "",
        Equipment: e.equipment_name,
        Model: e.model ?? "",
        "Serial No": e.serial_no ?? "",
        Make: e.make ?? "",
        Campus: e.campus ?? "",
        Contract: e.contract ?? "",
        "Working Status": e.working_status ?? "",

        "PM 1 Date": pm1?.scheduled_date ?? "",
        "PM 1 Status": pm1 ? getPMStatus(pm1) : "",
        "PM 1 Completed": pm1?.completed_date ?? "",

        "PM 2 Date": pm2?.scheduled_date ?? "",
        "PM 2 Status": pm2 ? getPMStatus(pm2) : "",
        "PM 2 Completed": pm2?.completed_date ?? "",

        "PM 3 Date": pm3?.scheduled_date ?? "",
        "PM 3 Status": pm3 ? getPMStatus(pm3) : "",
        "PM 3 Completed": pm3?.completed_date ?? "",

        "PM 4 Date": pm4?.scheduled_date ?? "",
        "PM 4 Status": pm4 ? getPMStatus(pm4) : "",
        "PM 4 Completed": pm4?.completed_date ?? "",
      });
    });

    const worksheet = XLSX.utils.json_to_sheet(rows);

    worksheet["!cols"] = [
      { wch: 8 },
      { wch: 18 },
      { wch: 18 },
      { wch: 18 },
      { wch: 28 },
      { wch: 18 },
      { wch: 20 },
      { wch: 18 },
      { wch: 18 },
      { wch: 18 },
      { wch: 15 },
      { wch: 15 },
      { wch: 18 },
      { wch: 15 },
      { wch: 15 },
      { wch: 18 },
      { wch: 15 },
      { wch: 15 },
      { wch: 18 },
      { wch: 15 },
      { wch: 15 },
      { wch: 18 },
    ];

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "PM Schedule"
    );

    XLSX.writeFile(
      workbook,
      `preventive-maintenance-${new Date()
        .toISOString()
        .slice(0, 10)}.xlsx`
    );
  }

  function exportMasterExcel() {
    const rows = masterFiltered.map((e, index) => ({
      "S.NO": index + 1,
      Section: getSectionLabel(e.section),
      Department: e.department ?? "",
      "Inventory No": e.inventory_no ?? "",
      Location: e.location ?? "",
      Equipment: e.equipment_name ?? "",
      Model: e.model ?? "",
      "Serial No": e.serial_no ?? "",
      Make: e.make ?? "",
      Campus: e.campus ?? "",
      Contract: e.contract ?? "",
      "Working Status": e.working_status ?? "",
        "PM1 Date": e.pm_schedules?.find((pm) => pm.pm_no === 1)?.scheduled_date ?? "",
        "PM2 Date": e.pm_schedules?.find((pm) => pm.pm_no === 2)?.scheduled_date ?? "",
        "PM3 Date": e.pm_schedules?.find((pm) => pm.pm_no === 3)?.scheduled_date ?? "",
        "PM4 Date": e.pm_schedules?.find((pm) => pm.pm_no === 4)?.scheduled_date ?? "",
    }));

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Master Equipment");
    XLSX.writeFile(
      workbook,
      `equipment-master-${new Date().toISOString().slice(0, 10)}.xlsx`
    );
  }

  /*
   * EXCEL IMPORT
   */
  async function importExcel(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    event.target.value = "";

    if (!file) return;

    setImporting(true);

    try {
      const buffer = await file.arrayBuffer();

      const workbook = XLSX.read(buffer, {
        type: "array",
        cellDates: true,
      });

      const firstSheet = workbook.SheetNames[0];

      if (!firstSheet) {
        throw new Error("Excel file does not contain a worksheet.");
      }

      const worksheet = workbook.Sheets[firstSheet];

      const rows = XLSX.utils.sheet_to_json<
        Record<string, unknown>
      >(worksheet, {
        defval: "",
      });

      if (!rows.length) {
        throw new Error("The Excel sheet is empty.");
      }

      let imported = 0;

      for (const row of rows) {
        const snoValue = excelValue(row, [
          "S.NO",
          "S NO",
          "S_NO",
          "Sno",
        ]);

        const department = String(
          excelValue(row, ["Department"])
        ).trim();

        const inventoryNo = String(
          excelValue(row, [
            "Inventory No",
            "Inventory",
            "Inventory Number",
          ])
        ).trim();

        const section = String(
          excelValue(row, ["Section", "SECTION"])
        ).trim();

        if (
          ![
            "HIGH_END_RADIOLOGY",
            "LIFE_SUPPORT",
            "GENERAL_MONITORING",
          ].includes(section)
        ) {
          throw new Error(
            `Invalid or missing Section for inventory ${inventoryNo}`
          );
        }

        const equipmentName = String(
          excelValue(row, [
            "Equipment",
            "Equipment Name",
          ])
        ).trim();

        if (
          !snoValue ||
          !department ||
          !inventoryNo ||
          !equipmentName
        ) {
          console.warn(
            "Skipping incomplete Excel row:",
            row
          );
          continue;
        }

        const sno = Number(snoValue);

        if (!Number.isFinite(sno)) {
          console.warn(
            "Skipping row with invalid S.NO:",
            row
          );
          continue;
        }

        const pm1 = cleanDate(
          excelValue(row, [
            "PM 1 Date",
            "PM1 Date",
            "PM 1",
            "PM1",
          ])
        );

        const pm2 = cleanDate(
          excelValue(row, [
            "PM 2 Date",
            "PM2 Date",
            "PM 2",
            "PM2",
          ])
        );

        const pm3 = cleanDate(
          excelValue(row, [
            "PM 3 Date",
            "PM3 Date",
            "PM 3",
            "PM3",
          ])
        );

        const pm4 = cleanDate(
          excelValue(row, [
            "PM 4 Date",
            "PM4 Date",
            "PM 4",
            "PM4",
          ])
        );

        const payload = {
          section,
          sno,
          department,
          inventory_no: inventoryNo,
          location: String(
            excelValue(row, ["Location"])
          ).trim(),
          equipment_name: equipmentName,
          model: String(
            excelValue(row, ["Model"])
          ).trim(),
          serial_no: String(
            excelValue(row, [
              "Serial No",
              "Serial Number",
              "Serial",
            ])
          ).trim(),
          make: String(
            excelValue(row, ["Make"])
          ).trim(),
          campus: String(
            excelValue(row, ["Campus"])
          ).trim(),
          contract: String(
            excelValue(row, ["Contract"])
          ).trim(),
          working_status: String(
            excelValue(row, ["Working Status", "Status"])
          ).trim() || "ACTIVE",
          pm_dates: {
            1: pm1,
            2: pm2,
            3: pm3,
            4: pm4,
          },
        };

        const response = await fetch(
          "/api/equipment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error ??
              `Could not import inventory ${inventoryNo}.`
          );
        }

        imported++;
      }

      await load();

      alert(
        `Excel import completed.\n\n${imported} equipment records imported.`
      );
    } catch (error) {
      console.error(error);

      alert(
        error instanceof Error
          ? error.message
          : "Could not import Excel file."
      );
    } finally {
      setImporting(false);
    }
  }

  function reset() {
    setSearch("");
    setEquipmentFilter("All");
    setSectionFilter("All");
    setCampus("All");
    setDepartment("All");
    setContract("All");
    setStatus("Any status");
    setPmNumber("All");
    setMasterSearch("");
    setMasterDepartment("All");
    setMasterCampus("All");
    setMasterContract("All");
    setMasterEquipment("All");
    setMasterMake("All");
    setMasterModel("All");
  }

  /*
   * CSV EXPORT - KEPT
   */
  function exportCSV() {
    const rows: string[][] = [
      [
        "S.NO",
        "Department",
        "Inventory No",
        "Location",
        "Equipment",
        "Model",
        "Serial No",
        "Make",
        "Campus",
        "Contract",
        "PM No",
        "Scheduled Date",
        "Status",
        "PM Done",
      ],
    ];

    filtered.forEach((e) =>
      (e.pm_schedules ?? [])
        .sort((a, b) => a.pm_no - b.pm_no)
        .forEach((pm) =>
          rows.push([
            String(e.sno),
            e.department,
            e.inventory_no,
            e.location ?? "",
            e.equipment_name,
            e.model ?? "",
            e.serial_no ?? "",
            e.make ?? "",
            e.campus ?? "",
            e.contract ?? "",
            String(pm.pm_no),
            pm.scheduled_date ?? "N/A",
            getPMStatus(pm),
            pm.completed_date ?? "",
          ])
        )
    );

    const csv = rows
      .map((row) =>
        row
          .map((v) => `"${v.replaceAll('"', '""')}"`)
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8",
    });

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);
    a.download = "preventive-maintenance.csv";
    a.click();

    URL.revokeObjectURL(a.href);
  }

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      let authEmail = "";

      if (loginType === "email") {
        if (!email.trim()) {
          setError("Please enter your email.");
          setLoading(false);
          return;
        }

        authEmail = email.trim();
      } else {
        if (!loginId.trim()) {
          setError("Please enter your Login ID.");
          setLoading(false);
          return;
        }

        const response = await fetch("/api/auth/login-id", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            loginId: loginId.trim(),
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          setError(result.error || "Login ID not found.");
          setLoading(false);
          return;
        }

        authEmail = result.email;
      }

      if (!password) {
        setError("Please enter your password.");
        setLoading(false);
        return;
      }

      const { error: signInError } =
        await supabase.auth.signInWithPassword({
          email: authEmail,
          password,
        });

      if (signInError) {
        setError("Invalid credentials.");
        setLoading(false);
        return;
      }

      router.replace("/");
      router.refresh();
    } catch {
      setError("Unable to sign in. Please try again.");
    }

    setLoading(false);
  }

  async function signUp() {
    setAuthMessage("");

    const { error } =
      await supabase.auth.signUp({
        email,
        password,
      });

    setAuthMessage(
      error
        ? error.message
        : "Account created. Check email if confirmation is enabled."
    );
  }

  async function resetPassword() {
    if (!email) {
      alert("Please enter your email first.");
      return;
    }

    const { error } =
      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

    if (error) {
      alert(error.message);
    } else {
      alert(
        "Password reset email sent. Check your email."
      );
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    await load();
    await loadUserRole();
  }

  return (
    <main className="page dashboard">
      <header className="topbar dashboard-header">
        <div className="brand">
          <div className="logo">
            <Wrench size={23} />
          </div>

          <div>
            <div className="title">
              Preventive Maintenance Dashboard
            </div>

            <div className="subtitle">
              Auto-calculated PM status ·{" "}
              <span
                className={
                  connected
                    ? "connection ok"
                    : "connection"
                }
              >
                {connected
                  ? " Supabase connected"
                  : " Database unavailable"}
              </span>
            </div>
          </div>
        </div>

        <div className="actions">
          {(userRole === "SUPER_ADMIN" ||
            userRole === "SUPER_VIEWER") ? (
            <div className="header-section-selector">
              <Layers size={18} />

              <span>Section:</span>

              <select
                value={sectionFilter}
                onChange={(e) => setSectionFilter(e.target.value)}
              >
                <option value="All">All Sections</option>

                <option value="HIGH_END_RADIOLOGY">
                  High-End & Radiology
                </option>

                <option value="LIFE_SUPPORT">
                  Life Support and Surgical
                </option>

                <option value="GENERAL_MONITORING">
                  General Monitoring
                </option>
              </select>
            </div>
          ) : (
            <div className="header-section-name">
              <Layers size={18} />

              <span>
                {userSection
                  ? getSectionLabel(userSection)
                  : "Section"}
              </span>
            </div>
          )}

          <button className="btn">
            <CalendarDays size={15} />
            As of <b>{fmtDate(new Date())}</b>
          </button>

          <button
            className="btn"
            onClick={
              dashboardView === "MASTER"
                ? exportMasterExcel
                : exportExcel
            }
            title={
              dashboardView === "MASTER"
                ? "Export Master"
                : "Export PM schedule"
            }
          >
            <FileSpreadsheet size={15} />
            {dashboardView === "MASTER"
              ? "Export Master"
              : "Excel Export"}
          </button>

          <button
            className="btn"
            onClick={exportCSV}
          >
            <Download size={15} />
            CSV
          </button>

          <button
            className="btn"
            onClick={() => load()}
          >
            <RefreshCw size={15} />
            Refresh
          </button>

          <button
            className="btn"
            onClick={reset}
          >
            <RotateCcw size={15} />
            Reset
          </button>

          {isSuperAdmin && (
            <button
              className="secondary-button"
              onClick={() =>
                setShowUserManagement((value) => !value)
              }
            >
              User Management
            </button>
          )}

          {userEmail ? (
            <button
              className="btn"
              onClick={signOut}
            >
              {userEmail} · Sign out
            </button>
          ) : (
            <button
              className="btn primary"
              onClick={() => setAuthOpen(true)}
            >
              <LogIn size={15} />
              Sign in
            </button>
          )}
        </div>
      </header>

      <div className="dashboard-content">
      <div className="dashboard-switcher">
        <button
          type="button"
          className={dashboardView === "MASTER" ? "dashboard-tab active" : "dashboard-tab"}
          onClick={() => setDashboardView("MASTER")}
        >
          <MonitorCog size={17} />
          Equipment Master
        </button>
        <button
          type="button"
          className={dashboardView === "PM" ? "dashboard-tab active" : "dashboard-tab"}
          onClick={() => setDashboardView("PM")}
        >
          <CalendarDays size={17} />
          PM Dashboard
        </button>
      </div>

      {dashboardView === "PM" && (
      <>
      <section className="filter-bar dashboard-filter-bar">
        <div className="filter-field equipment-search">
          <label>Equipment</label>

          <div className="filter-search-box">
            <Search size={16} />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search equipment, inventory, serial no..."
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear equipment search"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        <div className="filter-field equipment-select">
          <label>Equipment</label>

          <select
            value={equipmentFilter}
            onChange={(e) => setEquipmentFilter(e.target.value)}
          >
            <option value="All">All Equipment</option>

            {equipmentNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
          </select>
        </div>

        {(userRole === "SUPER_ADMIN" ||
          userRole === "SUPER_VIEWER") && (
          <div className="filter-field section-filter">
            <label>Section</label>

            <select
              value={sectionFilter}
              onChange={(e) => setSectionFilter(e.target.value)}
            >
              <option value="All">All Sections</option>
              <option value="HIGH_END_RADIOLOGY">
                High-End & Radiology
              </option>
              <option value="LIFE_SUPPORT">
                Life Support and Surgical
              </option>
              <option value="GENERAL_MONITORING">
                General Monitoring
              </option>
            </select>
          </div>
        )}

        <div className="filter-field">
          <label>Campus</label>
          <select value={campus} onChange={(e) => setCampus(e.target.value)}>
            <option value="All">All Campuses</option>
            {campuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-field">
          <label>Department</label>
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="All">All Departments</option>
            {departments.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-field">
          <label>Contract</label>
          <select value={contract} onChange={(e) => setContract(e.target.value)}>
            <option value="All">All Contracts</option>
            {contracts.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-field">
          <label>PM</label>
          <select value={pmNumber} onChange={(e) => setPmNumber(e.target.value)}>
            <option value="All">All PMs</option>
            <option value="1">PM 1</option>
            <option value="2">PM 2</option>
            <option value="3">PM 3</option>
            <option value="4">PM 4</option>
          </select>
        </div>

        <div className="filter-field">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Any status">Any Status</option>
            <option value="Done">Done</option>
            <option value="Pending">Pending</option>
            <option value="Overdue">Overdue</option>
            <option value="Scheduled">Scheduled</option>
          </select>
        </div>

        <button
          type="button"
          className="reset-filters"
          onClick={reset}
        >
          Reset
        </button>
      </section>

      {isSuperAdmin && showUserManagement && (
        <section className="user-management-card">
          <div className="section-header">
            <div>
              <h2>User Management</h2>
              <p>
                Create section-based Login ID and password accounts
              </p>
            </div>
          </div>

          <div className="user-form-grid">
            <div className="form-field">
              <label>Login ID</label>
              <input
                type="text"
                value={newUser.login_id}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    login_id: e.target.value,
                  })
                }
                placeholder="Enter Login ID"
              />
            </div>

            <div className="form-field">
              <label>Email</label>
              <input
                type="email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    email: e.target.value,
                  })
                }
                placeholder="Enter email"
              />
            </div>

            <div className="form-field">
              <label>Password</label>
              <input
                type="password"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    password: e.target.value,
                  })
                }
                placeholder="Enter password"
              />
            </div>

            <div className="form-field">
              <label>Role</label>
              <select
                value={newUser.role}
                onChange={(e) => {
                  const role = e.target.value;

                  setNewUser({
                    ...newUser,
                    role,
                    section:
                      role === "SUPER_ADMIN" ||
                      role === "SUPER_VIEWER"
                        ? "None"
                        : "HIGH_END_RADIOLOGY",
                  });
                }}
              >
                <option value="technician">Technician</option>
                <option value="section_admin">Section Admin</option>
                <option value="SUPER_VIEWER">Super Viewer</option>
                <option value="SUPER_ADMIN">Super Admin</option>
              </select>
            </div>

            <div className="form-field">
              <label>Section</label>
              <select
                value={newUser.section}
                disabled={
                  newUser.role === "SUPER_ADMIN" ||
                  newUser.role === "SUPER_VIEWER"
                }
                onChange={(e) =>
                  setNewUser({
                    ...newUser,
                    section: e.target.value,
                  })
                }
              >
                <option value="None">No Section</option>
                <option value="HIGH_END_RADIOLOGY">
                  High-End & Radiology
                </option>
                <option value="LIFE_SUPPORT">
                  Life Support and Surgical
                </option>
                <option value="GENERAL_MONITORING">
                  General Monitoring
                </option>
              </select>
            </div>
          </div>

          <div className="user-management-actions">
            <button
              className="primary-button"
              onClick={createUser}
              disabled={creatingUser}
            >
              {creatingUser ? "Creating..." : "Create User"}
            </button>
          </div>

          {userMessage && (
            <div className="user-message">{userMessage}</div>
          )}
        </section>
      )}

      <section className="kpi-grid stats-grid">
        <Stat label="TOTAL EQUIPMENT" value={filtered.length} hint="Equipment assets" icon={<MonitorCog />} />
        <Stat label="ACTIVE PMs" value={filteredCounts.total} hint="N/A excluded" icon={<ClipboardCheck />} />
        <Stat label="PM DONE" value={filteredCounts.Done} hint="Completed PMs" icon={<CheckCircle2 />} />
        <div className="clickable-stat" onClick={() => setShowDueSoon(true)}>
          <Stat label="PM DUE SOON" value={filteredCounts.Pending} hint="Within next 30 days" warning icon={<Clock3 />} />
        </div>
        <div className="clickable-stat" onClick={() => setShowOverdue(true)}>
          <Stat label="OVERDUE" value={filteredCounts.Overdue} hint="Requires attention" danger icon={<AlertTriangle />} />
        </div>
        <Stat label="Compliance (Overall)" value={`${overallCompliance}%`} hint={`${complianceDone} / ${complianceTotal} active PMs`} icon={<ShieldCheck />} progress={overallCompliance} />
        <Stat
          label="Compliance (This Month)"
          value={`${monthlyCompliance.compliance}%`}
          hint={`${monthlyCompliance.done} / ${monthlyCompliance.total} PMs`}
          icon={<CheckCircle2 />}
          progress={monthlyCompliance.compliance}
        />
      </section>

      <section className="analytics-section">
        <div className="analytics-grid-four">
          <div className="dashboard-card chart-card">
            <ChartHeading title="PM Status Distribution" subtitle="N/A excluded from calculation" icon={<PieChart size={21} />} />
            <div className="chart-box pie-box">
              <ResponsiveContainer width="100%" height={270}>
                <RechartsPieChart>
                  <Pie data={pmStatusData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={65} outerRadius={100} paddingAngle={3}>
                    {pmStatusData.map((entry, index) => <Cell key={`pm-status-${index}`} fill={["#16a34a", "#f59e0b", "#dc2626", "#6366f1"][index]} />)}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="dashboard-card chart-card">
            <ChartHeading title="PM Status by Campus" subtitle="Active PMs only" icon={<Building2 size={21} />} />
            <div className="chart-box">
              <ResponsiveContainer width="100%" height={270}>
                <BarChart data={campusPMData} margin={{ top: 5, right: 8, left: -8, bottom: 5 }}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="campus" tick={{ fontSize: 11 }} /><YAxis allowDecimals={false} /><Tooltip /><Legend /><Bar dataKey="Done" stackId="pm" name="Done" fill="#16a34a" /><Bar dataKey="Due Soon" stackId="pm" name="Due Soon" fill="#f59e0b" /><Bar dataKey="Overdue" stackId="pm" name="Overdue" fill="#dc2626" /><Bar dataKey="Scheduled" stackId="pm" name="Scheduled" fill="#6366f1" /></BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="dashboard-card chart-card">
            <ChartHeading title="Department PM Status" subtitle="Current filtered equipment" icon={<Building2 size={21} />} />
            <div className="chart-area department-chart">
              <ResponsiveContainer width="100%" height={270}>
                <BarChart data={departmentPMData} margin={{ top: 8, right: 5, left: -12, bottom: 5 }}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="department" tick={{ fontSize: 8 }} angle={-20} textAnchor="end" height={45} interval={0} /><YAxis allowDecimals={false} tick={{ fontSize: 9 }} /><Tooltip /><Legend verticalAlign="bottom" height={25} /><Bar dataKey="Done" stackId="status" name="Done" fill="#16a34a" radius={[0, 0, 0, 0]} /><Bar dataKey="Due Soon" stackId="status" name="Due Soon" fill="#f59e0b" /><Bar dataKey="Overdue" stackId="status" name="Overdue" fill="#dc2626" /><Bar dataKey="Scheduled" stackId="status" name="Scheduled" fill="#6366f1" radius={[3, 3, 0, 0]} /></BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="dashboard-card chart-card">
            <ChartHeading title="Compliance by Campus" subtitle="Done ÷ active PMs" icon={<ShieldCheck size={21} />} />
            <div className="chart-box">
              <ResponsiveContainer width="100%" height={270}>
                <BarChart data={campusComplianceData} margin={{ top: 8, right: 8, left: -8, bottom: 5 }}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="campus" tick={{ fontSize: 11 }} /><YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} /><Tooltip formatter={(value) => [`${value}%`, "Compliance"]} /><Bar dataKey="compliance" name="Compliance" fill="#2563eb" /></BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      <section className="workload-row">
        <WorkloadCard className="workload-overdue" icon={<AlertTriangle size={22} />} label="Overdue PMs" value={filteredCounts.Overdue} hint="Requires attention" onClick={() => setShowOverdue(true)} />
        <WorkloadCard className="workload-pending" icon={<Clock3 size={22} />} label="PM Due Soon" value={filteredCounts.Pending} hint="Within next 30 days" onClick={() => setShowDueSoon(true)} />
        <WorkloadCard className="workload-yet" icon={<ClipboardCheck size={22} />} label="PM Yet to be Done" value={filteredCounts.Pending + filteredCounts.Overdue} hint="Pending + Overdue" onClick={() => setShowDueSoon(true)} />
      </section>

      {showDueSoon && <StatusPanel title="PMs Due Soon" subtitle="Preventive maintenance due within 30 days" rows={dueSoonRows} status="Pending" onClose={() => setShowDueSoon(false)} updatePM={updatePM} />}
      {showOverdue && <StatusPanel title="Overdue PMs" subtitle="Preventive maintenance requiring attention" rows={overdueRows} status="Overdue" onClose={() => setShowOverdue(false)} updatePM={updatePM} />}

      <div className="legacy-analytics">
      <section className="stats stats-grid">
        <div className="stat stat-card">
          <h3>Total Equipment</h3>
          <div className="value">{filtered.length}</div>
          <div className="hint">Active assets</div>
        </div>

        <div className="stat stat-card">
          <h3>PM Done</h3>
          <div className="value">{filteredCounts.Done}</div>
          <div className="hint">Completed PMs</div>
        </div>

        <div
          className="clickable-stat"
          onClick={() => setShowDueSoon(true)}
        >
          <div className="stat stat-card">
            <h3>PM Due Soon</h3>
            <div className="value">{filteredCounts.Pending}</div>
            <div className="hint">Within next 30 days</div>
          </div>
        </div>

        <div className="stat stat-card">
          <h3>Overdue</h3>
          <div className="value">{filteredCounts.Overdue}</div>
          <div className="hint">Requires attention</div>
        </div>

        <div className="stat stat-card">
          <h3>Compliance</h3>
          <div className="value">{compliancePercentage}%</div>
          <div className="hint">PM completion rate</div>
        </div>
      </section>

      {showDueSoon && (
        <div className="due-soon-panel">
          <div className="panel-header">
            <div>
              <h2>PM Due Soon</h2>
              <p>PMs due within the next 30 days</p>
            </div>

            <button
              className="btn"
              onClick={() => setShowDueSoon(false)}
            >
              Close
            </button>
          </div>

          <div className="table-wrap due-soon-table">
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Equipment</th>
                  <th>Inventory No</th>
                  <th>Department</th>
                  <th>Campus</th>
                  <th>PM</th>
                  <th>Due Date</th>
                  <th>Days Remaining</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filtered
                  .flatMap((equipment) =>
                    (equipment.pm_schedules ?? []).map((pm) => ({
                      equipment,
                      pm,
                    }))
                  )
                  .filter(
                    ({ pm }) =>
                      pm.scheduled_date !== null &&
                      getPMStatus(pm) === "Pending"
                  )
                  .sort((a, b) => {
                    return (
                      new Date(`${a.pm.scheduled_date}T00:00:00`).getTime() -
                      new Date(`${b.pm.scheduled_date}T00:00:00`).getTime()
                    );
                  })
                  .map(({ equipment, pm }, index) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);

                    const dueDate = new Date(
                      `${pm.scheduled_date}T00:00:00`
                    );

                    const daysRemaining = Math.ceil(
                      (dueDate.getTime() - today.getTime()) /
                        (1000 * 60 * 60 * 24)
                    );

                    return (
                      <tr key={pm.id}>
                        <td>{index + 1}</td>

                        <td>
                          <strong>{equipment.equipment_name}</strong>

                          {equipment.model && (
                            <div className="table-subtext">
                              {equipment.model}
                            </div>
                          )}
                        </td>

                        <td>{equipment.inventory_no}</td>
                        <td>{equipment.department}</td>
                        <td>{equipment.campus ?? "N/A"}</td>
                        <td>PM {pm.pm_no}</td>
                        <td>{fmtDate(pm.scheduled_date)}</td>

                        <td>
                          <span
                            className={
                              daysRemaining <= 7
                                ? "days-urgent"
                                : "days-normal"
                            }
                          >
                            {daysRemaining === 0
                              ? "Due today"
                              : `${daysRemaining} days`}
                          </span>
                        </td>

                        <td>
                          <span className="status pending">
                            Pending
                          </span>
                        </td>

                        <td>
                          {canUpdateThisPM(equipment) && (
                            <button
                              className="btn btn-primary"
                              onClick={() =>
                                updatePM(
                                  pm,
                                  getPMStatus(pm) !== "Done"
                                )
                              }
                            >
                              {getPMStatus(pm) === "Done"
                                ? "Undo"
                                : "Mark Done"}
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <section className="panel filters filter-bar">
        <div className="searchbox">
          <Search size={17} />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search by SNO, equipment, serial, location, model, make..."
          />
        </div>

        <Select
          value={campus}
          setValue={setCampus}
          options={campuses}
          label="Campus"
        />

        <Select
          value={department}
          setValue={setDepartment}
          options={departments}
          label="Department"
        />

        <Select
          value={contract}
          setValue={setContract}
          options={contracts}
          label="Contract"
        />

        <Select
          value={pmNumber}
          setValue={setPmNumber}
          options={["1", "2", "3", "4"]}
          label="PM"
          any="All PMs"
        />

        <Select
          value={status}
          setValue={setStatus}
          options={[
            "Done",
            "Overdue",
            "Pending",
            "Scheduled",
          ]}
          label="Status"
          any="Any status"
        />
      </section>

      <section className="charts dashboard-grid">
        <div className="panel chart dashboard-card">
          <h2>PM Status by Campus</h2>
          <p>Across all four PM schedules</p>

          <div className="bararea">
            {filteredCampuses.map((c) => {
              const pms = filtered
                .filter((e) => e.campus === c)
                .flatMap(
                  (e) => e.pm_schedules ?? []
                )
                .filter(
                  (pm) =>
                    pm.scheduled_date !== null &&
                    (pmNumber === "All" ||
                      pm.pm_no === Number(pmNumber))
                );

              const max = Math.max(
                1,
                ...filteredCampuses.map(
                  (x) =>
                    filtered
                      .filter(
                        (e) => e.campus === x
                      )
                      .flatMap(
                        (e) =>
                          e.pm_schedules ?? []
                      )
                      .filter(
                        (pm) =>
                          pm.scheduled_date !== null &&
                          (pmNumber === "All" ||
                            pm.pm_no === Number(pmNumber))
                      ).length
                )
              );

              return (
                <div
                  className="baritem"
                  key={c}
                >
                  <b>{pms.length}</b>

                  <div
                    className="bar"
                    style={{
                      height: `${Math.max(
                        8,
                        (pms.length / max) * 150
                      )}px`,
                    }}
                  />

                  <span>{c}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="panel chart dashboard-card">
          <h2>Overall PM Distribution</h2>
          <p>All scheduled PM dates</p>

          <div
            className="donut"
            style={{
              background: `conic-gradient(
                #08b77d 0 ${
                  (counts.Done /
                    allPMs.length) *
                    100 || 0
                }%,
                #f59b00 ${
                  (counts.Done /
                    allPMs.length) *
                    100 || 0
                }% ${
                  ((counts.Done +
                    counts.Pending) /
                    allPMs.length) *
                    100 || 0
                }%,
                #f51f50 ${
                  ((counts.Done +
                    counts.Pending) /
                    allPMs.length) *
                    100 || 0
                }% ${
                  ((counts.Done +
                    counts.Pending +
                    counts.Overdue) /
                    allPMs.length) *
                    100 || 0
                }%,
                #94a3b8 ${
                  ((counts.Done +
                    counts.Pending +
                    counts.Overdue) /
                    allPMs.length) *
                    100 || 0
                }% 100%
              )`,
            }}
          >
            <div className="donutCenter">
              <b>{allPMs.length}</b>
              <span>Total PMs</span>
            </div>
          </div>
        </div>
      </section>

      </div>

      </>
      )}

      {dashboardView === "MASTER" && (
        <EquipmentMasterDashboard
          equipment={sectionScopedEquipment}
          sectionFilter={sectionFilter}
          userRole={userRole}
          userSection={userSection}
          canManageEquipment={canManageEquipment}
          importing={importing}
          importExcel={importExcel}
          openEquipmentForm={openEquipmentForm}
          deleteEquipment={deleteEquipment}
        />
      )}

      {/* Legacy inline master panel is replaced by EquipmentMasterDashboard. */}
      {false && <section className="panel master-dashboard">
        <div className="section-header">
          <div>
            <span className="section-eyebrow">
              EQUIPMENT MASTER DASHBOARD
            </span>
            <h2>Equipment Master Dashboard</h2>
            <p>
              Complete equipment inventory and preventive maintenance overview
            </p>
          </div>
        </div>

        <div className="master-filters">
          <div className="filter-field">
            <label>Search</label>
            <div className="filter-search-box">
              <Search size={16} />
              <input
                value={masterSearch}
                onChange={(e) => setMasterSearch(e.target.value)}
                placeholder="Equipment, inventory, serial, location..."
              />
            </div>
          </div>

          <Select
            value={masterDepartment}
            setValue={setMasterDepartment}
            options={masterDepartments}
            label="Department"
          />
          <Select
            value={masterCampus}
            setValue={setMasterCampus}
            options={masterCampuses}
            label="Campus"
          />
          <Select
            value={masterContract}
            setValue={setMasterContract}
            options={masterContracts}
            label="Contract"
          />
          <Select
            value={masterEquipment}
            setValue={setMasterEquipment}
            options={masterEquipmentNames}
            label="Equipment"
          />
          <Select
            value={masterMake}
            setValue={setMasterMake}
            options={masterMakes}
            label="Make"
          />
          <Select
            value={masterModel}
            setValue={setMasterModel}
            options={masterModels}
            label="Model"
          />
        </div>

        <div className="master-kpi-grid">
          <Stat
            label="TOTAL EQUIPMENT"
            value={masterTotal}
            hint="Master equipment assets"
            icon={<MonitorCog />}
          />
          <Stat
            label="ACTIVE EQUIPMENT"
            value={masterActive}
            hint={`${masterActivePercentage}% currently active`}
            icon={<Activity />}
            success
            progress={masterActivePercentage}
          />
          <Stat
            label="UNDER AMC"
            value={masterAMC}
            hint={`${masterAMCPercentage}% of equipment`}
            icon={<ShieldCheck />}
            warning
            progress={masterAMCPercentage}
          />
          <Stat
            label="UNDER WARRANTY"
            value={masterWarranty}
            hint={`${masterWarrantyPercentage}% of equipment`}
            icon={<BadgeCheck />}
            success
            progress={masterWarrantyPercentage}
          />
        </div>

        <div className="master-table-wrap">
          <table className="master-table">
            <thead>
              <tr>
                <th>S.NO</th>
                {sectionFilter === "All" && <th>SECTION</th>}
                <th>DEPARTMENT</th>
                <th>INVENTORY NO</th>
                <th>LOCATION</th>
                <th>EQUIPMENT</th>
                <th>MODEL</th>
                <th>SERIAL NO</th>
                <th>MAKE</th>
                <th>CAMPUS</th>
                <th>CONTRACT</th>
                <th>WORKING STATUS</th>
              </tr>
            </thead>
            <tbody>
              {masterFiltered.map((e, index) => {
                return (
                  <tr key={e.id}>
                    <td>{index + 1}</td>
                    {sectionFilter === "All" && (
                      <td>{getSectionLabel(e.section)}</td>
                    )}
                    <td>{e.department}</td>
                    <td>{e.inventory_no}</td>
                    <td>{e.location}</td>
                    <td><strong>{e.equipment_name}</strong></td>
                    <td>{e.model}</td>
                    <td>{e.serial_no}</td>
                    <td>{e.make}</td>
                    <td>{e.campus}</td>
                    <td>{e.contract}</td>
                    <td>
                      <span className={
                        String(e.working_status ?? "").toUpperCase() === "ACTIVE"
                          ? "status done"
                          : "status"
                      }>
                        {e.working_status || "N/A"}
                      </span>
                    </td>
                  </tr>
                );
              })}
              {masterFiltered.length === 0 && (
                <tr>
                  <td
                    colSpan={sectionFilter === "All" ? 12 : 11}
                    className="empty"
                  >
                    No equipment found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>}

      {dashboardView === "PM" && (
      <section className="schedule-section panel equipment-table equipment-schedule-card">
        <div className="section-header schedule-header equipment-schedule-header">
          <div className="section-banner">
            <div>
              <span className="section-eyebrow">
                MAINTENANCE SECTION
              </span>

              <h2>{getSectionHeading()}</h2>
            </div>

            <div className="section-meta">
              Preventive Maintenance
            </div>
          </div>

          <div className="schedule-heading">
            <h2>Equipment PM Schedule</h2>
            <p>
              Complete preventive maintenance schedule for all equipment
            </p>
          </div>

          <small>
            Phone/tablet: swipe horizontally. No
            equipment or PM data is hidden.
          </small>

          {canManageEquipment && (
            <div className="admin-actions">
              <button
                type="button"
                className="admin-button"
                onClick={() =>
                  openEquipmentForm()
                }
              >
                <Plus size={18} />
                Add Equipment
              </button>

              <label className="admin-button">
                <FileSpreadsheet size={18} />

                {importing
                  ? "Importing..."
                  : "Import Excel"}

                <input
                  type="file"
                  accept=".xlsx,.xls"
                  hidden
                  disabled={importing}
                  onChange={importExcel}
                />
              </label>
            </div>
          )}
        </div>

        <div className="schedule-search schedule-search-bar">
          <div className="schedule-search-box">
            <Search size={17} />
            <input
              type="text"
              value={scheduleSearch}
              onChange={(e) => setScheduleSearch(e.target.value)}
              placeholder="Search Equipment PM Schedule..."
            />
            {scheduleSearch && (
              <button
                type="button"
                className="schedule-search-clear"
                onClick={() => setScheduleSearch("")}
                aria-label="Clear schedule search"
              >
                <X size={15} />
              </button>
            )}
          </div>
          <div className="schedule-search-info">
            Showing <strong>{scheduleFiltered.length}</strong> of{" "}
            <strong>{filtered.length}</strong> equipment
          </div>
        </div>

        <div className="table-container tablewrap table-wrap equipment-schedule-table">
          <table>
            <thead>
              <tr>
                <th>S.NO</th>
                {sectionFilter === "All" && (
                  <th>SECTION</th>
                )}
                <th>DEPARTMENT</th>
                <th>INVENTORY NO</th>
                <th>LOCATION</th>
                <th>EQUIPMENT</th>
                <th>MODEL</th>
                <th>SERIAL NO</th>
                <th>MAKE</th>
                <th>CAMPUS</th>
                <th>CONTRACT</th>
                <th>PM 1</th>
                <th>PM 2</th>
                <th>PM 3</th>
                <th>PM 4</th>

                {canManageEquipment && (
                  <th>ACTIONS</th>
                )}
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={
                      (canManageEquipment ? 15 : 14) +
                      (sectionFilter === "All" ? 1 : 0)
                    }
                    className="empty"
                  >
                    Loading...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={
                      (canManageEquipment ? 15 : 14) +
                      (sectionFilter === "All" ? 1 : 0)
                    }
                    className="empty"
                  >
                    No data found.
                  </td>
                </tr>
              ) : (
                scheduleFiltered.map((e, index) => (
                  <EquipmentRow
                    key={e.id}
                    e={e}
                    index={index}
                    showSection={sectionFilter === "All"}
                    canManage={canManageThisEquipment(e)}
                    canUpdate={canUpdateThisPM(e)}
                    updatePM={updatePM}
                    markAll={markAll}
                    openEquipmentForm={
                      openEquipmentForm
                    }
                    deleteEquipment={
                      deleteEquipment
                    }
                    openPMDateEditor={
                      openPMDateEditor
                    }
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
      )}

      </div>

      {showEquipmentForm && (
        <div className="overlay">
          <div className="authbox equipment-form">
            <button
              className="close"
              onClick={() =>
                setShowEquipmentForm(false)
              }
            >
              <X />
            </button>

            <h2>
              {editingEquipment
                ? "Edit Equipment"
                : "Add Equipment"}
            </h2>

            <div className="equipment-fields">
              {isSuperAdmin ? (
                <select
                  value={equipmentForm.section}
                  onChange={(e) =>
                    updateEquipmentField(
                      "section",
                      e.target.value as Section
                    )
                  }
                >
                  <option value="HIGH_END_RADIOLOGY">
                    High-End & Radiology
                  </option>
                  <option value="LIFE_SUPPORT">
                    Life Support and Surgical
                  </option>
                  <option value="GENERAL_MONITORING">
                    General Monitoring
                  </option>
                </select>
              ) : (
                <input
                  value={getSectionLabel(
                    userSection ?? equipmentForm.section
                  )}
                  readOnly
                  disabled
                />
              )}

              <input
                value={equipmentForm.sno}
                onChange={(e) =>
                  updateEquipmentField(
                    "sno",
                    e.target.value
                  )
                }
                placeholder="S.NO"
                type="number"
              />

              <input
                value={equipmentForm.department}
                onChange={(e) =>
                  updateEquipmentField(
                    "department",
                    e.target.value
                  )
                }
                placeholder="Department"
              />

              <input
                value={equipmentForm.inventory_no}
                onChange={(e) =>
                  updateEquipmentField(
                    "inventory_no",
                    e.target.value
                  )
                }
                placeholder="Inventory No"
              />

              <input
                value={equipmentForm.location}
                onChange={(e) =>
                  updateEquipmentField(
                    "location",
                    e.target.value
                  )
                }
                placeholder="Location"
              />

              <input
                value={equipmentForm.equipment_name}
                onChange={(e) =>
                  updateEquipmentField(
                    "equipment_name",
                    e.target.value
                  )
                }
                placeholder="Equipment Name"
              />

              <input
                value={equipmentForm.model}
                onChange={(e) =>
                  updateEquipmentField(
                    "model",
                    e.target.value
                  )
                }
                placeholder="Model"
              />

              <input
                value={equipmentForm.serial_no}
                onChange={(e) =>
                  updateEquipmentField(
                    "serial_no",
                    e.target.value
                  )
                }
                placeholder="Serial No"
              />

              <input
                value={equipmentForm.make}
                onChange={(e) =>
                  updateEquipmentField(
                    "make",
                    e.target.value
                  )
                }
                placeholder="Make"
              />

              <input
                value={equipmentForm.campus}
                onChange={(e) =>
                  updateEquipmentField(
                    "campus",
                    e.target.value
                  )
                }
                placeholder="Campus"
              />

              <input
                value={equipmentForm.contract}
                onChange={(e) =>
                  updateEquipmentField(
                    "contract",
                    e.target.value
                  )
                }
                placeholder="Contract"
              />

              <select
                value={equipmentForm.working_status}
                onChange={(e) =>
                  updateEquipmentField(
                    "working_status",
                    e.target.value
                  )
                }
              >
                <option value="ACTIVE">Active</option>
                <option value="WORKING">Working</option>
                <option value="UNDER_REPAIR">Under Repair</option>
                <option value="DECOMMISSIONED">Decommissioned</option>
              </select>

              <label>
                PM 1 Date
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={equipmentForm.pm1_date}
                    disabled={equipmentForm.pm1_na}
                    onChange={(e) =>
                      setEquipmentForm({
                        ...equipmentForm,
                        pm1_date: e.target.value,
                        pm1_na: false,
                      })
                    }
                  />
                  <label className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      checked={equipmentForm.pm1_na}
                      onChange={(e) =>
                        setEquipmentForm({
                          ...equipmentForm,
                          pm1_na: e.target.checked,
                          pm1_date: e.target.checked ? "" : equipmentForm.pm1_date,
                        })
                      }
                    />
                    N/A
                  </label>
                </div>
              </label>

              <label>
                PM 2 Date
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={equipmentForm.pm2_date}
                    disabled={equipmentForm.pm2_na}
                    onChange={(e) =>
                      setEquipmentForm({
                        ...equipmentForm,
                        pm2_date: e.target.value,
                        pm2_na: false,
                      })
                    }
                  />
                  <label className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      checked={equipmentForm.pm2_na}
                      onChange={(e) =>
                        setEquipmentForm({
                          ...equipmentForm,
                          pm2_na: e.target.checked,
                          pm2_date: e.target.checked ? "" : equipmentForm.pm2_date,
                        })
                      }
                    />
                    N/A
                  </label>
                </div>
              </label>

              <label>
                PM 3 Date
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={equipmentForm.pm3_date}
                    disabled={equipmentForm.pm3_na}
                    onChange={(e) =>
                      setEquipmentForm({
                        ...equipmentForm,
                        pm3_date: e.target.value,
                        pm3_na: false,
                      })
                    }
                  />
                  <label className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      checked={equipmentForm.pm3_na}
                      onChange={(e) =>
                        setEquipmentForm({
                          ...equipmentForm,
                          pm3_na: e.target.checked,
                          pm3_date: e.target.checked ? "" : equipmentForm.pm3_date,
                        })
                      }
                    />
                    N/A
                  </label>
                </div>
              </label>

              <label>
                PM 4 Date
                <div className="flex items-center gap-2">
                  <input
                    type="date"
                    value={equipmentForm.pm4_date}
                    disabled={equipmentForm.pm4_na}
                    onChange={(e) =>
                      setEquipmentForm({
                        ...equipmentForm,
                        pm4_date: e.target.value,
                        pm4_na: false,
                      })
                    }
                  />
                  <label className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      checked={equipmentForm.pm4_na}
                      onChange={(e) =>
                        setEquipmentForm({
                          ...equipmentForm,
                          pm4_na: e.target.checked,
                          pm4_date: e.target.checked ? "" : equipmentForm.pm4_date,
                        })
                      }
                    />
                    N/A
                  </label>
                </div>
              </label>
            </div>

            <div className="actions">
              <button
                className="btn primary"
                onClick={saveEquipment}
              >
                <Save size={15} />
                Save
              </button>

              <button
                className="btn"
                onClick={() =>
                  setShowEquipmentForm(false)
                }
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {editingPM && (
        <div className="overlay">
          <div className="authbox">
            <button
              className="close"
              onClick={() => {
                setEditingPM(null);
                setPmDate("");
              }}
            >
              <X />
            </button>

            <h2>
              Edit PM {editingPM.pm_no} Date
            </h2>

            <label>
              Scheduled Date
            </label>

            <input
              type="date"
              value={pmDate}
              onChange={(e) =>
                setPmDate(e.target.value)
              }
            />

            <div className="actions">
              <button
                className="btn primary"
                onClick={savePMDate}
              >
                <Save size={15} />
                Save Date
              </button>

              <button
                className="btn"
                onClick={() => {
                  setEditingPM(null);
                  setPmDate("");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {authOpen && (
        <div className="overlay">
          <div className="authbox">
            <button
              className="close"
              onClick={() =>
                setAuthOpen(false)
              }
            >
              <X />
            </button>

            <h2>Sign in</h2>

            <form onSubmit={handleLogin}>
              <div className="login-methods">
                <button
                  type="button"
                  className={
                    loginType === "loginId"
                      ? "login-method active"
                      : "login-method"
                  }
                  onClick={() => {
                    setLoginType("loginId");
                    setError("");
                  }}
                >
                  Login ID
                </button>

                <button
                  type="button"
                  className={
                    loginType === "email"
                      ? "login-method active"
                      : "login-method"
                  }
                  onClick={() => {
                    setLoginType("email");
                    setError("");
                  }}
                >
                  Email
                </button>
              </div>

              {loginType === "loginId" ? (
                <div className="login-field">
                  <label htmlFor="loginId">Login ID</label>
                  <input
                    id="loginId"
                    type="text"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    placeholder="Enter Login ID"
                    autoComplete="username"
                    disabled={loading}
                  />
                </div>
              ) : (
                <div className="login-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    autoComplete="username"
                    disabled={loading}
                  />
                </div>
              )}

              <div className="login-field">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  disabled={loading}
                />
              </div>

              <div className="authmsg">
                {error || authMessage}
              </div>

              <div className="actions">
                <button
                  type="submit"
                  className="btn primary"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>

              <button
                type="button"
                className="btn"
                onClick={signUp}
              >
                Sign up
              </button>

              <button
                type="button"
                className="btn"
                onClick={resetPassword}
              >
                Reset password
              </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

function Stat({
  label,
  value,
  hint,
  icon,
  danger,
  warning,
  success,
  progress,
}: {
  label: string;
  value: string | number;
  hint: string;
  icon: React.ReactNode;
  danger?: boolean;
  warning?: boolean;
  success?: boolean;
  progress?: number;
}) {
  const statusClass = danger
    ? "kpi-danger"
    : warning
    ? "kpi-warning"
    : success
    ? "kpi-success"
    : "";

  return (
    <div className={`stat kpi-card ${statusClass}`}>
      <div className="statTop kpi-card-header">
        <span className="kpi-label">{label}</span>

        <i className="stat-card-icon kpi-card-icon">
          {icon}
        </i>
      </div>

      <strong
        className={`kpi-value ${
          danger
            ? "redText"
            : warning
            ? "orangeText"
            : success
            ? "greenText"
            : ""
          }`}
      >
        {value}
      </strong>

      <small className="kpi-subtitle">{hint}</small>

      {progress !== undefined && (
        <div className="kpi-progress" aria-hidden="true">
          <div
            className="kpi-progress-bar"
            style={{
              width: `${Math.min(100, Math.max(0, progress))}%`,
            }}
          />
        </div>
      )}
    </div>
  );
}

function ChartHeading({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="card-heading">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {icon}
    </div>
  );
}

function PerformanceRow({
  label,
  value,
  percentage,
}: {
  label: string;
  value: number;
  percentage: number;
}) {
  return (
    <div className="pm-performance-row">
      <div className="pm-performance-label">{label}</div>
      <div className="pm-performance-bar">
        <div
          className="pm-performance-fill"
          style={{ width: `${Math.min(100, Math.max(0, percentage))}%` }}
        />
      </div>
      <div className="pm-performance-value">
        {value}{percentage !== value ? `%` : ""}
      </div>
    </div>
  );
}

function SummaryItem({
  className,
  icon,
  value,
  label,
}: {
  className: string;
  icon: React.ReactNode;
  value: number;
  label: string;
}) {
  return (
    <div className={`summary-item ${className}`}>
      {icon}
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function WorkloadCard({
  className,
  icon,
  label,
  value,
  hint,
  onClick,
}: {
  className: string;
  icon: React.ReactNode;
  label: string;
  value: number;
  hint: string;
  onClick?: () => void;
}) {
  return (
    <button type="button" className={`workload-card ${className}`} onClick={onClick}>
      {icon}
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{hint}</small>
      </div>
      <ChevronRight size={20} />
    </button>
  );
}

function StatusPanel({
  title,
  subtitle,
  rows,
  status,
  onClose,
  updatePM,
}: {
  title: string;
  subtitle: string;
  rows: { equipment: Equipment; pm: PMSchedule }[];
  status: "Pending" | "Overdue";
  onClose: () => void;
  updatePM: (pm: PMSchedule, completed: boolean) => void;
}) {
  return (
    <section className="dashboard-card due-panel">
      <div className="card-heading">
        <div>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <button onClick={onClose} className="icon-button" aria-label="Close">
          <X size={18} />
        </button>
      </div>
      <div className="table-wrap due-soon-table">
        <table>
          <thead><tr><th>Equipment</th><th>Inventory No</th><th>PM</th><th>Due Date</th><th>Status</th><th>Action</th></tr></thead>
          <tbody>
            {rows.map(({ equipment, pm }) => (
              <tr key={pm.id}>
                <td><strong>{equipment.equipment_name}</strong></td>
                <td>{equipment.inventory_no}</td>
                <td>PM {pm.pm_no}</td>
                <td>{fmtDate(pm.scheduled_date)}</td>
                <td><span className={`status ${status.toLowerCase()}`}>{status}</span></td>
                <td>{status === "Pending" && <button className="btn btn-primary" onClick={() => updatePM(pm, true)}>Mark Done</button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Select({
  value,
  setValue,
  options,
  label,
  any,
}: {
  value: string;
  setValue: (x: string) => void;
  options: string[];
  label: string;
  any?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) =>
        setValue(e.target.value)
      }
      aria-label={label}
    >
      <option>
        {any ?? "All"}
      </option>

      {options.map((x) => (
        <option key={x}>{x}</option>
      ))}
    </select>
  );
}

function EquipmentRow({
  e,
  index,
  showSection,
  canManage,
  canUpdate,
  updatePM,
  markAll,
  openEquipmentForm,
  deleteEquipment,
  openPMDateEditor,
}: {
  e: Equipment;
  index: number;
  showSection: boolean;
  canManage: boolean;
  canUpdate: boolean;
  updatePM: (
    pm: PMSchedule,
    completed: boolean
  ) => void;
  markAll: (e: Equipment) => void;
  openEquipmentForm: (
    e?: Equipment
  ) => void;
  deleteEquipment: (id: string) => void;
  openPMDateEditor: (
    pm: PMSchedule
  ) => void;
}) {
  const pm = (n: number) =>
    (e.pm_schedules ?? []).find(
      (x) => x.pm_no === n
    );

  return (
    <tr>
      <td>{index + 1}</td>

      {showSection && (
        <td>
          {e.section
            ? getSectionLabel(e.section)
            : "-"}
        </td>
      )}

      <td>
        <b>{e.department}</b>
      </td>

      <td>{e.inventory_no}</td>

      <td>{e.location}</td>

      <td>
        <b>{e.equipment_name}</b>
      </td>

      <td>{e.model}</td>

      <td>{e.serial_no}</td>

      <td>{e.make}</td>

      <td>
        <span className="pill">
          {e.campus}
        </span>
      </td>

      <td>
        <span className="pill">
          {e.contract}
        </span>
      </td>

      {[1, 2, 3, 4].map((n) => (
        <td key={n}>
          <PMCell
            pm={pm(n)}
            updatePM={updatePM}
            canManage={canManage}
            canUpdate={canUpdate}
            openPMDateEditor={
              openPMDateEditor
            }
          />

          {n === 4 && canUpdate && (
            <button
              className="markAll"
              onClick={() =>
                markAll(e)
              }
            >
              Mark All Done
            </button>
          )}
        </td>
      ))}

      {canManage && (
        <td>
          <div className="row-actions">
            <button
              className="edit-button"
              onClick={() =>
                openEquipmentForm(e)
              }
            >
              <Pencil size={14} />
              Edit
            </button>

            <button
              className="delete-button"
              onClick={() =>
                deleteEquipment(e.id)
              }
            >
              <Trash2 size={14} />
              Delete
            </button>
          </div>
        </td>
      )}
    </tr>
  );
}

function PMCell({
  pm,
  updatePM,
  canManage,
  canUpdate,
  openPMDateEditor,
}: {
  pm?: PMSchedule;
  updatePM: (
    pm: PMSchedule,
    completed: boolean
  ) => void;
  canManage: boolean;
  canUpdate: boolean;
  openPMDateEditor: (
    pm: PMSchedule
  ) => void;
}) {
  if (!pm) {
    return <span>—</span>;
  }

  const s = getPMStatus(pm);

  if (pm.scheduled_date === null) {
    return (
      <div className="pmcell">
        <div className="pmdate">N/A</div>

        <span className="status">N/A</span>

        {canManage && (
          <button
            className="edit-button"
            onClick={() => openPMDateEditor(pm)}
          >
            <Pencil size={13} />
            Edit Date
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="pmcell">
      <div className="pmdate">
        {fmtDate(pm.scheduled_date)}
      </div>

      <span
        className={`status ${s.toLowerCase()}`}
      >
        {s}
      </span>

      {canUpdate && (s === "Done" ? (
        <button
          className="undo"
          onClick={() => updatePM(pm, false)}
        >
          Undo
        </button>
      ) : (
        <button
          className="mark"
          onClick={() => updatePM(pm, true)}
        >
          Mark Done
        </button>
      ))}

      {canManage && (
        <button
          className="edit-button"
          onClick={() =>
            openPMDateEditor(pm)
          }
        >
          <Pencil size={13} />
          Edit Date
        </button>
      )}
    </div>
  );
}

function getSectionLabel(section: string | null) {
  switch (section) {
    case "HIGH_END_RADIOLOGY":
      return "High-End & Radiology";
    case "LIFE_SUPPORT":
      return "Life Support and Surgical";
    case "GENERAL_MONITORING":
      return "General Monitoring";
    default:
      return "All Sections";
  }
}