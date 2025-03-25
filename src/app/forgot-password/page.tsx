'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { toast, Toaster } from "sonner"
import { useState } from "react";
import { ApiBaseUrl } from "../functions";

export default function Home() {
  
   const [loading, setLoading] = useState(false);
  // login form submission handler with user name and password
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    if(!email){
        toast.error("Email field is required",);
        return;  // stop the function execution here if email field is required
    }else{
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
    <div className="pt-34 px-4"  >
   
      <h1 className="text-center text-5xl font-bold  mb-15">Forgot Your Password</h1>
      <div className="w-full lg:w-2/5 mx-auto ">
  {/* Your content goes here */}
  <Card className="border-none py-16">
    <CardHeader>
      <CardTitle className="pb-2">Requesting Password Reset</CardTitle>
      <CardDescription className="font-semibold text-sm mb-5">Enter your registerd email address to reset your password.</CardDescription>
      <Toaster position="top-center"  />
      <CardContent>
        <form  className="space-y-6" onSubmit={handleSubmit}>
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

        
        
          
          {loading ? (
                  <div className="flex items-center justify-center mx-auto">
                        <i className="fa-solid fa-circle-notch animate-spin text-4xl"></i>
                  </div>
                  ) : <Button type="submit" className="w-full bg-yellow-500 py-6 mt-10 ">
                        Reset Password <i className="fal fa-arrow-right-long"></i>
                  </Button>}
        
       
        </form>
      </CardContent>
    </CardHeader>
  </Card>
</div>
    </div>
  );
}
