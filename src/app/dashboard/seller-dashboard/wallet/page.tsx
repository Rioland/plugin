'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { cn } from "@/lib/utils"
import {  Eye, EyeOff, ChevronLeft, ChevronRight, PlusCircle, MinusCircle, ShoppingCart, BadgeCheck, Plus } from "lucide-react"
import PluginNavbar from "../Components/NavBar"
import { useState } from "react"

export default function WalletPage() {
        const [showBalance,setShowBalance]=useState(false)
  return (
        <PluginNavbar>

    <div className="min-h-screen bg-black text-white p-4 md:p-10">
      {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-semibold">Wallet</h1>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Input placeholder="Search..." className="w-60 bg-[#111] border-none text-white placeholder:text-white/50" />
          <Button variant="ghost" size="icon" className="text-white">
            <Search size={20} />
          </Button>
        </div>
      </div> */}
<div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-4">
<div className="bg-yellow-500 rounded-xl p-6 text-black">
      <div className=" border border-gray-300   backdrop-blur-sm bg-white/30 p-6 rounded-xl">
      <p className="text-lg uppercase text-white">Total Wallet Balance</p>
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold text-white">{showBalance==true? "₦658,909.90":'*********'}</h2>
          <div className="flex items-center gap-2 ">
             {    showBalance==false?        <Eye className="cursor-pointer text-white " color="white" size={25}  onClick={()=>setShowBalance(true)} />: <EyeOff  className="cursor-pointer" color="white" size={25}   onClick={()=>setShowBalance(false)} />}
            <span className="text-lg font-medium text-white">NGN</span>
          </div>
        </div>
      </div>
        <div className="mt-4 flex flex-col md:flex-row gap-4 w-full">
          <Button className="bg-black text-white w-full md:w-1/2 py-6 px-6 text-2xl font-semibold"><Plus className="mr-2  " size={40}/> Deposit</Button>
          <Button className="bg-black text-white w-full md:w-1/2 py-6 px-6 text-2xl font-semibold">Withdraw</Button>
        </div>
      </div>

      <div className=" space-y-4">
        <div className="bg-[#111] p-4 rounded-xl flex flex-col justify-start items-start text-white">
          <div className="flex items-center gap-2 flex-row p-2 border border-gray-500 rounded-l-lg mb-4 w-full">
          <img src="/images/logo-single-yellow.png"  />   <p className="text-lg">  Plugs:</p>
            <span className="font-semibold text-lg">275</span>
          </div>
          <div className="flex gap-2 flex-col w-full">
            <Button className="bg-yellow-500 text-black">Buy Plugs</Button>
            <Button variant="outline" className="border-yellow-500 text-yellow-500">Wallet Settings</Button>
          </div>
        </div>
      </div>
</div>
     

     <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-4 text-white">
     <div className="">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 gap-4">
        <div>
          <p className="text-lg font-semibold">Transaction history</p>
        </div>
        <div className="flex gap-2 items-center text-yellow-500">
          <button className="text-sm font-medium">Filter</button>
          <button className="text-sm font-medium">View more</button>
        </div>
      </div>

      <Card className="bg-[#111] mt-4 text-sm overflow-x-auto">
        <CardContent className="p-0">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/30">
                <th className="p-4 text-white">Type</th>
                <th className="p-4 text-white">Amount</th>
                <th className="p-4 text-white">Transaction ID</th>
                <th className="p-4 text-white">Date</th>
                <th className="p-4 text-white">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: 'Deposit', icon: <PlusCircle />, amount: '+₦200,000', status: 'Pending', color: 'text-yellow-500' },
                { type: 'Withdrawal', icon: <MinusCircle />, amount: '+₦200,000', status: 'Successful', color: 'text-green-500' },
                { type: 'Purchase', icon: <ShoppingCart />, amount: '-₦200,000', status: 'Pending', color: 'text-yellow-500' },
                { type: 'Payment', icon: <BadgeCheck />, amount: '+₦200,000', status: 'Successful', color: 'text-green-500' },
                { type: 'Deposit', icon: <PlusCircle />, amount: '+₦200,000', status: 'Failed', color: 'text-red-500' },
                { type: 'Deposit', icon: <PlusCircle />, amount: '+₦200,000', status: 'Pending', color: 'text-yellow-500' },
                { type: 'Deposit', icon: <PlusCircle />, amount: '+₦200,000', status: 'Pending', color: 'text-yellow-500' },
                { type: 'Deposit', icon: <PlusCircle />, amount: '+₦200,000', status: 'Pending', color: 'text-yellow-500' },
              ].map((tx, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="p-4 flex items-center gap-2 text-white">{tx.icon} {tx.type}</td>
                  <td className="p-4 font-medium text-white">{tx.amount}</td>
                  <td className="p-4 text-white">8yu8j93</td>
                  <td className="p-4 text-white">April 25th, 2024</td>
                  <td className={cn("p-4 font-medium", tx.color)}>{tx.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Pagination className="mt-6 justify-center">
        <PaginationContent>
          <PaginationItem><PaginationPrevious className="bg-yellow-500 text-black" /></PaginationItem>
          <PaginationItem><Button size="icon" className="bg-yellow-500 text-black">1</Button></PaginationItem>
          <PaginationItem><Button size="icon" variant="ghost">2</Button></PaginationItem>
          <PaginationItem><Button size="icon" variant="ghost">3</Button></PaginationItem>
          <PaginationItem><PaginationNext className="bg-yellow-500 text-black" /></PaginationItem>
        </PaginationContent>
      </Pagination>
      </div>
     </div>

     
    </div>
        </PluginNavbar>
  )
}
