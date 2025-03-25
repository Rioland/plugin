"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { toast, Toaster } from "sonner"
import { ApiBaseUrl } from "@/app/functions";
import { useSearchParams } from "next/navigation";


export default function Home() {
        const searchParams = useSearchParams();
        const email = searchParams.get('email');
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

        const handleResendOTP = (e) => {

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
                        .then((res) => res.json()).then((data) => {
                                console.log(data);
                                if (data.status == false) {

                                        toast.error(data.message,);

                                        setLoading(false);
                                } else {

                                        toast.success(data.message);

                                        setLoading(false);
                                }
                        });


                setCountdown(60); // Reset countdown
                setIsActive(true); // Disable button again

                // Call your OTP resend API here
                console.log("OTP Resent!");
        };
        // login form submission handler with user name and password
        const [loading, setLoading] = useState(false);
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const otp = formData.get("otp") as string;
                if (!otp) {
                        toast.error("OTP field is required",);
                        return;  // stop the function execution here if otp field is required
                }
                setLoading(true);
                // api call
                fetch(`${ApiBaseUrl}/register-step-two`, {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                                email: email,
                                verification_code: otp,
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
                                        window.location.href = "/";

                                }
                        });
        };
        return (
                <div className="pt-34 px-4"  >

                        <h1 className="text-center text-5xl font-bold  mb-15">Account Verification</h1>
                        <div className="w-full lg:w-2/5 mx-auto ">
                                {/* Your content goes here */}
                                <Toaster position="top-center" />
                                <Card className="border-none py-16">
                                        <CardHeader>
                                                <CardTitle className="pb-2"> Registration OTP has been sent to you email address{" "}</CardTitle>
                                                <CardDescription className="font-semibold text-sm mb-5">Enter the OTP sent to you to verify your identity</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                                <form className="space-y-6" onSubmit={handleSubmit}>
                                                        <div className="mb-4">
                                                                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} name="otp"
                                                                        id="otp">
                                                                        <InputOTPGroup className="flex space-x-4 mx-auto">
                                                                                <InputOTPSlot index={0} className="text-center rounded-b-none " />
                                                                                <InputOTPSlot index={1} />
                                                                                <InputOTPSlot index={2} />
                                                                                <InputOTPSlot index={3} />
                                                                                <InputOTPSlot index={4} />
                                                                                <InputOTPSlot index={5} />
                                                                        </InputOTPGroup>
                                                                </InputOTP>
                                                        </div>


                                                        {loading ? (
                                                                <div className="flex items-center justify-center mx-auto">
                                                                        <i className="fa-solid fa-circle-notch animate-spin text-4xl"></i>
                                                                </div>
                                                        ) : <Button type="submit" className="w-full bg-yellow-500 py-6 mt-10 ">
                                                                Verify OTP <i className="fal fa-arrow-right-long"></i>
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
