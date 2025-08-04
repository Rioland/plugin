/* eslint-disable @next/next/no-img-element */
"use client";

import { toast, Toaster } from "sonner";

import {
  fetchAndReturnUserProfile,
  fetchAndReturnVendorProfile,
} from "@/helper/functions";
import Cookies from "js-cookie";

import React, { useState } from "react";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import Link from "next/link";

import { rememberMe, storedCredentials } from "@/stores/zustandStores";
import { useAuthStore } from "@/stores/userStore";
import { AuthApi } from "@/utils/api-calls";

export default function LoginForm() {
  const { login } = useAuthStore();
  const isChecked = rememberMe((state) => state.isChecked);
  const setIsChecked = rememberMe((state) => state.setIsChecked);
  const credentials = storedCredentials((state) => state.credentials);
  const setEmail = storedCredentials((state) => state.setEmail);
  const setPassword = storedCredentials((state) => state.setPassword);
  const clearCredentials = storedCredentials((state) => state.clearCredentials);

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      toast.error("All fields must be provided");
      return;
    }

    setLoading(true);

    try {
      // Call the login API
      const data = await AuthApi.login(email, password);

      if (data.status === false) {
        // Handle unverified email case
        if (data.errors?.verified === false && data.errors?.email) {
          toast.error(data.message);
          // Resend verification email
          const resendData = await AuthApi.resendVerification(data.errors.email);
          if (resendData.status === false) {
            toast.error(resendData.message);
          } else {
            toast.success(resendData.message);
            window.location.href = "/signup/verify-otp?email=" + encodeURIComponent(data.errors.email);
          }
        } else {
          // Handle other error cases
          toast.error(data.message);
        }
        setLoading(false);
        return;
      }

      // Handle "Remember Me" functionality
      if (isChecked) {
        setIsChecked(true);
        setEmail(email);
        setPassword(password);
      } else {
        setIsChecked(false);
        clearCredentials();
      }

      if (data.data.verified) {
        toast.success("Login successful");
        login(data.data.user, data.data.token, data.data.role, true);

        // Fetch profile based on role
        if (data.data.role === "1") {
          const profile = await fetchAndReturnVendorProfile();
          console.log("Profile fetched:", profile);
          if (profile && profile.id) {
            if (!profile.kycverifications || profile.kycverifications.length === 0) {
              window.location.href = `/dashboard/seller/onboarding`;
            } else {
              window.location.href = `/dashboard/seller`;
            }
          } else {
            toast.error("Failed to fetch user profile");
            setLoading(false);
          }
        } else {
          const profile = await fetchAndReturnUserProfile();
          console.log("Profile fetched:", profile);
          if (profile && profile.id) {
            if (!profile.kycverifications || profile.kycverifications.length === 0) {
              window.location.href = `/dashboard/buyer/onboarding`;
            } else {
              window.location.href = `/dashboard/buyer`;
            }
          } else {
            toast.error("Failed to fetch user profile");
            setLoading(false);
          }
        }
      } else {
        // Fallback for unverified user (if errors object is not present)
        const resendData = await AuthApi.resendVerification(data.data.user.email);
        if (resendData.status === false) {
          toast.error(resendData.message);
          window.location.href = "/signup/verify-otp?email=" + encodeURIComponent(data.data.user.email);
        } else {
          toast.success(resendData.message);
   
        }
      }
    } catch (error: any) {
      console.error("Error during login:", error);
      toast.error(error.message || "An error occurred during login");
      if (error.cause?.verified === false && error.cause?.email) {
        toast.error("Please verify your email before logging in.");
        await AuthApi.resendVerification(error.cause.email);
        toast.success("Verification email resent. Please check your inbox.");
        window.location.href = "/signup/verify-otp?email=" + encodeURIComponent(error.cause.email);
      }
    } finally {
      // Reset loading state
      setIsChecked(false);
      setEmail("");
      setPassword("");
      clearCredentials();
      setShowPassword(false); 
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
                defaultValue={credentials.email ?? ""}
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
                defaultValue={credentials.password ?? ""}
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
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="remember" className="text-sm">Remember Me</label>
          </div>

          {loading ? (
            <img src="/images/preloader.gif" className="mx-auto" />
          ) : (
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-[oklch(0.79_0.18_86.03)] text-black font-semibold hover:opacity-90 transition"
            >
              Log in
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