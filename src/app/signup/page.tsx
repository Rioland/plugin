'use client'
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import * as React from "react";
import { Eye, EyeOff } from "lucide-react";


import { Button } from "@/components/ui/button";
import { FaGoogle, FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";



// import { signUpWithGoogle } from "@/lib/actions";

import { useAccountStore } from "@/stores/useAccountStore";
import MyComponentLeft from "./Slider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { createClient } from "@/lib/supabase/clients";
import Swal from "sweetalert2";






export default function Page() {
        const router = useRouter();
        const { accountType } = useAccountStore();
        const [isHydrated, setIsHydrated] = React.useState(false);

        // ✅ Mark when Zustand has finished hydrating
        useEffect(() => {
                setIsHydrated(true);
        }, []);

        useEffect(() => {
                if (isHydrated && !accountType) {
                        router.push("/select-account-type");
                }
        }, [isHydrated, accountType, router]);

        if (!isHydrated) {
                // Optional loader to avoid flicker
                return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
        }

        return (
                <div className="bg-white min-h-screen flex flex-col md:flex-row justify-between">
                        <MyComponentLeft />
                        <SignupForm />
                </div>
        );
}








const SignupForm = () => {
        const supabase = createClient()
        const { accountType } = useAccountStore()
        const [pending, setPending] = React.useState(false)

        const [showPassword, setShowPassword] = React.useState(false);

        // ✅ Signup handler
        const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();

                const formData = new FormData(event.currentTarget);
                const lastName = formData.get("lastName") as string;
                const firstName = formData.get("firstName") as string;
                const password = formData.get("password") as string;
                const phoneNumber = formData.get("phoneNumber") as string;
                const email = formData.get("email") as string;

                if (!lastName || !password || !phoneNumber || !email || !firstName) {

                        Swal.fire({
                                title: 'Error!',
                                text: 'All fields must be provided',
                                icon: 'error',
                                confirmButtonText: 'Okay'
                        })
                        return;
                }

                try {
                        // ✅ Supabase signup with email verification
                        setPending(true)

                        // Get site URL for email confirmation redirect
                        const siteUrl = window.location.origin;



                        const { data, error } = await supabase.auth.signUp({
                                email,
                                password,
                                options: {
                                        emailRedirectTo: `${siteUrl}/auth/confirm`,
                                        data: {
                                                first_name: firstName,
                                                last_name: lastName,
                                                phone_number: phoneNumber,
                                                account_type: accountType,
                                                full_name: `${firstName} ${lastName}`,
                                                display_name: `${firstName} ${lastName}`,
                                        },
                                },
                        });

                        if (error) {
                                console.error('Signup error:', error.message);

                                // Handle specific error cases
                                let errorMessage = 'Registration failed';
                                if (error.message.toLowerCase().includes('user already registered')) {
                                        errorMessage = 'An account with this email already exists. Please try logging in.';
                                } else if (error.message.toLowerCase().includes('invalid email')) {
                                        errorMessage = 'Please enter a valid email address';
                                } else if (error.message.toLowerCase().includes('weak password')) {
                                        errorMessage = 'Password is too weak. Please use a stronger password.';
                                } else if (error.message) {
                                        errorMessage = error.message;
                                }


                                Swal.fire({
                                        title: 'Error!',
                                        text: errorMessage,
                                        icon: 'error',
                                        confirmButtonText: 'Cool'
                                })
                                return;
                        }

                        console.log('Signup successful:', data);
                        Swal.fire({
                                title: 'Error!',
                                text: 'Please check your email to confirm your account.',
                                icon: 'error',
                                confirmButtonText: 'Cool'
                        })

                        // Redirect to check email page
                        // window.location.href = `/auth/check-email?email=${encodeURIComponent(email)}`;

                } catch (err: any) {
                        console.error('Signup error:', err);
                        // toast.error(err.message || "Something went wrong. Try again.");
                        Swal.fire({
                                title: 'Error!',
                                text: err.message || "Something went wrong. Try again.",
                                icon: 'error',
                                confirmButtonText: 'Cool'
                        })
                } finally {
                        setPending(false)
                }
        };


        return (

                <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 w-full md:w-1/2">
                        <Card className="w-full max-w-md bg-black border border-gray-800">
                                <form onSubmit={handleSubmit}>
                                        
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

                                                {pending ? <img src="/images/preloader.gif" className="mx-auto" /> : <Button type="submit" className="w-full bg-[oklch(0.79_0.18_86.03)] text-black hover:bg-[oklch(0.79_0.18_86.03)] py-6 md:py-0">
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




