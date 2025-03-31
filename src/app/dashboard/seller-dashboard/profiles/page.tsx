'use client'
import { useState, useEffect } from "react";
import { ApiBaseUrl } from "@/helper/functions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { toast, Toaster } from "sonner";

import Cookies from 'js-cookie';

// import KYCVerification from "@/components/onboarding/KycUploader";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@radix-ui/react-select";
import MyModal from "@/components/ui/MyModal";
import SellerSkills from "@/components/onboarding/SellerSkills";
import MySkills from "./Components/MySkill";
import ChangePassword from "./Components/ChangePassword";
import CloseAccount from "./Components/CloseAccount";
import AddExperience from "./Components/AddExperience";

export default function SellerProfile() {
    const [profile, setProfile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [addSkill, setAddSkill] = useState(false);
    const [addExperience, setAddExperience] = useState(false);
    // const user = Cookies.get("currentUser") as string;
    // const currentUser = user ? JSON.parse(user) : null;
    console.log(profile);
   

    const [loading, setLoading] = useState(false);
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

const saveprofile = () => {
    setLoading(true);
    const { first_name, last_name, email, phone_number, address, city, state, zip_code } = profile;
};
    if (!profile) return <p className="text-center py-10">Loading profile...</p>;

    return (
        <div className=" w-full p-6  ">
            
            <h1 className="font-bold text-3xl">My Profile</h1>
            <p className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptates quo sit! Molestias, iusto ipsam!</p>
            {/* user profile */}
            <Card className="mt-8 p-4">
                <CardHeader><h2 className="font-bold text-lg py-6 border-b border-gray-300">Profile Details</h2></CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row my-5">
                       <div className="relative w-24 h-24 rounded-full overflow-hidden ">
                       <img
                             src={preview || profile.profile_picture}
                            // {profile.profile_picture || "https://picsum.photos/200/300"}
                            alt="User Avatar"
                            className="w-20 h-20 rounded-full object-cover border shadow"
                        />
                        <input
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={handleImageChange}
                                />
                       </div>


                        <div className="flex flex-col justi">
                            <div className=" pt-2 ms-0 md:ms-5 flex md:flex-row ">
                                <div className=" p-2 bg-red-100 w-fit  rounded h-fit me-3 md:me-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </div>

                                <div className=" p-2 bg-orange-100 w-fit  rounded h-fit ms-4 cursor-pointer" onClick={uploadImage}>
                                    <p> {uploading ? "Uploading..." : "Update Profile Picture"}</p>
                                </div>
                            </div>
                            <p className=" ps-5 pt-2">Max file size  not more 1MB, Minimum dimension: 330x300 And Suitable files are .jpg & .png</p>
                        </div>

                    </div>
                    {/*  */}
                    <div className=" flex flex-col md:flex-row gap-4">
                        <div className=" p-1">
                            <label htmlFor="username">UserName</label><br />
                            <input type="text" id="username" placeholder="username" name="username" defaultValue={profile?.username || ""} disabled className="p-2 border-1 border-gray-400 mt-2 rounded w-full  md:w-100 " />
                        </div>
                        <div className=" p-1">
                            <label htmlFor="username">Email</label><br />
                            <input type="text" id="username" name="username" placeholder="email address" defaultValue={profile?.username || ""} disabled className="p-2 border-1 border-gray-400 mt-2 rounded w-full  md:w-100" />
                        </div>
                    </div>


                    <div className=" flex flex-col md:flex-row gap-4 mt-8">
                        <div className=" p-1">
                            <label htmlFor="username">Phone Number</label><br />
                            <input type="text" id="username" name="username" defaultValue={profile?.username || ""} className="p-2 border-1 border-gray-400 mt-2 rounded w-full  md:w-100 " />
                        </div>
                        <div className=" p-1">
                            <label htmlFor="username">TagLine</label><br />
                            <input type="text" id="username" name="username" defaultValue={profile?.username || ""} className="p-2 border-1 border-gray-400 mt-2 rounded w-full  md:w-100" />
                        </div>
                    </div>

                    <div className=" flex flex-col md:flex-row gap-4 mt-8">

                        <div className=" p-1">
                            <label htmlFor="username">Hourly Rate</label><br />
                            <select className="p-2 border-1 border-gray-400 mt-2 rounded w-full  md:w-100">
                                <option value="">$25</option>
                                <option value="">$50</option>
                                <option value="">$75</option>
                                <option value="">$100</option>
                                <option value="">$125</option>
                                <option value="">$150</option>
                                <option value="">$175</option>
                                <option value="">$200</option>
                            </select>

                        </div>
                        <div className=" p-1">
                            <label htmlFor="username">Gender</label><br />
                            {/* <input type="text" id="username" name="username" value={profile?.username || ""}   className="p-2 border-1 border-gray-400 mt-2 rounded w-full  md:w-100"/> */}
                            <select className="p-2 border-1 border-gray-400 mt-2 rounded w-full  md:w-100">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                {/* <option value=""></option> */}
                            </select>
                        </div>

                    </div>
                    <div className="p-1 mt-3">
                        <label htmlFor="username">Introduce Yourself</label><br />
                        <textarea name="" id="" rows={10} className="p-2 border-1 border-gray-400 mt-2 rounded w-full  md:w-200">

                        </textarea>
                    </div>
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <i className="fa-solid fa-circle-notch animate-spin text-4xl"></i>
                        </div>
                    ) : <Button type="submit" className="w-fit bg-yellow-500 py-6 mt-10 text-lg font-bold ">
                        Save <i className="fal fa-arrow-right-long"></i>
                    </Button>}
                </CardContent>
            </Card>
            {/* skills */}
            <Card className="mt-8 p-4">
                <CardHeader className="flex justify-between items-center border-b border-gray-300">
                    <h2 className="font-bold text-lg py-1 ">My Skills</h2>
                    <div className="flex items-center cursor-pointer " onClick={()=>{setAddSkill(true)}}>
                        <div className="w-fit h-fit p-2 rounded-full bg-red-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <p className="text-blue-600 font-semibold  ms-3">Add Skills</p>
                        </div>
                </CardHeader>
                <CardContent>
                    <MySkills cominprofile={profile}/>
                </CardContent>
            </Card>
            {/* add experience */}
            <Card className="mt-8 p-4">
            <CardHeader className="flex justify-between items-center border-b border-gray-300">
                    <h2 className="font-bold text-lg py-1 ">My Experience</h2>
                    <div className="flex items-center cursor-pointer " onClick={()=>{setAddExperience(true)}}>
                        <div className="w-fit h-fit p-2 rounded-full bg-red-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                        <p className="text-blue-600 font-semibold  ms-3">Add Experience</p>
                        </div>
                </CardHeader>
            </Card>
            {/* change password */}
            <Card className="mt-8 p-4">
            <CardHeader className="flex justify-between items-center border-b border-gray-300">
                    <h2 className="font-bold text-lg py-1 ">Change Password</h2>
                </CardHeader>
                <CardContent>
                    <ChangePassword/>
                </CardContent>
            </Card>
             {/* Close account */}
            <Card className="mt-8 p-4">
            <CardHeader className="flex justify-between items-center border-b border-gray-300">
                    <h2 className="font-bold text-lg py-1 ">Close Account</h2>
                </CardHeader>
                <CardContent>
                    <CloseAccount/>
                </CardContent>
            </Card>



            {/* others */}
            <MyModal isOpen={addSkill} onClose={()=>{setAddSkill(false)}}>
              <SellerSkills/>
            </MyModal>
            <MyModal isOpen={addExperience} onClose={()=>{setAddExperience(false)}}>
              <AddExperience/>
            </MyModal>
            <Toaster position="top-center"  />
        </div>
        
    );
}
