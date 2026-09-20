import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const { loginId } = await request.json();

    if (!loginId) {
      return NextResponse.json(
        { error: "Login ID is required." },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data, error } = await supabase
      .from("user_roles")
      .select("user_id")
      .eq("login_id", loginId)
      .maybeSingle();

    if (error || !data) {
      return NextResponse.json(
        { error: "Login ID not found." },
        { status: 404 }
      );
    }

    const { data: userData, error: userError } =
      await supabase.auth.admin.getUserById(data.user_id);

    if (userError || !userData.user?.email) {
      return NextResponse.json(
        { error: "Unable to find account." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      email: userData.user.email,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
