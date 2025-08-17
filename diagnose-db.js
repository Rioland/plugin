// Database Diagnosis Script
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Use service role key for admin access
const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function diagnoseDatabase() {
  console.log('🔍 Diagnosing Database Setup...\n')

  try {
    // Check if profiles table exists and its structure
    console.log('1. Checking profiles table...')
    const { data: profilesData, error: profilesError } = await supabase
      .from('profiles')
      .select('*')
      .limit(1)
    
    if (profilesError) {
      console.error('❌ Profiles table error:', profilesError.message)
    } else {
      console.log('✅ Profiles table accessible')
    }

    // Check if the trigger function exists using a direct SQL query
    console.log('\n2. Checking trigger function...')
    const { data: functionCheck, error: functionError } = await supabase
      .rpc('sql', {
        query: `
          SELECT 
            p.proname as function_name,
            n.nspname as schema_name
          FROM pg_proc p
          JOIN pg_namespace n ON p.pronamespace = n.oid
          WHERE p.proname = 'handle_new_user' 
          AND n.nspname = 'public';
        `
      })
      .single()

    if (functionError) {
      console.log('❌ Function check failed, trying alternative method...')
      
      // Alternative check using information_schema
      const { data: altCheck, error: altError } = await supabase
        .from('information_schema.routines')
        .select('routine_name, routine_schema')
        .eq('routine_name', 'handle_new_user')
        .eq('routine_schema', 'public')
      
      if (altError || !altCheck || altCheck.length === 0) {
        console.log('❌ handle_new_user function NOT FOUND')
        console.log('💡 This is likely the cause of your signup error')
      } else {
        console.log('✅ handle_new_user function exists')
      }
    } else {
      console.log('✅ handle_new_user function exists')
    }

    // Check if the trigger exists
    console.log('\n3. Checking trigger...')
    const { data: triggerCheck, error: triggerError } = await supabase
      .from('information_schema.triggers')
      .select('trigger_name, event_object_table, action_statement')
      .eq('trigger_name', 'on_auth_user_created')
      .eq('event_object_table', 'users')
    
    if (triggerError || !triggerCheck || triggerCheck.length === 0) {
      console.log('❌ Trigger on_auth_user_created NOT FOUND')
      console.log('💡 This is likely the cause of your signup error')
    } else {
      console.log('✅ Trigger on_auth_user_created exists')
      console.log('   Target table:', triggerCheck[0].event_object_table)
    }

    // Test profile creation manually
    console.log('\n4. Testing manual profile creation...')
    const testUserId = '550e8400-e29b-41d4-a716-446655440000' // Fake UUID for testing
    
    const { data: insertTest, error: insertError } = await supabase
      .from('profiles')
      .insert({
        id: testUserId,
        email: 'test@example.com',
        first_name: 'Test',
        last_name: 'User',
        account_type: 'buyer'
      })
      .select()
    
    if (insertError) {
      console.error('❌ Manual profile creation failed:', insertError.message)
    } else {
      console.log('✅ Manual profile creation works')
      
      // Clean up test data
      await supabase.from('profiles').delete().eq('id', testUserId)
      console.log('   (Test data cleaned up)')
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error.message)
  }

  console.log('\n📋 DIAGNOSIS SUMMARY:')
  console.log('If you see ❌ for the function or trigger, you need to:')
  console.log('1. Go to your Supabase Dashboard → SQL Editor')
  console.log('2. Run the complete supabase_setup.sql script')
  console.log('3. Make sure there are no errors when running the script')
}

diagnoseDatabase()
