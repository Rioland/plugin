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
import { Bell, HelpCircle, LogOut, Menu, Search, Settings, User, X } from 'lucide-react'

import { useState } from 'react'

import { usePathname, useRouter } from 'next/navigation'

import Cookies from 'js-cookie'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import {
        Avatar,
        AvatarImage,
        AvatarFallback,
      } from "@/components/ui/avatar"; // or wherever your ui components live


// import Image from 'next/image'


interface PluginNavbarProps {

        children?: React.ReactNode;

}
const PluginNavbar: React.FC<PluginNavbarProps> = ({ children }) => {
        const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
        const router = useRouter();
        const renderDropdown = (items: string[]) => (
                <div className="absolute top-full mt-0 left-0 bg-[#1f1f1f] border border-gray-700 rounded shadow-lg w-48 z-50">
                        {items.map((item, idx) => (
                                <div key={idx} className="px-4 py-2 hover:bg-[#2c2c2c] cursor-pointer text-lg" onClick={() => {
                                        if (item == 'Find Jobs') {
                                                router.push('/dashboard/seller-dashboard/jobs')
                                        } else if (item == 'Saved Jobs') {
                                                router.push('/dashboard/seller-dashboard/jobs/saved-jobs')
                                        }
                                        else if (item == 'Proposals') {
                                                router.push('/dashboard/seller-dashboard/all-proposals')
                                        }
                                        else if (item == 'Offers') {
                                                router.push('/dashboard/seller-dashboard/offers')
                                        }
                                        else if (item == 'Invites') {
                                                router.push('/dashboard/seller-dashboard/invites')
                                        }
                                        else if (item == 'Active Contract') {
                                                router.push('/dashboard/seller-dashboard/active-contract')
                                        }
                                        else if (item == 'Contract History') {
                                                router.push('/dashboard/seller-dashboard/contract-history')
                                        }
                                       
                                }}>
                                        {item}
                                </div>
                        ))}
                </div>
        )
        const [menuOpen, setMenuOpen] = useState(false);


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
                                                        renderDropdown(['Find Jobs', 'Saved Jobs', 'Proposals', 'Offers', 'Invites'])}
                                        </div>

                                        {/* Deliver Jobs */}
                                        <div
                                                className="relative"
                                                onMouseEnter={() => setHoveredMenu('deliver-jobs')}
                                                onMouseLeave={() => setHoveredMenu(null)}
                                        >
                                                <div className="cursor-pointer">Deliver Jobs ▾</div>
                                                {hoveredMenu === 'deliver-jobs' &&
                                                        renderDropdown(['Active Contract', 'Contract History'])}
                                        </div>
                                        <div className="cursor-pointer" onClick={() => { router.push('/dashboard/seller-dashboard/wallet') }}>Wallet</div>
                                        <div className="cursor-pointer" onClick={() => { router.push('/dashboard/seller-dashboard/messages') }}>Messages</div>


                                </nav>

                                <div className="flex items-center gap-4">
                                        <Input placeholder="Search..." className="bg-[#1f1f1f] border-none text-white placeholder:text-gray-400 hidden md:block" />
                                        <div className=" hidden md:flex items-center gap-4" >

                                                <Bell className="w-8 h-8" />
                                                <HelpCircle className="w-8 h-8" />
                                                <UserDropdown profile={{}}/>
                                                {/* <div className=' relative w-14'>
                                                        <img
                                                                src={profile.profile_picture ?? "/images/avatar.jpg"}
                                                                alt="User avatar"
                                                                className="w-10 h-10 rounded-full border-2 border-white  z-10 absolute top-0 left-"
                                                        />

                                                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white right-24 top-20">
                                                                <p className="text-xl font-bold">Overlay Content</p>
                                                                <p className="text-xl font-bold">Overlay Content</p>
                                                                <p className="text-xl font-bold">Overlay Content</p>
                                                        </div>
                                                </div> */}
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
                                                <div className="cursor-pointer"  onClick={() => { router.push('/dashboard/seller-dashboard/wallet') }}>Wallet</div>
                                                <div className="cursor-pointer" onClick={() => { router.push('/dashboard/seller-dashboard/messages') }}>Messages</div>
                                                <div className="cursor-pointer" onClick={() => { router.push('/dashboard/seller-dashboard/profile') }}>Profile</div>
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
                        <main className='mx-auto w-full'>
                                {children}
                        </main>
                </div>

        )
}

export default PluginNavbar;

function UserDropdown({profile}) {
        const router = useRouter();
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer rounded-full border-2 border-white ">
                <AvatarImage src={profile.profile_picture ?? "/images/avatar.jpg"} alt="User" />
                <AvatarFallback>AT</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
      
            <DropdownMenuContent
              align="end"
              sideOffset={10}
              className="w-72 rounded-2xl bg-[#5B5E6F] text-white p-4 shadow-lg"
            >
              <div className="flex items-center space-x-3 border-b border-white/20 pb-4 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={profile.profile_picture ?? "/images/avatar.jpg"} />
                  <AvatarFallback>AT</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-lg">{profile.firstname} {profile.lastname}</div>
                  <div className="text-sm text-white/70">Freelancer</div>
                </div>
              </div>
      
              <DropdownMenuItem className="flex items-center gap-3 text-base font-medium cursor-pointer hover:bg-white/10 rounded-md p-2" onClick={() => { router.push('/dashboard/seller-dashboard/profile') }}>
                <User className="text-yellow-400" size={20} />
                Profile
              </DropdownMenuItem>
      
              <DropdownMenuItem className="flex items-center gap-3 text-base font-medium cursor-pointer hover:bg-white/10 rounded-md p-2" onClick={() => { router.push('/dashboard/seller-dashboard/settings') }}>
                <Settings className="text-yellow-400" size={20} />
                Settings
              </DropdownMenuItem>
      
              <DropdownMenuItem className="flex items-center gap-3 text-base font-medium cursor-pointer hover:bg-white/10 rounded-md p-2" onClick={() => {
               Object.keys(Cookies.get()).forEach((cookie) => Cookies.remove(cookie));

               // Redirect to login
               router.push("/");
            
                 }}>
                <LogOut className="text-yellow-400" size={20} />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }
      