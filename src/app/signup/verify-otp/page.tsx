/* eslint-disable @next/next/no-img-element */
"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Info } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { toast, Toaster } from "sonner";
import { AuthApi } from "@/utils/api-calls";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtpVerification />
    </Suspense>
  );
}

function OtpVerification() {
  const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(6).fill(null));
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(7);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const otpString = otp.join("");

    if (!otpString) {
      toast.error("OTP field is required");
      return;
    }

    if (!email) {
      toast.error("Email is required for OTP verification");
      return;
    }

    setLoading(true);

    try {
      const data = await AuthApi.verifyOtp(email, otpString);
      toast.success("Registration successful, Kindly login");
      window.location.href = "/login";
    } catch (error: any) {
      console.error("Error during OTP verification:", error);
      toast.error(error.message || "An error occurred during OTP verification");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (timer > 0) {
      toast.error("Please wait for the timer to finish before resending OTP.");
      return;
    }

    if (!email) {
      toast.error("Email is required to resend OTP");
      return;
    }

    try {
      setTimer(60);
      const data = await AuthApi.resendVerification(email);
      toast.success(data.message || "OTP resent successfully");
    } catch (error: any) {
      console.error("Error resending OTP:", error);
      toast.error(error.message || "Failed to resend OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f2c94c] to-black text-white px-3">
      <form onSubmit={handleSubmit}>
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
            <h1 className="text-xl font-semibold mb-2">OTP Verification</h1>
            <p className="text-sm text-gray-400">Please enter the OTP sent to your device to continue</p>
            <Toaster position="top-center" />
          </div>

          <div className="flex justify-center space-x-3 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength={1}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                className="w-12 h-12 text-center text-lg bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[oklch(0.79_0.18_86.03)]"
              />
            ))}
          </div>

          <div className="text-center text-lg text-gray-400 mb-5">
            Didn’t get a code? Resending in{" "}
            <span className="text-[oklch(0.79_0.18_86.03)]">
              {timer < 1 ? (
                <div className="cursor-pointer text-lg font-semibold" onClick={handleResendOTP}>
                  Resend OTP
                </div>
              ) : (
                `0:${timer < 10 ? "0" : ""}${timer}`
              )}
            </span>
          </div>

          {loading ? (
            <img src="/images/preloader.gif" className="mx-auto" />
          ) : (
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-[oklch(0.79_0.18_86.03)] text-black font-semibold hover:opacity-90 transition mb-4"
            >
              Continue
            </button>
          )}

          <div className="flex justify-center items-center text-xs text-gray-500 space-x-2">
            <Info size={14} />
            <span>Learn more about OTP & Security</span>
          </div>
        </div>
      </form>
    </div>
  );
}