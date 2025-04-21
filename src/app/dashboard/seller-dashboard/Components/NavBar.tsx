'use client'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Bell, HelpCircle, Menu, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
// import Image from 'next/image'


interface PluginNavbarProps {

        children?: React.ReactNode;
       
}
const PluginNavbar:React.FC<PluginNavbarProps>=({children})=> {
  
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

        return (
                <div className="h-screen bg-black text-white ">
                <nav className="bg-black text-white px-6 py-6 border-b border-zinc-800">
                <div className="w-full mx-auto flex justify-between items-center">
                  {/* Logo */}
                  <div className="flex items-center space-x-2">
                    <div className="bg-yellow-400 rounded-md p-1">
                      <span className="font-bold text-black text-lg">🔌</span>
                    </div>
                    <span className="text-xl font-semibold">Plugin</span>
                  </div>
          
                  {/* Desktop Menu */}
                  <div className="hidden md:flex space-x-6 items-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="text-sm font-medium">Find Jobs ▾</DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-zinc-700 text-white">
                        <DropdownMenuItem>Browse Jobs</DropdownMenuItem>
                        <DropdownMenuItem>Saved Jobs</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
          
                    <DropdownMenu>
                      <DropdownMenuTrigger className="text-sm font-medium">Deliver Jobs ▾</DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-zinc-700 text-white">
                        <DropdownMenuItem>Active Contracts</DropdownMenuItem>
                        <DropdownMenuItem>Contract History</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
          
                    <span className="text-sm font-medium">Wallet</span>
                    <span className="text-sm font-medium">Messages</span>
          
                    <Input placeholder="Search..." className="w-48 text-black" />
          
                    <Bell className="w-5 h-5" />
                    <HelpCircle className="w-5 h-5" />
                    <img
                      src="/avatar.jpg"
                      alt="User avatar"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  </div>
          
                  {/* Mobile Hamburger */}
                  <div className="md:hidden flex items-center">
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                      <Menu className="h-5 w-5 text-white" />
                    </Button>
                  </div>
                </div>
          
                {/* Mobile Menu */}
                {mobileMenuOpen && (
                  <div className="md:hidden mt-4 space-y-4 flex flex-col items-start justify-start">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="text-sm font-medium">Find Jobs ▾</DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-zinc-700 text-white">
                        <DropdownMenuItem>Browse Jobs</DropdownMenuItem>
                        <DropdownMenuItem>Saved Jobs</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
          
                    <DropdownMenu>
                      <DropdownMenuTrigger className="text-sm font-medium">Deliver Jobs ▾</DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-zinc-700 text-white">
                        <DropdownMenuItem>Active Contracts</DropdownMenuItem>
                        <DropdownMenuItem>Contract History</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
          
                    <div className="text-sm font-medium">Wallet</div>
                    <div className="text-sm font-medium">Messages</div>
                    <Input placeholder="Search..." className="text-black" />
                  </div>
                )}
              </nav>
              </div>
         
  )
}

export default PluginNavbar;
