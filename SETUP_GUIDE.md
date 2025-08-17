# 🚀 Supabase Setup Guide for Plugin App

## Step 1: Run the Database Setup

1. **Go to your Supabase Dashboard**: https://supabase.com/dashboard
2. **Select your project**: `wupupdfnaoaexjlgifxm`
3. **Navigate to SQL Editor** (left sidebar)
4. **Create a new query** and paste the entire contents of `supabase_setup.sql`
5. **Run the query** by clicking the "Run" button

This will create all the necessary tables, functions, triggers, and security policies.

## Step 2: Configure Authentication Settings

1. **Go to Authentication → Settings** in your Supabase dashboard
2. **Configure these settings**:
   - ✅ **Enable email confirmations**: Checked
   - 🔗 **Site URL**: `http://localhost:3000` (for development)
   - 🔗 **Redirect URLs**: Add `http://localhost:3000/auth/callback`
   - 📧 **Email confirmation template**: Use default or customize

## Step 3: Test Your Connection

Run the test script to verify everything is working:

```bash
# Make sure you're in your project directory
cd /Users/cleaques_sys1/Downloads/plugin-user

# Install dotenv if needed
npm install dotenv

# Run the test (make sure your .env.local is set up)
node test-supabase.js
```

## Step 4: Start Your Development Server

```bash
npm run dev
```

Your app should now be running at `http://localhost:3000`

## Step 5: Test the Authentication Flow

1. **Go to** `http://localhost:3000/select-account-type`
2. **Select account type** (Buyer/Seller)
3. **Fill out the signup form**
4. **Check your email** for the verification link
5. **Click the verification link** - you should be redirected back and logged in
6. **Try logging in** with unverified accounts to see the verification flow

## Environment Variables Check

Your `.env.local` should have these variables (✅ You already have them):

```env
NEXT_PUBLIC_SUPABASE_URL=https://wupupdfnaoaexjlgifxm.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🔧 Troubleshooting

### If signup doesn't work:
1. Check browser console for errors
2. Verify environment variables are loaded
3. Check Supabase logs in dashboard
4. Make sure database tables were created

### If email verification doesn't work:
1. Check spam folder
2. Verify Site URL and Redirect URLs in Supabase settings
3. Make sure auth callback route exists at `/auth/callback`

### If login doesn't redirect properly:
1. Check that user profiles are being created automatically
2. Verify the auth callback route is working
3. Check browser network tab for redirect issues

## 📊 Database Schema Overview

Your database now includes:
- **profiles**: User profile data (extends auth.users)
- **categories**: Service categories
- **services**: Service listings by sellers
- **orders**: Order management
- **reviews**: Rating and review system
- **messages**: Order communication
- **verification_codes**: Custom OTP handling (if needed)

## 🔐 Security Features

- **Row Level Security (RLS)** enabled on all tables
- **Automatic profile creation** on user signup
- **Role-based access control** (buyer/seller)
- **Secure authentication** with email verification
- **Protected routes** via middleware

## 🎉 What's Working Now

- ✅ Complete email verification flow
- ✅ Role-based user registration
- ✅ Automatic profile creation
- ✅ Protected dashboard routes
- ✅ Resend verification emails
- ✅ Proper error handling
- ✅ Integration with existing UI

## Next Steps After Setup

1. **Test the complete flow** end-to-end
2. **Customize email templates** in Supabase dashboard
3. **Add production environment variables** when deploying
4. **Set up proper error monitoring**

Need help? Check the console logs and Supabase dashboard logs for detailed error information!
