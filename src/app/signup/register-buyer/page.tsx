"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { toast, Toaster } from "sonner"

import { ApiBaseUrl } from "@/app/functions";
import PhoneInput from 'react-phone-number-input/input'
import Link from "next/link";
export default function Home() {
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
    <div className="pt-34 px-4"  >

      <h1 className="text-center text-5xl font-bold  mb-15">Buyer Registration</h1>
      <div className="w-full lg:w-2/5 mx-auto ">
        {/* Your content goes here */}
        <Card className="border-none py-16">
          <CardHeader>
            <CardTitle className="pb-2">We&apos;re glad to see you again!</CardTitle>
            <CardDescription className="font-semibold text-sm mb-5">Alread have an account?  <Link href="/" className="text-yellow-500">Login !</Link></CardDescription>

            <CardContent>
              <Toaster position="top-center" />
              <form className="space-y-6" onSubmit={handleSubmit} >
                {/* displayname */}
                <div className="mb-4">
                  <Label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-2">Display Name</Label>
                  <Input
                    type="text"
                    name="displayName"
                    id="displayName"
                    placeholder="John Doe"
                    required
                    className="shadow-sm focus:ring-primary focus:border-primary block w-full px-4 py-7 rounded-md"
                  />
                </div>
                {/* username */}
                <div className="mb-4">
                  <Label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">Username</Label>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="johndoe"
                    required
                    className="shadow-sm focus:ring-primary focus:border-primary block w-full px-4 py-7 rounded-md"
                  />
                </div>
                {/* phone number */}
                <div className="mb-4">
                  <Label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</Label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    // defaultCountry="US"
                    // countryCallingCodeEditable={false}
                     name="phoneNumber"
                    id="phoneNumber"
                    required
                    value={value}
                    className="shadow-sm focus:ring-primary focus:border-primary block w-full px-4 py-4 rounded-md"
                    onChange={() => setValue} />

                  {/* <Input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="+1 (123) 456-7890"
                    required
                    className="shadow-sm focus:ring-primary focus:border-primary block w-full px-4 py-7 rounded-md"
                  /> */}
                </div>
                {/* country */}
                <div className="mb-4">
                  <Label htmlFor="Country" className="block text-sm font-medium text-gray-700 mb-2">Country</Label>
                  <ReactFlagsSelect
                    selected={selected}
                    placeholder="Select Country"
                    searchPlaceholder="Search countries"
                    searchable
                    onSelect={(code) => setSelected(code)}
                  />
                </div>

                {/* email */}
                <div className="mb-4">
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="johndoe@example.com"
                    required
                    className="shadow-sm focus:ring-primary focus:border-primary block w-full px-4 py-7 rounded-md"
                  />
                </div>
                {/* password */}
                <div className="mb-4">
                  <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</Label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                    required
                    className="shadow-sm focus:ring-primary focus:border-primary block w-full px-4 py-4 rounded-md"
                  />
                </div>

                {loading ? (
                  <div className="flex items-center justify-center mx-auto">
                    <i className="fa-solid fa-circle-notch animate-spin text-4xl"></i>
                  </div>
                ) : <Button type="submit" className="w-full bg-yellow-500 py-6 mt-10 ">
                  Sign Up <i className="fal fa-arrow-right-long"></i>
                </Button>}
              </form>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
