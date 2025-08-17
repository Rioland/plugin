// Test Signup Flow
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('🧪 Testing Signup Flow with Actual Supabase Client...\n')

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testSignup() {
  try {
    // Test 1: Check if we can connect to Supabase
    console.log('1. Testing Supabase connection...')
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()
    
    if (sessionError) {
      console.error('❌ Session error:', sessionError.message)
      return
    } else {
      console.log('✅ Supabase connection working')
    }

    // Test 2: Try to read from profiles table (this will work if RLS is set up correctly)
    console.log('\n2. Testing profiles table access...')
    const { data: profiles, error: profileError } = await supabase
      .from('profiles')
      .select('count', { count: 'exact', head: true })
    
    if (profileError) {
      console.log('⚠️ Profiles table access:', profileError.message)
      // This might fail due to RLS, but that's okay
    } else {
      console.log('✅ Profiles table accessible')
    }

    // Test 3: Test signup flow (use a test email)
    console.log('\n3. Testing signup flow...')
    console.log('⚠️  This will create a real user account for testing')
    console.log('   Email: test-user-' + Date.now() + '@example.com')
    
    const testEmail = `test-user-${Date.now()}@example.com`
    const testPassword = 'TestPassword123!'
    
    const { data: signupData, error: signupError } = await supabase.auth.signUp({
      email: testEmail,
      password: testPassword,
      options: {
        data: {
          first_name: 'Test',
          last_name: 'User',
          phone_number: '1234567890',
          account_type: 'buyer',
          full_name: 'Test User',
          display_name: 'Test User'
        }
      }
    })

    if (signupError) {
      console.error('❌ Signup failed:', signupError.message)
      
      if (signupError.message.includes('Database error')) {
        console.log('💡 This means the trigger/function is still missing')
      } else if (signupError.message.includes('User already registered')) {
        console.log('💡 User already exists (this is normal for testing)')
      }
    } else {
      console.log('✅ Signup successful!')
      console.log('   User ID:', signupData.user?.id)
      console.log('   Email confirmed:', signupData.user?.email_confirmed_at ? 'Yes' : 'No (email verification needed)')
      
      // Check if profile was created
      if (signupData.user?.id) {
        const { data: profile, error: profileCheckError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', signupData.user.id)
          .single()
        
        if (profileCheckError) {
          console.log('⚠️ Profile check failed:', profileCheckError.message)
        } else if (profile) {
          console.log('✅ Profile created automatically!')
          console.log('   Name:', profile.first_name, profile.last_name)
          console.log('   Account Type:', profile.account_type)
        }
      }
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error.message)
  }
}

console.log('Environment check:')
console.log('URL:', supabaseUrl)
console.log('Key:', supabaseAnonKey ? 'Present' : 'Missing')
console.log('')

testSignup()
