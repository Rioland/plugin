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

// Complete Authentication functions
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

  // Sign up with password and email verification
  signUp: async ({ email, password, options }: { email: string; password: string; options?: any }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options
    })

    return { data, error }
  },

  // Sign in with password
  signInWithPassword: async ({ email, password }: { email: string; password: string }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
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

  // Resend verification email
  resend: async ({ type, email, options }: { type: 'signup' | 'recovery'; email: string; options?: any }) => {
    const { data, error } = await supabase.auth.resend({
      type,
      email,
      options
    })

    return { data, error }
  },

  // Reset password
  resetPasswordForEmail: async (email: string, options?: any) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, options)
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
