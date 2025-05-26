"use client"


import { toast, Toaster } from "sonner"
import { ApiBaseUrl, fetchAndReturnUserProfile } from "@/helper/functions";
import Cookies from "js-cookie";


import React from "react";



import { useState } from 'react';
import { Eye, EyeOff, User, Lock } from 'lucide-react';
import Link from "next/link";
import { useSellerProfile } from "@/stores/userStore";

export default function LoginForm() {
const setProfile = useSellerProfile((state) => state.setProfile);

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
       
            
           

            if (data.data.role == 1) {
              const profile = await fetchAndReturnUserProfile();
              if (profile && profile.id) {
                setProfile(profile);
                window.location.href = `/dashboard/seller`;
              }else{
                toast.error("Failed to fetch user profile",);
                setLoading(false);
              }
             
            } else {
              window.location.href = `/dashboard/buyer`;
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
          <h1 className="text-xl font-semibold">Login to Plugin</h1>
        </div>

        <form>
          <div className="mb-5">
            <label className="block mb-1 text-sm">Username</label>
            <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md">
              <User className="h-4 w-4 text-purple-400" />
              <input
                type="text"
                placeholder="Username"
                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="block mb-1 text-sm">Password</label>
            <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md relative">
              <Lock className="h-4 w-4 text-purple-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400"
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
              <a href="#" className="text-[oklch(0.79_0.18_86.03)] text-xs">Forgot password?</a>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-5">
            <input type="checkbox" id="remember" className="accent-purple-500" />
            <label htmlFor="remember" className="text-sm">Remember Me</label>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-[oklch(0.79_0.18_86.03)] text-black font-semibold hover:opacity-90 transition"
          >
            Log in
          </button>

          <p className="text-center text-sm mt-4">
            Do not have an account?{' '}
            <Link href="/" className="text-[oklch(0.79_0.18_86.03)] font-medium cursor-pointer" >Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}


