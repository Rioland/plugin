'use client'
import { useState, useEffect } from "react";
import { ApiBaseUrl } from "@/helper/functions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toast, Toaster } from "sonner";

import Cookies from 'js-cookie';
import { Tabs } from "@radix-ui/react-tabs";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import KYCVerification from "@/components/onboarding/KycUploader";

export default function SellerProfile() {
    const [profile, setProfile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const tabState = "account";

    useEffect(() => {
        async function fetchProfile() {
            try {
                const res = await fetch(`${ApiBaseUrl}/seller/get-profile`, {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("token")}`, // Only this header
                    },
                });
                const data = await res.json();
                setProfile(data.data);
            } catch (error) {
                console.error(error);
                toast.error("Failed to fetch profile data");
            }
        }
        fetchProfile();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const uploadImage = async () => {
        if (!selectedFile) return toast.error("Please select an image first!");
        setUploading(true);

        const formData = new FormData();
        formData.append("image", selectedFile);

        try {
            const response = await fetch(`${ApiBaseUrl}/seller/upload-profile-picture`, {
                method: "POST",
                body: formData,
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`, // Keep only Authorization header
                },
            });

            const data = await response.json();
            if (data.status) {
                setProfile((prev) => ({ ...prev, profile_picture: data.url }));
                toast.success("Profile picture updated successfully!");
            } else {
                toast.error("Upload failed!");
            }
        } catch (error) {
            console.log(error);
            toast.error("Upload error occurred");
        } finally {
            setUploading(false);
        }
    };


    if (!profile) return <p className="text-center py-10">Loading profile...</p>;

    return (
        <div className="max-w-3xl mx-auto p-6">
            <Tabs defaultValue={tabState} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="kyc">KYC</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className="mt-10">
                    <Card className="shadow-lg p-6 rounded-xl bg-white">
                        <CardHeader className="flex items-center gap-4">
                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-500">
                                <img
                                    src={preview || profile.profile_picture}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={handleImageChange}
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">{profile.name}</h2>
                                <p className="text-gray-500">{profile.country}</p>
                            </div>
                        </CardHeader>
                        <Toaster position="top-center" className='bg-amber-200' />
                        <CardContent>
                            {/* <div className="pb-3">
                                <h3 className="text-lg font-semibold">Phone Number</h3>
                                <p className="text-gray-700">{profile.name}</p>
                            </div> */}

                            <div className="pb-3">   <h3 className="text-lg font-semibold">Bio</h3>
                                <p className="text-gray-700">{profile.bio}</p>
                            </div>
                            <h3 className="text-lg font-semibold mt-4">Skills</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {profile.skills.map((skill) => (
                                    <span key={skill.id} className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>

                            {selectedFile && (
                                <Button
                                    onClick={uploadImage}
                                    className="mt-4 bg-yellow-500 w-full py-2"
                                    disabled={uploading}
                                >
                                    {uploading ? "Uploading..." : "Update Profile Picture"}
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="kyc" className="">
                       <KYCVerification />
                </TabsContent>
            </Tabs>
            {/* <Card className="shadow-lg p-6 rounded-xl bg-white">
                                <CardHeader className="flex items-center gap-4">
                                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-500">
                                                <img
                                                        src={preview || profile.profile_picture}
                                                        alt="Profile"
                                                        className="w-full h-full object-cover"
                                                />
                                                <input
                                                        type="file"
                                                        accept="image/*"
                                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                                        onChange={handleImageChange}
                                                />
                                        </div>
                                        <div>
                                                <h2 className="text-xl font-bold">{profile.name}</h2>
                                                <p className="text-gray-500">{profile.country}</p>
                                        </div>
                                </CardHeader>
                                <Toaster position="top-center" className='bg-amber-200' />
                                <CardContent>
                                        <h3 className="text-lg font-semibold">Bio</h3>
                                        <p className="text-gray-700">{profile.bio}</p>

                                        <h3 className="text-lg font-semibold mt-4">Skills</h3>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                                {profile.skills.map((skill) => (
                                                        <span key={skill.id} className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                                                                {skill.name}
                                                        </span>
                                                ))}
                                        </div>

                                        {selectedFile && (
                                                <Button
                                                        onClick={uploadImage}
                                                        className="mt-4 bg-yellow-500 w-full py-2"
                                                        disabled={uploading}
                                                >
                                                        {uploading ? "Uploading..." : "Update Profile Picture"}
                                                </Button>
                                        )}
                                </CardContent>
                        </Card> */}
        </div>
    );
}
