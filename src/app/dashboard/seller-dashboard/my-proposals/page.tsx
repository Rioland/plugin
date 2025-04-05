'use client'

import React, { useEffect, useState } from 'react'
import { Pencil, Trash2 } from "lucide-react";
import Cookies from "js-cookie";
// import { Card } from '@/components/ui/card';
import ProposalTable from './Components/ProposalTable';
export default function Page() {
        const [profile, setProfile] = useState(null);

        useEffect(() => {
            const user = Cookies.get("currentUser") as string;
            const currentUser = user ? JSON.parse(user) : null;
            setProfile(currentUser);
        }, []);
        if (!profile) return <p className="text-center py-10">Loading profile...</p>;
  return (
        <div className=" w-full p-6  ">

        <h1 className="font-bold text-3xl">My Proposals</h1>
        <p className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptates quo sit! Molestias, iusto ipsam!</p>
        {/* proposal ui */}
   
                <ProposalTable  />

      
        </div>
  )
}










