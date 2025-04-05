'use client'

import React, { useEffect, useState } from 'react'
import { Pencil, Trash2 } from "lucide-react";
import Cookies from "js-cookie";
import { Card } from '@/components/ui/card';
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

        <h1 className="font-bold text-3xl">My Proposals</h1>
        <p className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae voluptates quo sit! Molestias, iusto ipsam!</p>
        {/* proposal ui */}
   
                <ProposalTable />

      
        </div>
  )
}








const proposals = [
  {
    title: "Food Delivery Mobile App",
    location: "London, UK",
    date: "April 01, 2023",
    received: 1,
    cost: "$100 - $150"
  },
  {
    title: "Swift / SwiftUI Developer for B2B iOS apps",
    location: "London, UK",
    date: "April 01, 2023",
    received: 1,
    cost: "$200 - $250"
  },
  {
    title: "English content writer for Fintech",
    location: "London, UK",
    date: "April 01, 2023",
    received: 1,
    cost: "$300 - $350"
  },
  {
    title: "Full-stack Developer to help us to build our",
    location: "London, UK",
    date: "April 01, 2023",
    received: 1,
    cost: "$400 - $450"
  },
  {
    title: "Looking for team members for web agency",
    location: "London, UK",
    date: "April 01, 2023",
    received: 1,
    cost: "$500 - $550"
  }
];

const ProposalTable = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow p-6">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-4 px-4 text-gray-600">Name</th>
              <th className="py-4 px-4 text-gray-600">Cost / Delivery</th>
              <th className="py-4 px-4 text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((proposal, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="font-medium text-gray-800">{proposal.title}</div>
                  <div className="text-sm text-gray-500 flex gap-2 items-center mt-1">
                    <span>📍 {proposal.location}</span>
                    <span>📅 {proposal.date}</span>
                    <span>📄 {proposal.received} Received</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-700">
                  <span className="font-semibold">{proposal.cost}</span>
                  <span className="text-sm text-gray-500 ml-1">Hourly Rate</span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    <button className="p-2 rounded bg-rose-100 text-rose-500 hover:bg-rose-200">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded bg-rose-100 text-rose-500 hover:bg-rose-200">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-6 gap-2 text-sm">
          <button className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">&lt;</button>
          <button className="w-8 h-8 rounded-full bg-green-500 text-white">2</button>
          <button className="w-8 h-8 rounded-full text-gray-600 hover:bg-gray-100">3</button>
          <button className="w-8 h-8 rounded-full text-gray-600 hover:bg-gray-100">4</button>
          <button className="w-8 h-8 rounded-full text-gray-600 hover:bg-gray-100">5</button>
          <span className="px-2">...</span>
          <button className="w-8 h-8 rounded-full text-gray-600 hover:bg-gray-100">20</button>
          <button className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">&gt;</button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-2">
          1 – 20 of 300+ property available
        </p>
      </div>
    </div>
  );
};


