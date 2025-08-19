import { createClient } from '@/lib/supabase/server'
import { type EmailOtpType } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? '/'
  const origin = request.nextUrl.origin // 👈 get absolute base URL

  if (token_hash && type) {
    const supabase = await createClient()

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })

    if (error) {
      return NextResponse.redirect(
        `${origin}/?error=${encodeURIComponent(error.message)}`
      )
    } else {
      // Success → redirect to reset password page
      return NextResponse.redirect(`${origin}/reset-password`)
    }
  }

  // Invalid case
  return NextResponse.redirect(`${origin}/?error=unable to verify-email`)
}
