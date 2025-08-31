/* eslint-disable @next/next/no-img-element */
"use client";


import { useAccountStore } from "@/stores/useAccountStore";
import { createClient } from "@/lib/supabase/clients";
import React, { useState } from "react";
import Swal from "sweetalert2";

const KYCVerification = () => {
  const { setBusinessType } = useAccountStore();
  const supabase = createClient();

  const [loading, setLoading] = useState(false);

  const handleBusinessType = async (type: "business" | "individual") => {
    try {
      setLoading(true);

      // Get current logged-in user
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        console.error("Error fetching user:", userError.message);
        alert("Failed to fetch user info. Please login again.");
        return;
      }

      if (!user) {
        alert("No user found! Please login again.");
        return;
      }

      // Update the user's profile
      const { error: updateError } = await supabase
        .from("profiles")
        .update({ business_type: type })
        .eq("id", user.id);

      if (updateError) {
        console.error("Error updating profile:", updateError.message);
        Swal.fire({
          title: "Error!",
          text: "Failed to update business type. Try again!",
          icon: "error",
        });
        return;
      }

      // Store in Zustand store
      setBusinessType(type);

      // Redirect to onboarding
      window.location.href = "/dashboard/seller/onboarding";
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-500 to-black flex flex-col items-center justify-center py-10 md:py-0">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="mb-4">
          <img
            src="/images/logo-white-single.svg"
            alt="KYC Icon"
            className="mx-auto h-16 w-16"
          />
        </div>
        <h1 className="text-white text-3xl font-bold">KYC Verification</h1>
      </div>

      {/* Options */}
      <div className="flex flex-col md:flex-row space-x-8 gap-4 md:gap-0">
        {/* Registered Business Card */}
        <div
          className={`bg-black text-white p-6 rounded-lg shadow-lg w-80 cursor-pointer hover:bg-gray-900 ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => !loading && handleBusinessType("business")}
        >
          <div className="mb-4">
            <img
              src="/images/regbusiness.png"
              alt="Registered Business"
              className="mx-auto"
            />
          </div>
          <h2 className="text-xl font-semibold mb-4">Registered Business</h2>
          <p className="text-sm">
            I run an officially registered business with all the necessary
            documents, like a Certificate of Incorporation. My business is fully
            set up and recognized as a legal entity, so this option is right for
            me!
          </p>
        </div>

        {/* Unregistered Business Card */}
        <div
          className={`bg-black text-white p-6 rounded-lg shadow-lg w-80 cursor-pointer hover:bg-gray-900 ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => !loading && handleBusinessType("individual")}
        >
          <div className="mb-4">
            <img
              src="/images/unregbusiness.png"
              alt="Unregistered Business"
              className="mx-auto"
            />
          </div>
          <h2 className="text-xl font-semibold mb-4">Unregistered Business</h2>
          <p className="text-sm">
            I run my business as an individual without formal registration. As a
            freelancer, sole proprietor, or someone just starting out, this
            option suits me perfectly!
          </p>
        </div>
      </div>

      {/* Footer */}
      {/* <div className="mt-8">
        <Button
          variant="link"
          className="text-white cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          Already have an account?{" "}
          <span className="text-yellow-500"> Login</span>
        </Button>
      </div> */}
    </div>
  );
};

export default KYCVerification;
