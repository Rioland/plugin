'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    section: "Billing",
    items: ["Billing & payments"],
  },
  {
    section: "User Settings",
    items: [
      "My Profile",
      "Profile Setting",
      "Membership & Plugins",
      "Contact info",
      "Get paid",
      "Password & Security",
      "Notification Settings",
    ],
  },
];

export default function BillingSettingsPage() {
        const [currentPage,setCurrentPage]=useState('Billing & payments');

  return (
   <AppbarItem text="settings"  >
     <div className="min-h-screen bg-black text-white">
      <div className="w-full mx-auto px-4 py-8 md:py-12">
        <div className="md:flex space-y-8 md:space-y-0 md:space-x-8">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4">
            <h2 className="text-2xl font-bold mb-6">Settings</h2>
            {navLinks.map((section) => (
              <div key={section.section} className="mb-6" >
                <p className="text-sm uppercase text-gray-400 mb-2" onClick={()=>setCurrentPage('Billing & payments')}>
                  {section.section}
                </p>
                <ul className="space-y-2 text-gray-300">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      onClick={()=>{
                        if(item==='My Profile'){
                                window.location.href='/dashboard/seller-dashboard/profile'
                        }else{
                                setCurrentPage(item)
                        }
                      }}
                      className={cn(
                        "hover:text-yellow-500 cursor-pointer",
                        item === currentPage &&
                          "text-yellow-500 font-medium border-l-2 border-yellow-500 pl-2"
                      )}
                    >
                      {item}
                    </li>
                    
                  ))}
                </ul>
              </div>
            ))}
          </aside>

          {/* Main Content */}
         <BillPayment/>
        </div>
      </div>
    </div>
   </AppbarItem>
  );
}


const BillPayment=()=>{
    return    <main className="w-full md:flex-1">
        <h2 className="text-2xl font-semibold mb-6">Billing & payments</h2>
        <Card className="bg-[#121212] border border-gray-700">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-3 text-white">
              Billing methods
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              You haven’t set up any billing methods yet. Your billing method will be
              charged only when your available balance from Plugin earnings is not
              sufficient to pay for your monthly membership and/or Connects.
            </p>
            <Button className="text-yellow-500 hover:underline px-0" variant="ghost">
              <span className="mr-1">➕</span> Add a billing method
            </Button>
          </CardContent>
        </Card>
      </main>
}



import { PencilIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AppbarItem from "../Components/AppbarOne";

const ContactInfo = () => {
        return (
          <div className="flex justify-center items-center min-h-screen bg-black text-white p-4">
            <Card className="w-full max-w-md sm:max-w-lg bg-gray-900 rounded-lg">
              <CardHeader className="flex justify-between items-center">
                <CardTitle className="text-2xl font-bold">Contact info</CardTitle>
                <PencilIcon className="h-6 w-6 text-yellow-500 cursor-pointer" />
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-semibold mb-4">Accounts</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium">User ID</p>
                    <p className="text-base">909302</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Name</p>
                    <p className="text-base">David S.</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-base">David********@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone number</p>
                    <p className="text-base">+234704539233</p>
                  </div>
                  <Button className="bg-yellow-500 text-black w-full mt-6">
                    Close account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      };


