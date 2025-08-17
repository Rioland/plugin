import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const origin = requestUrl.origin
  const redirectTo = requestUrl.searchParams.get('redirect_to')?.toString()

  if (code) {
    const supabase = createClient()
    
    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code)
      
      if (error) {
        console.error('Auth callback error:', error)
        // Redirect to login with error
        return NextResponse.redirect(`${origin}/?error=${encodeURIComponent(error.message)}`)
      }

      if (data.user) {
        console.log('User authenticated successfully:', data.user.email)
        
        // Check if user has completed profile
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.user.id)
          .single()

        if (profileError) {
          console.error('Profile fetch error:', profileError)
        }

        // Redirect based on profile completion or role
        if (profile?.account_type === 'seller') {
          return NextResponse.redirect(`${origin}/dashboard/seller`)
        } else if (profile?.account_type === 'buyer') {
          return NextResponse.redirect(`${origin}/dashboard/buyer`)
        } else {
          // Default redirect to dashboard
          return NextResponse.redirect(`${origin}/dashboard`)
        }
      }
    } catch (error) {
      console.error('Unexpected auth callback error:', error)
      return NextResponse.redirect(`${origin}/?error=Authentication%20failed`)
    }
  }

  // Return the user to login with error if something went wrong
  return NextResponse.redirect(`${origin}/?error=Invalid%20authentication%20callback`)
}
