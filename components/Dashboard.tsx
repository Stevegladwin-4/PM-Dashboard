"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Database,
  Download,
  FileSpreadsheet,
  LogIn,
  Pencil,
  Plus,
  RefreshCw,
  RotateCcw,
  Save,
  Search,
  Trash2,
  Upload,
  Wrench,
  X,
} from "lucide-react";
import * as XLSX from "xlsx";

import { createClient } from "@/lib/supabase-browser";
import { getPMStatus } from "@/lib/pm";
import type { Equipment, PMSchedule } from "@/lib/types";

const supabase = createClient();

const emptyStats = {
  Done: 0,
  Overdue: 0,
  Pending: 0,
  Scheduled: 0,
  "N/A": 0,
};

type EquipmentForm = {
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

export default function Dashboard() {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [search, setSearch] = useState("");
  const [campus, setCampus] = useState("All");
  const [department, setDepartment] = useState("All");
  const [contract, setContract] = useState("All");
  const [status, setStatus] = useState("Any status");
  const [pmNumber, setPmNumber] = useState("All");

  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState(true);

  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<string | null>(null);

  const [authOpen, setAuthOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authMessage, setAuthMessage] = useState("");

  const [showEquipmentForm, setShowEquipmentForm] = useState(false);
  const [editingEquipment, setEditingEquipment] =
    useState<Equipment | null>(null);

  const [equipmentForm, setEquipmentForm] =
    useState<EquipmentForm>(emptyEquipmentForm);

  const [importing, setImporting] = useState(false);

  const [editingPM, setEditingPM] = useState<PMSchedule | null>(null);
  const [pmDate, setPmDate] = useState("");

  async function loadUserRole() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setUserRole(null);
      return;
    }

    const { data } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .maybeSingle();

    setUserRole(data?.role ?? "viewer");
  }

  async function load() {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUserEmail(user?.email ?? null);

    if (!user) {
      setEquipment([]);
      setConnected(true);
      setLoading(false);
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

    setLoading(false);
  }

  useEffect(() => {
    load();
    loadUserRole();

    const channel = supabase
      .channel("pm-dashboard")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "pm_schedules",
        },
        load
      )
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "equipment",
        },
        load
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const allPMs = useMemo(
    () =>
      equipment
        .flatMap((e) => e.pm_schedules ?? [])
        .filter((pm) => pm.scheduled_date !== null),
    [equipment]
  );

  const summaryEquipment = useMemo(() => {
    const q = search.toLowerCase().trim();

    return equipment.filter((e) => {
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
      if (campus !== "All" && e.campus !== campus) return false;
      if (department !== "All" && e.department !== department) return false;
      if (contract !== "All" && e.contract !== contract) return false;

      return true;
    });
  }, [equipment, search, campus, department, contract]);

  const summaryPMs = useMemo(
    () =>
      allPMs.filter(
        (pm) =>
          summaryEquipment.some((e) =>
            (e.pm_schedules ?? []).some((item) => item.id === pm.id)
          ) &&
          (pmNumber === "All" || pm.pm_no === Number(pmNumber))
      ),
    [allPMs, summaryEquipment, pmNumber]
  );

  const counts = useMemo(() => {
    const c = { ...emptyStats };

    summaryPMs.forEach((pm) => {
      c[getPMStatus(pm)]++;
    });

    return c;
  }, [summaryPMs]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();

    return equipment.filter((e) => {
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
  }, [equipment, search, campus, department, contract, status, pmNumber]);

  const filteredPMs = useMemo(
    () =>
      filtered
        .flatMap((e) => e.pm_schedules ?? [])
        .filter((pm) => pm.scheduled_date !== null),
    [filtered]
  );

  const filteredCounts = useMemo(() => {
    const c = { ...emptyStats };

    filteredPMs.forEach((pm) => {
      c[getPMStatus(pm)]++;
    });

    return c;
  }, [filteredPMs]);

  const filteredCampuses = [
    ...new Set(
      filtered
        .map((e) => e.campus)
        .filter(
          (value): value is string => Boolean(value)
        )
    ),
  ].sort();

  const compliance = filteredPMs.length
    ? Math.round(
        (filteredCounts.Done / filteredPMs.length) * 100
      )
    : 0;

  const campuses = [
    ...new Set(
      equipment
        .map((e) => e.campus)
        .filter((value): value is string => Boolean(value))
    ),
  ].sort();

  const departments = [
    ...new Set(equipment.map((e) => e.department).filter(Boolean)),
  ].sort();

  const contracts = [
    ...new Set(
      equipment
        .map((e) => e.contract)
        .filter((value): value is string => Boolean(value))
    ),
  ].sort();

  async function updatePM(pm: PMSchedule, completed: boolean) {
    const response = await fetch(`/api/pm/${pm.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed,
      }),
    });

    if (!response.ok) {
      const data = await response.json();
      alert(data.error ?? "Could not update PM.");
      return;
    }

    await load();
  }

  async function markAll(e: Equipment) {
    const pending = (e.pm_schedules ?? []).filter(
      (pm) => pm.scheduled_date !== null && !pm.completed_date
    );

    for (const pm of pending) {
      await updatePM(pm, true);
    }

    await load();
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
      !equipmentForm.sno ||
      !equipmentForm.department ||
      !equipmentForm.inventory_no ||
      !equipmentForm.equipment_name
    ) {
      alert(
        "S.NO, Department, Inventory No and Equipment are required."
      );
      return;
    }

    const response = await fetch("/api/equipment", {
      method: editingEquipment ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        editingEquipment
          ? {
              ...equipmentForm,
              id: editingEquipment.id,
              pm_dates: {
                1: equipmentForm.pm1_na ? null : equipmentForm.pm1_date,
                2: equipmentForm.pm2_na ? null : equipmentForm.pm2_date,
                3: equipmentForm.pm3_na ? null : equipmentForm.pm3_date,
                4: equipmentForm.pm4_na ? null : equipmentForm.pm4_date,
              },
            }
          : {
              ...equipmentForm,
              pm_dates: {
                1: equipmentForm.pm1_na ? null : equipmentForm.pm1_date,
                2: equipmentForm.pm2_na ? null : equipmentForm.pm2_date,
                3: equipmentForm.pm3_na ? null : equipmentForm.pm3_date,
                4: equipmentForm.pm4_na ? null : equipmentForm.pm4_date,
              },
            }
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
        Department: e.department,
        "Inventory No": e.inventory_no,
        Location: e.location ?? "",
        Equipment: e.equipment_name,
        Model: e.model ?? "",
        "Serial No": e.serial_no ?? "",
        Make: e.make ?? "",
        Campus: e.campus ?? "",
        Contract: e.contract ?? "",

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
    setCampus("All");
    setDepartment("All");
    setContract("All");
    setStatus("Any status");
    setPmNumber("All");
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

  async function signIn() {
    setAuthMessage("");

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      setAuthMessage(error.message);
    } else {
      setAuthOpen(false);
      await load();
      await loadUserRole();
    }
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
    <main className="page">
      <header className="topbar">
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
          <button className="btn">
            <CalendarDays size={15} />
            As of <b>{fmtDate(new Date())}</b>
          </button>

          <button
            className="btn"
            onClick={exportExcel}
            title="Export Excel"
          >
            <FileSpreadsheet size={15} />
            Excel Export
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

      <div
        className={
          connected
            ? "banner ok"
            : "banner"
        }
      >
        <span>●</span>{" "}
        {connected
          ? "Live Supabase PostgreSQL + Realtime"
          : "Database is unavailable. Check .env.local and run supabase/schema.sql."}
      </div>

      <section className="stats">
        <Stat
          label="Total Equipment"
          value={equipment.length}
          hint={`${allPMs.length} active PMs`}
          icon={<Database />}
        />

        <Stat
          label="PM Overdue"
          value={filteredCounts.Overdue}
          hint="Past scheduled date"
          danger
          icon={<AlertTriangle />}
        />

        <Stat
          label="PM Due Soon"
          value={filteredCounts.Pending}
          hint="Within next 30 days"
          warning
          icon={<Clock3 />}
        />

        <Stat
          label="Compliance Rate"
          value={`${compliance}%`}
          hint={`${filteredCounts.Done} done / ${filteredPMs.length} scheduled`}
          success
          icon={<CheckCircle2 />}
        />
      </section>

      <section className="panel filters">
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

      <section className="charts">
        <div className="panel chart">
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

        <div className="panel chart">
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

      <section className="panel">
        <div className="tablehead">
          <h2>Equipment PM Schedule</h2>

          <p>
            {filtered.length} assets · PM 1–4 ·
            Individual Mark Done / Undo
          </p>

          <small>
            Phone/tablet: swipe horizontally. No
            equipment or PM data is hidden.
          </small>

          {userRole === "admin" && (
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

        <div className="tablewrap">
          <table>
            <thead>
              <tr>
                <th>S.NO</th>
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

                {userRole === "admin" && (
                  <th>ACTIONS</th>
                )}
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={
                      userRole === "admin"
                        ? 15
                        : 14
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
                      userRole === "admin"
                        ? 15
                        : 14
                    }
                    className="empty"
                  >
                    No data found.
                  </td>
                </tr>
              ) : (
                filtered.map((e) => (
                  <EquipmentRow
                    key={e.id}
                    e={e}
                    userRole={userRole}
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

            <h2>Supabase Auth</h2>

            <input
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Email"
            />

            <input
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              type="password"
              placeholder="Password"
            />

            <div className="authmsg">
              {authMessage}
            </div>

            <div className="actions">
              <button
                className="btn primary"
                onClick={signIn}
              >
                Sign in
              </button>

              <button
                className="btn"
                onClick={signUp}
              >
                Sign up
              </button>

              <button
                className="btn"
                onClick={resetPassword}
              >
                Reset password
              </button>
            </div>
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
}: {
  label: string;
  value: string | number;
  hint: string;
  icon: React.ReactNode;
  danger?: boolean;
  warning?: boolean;
  success?: boolean;
}) {
  return (
    <div className="stat">
      <div className="statTop">
        <span>{label}</span>

        <i
          className={
            danger
              ? "red"
              : warning
              ? "orange"
              : success
              ? "green"
              : ""
          }
        >
          {icon}
        </i>
      </div>

      <strong
        className={
          danger
            ? "redText"
            : warning
            ? "orangeText"
            : success
            ? "greenText"
            : ""
        }
      >
        {value}
      </strong>

      <small>{hint}</small>
    </div>
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
  userRole,
  updatePM,
  markAll,
  openEquipmentForm,
  deleteEquipment,
  openPMDateEditor,
}: {
  e: Equipment;
  userRole: string | null;
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
      <td>{e.sno}</td>

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
            userRole={userRole}
            openPMDateEditor={
              openPMDateEditor
            }
          />

          {n === 4 && (
            <button
              className="markAll"
              onClick={() =>
                markAll(e)
              }
            >
              ✓ Mark all PMs
            </button>
          )}
        </td>
      ))}

      {userRole === "admin" && (
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
  userRole,
  openPMDateEditor,
}: {
  pm?: PMSchedule;
  updatePM: (
    pm: PMSchedule,
    completed: boolean
  ) => void;
  userRole: string | null;
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

        {userRole === "admin" && (
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
        {pm.scheduled_date || "N/A"}
      </div>

      <span
        className={`status ${s.toLowerCase()}`}
      >
        {s}
      </span>

      {s === "Done" ? (
        <button
          className="undo"
          onClick={() =>
            updatePM(pm, false)
          }
        >
          ↶ Undo
        </button>
      ) : (
        <button
          className="mark"
          onClick={() =>
            updatePM(pm, true)
          }
        >
          ✓ Mark Done
        </button>
      )}

      {userRole === "admin" && (
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