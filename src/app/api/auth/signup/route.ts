import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { email, password, firstName, lastName, phone, accountType } =
      await req.json();
console.log( email, password, firstName, lastName, phone, accountType)


    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // optional
      user_metadata: {
        firstName,
        lastName,
        phone,
        // role,
      },
    });

    if (authError) {
      console.error(authError);
      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

    const userId = authData.user?.id;

    // 2. Save profile data in `profiles` table
    await supabase.from("profiles").insert({
      id: userId,
      first_name: firstName,
      last_name: lastName,
      phone,
      account_type: accountType,
      email,
    });

    // 3. Call OTP sender
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/send-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, email }),
    });

    return Response.json({ success: true, userId });
  } catch (err: any) {
    console.error("Signup error:", err);
    return Response.json({ success: false, error: "Signup failed" }, { status: 500 });
  }
}
