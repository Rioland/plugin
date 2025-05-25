"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { FaGoogle, FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { toast, Toaster } from "sonner"
import { ApiBaseUrl, fetchAndReturnUserProfile, fetchAndStoreUserProfile } from "@/helper/functions";
import Cookies from "js-cookie";

import { useDispatch } from "react-redux";
import { updateSellersProfile } from "@/states/sellersProfileSlice";


export default function Page() {
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
  return (
 <div className="bg-white min-h-screen flex flex-col md:flex-row justify-between">
<MyComponentLeft/>
<SignupForm/>
 </div>
  );
}

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

function MyComponentLeft() {
  return (
    <div className=" flex-col flex-1 p-10 left-[section] max-md:p-6 bg-[#FBBC05] w-full md:w-1/2 hidden md:flex">
      <div className="mb-16">
        <div>
                <img
                src="/images/logo-wihte.png"
                alt="Logo"
                className="w-28 h-auto mb-4"  />
                
          
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
     
        const [loading, setLoading] = React.useState(false);
        // login form submission handler with user name and password
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();

                const formData = new FormData(event.currentTarget);
                const lastName = formData.get("lastName") as string;
                const firstName = formData.get("firstName") as string;
                const username = formData.get("username") as string;
                const password = formData.get("password") as string;
                const phoneNumber = formData.get("phoneNumber") as string;
                const email = formData.get("email") as string;

                const account_type = formData.get("account_type") as string;
         console.log(phoneNumber, email, localStorage.getItem("account_type"), firstName, lastName, username, password)
                if (!lastName || !username || !password || !phoneNumber || !email || !firstName || !localStorage.getItem("account_type")) {
                        toast.error("All fields must be provided",);
                        return;
                }

                setLoading(true);
                // api call
                fetch(`${ApiBaseUrl}/seller/register-step-one`, {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                                firstname: firstName,
                                lastname: lastName,
                                phone_number: phoneNumber,
                                password: password,
                                username: username,
                                email: email,
                                account_type: localStorage.getItem("account_type")
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

        const [showPassword, setShowPassword] = React.useState(false);

        return (

                <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 w-full md:w-1/2">
                        <Card className="w-full max-w-md bg-black border border-gray-800">
                              <form onSubmit={handleSubmit}>
                                <Toaster  position="top-center" />
                              <CardContent className="p-6">
                                        <h2 className="text-center text-lg font-semibold mb-4 text-white">Register with:</h2>

                                        <Button
                                                variant="outline"
                                                className="w-full flex items-center justify-center gap-2 mb-4 bg-[#0d0d0d] text-white border-gray-700 py-6 md:py-0"
                                        >
                                                <FaGoogle /> Google
                                        </Button>

                                        <div className="flex items-center gap-2 my-4">
                                                <div className="flex-1 h-px bg-gray-700"></div>
                                                <span className="text-sm text-gray-400">Or</span>
                                                <div className="flex-1 h-px bg-gray-700"></div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-4 mb-4 ">
                                                <div className="relative">
                                                        <FaUser className="absolute left-3 top-3 text-gray-400"  />
                                                        <Input placeholder="First Name" name="firstName" id="firstName" className="pl-10 bg-[#1a1a1a] text-white border-gray-700 py-6 md:py-0" />
                                                </div>
                                                <div className="relative">
                                                        <FaUser className="absolute left-3 top-3 text-gray-400"  />
                                                        <Input placeholder="Last Name" name="lastName" id="lastName" className="pl-10 bg-[#1a1a1a] text-white border-gray-700 py-6 md:py-0" />
                                                </div>
                                        </div>
                                        <div className="relative mb-4">
                                                <FaUser className="absolute left-3 top-3 text-gray-400" />
                                                <Input placeholder="Username" className="pl-10  bg-[#1a1a1a] text-white border-gray-700 py-6 md:py-0" name="username" id="username" />
                                        </div>
                                        <div className="relative mb-4">
                                                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                                                <Input placeholder="Email" name="email" id="email" className="pl-10 bg-[#1a1a1a] text-white border-gray-700 py-6 md:py-0" />
                                        </div>
                                        <div className="relative mb-4">
                                                <FaPhone className="absolute left-3 top-3 text-gray-400" />
                                                <Input placeholder="Phone Number"  name="phoneNumber"
                                                        id="phoneNumber" className="pl-10 bg-[#1a1a1a] text-white border-gray-700 py-6 md:py-0" />

                                        </div>

                                        <div className="relative mb-2">
                                                <FaLock className="absolute left-3 top-3 text-gray-400" />
                                                <Input
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="Password" name="password" id="password"
                                                        className="pl-10 pr-10 bg-[#1a1a1a] text-white border-gray-700  py-6 md:py-0"
                                                />
                                                <button
                                                        type="button"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        className="absolute right-3 top-2 text-gray-400"
                                                >
                                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                </button>
                                        </div>

                                        <p className="text-lg text-gray-400 mb-4">Minimum length is 8 characters.</p>

                                    {loading?<img src="/images/preloader.gif" className="mx-auto" />:<Button type="submit"  className="w-full bg-[oklch(0.79_0.18_86.03)] text-black hover:bg-[oklch(0.79_0.18_86.03)] py-6 md:py-0">
                                                Sign Up
                                        </Button>}    

                                        <p className="text-lg text-gray-500 text-center mt-4">
                                                By creating an account, you agree to the
                                                <span className="text-white underline ml-1">Terms of Service</span>. We’ll occasionally send you account-related emails.
                                        </p>

                                        <p className="text-center mt-4 text-lg text-white">
                                                Already have an account?
                                                <span className="text-[oklch(0.79_0.18_86.03)] ml-1 cursor-pointer" onClick={() => window.location.href = '/login'}>Login</span>
                                        </p>
                                </CardContent>
                              </form>
                        </Card>
                </div>
        );
};



