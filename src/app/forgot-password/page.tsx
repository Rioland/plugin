/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { toast, Toaster } from "sonner";
import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { createClient } from "@/lib/supabase/clients";
import Link from "next/link";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const supabase = createClient();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    if (!email) {
      toast.error("Email field is required");
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      // Get the current site URL dynamically
      const siteUrl = typeof window !== 'undefined' 
        ? window.location.origin 
        : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
      
      const redirectUrl = `${siteUrl}/auth/confirm-password-reset`;
      console.log('Sending password reset email with redirect URL:', redirectUrl);

      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: redirectUrl,
      });

      if (error) {
        console.error('Password reset error:', error);
        
        // Handle specific error cases
        let errorMessage = "An error occurred during password reset";
        if (error.message.includes('rate limit')) {
          errorMessage = "Too many requests. Please wait a few minutes before trying again.";
        } else if (error.message.includes('invalid email')) {
          errorMessage = "Please enter a valid email address.";
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        toast.error(errorMessage);
      } else {
        console.log('Password reset email sent successfully');
        toast.success("Password reset link sent! Please check your email (including spam folder).");
        setEmailSent(true);
      }
    } catch (error: any) {
      console.error("Unexpected error during forgot password:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
          <h1 className="text-xl font-semibold">Forgot my Plugin Password</h1>
        </div>

        <Toaster position="top-center" />
        
        {emailSent ? (
          <div className="text-center">
            <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <FaEnvelope className="h-6 w-6 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-green-400">Email Sent!</h3>
              </div>
              <p className="text-sm text-green-200">
                We've sent a password reset link to your email address. Please check your inbox and follow the instructions to reset your password.
              </p>
            </div>
            <Link 
              href="/" 
              className="w-full inline-block py-2 rounded-md bg-[oklch(0.79_0.18_86.03)] text-black font-semibold hover:opacity-90 transition text-center"
            >
              Back to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block mb-1 text-sm">Email</label>
              <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md">
                <FaEnvelope className="h-4 w-4 text-purple-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="e.g (qbcd@gmail.com)"
                  required
                  className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400"
                />
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
                Send Reset Link
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
        )}
      </div>
    </div>
  );
}