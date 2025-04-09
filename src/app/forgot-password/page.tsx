"use client"


import { toast, Toaster } from "sonner"
import { ApiBaseUrl, fetchAndReturnUserProfile, fetchAndStoreUserProfile } from "@/helper/functions";
import Cookies from "js-cookie";

import { useDispatch } from "react-redux";
import { updateSellersProfile } from "@/states/sellersProfileSlice";
import React from "react";



import { useState } from 'react';
import { Eye, EyeOff, User, Lock } from 'lucide-react';
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

export default function LoginForm() {
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);




  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
      toast.error("All fields must be provided",);

    } else {
      setLoading(true);
      fetch(`${ApiBaseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then(async (data) => {
          console.log(data);
          if (data.status === false) {
            toast.error(data.message,);

            setLoading(false);
          } else {
            setLoading(false);
            toast.success("Login successful",);
            // Set cookies instead of localStorage
            Cookies.set("token", data.data.token, {
              expires: 0.5,
              secure: process.env.NODE_ENV === "production",
              sameSite: "strict",
            });
            Cookies.set("role", data.data.role, {
              expires: 0.5,
              secure: process.env.NODE_ENV === "production",
              sameSite: "strict",
            });
         await   fetchAndStoreUserProfile();
            
           

            if (data.data.role == 1) {
              const profile = await fetchAndReturnUserProfile();
              if (profile && profile.id) {
                dispatch(updateSellersProfile(profile));
                window.location.href = `/dashboard/seller-dashboard`;
              }else{
                toast.error("Failed to fetch user profile",);
                setLoading(false);
              }
             
            } else {
              window.location.href = `/dashboard/buyer-dashboard`;
              setLoading(false);
            }
        

          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
          setLoading(false);
        });
    }

  };
  const [showPassword, setShowPassword] = useState(false);

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

        <form>
          <div className="mb-5">
            <label className="block mb-1 text-sm">Email</label>
            <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md">
              <FaEnvelope className="h-4 w-4 text-purple-400" />
              <input
                type="email"
                placeholder="e.g (qbcd@gmai..com)"
                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400"
              />
            </div>
          </div>

       
          

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-[oklch(0.79_0.18_86.03)] text-black font-semibold hover:opacity-90 transition"
          >
            Confirm Account
          </button>

       
        </form>
      </div>
    </div>
  );
}


