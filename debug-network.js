// Network Debug Script for Supabase Issues
import https from 'https'
import http from 'http'
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('🔍 Network Debug for Supabase Connection Issues\n')

// 1. Check environment variables
console.log('1. Environment Variables Check:')
console.log('SUPABASE_URL:', supabaseUrl || '❌ MISSING')
console.log('ANON_KEY:', supabaseAnonKey ? `✅ Present (${supabaseAnonKey.substring(0, 20)}...)` : '❌ MISSING')
console.log('')

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing environment variables!')
  process.exit(1)
}

// 2. Parse the Supabase URL
let hostname, protocol
try {
  const url = new URL(supabaseUrl)
  hostname = url.hostname
  protocol = url.protocol
  console.log('2. URL Parsing:')
  console.log('   Protocol:', protocol)
  console.log('   Hostname:', hostname)
  console.log('   Full URL:', supabaseUrl)
  console.log('')
} catch (error) {
  console.error('❌ Invalid Supabase URL:', error.message)
  process.exit(1)
}

// 3. Test basic HTTP connectivity
function testHttpConnectivity() {
  return new Promise((resolve) => {
    console.log('3. Testing HTTP Connectivity...')
    
    const client = protocol === 'https:' ? https : http
    const options = {
      hostname,
      port: protocol === 'https:' ? 443 : 80,
      path: '/',
      method: 'GET',
      timeout: 10000
    }

    const req = client.request(options, (res) => {
      console.log('✅ HTTP Connection successful')
      console.log('   Status:', res.statusCode)
      console.log('   Headers:', JSON.stringify(res.headers, null, 2))
      resolve(true)
    })

    req.on('error', (error) => {
      console.error('❌ HTTP Connection failed:', error.message)
      console.error('   Error code:', error.code)
      if (error.code === 'ENOTFOUND') {
        console.log('💡 DNS resolution failed - check internet connection')
      } else if (error.code === 'ETIMEDOUT') {
        console.log('💡 Connection timed out - check firewall/proxy settings')
      } else if (error.code === 'ECONNREFUSED') {
        console.log('💡 Connection refused - Supabase server might be down')
      }
      resolve(false)
    })

    req.on('timeout', () => {
      console.error('❌ HTTP Connection timed out')
      req.destroy()
      resolve(false)
    })

    req.end()
  })
}

// 4. Test Supabase API endpoint specifically
function testSupabaseAPI() {
  return new Promise((resolve) => {
    console.log('\n4. Testing Supabase API Endpoint...')
    
    const client = https
    const options = {
      hostname,
      port: 443,
      path: '/rest/v1/',
      method: 'GET',
      timeout: 10000,
      headers: {
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json'
      }
    }

    const req = client.request(options, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        console.log('✅ Supabase API accessible')
        console.log('   Status:', res.statusCode)
        console.log('   Response length:', data.length)
        if (res.statusCode !== 200) {
          console.log('   Response:', data)
        }
        resolve(true)
      })
    })

    req.on('error', (error) => {
      console.error('❌ Supabase API connection failed:', error.message)
      resolve(false)
    })

    req.on('timeout', () => {
      console.error('❌ Supabase API connection timed out')
      req.destroy()
      resolve(false)
    })

    req.end()
  })
}

// 5. Test Supabase Auth endpoint
function testSupabaseAuth() {
  return new Promise((resolve) => {
    console.log('\n5. Testing Supabase Auth Endpoint...')
    
    const client = https
    const options = {
      hostname,
      port: 443,
      path: '/auth/v1/settings',
      method: 'GET',
      timeout: 10000,
      headers: {
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
        'Content-Type': 'application/json'
      }
    }

    const req = client.request(options, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        console.log('✅ Supabase Auth endpoint accessible')
        console.log('   Status:', res.statusCode)
        if (res.statusCode === 200) {
          try {
            const settings = JSON.parse(data)
            console.log('   Email confirmations enabled:', settings.email_confirmations_enabled || 'Unknown')
            console.log('   Site URL:', settings.site_url || 'Not set')
          } catch (e) {
            console.log('   Response:', data.substring(0, 200) + '...')
          }
        } else {
          console.log('   Response:', data)
        }
        resolve(true)
      })
    })

    req.on('error', (error) => {
      console.error('❌ Supabase Auth connection failed:', error.message)
      resolve(false)
    })

    req.on('timeout', () => {
      console.error('❌ Supabase Auth connection timed out')
      req.destroy()
      resolve(false)
    })

    req.end()
  })
}

// 6. Test with Supabase client
async function testSupabaseClient() {
  console.log('\n6. Testing Supabase Client...')
  
  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey)
    
    // Try a simple operation
    const { data, error } = await supabase.auth.getSession()
    
    if (error) {
      console.error('❌ Supabase client error:', error.message)
    } else {
      console.log('✅ Supabase client working')
      console.log('   Session:', data.session ? 'Active session found' : 'No active session (normal)')
    }
  } catch (error) {
    console.error('❌ Supabase client failed:', error.message)
    if (error.message.includes('fetch failed')) {
      console.log('💡 This suggests a network connectivity issue')
    }
  }
}

// 7. Check system network configuration
function checkSystemNetwork() {
  console.log('\n7. System Network Check...')
  
  // Check if we're behind a proxy
  const httpProxy = process.env.HTTP_PROXY || process.env.http_proxy
  const httpsProxy = process.env.HTTPS_PROXY || process.env.https_proxy
  
  if (httpProxy || httpsProxy) {
    console.log('🔄 Proxy detected:')
    if (httpProxy) console.log('   HTTP_PROXY:', httpProxy)
    if (httpsProxy) console.log('   HTTPS_PROXY:', httpsProxy)
  } else {
    console.log('✅ No proxy detected')
  }
  
  console.log('   Node.js version:', process.version)
  console.log('   Platform:', process.platform)
}

// Run all tests
async function runAllTests() {
  checkSystemNetwork()
  
  const httpOk = await testHttpConnectivity()
  if (!httpOk) {
    console.log('\n❌ Basic connectivity failed. Check your internet connection.')
    return
  }
  
  const apiOk = await testSupabaseAPI()
  const authOk = await testSupabaseAuth()
  
  if (!apiOk || !authOk) {
    console.log('\n❌ Supabase endpoints not accessible. Your project might be paused or have issues.')
    console.log('💡 Check your Supabase dashboard: https://supabase.com/dashboard')
    return
  }
  
  await testSupabaseClient()
  
  console.log('\n📋 TROUBLESHOOTING SUMMARY:')
  console.log('If you see network errors:')
  console.log('1. Check your internet connection')
  console.log('2. Check if your Supabase project is active (not paused)')
  console.log('3. Verify your environment variables are correct')
  console.log('4. Check for firewall/antivirus blocking connections')
  console.log('5. Try from a different network (mobile hotspot) to test')
}

runAllTests().catch(console.error)
