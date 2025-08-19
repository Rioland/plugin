import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest } from 'next/server'


import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
        const { searchParams } = new URL(request.url)
        const token_hash = searchParams.get('token_hash')
        const type = searchParams.get('type') as EmailOtpType | null
        const next = searchParams.get('next') ?? '/'

        if (token_hash && type) {
                const supabase = await createClient()

                const { error, data } = await supabase.auth.verifyOtp({
                        type,
                        token_hash,
                })

                if (error) {
                        console.error('Error verifying OTP:', error.message)
                        // redirect user to an error page with some instructions
                        redirect(`/?error=${encodeURIComponent(error.message)}`)
                        return
                }
                if (data) {
                        console.log('OTP verified successfully:', data)
                        if(data.user.user_metadata?.account_type === 'admin') {
                                // Redirect to admin dashboard if user is an admin
                                redirect('/dashboard/admin')
                                return
                        }else if(data.user.user_metadata?.account_type === 'buyer') {
                                // Redirect to user dashboard if user is a regular user
                                redirect('/dashboard/buyer')
                                return
                        }else if(data.user.user_metadata?.account_type === 'seller') {
                                // Redirect to seller dashboard if user is a seller
                                redirect('/dashboard/seller')
                                return
                        }
                        // If no specific account type, just redirect to the next page

                        // Redirect to the next page after successful verification
                        redirect(next)
                        return
                }
        }
      


// redirect the user to an error page with some instructions
redirect('/?error=unable to verify email')
}