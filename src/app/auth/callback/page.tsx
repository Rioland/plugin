import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
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
        console.log('User authenticated:', data.user.email)
        
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
      return NextResponse.redirect(`${origin}/?error=Authentication failed`)
    }
  }

  // Return the user to an error page with instructions if something went wrong
  return NextResponse.redirect(`${origin}/?error=Invalid authentication callback`)
}

export default function AuthCallbackPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f2c94c] to-black text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
        <p>Completing authentication...</p>
      </div>
    </div>
  )
}
