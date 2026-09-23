"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  Activity,
  BarChart3,
  BadgeCheck,
  Building2,
  Database,
  Download,
  FileSpreadsheet,
  Layers,
  Pencil,
  Plus,
  Search,
  ShieldCheck,
  Trash2,
  X,
} from "lucide-react";
import * as XLSX from "xlsx";
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

import type { Equipment, Section, UserRole } from "@/lib/types";

type Props = {
  equipment: Equipment[];
  sectionFilter: string;
  userRole: UserRole | null;
  userSection: Section | null;
  canManageEquipment: boolean;
  importing: boolean;
  importExcel: (event: React.ChangeEvent<HTMLInputElement>) => void;
  openEquipmentForm: (equipment?: Equipment) => void;
  deleteEquipment: (id: string) => void;
};

function getSectionLabel(section: string | null) {
  switch (section) {
    case "HIGH_END_RADIOLOGY": return "High-End & Radiology";
    case "LIFE_SUPPORT": return "Life Support and Surgical";
    case "GENERAL_MONITORING": return "General Monitoring";
    default: return "All Sections";
  }
}

function Select({ value, setValue, options, label, any }: { value: string; setValue: (value: string) => void; options: string[]; label: string; any: string }) {
  return <div className="filter-field"><label>{label}</label><select value={value} onChange={(event) => setValue(event.target.value)}><option value="All">{any}</option>{options.map((option) => <option value={option} key={option}>{option}</option>)}</select></div>;
}

function ChartHeading({ title, subtitle, icon }: { title: string; subtitle: string; icon: ReactNode }) {
  return <div className="card-heading"><div><h2>{title}</h2><p>{subtitle}</p></div><span>{icon}</span></div>;
}

