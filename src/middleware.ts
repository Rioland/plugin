
// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   const { pathname } = request.nextUrl;
//   const token = request.cookies.get('token')?.value;
//   const userRole = request.cookies.get('role')?.value;
//   console.log("User Role:", userRole);
//   console.log("Token:", token);


//   // Define protected routes
//   const protectedRoutes = ['/dashboard'];

//   // Check if the current route is protected and the token is missing
//   if (protectedRoutes.some((route) => pathname.startsWith(route)) && !token) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }else{
//         try {
       
        
//                 // Role-based redirection
//                 if (
//                   (userRole === '1' && pathname.startsWith('/dashboard/buyer')) ||
//                   (userRole === '2' && pathname.startsWith('/dashboard/seller'))
//                 ) {
//                   return NextResponse.redirect(new URL('/', request.url));
//                 }
//               } catch (error) {
//                 // Handle invalid token
//                 console.log('Error during authentication:', error);
//                 return NextResponse.redirect(new URL('/', request.url));
//               }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/dashboard/:path*'],
// };


import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
