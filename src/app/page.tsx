/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { toast, Toaster } from "sonner";
import React, { useState, useEffect } from "react";
import { Eye, EyeOff, User, Lock, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/clients";
import Swal from "sweetalert2";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  // Load "Remember Me" preference from localStorage on mount
  useEffect(() => {
    const savedRememberMe = localStorage.getItem("rememberMe");
    setRememberMe(savedRememberMe === "true");
  }, []);

  // Save "Remember Me" preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("rememberMe", rememberMe.toString());
  }, [rememberMe]);

  // Check for auth callback errors
  useEffect(() => {
    const error = searchParams.get("error");
    if (error) {
      setAuthError(error);
      Swal.fire({
        title: "Error!",
        text: error,
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  }, [searchParams]);

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
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        if (error.message.includes("Email not confirmed")) {
          const siteUrl =
            typeof window !== "undefined"
              ? window.location.origin
              : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

          const redirectUrl = `${siteUrl}/auth/verify-email`;

          await supabase.auth.resend({
            type: "signup",
            email,
            options: {
              emailRedirectTo: redirectUrl,
            },
          });

          toast.error("Please verify your email before logging in.");
        } else {
          console.log("Login error:", error);
          toast.error(error.message);
        }
        return;
      }

      // Handle Remember Me
      const accessToken = data.session?.access_token;
      const refreshToken = data.session?.refresh_token;

      if (!accessToken) {
        toast.error("Login failed: No access token received.");
        return;
      }

      if (rememberMe) {
        // Keep session even after browser restart
        await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken ?? "",
        });
      } else {
        // Clear existing refresh token for a temporary session
        await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: "", // This disables auto-refresh
        });
      }

      toast.success("Login successful!");
      if (data.user.user_metadata?.account_type === "seller") {
        router.push("/dashboard/seller");
      } else {
        router.push("/dashboard/buyer");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error?.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

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

        {/* Show auth callback errors */}
        {authError && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
            <div className="flex items-center mb-2">
              <AlertCircle className="h-4 w-4 text-red-400 mr-2" />
              <h3 className="text-sm font-semibold text-red-400">
                Authentication Error
              </h3>
            </div>
            <p className="text-xs text-red-200">{authError}</p>
            {authError.includes("expired") && (
              <Link
                href="/auth/forgot-password"
                className="inline-block mt-2 text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition"
              >
                Request New Reset Link
              </Link>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="mb-5">
            <label className="block mb-1 text-sm">Email Address</label>
            <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md">
              <User className="h-4 w-4 text-purple-400" />
              <input
                type="text"
                name="email"
                id="email"
                required
                autoComplete="email"
                placeholder="Enter your email address"
                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400 p-3"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="block mb-1 text-sm">Password</label>
            <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md relative">
              <Lock className="h-4 w-4 text-purple-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
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
                href="/auth/forgot-password"
                className="text-[oklch(0.79_0.18_86.03)] text-xs"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2 mb-5">
            <input
              type="checkbox"
              id="remember"
              className="accent-purple-500"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember" className="text-sm">
              Remember Me
            </label>
          </div>

          {/* Submit Button */}
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
      </div>
    </div>
  );
}
