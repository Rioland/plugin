import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Create Supabase client with custom options for OTP authentication
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Configure OTP settings
    flowType: 'pkce',
    autoRefreshToken: true,
    persistSession: true,
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
  },
})

// Types for OTP authentication
export interface OTPAuthOptions {
  email: string
  options?: {
    shouldCreateUser?: boolean
    data?: Record<string, any>
  }
}

export interface VerifyOTPOptions {
  email: string
  token: string
  type: 'email'
}

// OTP Authentication functions
export const supabaseAuth = {
  // Send OTP to email
  signInWithOTP: async ({ email, options }: OTPAuthOptions) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: options?.shouldCreateUser ?? true,
        data: options?.data,
        // Disable magic link, use OTP only
        emailRedirectTo: undefined,
      },
    })

    return { data, error }
  },

  // Verify OTP code
  verifyOTP: async ({ email, token, type }: VerifyOTPOptions) => {
    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token,
      type,
    })

    return { data, error }
  },

  // Get current session
  getSession: async () => {
    const { data, error } = await supabase.auth.getSession()
    return { data, error }
  },

  // Get current user
  getUser: async () => {
    const { data, error } = await supabase.auth.getUser()
    return { data, error }
  },

  // Sign out
  signOut: async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  // Listen to auth changes
  onAuthStateChange: (callback: (event: string, session: any) => void) => {
    return supabase.auth.onAuthStateChange(callback)
  },

  // Refresh session
  refreshSession: async () => {
    const { data, error } = await supabase.auth.refreshSession()
    return { data, error }
  },
}

export default supabase
