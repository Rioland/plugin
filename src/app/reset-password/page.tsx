/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { toast, Toaster } from "sonner";
import { useState, useEffect } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/clients";

export default function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  // Check if we have the required tokens in the URL
  useEffect(() => {
    const accessToken = searchParams.get('access_token');
    const refreshToken = searchParams.get('refresh_token');
    const type = searchParams.get('type');

    if (type === 'recovery' && accessToken && refreshToken) {
      // Set the session with the tokens from the URL
      supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      });
    } else {
      // If no valid tokens, redirect to forgot password page
      toast.error("Invalid or expired reset link. Please request a new one.");
      router.push("/forgot-password");
    }
  }, [searchParams, router, supabase.auth]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        toast.error(error.message || "Failed to reset password");
      } else {
        toast.success("Password updated successfully!");
        setPasswordReset(true);
        // Redirect to login after a delay
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (error: any) {
      console.error("Error during password reset:", error);
      toast.error(error.message || "An error occurred during password reset");
    } finally {
      setLoading(false);
    }
  };

  if (passwordReset) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f2c94c] to-black text-white">
        <div className="bg-[#111111] rounded-2xl p-10 w-full max-w-md shadow-xl border border-neutral-700">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-2 rounded-lg">
                <img
                  src="/images/logo-white-single.svg"
                  alt="Logo"
                  className="w-18 h-auto mb-4"
                />
              </div>
            </div>
            <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <Lock className="h-6 w-6 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-green-400">Password Updated!</h3>
              </div>
              <p className="text-sm text-green-200">
                Your password has been successfully updated. You can now log in with your new password.
              </p>
            </div>
            <Link 
              href="/" 
              className="w-full inline-block py-2 rounded-md bg-[oklch(0.79_0.18_86.03)] text-black font-semibold hover:opacity-90 transition text-center"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f2c94c] to-black text-white">
      <div className="bg-[#111111] rounded-2xl p-10 w-full max-w-md shadow-xl border border-neutral-700">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="p-2 rounded-lg">
              <img
                src="/images/logo-white-single.svg"
                alt="Logo"
                className="w-18 h-auto mb-4"
              />
            </div>
          </div>
          <h1 className="text-xl font-semibold">Reset Your Password</h1>
          <p className="text-sm text-gray-400 mt-2">
            Enter your new password below
          </p>
        </div>

        <Toaster position="top-center" />
        
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block mb-1 text-sm">New Password</label>
            <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md relative">
              <Lock className="h-4 w-4 text-purple-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter new password"
                required
                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400 py-2"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-purple-300"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="mb-5">
            <label className="block mb-1 text-sm">Confirm New Password</label>
            <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md relative">
              <Lock className="h-4 w-4 text-purple-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm new password"
                required
                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400 py-2"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 text-purple-300"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {loading ? (
            <img src="/images/preloader.gif" className="mx-auto" />
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded-md bg-[oklch(0.79_0.18_86.03)] text-black font-semibold hover:opacity-90 transition disabled:opacity-50"
            >
              Update Password
            </button>
          )}
          
          <p className="text-center text-sm mt-4">
            Remember your password?{" "}
            <Link
              href="/"
              className="text-[oklch(0.79_0.18_86.03)] font-medium cursor-pointer"
            >
              Back to Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
