// middleware.ts
import { ApiBaseUrl } from '@/helper/functions'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// You can limit the middleware to just this route
export const config = {
  matcher: ['/dashboard/seller/:path*'],
}

export async function middleware(request: NextRequest) {
  // Mock fetching user profile (replace with actual logic)
  const profile = await getUserProfile(request)

  if ( !profile || !profile.kycverifications || profile.kycverifications.length === 0) {
    return NextResponse.redirect(new URL('/dashboard/seller/onboarding', request.url))
  }

  return NextResponse.next()
}

// Mock function - replace with actual logic to fetch profile data
async function getUserProfile(req: NextRequest) {
  // Example: get token from cookies and fetch profile
  const token = req.cookies.get('token')?.value
  if (!token) return {}

  const res = await fetch(`${ApiBaseUrl}/seller/get-profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await res.json()
  return data.profile || {}
}
