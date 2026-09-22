(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Dashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-check.js [app-client] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.js [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.js [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.js [app-client] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorCog$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor-cog.js [app-client] (ecmascript) <export default as MonitorCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript) <export default as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/xlsx/xlsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2d$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase-browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/pm.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const emptyStats = {
    Done: 0,
    Overdue: 0,
    Pending: 0,
    Scheduled: 0,
    "N/A": 0
};
const emptyEquipmentForm = {
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
    pm4_na: false
};
function fmtDate(value) {
    if (!value) return "N/A";
    return new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    }).format(value instanceof Date ? value : new Date(`${value}T00:00:00`));
}
function cleanDate(value) {
    if (!value) return "";
    if (value instanceof Date) {
        return value.toISOString().slice(0, 10);
    }
    if (typeof value === "number") {
        const date = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SSF"].parse_date_code(value);
        if (date) {
            return `${date.y}-${String(date.m).padStart(2, "0")}-${String(date.d).padStart(2, "0")}`;
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
function excelValue(row, names) {
    const keys = Object.keys(row);
    for (const name of names){
        const found = keys.find((key)=>key.trim().toLowerCase().replace(/[ .-]+/g, "_") === name.toLowerCase().replace(/[ .-]+/g, "_"));
        if (found !== undefined) {
            return row[found];
        }
    }
    return "";
}
function Dashboard() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [equipment, setEquipment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [equipmentFilter, setEquipmentFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [sectionFilter, setSectionFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [campus, setCampus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [department, setDepartment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [contract, setContract] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Any status");
    const [pmNumber, setPmNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [scheduleSearch, setScheduleSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [dataLoading, setDataLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [connected, setConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userRole, setUserRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userSection, setUserSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [authOpen, setAuthOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loginType, setLoginType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("loginId");
    const [loginId, setLoginId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [authMessage, setAuthMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showUserManagement, setShowUserManagement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newUser, setNewUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        login_id: "",
        email: "",
        password: "",
        role: "technician",
        section: "HIGH_END_RADIOLOGY"
    });
    const [creatingUser, setCreatingUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userMessage, setUserMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showEquipmentForm, setShowEquipmentForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDueSoon, setShowDueSoon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showOverdue, setShowOverdue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingEquipment, setEditingEquipment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [equipmentForm, setEquipmentForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(emptyEquipmentForm);
    const [importing, setImporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingPM, setEditingPM] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pmDate, setPmDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const isSuperAdmin = userRole === "SUPER_ADMIN";
    const isSuperViewer = userRole === "SUPER_VIEWER";
    const isSectionAdmin = userRole === "section_admin";
    const isTechnician = userRole === "technician";
    const canManageEquipment = isSuperAdmin || isSectionAdmin;
<<<<<<< HEAD
    const canUpdatePM = isSuperAdmin || isTechnician;
=======
    const canUpdatePM = isSuperAdmin || isSectionAdmin || isTechnician;
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
    function canAccessEquipment(item) {
        if (isSuperAdmin || isSuperViewer) {
            return true;
        }
        return Boolean(userSection && item.section && item.section === userSection);
    }
    function canManageThisEquipment(item) {
        if (isSuperAdmin) {
            return true;
        }
        return isSectionAdmin && userSection !== null && item.section === userSection;
    }
    function canUpdateThisPM(item) {
        if (isSuperAdmin) {
            return true;
        }
<<<<<<< HEAD
        return isTechnician && userSection !== null && item.section === userSection;
=======
        return (isSectionAdmin || isTechnician) && userSection !== null && item.section === userSection;
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
    }
    const getSectionHeading = ()=>{
        if (userRole === "SUPER_ADMIN" || userRole === "SUPER_VIEWER") {
            return getSectionLabel(sectionFilter).toUpperCase();
        }
        return userSection ? getSectionLabel(userSection).toUpperCase() : "SECTION";
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
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || "Failed to create user");
            }
            setUserMessage(`User ${newUser.login_id} created successfully`);
            setNewUser({
                login_id: "",
                email: "",
                password: "",
                role: "technician",
                section: "HIGH_END_RADIOLOGY"
            });
        } catch (error) {
            setUserMessage(error instanceof Error ? error.message : "Failed to create user");
        } finally{
            setCreatingUser(false);
        }
    }
    async function loadUserRole() {
        const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2d$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        if (!user) {
            setUserEmail("");
            setUserRole(null);
            setUserSection(null);
            return;
        }
        setUserEmail(user.email ?? "");
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2d$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("user_roles").select("role, section").eq("user_id", user.id).maybeSingle();
        if (error) {
            console.error("Failed to load user role:", error);
            setUserRole(null);
            setUserSection(null);
            return;
        }
        setUserRole(data?.role ?? null);
        setUserSection(data?.section ?? null);
    }
    async function load() {
        setDataLoading(true);
        const { data: { user } } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2d$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
        setUserEmail(user?.email ?? null);
        if (!user) {
            setEquipment([]);
            setConnected(true);
            setDataLoading(false);
            return;
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2d$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("equipment").select("*, pm_schedules(*)").order("sno");
        if (error) {
            console.error(error);
            setConnected(false);
            setEquipment([]);
        } else {
            setConnected(true);
            setEquipment(data ?? []);
        }
        setDataLoading(false);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            load();
            loadUserRole();
            const channel = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2d$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].channel("pm-dashboard").on("postgres_changes", {
                event: "*",
                schema: "public",
                table: "pm_schedules"
            }, load).on("postgres_changes", {
                event: "*",
                schema: "public",
                table: "equipment"
            }, load).subscribe();
            return ({
                "Dashboard.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2d$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].removeChannel(channel);
                }
            })["Dashboard.useEffect"];
        }
    }["Dashboard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            if (userRole !== "SUPER_ADMIN" && userRole !== "SUPER_VIEWER" && userSection) {
                setSectionFilter(userSection);
            }
        }
    }["Dashboard.useEffect"], [
        userRole,
        userSection
    ]);
    const sectionScopedEquipment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[sectionScopedEquipment]": ()=>{
            if (userRole === "SUPER_ADMIN" || userRole === "SUPER_VIEWER") {
                if (sectionFilter === "All") {
                    return equipment;
                }
                return equipment.filter({
                    "Dashboard.useMemo[sectionScopedEquipment]": (e)=>e.section === sectionFilter
                }["Dashboard.useMemo[sectionScopedEquipment]"]);
            }
            if (userSection) {
                return equipment.filter({
                    "Dashboard.useMemo[sectionScopedEquipment]": (e)=>e.section === userSection
                }["Dashboard.useMemo[sectionScopedEquipment]"]);
            }
            return [];
        }
    }["Dashboard.useMemo[sectionScopedEquipment]"], [
        equipment,
        sectionFilter,
        userRole,
        userSection
    ]);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[filtered]": ()=>{
            const q = search.toLowerCase().trim();
            return sectionScopedEquipment.filter({
                "Dashboard.useMemo[filtered]": (e)=>{
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
                        e.contract
                    ].join(" ").toLowerCase();
                    if (q && !text.includes(q)) return false;
                    if (equipmentFilter !== "All" && e.equipment_name !== equipmentFilter) {
                        return false;
                    }
                    if (campus !== "All" && e.campus !== campus) return false;
                    if (department !== "All" && e.department !== department) return false;
                    if (contract !== "All" && e.contract !== contract) return false;
                    const activePMs = (e.pm_schedules ?? []).filter({
                        "Dashboard.useMemo[filtered].activePMs": (pm)=>pm.scheduled_date !== null
                    }["Dashboard.useMemo[filtered].activePMs"]);
                    if (pmNumber !== "All") {
                        const selectedPM = activePMs.find({
                            "Dashboard.useMemo[filtered].selectedPM": (pm)=>pm.pm_no === Number(pmNumber)
                        }["Dashboard.useMemo[filtered].selectedPM"]);
                        if (!selectedPM) return false;
                        if (status !== "Any status" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(selectedPM) !== status) {
                            return false;
                        }
                    } else if (status !== "Any status" && !activePMs.some({
                        "Dashboard.useMemo[filtered]": (pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === status
                    }["Dashboard.useMemo[filtered]"])) {
                        return false;
                    }
                    return true;
                }
            }["Dashboard.useMemo[filtered]"]);
        }
    }["Dashboard.useMemo[filtered]"], [
        sectionScopedEquipment,
        search,
        equipmentFilter,
        campus,
        department,
        contract,
        status,
        pmNumber
    ]);
    const scheduleFiltered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[scheduleFiltered]": ()=>{
            const q = scheduleSearch.toLowerCase().trim();
            if (!q) {
                return filtered;
            }
            return filtered.filter({
                "Dashboard.useMemo[scheduleFiltered]": (e)=>{
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
                        e.contract
                    ].filter(Boolean).join(" ").toLowerCase();
                    return searchableText.includes(q);
                }
            }["Dashboard.useMemo[scheduleFiltered]"]);
        }
    }["Dashboard.useMemo[scheduleFiltered]"], [
        filtered,
        scheduleSearch
    ]);
    const pmStatusStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[pmStatusStats]": ()=>{
            const pms = filtered.flatMap({
                "Dashboard.useMemo[pmStatusStats].pms": (e)=>(e.pm_schedules ?? []).filter({
                        "Dashboard.useMemo[pmStatusStats].pms": (pm)=>pm.scheduled_date !== null
                    }["Dashboard.useMemo[pmStatusStats].pms"])
            }["Dashboard.useMemo[pmStatusStats].pms"]);
            return {
                Done: pms.filter({
                    "Dashboard.useMemo[pmStatusStats]": (pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Done"
                }["Dashboard.useMemo[pmStatusStats]"]).length,
                Overdue: pms.filter({
                    "Dashboard.useMemo[pmStatusStats]": (pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Overdue"
                }["Dashboard.useMemo[pmStatusStats]"]).length,
                Pending: pms.filter({
                    "Dashboard.useMemo[pmStatusStats]": (pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Pending"
                }["Dashboard.useMemo[pmStatusStats]"]).length,
                Scheduled: pms.filter({
                    "Dashboard.useMemo[pmStatusStats]": (pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Scheduled"
                }["Dashboard.useMemo[pmStatusStats]"]).length
            };
        }
    }["Dashboard.useMemo[pmStatusStats]"], [
        filtered
    ]);
    const pmCounters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[pmCounters]": ()=>{
            const pms = filtered.flatMap({
                "Dashboard.useMemo[pmCounters].pms": (e)=>(e.pm_schedules ?? []).filter({
                        "Dashboard.useMemo[pmCounters].pms": (pm)=>pm.scheduled_date !== null
                    }["Dashboard.useMemo[pmCounters].pms"])
            }["Dashboard.useMemo[pmCounters].pms"]);
            const dueSoon = pms.filter({
                "Dashboard.useMemo[pmCounters]": (pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Pending"
            }["Dashboard.useMemo[pmCounters]"]).length;
            const overdue = pms.filter({
                "Dashboard.useMemo[pmCounters]": (pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Overdue"
            }["Dashboard.useMemo[pmCounters]"]).length;
            return {
                dueSoon,
                overdue,
                yetToBeDone: dueSoon + overdue
            };
        }
    }["Dashboard.useMemo[pmCounters]"], [
        filtered
    ]);
    const filteredPMs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[filteredPMs]": ()=>filtered.flatMap({
                "Dashboard.useMemo[filteredPMs]": (e)=>(e.pm_schedules ?? []).filter({
                        "Dashboard.useMemo[filteredPMs]": (pm)=>pm.scheduled_date !== null
                    }["Dashboard.useMemo[filteredPMs]"])
            }["Dashboard.useMemo[filteredPMs]"])
    }["Dashboard.useMemo[filteredPMs]"], [
        filtered
    ]);
    const filteredCounts = {
        ...pmStatusStats,
        total: pmStatusStats.Done + pmStatusStats.Overdue + pmStatusStats.Pending + pmStatusStats.Scheduled,
        NA: filtered.reduce((total, e)=>total + (e.pm_schedules ?? []).filter((pm)=>pm.scheduled_date === null).length, 0)
    };
    const counts = pmStatusStats;
    const allPMs = filteredPMs;
    const overallCompliance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[overallCompliance]": ()=>{
            const pms = filtered.flatMap({
                "Dashboard.useMemo[overallCompliance].pms": (e)=>(e.pm_schedules ?? []).filter({
                        "Dashboard.useMemo[overallCompliance].pms": (pm)=>pm.scheduled_date !== null
                    }["Dashboard.useMemo[overallCompliance].pms"])
            }["Dashboard.useMemo[overallCompliance].pms"]);
            const done = pms.filter({
                "Dashboard.useMemo[overallCompliance]": (pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Done"
            }["Dashboard.useMemo[overallCompliance]"]).length;
            return pms.length > 0 ? Math.round(done / pms.length * 100) : 0;
        }
    }["Dashboard.useMemo[overallCompliance]"], [
        filtered
    ]);
    const complianceDone = pmStatusStats.Done;
    const complianceTotal = pmStatusStats.Done + pmStatusStats.Overdue + pmStatusStats.Pending + pmStatusStats.Scheduled;
    const monthlyCompliance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[monthlyCompliance]": ()=>{
            const now = new Date();
            const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
            const nextMonthStart = new Date(now.getFullYear(), now.getMonth() + 1, 1);
            const monthPMs = filtered.flatMap({
                "Dashboard.useMemo[monthlyCompliance].monthPMs": (e)=>(e.pm_schedules ?? []).filter({
                        "Dashboard.useMemo[monthlyCompliance].monthPMs": (pm)=>{
                            if (!pm.scheduled_date) return false;
                            const scheduled = new Date(`${pm.scheduled_date}T00:00:00`);
                            return scheduled >= monthStart && scheduled < nextMonthStart;
                        }
                    }["Dashboard.useMemo[monthlyCompliance].monthPMs"])
            }["Dashboard.useMemo[monthlyCompliance].monthPMs"]);
            const done = monthPMs.filter({
                "Dashboard.useMemo[monthlyCompliance]": (pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Done"
            }["Dashboard.useMemo[monthlyCompliance]"]).length;
            return {
                done,
                total: monthPMs.length,
                compliance: monthPMs.length > 0 ? Math.round(done / monthPMs.length * 100) : 0
            };
        }
    }["Dashboard.useMemo[monthlyCompliance]"], [
        filtered
    ]);
    const filteredCampuses = [
        ...new Set(filtered.map((e)=>e.campus).filter((value)=>Boolean(value)))
    ].sort();
    const compliancePercentage = overallCompliance;
    const dueSoonRows = filtered.flatMap((equipment)=>(equipment.pm_schedules ?? []).map((pm)=>({
                equipment,
                pm
            }))).filter(({ pm })=>pm.scheduled_date !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Pending").sort((a, b)=>new Date(`${a.pm.scheduled_date}T00:00:00`).getTime() - new Date(`${b.pm.scheduled_date}T00:00:00`).getTime());
    const overdueRows = filtered.flatMap((equipment)=>(equipment.pm_schedules ?? []).map((pm)=>({
                equipment,
                pm
            }))).filter(({ pm })=>pm.scheduled_date !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Overdue").sort((a, b)=>new Date(`${a.pm.scheduled_date}T00:00:00`).getTime() - new Date(`${b.pm.scheduled_date}T00:00:00`).getTime());
    const campusPerformance = filteredCampuses.map((campusName)=>{
        const campusPMs = filtered.filter((e)=>e.campus === campusName).flatMap((e)=>e.pm_schedules ?? []).filter((pm)=>pm.scheduled_date !== null);
        const done = campusPMs.filter((pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Done").length;
        return {
            name: campusName,
            total: campusPMs.length,
            percentage: campusPMs.length ? Math.round(done / campusPMs.length * 100) : 0
        };
    });
    const departmentPerformance = [
        ...new Set(filtered.map((e)=>e.department).filter(Boolean))
    ].map((departmentName)=>{
        const departmentPMs = filtered.filter((e)=>e.department === departmentName).flatMap((e)=>e.pm_schedules ?? []).filter((pm)=>pm.scheduled_date !== null);
        return {
            name: departmentName,
            total: departmentPMs.length,
            done: departmentPMs.filter((pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Done").length
        };
    });
    const pmDistribution = [
        1,
        2,
        3,
        4
    ].map((pmNo)=>({
            name: `PM ${pmNo}`,
            total: filteredPMs.filter((pm)=>pm.pm_no === pmNo).length,
            done: filteredPMs.filter((pm)=>pm.pm_no === pmNo && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Done").length
        }));
    const monthlyTrend = Array.from({
        length: 6
    }, (_, index)=>{
        const date = new Date();
        date.setDate(1);
        date.setMonth(date.getMonth() - (5 - index));
        const month = date.toISOString().slice(0, 7);
        const value = filteredPMs.filter((pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Done" && pm.completed_date?.startsWith(month)).length;
        return {
            name: date.toLocaleDateString("en-US", {
                month: "short"
            }),
            value,
            percentage: value ? Math.round(value / Math.max(1, filteredCounts.Done) * 100) : 0
        };
    });
    const pmStatusData = [
        {
            name: "Done",
            value: filteredCounts.Done
        },
        {
            name: "Due Soon",
            value: filteredCounts.Pending
        },
        {
            name: "Overdue",
            value: filteredCounts.Overdue
        },
        {
            name: "Scheduled",
            value: filteredCounts.Scheduled
        }
    ];
    const campusPMData = filteredCampuses.map((campusName)=>{
        const pms = filtered.filter((e)=>e.campus === campusName).flatMap((e)=>e.pm_schedules ?? []).filter((pm)=>pm.scheduled_date !== null);
        return {
            campus: campusName,
            Done: pms.filter((pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Done").length,
            "Due Soon": pms.filter((pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Pending").length,
            Overdue: pms.filter((pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Overdue").length,
            Scheduled: pms.filter((pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Scheduled").length
        };
    });
    const departmentPMData = departmentPerformance.map((item)=>{
        const pms = filtered.filter((e)=>e.department === item.name).flatMap((e)=>e.pm_schedules ?? []).filter((pm)=>pm.scheduled_date !== null);
        return {
            department: item.name,
            Done: pms.filter((pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Done").length,
            "Due Soon": pms.filter((pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Pending").length,
            Overdue: pms.filter((pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Overdue").length,
            Scheduled: pms.filter((pm)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Scheduled").length
        };
    });
    const campusComplianceData = campusPerformance.map((item)=>({
            campus: item.name,
            compliance: item.percentage
        }));
    const campuses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[campuses]": ()=>Array.from(new Set(sectionScopedEquipment.map({
                "Dashboard.useMemo[campuses]": (e)=>e.campus
            }["Dashboard.useMemo[campuses]"]).filter({
                "Dashboard.useMemo[campuses]": (value)=>Boolean(value)
            }["Dashboard.useMemo[campuses]"]))).sort()
    }["Dashboard.useMemo[campuses]"], [
        sectionScopedEquipment
    ]);
    const departments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[departments]": ()=>Array.from(new Set(sectionScopedEquipment.map({
                "Dashboard.useMemo[departments]": (e)=>e.department
            }["Dashboard.useMemo[departments]"]).filter(Boolean))).sort()
    }["Dashboard.useMemo[departments]"], [
        sectionScopedEquipment
    ]);
    const contracts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[contracts]": ()=>Array.from(new Set(sectionScopedEquipment.map({
                "Dashboard.useMemo[contracts]": (e)=>e.contract
            }["Dashboard.useMemo[contracts]"]).filter({
                "Dashboard.useMemo[contracts]": (value)=>Boolean(value)
            }["Dashboard.useMemo[contracts]"]))).sort()
    }["Dashboard.useMemo[contracts]"], [
        sectionScopedEquipment
    ]);
    const equipmentNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Dashboard.useMemo[equipmentNames]": ()=>Array.from(new Set(sectionScopedEquipment.map({
                "Dashboard.useMemo[equipmentNames]": (e)=>e.equipment_name
            }["Dashboard.useMemo[equipmentNames]"]).filter(Boolean))).sort()
    }["Dashboard.useMemo[equipmentNames]"], [
        sectionScopedEquipment
    ]);
