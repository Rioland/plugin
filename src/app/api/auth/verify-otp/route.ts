import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const { userId, otp } = await req.json();

  const { data, error } = await supabase
    .from("verification_codes")
    .select("*")
    .eq("user_id", userId)
    .eq("otp", otp)
    .single();

  if (error || !data) {
    return Response.json({ success: false, error: "Invalid OTP" }, { status: 400 });
  }

  if (new Date(data.expires_at) < new Date()) {
    return Response.json({ success: false, error: "OTP expired" }, { status: 400 });
  }

  // ✅ Mark user as confirmed
  await supabase.auth.admin.updateUserById(userId, {
    email_confirm: true,
  });

  return Response.json({ success: true });
}
