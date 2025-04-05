'use client'
import Cookies from "js-cookie";
import React, { useEffect, useState } from 'react'
import ChatUI from "./Components/ChatUI";
import { Card } from "@/components/ui/card";

export default function page() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
      const user = Cookies.get("currentUser") as string;
      const currentUser = user ? JSON.parse(user) : null;
      setProfile(currentUser);
  }, []);
  if (!profile) return <p className="text-center py-10">Loading profile...</p>;

  return (
    <div className=" w-full p-6  ">

    <h1 className="font-bold text-3xl">Messages</h1>
    <p className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptates quo sit! Molestias, iusto ipsam!</p>
    {/* Chat ui */}
    <Card className="my-8">
    <ChatUI />
    </Card>
    </div>
  )
}