<<<<<<< HEAD
    async function updatePM(pm, completed) {
        if (!canUpdatePM) {
            return;
        }
        const response = await fetch(`/api/pm/${pm.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                completed
            })
        });
        if (!response.ok) {
            const data = await response.json();
            alert(data.error ?? "Could not update PM.");
            return;
        }
        await load();
    }
    async function markAll(e) {
        if (!canUpdateThisPM(e)) {
            return;
        }
        const pending = (e.pm_schedules ?? []).filter((pm)=>pm.scheduled_date !== null && !pm.completed_date);
        for (const pm of pending){
            await updatePM(pm, true);
        }
        await load();
=======
    async function updatePM(pm, markDone) {
        try {
            const equipmentItem = equipment.find((item)=>item.pm_schedules?.some((schedule)=>schedule.id === pm.id));
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
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    completed_date: markDone ? new Date().toISOString().split("T")[0] : null
                })
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || "Failed to update PM");
            }
            await load();
        } catch (error) {
            console.error("PM UPDATE ERROR:", error);
            alert(error instanceof Error ? error.message : "Failed to update PM");
        }
    }
    async function markAll(e) {
        if (!canUpdateThisPM(e)) {
            alert("You do not have permission to update this equipment.");
            return;
        }
        const pendingPMs = (e.pm_schedules ?? []).filter((pm)=>pm.scheduled_date !== null && pm.completed_date === null);
        if (pendingPMs.length === 0) {
            return;
        }
        try {
            for (const pm of pendingPMs){
                await updatePM(pm, true);
            }
            await load();
        } catch (error) {
            console.error("MARK ALL ERROR:", error);
        }
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
    }
    function openEquipmentForm(e) {
        setEditingEquipment(e ?? null);
        if (e) {
            const getPMDate = (number)=>e.pm_schedules?.find((pm)=>pm.pm_no === number)?.scheduled_date ?? "";
            const getPMNA = (number)=>e.pm_schedules?.find((pm)=>pm.pm_no === number)?.scheduled_date === null;
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
                pm4_na: getPMNA(4)
            });
        } else {
            setEquipmentForm(emptyEquipmentForm);
        }
        setShowEquipmentForm(true);
    }
    function updateEquipmentField(field, value) {
        setEquipmentForm((current)=>({
                ...current,
                [field]: value
            }));
    }
    async function saveEquipment() {
        if (!equipmentForm.sno || !equipmentForm.department || !equipmentForm.inventory_no || !equipmentForm.equipment_name) {
            alert("S.NO, Department, Inventory No and Equipment are required.");
            return;
        }
        const response = await fetch("/api/equipment", {
            method: editingEquipment ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editingEquipment ? {
                ...equipmentForm,
                id: editingEquipment.id,
                pm_dates: {
                    1: equipmentForm.pm1_na ? null : equipmentForm.pm1_date,
                    2: equipmentForm.pm2_na ? null : equipmentForm.pm2_date,
                    3: equipmentForm.pm3_na ? null : equipmentForm.pm3_date,
                    4: equipmentForm.pm4_na ? null : equipmentForm.pm4_date
                }
            } : {
                ...equipmentForm,
                pm_dates: {
                    1: equipmentForm.pm1_na ? null : equipmentForm.pm1_date,
                    2: equipmentForm.pm2_na ? null : equipmentForm.pm2_date,
                    3: equipmentForm.pm3_na ? null : equipmentForm.pm3_date,
                    4: equipmentForm.pm4_na ? null : equipmentForm.pm4_date
                }
            })
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
    async function deleteEquipment(id) {
        if (!window.confirm("Delete this equipment and its PM schedules?")) {
            return;
        }
        const response = await fetch("/api/equipment", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id
            })
        });
        const data = await response.json();
        if (!response.ok) {
            alert(data.error ?? "Could not delete equipment.");
            return;
        }
        await load();
    }
    function openPMDateEditor(pm) {
        setEditingPM(pm);
        setPmDate(pm.scheduled_date ?? "");
    }
    async function savePMDate() {
        if (!editingPM || !pmDate) return;
        const response = await fetch(`/api/pm/${editingPM.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                scheduled_date: pmDate
            })
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
   */ function exportExcel() {
        const rows = [];
        filtered.forEach((e)=>{
            const getPM = (number)=>e.pm_schedules?.find((pm)=>pm.pm_no === number);
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
                "PM 1 Status": pm1 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm1) : "",
                "PM 1 Completed": pm1?.completed_date ?? "",
                "PM 2 Date": pm2?.scheduled_date ?? "",
                "PM 2 Status": pm2 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm2) : "",
                "PM 2 Completed": pm2?.completed_date ?? "",
                "PM 3 Date": pm3?.scheduled_date ?? "",
                "PM 3 Status": pm3 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm3) : "",
                "PM 3 Completed": pm3?.completed_date ?? "",
                "PM 4 Date": pm4?.scheduled_date ?? "",
                "PM 4 Status": pm4 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm4) : "",
                "PM 4 Completed": pm4?.completed_date ?? ""
            });
        });
        const worksheet = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].json_to_sheet(rows);
        worksheet["!cols"] = [
            {
                wch: 8
            },
            {
                wch: 18
            },
            {
                wch: 18
            },
            {
                wch: 18
            },
            {
                wch: 28
            },
            {
                wch: 18
            },
            {
                wch: 20
            },
            {
                wch: 18
            },
            {
                wch: 18
            },
            {
                wch: 18
            },
            {
                wch: 15
            },
            {
                wch: 15
            },
            {
                wch: 18
            },
            {
                wch: 15
            },
            {
                wch: 15
            },
            {
                wch: 18
            },
            {
                wch: 15
            },
            {
                wch: 15
            },
            {
                wch: 18
            },
            {
                wch: 15
            },
            {
                wch: 15
            },
            {
                wch: 18
            }
        ];
        const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_new();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].book_append_sheet(workbook, worksheet, "PM Schedule");
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeFile"](workbook, `preventive-maintenance-${new Date().toISOString().slice(0, 10)}.xlsx`);
    }
    /*
   * EXCEL IMPORT
   */ async function importExcel(event) {
        const file = event.target.files?.[0];
        event.target.value = "";
        if (!file) return;
        setImporting(true);
        try {
            const buffer = await file.arrayBuffer();
            const workbook = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["read"](buffer, {
                type: "array",
                cellDates: true
            });
            const firstSheet = workbook.SheetNames[0];
            if (!firstSheet) {
                throw new Error("Excel file does not contain a worksheet.");
            }
            const worksheet = workbook.Sheets[firstSheet];
            const rows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$xlsx$2f$xlsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["utils"].sheet_to_json(worksheet, {
                defval: ""
            });
            if (!rows.length) {
                throw new Error("The Excel sheet is empty.");
            }
            let imported = 0;
            for (const row of rows){
                const snoValue = excelValue(row, [
                    "S.NO",
                    "S NO",
                    "S_NO",
                    "Sno"
                ]);
                const department = String(excelValue(row, [
                    "Department"
                ])).trim();
                const inventoryNo = String(excelValue(row, [
                    "Inventory No",
                    "Inventory",
                    "Inventory Number"
                ])).trim();
                const equipmentName = String(excelValue(row, [
                    "Equipment",
                    "Equipment Name"
                ])).trim();
                if (!snoValue || !department || !inventoryNo || !equipmentName) {
                    console.warn("Skipping incomplete Excel row:", row);
                    continue;
                }
                const sno = Number(snoValue);
                if (!Number.isFinite(sno)) {
                    console.warn("Skipping row with invalid S.NO:", row);
                    continue;
                }
                const pm1 = cleanDate(excelValue(row, [
                    "PM 1 Date",
                    "PM1 Date",
                    "PM 1",
                    "PM1"
                ]));
                const pm2 = cleanDate(excelValue(row, [
                    "PM 2 Date",
                    "PM2 Date",
                    "PM 2",
                    "PM2"
                ]));
                const pm3 = cleanDate(excelValue(row, [
                    "PM 3 Date",
                    "PM3 Date",
                    "PM 3",
                    "PM3"
                ]));
                const pm4 = cleanDate(excelValue(row, [
                    "PM 4 Date",
                    "PM4 Date",
                    "PM 4",
                    "PM4"
                ]));
                const payload = {
                    sno,
                    department,
                    inventory_no: inventoryNo,
                    location: String(excelValue(row, [
                        "Location"
                    ])).trim(),
                    equipment_name: equipmentName,
                    model: String(excelValue(row, [
                        "Model"
                    ])).trim(),
                    serial_no: String(excelValue(row, [
                        "Serial No",
                        "Serial Number",
                        "Serial"
                    ])).trim(),
                    make: String(excelValue(row, [
                        "Make"
                    ])).trim(),
                    campus: String(excelValue(row, [
                        "Campus"
                    ])).trim(),
                    contract: String(excelValue(row, [
                        "Contract"
                    ])).trim(),
                    pm_dates: {
                        1: pm1,
                        2: pm2,
                        3: pm3,
                        4: pm4
                    }
                };
                const response = await fetch("/api/equipment", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.error ?? `Could not import inventory ${inventoryNo}.`);
                }
                imported++;
            }
            await load();
            alert(`Excel import completed.\n\n${imported} equipment records imported.`);
        } catch (error) {
            console.error(error);
            alert(error instanceof Error ? error.message : "Could not import Excel file.");
        } finally{
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
    }
    /*
   * CSV EXPORT - KEPT
   */ function exportCSV() {
        const rows = [
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
                "PM Done"
            ]
        ];
        filtered.forEach((e)=>(e.pm_schedules ?? []).sort((a, b)=>a.pm_no - b.pm_no).forEach((pm)=>rows.push([
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
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm),
                    pm.completed_date ?? ""
                ])));
        const csv = rows.map((row)=>row.map((v)=>`"${v.replaceAll('"', '""')}"`).join(",")).join("\n");
        const blob = new Blob([
            csv
        ], {
            type: "text/csv;charset=utf-8"
        });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "preventive-maintenance.csv";
        a.click();
        URL.revokeObjectURL(a.href);
    }
    async function handleLogin(e) {
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
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        loginId: loginId.trim()
                    })
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
            const { error: signInError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2d$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                email: authEmail,
                password
            });
            if (signInError) {
                setError("Invalid credentials.");
                setLoading(false);
                return;
            }
            router.replace("/");
            router.refresh();
        } catch  {
            setError("Unable to sign in. Please try again.");
        }
        setLoading(false);
    }
    async function signUp() {
        setAuthMessage("");
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2d$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
            email,
            password
        });
        setAuthMessage(error ? error.message : "Account created. Check email if confirmation is enabled.");
    }
    async function resetPassword() {
        if (!email) {
            alert("Please enter your email first.");
            return;
        }
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2d$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/reset-password`
        });
        if (error) {
            alert(error.message);
        } else {
            alert("Password reset email sent. Check your email.");
        }
    }
    async function signOut() {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2d$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
        await load();
        await loadUserRole();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "page dashboard",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar dashboard-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "logo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                    size: 23
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 1599,
=======
                                    lineNumber: 1632,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1598,
=======
                                lineNumber: 1631,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "title",
                                        children: "Preventive Maintenance Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1603,
=======
                                        lineNumber: 1636,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "subtitle",
                                        children: [
                                            "Auto-calculated PM status ·",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: connected ? "connection ok" : "connection",
                                                children: connected ? " Supabase connected" : " Database unavailable"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1609,
=======
                                                lineNumber: 1642,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1607,
=======
                                        lineNumber: 1640,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1602,
=======
                                lineNumber: 1635,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 1597,
=======
                        lineNumber: 1630,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "actions",
                        children: [
                            userRole === "SUPER_ADMIN" || userRole === "SUPER_VIEWER" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "header-section-selector",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1628,
=======
                                        lineNumber: 1661,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Section:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1630,
=======
                                        lineNumber: 1663,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: sectionFilter,
                                        onChange: (e)=>setSectionFilter(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "All",
                                                children: "All Sections"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1636,
=======
                                                lineNumber: 1669,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "HIGH_END_RADIOLOGY",
                                                children: "High-End & Radiology"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1638,
=======
                                                lineNumber: 1671,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "LIFE_SUPPORT",
                                                children: "Life Support and Surgical"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1642,
=======
                                                lineNumber: 1675,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "GENERAL_MONITORING",
                                                children: "General Monitoring"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1646,
=======
                                                lineNumber: 1679,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1632,
=======
                                        lineNumber: 1665,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1627,
=======
                                lineNumber: 1660,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "header-section-name",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1653,
=======
                                        lineNumber: 1686,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: userSection ? getSectionLabel(userSection) : "Section"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1655,
=======
                                        lineNumber: 1688,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1652,
=======
                                lineNumber: 1685,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1664,
=======
                                        lineNumber: 1697,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 13
                                    }, this),
                                    "As of ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                        children: fmtDate(new Date())
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1665,
=======
                                        lineNumber: 1698,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1663,
=======
                                lineNumber: 1696,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                onClick: exportExcel,
                                title: "Export Excel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1673,
=======
                                        lineNumber: 1706,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 13
                                    }, this),
                                    "Excel Export"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1668,
=======
                                lineNumber: 1701,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                onClick: exportCSV,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1681,
=======
                                        lineNumber: 1714,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 13
                                    }, this),
                                    "CSV"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1677,
=======
                                lineNumber: 1710,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                onClick: ()=>load(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1689,
=======
                                        lineNumber: 1722,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 13
                                    }, this),
                                    "Refresh"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1685,
=======
                                lineNumber: 1718,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                onClick: reset,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1697,
=======
                                        lineNumber: 1730,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 13
                                    }, this),
                                    "Reset"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1693,
=======
                                lineNumber: 1726,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 11
                            }, this),
                            isSuperAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "secondary-button",
                                onClick: ()=>setShowUserManagement((value)=>!value),
                                children: "User Management"
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1702,
=======
                                lineNumber: 1735,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 13
                            }, this),
                            userEmail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn",
                                onClick: signOut,
                                children: [
                                    userEmail,
                                    " · Sign out"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1713,
=======
                                lineNumber: 1746,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn primary",
                                onClick: ()=>setAuthOpen(true),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1724,
=======
                                        lineNumber: 1757,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 15
                                    }, this),
                                    "Sign in"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1720,
=======
                                lineNumber: 1753,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 1624,
=======
                        lineNumber: 1657,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 1596,
=======
                lineNumber: 1629,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dashboard-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "filter-bar dashboard-filter-bar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filter-field equipment-search",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Equipment"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1734,
=======
                                        lineNumber: 1767,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "filter-search-box",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1737,
=======
                                                lineNumber: 1770,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: search,
                                                onChange: (e)=>setSearch(e.target.value),
                                                placeholder: "Search equipment, inventory, serial no..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1739,
=======
                                                lineNumber: 1772,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setSearch(""),
                                                "aria-label": "Clear equipment search",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 1752,
=======
                                                    lineNumber: 1785,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1747,
=======
                                                lineNumber: 1780,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1736,
=======
                                        lineNumber: 1769,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1733,
=======
                                lineNumber: 1766,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filter-field equipment-select",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Equipment"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1759,
=======
                                        lineNumber: 1792,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: equipmentFilter,
                                        onChange: (e)=>setEquipmentFilter(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "All",
                                                children: "All Equipment"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1765,
=======
                                                lineNumber: 1798,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            equipmentNames.map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: name,
                                                    children: name
                                                }, name, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 1768,
=======
                                                    lineNumber: 1801,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1761,
=======
                                        lineNumber: 1794,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1758,
=======
                                lineNumber: 1791,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            (userRole === "SUPER_ADMIN" || userRole === "SUPER_VIEWER") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filter-field section-filter",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Section"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1778,
=======
                                        lineNumber: 1811,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: sectionFilter,
                                        onChange: (e)=>setSectionFilter(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "All",
                                                children: "All Sections"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1784,
=======
                                                lineNumber: 1817,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "HIGH_END_RADIOLOGY",
                                                children: "High-End & Radiology"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1785,
=======
                                                lineNumber: 1818,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "LIFE_SUPPORT",
                                                children: "Life Support and Surgical"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1788,
=======
                                                lineNumber: 1821,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "GENERAL_MONITORING",
                                                children: "General Monitoring"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1791,
=======
                                                lineNumber: 1824,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1780,
=======
                                        lineNumber: 1813,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1777,
=======
                                lineNumber: 1810,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filter-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Campus"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1799,
=======
                                        lineNumber: 1832,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: campus,
                                        onChange: (e)=>setCampus(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "All",
                                                children: "All Campuses"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1801,
=======
                                                lineNumber: 1834,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            campuses.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: item,
                                                    children: item
                                                }, item, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 1803,
=======
                                                    lineNumber: 1836,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 15
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1800,
=======
                                        lineNumber: 1833,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1798,
=======
                                lineNumber: 1831,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filter-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Department"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1811,
=======
                                        lineNumber: 1844,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: department,
                                        onChange: (e)=>setDepartment(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "All",
                                                children: "All Departments"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1813,
=======
                                                lineNumber: 1846,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            departments.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: item,
                                                    children: item
                                                }, item, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 1815,
=======
                                                    lineNumber: 1848,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 15
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1812,
=======
                                        lineNumber: 1845,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1810,
=======
                                lineNumber: 1843,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filter-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Contract"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1823,
=======
                                        lineNumber: 1856,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: contract,
                                        onChange: (e)=>setContract(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "All",
                                                children: "All Contracts"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1825,
=======
                                                lineNumber: 1858,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            contracts.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: item,
                                                    children: item
                                                }, item, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 1827,
=======
                                                    lineNumber: 1860,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 15
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1824,
=======
                                        lineNumber: 1857,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1822,
=======
                                lineNumber: 1855,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filter-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "PM"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1835,
=======
                                        lineNumber: 1868,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: pmNumber,
                                        onChange: (e)=>setPmNumber(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "All",
                                                children: "All PMs"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1837,
=======
                                                lineNumber: 1870,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "1",
                                                children: "PM 1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1838,
=======
                                                lineNumber: 1871,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "2",
                                                children: "PM 2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1839,
=======
                                                lineNumber: 1872,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "3",
                                                children: "PM 3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1840,
=======
                                                lineNumber: 1873,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "4",
                                                children: "PM 4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1841,
=======
                                                lineNumber: 1874,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1836,
=======
                                        lineNumber: 1869,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1834,
=======
                                lineNumber: 1867,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "filter-field",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1846,
=======
                                        lineNumber: 1879,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: status,
                                        onChange: (e)=>setStatus(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Any status",
                                                children: "Any Status"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1848,
=======
                                                lineNumber: 1881,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Done",
                                                children: "Done"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1849,
=======
                                                lineNumber: 1882,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Pending",
                                                children: "Pending"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1850,
=======
                                                lineNumber: 1883,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Overdue",
                                                children: "Overdue"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1851,
=======
                                                lineNumber: 1884,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Scheduled",
                                                children: "Scheduled"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1852,
=======
                                                lineNumber: 1885,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1847,
=======
                                        lineNumber: 1880,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1845,
=======
                                lineNumber: 1878,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "reset-filters",
                                onClick: reset,
                                children: "Reset"
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1856,
=======
                                lineNumber: 1889,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 1732,
=======
                        lineNumber: 1765,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 7
                    }, this),
                    isSuperAdmin && showUserManagement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "user-management-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-header",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "User Management"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 1869,
=======
                                            lineNumber: 1902,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Create section-based Login ID and password accounts"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 1870,
=======
                                            lineNumber: 1903,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 1868,
=======
                                    lineNumber: 1901,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1867,
=======
                                lineNumber: 1900,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "user-form-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Login ID"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1878,
=======
                                                lineNumber: 1911,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: newUser.login_id,
                                                onChange: (e)=>setNewUser({
                                                        ...newUser,
                                                        login_id: e.target.value
                                                    }),
                                                placeholder: "Enter Login ID"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1879,
=======
                                                lineNumber: 1912,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1877,
=======
                                        lineNumber: 1910,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1893,
=======
                                                lineNumber: 1926,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                value: newUser.email,
                                                onChange: (e)=>setNewUser({
                                                        ...newUser,
                                                        email: e.target.value
                                                    }),
                                                placeholder: "Enter email"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1894,
=======
                                                lineNumber: 1927,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1892,
=======
                                        lineNumber: 1925,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Password"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1908,
=======
                                                lineNumber: 1941,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                value: newUser.password,
                                                onChange: (e)=>setNewUser({
                                                        ...newUser,
                                                        password: e.target.value
                                                    }),
                                                placeholder: "Enter password"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1909,
=======
                                                lineNumber: 1942,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1907,
=======
                                        lineNumber: 1940,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Role"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1923,
=======
                                                lineNumber: 1956,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: newUser.role,
                                                onChange: (e)=>{
                                                    const role = e.target.value;
                                                    setNewUser({
                                                        ...newUser,
                                                        role,
                                                        section: role === "SUPER_ADMIN" || role === "SUPER_VIEWER" ? "None" : "HIGH_END_RADIOLOGY"
                                                    });
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "technician",
                                                        children: "Technician"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 1940,
=======
                                                        lineNumber: 1973,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "section_admin",
                                                        children: "Section Admin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 1941,
=======
                                                        lineNumber: 1974,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "SUPER_VIEWER",
                                                        children: "Super Viewer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 1942,
=======
                                                        lineNumber: 1975,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "SUPER_ADMIN",
                                                        children: "Super Admin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 1943,
=======
                                                        lineNumber: 1976,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1924,
=======
                                                lineNumber: 1957,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1922,
=======
                                        lineNumber: 1955,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-field",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: "Section"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1948,
=======
                                                lineNumber: 1981,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: newUser.section,
                                                disabled: newUser.role === "SUPER_ADMIN" || newUser.role === "SUPER_VIEWER",
                                                onChange: (e)=>setNewUser({
                                                        ...newUser,
                                                        section: e.target.value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "None",
                                                        children: "No Section"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 1962,
=======
                                                        lineNumber: 1995,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "HIGH_END_RADIOLOGY",
                                                        children: "High-End & Radiology"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 1963,
=======
                                                        lineNumber: 1996,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "LIFE_SUPPORT",
                                                        children: "Life Support and Surgical"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 1966,
=======
                                                        lineNumber: 1999,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "GENERAL_MONITORING",
                                                        children: "General Monitoring"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 1969,
=======
                                                        lineNumber: 2002,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 1949,
=======
                                                lineNumber: 1982,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1947,
=======
                                        lineNumber: 1980,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1876,
=======
                                lineNumber: 1909,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "user-management-actions",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "primary-button",
                                    onClick: createUser,
                                    disabled: creatingUser,
                                    children: creatingUser ? "Creating..." : "Create User"
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 1977,
=======
                                    lineNumber: 2010,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1976,
=======
                                lineNumber: 2009,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 11
                            }, this),
                            userMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "user-message",
                                children: userMessage
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1987,
=======
                                lineNumber: 2020,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 1866,
=======
                        lineNumber: 1899,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "kpi-grid stats-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                label: "TOTAL EQUIPMENT",
                                value: filtered.length,
                                hint: "Equipment assets",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$cog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorCog$3e$__["MonitorCog"], {}, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 1993,
=======
                                    lineNumber: 2026,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 93
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1993,
=======
                                lineNumber: 2026,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                label: "ACTIVE PMs",
                                value: filteredCounts.total,
                                hint: "N/A excluded",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {}, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 1994,
=======
                                    lineNumber: 2027,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 89
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1994,
=======
                                lineNumber: 2027,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                label: "PM DONE",
                                value: filteredCounts.Done,
                                hint: "Completed PMs",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {}, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 1995,
=======
                                    lineNumber: 2028,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 86
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1995,
=======
                                lineNumber: 2028,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clickable-stat",
                                onClick: ()=>setShowDueSoon(true),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                    label: "PM DUE SOON",
                                    value: filteredCounts.Pending,
                                    hint: "Within next 30 days",
                                    warning: true,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {}, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 1997,
=======
                                        lineNumber: 2030,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 109
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 1997,
=======
                                    lineNumber: 2030,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1996,
=======
                                lineNumber: 2029,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "clickable-stat",
                                onClick: ()=>setShowOverdue(true),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                    label: "OVERDUE",
                                    value: filteredCounts.Overdue,
                                    hint: "Requires attention",
                                    danger: true,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {}, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2000,
=======
                                        lineNumber: 2033,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 103
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2000,
=======
                                    lineNumber: 2033,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 1999,
=======
                                lineNumber: 2032,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                label: "Compliance (Overall)",
                                value: `${overallCompliance}%`,
                                hint: `${complianceDone} / ${complianceTotal} active PMs`,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {}, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2002,
=======
                                    lineNumber: 2035,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 141
                                }, this),
                                progress: overallCompliance
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 2002,
=======
                                lineNumber: 2035,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Stat, {
                                label: "Compliance (This Month)",
                                value: `${monthlyCompliance.compliance}%`,
                                hint: `${monthlyCompliance.done} / ${monthlyCompliance.total} PMs`,
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {}, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2007,
=======
                                    lineNumber: 2040,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 17
                                }, this),
                                progress: monthlyCompliance.compliance
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 2003,
=======
                                lineNumber: 2036,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 1992,
=======
                        lineNumber: 2025,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "analytics-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "analytics-grid-four",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "dashboard-card chart-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartHeading, {
                                            title: "PM Status Distribution",
                                            subtitle: "N/A excluded from calculation",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"], {
                                                size: 21
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2015,
=======
                                                lineNumber: 2048,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 105
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2015,
=======
                                            lineNumber: 2048,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "chart-box pie-box",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "100%",
                                                height: 270,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                                            data: pmStatusData,
                                                            dataKey: "value",
                                                            nameKey: "name",
                                                            cx: "50%",
                                                            cy: "50%",
                                                            innerRadius: 65,
                                                            outerRadius: 100,
                                                            paddingAngle: 3,
                                                            children: pmStatusData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                                                    fill: [
                                                                        "#16a34a",
                                                                        "#f59e0b",
                                                                        "#dc2626",
                                                                        "#6366f1"
                                                                    ][index]
                                                                }, `pm-status-${index}`, false, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                    lineNumber: 2020,
=======
                                                                    lineNumber: 2053,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                    columnNumber: 57
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                            lineNumber: 2019,
=======
                                                            lineNumber: 2052,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                            lineNumber: 2022,
=======
                                                            lineNumber: 2055,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                                            verticalAlign: "bottom"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                            lineNumber: 2023,
=======
                                                            lineNumber: 2056,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2018,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
                                                lineNumber: 2017,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
                                            lineNumber: 2016,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
                                    lineNumber: 2014,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "dashboard-card chart-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartHeading, {
                                            title: "PM Status by Campus",
                                            subtitle: "Active PMs only",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                size: 21
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
                                                lineNumber: 2030,
                                                columnNumber: 88
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
                                            lineNumber: 2030,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "chart-box",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "100%",
                                                height: 270,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                    data: campusPMData,
                                                    margin: {
                                                        top: 5,
                                                        right: 8,
                                                        left: -8,
                                                        bottom: 5
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                            strokeDasharray: "3 3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2033,
                                                            columnNumber: 98
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                            dataKey: "campus",
                                                            tick: {
                                                                fontSize: 11
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2033,
                                                            columnNumber: 137
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                            allowDecimals: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2033,
                                                            columnNumber: 187
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2033,
                                                            columnNumber: 218
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2033,
                                                            columnNumber: 229
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "Done",
                                                            stackId: "pm",
                                                            name: "Done",
                                                            fill: "#16a34a"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2033,
                                                            columnNumber: 239
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "Due Soon",
                                                            stackId: "pm",
                                                            name: "Due Soon",
                                                            fill: "#f59e0b"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2033,
                                                            columnNumber: 301
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "Overdue",
                                                            stackId: "pm",
                                                            name: "Overdue",
                                                            fill: "#dc2626"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2033,
                                                            columnNumber: 371
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "Scheduled",
                                                            stackId: "pm",
                                                            name: "Scheduled",
                                                            fill: "#6366f1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2033,
                                                            columnNumber: 439
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Dashboard.tsx",
                                                    lineNumber: 2033,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
                                                lineNumber: 2032,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
                                            lineNumber: 2031,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
                                    lineNumber: 2029,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "dashboard-card chart-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartHeading, {
                                            title: "Department PM Status",
                                            subtitle: "Current filtered equipment",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                size: 21
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
                                                lineNumber: 2039,
                                                columnNumber: 100
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
                                            lineNumber: 2039,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "chart-area department-chart",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "100%",
                                                height: 270,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                    data: departmentPMData,
                                                    margin: {
                                                        top: 8,
                                                        right: 5,
                                                        left: -12,
                                                        bottom: 5
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                            strokeDasharray: "3 3",
                                                            vertical: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2042,
                                                            columnNumber: 103
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                            dataKey: "department",
                                                            tick: {
                                                                fontSize: 8
                                                            },
                                                            angle: -20,
                                                            textAnchor: "end",
                                                            height: 45,
                                                            interval: 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2042,
                                                            columnNumber: 159
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                            allowDecimals: false,
                                                            tick: {
                                                                fontSize: 9
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2042,
                                                            columnNumber: 266
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2042,
                                                            columnNumber: 320
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                                            verticalAlign: "bottom",
                                                            height: 25
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2042,
                                                            columnNumber: 331
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "Done",
                                                            stackId: "status",
                                                            name: "Done",
                                                            fill: "#16a34a",
                                                            radius: [
                                                                0,
                                                                0,
                                                                0,
                                                                0
                                                            ]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2042,
                                                            columnNumber: 376
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "Due Soon",
                                                            stackId: "status",
                                                            name: "Due Soon",
                                                            fill: "#f59e0b"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2042,
                                                            columnNumber: 464
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "Overdue",
                                                            stackId: "status",
                                                            name: "Overdue",
                                                            fill: "#dc2626"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2042,
                                                            columnNumber: 538
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "Scheduled",
                                                            stackId: "status",
                                                            name: "Scheduled",
                                                            fill: "#6366f1",
                                                            radius: [
                                                                3,
                                                                3,
                                                                0,
                                                                0
                                                            ]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2042,
                                                            columnNumber: 610
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Dashboard.tsx",
                                                    lineNumber: 2042,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
                                                lineNumber: 2041,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
                                            lineNumber: 2040,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
                                    lineNumber: 2038,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "dashboard-card chart-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartHeading, {
                                            title: "Compliance by Campus",
                                            subtitle: "Done ÷ active PMs",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                size: 21
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
                                                lineNumber: 2048,
                                                columnNumber: 91
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
                                            lineNumber: 2048,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "chart-box",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "100%",
                                                height: 270,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                    data: campusComplianceData,
                                                    margin: {
                                                        top: 8,
                                                        right: 8,
                                                        left: -8,
                                                        bottom: 5
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                            strokeDasharray: "3 3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2051,
                                                            columnNumber: 106
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                            dataKey: "campus",
                                                            tick: {
                                                                fontSize: 11
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2051,
                                                            columnNumber: 145
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                            domain: [
                                                                0,
                                                                100
                                                            ],
                                                            tickFormatter: (value)=>`${value}%`
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2051,
                                                            columnNumber: 195
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                            formatter: (value)=>[
                                                                    `${value}%`,
                                                                    "Compliance"
                                                                ]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2051,
                                                            columnNumber: 261
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "compliance",
                                                            name: "Compliance",
                                                            fill: "#2563eb"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2051,
                                                            columnNumber: 323
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Dashboard.tsx",
=======
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    lineNumber: 2051,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
                                                lineNumber: 2050,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
                                            lineNumber: 2049,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
                                    lineNumber: 2047,
                                    columnNumber: 11
<<<<<<< HEAD
=======
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "dashboard-card chart-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartHeading, {
                                            title: "PM Status by Campus",
                                            subtitle: "Active PMs only",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                size: 21
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
                                                lineNumber: 2063,
                                                columnNumber: 88
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
                                            lineNumber: 2063,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "chart-box",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "100%",
                                                height: 270,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                    data: campusPMData,
                                                    margin: {
                                                        top: 5,
                                                        right: 8,
                                                        left: -8,
                                                        bottom: 5
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                            strokeDasharray: "3 3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2066,
                                                            columnNumber: 98
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                            dataKey: "campus",
                                                            tick: {
                                                                fontSize: 11
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2066,
                                                            columnNumber: 137
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                            allowDecimals: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2066,
                                                            columnNumber: 187
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2066,
                                                            columnNumber: 218
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2066,
                                                            columnNumber: 229
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "Done",
                                                            stackId: "pm",
                                                            name: "Done",
                                                            fill: "#16a34a"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2066,
                                                            columnNumber: 239
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "Due Soon",
                                                            stackId: "pm",
                                                            name: "Due Soon",
                                                            fill: "#f59e0b"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2066,
                                                            columnNumber: 301
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "Overdue",
                                                            stackId: "pm",
                                                            name: "Overdue",
                                                            fill: "#dc2626"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2066,
                                                            columnNumber: 371
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "Scheduled",
                                                            stackId: "pm",
                                                            name: "Scheduled",
                                                            fill: "#6366f1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2066,
                                                            columnNumber: 439
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Dashboard.tsx",
                                                    lineNumber: 2066,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
                                                lineNumber: 2065,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
                                            lineNumber: 2064,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
                                    lineNumber: 2062,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "dashboard-card chart-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartHeading, {
                                            title: "Department PM Status",
                                            subtitle: "Current filtered equipment",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                                size: 21
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
                                                lineNumber: 2072,
                                                columnNumber: 100
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
                                            lineNumber: 2072,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "chart-area department-chart",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "100%",
                                                height: 270,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                    data: departmentPMData,
                                                    margin: {
                                                        top: 8,
                                                        right: 5,
                                                        left: -12,
                                                        bottom: 5
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                            strokeDasharray: "3 3",
                                                            vertical: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2075,
                                                            columnNumber: 103
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                            dataKey: "department",
                                                            tick: {
                                                                fontSize: 8
                                                            },
                                                            angle: -20,
                                                            textAnchor: "end",
                                                            height: 45,
                                                            interval: 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2075,
                                                            columnNumber: 159
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                            allowDecimals: false,
                                                            tick: {
                                                                fontSize: 9
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2075,
                                                            columnNumber: 266
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2075,
                                                            columnNumber: 320
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                                            verticalAlign: "bottom",
                                                            height: 25
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2075,
                                                            columnNumber: 331
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "Done",
                                                            stackId: "status",
                                                            name: "Done",
                                                            fill: "#16a34a",
                                                            radius: [
                                                                0,
                                                                0,
                                                                0,
                                                                0
                                                            ]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2075,
                                                            columnNumber: 376
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "Due Soon",
                                                            stackId: "status",
                                                            name: "Due Soon",
                                                            fill: "#f59e0b"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2075,
                                                            columnNumber: 464
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "Overdue",
                                                            stackId: "status",
                                                            name: "Overdue",
                                                            fill: "#dc2626"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2075,
                                                            columnNumber: 538
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "Scheduled",
                                                            stackId: "status",
                                                            name: "Scheduled",
                                                            fill: "#6366f1",
                                                            radius: [
                                                                3,
                                                                3,
                                                                0,
                                                                0
                                                            ]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2075,
                                                            columnNumber: 610
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Dashboard.tsx",
                                                    lineNumber: 2075,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
                                                lineNumber: 2074,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
                                            lineNumber: 2073,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
                                    lineNumber: 2071,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "dashboard-card chart-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChartHeading, {
                                            title: "Compliance by Campus",
                                            subtitle: "Done ÷ active PMs",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                size: 21
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
                                                lineNumber: 2081,
                                                columnNumber: 91
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
                                            lineNumber: 2081,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "chart-box",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                width: "100%",
                                                height: 270,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                                    data: campusComplianceData,
                                                    margin: {
                                                        top: 8,
                                                        right: 8,
                                                        left: -8,
                                                        bottom: 5
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                            strokeDasharray: "3 3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2084,
                                                            columnNumber: 106
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                            dataKey: "campus",
                                                            tick: {
                                                                fontSize: 11
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2084,
                                                            columnNumber: 145
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                            domain: [
                                                                0,
                                                                100
                                                            ],
                                                            tickFormatter: (value)=>`${value}%`
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2084,
                                                            columnNumber: 195
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                            formatter: (value)=>[
                                                                    `${value}%`,
                                                                    "Compliance"
                                                                ]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2084,
                                                            columnNumber: 261
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                            dataKey: "compliance",
                                                            name: "Compliance",
                                                            fill: "#2563eb"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
                                                            lineNumber: 2084,
                                                            columnNumber: 323
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Dashboard.tsx",
                                                    lineNumber: 2084,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
                                                lineNumber: 2083,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
                                            lineNumber: 2082,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
                                    lineNumber: 2080,
                                    columnNumber: 11
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 2013,
=======
                            lineNumber: 2046,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 2012,
=======
                        lineNumber: 2045,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "workload-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkloadCard, {
                                className: "workload-overdue",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2059,
=======
                                    lineNumber: 2092,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 58
                                }, this),
                                label: "Overdue PMs",
                                value: filteredCounts.Overdue,
                                hint: "Requires attention",
                                onClick: ()=>setShowOverdue(true)
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 2059,
=======
                                lineNumber: 2092,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkloadCard, {
                                className: "workload-pending",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2060,
=======
                                    lineNumber: 2093,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 58
                                }, this),
                                label: "PM Due Soon",
                                value: filteredCounts.Pending,
                                hint: "Within next 30 days",
                                onClick: ()=>setShowDueSoon(true)
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 2060,
=======
                                lineNumber: 2093,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkloadCard, {
                                className: "workload-yet",
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2061,
=======
                                    lineNumber: 2094,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 54
                                }, this),
                                label: "PM Yet to be Done",
                                value: filteredCounts.Pending + filteredCounts.Overdue,
                                hint: "Pending + Overdue",
                                onClick: ()=>setShowDueSoon(true)
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 2061,
=======
                                lineNumber: 2094,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 2058,
=======
                        lineNumber: 2091,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 7
                    }, this),
                    showDueSoon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPanel, {
                        title: "PMs Due Soon",
                        subtitle: "Preventive maintenance due within 30 days",
                        rows: dueSoonRows,
                        status: "Pending",
                        onClose: ()=>setShowDueSoon(false),
                        updatePM: updatePM
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 2064,
=======
                        lineNumber: 2097,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 23
                    }, this),
                    showOverdue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPanel, {
                        title: "Overdue PMs",
                        subtitle: "Preventive maintenance requiring attention",
                        rows: overdueRows,
                        status: "Overdue",
                        onClose: ()=>setShowOverdue(false),
                        updatePM: updatePM
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 2065,
=======
                        lineNumber: 2098,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 23
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "legacy-analytics",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "stats stats-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat stat-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Total Equipment"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2070,
=======
                                                lineNumber: 2103,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "value",
                                                children: filtered.length
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2071,
=======
                                                lineNumber: 2104,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hint",
                                                children: "Active assets"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2072,
=======
                                                lineNumber: 2105,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2069,
=======
                                        lineNumber: 2102,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat stat-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "PM Done"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2076,
=======
                                                lineNumber: 2109,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "value",
                                                children: filteredCounts.Done
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2077,
=======
                                                lineNumber: 2110,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hint",
                                                children: "Completed PMs"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2078,
=======
                                                lineNumber: 2111,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2075,
=======
                                        lineNumber: 2108,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "clickable-stat",
                                        onClick: ()=>setShowDueSoon(true),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "stat stat-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: "PM Due Soon"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2086,
=======
                                                    lineNumber: 2119,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "value",
                                                    children: filteredCounts.Pending
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2087,
=======
                                                    lineNumber: 2120,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 13
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "hint",
                                                    children: "Within next 30 days"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2088,
=======
                                                    lineNumber: 2121,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 13
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2085,
=======
                                            lineNumber: 2118,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 11
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2081,
=======
                                        lineNumber: 2114,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat stat-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Overdue"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2093,
=======
                                                lineNumber: 2126,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "value",
                                                children: filteredCounts.Overdue
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2094,
=======
                                                lineNumber: 2127,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hint",
                                                children: "Requires attention"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2095,
=======
                                                lineNumber: 2128,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2092,
=======
                                        lineNumber: 2125,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stat stat-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "Compliance"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2099,
=======
                                                lineNumber: 2132,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "value",
                                                children: [
                                                    compliancePercentage,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2100,
=======
                                                lineNumber: 2133,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hint",
                                                children: "PM completion rate"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2101,
=======
                                                lineNumber: 2134,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2098,
=======
                                        lineNumber: 2131,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 2068,
=======
                                lineNumber: 2101,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 7
                            }, this),
                            showDueSoon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "due-soon-panel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "panel-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: "PM Due Soon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2109,
=======
                                                        lineNumber: 2142,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "PMs due within the next 30 days"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2110,
=======
                                                        lineNumber: 2143,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2108,
=======
                                                lineNumber: 2141,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn",
                                                onClick: ()=>setShowDueSoon(false),
                                                children: "Close"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2113,
=======
                                                lineNumber: 2146,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2107,
=======
                                        lineNumber: 2140,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "table-wrap due-soon-table",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: "S.No"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                lineNumber: 2125,
=======
                                                                lineNumber: 2158,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: "Equipment"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                lineNumber: 2126,
=======
                                                                lineNumber: 2159,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: "Inventory No"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                lineNumber: 2127,
=======
                                                                lineNumber: 2160,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: "Department"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                lineNumber: 2128,
=======
                                                                lineNumber: 2161,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: "Campus"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                lineNumber: 2129,
=======
                                                                lineNumber: 2162,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: "PM"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                lineNumber: 2130,
=======
                                                                lineNumber: 2163,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: "Due Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                lineNumber: 2131,
=======
                                                                lineNumber: 2164,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: "Days Remaining"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                lineNumber: 2132,
=======
                                                                lineNumber: 2165,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                lineNumber: 2133,
=======
                                                                lineNumber: 2166,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: "Action"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                lineNumber: 2134,
=======
                                                                lineNumber: 2167,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2124,
=======
                                                        lineNumber: 2157,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2123,
=======
                                                    lineNumber: 2156,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: filtered.flatMap((equipment)=>(equipment.pm_schedules ?? []).map((pm)=>({
                                                                equipment,
                                                                pm
                                                            }))).filter(({ pm })=>pm.scheduled_date !== null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Pending").sort((a, b)=>{
                                                        return new Date(`${a.pm.scheduled_date}T00:00:00`).getTime() - new Date(`${b.pm.scheduled_date}T00:00:00`).getTime();
                                                    }).map(({ equipment, pm }, index)=>{
                                                        const today = new Date();
                                                        today.setHours(0, 0, 0, 0);
                                                        const dueDate = new Date(`${pm.scheduled_date}T00:00:00`);
                                                        const daysRemaining = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: index + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                    lineNumber: 2172,
=======
                                                                    lineNumber: 2205,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: equipment.equipment_name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                            lineNumber: 2175,
=======
                                                                            lineNumber: 2208,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        equipment.model && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "table-subtext",
                                                                            children: equipment.model
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                            lineNumber: 2178,
=======
                                                                            lineNumber: 2211,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                    lineNumber: 2174,
=======
                                                                    lineNumber: 2207,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: equipment.inventory_no
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                    lineNumber: 2184,
=======
                                                                    lineNumber: 2217,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: equipment.department
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                    lineNumber: 2185,
=======
                                                                    lineNumber: 2218,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: equipment.campus ?? "N/A"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                    lineNumber: 2186,
=======
                                                                    lineNumber: 2219,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: [
                                                                        "PM ",
                                                                        pm.pm_no
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                    lineNumber: 2187,
=======
                                                                    lineNumber: 2220,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: fmtDate(pm.scheduled_date)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                    lineNumber: 2188,
=======
                                                                    lineNumber: 2221,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: daysRemaining <= 7 ? "days-urgent" : "days-normal",
                                                                        children: daysRemaining === 0 ? "Due today" : `${daysRemaining} days`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                        lineNumber: 2191,
=======
                                                                        lineNumber: 2224,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                    lineNumber: 2190,
=======
                                                                    lineNumber: 2223,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "status pending",
                                                                        children: "Pending"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                        lineNumber: 2205,
=======
                                                                        lineNumber: 2238,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                    lineNumber: 2204,
=======
                                                                    lineNumber: 2237,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: canUpdateThisPM(equipment) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "btn btn-primary",
<<<<<<< HEAD
                                                                        onClick: ()=>updatePM(pm, true),
                                                                        children: "Mark Done"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Dashboard.tsx",
                                                                        lineNumber: 2212,
=======
                                                                        onClick: ()=>updatePM(pm, (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) !== "Done"),
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm) === "Done" ? "Undo" : "Mark Done"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Dashboard.tsx",
                                                                        lineNumber: 2245,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                    lineNumber: 2210,
=======
                                                                    lineNumber: 2243,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, pm.id, true, {
                                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                            lineNumber: 2171,
=======
                                                            lineNumber: 2204,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                            columnNumber: 23
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2138,
=======
                                                    lineNumber: 2171,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2122,
=======
                                            lineNumber: 2155,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2121,
=======
                                        lineNumber: 2154,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 2106,
=======
                                lineNumber: 2139,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "panel filters filter-bar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "searchbox",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                size: 17
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2231,
=======
                                                lineNumber: 2271,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: search,
                                                onChange: (e)=>setSearch(e.target.value),
                                                placeholder: "Search by SNO, equipment, serial, location, model, make..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2233,
=======
                                                lineNumber: 2273,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2230,
=======
                                        lineNumber: 2270,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                        value: campus,
                                        setValue: setCampus,
                                        options: campuses,
                                        label: "Campus"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2242,
=======
                                        lineNumber: 2282,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                        value: department,
                                        setValue: setDepartment,
                                        options: departments,
                                        label: "Department"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2249,
=======
                                        lineNumber: 2289,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                        value: contract,
                                        setValue: setContract,
                                        options: contracts,
                                        label: "Contract"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2256,
=======
                                        lineNumber: 2296,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                        value: pmNumber,
                                        setValue: setPmNumber,
                                        options: [
                                            "1",
                                            "2",
                                            "3",
                                            "4"
                                        ],
                                        label: "PM",
                                        any: "All PMs"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2263,
=======
                                        lineNumber: 2303,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                        value: status,
                                        setValue: setStatus,
                                        options: [
                                            "Done",
                                            "Overdue",
                                            "Pending",
                                            "Scheduled"
                                        ],
                                        label: "Status",
                                        any: "Any status"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2271,
=======
                                        lineNumber: 2311,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 2229,
=======
                                lineNumber: 2269,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "charts dashboard-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "panel chart dashboard-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "PM Status by Campus"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2287,
=======
                                                lineNumber: 2327,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Across all four PM schedules"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2288,
=======
                                                lineNumber: 2328,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bararea",
                                                children: filteredCampuses.map((c)=>{
                                                    const pms = filtered.filter((e)=>e.campus === c).flatMap((e)=>e.pm_schedules ?? []).filter((pm)=>pm.scheduled_date !== null && (pmNumber === "All" || pm.pm_no === Number(pmNumber)));
                                                    const max = Math.max(1, ...filteredCampuses.map((x)=>filtered.filter((e)=>e.campus === x).flatMap((e)=>e.pm_schedules ?? []).filter((pm)=>pm.scheduled_date !== null && (pmNumber === "All" || pm.pm_no === Number(pmNumber))).length));
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "baritem",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: pms.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                lineNumber: 2330,
=======
                                                                lineNumber: 2370,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bar",
                                                                style: {
                                                                    height: `${Math.max(8, pms.length / max * 150)}px`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                lineNumber: 2332,
=======
                                                                lineNumber: 2372,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: c
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                                lineNumber: 2342,
=======
                                                                lineNumber: 2382,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, c, true, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2326,
=======
                                                        lineNumber: 2366,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2290,
=======
                                                lineNumber: 2330,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2286,
=======
                                        lineNumber: 2326,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "panel chart dashboard-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Overall PM Distribution"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2350,
=======
                                                lineNumber: 2390,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "All scheduled PM dates"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2351,
=======
                                                lineNumber: 2391,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "donut",
                                                style: {
                                                    background: `conic-gradient(
                #08b77d 0 ${counts.Done / allPMs.length * 100 || 0}%,
                #f59b00 ${counts.Done / allPMs.length * 100 || 0}% ${(counts.Done + counts.Pending) / allPMs.length * 100 || 0}%,
                #f51f50 ${(counts.Done + counts.Pending) / allPMs.length * 100 || 0}% ${(counts.Done + counts.Pending + counts.Overdue) / allPMs.length * 100 || 0}%,
                #94a3b8 ${(counts.Done + counts.Pending + counts.Overdue) / allPMs.length * 100 || 0}% 100%
              )`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "donutCenter",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                            children: allPMs.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                            lineNumber: 2395,
=======
                                                            lineNumber: 2435,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                            columnNumber: 15
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Total PMs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                            lineNumber: 2396,
=======
                                                            lineNumber: 2436,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                            columnNumber: 15
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2394,
=======
                                                    lineNumber: 2434,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 13
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2353,
=======
                                                lineNumber: 2393,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2349,
=======
                                        lineNumber: 2389,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 2285,
=======
                                lineNumber: 2325,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 2067,
=======
                        lineNumber: 2100,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "schedule-section panel equipment-table equipment-schedule-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-header schedule-header equipment-schedule-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "section-banner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "section-eyebrow",
                                                        children: "MAINTENANCE SECTION"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2408,
=======
                                                        lineNumber: 2448,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        children: getSectionHeading()
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2412,
=======
                                                        lineNumber: 2452,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2407,
=======
                                                lineNumber: 2447,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "section-meta",
                                                children: "Preventive Maintenance"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2415,
=======
                                                lineNumber: 2455,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2406,
=======
                                        lineNumber: 2446,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "schedule-heading",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Equipment PM Schedule"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2421,
=======
                                                lineNumber: 2461,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Complete preventive maintenance schedule for all equipment"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2422,
=======
                                                lineNumber: 2462,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2420,
=======
                                        lineNumber: 2460,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: "Phone/tablet: swipe horizontally. No equipment or PM data is hidden."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2427,
=======
                                        lineNumber: 2467,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this),
                                    canManageEquipment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "admin-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "admin-button",
                                                onClick: ()=>openEquipmentForm(),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2441,
=======
                                                        lineNumber: 2481,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    "Add Equipment"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2434,
=======
                                                lineNumber: 2474,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "admin-button",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2446,
=======
                                                        lineNumber: 2486,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    importing ? "Importing..." : "Import Excel",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: ".xlsx,.xls",
                                                        hidden: true,
                                                        disabled: importing,
                                                        onChange: importExcel
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2452,
=======
                                                        lineNumber: 2492,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2445,
=======
                                                lineNumber: 2485,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2433,
=======
                                        lineNumber: 2473,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 2405,
=======
                                lineNumber: 2445,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "schedule-search schedule-search-bar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "schedule-search-box",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                size: 17
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2466,
=======
                                                lineNumber: 2506,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: scheduleSearch,
                                                onChange: (e)=>setScheduleSearch(e.target.value),
                                                placeholder: "Search Equipment PM Schedule..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2467,
=======
                                                lineNumber: 2507,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            scheduleSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "schedule-search-clear",
                                                onClick: ()=>setScheduleSearch(""),
                                                "aria-label": "Clear schedule search",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2480,
=======
                                                    lineNumber: 2520,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2474,
=======
                                                lineNumber: 2514,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2465,
=======
                                        lineNumber: 2505,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "schedule-search-info",
                                        children: [
                                            "Showing ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: scheduleFiltered.length
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2485,
=======
                                                lineNumber: 2525,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 21
                                            }, this),
                                            " of",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: filtered.length
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2486,
=======
                                                lineNumber: 2526,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 13
                                            }, this),
                                            " equipment"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 2484,
=======
                                        lineNumber: 2524,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 2464,
=======
                                lineNumber: 2504,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "table-container tablewrap table-wrap equipment-schedule-table",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "S.NO"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2494,
=======
                                                        lineNumber: 2534,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    sectionFilter === "All" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "SECTION"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2496,
=======
                                                        lineNumber: 2536,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "DEPARTMENT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2498,
=======
                                                        lineNumber: 2538,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "INVENTORY NO"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2499,
=======
                                                        lineNumber: 2539,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "LOCATION"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2500,
=======
                                                        lineNumber: 2540,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "EQUIPMENT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2501,
=======
                                                        lineNumber: 2541,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "MODEL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2502,
=======
                                                        lineNumber: 2542,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "SERIAL NO"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2503,
=======
                                                        lineNumber: 2543,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "MAKE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2504,
=======
                                                        lineNumber: 2544,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "CAMPUS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2505,
=======
                                                        lineNumber: 2545,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "CONTRACT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2506,
=======
                                                        lineNumber: 2546,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "PM 1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2507,
=======
                                                        lineNumber: 2547,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "PM 2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2508,
=======
                                                        lineNumber: 2548,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "PM 3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2509,
=======
                                                        lineNumber: 2549,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "PM 4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2510,
=======
                                                        lineNumber: 2550,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 17
                                                    }, this),
                                                    canManageEquipment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        children: "ACTIONS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                        lineNumber: 2513,
=======
                                                        lineNumber: 2553,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2493,
=======
                                                lineNumber: 2533,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2492,
=======
                                            lineNumber: 2532,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: (canManageEquipment ? 15 : 14) + (sectionFilter === "All" ? 1 : 0),
                                                    className: "empty",
                                                    children: "Loading..."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2521,
=======
                                                    lineNumber: 2561,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2520,
=======
                                                lineNumber: 2560,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 17
                                            }, this) : filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: (canManageEquipment ? 15 : 14) + (sectionFilter === "All" ? 1 : 0),
                                                    className: "empty",
                                                    children: "No data found."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2533,
=======
                                                    lineNumber: 2573,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 2532,
=======
                                                lineNumber: 2572,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 17
                                            }, this) : scheduleFiltered.map((e, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EquipmentRow, {
                                                    e: e,
                                                    index: index,
                                                    showSection: sectionFilter === "All",
                                                    canManage: canManageThisEquipment(e),
                                                    canUpdate: canUpdateThisPM(e),
                                                    updatePM: updatePM,
                                                    markAll: markAll,
                                                    openEquipmentForm: openEquipmentForm,
                                                    deleteEquipment: deleteEquipment,
                                                    openPMDateEditor: openPMDateEditor
                                                }, e.id, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2545,
=======
                                                    lineNumber: 2585,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2518,
=======
                                            lineNumber: 2558,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2491,
=======
                                    lineNumber: 2531,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 2490,
=======
                                lineNumber: 2530,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 2404,
=======
                        lineNumber: 2444,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 1731,
=======
                lineNumber: 1764,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            showEquipmentForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "authbox equipment-form",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "close",
                            onClick: ()=>setShowEquipmentForm(false),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 2582,
=======
                                lineNumber: 2622,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 2576,
=======
                            lineNumber: 2616,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: editingEquipment ? "Edit Equipment" : "Add Equipment"
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 2585,
=======
                            lineNumber: 2625,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "equipment-fields",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: equipmentForm.sno,
                                    onChange: (e)=>updateEquipmentField("sno", e.target.value),
                                    placeholder: "S.NO",
                                    type: "number"
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2592,
=======
                                    lineNumber: 2632,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: equipmentForm.department,
                                    onChange: (e)=>updateEquipmentField("department", e.target.value),
                                    placeholder: "Department"
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2604,
=======
                                    lineNumber: 2644,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: equipmentForm.inventory_no,
                                    onChange: (e)=>updateEquipmentField("inventory_no", e.target.value),
                                    placeholder: "Inventory No"
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2615,
=======
                                    lineNumber: 2655,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: equipmentForm.location,
                                    onChange: (e)=>updateEquipmentField("location", e.target.value),
                                    placeholder: "Location"
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2626,
=======
                                    lineNumber: 2666,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: equipmentForm.equipment_name,
                                    onChange: (e)=>updateEquipmentField("equipment_name", e.target.value),
                                    placeholder: "Equipment Name"
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2637,
=======
                                    lineNumber: 2677,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: equipmentForm.model,
                                    onChange: (e)=>updateEquipmentField("model", e.target.value),
                                    placeholder: "Model"
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2648,
=======
                                    lineNumber: 2688,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: equipmentForm.serial_no,
                                    onChange: (e)=>updateEquipmentField("serial_no", e.target.value),
                                    placeholder: "Serial No"
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2659,
=======
                                    lineNumber: 2699,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: equipmentForm.make,
                                    onChange: (e)=>updateEquipmentField("make", e.target.value),
                                    placeholder: "Make"
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2670,
=======
                                    lineNumber: 2710,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: equipmentForm.campus,
                                    onChange: (e)=>updateEquipmentField("campus", e.target.value),
                                    placeholder: "Campus"
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2681,
=======
                                    lineNumber: 2721,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: equipmentForm.contract,
                                    onChange: (e)=>updateEquipmentField("contract", e.target.value),
                                    placeholder: "Contract"
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2692,
=======
                                    lineNumber: 2732,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "PM 1 Date",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: equipmentForm.pm1_date,
                                                    disabled: equipmentForm.pm1_na,
                                                    onChange: (e)=>setEquipmentForm({
                                                            ...equipmentForm,
                                                            pm1_date: e.target.value,
                                                            pm1_na: false
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2706,
=======
                                                    lineNumber: 2746,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: equipmentForm.pm1_na,
                                                            onChange: (e)=>setEquipmentForm({
                                                                    ...equipmentForm,
                                                                    pm1_na: e.target.checked,
                                                                    pm1_date: e.target.checked ? "" : equipmentForm.pm1_date
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                            lineNumber: 2719,
=======
                                                            lineNumber: 2759,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                            columnNumber: 21
                                                        }, this),
                                                        "N/A"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2718,
=======
                                                    lineNumber: 2758,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2705,
=======
                                            lineNumber: 2745,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2703,
=======
                                    lineNumber: 2743,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "PM 2 Date",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: equipmentForm.pm2_date,
                                                    disabled: equipmentForm.pm2_na,
                                                    onChange: (e)=>setEquipmentForm({
                                                            ...equipmentForm,
                                                            pm2_date: e.target.value,
                                                            pm2_na: false
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2738,
=======
                                                    lineNumber: 2778,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: equipmentForm.pm2_na,
                                                            onChange: (e)=>setEquipmentForm({
                                                                    ...equipmentForm,
                                                                    pm2_na: e.target.checked,
                                                                    pm2_date: e.target.checked ? "" : equipmentForm.pm2_date
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                            lineNumber: 2751,
=======
                                                            lineNumber: 2791,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                            columnNumber: 21
                                                        }, this),
                                                        "N/A"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2750,
=======
                                                    lineNumber: 2790,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2737,
=======
                                            lineNumber: 2777,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2735,
=======
                                    lineNumber: 2775,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "PM 3 Date",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: equipmentForm.pm3_date,
                                                    disabled: equipmentForm.pm3_na,
                                                    onChange: (e)=>setEquipmentForm({
                                                            ...equipmentForm,
                                                            pm3_date: e.target.value,
                                                            pm3_na: false
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2770,
=======
                                                    lineNumber: 2810,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: equipmentForm.pm3_na,
                                                            onChange: (e)=>setEquipmentForm({
                                                                    ...equipmentForm,
                                                                    pm3_na: e.target.checked,
                                                                    pm3_date: e.target.checked ? "" : equipmentForm.pm3_date
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                            lineNumber: 2783,
=======
                                                            lineNumber: 2823,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                            columnNumber: 21
                                                        }, this),
                                                        "N/A"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2782,
=======
                                                    lineNumber: 2822,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2769,
=======
                                            lineNumber: 2809,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2767,
=======
                                    lineNumber: 2807,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "PM 4 Date",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    value: equipmentForm.pm4_date,
                                                    disabled: equipmentForm.pm4_na,
                                                    onChange: (e)=>setEquipmentForm({
                                                            ...equipmentForm,
                                                            pm4_date: e.target.value,
                                                            pm4_na: false
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2802,
=======
                                                    lineNumber: 2842,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: equipmentForm.pm4_na,
                                                            onChange: (e)=>setEquipmentForm({
                                                                    ...equipmentForm,
                                                                    pm4_na: e.target.checked,
                                                                    pm4_date: e.target.checked ? "" : equipmentForm.pm4_date
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                            lineNumber: 2815,
=======
                                                            lineNumber: 2855,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                            columnNumber: 21
                                                        }, this),
                                                        "N/A"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                    lineNumber: 2814,
=======
                                                    lineNumber: 2854,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2801,
=======
                                            lineNumber: 2841,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2799,
=======
                                    lineNumber: 2839,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 2591,
=======
                            lineNumber: 2631,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn primary",
                                    onClick: saveEquipment,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2837,
=======
                                            lineNumber: 2877,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this),
                                        "Save"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2833,
=======
                                    lineNumber: 2873,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn",
                                    onClick: ()=>setShowEquipmentForm(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2841,
=======
                                    lineNumber: 2881,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 2832,
=======
                            lineNumber: 2872,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                    lineNumber: 2575,
=======
                    lineNumber: 2615,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 2574,
=======
                lineNumber: 2614,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 9
            }, this),
            editingPM && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "authbox",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "close",
                            onClick: ()=>{
                                setEditingPM(null);
                                setPmDate("");
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 2864,
=======
                                lineNumber: 2904,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 2857,
=======
                            lineNumber: 2897,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                "Edit PM ",
                                editingPM.pm_no,
                                " Date"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 2867,
=======
                            lineNumber: 2907,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: "Scheduled Date"
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 2871,
=======
                            lineNumber: 2911,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "date",
                            value: pmDate,
                            onChange: (e)=>setPmDate(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 2875,
=======
                            lineNumber: 2915,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn primary",
                                    onClick: savePMDate,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2888,
=======
                                            lineNumber: 2928,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this),
                                        "Save Date"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2884,
=======
                                    lineNumber: 2924,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn",
                                    onClick: ()=>{
                                        setEditingPM(null);
                                        setPmDate("");
                                    },
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2892,
=======
                                    lineNumber: 2932,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 2883,
=======
                            lineNumber: 2923,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                    lineNumber: 2856,
=======
                    lineNumber: 2896,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 2855,
=======
                lineNumber: 2895,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 9
            }, this),
            authOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "authbox",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "close",
                            onClick: ()=>setAuthOpen(false),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 2915,
=======
                                lineNumber: 2955,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 2909,
=======
                            lineNumber: 2949,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Sign in"
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 2918,
=======
                            lineNumber: 2958,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleLogin,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "login-methods",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: loginType === "loginId" ? "login-method active" : "login-method",
                                            onClick: ()=>{
                                                setLoginType("loginId");
                                                setError("");
                                            },
                                            children: "Login ID"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2922,
=======
                                            lineNumber: 2962,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: loginType === "email" ? "login-method active" : "login-method",
                                            onClick: ()=>{
                                                setLoginType("email");
                                                setError("");
                                            },
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2937,
=======
                                            lineNumber: 2977,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2921,
=======
                                    lineNumber: 2961,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                loginType === "loginId" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "login-field",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "loginId",
                                            children: "Login ID"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2955,
=======
                                            lineNumber: 2995,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "loginId",
                                            type: "text",
                                            value: loginId,
                                            onChange: (e)=>setLoginId(e.target.value),
                                            placeholder: "Enter Login ID",
                                            autoComplete: "username",
                                            disabled: loading
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2956,
=======
                                            lineNumber: 2996,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2954,
=======
                                    lineNumber: 2994,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "login-field",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "email",
                                            children: "Email Address"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2968,
=======
                                            lineNumber: 3008,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "email",
                                            type: "email",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value),
                                            placeholder: "Enter email address",
                                            autoComplete: "username",
                                            disabled: loading
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2969,
=======
                                            lineNumber: 3009,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2967,
=======
                                    lineNumber: 3007,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "login-field",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "password",
                                            children: "Password"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2982,
=======
                                            lineNumber: 3022,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "password",
                                            type: "password",
                                            value: password,
                                            onChange: (e)=>setPassword(e.target.value),
                                            placeholder: "Enter password",
                                            autoComplete: "current-password",
                                            disabled: loading
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2983,
=======
                                            lineNumber: 3023,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2981,
=======
                                    lineNumber: 3021,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "authmsg",
                                    children: error || authMessage
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2994,
=======
                                    lineNumber: 3034,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "btn primary",
                                            disabled: loading,
                                            children: loading ? "Signing in..." : "Sign in"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 2999,
=======
                                            lineNumber: 3039,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "btn",
                                            onClick: signUp,
                                            children: "Sign up"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 3007,
=======
                                            lineNumber: 3047,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "btn",
                                            onClick: resetPassword,
                                            children: "Reset password"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 3015,
=======
                                            lineNumber: 3055,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 2998,
=======
                                    lineNumber: 3038,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 2920,
=======
                            lineNumber: 2960,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                    lineNumber: 2908,
=======
                    lineNumber: 2948,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 2907,
=======
                lineNumber: 2947,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
        lineNumber: 1595,
=======
        lineNumber: 1628,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
        columnNumber: 5
    }, this);
}
_s(Dashboard, "24Raz2UFNsjK5hLwV/skUB0XhNs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Dashboard;
function Stat({ label, value, hint, icon, danger, warning, success, progress }) {
    const statusClass = danger ? "kpi-danger" : warning ? "kpi-warning" : success ? "kpi-success" : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `stat kpi-card ${statusClass}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "statTop kpi-card-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "kpi-label",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 3061,
=======
                        lineNumber: 3101,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "stat-card-icon kpi-card-icon",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 3063,
=======
                        lineNumber: 3103,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3060,
=======
                lineNumber: 3100,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                className: `kpi-value ${danger ? "redText" : warning ? "orangeText" : success ? "greenText" : ""}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3068,
=======
                lineNumber: 3108,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                className: "kpi-subtitle",
                children: hint
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3082,
=======
                lineNumber: 3122,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            progress !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "kpi-progress",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "kpi-progress-bar",
                    style: {
                        width: `${Math.min(100, Math.max(0, progress))}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                    lineNumber: 3086,
=======
                    lineNumber: 3126,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3085,
=======
                lineNumber: 3125,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
        lineNumber: 3059,
=======
        lineNumber: 3099,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
        columnNumber: 5
    }, this);
}
_c1 = Stat;
function ChartHeading({ title, subtitle, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "card-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 3110,
=======
                        lineNumber: 3150,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 3111,
=======
                        lineNumber: 3151,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3109,
=======
                lineNumber: 3149,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            icon
        ]
    }, void 0, true, {
        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
        lineNumber: 3108,
=======
        lineNumber: 3148,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
        columnNumber: 5
    }, this);
}
_c2 = ChartHeading;
function PerformanceRow({ label, value, percentage }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pm-performance-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pm-performance-label",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3129,
=======
                lineNumber: 3169,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pm-performance-bar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pm-performance-fill",
                    style: {
                        width: `${Math.min(100, Math.max(0, percentage))}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                    lineNumber: 3131,
=======
                    lineNumber: 3171,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3130,
=======
                lineNumber: 3170,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pm-performance-value",
                children: [
                    value,
                    percentage !== value ? `%` : ""
                ]
            }, void 0, true, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3136,
=======
                lineNumber: 3176,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
        lineNumber: 3128,
=======
        lineNumber: 3168,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
        columnNumber: 5
    }, this);
}
_c3 = PerformanceRow;
function SummaryItem({ className, icon, value, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `summary-item ${className}`,
        children: [
            icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: value
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3157,
=======
                lineNumber: 3197,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3158,
=======
                lineNumber: 3198,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
        lineNumber: 3155,
=======
        lineNumber: 3195,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
        columnNumber: 5
    }, this);
}
_c4 = SummaryItem;
function WorkloadCard({ className, icon, label, value, hint, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `workload-card ${className}`,
        onClick: onClick,
        children: [
            icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 3182,
=======
                        lineNumber: 3222,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 3183,
=======
                        lineNumber: 3223,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: hint
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 3184,
=======
                        lineNumber: 3224,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3181,
=======
                lineNumber: 3221,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                size: 20
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3186,
=======
                lineNumber: 3226,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
        lineNumber: 3179,
=======
        lineNumber: 3219,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
        columnNumber: 5
    }, this);
}
_c5 = WorkloadCard;
function StatusPanel({ title, subtitle, rows, status, onClose, updatePM }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "dashboard-card due-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 3210,
=======
                                lineNumber: 3250,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: subtitle
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 3211,
=======
                                lineNumber: 3251,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 3209,
=======
                        lineNumber: 3249,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "icon-button",
                        "aria-label": "Close",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 3214,
=======
                            lineNumber: 3254,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 3213,
=======
                        lineNumber: 3253,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3208,
=======
                lineNumber: 3248,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "table-wrap due-soon-table",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Equipment"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 3219,
=======
                                        lineNumber: 3259,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 22
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Inventory No"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 3219,
=======
                                        lineNumber: 3259,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 40
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "PM"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 3219,
=======
                                        lineNumber: 3259,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 61
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Due Date"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 3219,
=======
                                        lineNumber: 3259,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 72
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 3219,
=======
                                        lineNumber: 3259,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 89
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Action"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                        lineNumber: 3219,
=======
                                        lineNumber: 3259,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                        columnNumber: 104
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                lineNumber: 3219,
=======
                                lineNumber: 3259,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                columnNumber: 18
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 3219,
=======
                            lineNumber: 3259,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: rows.map(({ equipment, pm })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: equipment.equipment_name
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 3223,
=======
                                                lineNumber: 3263,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 3223,
=======
                                            lineNumber: 3263,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: equipment.inventory_no
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 3224,
=======
                                            lineNumber: 3264,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: [
                                                "PM ",
                                                pm.pm_no
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 3225,
=======
                                            lineNumber: 3265,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: fmtDate(pm.scheduled_date)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 3226,
=======
                                            lineNumber: 3266,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `status ${status.toLowerCase()}`,
                                                children: status
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 3227,
=======
                                                lineNumber: 3267,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 3227,
=======
                                            lineNumber: 3267,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: status === "Pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn btn-primary",
                                                onClick: ()=>updatePM(pm, true),
                                                children: "Mark Done"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                                lineNumber: 3228,
=======
                                                lineNumber: 3268,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                                columnNumber: 46
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                            lineNumber: 3228,
=======
                                            lineNumber: 3268,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, pm.id, true, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 3222,
=======
                                    lineNumber: 3262,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 3220,
=======
                            lineNumber: 3260,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                    lineNumber: 3218,
=======
                    lineNumber: 3258,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3217,
=======
                lineNumber: 3257,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
        lineNumber: 3207,
=======
        lineNumber: 3247,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
        columnNumber: 5
    }, this);
}
_c6 = StatusPanel;
function Select({ value, setValue, options, label, any }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
        value: value,
        onChange: (e)=>setValue(e.target.value),
        "aria-label": label,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                children: any ?? "All"
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3259,
=======
                lineNumber: 3299,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            options.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    children: x
                }, x, false, {
                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                    lineNumber: 3264,
=======
                    lineNumber: 3304,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
        lineNumber: 3252,
=======
        lineNumber: 3292,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
        columnNumber: 5
    }, this);
}
_c7 = Select;
function EquipmentRow({ e, index, showSection, canManage, canUpdate, updatePM, markAll, openEquipmentForm, deleteEquipment, openPMDateEditor }) {
    const pm = (n)=>(e.pm_schedules ?? []).find((x)=>x.pm_no === n);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: index + 1
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3307,
=======
                lineNumber: 3347,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            showSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: e.section ? getSectionLabel(e.section) : "-"
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3310,
=======
                lineNumber: 3350,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: e.department
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                    lineNumber: 3318,
=======
                    lineNumber: 3358,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3317,
=======
                lineNumber: 3357,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: e.inventory_no
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3321,
=======
                lineNumber: 3361,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: e.location
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3323,
=======
                lineNumber: 3363,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: e.equipment_name
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                    lineNumber: 3326,
=======
                    lineNumber: 3366,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3325,
=======
                lineNumber: 3365,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: e.model
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3329,
=======
                lineNumber: 3369,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: e.serial_no
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3331,
=======
                lineNumber: 3371,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: e.make
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3333,
=======
                lineNumber: 3373,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "pill",
                    children: e.campus
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                    lineNumber: 3336,
=======
                    lineNumber: 3376,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3335,
=======
                lineNumber: 3375,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "pill",
                    children: e.contract
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                    lineNumber: 3342,
=======
                    lineNumber: 3382,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3341,
=======
                lineNumber: 3381,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            [
                1,
                2,
                3,
                4
            ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PMCell, {
                            pm: pm(n),
                            updatePM: updatePM,
                            canManage: canManage,
                            canUpdate: canUpdate,
                            openPMDateEditor: openPMDateEditor
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 3349,
=======
                            lineNumber: 3389,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 11
                        }, this),
                        n === 4 && canUpdate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "markAll",
                            onClick: ()=>markAll(e),
<<<<<<< HEAD
                            children: "✓ Mark all PMs"
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard.tsx",
                            lineNumber: 3360,
=======
                            children: "Mark All Done"
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard.tsx",
                            lineNumber: 3400,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 13
                        }, this)
                    ]
                }, n, true, {
                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                    lineNumber: 3348,
=======
                    lineNumber: 3388,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                    columnNumber: 9
                }, this)),
            canManage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "edit-button",
                            onClick: ()=>openEquipmentForm(e),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 3381,
=======
                                    lineNumber: 3421,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                "Edit"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 3375,
=======
                            lineNumber: 3415,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "delete-button",
                            onClick: ()=>deleteEquipment(e.id),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                                    lineNumber: 3391,
=======
                                    lineNumber: 3431,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                                    columnNumber: 15
                                }, this),
                                "Delete"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 3385,
=======
                            lineNumber: 3425,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                    lineNumber: 3374,
=======
                    lineNumber: 3414,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3373,
=======
                lineNumber: 3413,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
        lineNumber: 3306,
=======
        lineNumber: 3346,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
        columnNumber: 5
    }, this);
}
_c8 = EquipmentRow;
function PMCell({ pm, updatePM, canManage, canUpdate, openPMDateEditor }) {
    if (!pm) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "—"
        }, void 0, false, {
            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
            lineNumber: 3420,
=======
            lineNumber: 3460,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
            columnNumber: 12
        }, this);
    }
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$pm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPMStatus"])(pm);
    if (pm.scheduled_date === null) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pmcell",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pmdate",
                    children: "N/A"
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                    lineNumber: 3428,
=======
                    lineNumber: 3468,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "status",
                    children: "N/A"
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                    lineNumber: 3430,
=======
                    lineNumber: 3470,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                    columnNumber: 9
                }, this),
                canManage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "edit-button",
                    onClick: ()=>openPMDateEditor(pm),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                            size: 13
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                            lineNumber: 3437,
=======
                            lineNumber: 3477,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                            columnNumber: 13
                        }, this),
                        "Edit Date"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                    lineNumber: 3433,
=======
                    lineNumber: 3473,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
            lineNumber: 3427,
=======
            lineNumber: 3467,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pmcell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pmdate",
                children: pm.scheduled_date || "N/A"
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3447,
=======
                lineNumber: 3487,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `status ${s.toLowerCase()}`,
                children: s
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3451,
=======
                lineNumber: 3491,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 7
            }, this),
            canUpdate && (s === "Done" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "undo",
                onClick: ()=>updatePM(pm, false),
<<<<<<< HEAD
                children: "↶ Undo"
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
                lineNumber: 3458,
=======
                children: "Undo"
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
                lineNumber: 3498,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "mark",
                onClick: ()=>updatePM(pm, true),
<<<<<<< HEAD
                children: "✓ Mark Done"
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
                lineNumber: 3467,
=======
                children: "Mark Done"
            }, void 0, false, {
                fileName: "[project]/components/Dashboard.tsx",
                lineNumber: 3505,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 9
            }, this)),
            canManage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "edit-button",
                onClick: ()=>openPMDateEditor(pm),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                        size: 13
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                        lineNumber: 3484,
=======
                        lineNumber: 3520,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                        columnNumber: 11
                    }, this),
                    "Edit Date"
                ]
            }, void 0, true, {
                fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
                lineNumber: 3478,
=======
                lineNumber: 3514,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Dashboard.tsx",
<<<<<<< HEAD
        lineNumber: 3446,
=======
        lineNumber: 3486,
>>>>>>> ec5d388 (Allow section admins and technicians to update PM status)
        columnNumber: 5
    }, this);
}
_c9 = PMCell;
function getSectionLabel(section) {
    switch(section){
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
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dashboard");
__turbopack_context__.k.register(_c1, "Stat");
__turbopack_context__.k.register(_c2, "ChartHeading");
__turbopack_context__.k.register(_c3, "PerformanceRow");
__turbopack_context__.k.register(_c4, "SummaryItem");
__turbopack_context__.k.register(_c5, "WorkloadCard");
__turbopack_context__.k.register(_c6, "StatusPanel");
__turbopack_context__.k.register(_c7, "Select");
__turbopack_context__.k.register(_c8, "EquipmentRow");
__turbopack_context__.k.register(_c9, "PMCell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/pm.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPMStatus",
    ()=>getPMStatus
]);
function getPMStatus(pm) {
    if (!pm.scheduled_date) {
        return "N/A";
    }
    if (pm.completed_date) {
        return "Done";
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const scheduled = new Date(`${pm.scheduled_date}T00:00:00`);
    const diffDays = Math.ceil((scheduled.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return "Overdue";
    if (diffDays <= 30) return "Pending";
    return "Scheduled";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/supabase-browser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://klqhdcficpqfyugkbjvc.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "sb_publishable_eCR1N0jKoWpM-26V3P85-w_IqS_A6NU");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(supabaseUrl, supabaseKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1msh7y9._.js.map