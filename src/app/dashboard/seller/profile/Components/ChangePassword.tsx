"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { toast, Toaster } from "sonner"
import { ApiBaseUrl } from "@/helper/functions"
import Cookies from "js-cookie"
export default function ChangePassword() {
        const [loading, setLoading] = useState(false);
        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const oldpassword = formData.get("oldpassword") as string;
                const newpassword = formData.get("newpassword") as string;
                const confirmpassword = formData.get("confirmpassword") as string;

                if (!oldpassword || !newpassword || !confirmpassword) {
                        toast.error("All fields must be provided",);
                        return false;
                } else {
                        if(newpassword!=confirmpassword){
                                toast.error("Passwords do not match",);
                                return false;
                        }else{
                                setLoading(true);
                                fetch(`${ApiBaseUrl}/seller/change-password`, {
                                        method: "POST",
                                        headers: {
                                                "Content-Type": "application/json",
                                                Authorization: `Bearer ${Cookies.get("token")}`, 
                                        },
                                        body: JSON.stringify({
                                                "current_password": oldpassword,
                                                "password": newpassword,
                                                "password_confirmation": confirmpassword
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
                                                        toast.success("Password Update successful",);
                                                }
                                        })
                                        .catch((error) => {
                                                console.error("Error during updating password:", error);
                                                setLoading(false);
                                        });
                        }
                      
                }

        }
        return (
                <div className='p-2'>
                        <form onSubmit={handleSubmit} >
                                <Toaster position="top-center" />
                                <div className=" flex flex-col md:flex-row gap-4">
                                        <div className=" p-1">
                                                <label htmlFor="oldpassword">Old Password</label><br />
                                                <input type="password" id="oldpassword" placeholder="**********" name="oldpassword" className="p-2 border-1 border-gray-400 mt-2 rounded w-full  md:w-200 " />
                                        </div>

                                </div>
                                <div className=" flex flex-col md:flex-row gap-4">
                                        <div className=" p-1">
                                                <label htmlFor="newpassword">New Password</label><br />
                                                <input type="password" id="newpassword" placeholder="**********" name="newpassword" className="p-2 border-1 border-gray-400 mt-2 rounded w-full  md:w-200 " />
                                        </div>

                                </div>
                                <div className=" flex flex-col md:flex-row gap-4">
                                        <div className=" p-1">
                                                <label htmlFor="confirmpassword">Confirm Password</label><br />
                                                <input type="password" id="confirmpassword" placeholder="**********" name="confirmpassword" className="p-2 border-1 border-gray-400 mt-2 rounded w-full  md:w-200 " />
                                        </div>

                                </div>

                                {loading ? (
                                        <div className="flex items-start justify-start">
                                                <i className="fa-solid fa-circle-notch animate-spin text-4xl"></i>
                                        </div>
                                ) : <Button type="submit" className="w-fit bg-yellow-500 py-6 mt-10 ">
                                        Save <i className="fal fa-arrow-right-long"></i>
                                </Button>}
                        </form>
                </div>
        )
}
