import { NextResponse } from "next/server";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase-server";

const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

export async function POST(request: Request) {
  try {
    if (!serviceRoleKey || !supabaseUrl) {
      return NextResponse.json(
        { error: "Supabase server configuration is missing" },
        { status: 500 }
      );
    }

    const supabase = await createClient();

    const {
      data: { user: currentUser },
    } = await supabase.auth.getUser();

    if (!currentUser) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { data: currentRole, error: roleError } =
      await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", currentUser.id)
        .maybeSingle();

    if (roleError || currentRole?.role !== "SUPER_ADMIN") {
      return NextResponse.json(
        { error: "Only SUPER_ADMIN can create users" },
        { status: 403 }
      );
    }

    const body = await request.json();

    const loginId = String(body.login_id ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");
    const role = String(body.role ?? "");
    const section =
      body.section === "None" || !body.section
        ? null
        : String(body.section);

    if (!loginId || !email || !password || !role) {
      return NextResponse.json(
        {
          error:
            "Login ID, email, password and role are required",
        },
        { status: 400 }
      );
    }

    const allowedRoles = [
      "SUPER_ADMIN",
      "SUPER_VIEWER",
      "section_admin",
      "technician",
    ];

    if (!allowedRoles.includes(role)) {
      return NextResponse.json(
        { error: "Invalid role" },
        { status: 400 }
      );
    }

    const allowedSections = [
      "HIGH_END_RADIOLOGY",
      "LIFE_SUPPORT",
      "GENERAL_MONITORING",
    ];

    if (section && !allowedSections.includes(section)) {
      return NextResponse.json(
        { error: "Invalid section" },
        { status: 400 }
      );
    }

    if (
      (role === "SUPER_ADMIN" ||
        role === "SUPER_VIEWER") &&
      section !== null
    ) {
      return NextResponse.json(
        {
          error:
            "SUPER_ADMIN and SUPER_VIEWER must not have a section",
        },
        { status: 400 }
      );
    }

    if (
      (role === "section_admin" ||
        role === "technician") &&
      !section
    ) {
      return NextResponse.json(
        {
          error:
            "Section is required for section_admin and technician",
        },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        {
          error: "Password must be at least 6 characters",
        },
        { status: 400 }
      );
    }

    const adminClient = createAdminClient(
      supabaseUrl,
      serviceRoleKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    const {
      data: createdUser,
      error: createUserError,
    } = await adminClient.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (createUserError || !createdUser.user) {
      return NextResponse.json(
        {
          error:
            createUserError?.message ??
            "Failed to create Auth user",
        },
        { status: 400 }
      );
    }

    const { error: roleInsertError } =
      await adminClient
        .from("user_roles")
        .insert({
          user_id: createdUser.user.id,
          login_id: loginId,
          role,
          section,
        });

    if (roleInsertError) {
      await adminClient.auth.admin.deleteUser(
        createdUser.user.id
      );

      return NextResponse.json(
        {
          error: roleInsertError.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: createdUser.user.id,
        email,
        login_id: loginId,
        role,
        section,
      },
    });
  } catch (error) {
    console.error("Create user error:", error);

    return NextResponse.json(
      {
        error: "Unexpected server error",
      },
      { status: 500 }
    );
  }
}
