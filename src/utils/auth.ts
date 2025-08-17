import { supabaseAuth, OTPAuthOptions, VerifyOTPOptions } from '@/lib/supabase'
import { toast } from 'sonner'

export interface AuthUser {
  id: string
  email: string
  user_metadata?: Record<string, any>
  app_metadata?: Record<string, any>
}

export interface AuthResponse {
  success: boolean
  user?: AuthUser
  session?: any
  error?: string
}

// OTP Authentication Service
export const otpAuthService = {
  /**
   * Send OTP code to user's email
   */
  sendOTPCode: async (email: string, userData?: Record<string, any>): Promise<AuthResponse> => {
    try {
      if (!email || !email.includes('@')) {
        return {
          success: false,
          error: 'Please enter a valid email address'
        }
      }

      const { data, error } = await supabaseAuth.signInWithOTP({
        email,
        options: {
          shouldCreateUser: true,
          data: userData || {}
        }
      })

      if (error) {
        console.error('Error sending OTP:', error)
        return {
          success: false,
          error: error.message || 'Failed to send OTP code'
        }
      }

      return {
        success: true,
        user: data.user as AuthUser
      }
    } catch (error: any) {
      console.error('Error in sendOTPCode:', error)
      return {
        success: false,
        error: error.message || 'An unexpected error occurred'
      }
    }
  },

  /**
   * Verify OTP code
   */
  verifyOTPCode: async (email: string, otpCode: string): Promise<AuthResponse> => {
    try {
      if (!email || !otpCode) {
        return {
          success: false,
          error: 'Email and OTP code are required'
        }
      }

      if (otpCode.length !== 6) {
        return {
          success: false,
          error: 'OTP code must be 6 digits'
        }
      }

      const { data, error } = await supabaseAuth.verifyOTP({
        email,
        token: otpCode,
        type: 'email'
      })

      if (error) {
        console.error('Error verifying OTP:', error)
        return {
          success: false,
          error: error.message || 'Invalid or expired OTP code'
        }
      }

      if (!data.user || !data.session) {
        return {
          success: false,
          error: 'Authentication failed'
        }
      }

      return {
        success: true,
        user: data.user as AuthUser,
        session: data.session
      }
    } catch (error: any) {
      console.error('Error in verifyOTPCode:', error)
      return {
        success: false,
        error: error.message || 'An unexpected error occurred'
      }
    }
  },

  /**
   * Get current user session
   */
  getCurrentSession: async (): Promise<AuthResponse> => {
    try {
      const { data, error } = await supabaseAuth.getSession()

      if (error) {
        console.error('Error getting session:', error)
        return {
          success: false,
          error: error.message || 'Failed to get session'
        }
      }

      if (!data.session) {
        return {
          success: false,
          error: 'No active session found'
        }
      }

      return {
        success: true,
        user: data.session.user as AuthUser,
        session: data.session
      }
    } catch (error: any) {
      console.error('Error in getCurrentSession:', error)
      return {
        success: false,
        error: error.message || 'An unexpected error occurred'
      }
    }
  },

  /**
   * Get current user
   */
  getCurrentUser: async (): Promise<AuthResponse> => {
    try {
      const { data, error } = await supabaseAuth.getUser()

      if (error) {
        console.error('Error getting user:', error)
        return {
          success: false,
          error: error.message || 'Failed to get user'
        }
      }

      if (!data.user) {
        return {
          success: false,
          error: 'No user found'
        }
      }

      return {
        success: true,
        user: data.user as AuthUser
      }
    } catch (error: any) {
      console.error('Error in getCurrentUser:', error)
      return {
        success: false,
        error: error.message || 'An unexpected error occurred'
      }
    }
  },

  /**
   * Sign out user
   */
  signOut: async (): Promise<AuthResponse> => {
    try {
      const { error } = await supabaseAuth.signOut()

      if (error) {
        console.error('Error signing out:', error)
        return {
          success: false,
          error: error.message || 'Failed to sign out'
        }
      }

      return {
        success: true
      }
    } catch (error: any) {
      console.error('Error in signOut:', error)
      return {
        success: false,
        error: error.message || 'An unexpected error occurred'
      }
    }
  },

  /**
   * Check if user is authenticated
   */
  isAuthenticated: async (): Promise<boolean> => {
    try {
      const sessionResponse = await otpAuthService.getCurrentSession()
      return sessionResponse.success && !!sessionResponse.session
    } catch (error) {
      console.error('Error checking authentication:', error)
      return false
    }
  },

  /**
   * Resend OTP code
   */
  resendOTPCode: async (email: string): Promise<AuthResponse> => {
    return await otpAuthService.sendOTPCode(email)
  }
}

// Helper functions for handling auth state changes
export const authHelpers = {
  /**
   * Set up auth state listener
   */
  setupAuthListener: (callback: (user: AuthUser | null, session: any) => void) => {
    return supabaseAuth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event, session)
      
      if (event === 'SIGNED_IN' && session) {
        callback(session.user as AuthUser, session)
      } else if (event === 'SIGNED_OUT') {
        callback(null, null)
      }
    })
  },

  /**
   * Handle authentication errors with user-friendly messages
   */
  handleAuthError: (error: any) => {
    let message = 'An unexpected error occurred'

    if (error?.message) {
      const errorMessage = error.message.toLowerCase()
      
      if (errorMessage.includes('invalid otp')) {
        message = 'Invalid OTP code. Please check and try again.'
      } else if (errorMessage.includes('expired')) {
        message = 'OTP code has expired. Please request a new one.'
      } else if (errorMessage.includes('too many requests')) {
        message = 'Too many requests. Please wait a moment before trying again.'
      } else if (errorMessage.includes('email not confirmed')) {
        message = 'Please verify the OTP code sent to your email.'
      } else {
        message = error.message
      }
    }

    toast.error(message)
    return message
  }
}

export default otpAuthService
