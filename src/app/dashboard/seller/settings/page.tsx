'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import PluginNavbar from "../Components/NavBar";
import { useState } from "react";
import { Check, ChevronsUpDown, PencilIcon } from "lucide-react";
import { Input } from "@/components/ui/input";


import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { FooterDivider } from "flowbite-react";


const navLinks = [
  {
    section: "Wallets",
    items: ["Bank Details"],
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
  const [currentPage, setCurrentPage] = useState('Bank Details');

  return (
    <PluginNavbar   >
      <div className="min-h-screen bg-black text-white">
        <div className="w-full mx-auto px-4 py-8 md:py-12">
          <div className="md:flex space-y-8 md:space-y-0 md:space-x-8">
            {/* Sidebar */}
            <aside className="w-full md:w-1/5 md:h-screen md:border-r md:border-yellow-500">
              <h2 className="text-2xl font-bold mb-6">Settings</h2>
              {navLinks.map((section) => (
                <div key={section.section} className="mb-6" >
                  <p className="text-sm uppercase text-gray-400 mb-2" onClick={() => setCurrentPage('Bank Details')}>
                    {section.section}
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        onClick={() => {
                          if (item === 'My Profile') {
                            window.location.href = '/dashboard/seller/profile'
                          } else {
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
            <ProfileSettings/>
            {/* {currentPage=='Profile Setting' ?<ProfileSettings />:currentPage=='Contact info'    ?<ContactInfo/>:currentPage=='add bank'? <AddBillPayment/>:<BillPayment/>} */}
          </div>
        </div>
      </div>
    </PluginNavbar>
  );
}




const BillPayment = () => {
  return <main className="w-full md:w-2/4 md:flex-1">
    <h2 className="text-2xl font-semibold mb-6">Bank Details</h2>
    <Card className="bg-[#121212] border border-gray-700 md:w-2/3 rounded-lg">
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-3 text-white">
          Bank Accounts
        </h3>
        <p className="text-sm text-gray-400 mb-4">
          Add your bank details to securely withdraw your earnings from your  wallet anytime you need.
        </p>
        <p className="text-sm text-gray-400 mb-4 mx-auto my-20 w-100 ">
          Opps! We have no record of your bank account
          Click add new to input withdrawal account.
        </p>

        <div className="flex justify-end">

          <Button className="bg-yellow-500 hover:border hover:border-yellow-500 hover:bg-transparent px-3 w-fit" variant="default">
            Add a billing method
          </Button>
        </div>
      </CardContent>
    </Card>
  </main>
}
const ProfileSettings = () => {
  return <main className="w-full md:w-2/4 md:flex-1">
    <h2 className="text-2xl font-semibold mb-6">Profile Setting</h2>
    <Card className="bg-[#121212] border border-gray-700 md:w-2/3 rounded-lg">
      <CardContent className="px-6">
       <div className=" flex justify-between "> 
        <h3 className="text-lg font-medium mb-3 text-white">
        My Profile
        </h3>
        <p className="text-lg text-yellow-500 cursor-pointer">View my profile as others can see it </p>
        </div>
        <p className="text-sm text-gray-400 mb-4">
          Add your bank details to securely withdraw your earnings from your  wallet anytime you need.
        </p>
        <p className="text-sm text-gray-400 mb-4 mx-auto my-20 w-100 ">
          Opps! We have no record of your bank account
          Click add new to input withdrawal account.
        </p>

        <div className="flex justify-end">

          <Button className="bg-yellow-500 hover:border hover:border-yellow-500 hover:bg-transparent px-3 w-fit" variant="default">
            Add a billing method
          </Button>
        </div>
      </CardContent>
    </Card>
  </main>
}
const AddBillPayment = () => {
  const banks = [
    { label: "GTBank", value: "gtb" },
    { label: "Access Bank", value: "ac" },
    { label: "Polaris", value: "po" },
  ]
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState("")

  return <main className="w-full md:w-2/4 md:flex-1">
    <h2 className="text-2xl font-semibold mb-6">Bank Details</h2>
    <Card className="bg-[#121212] border border-gray-700 md:w-2/3 rounded-lg">
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-3 text-white">
          Bank Accounts
        </h3>
        <p className="text-sm text-gray-400 mb-4">
          Add your bank details to securely withdraw your earnings from your  wallet anytime you need.
        </p>
        <div className="mb-5 w-full">
          <label className="text-lg  text-white mb-3 font-semibold" >Account number</label>
          <Input placeholder="0993744556" />
        </div>
        <div className="flex flex-col mb-5 w-full">
          <label className="text-lg  text-white mb-3 font-semibold" >Bank name</label>
          <Popover open={open} onOpenChange={setOpen} >
            <PopoverTrigger asChild className="w-full">
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-full justify-between"
              >
                {selected
                  ? banks.find((bank) => bank.value === selected)?.label
                  : "Select Bank"}
                <ChevronsUpDown className="ml-2 h-4 w-4  opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className=" p-0">
              <Command>
                <CommandInput placeholder="Search bank..." className="w-full" />
                <CommandList className="w-full">
                  {banks.map((bank) => (
                    <CommandItem className="w-full"
                      key={bank.value}
                      value={bank.value}
                      onSelect={() => {
                        setSelected(bank.value)
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          selected === bank.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {bank.label}
                    </CommandItem>
                  ))}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

        </div>
        <div className="flex gap-4 mb-5 w-full">
          <img src="/images/preloader.gif" width={20} height={20} />
          <p className="text-lg  text-white font-semibold">Dapo Samuel Garuba</p>
        </div>
        <FooterDivider />
        <div className="flex justify-end">

          <Button className="bg-yellow-500 hover:border hover:border-yellow-500 hover:bg-transparent px-3 w-fit" variant="default">
           Confirm
          </Button>
        </div>
      </CardContent>
    </Card>
  </main>
}

const ContactInfo = () => {
  return <main className="w-full md:w-2/4 md:flex-1">
    <h2 className="text-2xl font-semibold mb-6">Contact info</h2>
    <Card className="bg-[#121212] border border-gray-700 md:w-2/3 rounded-lg">
      <CardContent className="px-6">
        <div className=" flex justify-between ">
          <h3 className="text-lg font-medium mb-3 text-white">
            Accounts
          </h3>
          <PencilIcon className="text-yellow-500 cursor-pointer" size={20} />


        </div>

        <div className="text-white mb-3">
          <p className="text-lg font-bold">UserID</p>
          <p>787167856</p>
        </div>
        <div className="text-white mb-3">
          <p className="text-lg font-bold">Name</p>
          <p>Adedamola RIoland</p>
        </div>
        <div className="text-white mb-3">
          <p className="text-lg font-bold">Name</p>
          <p>riol**********@gmail.com</p>
        </div>
        <div className="text-white mb-3">
          <p className="text-lg font-bold">Phone</p>
          <p>08283686287</p>
        </div>

        <p className="text-lg font-bold text-red-600">Close Account</p>

      </CardContent>
    </Card>
  </main>
}


