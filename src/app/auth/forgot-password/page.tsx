/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";


import { FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/clients";
import Link from "next/link";
import Swal from "sweetalert2";
import { useSearchParams } from "next/navigation";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const supabase = createClient();
  const searchParams = useSearchParams();

  useEffect(() => {
    const error = searchParams.get('error');
    if (error) {

      Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'Cool'
      });


    }
  }, [searchParams]);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    // Check for auth callback errors

    if (!email) {
      // toast.error("Email field is required");
      Swal.fire({
        title: 'Error!',
        text: 'Email field is required',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid email address',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
      return;
    }

    setLoading(true);

    try {
      // Get the current site URL dynamically
      const siteUrl = window.location.origin
      const redirectUrl = `${siteUrl}auth/update-password`;
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

        // toast.error(errorMessage);
        Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'error',
          confirmButtonText: 'Cool'
        });
      } else {
        console.log('Password reset email sent successfully');
        // toast.success("Password reset link sent! Please check your email (including spam folder).");
        Swal.fire({
          title: 'Success!',
          text: 'Password reset link sent! Please check your email (including spam folder).',
          icon: 'success',
          confirmButtonText: 'Okay'
        });
        setEmailSent(true);
      }
    } catch (error: any) {
      console.error("Unexpected error during forgot password:", error);
      // toast.error("An unexpected error occurred. Please try again.");
      Swal.fire({
        title: 'Error!',
        text: error.message || "An unexpected error occurred. Please try again.",
        icon: 'error',
        confirmButtonText: 'Cool'
      });
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



        {emailSent ? (
          <div className="text-center">
            <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <FaEnvelope className="h-6 w-6 text-green-400 mr-2" />
                <h3 className="text-lg font-semibold text-green-400">Email Sent!</h3>
              </div>
              <p className="text-lg text-green-200">
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
              <label className="block mb-1 text-lg">Email</label>
              <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md">
                <FaEnvelope className="h-4 w-4 text-purple-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="e.g (qbcd@gmail.com)"
                  required
                  className="bg-transparent ml-2 outline-none w-full text-lg placeholder-gray-400 py-4"
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

            <p className="text-center text-lg mt-4">
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