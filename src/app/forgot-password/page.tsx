/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { toast, Toaster } from "sonner";

import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";
import { AuthApi } from "@/utils/api-calls";

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    if (!email) {
      toast.error("Email field is required");
      return;
    }

    setLoading(true);

    try {
      const data = await AuthApi.forgotPassword(email);
      toast.success(data.message || "Password reset code sent successfully");
      window.location.href = `/resetPassword?email=${email}`;
    } catch (error: any) {
      console.error("Error during forgot password:", error);
      toast.error(error.message || "An error occurred during password reset");
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

        <form onSubmit={handleSubmit}>
          <Toaster position="top-center" />
          <div className="mb-5">
            <label className="block mb-1 text-sm">Email</label>
            <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md">
              <FaEnvelope className="h-4 w-4 text-purple-400" />
              <input
                type="email"
                name="email"
                placeholder="e.g (qbcd@gmai..com)"
                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400"
              />
            </div>
          </div>

          {loading ? (
            <img src="/images/preloader.gif" className="mx-auto" />
          ) : (
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-[oklch(0.79_0.18_86.03)] text-black font-semibold hover:opacity-90 transition"
            >
              Proceed
            </button>
          )}
        </form>
      </div>
    </div>
  );
}