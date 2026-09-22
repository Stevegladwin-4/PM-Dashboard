import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: roleData } = await supabase
    .from("user_roles")
    .select("role, section")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!roleData) {
    return NextResponse.json(
      { error: "User role not found" },
      { status: 403 }
    );
  }

  const { id } = await params;

  const { data: pm, error: pmError } = await supabase
    .from("pm_schedules")
    .select(`
      id,
      equipment_id,
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

  const allowed =
    roleData.role === "SUPER_ADMIN" ||
    (roleData.role === "technician" &&
      roleData.section === equipmentSection);

  if (!allowed) {
    return NextResponse.json(
      { error: "You are not allowed to update this PM" },
      { status: 403 }
    );
  }

  const body = await request.json();

  const updateData: {
    completed_date?: string | null;
    completed_by?: string | null;
    scheduled_date?: string | null;
  } = {};

  if ("completed" in body) {
    updateData.completed_date = body.completed
      ? new Date().toISOString().slice(0, 10)
      : null;
    updateData.completed_by = body.completed ? user.id : null;
  }

  if ("scheduled_date" in body) {
    updateData.scheduled_date = body.scheduled_date;
  }

  const { data, error } = await supabase
    .from("pm_schedules")
    .update(updateData)
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(data);
}