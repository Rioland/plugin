# Supabase OTP Authentication Setup Guide

## Prerequisites

1. **Supabase Project**: Create a new project at [supabase.com](https://supabase.com)
2. **Environment Variables**: Get your project URL and anon key

## Step 1: Environment Variables Setup

Create a `.env.local` file in your project root:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Your existing API configuration (keep this if needed)
NEXT_PUBLIC_API_BASE_URL=https://your-api-url.com
```

**How to get these values:**
1. Go to your Supabase project dashboard
2. Navigate to Settings → API
3. Copy the "Project URL" and "anon public" key

## Step 2: Supabase Project Settings

### Enable Email Authentication
1. Go to Authentication → Settings
2. Enable "Enable email confirmations"
3. **IMPORTANT**: Disable "Confirm email" if you want to use OTP only
4. Set "Site URL" to your domain (e.g., `http://localhost:3000` for development)

### Email Templates (Optional)
1. Go to Authentication → Email Templates
2. You can customize the OTP email template here

## Step 3: Database Setup (if needed)

If you want to store additional user data, you might need to:

1. **Create custom tables** (optional):
```sql
-- Example: User profiles table
CREATE TABLE public.user_profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE,
  email TEXT,
  first_name TEXT,
  last_name TEXT,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  PRIMARY KEY (id)
);

-- Enable RLS
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile" ON public.user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.user_profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.user_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
```

## Step 4: Common Errors and Solutions

### Error: "Invalid API key"
**Solution**: Double-check your environment variables and restart your dev server

### Error: "Email not confirmed"
**Solution**: 
- Go to Authentication → Settings
- Disable "Confirm email" for OTP-only flow
- Or use the email confirmation flow instead of OTP

### Error: "User already registered"
**Solution**: 
- Either sign in existing user or handle the error gracefully
- Check if `shouldCreateUser: false` in your OTP options

### Error: "Too many requests"
**Solution**: 
- Wait a few minutes before retrying
- Implement rate limiting on your frontend

### Error: "Invalid OTP"
**Solutions**:
- Make sure OTP is exactly 6 digits
- Check if OTP has expired (usually valid for 60 seconds)
- Ensure email and token match exactly

## Step 5: Testing Checklist

1. ✅ Environment variables are set correctly
2. ✅ Supabase project settings configured
3. ✅ Email authentication enabled
4. ✅ Site URL matches your domain
5. ✅ OTP email is being received
6. ✅ OTP verification works

## Step 6: Development vs Production

### Development Settings:
- Site URL: `http://localhost:3000`
- Redirect URLs: `http://localhost:3000/**`

### Production Settings:
- Site URL: `https://yourdomain.com`
- Redirect URLs: `https://yourdomain.com/**`

## Debugging Tips

1. **Check Browser Console**: Look for network errors or JavaScript errors
2. **Check Supabase Logs**: Go to your project dashboard → Logs
3. **Test with Postman**: Test the Supabase API directly
4. **Enable Debug Mode**: Add `console.log` statements in your auth functions

## Example Debug Code

Add this to your auth functions to see what's happening:

```javascript
console.log('Sending OTP to:', email)
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
console.log('Environment check:', {
  hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
  hasKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
})
```

## Support

If you're still having issues:
1. Check the [Supabase documentation](https://supabase.com/docs)
2. Look at the [Supabase Auth examples](https://github.com/supabase/examples)
3. Ask on [Supabase Discord](https://discord.supabase.com)
