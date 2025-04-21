// 'use client'
// import Link from 'next/link'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
// import { Input } from '@/components/ui/input'
// import { Bell, HelpCircle, Menu, Search } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { useState } from 'react'
// import { RootState } from '@/states/store'
// import { usePathname } from 'next/navigation'
// import { useSelector } from 'react-redux'
// // import Image from 'next/image'


// interface PluginNavbarProps {

//         children?: React.ReactNode;
       
// }
// const PluginNavbar:React.FC<PluginNavbarProps>=({children})=> {
  
//         const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//         const profile = useSelector((state: RootState) => state.sellersProfileReducer)
//         const pathname = usePathname();
//         return (
//                 <div className="h-screen bg-black text-white ">
//                 <nav className="bg-black text-white px-6 py-6 border-b border-zinc-800">
//                 <div className="w-full mx-auto flex justify-between items-center">
//                   {/* Logo */}
//                   <div className="flex items-center space-x-2">
//                         <img src='/images/Logo-yellow.png' alt='Plugin Logo'  width={100} height={100}/>
//                     {/* <div className="bg-yellow-400 rounded-md p-1">
//                       <span className="font-bold text-black text-lg">🔌</span>
//                     </div>
//                     <span className="text-xl font-semibold">Plugin</span> */}
//                   </div>
          
//                   {/* Desktop Menu */}
//                   <div className="hidden md:flex space-x-6 items-center">
//                     <DropdownMenu>
//                       <DropdownMenuTrigger className="text-lg font-medium border-o outline-0">Find Jobs ▾</DropdownMenuTrigger>
//                       <DropdownMenuContent className="bg-zinc-700 text-white border-0 px-3">
//                         <div className='p-3 cursor-pointer hover:bg-yellow-500 hover:text-black' >Browse Jobs</div>
//                         <DropdownMenuItem>Saved Jobs</DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
          
//                     <DropdownMenu>
//                       <DropdownMenuTrigger className="text-lg font-medium">Deliver Jobs ▾</DropdownMenuTrigger>
//                       <DropdownMenuContent className="bg-zinc-700 text-white">
//                         <DropdownMenuItem>Active Contracts</DropdownMenuItem>
//                         <DropdownMenuItem>Contract History</DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
          
//                     <span className="text-lg font-medium">Wallet</span>
//                     <span className="text-lg font-medium">Messages</span>
          
//                     <Input placeholder="Search..." className="w-48 text-black" />
          
//                     <Bell className="w-5 h-5" />
//                     <HelpCircle className="w-5 h-5" />
//                     <img
//                       src={profile.profile_picture ?? "/images/avatar.jpg"}
//                       alt="User avatar"
//                       className="w-8 h-8 rounded-full border-2 border-white"
//                     />
//                   </div>
          
//                   {/* Mobile Hamburger */}
//                   <div className="md:hidden flex items-center">
//                     <Button variant="ghost" size="lg" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className='text-yellow-500 hover:bg-transparent hover:text-yellow-500 hover:border-yellow-500 hover:border '>
//                       <Menu className="h-16 w-16 text-yellow-500" />
//                     </Button>
//                   </div>
//                 </div>
          
//                 {/* Mobile Menu */}
//                 {mobileMenuOpen && (
//                   <div className="md:hidden mt-4 space-y-4 flex flex-col items-start justify-start">
//                     <DropdownMenu>
//                       <DropdownMenuTrigger className="text-lg font-medium">Find Jobs ▾</DropdownMenuTrigger>
//                       <DropdownMenuContent className="bg-zinc-700 text-white">
//                         <DropdownMenuItem>Browse Jobs</DropdownMenuItem>
//                         <DropdownMenuItem>Saved Jobs</DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
          
//                     <DropdownMenu>
//                       <DropdownMenuTrigger className="text-lg font-medium">Deliver Jobs ▾</DropdownMenuTrigger>
//                       <DropdownMenuContent className="bg-zinc-700 text-white">
//                         <DropdownMenuItem>Active Contracts</DropdownMenuItem>
//                         <DropdownMenuItem>Contract History</DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
          
//                     <div className="text-lg font-medium">Wallet</div>
//                     <div className="text-lg font-medium">Messages</div>
//                     <Input placeholder="Search..." className="text-black" />
//                     <DropdownMenu >
//                       <DropdownMenuTrigger className="text-lg font-medium">Settings ▾</DropdownMenuTrigger>
//                       <DropdownMenuContent className="bg-zinc-700 text-white border-0 px-3">
//                         <DropdownMenuItem className='hover:bg-yellow-500 hover:text-black'>Profile</DropdownMenuItem>
//                         <DropdownMenuItem>Contract History</DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
                    
//                   </div>
//                 )}
//               </nav>
//               {children}
//               </div>
         
//   )
// }

// export default PluginNavbar;





'use client'

import { Input } from '@/components/ui/input'
import { Bell, HelpCircle, Menu, Search, X } from 'lucide-react'

import { useState } from 'react'
import { RootState } from '@/states/store'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'

