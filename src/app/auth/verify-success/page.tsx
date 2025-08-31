// app/verify-success/page.tsx  (Next.js 13+ App Router)
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VerifySuccess() {
  const router = useRouter();

  useEffect(() => {
    // Redirect after 4 seconds
    const timer = setTimeout(() => {
      router.push("/"); 
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          {/* Success icon */}
          <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold text-gray-800 mb-2">
          Email Verified Successfully
        </h1>
        <p className="text-gray-600 text-sm mb-6">
          Your email address has been verified. You will be redirected shortly...
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
