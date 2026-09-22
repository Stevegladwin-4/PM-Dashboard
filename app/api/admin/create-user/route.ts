import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createServerClient } from "@/lib/supabase-server";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const validRoles = [
  "SUPER_ADMIN",
  "SUPER_VIEWER",
  "section_admin",
  "technician",
];

const validSections = [
  "HIGH_END_RADIOLOGY",
  "LIFE_SUPPORT",
  "GENERAL_MONITORING",
];

export async function POST(request: Request) {
  try {
    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        { error: "Server Supabase configuration is missing" },
        { status: 500 }
      );
    }

    // Check logged-in user
    const cookieStore = await cookies();
    const supabase = createServerClient(cookieStore);

    const {
      data: { user: currentUser },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError) {
      console.error("AUTH ERROR:", authError);

      return NextResponse.json(
        { error: `Authentication error: ${authError.message}` },
        { status: 401 }
      );
    }

    if (!currentUser) {
      return NextResponse.json(
        { error: "You are not logged in" },
        { status: 401 }
      );
    }

    // Check current user's role
    const {
      data: currentRole,
      error: roleError,
    } = await supabase
      .from("user_roles")
      .select("role, section")
      .eq("user_id", currentUser.id)
      .maybeSingle();

    if (roleError) {
      console.error("ROLE ERROR:", roleError);

      return NextResponse.json(
        { error: `Could not read your role: ${roleError.message}` },
        { status: 500 }
      );
    }

    if (currentRole?.role !== "SUPER_ADMIN") {
      return NextResponse.json(
        {
          error: `Only SUPER_ADMIN can create users. Current role: ${
            currentRole?.role ?? "none"
          }`,
        },
        { status: 403 }
      );
    }

    // Read request
    const body = await request.json();

    const loginId = String(body.login_id ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");
    const role = String(body.role ?? "").trim();

    const section =
      body.section === "None" ||
      body.section === "" ||
      body.section === null ||
      body.section === undefined
        ? null
        : String(body.section).trim();

    // Validate Login ID
    if (!loginId) {
      return NextResponse.json(
        { error: "Login ID is required" },
        { status: 400 }
      );
    }

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate password
    if (!password || password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    // Validate role
    if (!validRoles.includes(role)) {
      return NextResponse.json(
        {
          error: `Invalid role "${role}". Allowed roles: ${validRoles.join(
            ", "
          )}`,
        },
        { status: 400 }
      );
    }

    // SUPER_ADMIN and SUPER_VIEWER don't need a section
    if (role === "SUPER_ADMIN" || role === "SUPER_VIEWER") {
      if (section !== null) {
        return NextResponse.json(
          {
            error:
              "SUPER_ADMIN and SUPER_VIEWER users must have no section assigned",
          },
          { status: 400 }
        );
      }
    }

    // Section users must have a valid section
    if (role === "section_admin" || role === "technician") {
      if (!section || !validSections.includes(section)) {
        return NextResponse.json(
          {
            error:
              "A valid section is required for section_admin and technician",
          },
          { status: 400 }
        );
      }
    }

    // Use service-role client ONLY on the server
    const adminClient = createClient(
      supabaseUrl,
      serviceRoleKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    // Check duplicate Login ID
    const { data: existingLogin } = await adminClient
      .from("user_roles")
      .select("user_id")
      .eq("login_id", loginId)
      .maybeSingle();

    if (existingLogin) {
      return NextResponse.json(
        { error: "Login ID already exists" },
        { status: 400 }
      );
    }

    // Create Supabase Auth user
    const {
      data: createdUser,
      error: createUserError,
    } = await adminClient.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });

    if (createUserError) {
      console.error("AUTH CREATE ERROR:", createUserError);

      return NextResponse.json(
        { error: createUserError.message },
        { status: 400 }
      );
    }

    if (!createdUser.user) {
      return NextResponse.json(
        { error: "Supabase did not return the created user" },
        { status: 500 }
      );
    }

    // Create application role
    const {
      error: insertRoleError,
    } = await adminClient.from("user_roles").insert({
      user_id: createdUser.user.id,
      login_id: loginId,
      role,
      section,
    });

    if (insertRoleError) {
      console.error("USER ROLE INSERT ERROR:", insertRoleError);

      // Roll back Auth user if role insert fails
      await adminClient.auth.admin.deleteUser(createdUser.user.id);

      return NextResponse.json(
        {
          error: `User account was created but role setup failed: ${insertRoleError.message}`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "User created successfully",
      user: {
        id: createdUser.user.id,
        email: createdUser.user.email,
        login_id: loginId,
        role,
        section,
      },
    });
  } catch (error) {
    console.error("CREATE USER UNEXPECTED ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unexpected server error",
      },
      { status: 500 }
    );
  }
}
