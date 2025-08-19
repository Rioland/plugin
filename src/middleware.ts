// middleware.ts
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function middleware(req: Request) {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  if (user && !user.email_confirmed_at) {
    // 🚫 Don’t resend email here (middleware not suitable)
    // Just redirect to a "please verify" page
    return NextResponse.redirect(new URL("/auth/verify-success", req.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/dashboard/:path*"], // protect dashboard routes
};
