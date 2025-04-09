'use client'
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
                                                await fetchAndStoreUserProfile();



                                                if (data.data.role == 1) {
                                                        const profile = await fetchAndReturnUserProfile();
                                                        if (profile && profile.id) {
                                                                dispatch(updateSellersProfile(profile));
                                                                window.location.href = `/dashboard/seller-dashboard`;
                                                        } else {
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
                        <MyComponentLeft />
                        <SignupForm />
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
                                                className="w-28 h-auto mb-4" />


                                </div>
                                <img src="/images/ImageCard.png" className="mt-20" />
                        </div>
                        <div className="mt-2 max-w-[500px]">
                                <div className="mb-2 text-3xl font-medium text-black max-sm:text-3xl">
                                        Find Services That Fit Your Life
                                </div>
                                <div className="mb-10 text-base text-black text-opacity-70">
                                        Complete these easy steps to find the perfect service for you!
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
                                                        <Input placeholder="First Name" className="pl-10 bg-[#1a1a1a] text-white border-gray-700" />
                                                </div>
                                                <div className="relative">
                                                        <FaUser className="absolute left-3 top-3 text-gray-400" />
                                                        <Input placeholder="Last Name" className="pl-10 bg-[#1a1a1a] text-white border-gray-700" />
                                                </div>
                                        </div>
                                        <div className="relative mb-4">
                                            <FaUser className="absolute left-3 top-3 text-gray-400" />
                                                <Input placeholder="Username" className="pl-10  bg-[#1a1a1a] text-white border-gray-700" name="username" />
                                        </div>
                                        <div className="relative mb-4">
                                                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                                                <Input placeholder="Email" className="pl-10 bg-[#1a1a1a] text-white border-gray-700" />
                                        </div>

                                        <div className="relative mb-4">
                                                <FaPhone className="absolute left-3 top-3 text-gray-400" />
                                                <Input placeholder="Phone Number" className="pl-10 bg-[#1a1a1a] text-white border-gray-700" />
                                        </div>

                                        <div className="relative mb-2">
                                                <FaLock className="absolute left-3 top-3 text-gray-400" />
                                                <Input
                                                        type={showPassword ? "text" : "password"}
                                                        placeholder="Password"
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
                                                <span className="text-[oklch(0.79_0.18_86.03)] ml-1 cursor-pointer" onClick={() => window.location.href = '/login'}>Login</span>
                                        </p>
                                </CardContent>
                        </Card>
                </div>
        );
};




