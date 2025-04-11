"use client"
import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

import ReactFlagsSelect from "react-flags-select";
import { toast, Toaster } from "sonner"


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ApiBaseUrl } from "@/helper/functions";
import { FaGoogle, FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import Input, { Value } from "react-phone-number-input/input";
import { useDispatch } from "react-redux";
export default function Home() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const [value, setValue] = useState()
  
  const [loading, setLoading] = useState(false);
  // login form submission handler with user name and password
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const displayName = formData.get("displayName") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const email = formData.get("email") as string;
    const countryCode = selected as string;
// console.log(phoneNumber, email, countryCode,selected, displayName, username, password)
    if (!displayName || !username || !password || !phoneNumber || !email || !countryCode) {
      toast.error("All fields must be provided",);
      return;
    }

    setLoading(true);
    // api call
    fetch(`${ApiBaseUrl}/register-step-one`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: displayName,
        phone_number: phoneNumber,
        password: password,
        username: username,
        email: email,
        country: countryCode,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == false) {
          toast.error(data.message,);
          setLoading(false);
        } else {
          setLoading(false);
          toast.success("Registration successful",);
          window.location.href = `/signup/verify-otp?email=${email}`;
        }
      });

  };
  return (
<div className="bg-white min-h-screen flex flex-col md:flex-row justify-between">
<MyComponentLeft/>
<SignupForm/>
 </div>
  );
}




function MyComponentLeft() {
  return (
    <div className="flex flex-col flex-1 p-10 left-[section] max-md:p-6 bg-[#FBBC05] w-full md:w-1/2">
      <div className="mb-16">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;2:17&quot; style=&quot;width: 120px; height: 40px&quot;></svg>",
            }}
          />
        </div>
      </div>
      <div className="mt-20 max-w-[500px]">
        <div className="mb-4 text-5xl font-medium text-black max-sm:text-3xl">
          Get Started with Us
        </div>
        <div className="mb-10 text-base text-black text-opacity-70">
          Complete these easy steps to find the perfect service for you!
        </div>
        <div className="flex flex-col gap-6 max-sm:gap-4">
          <div className="flex gap-4 items-center p-6 rounded-xl bg-white bg-opacity-10 max-sm:p-4">
            <div className="w-8 h-8 font-medium text-white bg-black rounded-full text-center ">
              1
            </div>
            <div className="text-base text-black">Sign up your account</div>
          </div>
          <div className="flex gap-4 items-center p-6 rounded-xl bg-white bg-opacity-10 max-sm:p-4">
            <div className="w-8 h-8 font-medium text-white bg-black rounded-full text-center">
              2
            </div>
            <div className="text-base text-black">
              Personalize your experience
            </div>
          </div>
          <div className="flex gap-4 items-center p-6 rounded-xl bg-white bg-opacity-10 max-sm:p-4">
            <div className="w-8 h-8 font-medium text-white bg-black rounded-full text-center">
              3
            </div>
            <div className="text-base text-black">Book your first service</div>
          </div>
        </div>
      </div>
    </div>
  );
}



const SignupForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 w-full md:w-1/2">
      <Card className="w-full max-w-md bg-black border border-gray-800">
        <CardContent className="p-6">
          <h2 className="text-center text-lg font-semibold mb-4 text-white">Register with:</h2>

          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 mb-4 bg-[#0d0d0d] text-white border-gray-700"
          >
            <FaGoogle /> Google
          </Button>

          <div className="flex items-center gap-2 my-4">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-sm text-gray-400">Or</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <Input placeholder="First Name" className="pl-10 bg-[#1a1a1a] text-white border-gray-700" onChange={()=>{}} />
            </div>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <Input placeholder="Last Name" className="pl-10 bg-[#1a1a1a] text-white border-gray-700"  onChange={()=>{}}/>
            </div>
          </div>

          <div className="relative mb-4">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <Input placeholder="Email" className="pl-10 bg-[#1a1a1a] text-white border-gray-700"  onChange={()=>{}}/>
          </div>

          <div className="relative mb-4">
            <FaPhone className="absolute left-3 top-3 text-gray-400" />
            <Input placeholder="Phone Number" className="pl-10 bg-[#1a1a1a] text-white border-gray-700" onChange={()=>{}} />
          </div>

          <div className="relative mb-2">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={()=>{}}
              className="pl-10 pr-10 bg-[#1a1a1a] text-white border-gray-700"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <p className="text-sm text-gray-400 mb-4">Minimum length is 8 characters.</p>

          <Button className="w-full bg-[oklch(0.79_0.18_86.03)] text-black hover:bg-[oklch(0.79_0.18_86.03)]">
            Sign Up
          </Button>

          <p className="text-xs text-gray-500 text-center mt-4">
            By creating an account, you agree to the
            <span className="text-white underline ml-1">Terms of Service</span>. We’ll occasionally send you account-related emails.
          </p>

          <p className="text-center mt-4 text-sm text-white">
            Already have an account?
            <span className="text-[oklch(0.79_0.18_86.03)] ml-1 cursor-pointer">Login</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
