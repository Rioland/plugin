import { supabaseAuth } from '@/lib/supabase'
import { toast } from 'sonner'

export interface AuthUser {
  id: string
  email: string
  email_confirmed_at?: string
  user_metadata?: Record<string, any>
  app_metadata?: Record<string, any>
}

export interface AuthResponse {
  success: boolean
  user?: AuthUser
  session?: any
  error?: string
  message?: string
}

export interface SignupData {
  email: string
  password: string
  firstName: string
  lastName: string
  phoneNumber: string
  accountType: string
}

// Complete Supabase Authentication Service
export const supabaseAuthService = {
  /**
   * Sign up new user with email verification
   */
  signUp: async (signupData: SignupData): Promise<AuthResponse> => {
    try {
      const { email, password, firstName, lastName, phoneNumber, accountType } = signupData

      // Validation
      if (!email || !password || !firstName || !lastName) {
        return {
          success: false,
          error: 'All required fields must be provided'
        }
      }

      if (!email.includes('@')) {
        return {
          success: false,
          error: 'Please enter a valid email address'
        }
      }

      if (password.length < 8) {
        return {
          success: false,
          error: 'Password must be at least 8 characters long'
        }
      }

      console.log('Creating user with Supabase:', email)

      // Create user with Supabase
      const { data, error } = await supabaseAuth.signInWithOTP({
        email,
        options: {
          shouldCreateUser: true,
          data: {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            account_type: accountType,
            full_name: `${firstName} ${lastName}`,
            display_name: `${firstName} ${lastName}`,
          }
        }
      })

      if (error) {
        console.error('Supabase signup error:', error)
        
        let errorMessage = 'Failed to create account'
        if (error.message.toLowerCase().includes('user already registered')) {
          errorMessage = 'An account with this email already exists. Please try logging in.'
        } else if (error.message.toLowerCase().includes('invalid email')) {
          errorMessage = 'Please enter a valid email address'
        } else if (error.message.toLowerCase().includes('weak password')) {
          errorMessage = 'Password is too weak. Please use a stronger password.'
        } else if (error.message) {
          errorMessage = error.message
        }
        
        return {
          success: false,
          error: errorMessage
        }
      }

      console.log('User created successfully:', data)
      return {
        success: true,
        message: 'Account created! Please check your email for verification link.',
        user: data.user as AuthUser
      }
    } catch (error: any) {
      console.error('Error in signUp:', error)
      return {
        success: false,
        error: error.message || 'An unexpected error occurred during signup'
      }
    }
  },

  /**
   * Sign up with password and email verification (alternative method)
   */
  signUpWithPassword: async (signupData: SignupData): Promise<AuthResponse> => {
    try {
      const { email, password, firstName, lastName, phoneNumber, accountType } = signupData

      // Validation
      if (!email || !password || !firstName || !lastName) {
        return {
          success: false,
          error: 'All required fields must be provided'
        }
      }

      if (!email.includes('@')) {
        return {
          success: false,
          error: 'Please enter a valid email address'
        }
      }

      if (password.length < 8) {
        return {
          success: false,
          error: 'Password must be at least 8 characters long'
        }
      }

      console.log('Creating user with password:', email)

      // Get the site URL for email confirmation
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin

      const { data, error } = await supabaseAuth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${siteUrl}/auth/callback`,
          data: {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            account_type: accountType,
            full_name: `${firstName} ${lastName}`,
            display_name: `${firstName} ${lastName}`,
          }
        }
      })

      if (error) {
        console.error('Supabase signup error:', error)
        
        let errorMessage = 'Failed to create account'
        if (error.message.toLowerCase().includes('user already registered')) {
          errorMessage = 'An account with this email already exists. Please try logging in.'
        } else if (error.message.toLowerCase().includes('invalid email')) {
          errorMessage = 'Please enter a valid email address'
        } else if (error.message.toLowerCase().includes('weak password')) {
          errorMessage = 'Password is too weak. Please use a stronger password.'
        } else if (error.message) {
          errorMessage = error.message
        }
        
        return {
          success: false,
          error: errorMessage
        }
      }

      console.log('User created successfully:', data)
      return {
        success: true,
        message: 'Account created! Please check your email for verification link.',
        user: data.user as AuthUser
      }
    } catch (error: any) {
      console.error('Error in signUpWithPassword:', error)
      return {
        success: false,
        error: error.message || 'An unexpected error occurred during signup'
      }
    }
  },

  /**
   * Sign in with email and password
   */
  signInWithPassword: async (email: string, password: string): Promise<AuthResponse> => {
    try {
      if (!email || !password) {
        return {
          success: false,
          error: 'Email and password are required'
        }
      }

      console.log('Signing in user:', email)

      const { data, error } = await supabaseAuth.signInWithPassword({
        email,
        password
      })

      if (error) {
        console.error('Supabase login error:', error)
        
        let errorMessage = 'Login failed'
        if (error.message.toLowerCase().includes('invalid login credentials')) {
          errorMessage = 'Invalid email or password'
        } else if (error.message.toLowerCase().includes('email not confirmed')) {
          errorMessage = 'Please verify your email before logging in'
        } else if (error.message.toLowerCase().includes('too many requests')) {
          errorMessage = 'Too many login attempts. Please wait before trying again.'
        } else if (error.message) {
          errorMessage = error.message
        }
        
        return {
          success: false,
          error: errorMessage
        }
      }

      if (!data.user) {
        return {
          success: false,
          error: 'Login failed. Please try again.'
        }
      }

      // Check if email is confirmed
      if (!data.user.email_confirmed_at) {
        return {
          success: false,
          error: 'Please verify your email before logging in',
          user: data.user as AuthUser
        }
      }

      console.log('User signed in successfully:', data.user.email)
      return {
        success: true,
        user: data.user as AuthUser,
        session: data.session,
        message: 'Login successful!'
      }
    } catch (error: any) {
      console.error('Error in signInWithPassword:', error)
      return {
        success: false,
        error: error.message || 'An unexpected error occurred during login'
      }
    }
  },

  /**
   * Resend email verification
   */
  resendVerification: async (email: string): Promise<AuthResponse> => {
    try {
      if (!email) {
        return {
          success: false,
          error: 'Email is required'
        }
      }

      console.log('Resending verification email to:', email)

      const { data, error } = await supabaseAuth.resend({
        type: 'signup',
        email,
        options: {
          emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || window.location.origin}/auth/callback`
        }
      })

      if (error) {
        console.error('Error resending verification:', error)
        
        let errorMessage = 'Failed to resend verification email'
        if (error.message.toLowerCase().includes('too many requests')) {
          errorMessage = 'Too many requests. Please wait before requesting another verification email.'
        } else if (error.message) {
          errorMessage = error.message
        }
        
        return {
          success: false,
          error: errorMessage
        }
      }

      console.log('Verification email resent successfully')
      return {
        success: true,
        message: 'Verification email sent! Please check your inbox.'
      }
    } catch (error: any) {
      console.error('Error in resendVerification:', error)
      return {
        success: false,
        error: error.message || 'Failed to resend verification email'
      }
    }
  },

  /**
   * Get current session
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

      console.log('User signed out successfully')
      return {
        success: true,
        message: 'Signed out successfully'
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
      const sessionResponse = await supabaseAuthService.getCurrentSession()
      return sessionResponse.success && !!sessionResponse.session
    } catch (error) {
      console.error('Error checking authentication:', error)
      return false
    }
  },

  /**
   * Reset password
   */
  resetPassword: async (email: string): Promise<AuthResponse> => {
    try {
      if (!email) {
        return {
          success: false,
          error: 'Email is required'
        }
      }

      const { data, error } = await supabaseAuth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || window.location.origin}/reset-password`
      })

      if (error) {
        console.error('Error sending reset password email:', error)
        return {
          success: false,
          error: error.message || 'Failed to send reset password email'
        }
      }

      return {
        success: true,
        message: 'Password reset email sent! Please check your inbox.'
      }
    } catch (error: any) {
      console.error('Error in resetPassword:', error)
      return {
        success: false,
        error: error.message || 'Failed to send reset password email'
      }
    }
  }
}

// Helper functions for handling auth state changes
export const authHelpers = {
  /**
   * Set up auth state listener
   */
  setupAuthListener: (callback: (user: AuthUser | null, session: any) => void) => {
    return supabaseAuth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event, session?.user?.email || 'No user')
      
      if (event === 'SIGNED_IN' && session) {
        callback(session.user as AuthUser, session)
      } else if (event === 'SIGNED_OUT') {
        callback(null, null)
      } else if (event === 'TOKEN_REFRESHED' && session) {
        callback(session.user as AuthUser, session)
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
      
      if (errorMessage.includes('invalid login credentials')) {
        message = 'Invalid email or password'
      } else if (errorMessage.includes('email not confirmed')) {
        message = 'Please verify your email before logging in'
      } else if (errorMessage.includes('user already registered')) {
        message = 'An account with this email already exists'
      } else if (errorMessage.includes('weak password')) {
        message = 'Password is too weak. Please use a stronger password.'
      } else if (errorMessage.includes('too many requests')) {
        message = 'Too many requests. Please wait before trying again.'
      } else if (errorMessage.includes('invalid email')) {
        message = 'Please enter a valid email address'
      } else {
        message = error.message
      }
    }

    toast.error(message)
    return message
  }
}

export default supabaseAuthService
