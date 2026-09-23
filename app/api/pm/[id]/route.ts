import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: roleData, error: roleError } = await supabase
      .from("user_roles")
      .select("role, section")
      .eq("user_id", user.id)
      .maybeSingle();

    if (roleError) {
      return NextResponse.json({ error: roleError.message }, { status: 500 });
    }

    if (!roleData) {
      return NextResponse.json(
        { error: "User role not found" },
        { status: 403 }
      );
    }

    const allowedRole =
      roleData.role === "SUPER_ADMIN" ||
      roleData.role === "section_admin" ||
      roleData.role === "technician";

    if (!allowedRole) {
      return NextResponse.json(
        { error: "You do not have permission to update PM schedules." },
        { status: 403 }
      );
    }

    const { id } = await params;

    const { data: pm, error: pmError } = await supabase
      .from("pm_schedules")
      .select(`
      id,
      equipment_id,
      scheduled_date,
      completed_date,
      completed_by,
      equipment:equipment_id (
        id,
        section
      )
    `)
      .eq("id", id)
      .single();

    if (pmError || !pm) {
      return NextResponse.json(
        { error: "PM schedule not found" },
        { status: 404 }
      );
    }

    const equipmentRelation = pm.equipment as unknown as
      | { section: string | null }
      | Array<{ section: string | null }>
      | null;

    const equipmentSection = Array.isArray(equipmentRelation)
      ? equipmentRelation[0]?.section
      : equipmentRelation?.section;

    if (
      roleData.role !== "SUPER_ADMIN" &&
      equipmentSection !== roleData.section
    ) {
      return NextResponse.json(
        { error: "You can only update PMs in your assigned section." },
        { status: 403 }
      );
    }

    const body = await request.json();
    const hasScheduledDate = Object.prototype.hasOwnProperty.call(
      body,
      "scheduled_date"
    );

    if (!hasScheduledDate && !pm.scheduled_date) {
      return NextResponse.json(
        { error: "N/A PM schedules cannot be marked as done." },
        { status: 400 }
      );
    }

    const scheduledDate = hasScheduledDate
      ? body.scheduled_date || null
      : pm.scheduled_date;
    const completedDate = hasScheduledDate
      ? pm.completed_date
      : body.completed_date ?? null;
    const completedBy = hasScheduledDate
      ? pm.completed_by
      : completedDate !== null
        ? user.id
        : null;

    const { data, error } = await supabase
      .from("pm_schedules")
      .update({
        scheduled_date: scheduledDate,
        completed_date: completedDate,
        completed_by: completedBy,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, pm: data });
  } catch (error) {
    console.error("PM API ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Unexpected server error",
      },
      { status: 500 }
    );
  }
}