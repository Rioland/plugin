// Test Supabase Connection
// Run this with: node test-supabase.js

import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('🔧 Testing Supabase Connection...\n')

// Check environment variables
console.log('Environment Variables:')
console.log('SUPABASE_URL:', supabaseUrl ? '✅ Present' : '❌ Missing')
console.log('SUPABASE_ANON_KEY:', supabaseAnonKey ? '✅ Present' : '❌ Missing')
console.log('')

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing required environment variables!')
  process.exit(1)
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testConnection() {
  try {
    console.log('🔍 Testing database connection...')
    
    // Test basic connection by checking if we can query profiles table
    const { data, error, count } = await supabase
      .from('profiles')
      .select('*', { count: 'exact' })
      .limit(1)
    
    if (error) {
      console.error('❌ Database connection failed:', error.message)
      
      if (error.message.includes('relation "public.profiles" does not exist')) {
        console.log('\n💡 It looks like your database tables haven\'t been created yet.')
        console.log('Please run the SQL script in your Supabase dashboard:')
        console.log('1. Go to https://supabase.com/dashboard')
        console.log('2. Select your project')
        console.log('3. Go to SQL Editor')
        console.log('4. Run the contents of supabase_setup.sql')
      }
      
      return false
    }
    
    console.log('✅ Database connection successful!')
    console.log(`📊 Found ${count} profiles in database`)
    
    // Test auth configuration
    console.log('\n🔐 Testing auth configuration...')
    
    // This should not throw an error even without a user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError) {
      console.log('⚠️  Auth warning:', authError.message)
    } else {
      console.log('✅ Auth configuration working!')
      console.log('Current user:', user ? user.email : 'No user logged in (this is normal)')
    }
    
    console.log('\n🎉 Supabase is properly configured!')
    console.log('You can now:')
    console.log('1. Run your Next.js app: npm run dev')
    console.log('2. Test signup and login functionality')
    
    return true
    
  } catch (error) {
    console.error('❌ Unexpected error:', error.message)
    return false
  }
}

// Test email auth settings
async function testEmailSettings() {
  console.log('\n📧 Email Configuration Notes:')
  console.log('Make sure in your Supabase Dashboard → Authentication → Settings:')
  console.log('1. ✅ "Enable email confirmations" is checked')
  console.log('2. 🔗 Site URL is set to: http://localhost:3000 (for development)')
  console.log('3. 🔗 Redirect URLs includes: http://localhost:3000/auth/callback')
  console.log('4. 📧 Email templates are configured (optional)')
}

// Run tests
testConnection().then((success) => {
  if (success) {
    testEmailSettings()
  }
})
