// /app/api/auth/send-otp/route.ts
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // use service role key in server env
);

export async function POST(req: Request) {
  const { userId, email } = await req.json();

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Store in DB
  await supabase.from("verification_codes").insert({
    user_id: userId,
    otp,
    expires_at: new Date(Date.now() + 10 * 60 * 1000), // 10 min expiry
  });

  // Send Email (example using Nodemailer with Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify your account",
    text: `Your OTP code is ${otp}. It expires in 10 minutes.`,
  });

  return Response.json({ success: true });
}
