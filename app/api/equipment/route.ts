import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase-server";

type EquipmentInput = {
  id?: string;
  sno: number | string;
  department: string;
  inventory_no: string;
  location?: string;
  equipment_name: string;
  model?: string;
  serial_no?: string;
  make?: string;
  campus?: string;
  contract?: string;
  pm_dates?: Record<string, string | null>;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validDate(value: unknown) {
  const date = clean(value);

  if (!date) return "";

  return /^\d{4}-\d{2}-\d{2}$/.test(date)
    ? date
    : "";
}

async function getUserAndRole() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      supabase,
      user: null,
      role: null,
    };
  }

  const { data: roleData } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", user.id)
    .maybeSingle();

  return {
    supabase,
    user,
    role: roleData?.role ?? null,
  };
}

/*
 * GET
 */
export async function GET() {
  const { supabase, user } = await getUserAndRole();

  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const { data, error } = await supabase
    .from("equipment")
    .select("*, pm_schedules(*)")
    .order("sno");

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }

  return NextResponse.json(data ?? []);
}

/*
 * POST
 *
 * NEW inventory number:
 *   INSERT equipment + PM1-4
 *
 * EXISTING inventory number:
 *   UPDATE equipment + PM1-4
 */
export async function POST(request: Request) {
  const { supabase, user, role } =
    await getUserAndRole();

  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  if (role !== "admin") {
    return NextResponse.json(
      { error: "Admin permission required." },
      { status: 403 }
    );
  }

  try {
    const body =
      (await request.json()) as EquipmentInput;

    const sno = Number(body.sno);
    const department = clean(body.department);
    const inventoryNo = clean(body.inventory_no);
    const equipmentName = clean(
      body.equipment_name
    );

    if (!Number.isFinite(sno)) {
      return NextResponse.json(
        { error: "S.NO must be a valid number." },
        { status: 400 }
      );
    }

    if (!department) {
      return NextResponse.json(
        { error: "Department is required." },
        { status: 400 }
      );
    }

    if (!inventoryNo) {
      return NextResponse.json(
        { error: "Inventory No is required." },
        { status: 400 }
      );
    }

    if (!equipmentName) {
      return NextResponse.json(
        { error: "Equipment Name is required." },
        { status: 400 }
      );
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
      contract: clean(body.contract),
    };

    /*
     * Find existing equipment by Inventory No.
     */
    const { data: existing, error: findError } =
      await supabase
        .from("equipment")
        .select("*")
        .eq("inventory_no", inventoryNo)
        .maybeSingle();

    if (findError) {
      return NextResponse.json(
        { error: findError.message },
        { status: 400 }
      );
    }

    let equipmentId: string;
    let equipment;

    /*
     * EXISTING EQUIPMENT
     */
    if (existing) {
      const { data: updated, error } =
        await supabase
          .from("equipment")
          .update(equipmentPayload)
          .eq("id", existing.id)
          .select("*")
          .single();

      if (error) {
        return NextResponse.json(
          { error: error.message },
          { status: 400 }
        );
      }

      equipmentId = updated.id;
      equipment = updated;
    }

    /*
     * NEW EQUIPMENT
     */
    else {
      const { data: inserted, error } =
        await supabase
          .from("equipment")
          .insert(equipmentPayload)
          .select("*")
          .single();

      if (error) {
        return NextResponse.json(
          { error: error.message },
          { status: 400 }
        );
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
     */
    const pmDates = body.pm_dates ?? {};

    for (const pmNo of [1, 2, 3, 4]) {
      const suppliedDate = validDate(pmDates[String(pmNo)]) || null;

      const { data: existingPM, error: pmFindError } =
        await supabase
          .from("pm_schedules")
          .select("id")
          .eq("equipment_id", equipmentId)
          .eq("pm_no", pmNo)
          .maybeSingle();

      if (pmFindError) {
        return NextResponse.json(
          { error: pmFindError.message },
          { status: 400 }
        );
      }

      /*
       * UPDATE EXISTING PM
       */
      if (existingPM) {
        const { error: pmUpdateError } =
          await supabase
            .from("pm_schedules")
            .update({
              scheduled_date: suppliedDate,
            })
            .eq("id", existingPM.id);

        if (pmUpdateError) {
          return NextResponse.json(
            { error: pmUpdateError.message },
            { status: 400 }
          );
        }
      }

      /*
       * INSERT MISSING PM
       */
      else {
        const { error: pmInsertError } =
          await supabase
            .from("pm_schedules")
            .insert({
              equipment_id: equipmentId,
              pm_no: pmNo,
              scheduled_date: suppliedDate,
            });

        if (pmInsertError) {
          return NextResponse.json(
            { error: pmInsertError.message },
            { status: 400 }
          );
        }
      }
    }

    return NextResponse.json({
      success: true,
      action: existing ? "updated" : "created",
      equipment,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Invalid request.",
      },
      { status: 400 }
    );
  }
}

/*
 * PATCH
 *
 * Used by Edit Equipment.
 */
export async function PATCH(request: Request) {
  const { supabase, user, role } =
    await getUserAndRole();

  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  if (role !== "admin") {
    return NextResponse.json(
      { error: "Admin permission required." },
      { status: 403 }
    );
  }

  try {
    const body =
      (await request.json()) as EquipmentInput;

    if (!body.id) {
      return NextResponse.json(
        { error: "Equipment ID is required." },
        { status: 400 }
      );
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
      contract: clean(body.contract),
    };

    if (
      !Number.isFinite(updates.sno) ||
      !updates.department ||
      !updates.inventory_no ||
      !updates.equipment_name
    ) {
      return NextResponse.json(
        {
          error:
            "S.NO, Department, Inventory No and Equipment Name are required.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("equipment")
      .update(updates)
      .eq("id", body.id)
      .select("*")
      .single();

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    /*
     * Update PM dates.
     */
    if (body.pm_dates) {
      for (const pmNo of [1, 2, 3, 4]) {
        const date = validDate(body.pm_dates[String(pmNo)]) || null;

        const { data: existingPM } =
          await supabase
            .from("pm_schedules")
            .select("id")
            .eq("equipment_id", body.id)
            .eq("pm_no", pmNo)
            .maybeSingle();

        if (existingPM) {
          const { error: pmError } =
            await supabase
              .from("pm_schedules")
              .update({
                scheduled_date: date,
              })
              .eq("id", existingPM.id);

          if (pmError) {
            return NextResponse.json(
              { error: pmError.message },
              { status: 400 }
            );
          }
        } else {
          const { error: pmError } =
            await supabase
              .from("pm_schedules")
              .insert({
                equipment_id: body.id,
                pm_no: pmNo,
                scheduled_date: date,
              });

          if (pmError) {
            return NextResponse.json(
              { error: pmError.message },
              { status: 400 }
            );
          }
        }
      }
    }

    return NextResponse.json({
      success: true,
      equipment: data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Invalid request.",
      },
      { status: 400 }
    );
  }
}

/*
 * DELETE
 */
export async function DELETE(request: Request) {
  const { supabase, user, role } =
    await getUserAndRole();

  if (!user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  if (role !== "admin") {
    return NextResponse.json(
      { error: "Admin permission required." },
      { status: 403 }
    );
  }

  try {
    const body = await request.json();

    if (!body.id) {
      return NextResponse.json(
        { error: "Equipment ID is required." },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("equipment")
      .delete()
      .eq("id", body.id);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Invalid request.",
      },
      { status: 400 }
    );
  }
}