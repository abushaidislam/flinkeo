import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) return null;

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
    },
  });
}

export async function POST(req: Request) {
  try {
    const supabase = getSupabaseAdmin();
    if (!supabase) {
      return NextResponse.json(
        {
          error:
            "Supabase environment variables are missing. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
        },
        { status: 500 },
      );
    }

    const body = await req.json();
    const {
      name,
      email,
      projectType,
      budget,
      timeline,
      message,
    }: {
      name?: string;
      email?: string;
      projectType?: string;
      budget?: string;
      timeline?: string;
      message?: string;
    } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const insertPayload = {
      name,
      email,
      project_type: projectType ?? null,
      budget: budget ?? null,
      timeline: timeline ?? null,
      message,
    };

    const { error } = await supabase
      .from("contact_requests")
      .insert(insertPayload);

    if (error) {
      console.error("Error inserting contact request", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Unexpected error handling contact request", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

