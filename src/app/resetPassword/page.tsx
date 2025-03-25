"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import { toast, Toaster } from "sonner"
import { ApiBaseUrl } from "../functions";
import { useSearchParams } from "next/navigation";

export default function Home() {
        const searchParams = useSearchParams();
        const email = searchParams.get('email');
        // login form submission handler with user name and password
        const [loading, setLoading] = useState(false);


        const [countdown, setCountdown] = useState(60); // Initial countdown
        const [isActive, setIsActive] = useState(true); // Disable button when active

        useEffect(() => {
                let timer: NodeJS.Timeout;

                if (isActive && countdown > 0) {
                        timer = setTimeout(() => {
                                setCountdown((prev) => prev - 1);
                        }, 1000);
                } else if (countdown === 0) {
                        setIsActive(false);
                }

                return () => clearTimeout(timer);
        }, [countdown, isActive]);


        const handleResendOTP = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                e.preventDefault();

                setLoading(true);
                fetch(`${ApiBaseUrl}/resend-verification`, {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                                email: email
                        }),
                })
                        .then((res) => res.json())
                        .then((data) => {
                                console.log(data);
                                if (data.status === false) {
                                        toast.error(data.message,);
                                        setLoading(false);
                                } else {
                                        toast.success(data.message);
                                        setLoading(false);
                                }
                        });

                setCountdown(60); // Reset countdown
                setIsActive(true); // Disable button again

                console.log("OTP Resent!");
        };
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const verification_code = formData.get("verification_code") as string;
                const password = formData.get("password") as string;
                const password_confirmation = formData.get("password_confirmation") as string;

                if (!verification_code || !password || !password_confirmation) {
                        toast.error("All fields are required");
                        return;
                }
                if (password!== password_confirmation) {
                        toast.error("Passwords do not match");
                        return;
                }
                setLoading(true);
                fetch(`${ApiBaseUrl}/reset-password`, {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                                email: email,
                                password: password,
                                password_confirmation: password_confirmation,
                                verification_code: verification_code,


                        }),
                })
                        .then((res) => res.json())
                        .then((data) => {
                                console.log(data);
                                if (data.status == false) {
                                        toast.error(data.message,);

                                        setLoading(false);
                                } else {
                                        // window.location.href = `/`;
                                        setLoading(false);

                                }
                        });


        };
        return (
                <div className="pt-34 px-4"  >

                        <h1 className="text-center text-5xl font-bold  mb-15">Create new password</h1>
                        <div className="w-full lg:w-2/5 mx-auto ">
                                {/* Your content goes here */}

                                <Card className="border-none py-16">
                                        <CardHeader>
                                                <CardTitle className="pb-2">Set new password</CardTitle>
                                                <CardDescription className="font-semibold text-sm mb-5">Enter the otp code sent to your email address and sent a new password </CardDescription>
                                                <Toaster position="top-center" />

                                        </CardHeader>
                                        <CardContent>
                                                <form className="space-y-6" onSubmit={handleSubmit}>
                                                        <div className="mb-4">
                                                                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</Label>
                                                                <Input
                                                                        type="text"
                                                                        defaultValue={email}

                                                                        name="email"
                                                                        id="email"
                                                                        required
                                                                        readOnly
                                                                        className="shadow-sm focus:ring-primary focus:border-primary block w-full px-4 py-7 rounded-md"
                                                                />
                                                        </div>

                                                        <div className="mb-4">
                                                                <Label htmlFor="verification_code" className="block text-sm font-medium text-gray-700 mb-2">Verification Code</Label>
                                                                <Input
                                                                        type="text"
                                                                        // pattern="^[0-9]{6}"
                                                                        name="verification_code"
                                                                        id="verification_code"
                                                                        required
                                                                        placeholder="09998"

                                                                        className="shadow-sm focus:ring-primary focus:border-primary block w-full px-4 py-7 rounded-md"
                                                                />
                                                        </div>

                                                        <div className="mb-4">
                                                                <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</Label>
                                                                <input
                                                                        type="password"
                                                                        name="password"
                                                                        id="password"
                                                                        required
                                                                        placeholder="...."
                                                                        className="shadow-sm focus:ring-primary focus:border-primary block w-full px-4 py-4 rounded-md"
                                                                />
                                                        </div>
                                                        <div className="mb-4">
                                                                <Label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</Label>
                                                                <input
                                                                        type="password"
                                                                        name="password_confirmation"
                                                                        id="password_confirmation"
                                                                        required
                                                                        placeholder="...."
                                                                        className="shadow-sm focus:ring-primary focus:border-primary block w-full px-4 py-4 rounded-md"
                                                                />
                                                        </div>

                                                        


                                                                {loading ? (
                                                                        <div className="flex items-center justify-center mx-auto">
                                                                                <i className="fa-solid fa-circle-notch animate-spin text-4xl"></i>
                                                                        </div>
                                                                ) : <Button type="submit" className="w-full bg-yellow-500 py-6 mt-10 ">
                                                                        Log In
                                                                </Button>}

                                                </form>
                                        </CardContent>
                                        <div className="px-12">
                                                {countdown > 0 ? <p className="text-gray-600">Resend OTP in {countdown}s</p> : <a href='"#'
                                                        onClick={(e) => { handleResendOTP(e) }}
                                                        // disabled={isActive}
                                                        className='text-blue-800 text-lg '   >
                                                        Resend OTP
                                                </a>}
                                        </div>
                                </Card>
                        </div>
                </div>
        );
}
