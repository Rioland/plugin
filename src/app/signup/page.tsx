/* eslint-disable @next/next/no-img-element */
'use client'
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import * as React from "react";
import { Eye, EyeOff } from "lucide-react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaGoogle, FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { toast, Toaster } from "sonner"
import { ApiBaseUrl } from "@/helper/functions";
import { useRouter } from "next/navigation";




export default function Page() {

  const router = useRouter();

  useEffect(() => {
    // This code runs only in the browser
    if (typeof window !== 'undefined') { // Ensure window is defined (client-side)
      const accountType = localStorage.getItem("account_type");
      if (!accountType) {
        router.push('/select-account-type');
      }
    }
  }, [router]);


        return (
                <div className="bg-white min-h-screen flex flex-col md:flex-row justify-between">
                        <MyComponentLeft />
                        <SignupForm />
                </div>
        );
}




function MyComponentLeft() {
        // Define images for each slide
        const slideImages = [
                '/images/ImageCard1.png',
                '/images/ImageCard2.png',
                '/images/ImageCard3.png',
        ];

        const [currentSlide, setCurrentSlide] = useState(0);

        // Change slide every 5 seconds
        useEffect(() => {
                const interval = setInterval(() => {
                        setCurrentSlide((prev) => (prev + 1) % slideImages.length);
                }, 5000);

                return () => clearInterval(interval); // Cleanup
        }, []);

        return (
                <div className="flex-col flex-1 p-10 left-[section] max-md:p-6 bg-[#917930] w-full md:w-1/2 hidden md:flex">
                        <div className="mb-16">
                                <div>
                                        <img
                                                src="/images/logo-wihte.png"
                                                alt="Logo"
                                                className="w-28 h-auto mb-4"
                                        />
                                </div>
                                <img
                                        src={slideImages[currentSlide]}
                                        alt={`Slide ${currentSlide + 1}`}
                                        className="mt-20 transition-all duration-500"
                                />
                        </div>

                        <div className="mt-2 max-w-[500px]">
                                <div className="mb-2 text-3xl font-medium text-white max-sm:text-3xl">
                                        Find Services That Fit Your Life
                                </div>
                                <div className="mb-10 text-white text-opacity-70 text-lg">
                                        From daily tasks to expert solutions, Plugin connects you with trusted vendors for everything you need.
                                </div>
                                <div className="flex justify-start items-center gap-4">
                                        {[0, 1, 2].map((i) => (
                                                <div
                                                        key={i}
                                                        className={`rounded-full w-3 h-3 transition-all duration-300 ${currentSlide === i ? 'bg-yellow-500' : 'bg-white'}`}
                                                />
                                        ))}
                                </div>
                        </div>
                </div>
        );
}




const SignupForm = () => {

        const [loading, setLoading] = useState(false);
        // login form submission handler with user name and password
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();

                const formData = new FormData(event.currentTarget);
                const lastName = formData.get("lastName") as string;
                const firstName = formData.get("firstName") as string;
                // const username = formData.get("username") as string;
                const password = formData.get("password") as string;
                const phoneNumber = formData.get("phoneNumber") as string;
                const email = formData.get("email") as string;

                const account_type = localStorage.getItem("account_type");
                console.log(phoneNumber, email, account_type, firstName, lastName, password)
                if (!lastName  || !password || !phoneNumber || !email || !firstName || !account_type) {
                        toast.error("All fields must be provided",);
                        return;
                }

                setLoading(true);
                let url="";
                if(account_type !== "individual") {
                        url = `${ApiBaseUrl}/register-step-one`;
                } else {
                        url = `${ApiBaseUrl}/seller/register-step-one`;

                }
               
                // api call
                fetch(url, {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                                firstname: firstName,
                                lastname: lastName,
                                phone_number: phoneNumber,
                                password: password,
                                email: email,
                                account_type: account_type
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
                                        <Toaster position="top-center" />
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
                                                                <FaUser className="absolute left-3 top-3 text-gray-400" />
                                                                <Input placeholder="First Name" name="firstName" id="firstName" className="pl-10 bg-[#1a1a1a] text-white border-gray-700 py-6 md:py-0" />
                                                        </div>
                                                        <div className="relative">
                                                                <FaUser className="absolute left-3 top-3 text-gray-400" />
                                                                <Input placeholder="Last Name" name="lastName" id="lastName" className="pl-10 bg-[#1a1a1a] text-white border-gray-700 py-6 md:py-0" />
                                                        </div>
                                                </div>
                                                {/* <div className="relative mb-4">
                                                        <FaUser className="absolute left-3 top-3 text-gray-400" />
                                                        <Input placeholder="Username" className="pl-10  bg-[#1a1a1a] text-white border-gray-700 py-6 md:py-0" name="username" id="username" />
                                                </div> */}
                                                <div className="relative mb-4">
                                                        <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                                                        <Input placeholder="Email" name="email" id="email" className="pl-10 bg-[#1a1a1a] text-white border-gray-700 py-6 md:py-0" />
                                                </div>
                                                <div className="relative mb-4">
                                                        <FaPhone className="absolute left-3 top-3 text-gray-400" />
                                                        <Input placeholder="Phone Number" name="phoneNumber"
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

                                                {loading ? <img src="/images/preloader.gif" className="mx-auto" /> : <Button type="submit" className="w-full bg-[oklch(0.79_0.18_86.03)] text-black hover:bg-[oklch(0.79_0.18_86.03)] py-6 md:py-0">
                                                        Sign Up
                                                </Button>}

                                                <p className="text-sm text-gray-500 text-center mt-4">
                                                        By creating an account, you agree to the
                                                        <span className="text-white underline ml-1">Terms of Service</span>. We’ll occasionally send you account-related emails.
                                                </p>

                                                <p className="text-center mt-4 text-lg text-white">
                                                        Already have an account?
                                                        <span className="text-[oklch(0.79_0.18_86.03)] ml-1 cursor-pointer" onClick={() => window.location.href = '/'}>Login</span>
                                                </p>
                                        </CardContent>
                                </form>
                        </Card>
                </div>
        );
};




