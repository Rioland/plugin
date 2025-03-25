"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast, Toaster } from "sonner"
import { ApiBaseUrl } from "./functions";
import Cookies from 'js-cookie';


export default function Home() {


  const [loading, setLoading] = useState(false);




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
        .then((data) => {
          console.log(data);
          if (data.status === false) {
            toast.error(data.message,);

            setLoading(false);
          } else {
            setLoading(false);
            toast.success("Login successful",);
            // Set cookies instead of localStorage
            Cookies.set("token", data.data.token, {
              expires: 7,
              secure: process.env.NODE_ENV === "production",
              sameSite: "strict",
            });
            Cookies.set("role", data.data.role, {
              expires: 7,
              secure: process.env.NODE_ENV === "production",
              sameSite: "strict",
            });
            Cookies.set("currentUser", JSON.stringify(data.data.user), {
              expires: 7,
              secure: process.env.NODE_ENV === "production",
              sameSite: "strict",
            });
            setLoading(false);

            if (data.data.role == 1) {
              window.location.href = `/seller-dashboard`;
            } else {
              window.location.href = `/buyer-dashboard`;
            }


          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
          setLoading(false);
        });
    }

  };
  return (
    <div className="pt-34 px-4"  >

      <h1 className="text-center text-5xl font-bold  mb-15">Log In</h1>
      <div className="w-full lg:w-2/5 mx-auto ">
        {/* Your content goes here */}
        <Card className="border-none py-16">
          <CardHeader>
            <CardTitle className="pb-2">We're glad to see you again!</CardTitle>
            <CardDescription className="font-semibold text-sm mb-5">Don't have an account?  <a href="/signup" className="text-yellow-500">Sign Up!</a></CardDescription>

            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
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
                <Toaster position="top-center"  />

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
                {/* remember me checkbox and forgot password  */}
                <div className="flex items-center justify-between my-4">
                  <div className="flex items-center justify-content-center">
                    <input
                      type="checkbox"
                      name="rememberPassword"
                      id="rememberPassword" />
                    <Label htmlFor="rememberPassword" className="block text-sm font-medium text-gray-700 ms-2">Remember me</Label>



                  </div>
                  <a href="/forgot-password" className="text-sm text-blue-500 hover:text-blue-600">Lost your password?</a>

                </div>
               
           
                  {loading ? (
                  <div className="flex items-center justify-center">
                        <i className="fa-solid fa-circle-notch animate-spin text-4xl"></i>
                  </div>
                  ) : <Button type="submit" className="w-full bg-yellow-500 py-6 mt-10 ">
                    Log In
                  </Button>}


             
              </form>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