// import Image from 'next/image'


interface PluginNavbarProps {

        children?: React.ReactNode;

}
const PluginNavbar: React.FC<PluginNavbarProps> = ({ children }) => {
        const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
        const renderDropdown = (items: string[]) => (
                <div className="absolute top-full mt-0 left-0 bg-[#1f1f1f] border border-gray-700 rounded shadow-lg w-48 z-50">
                        {items.map((item, idx) => (
                                <div key={idx} className="px-4 py-2 hover:bg-[#2c2c2c] cursor-pointer text-sm">
                                        {item}
                                </div>
                        ))}
                </div>
        )
        const [menuOpen, setMenuOpen] = useState(false);

        const profile = useSelector((state: RootState) => state.sellersProfileReducer)
        const pathname = usePathname();
        return (
                <div className="h-screen bg-black text-white ">
                        <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800 relative">
                                <div className="flex items-center gap-2">
                                        <img src="/images/Logo-yellow.png" alt="Plugin Logo" width={100} height={100} />
                                        {/* <span className="text-lg font-semibold">Plugin</span> */}
                                </div>

                                <nav className="hidden md:flex items-center gap-6 text-sm">
                                        {/* Find Jobs */}
                                        <div
                                                className="relative"
                                                onMouseEnter={() => setHoveredMenu('find-jobs')}
                                                onMouseLeave={() => setHoveredMenu(null)}
                                        >
                                                <div className="cursor-pointer">Find Jobs ▾</div>
                                                {hoveredMenu === 'find-jobs' &&
                                                        renderDropdown(['Job Listings', 'Saved Jobs', 'Categories'])}
                                        </div>

                                        {/* Deliver Jobs */}
                                        <div
                                                className="relative"
                                                onMouseEnter={() => setHoveredMenu('deliver-jobs')}
                                                onMouseLeave={() => setHoveredMenu(null)}
                                        >
                                                <div className="cursor-pointer">Deliver Jobs ▾</div>
                                                {hoveredMenu === 'deliver-jobs' &&
                                                        renderDropdown(['My Deliveries', 'Active Jobs'])}
                                        </div>
                                        <div className="cursor-pointer">Wallet</div>
                                        <div className="cursor-pointer">Messages</div>


                                </nav>

                                <div className="flex items-center gap-4">
                                        <Input placeholder="Search..." className="bg-[#1f1f1f] border-none text-white placeholder:text-gray-400 hidden md:block" />
                                        <div className=" hidden md:flex items-center gap-4" >
                                                
                                                <Bell className="w-10 h-10" />
                                                <HelpCircle className="w-10 h-10" />
                                                
                                                <img
                                                        src={profile.profile_picture ?? "/images/avatar.jpg"}
                                                        alt="User avatar"
                                                        className="w-8 h-8 rounded-full border-2 border-white"
                                                />
                                        </div>
                                        <button
                                                className="md:hidden"
                                                onClick={() => setMenuOpen(!menuOpen)}
                                                aria-label="Toggle menu"
                                        >
                                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                                        </button>
                                </div>

                                {menuOpen && (
                                        <div className="absolute top-16 left-0 w-full bg-[#111] text-white flex flex-col items-start px-6 py-4 gap-4 md:hidden z-50 border-t border-gray-700">
                                                <Input placeholder="Search..." className="bg-[#1f1f1f] border-none text-white placeholder:text-gray-400" />
                                                {/* Find Jobs */}
                                                <div
                                                        className="relative"
                                                        onMouseEnter={() => setHoveredMenu('find-jobs')}
                                                        onMouseLeave={() => setHoveredMenu(null)}
                                                >
                                                        <div className="cursor-pointer">Find Jobs ▾</div>
                                                        {hoveredMenu === 'find-jobs' &&
                                                                renderDropdown(['Job Listings', 'Saved Jobs', 'Categories'])}
                                                </div>

                                                {/* Deliver Jobs */}
                                                <div
                                                        className="relative"
                                                        onMouseEnter={() => setHoveredMenu('deliver-jobs')}
                                                        onMouseLeave={() => setHoveredMenu(null)}
                                                >
                                                        <div className="cursor-pointer">Deliver Jobs ▾</div>
                                                        {hoveredMenu === 'deliver-jobs' &&
                                                                renderDropdown(['My Deliveries', 'Active Jobs'])}
                                                </div>
                                                <div className="cursor-pointer">Wallet</div>
                                                <div className="cursor-pointer">Messages</div>
                                                <div className="cursor-pointer">Profile</div>
                                                <div
                                                        className="relative"
                                                        onMouseEnter={() => setHoveredMenu('Settings')}
                                                        onMouseLeave={() => setHoveredMenu(null)}
                                                >
                                                        <div className="cursor-pointer">Settings ▾</div>
                                                        {hoveredMenu === 'Settings' &&
                                                                renderDropdown(['Profile', 'Help', 'Logout'])}
                                                </div>
                                                
                                        </div>
                                )}
                        </header>
                        {children}
                </div>

        )
}

export default PluginNavbar;

