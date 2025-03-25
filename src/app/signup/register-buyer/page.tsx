"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { toast, Toaster } from "sonner"

export default function Home() {
        const [selected, setSelected] = useState("");
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
    const countryCode = formData.get("countryCode") as string;
    
    if (!displayName ||!username ||!password ||!phoneNumber ||!email ||!countryCode) {
      toast.error("All fields must be provided",);
      return;
    }
    
  };
  return (
    <div className="pt-34 px-4"  >
   
      <h1 className="text-center text-5xl font-bold  mb-15">Buyer Registration</h1>
      <div className="w-full lg:w-2/5 mx-auto ">
  {/* Your content goes here */}
  <Card className="border-none py-16">
    <CardHeader>
      <CardTitle className="pb-2">We're glad to see you again!</CardTitle>
      <CardDescription className="font-semibold text-sm mb-5">Alread have an account?  <a href="/" className="text-yellow-500">Login !</a></CardDescription>

      <CardContent>
      <Toaster position="top-center"  />
        <form  className="space-y-6">
                {/* displayname */}
          <div className="mb-4">
            <Label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-2">Display Name</Label>
            <Input
              type="text"
              name="displayName"
              id="displayName"
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
              required
              className="shadow-sm focus:ring-primary focus:border-primary block w-full px-4 py-7 rounded-md"
            />
          </div>
          {/* phone number */}
          <div className="mb-4">
            <Label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</Label>
            <Input
              type="tel"
              name="phoneNumber"
              id="phoneNumber" 
              required
              className="shadow-sm focus:ring-primary focus:border-primary block w-full px-4 py-7 rounded-md"
            />
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
              required
              className="shadow-sm focus:ring-primary focus:border-primary block w-full px-4 py-4 rounded-md"
            />
          </div>
         
          {loading ? (
                  <div className="flex items-center justify-center mx-auto">
                        <i className="fa-solid fa-circle-notch animate-spin text-4xl"></i>
                  </div>
                  ) : <Button type="submit" className="w-full bg-yellow-500 py-6 mt-10 ">
                       Sign Up
                  </Button>}
        </form>
      </CardContent>
    </CardHeader>
  </Card>
</div>
    </div>
  );
}
