/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { toast, Toaster } from "sonner";
import React, { useState, useTransition } from "react";
import { Eye, EyeOff, User, Lock, Mail } from "lucide-react";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/clients";

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const [userEmail, setUserEmail] = useState("");

  const supabase = createClient()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    setUserEmail(email);

    try {

      setLoading(true)

      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.toString(),
        password: password.toString(),
      })
      if (error) {
        if (error.message.includes("Email not confirmed")) {
          const redirectUrl = process.env.NEXT_PUBLIC_SITE_URL
            ? `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
            : `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"}/auth/callback`

          await supabase.auth.resend({
            type: "signup",
            email: email.toString(),
            options: {
              emailRedirectTo: redirectUrl,
            },
          })

          toast.error("Please verify your email before logging in.");
        } else {
          console.log('Login error:', error)
          toast.error(error.message);
        }
        return; // Don't proceed to success handling if there was an error
      }





      // If we get here, login was successful
      toast.success("Login successful!");
      router.push("/dashboard");
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error(error || "An unexpected error occurred");
    } finally {
      setLoading(false)
    }
  };

  // const handleResendVerification = async () => {
  //   if (!userEmail) {
  //     toast.error("Email is required to resend verification");
  //     return;
  //   }

  //   setResendPending(true);
  //   try {
  //     const formData = new FormData();
  //     formData.append('email', userEmail);

  //     const result = await resendVerificationEmail(null, formData);

  //     if (result.error) {
  //       toast.error(result.error);
  //     } else if (result.success) {
  //       toast.success(result.message || "Verification email sent! Please check your inbox.");
  //     }
  //   } catch (error: any) {
  //     console.error('Resend error:', error);
  //     toast.error(error.message || "Failed to resend verification email");
  //   } finally {
  //     setResendPending(false);
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f2c94c] to-black text-white p-2">
      <div className="bg-[#111111] rounded-2xl p-10 w-full max-w-xl shadow-xl border border-neutral-700">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <Toaster position="top-center" />
            <div className="p-2 rounded-lg">
              <img
                src="/images/logo-white-single.svg"
                alt="Logo"
                className="w-18 h-auto mb-4"
              />
            </div>
          </div>
          <h1 className="text-xl font-semibold">Login to Plugin</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-5">
            <label className="block mb-1 text-sm">Email Address</label>
            <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md">
              <User className="h-4 w-4 text-purple-400" />
              <input
                type="text"
                name="email"
                id="email"
                required
                defaultValue=""
                autoComplete="email"
                autoFocus
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck="false"
                placeholder="Enter your email address"
                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400 p-3"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="block mb-1 text-sm">Password</label>
            <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md relative">
              <Lock className="h-4 w-4 text-purple-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                defaultValue=""
                autoComplete="current-password"
                required
                name="password"
                id="password"
                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400 py-3"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-purple-300"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <div className="text-right mt-1">
              <a
                href="/forgot-password"
                className="text-[oklch(0.79_0.18_86.03)] text-xs"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-5">
            <input
              type="checkbox"
              id="remember"
              className="accent-purple-500"
              defaultChecked={false}
            />
            <label htmlFor="remember" className="text-sm">Remember Me</label>
          </div>

          {loading ? (
            <img src="/images/preloader.gif" className="mx-auto" />
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded-md bg-[oklch(0.79_0.18_86.03)] text-black font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Log in"}
            </button>
          )}

          <p className="text-center text-sm mt-4">
            Do not have an account?{" "}
            <Link
              href="/select-account-type"
              className="text-[oklch(0.79_0.18_86.03)] font-medium cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
        </form>
        {/* 
        {needsVerification && (
          <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
            <div className="flex items-center mb-2">
              <Mail className="h-4 w-4 text-yellow-400 mr-2" />
              <h3 className="text-sm font-semibold text-yellow-400">Email Verification Required</h3>
            </div>
            <p className="text-xs text-yellow-200 mb-3">
              Please check your email ({userEmail}) and click the verification link to complete your account setup.
            </p>
            <button
              onClick={handleResendVerification}
              disabled={resendPending}
              className="text-xs bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded transition disabled:opacity-50"
            >
              {resendPending ? "Sending..." : "Resend Verification Email"}
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
}