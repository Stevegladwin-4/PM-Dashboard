module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/app/api/equipment/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase-server.ts [app-route] (ecmascript)");
;
;
function clean(value) {
    return typeof value === "string" ? value.trim() : "";
}
function validDate(value) {
    const date = clean(value);
    if (!date) return "";
    return /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : "";
}
async function getUserAndRole() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2d$server$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        return {
            supabase,
            user: null,
            role: null
        };
    }
    const { data: roleData } = await supabase.from("user_roles").select("role").eq("user_id", user.id).maybeSingle();
    return {
        supabase,
        user,
        role: roleData?.role ?? null
    };
}
async function GET() {
    const { supabase, user } = await getUserAndRole();
    if (!user) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized"
        }, {
            status: 401
        });
    }
    const { data, error } = await supabase.from("equipment").select("*, pm_schedules(*)").order("sno");
    if (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message
        }, {
            status: 400
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data ?? []);
}
async function POST(request) {
    const { supabase, user, role } = await getUserAndRole();
    if (!user) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized"
        }, {
            status: 401
        });
    }
    if (role !== "admin") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Admin permission required."
        }, {
            status: 403
        });
    }
    try {
        const body = await request.json();
        const sno = Number(body.sno);
        const department = clean(body.department);
        const inventoryNo = clean(body.inventory_no);
        const equipmentName = clean(body.equipment_name);
        if (!Number.isFinite(sno)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "S.NO must be a valid number."
            }, {
                status: 400
            });
        }
        if (!department) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Department is required."
            }, {
                status: 400
            });
        }
        if (!inventoryNo) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Inventory No is required."
            }, {
                status: 400
            });
        }
        if (!equipmentName) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Equipment Name is required."
            }, {
                status: 400
            });
        }
        const equipmentPayload = {
            sno,
            department,
            inventory_no: inventoryNo,
            location: clean(body.location),
            equipment_name: equipmentName,
            model: clean(body.model),
            serial_no: clean(body.serial_no),
            make: clean(body.make),
            campus: clean(body.campus),
            contract: clean(body.contract)
        };
        /*
     * Find existing equipment by Inventory No.
     */ const { data: existing, error: findError } = await supabase.from("equipment").select("*").eq("inventory_no", inventoryNo).maybeSingle();
        if (findError) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: findError.message
            }, {
                status: 400
            });
        }
        let equipmentId;
        let equipment;
        /*
     * EXISTING EQUIPMENT
     */ if (existing) {
            const { data: updated, error } = await supabase.from("equipment").update(equipmentPayload).eq("id", existing.id).select("*").single();
            if (error) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: error.message
                }, {
                    status: 400
                });
            }
            equipmentId = updated.id;
            equipment = updated;
        } else {
            const { data: inserted, error } = await supabase.from("equipment").insert(equipmentPayload).select("*").single();
            if (error) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: error.message
                }, {
                    status: 400
                });
            }
            equipmentId = inserted.id;
            equipment = inserted;
        }
        /*
     * PM1-4
     *
     * If date supplied:
     *     update existing PM
     *
     * If PM doesn't exist:
     *     insert it
     *
     * If no date supplied:
     *     use defaults only when PM doesn't exist.
     */ const pmDates = body.pm_dates ?? {};
        for (const pmNo of [
            1,
            2,
            3,
            4
        ]){
            const suppliedDate = validDate(pmDates[String(pmNo)]) || null;
            const { data: existingPM, error: pmFindError } = await supabase.from("pm_schedules").select("id").eq("equipment_id", equipmentId).eq("pm_no", pmNo).maybeSingle();
            if (pmFindError) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: pmFindError.message
                }, {
                    status: 400
                });
            }
            /*
       * UPDATE EXISTING PM
       */ if (existingPM) {
                const { error: pmUpdateError } = await supabase.from("pm_schedules").update({
                    scheduled_date: suppliedDate
                }).eq("id", existingPM.id);
                if (pmUpdateError) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: pmUpdateError.message
                    }, {
                        status: 400
                    });
                }
            } else {
                const { error: pmInsertError } = await supabase.from("pm_schedules").insert({
                    equipment_id: equipmentId,
                    pm_no: pmNo,
                    scheduled_date: suppliedDate
                });
                if (pmInsertError) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: pmInsertError.message
                    }, {
                        status: 400
                    });
                }
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            action: existing ? "updated" : "created",
            equipment
        });
    } catch (error) {
        console.error(error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error instanceof Error ? error.message : "Invalid request."
        }, {
            status: 400
        });
    }
}
async function PATCH(request) {
    const { supabase, user, role } = await getUserAndRole();
    if (!user) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized"
        }, {
            status: 401
        });
    }
    if (role !== "admin") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Admin permission required."
        }, {
            status: 403
        });
    }
    try {
        const body = await request.json();
        if (!body.id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Equipment ID is required."
            }, {
                status: 400
            });
        }
        const updates = {
            sno: Number(body.sno),
            department: clean(body.department),
            inventory_no: clean(body.inventory_no),
            location: clean(body.location),
            equipment_name: clean(body.equipment_name),
            model: clean(body.model),
            serial_no: clean(body.serial_no),
            make: clean(body.make),
            campus: clean(body.campus),
            contract: clean(body.contract)
        };
        if (!Number.isFinite(updates.sno) || !updates.department || !updates.inventory_no || !updates.equipment_name) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "S.NO, Department, Inventory No and Equipment Name are required."
            }, {
                status: 400
            });
        }
        const { data, error } = await supabase.from("equipment").update(updates).eq("id", body.id).select("*").single();
        if (error) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: error.message
            }, {
                status: 400
            });
        }
        /*
     * Update PM dates.
     */ if (body.pm_dates) {
            for (const pmNo of [
                1,
                2,
                3,
                4
            ]){
                const date = validDate(body.pm_dates[String(pmNo)]) || null;
                const { data: existingPM } = await supabase.from("pm_schedules").select("id").eq("equipment_id", body.id).eq("pm_no", pmNo).maybeSingle();
                if (existingPM) {
                    const { error: pmError } = await supabase.from("pm_schedules").update({
                        scheduled_date: date
                    }).eq("id", existingPM.id);
                    if (pmError) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: pmError.message
                        }, {
                            status: 400
                        });
                    }
                } else {
                    const { error: pmError } = await supabase.from("pm_schedules").insert({
                        equipment_id: body.id,
                        pm_no: pmNo,
                        scheduled_date: date
                    });
                    if (pmError) {
                        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                            error: pmError.message
                        }, {
                            status: 400
                        });
                    }
                }
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            equipment: data
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error instanceof Error ? error.message : "Invalid request."
        }, {
            status: 400
        });
    }
}
async function DELETE(request) {
    const { supabase, user, role } = await getUserAndRole();
    if (!user) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized"
        }, {
            status: 401
        });
    }
    if (role !== "admin") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Admin permission required."
        }, {
            status: 403
        });
    }
    try {
        const body = await request.json();
        if (!body.id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Equipment ID is required."
            }, {
                status: 400
            });
        }
        const { error } = await supabase.from("equipment").delete().eq("id", body.id);
        if (error) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: error.message
            }, {
                status: 400
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error instanceof Error ? error.message : "Invalid request."
        }, {
            status: 400
        });
    }
}
}),
"[project]/lib/supabase-server.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
;
;
async function createClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://klqhdcficpqfyugkbjvc.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtscWhkY2ZpY3BxZnl1Z2tianZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0MDUzOTgsImV4cCI6MjEwNDk4MTM5OH0.VbDhPnTExGYSK8CQxsKdS5FwdaJ5owX9gVUKiy9QxME"), {
        cookies: {
            getAll () {
                return cookieStore.getAll();
            },
            setAll (cookiesToSet) {
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));
                } catch  {}
            }
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0xitb8y._.js.map