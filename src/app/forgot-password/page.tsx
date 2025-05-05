"use client"


import { toast, Toaster } from "sonner"
import { ApiBaseUrl, fetchAndReturnUserProfile, fetchAndStoreUserProfile } from "@/helper/functions";
import Cookies from "js-cookie";

import { useDispatch } from "react-redux";
// import { updateSellersProfile } from "@/states/sellersProfileSlice";
import React from "react";



import { useState } from 'react';

import { FaEnvelope } from "react-icons/fa";

export default function LoginForm() {
  // const dispatch = useDispatch();

 
  const [loading, setLoading] = useState(false);
  // login form submission handler with user name and password
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    if (!email) {
      toast.error("Email field is required",);
      return;  // stop the function execution here if email field is required
    } else {
      setLoading(true);
      fetch(`${ApiBaseUrl}/forget-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLoading(false);
          if (data.status == false) {
            toast.error(data.message,);

          } else {
            window.location.href = `/resetPassword?email=${email}`;

          }
        });
    }


  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f2c94c] to-black text-white">
      <div className="bg-[#111111] rounded-2xl p-10 w-full max-w-md shadow-xl border border-neutral-700">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
           
            <div className=" p-2 rounded-lg">
            <img
                src="/images/logo-white-single.svg"
                alt="Logo"
                className="w-18 h-auto mb-4"  />
            </div>
          </div>
          <h1 className="text-xl font-semibold">Forgot my Plugin Password</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <Toaster  position="top-center" />
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

       
          

          {loading?<img src="/images/preloader.gif" className="mx-auto" />:    <button
            type="submit"
            className="w-full py-2 rounded-md bg-[oklch(0.79_0.18_86.03)] text-black font-semibold hover:opacity-90 transition"
          >
           Proceed
          </button>}

       
        </form>
      </div>
    </div>
  );
}