export default function EquipmentMasterDashboard({ equipment, sectionFilter, userRole, userSection: _userSection, canManageEquipment, importing, importExcel, openEquipmentForm, deleteEquipment }: Props) {
  const [masterSearch, setMasterSearch] = useState("");
  const [masterEquipmentFilter, setMasterEquipmentFilter] = useState("All");
  const [masterSectionFilter, setMasterSectionFilter] = useState("All");
  const [masterCampusFilter, setMasterCampusFilter] = useState("All");
  const [masterDepartmentFilter, setMasterDepartmentFilter] = useState("All");
  const [masterContractFilter, setMasterContractFilter] = useState("All");
  const [masterMakeFilter, setMasterMakeFilter] = useState("All");
  const [masterModelFilter, setMasterModelFilter] = useState("All");
  const [masterWorkingStatusFilter, setMasterWorkingStatusFilter] = useState("All");

  const options = useMemo(() => ({
    equipment: [...new Set(equipment.map((item) => item.equipment_name).filter(Boolean))].sort(),
    campus: [...new Set(equipment.map((item) => item.campus).filter((value): value is string => Boolean(value)))].sort(),
    department: [...new Set(equipment.map((item) => item.department).filter(Boolean))].sort(),
    contract: [...new Set(equipment.map((item) => item.contract).filter((value): value is string => Boolean(value)))].sort(),
    make: [...new Set(equipment.map((item) => item.make).filter((value): value is string => Boolean(value)))].sort(),
    model: [...new Set(equipment.map((item) => item.model).filter((value): value is string => Boolean(value)))].sort(),
    workingStatus: [...new Set(equipment.map((item) => item.working_status).filter((value): value is string => Boolean(value)))].sort(),
  }), [equipment]);

  const masterFiltered = useMemo(() => {
    const query = masterSearch.trim().toLowerCase();
    return equipment.filter((item) => {
      const searchable = [item.sno, item.section, item.department, item.inventory_no, item.location, item.equipment_name, item.model, item.serial_no, item.make, item.campus, item.contract, item.working_status].filter(Boolean).join(" ").toLowerCase();
      return (!query || searchable.includes(query))
        && (masterEquipmentFilter === "All" || item.equipment_name === masterEquipmentFilter)
        && (masterSectionFilter === "All" || item.section === masterSectionFilter)
        && (masterCampusFilter === "All" || item.campus === masterCampusFilter)
        && (masterDepartmentFilter === "All" || item.department === masterDepartmentFilter)
        && (masterContractFilter === "All" || item.contract === masterContractFilter)
        && (masterMakeFilter === "All" || item.make === masterMakeFilter)
        && (masterModelFilter === "All" || item.model === masterModelFilter)
        && (masterWorkingStatusFilter === "All" || String(item.working_status ?? "") === masterWorkingStatusFilter);
    });
  }, [equipment, masterSearch, masterEquipmentFilter, masterSectionFilter, masterCampusFilter, masterDepartmentFilter, masterContractFilter, masterMakeFilter, masterModelFilter, masterWorkingStatusFilter]);

  const masterTotal = masterFiltered.length;
  const masterActive = masterFiltered.filter((item) => ["ACTIVE", "WORKING"].includes(String(item.working_status ?? "").trim().toUpperCase())).length;
  const masterAMC = masterFiltered.filter((item) => String(item.contract ?? "").trim().toUpperCase().includes("AMC")).length;
  const masterWarranty = masterFiltered.filter((item) => String(item.contract ?? "").trim().toUpperCase().includes("WARRANTY")).length;

  const groupBy = (getKey: (item: Equipment) => string) => {
    const map = new Map<string, number>();
    masterFiltered.forEach((item) => {
      const key = getKey(item);
      map.set(key, (map.get(key) ?? 0) + 1);
    });
    return Array.from(map.entries());
  };

  const masterSectionData = useMemo(() => groupBy((item) => item.section ? getSectionLabel(item.section) : "N/A").map(([name, value]) => ({ name, value })), [masterFiltered]);
  const masterCampusData = useMemo(() => groupBy((item) => item.campus || "N/A").map(([name, value]) => ({ name, value })), [masterFiltered]);
  const masterDepartmentData = useMemo(() => groupBy((item) => item.department || "N/A").map(([name, value]) => ({ name, value })), [masterFiltered]);
  const masterContractData = useMemo(() => groupBy((item) => item.contract || "N/A").map(([name, value]) => ({ name, value })), [masterFiltered]);

  function clearFilters() {
    setMasterSearch(""); setMasterEquipmentFilter("All"); setMasterSectionFilter("All"); setMasterCampusFilter("All"); setMasterDepartmentFilter("All"); setMasterContractFilter("All"); setMasterMakeFilter("All"); setMasterModelFilter("All"); setMasterWorkingStatusFilter("All");
  }

  function exportMasterExcel() {
    const rows = masterFiltered.map((item, index) => ({
      "S.NO": index + 1,
      Section: getSectionLabel(item.section),
      Department: item.department ?? "",
      "Inventory No": item.inventory_no ?? "",
      Location: item.location ?? "",
      Equipment: item.equipment_name ?? "",
      Model: item.model ?? "",
      "Serial No": item.serial_no ?? "",
      Make: item.make ?? "",
      Campus: item.campus ?? "",
      Contract: item.contract ?? "",
      "Working Status": item.working_status ?? "",
      "PM1 Date": item.pm_schedules?.find((pm) => pm.pm_no === 1)?.scheduled_date ?? "",
      "PM2 Date": item.pm_schedules?.find((pm) => pm.pm_no === 2)?.scheduled_date ?? "",
      "PM3 Date": item.pm_schedules?.find((pm) => pm.pm_no === 3)?.scheduled_date ?? "",
      "PM4 Date": item.pm_schedules?.find((pm) => pm.pm_no === 4)?.scheduled_date ?? "",
    }));
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Master Equipment");
    XLSX.writeFile(workbook, "MASTER_EQUIPMENT_LIST.xlsx");
  }

  return <div className="master-dashboard">
    <div className="master-hero">
      <div className="master-hero-content"><div className="master-hero-icon"><Database size={22} /></div><div><span className="master-eyebrow">EQUIPMENT ASSET MANAGEMENT</span><h1>Equipment Master Dashboard</h1><p>Complete biomedical equipment inventory and asset overview</p></div></div>
      <div className="master-hero-actions"><div className="master-record-count"><span>RECORDS</span><strong>{masterTotal}</strong></div>{canManageEquipment && <button className="master-add-button" type="button" onClick={() => openEquipmentForm()}><Plus size={16} /> Add Equipment</button>}</div>
    </div>

    <section className="panel master-filter-panel">
      <div className="master-filter-header"><div><span className="filter-eyebrow">INVENTORY FILTERS</span><h2>Filter Equipment</h2><p>Refine the master inventory by asset attributes</p></div><button className="master-clear-filter" type="button" onClick={clearFilters}><X size={14} /> Clear filters</button></div>
      <div className="master-filter-grid">
        <div className="master-search"><Search size={16} /><input value={masterSearch} onChange={(event) => setMasterSearch(event.target.value)} placeholder="Search equipment, inventory, serial, location..." />{masterSearch && <button type="button" onClick={() => setMasterSearch("")} aria-label="Clear search"><X size={14} /></button>}</div>
        <Select value={masterEquipmentFilter} setValue={setMasterEquipmentFilter} options={options.equipment} label="Equipment" any="All Equipment" />
        {(userRole === "SUPER_ADMIN" || userRole === "SUPER_VIEWER") && <Select value={masterSectionFilter} setValue={setMasterSectionFilter} options={["HIGH_END_RADIOLOGY", "LIFE_SUPPORT", "GENERAL_MONITORING"]} label="Section" any="All Sections" />}
        <Select value={masterCampusFilter} setValue={setMasterCampusFilter} options={options.campus} label="Campus" any="All Campuses" />
        <Select value={masterDepartmentFilter} setValue={setMasterDepartmentFilter} options={options.department} label="Department" any="All Departments" />
        <Select value={masterContractFilter} setValue={setMasterContractFilter} options={options.contract} label="Contract" any="All Contracts" />
        <Select value={masterMakeFilter} setValue={setMasterMakeFilter} options={options.make} label="Make" any="All Makes" />
        <Select value={masterModelFilter} setValue={setMasterModelFilter} options={options.model} label="Model" any="All Models" />
        <Select value={masterWorkingStatusFilter} setValue={setMasterWorkingStatusFilter} options={options.workingStatus} label="Working Status" any="All Status" />
      </div>
    </section>

    <section className="master-kpi-grid">
      <div className="master-kpi master-kpi-total"><div className="master-kpi-top"><div className="master-kpi-icon"><Database size={20} /></div><span>TOTAL EQUIPMENT</span></div><strong>{masterTotal}</strong><small>Equipment in master inventory</small></div>
      <div className="master-kpi master-kpi-active"><div className="master-kpi-top"><div className="master-kpi-icon"><Activity size={20} /></div><span>ACTIVE EQUIPMENT</span></div><strong>{masterActive}</strong><small>Currently working equipment</small></div>
      <div className="master-kpi master-kpi-amc"><div className="master-kpi-top"><div className="master-kpi-icon"><ShieldCheck size={20} /></div><span>UNDER AMC</span></div><strong>{masterAMC}</strong><small>Equipment under AMC</small></div>
      <div className="master-kpi master-kpi-warranty"><div className="master-kpi-top"><div className="master-kpi-icon"><BadgeCheck size={20} /></div><span>UNDER WARRANTY</span></div><strong>{masterWarranty}</strong><small>Equipment under warranty</small></div>
    </section>

    <section className="analytics-section master-analytics-section">
      <div className="master-analytics-grid">
        <div className="dashboard-card chart-card master-chart-card">
          <ChartHeading title="Equipment by Section" subtitle="Biomedical equipment distribution" icon={<Layers size={20} />} />
          <div className="chart-box master-chart-box">
            <ResponsiveContainer width="100%" height={230}>
              <BarChart data={masterSectionData} margin={{ top: 10, right: 5, left: -15, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 8 }} interval={0} tickLine={false} />
                <YAxis allowDecimals={false} tick={{ fontSize: 9 }} tickLine={false} />
                <Tooltip />
                <Bar dataKey="value" name="Equipment" fill="#2563eb" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dashboard-card chart-card master-chart-card">
          <ChartHeading title="Equipment by Campus" subtitle="Campus-wise equipment distribution" icon={<Building2 size={20} />} />
          <div className="chart-box master-chart-box">
            <ResponsiveContainer width="100%" height={230}>
              <BarChart data={masterCampusData} margin={{ top: 10, right: 5, left: -15, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 8 }} interval={0} tickLine={false} />
                <YAxis allowDecimals={false} tick={{ fontSize: 9 }} tickLine={false} />
                <Tooltip />
                <Bar dataKey="value" name="Equipment" fill="#16a34a" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dashboard-card chart-card master-chart-card">
          <ChartHeading title="Equipment by Department" subtitle="Department-wise equipment distribution" icon={<BarChart3 size={20} />} />
          <div className="chart-box master-chart-box">
            <ResponsiveContainer width="100%" height={230}>
              <BarChart data={masterDepartmentData} margin={{ top: 10, right: 5, left: -15, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 8 }} interval={0} tickLine={false} />
                <YAxis allowDecimals={false} tick={{ fontSize: 9 }} tickLine={false} />
                <Tooltip />
                <Bar dataKey="value" name="Equipment" fill="#7c3aed" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dashboard-card chart-card master-chart-card">
          <ChartHeading title="Contract Distribution" subtitle="Equipment contract coverage" icon={<ShieldCheck size={20} />} />
          <div className="chart-box master-chart-box">
            <ResponsiveContainer width="100%" height={230}>
              <RechartsPieChart>
                <Pie data={masterContractData} dataKey="value" nameKey="name" cx="50%" cy="45%" innerRadius={52} outerRadius={78} paddingAngle={3}>
                  {masterContractData.map((_, index) => (
                    <Cell key={`master-contract-${index}`} fill={["#2563eb", "#16a34a", "#f59e0b", "#7c3aed", "#dc2626", "#64748b"][index % 6]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={25} wrapperStyle={{ fontSize: "9px" }} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>

    <section className="master-table-card">
      <div className="master-table-header"><div className="master-table-title"><div className="master-table-title-icon"><Database size={19} /></div><div><h2>Master Equipment List</h2><p>Complete biomedical equipment inventory</p></div></div><div className="master-table-actions">{canManageEquipment && <><button className="master-table-action primary" type="button" onClick={() => openEquipmentForm()}><Plus size={14} /> Add</button><label className="master-table-action"><FileSpreadsheet size={14} /> {importing ? "Importing..." : "Import"}<input type="file" accept=".xlsx,.xls" hidden disabled={importing} onChange={importExcel} /></label></>}<button className="master-table-action" type="button" onClick={exportMasterExcel}><Download size={14} /> Export</button></div></div>
      <div className="master-table-search"><div className="master-table-search-inner"><Search size={16} /><input value={masterSearch} onChange={(event) => setMasterSearch(event.target.value)} placeholder="Search Master Equipment List..." />{masterSearch && <button type="button" onClick={() => setMasterSearch("")} aria-label="Clear search"><X size={14} /></button>}</div></div>
      <div className="master-table-wrap"><table><thead><tr><th>S.NO</th><th>SECTION</th><th>DEPARTMENT</th><th>INVENTORY NO</th><th>LOCATION</th><th>EQUIPMENT</th><th>MODEL</th><th>SERIAL NO</th><th>MAKE</th><th>CAMPUS</th><th>CONTRACT</th><th>WORKING STATUS</th>{canManageEquipment && <th>ACTIONS</th>}</tr></thead><tbody>
        {masterFiltered.map((item, index) => <tr key={item.id}><td>{index + 1}</td><td><strong className="master-table-primary">{getSectionLabel(item.section)}</strong></td><td>{item.department || "N/A"}</td><td>{item.inventory_no || "N/A"}</td><td>{item.location || "N/A"}</td><td><strong className="master-table-primary">{item.equipment_name || "N/A"}</strong>{item.model && <div className="master-table-secondary">{item.model}</div>}</td><td>{item.model || "N/A"}</td><td>{item.serial_no || "N/A"}</td><td>{item.make || "N/A"}</td><td>{item.campus || "N/A"}</td><td>{item.contract || "N/A"}</td><td><span className={`master-status ${String(item.working_status ?? "").toUpperCase() === "ACTIVE" ? "" : "inactive"}`}>{item.working_status || "N/A"}</span></td>{canManageEquipment && <td><div className="master-row-actions"><button className="master-row-button" type="button" title="Edit equipment" onClick={() => openEquipmentForm(item)}><Pencil size={14} /></button><button className="master-row-button delete" type="button" title="Delete equipment" onClick={() => deleteEquipment(item.id)}><Trash2 size={14} /></button></div></td>}</tr>)}
        {!masterFiltered.length && <tr><td colSpan={canManageEquipment ? 13 : 12} className="empty">No equipment found.</td></tr>}
      </tbody></table></div>
    </section>
  </div>;
}
