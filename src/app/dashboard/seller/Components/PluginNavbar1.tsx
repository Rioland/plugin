// 'use client'

// import { Input } from '@/components/ui/input'
// import { Bell, HelpCircle, Menu, Search, X } from 'lucide-react'
// import { useState } from 'react'
// import { RootState } from '@/states/store'
// import { usePathname } from 'next/navigation'
// import { useSelector } from 'react-redux'
// import Image from 'next/image'

// const PluginNavbar1: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)

//   const profile = useSelector((state: RootState) => state.sellersProfileReducer)
//   const pathname = usePathname()

//   const renderDropdown = (items: string[]) => (
//     <div className="absolute top-full mt-2 left-0 bg-[#1f1f1f] border border-gray-700 rounded shadow-lg w-48 z-50">
//       {items.map((item, idx) => (
//         <div key={idx} className="px-4 py-2 hover:bg-[#2c2c2c] cursor-pointer text-sm">
//           {item}
//         </div>
//       ))}
//     </div>
//   )

//   return (
//     <div className="h-screen bg-black text-white w-screen">
//       <header className="flex justify-between items-center  py-4 border-b border-gray-800 relative">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <Image src="/images/Logo-yellow.png" alt="Plugin Logo" width={100} height={100} />
//         </div>

//         {/* Desktop nav */}
//         <nav className="hidden md:flex items-center gap-6 text-sm ">
//           {/* Find Jobs */}
//           <div
//             className="relative"
//             onMouseEnter={() => setHoveredMenu('find-jobs')}
//             onMouseLeave={() => setHoveredMenu(null)}
//           >
//             <div className="cursor-pointer">Find Jobs ▾</div>
//             {hoveredMenu === 'find-jobs' &&
//               renderDropdown(['Job Listings', 'Saved Jobs', 'Categories'])}
//           </div>

//           {/* Deliver Jobs */}
//           <div
//             className="relative"
//             onMouseEnter={() => setHoveredMenu('deliver-jobs')}
//             onMouseLeave={() => setHoveredMenu(null)}
//           >
//             <div className="cursor-pointer">Deliver Jobs ▾</div>
//             {hoveredMenu === 'deliver-jobs' &&
//               renderDropdown(['My Deliveries', 'Active Jobs'])}
//           </div>

//           <div className="cursor-pointer">Wallet</div>
//           <div className="cursor-pointer">Messages</div>
//         </nav>

//         {/* Search and Icons */}
//         <div className="flex items-center gap-4">
//           <Input
//             placeholder="Search..."
//             className="bg-[#1f1f1f] border-none text-white placeholder:text-gray-400 hidden md:block"
//           />

//           {/* Desktop Icons with dropdowns */}
//           <div className="hidden md:flex items-center gap-4 relative">
//             <div
//               className="relative"
//               onMouseEnter={() => setHoveredMenu('bell')}
//               onMouseLeave={() => setHoveredMenu(null)}
//             >
//               <Bell className="w-6 h-6 cursor-pointer" />
//               {hoveredMenu === 'bell' && renderDropdown(['Notification 1', 'Notification 2'])}
//             </div>

//             <div
//               className="relative"
//               onMouseEnter={() => setHoveredMenu('help')}
//               onMouseLeave={() => setHoveredMenu(null)}
//             >
//               <HelpCircle className="w-6 h-6 cursor-pointer" />
//               {hoveredMenu === 'help' && renderDropdown(['Help Center', 'Support'])}
//             </div>

//             <div
//               className="relative"
//               onMouseEnter={() => setHoveredMenu('profile')}
//               onMouseLeave={() => setHoveredMenu(null)}
//             >
//               <img
//                 src={profile.profile_picture ?? "/images/avatar.jpg"}
//                 alt="User avatar"
//                 className="w-8 h-8 rounded-full border-2 border-white cursor-pointer"
//               />
//               {hoveredMenu === 'profile' && renderDropdown(['My Profile', 'Settings', 'Logout'])}
//             </div>
//           </div>

//           {/* Mobile Hamburger */}
//           <button
//             className="md:hidden"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile dropdown */}
//         {menuOpen && (
//           <div className="absolute top-16 left-0 w-full bg-[#111] text-white flex flex-col items-start px-6 py-4 gap-4 md:hidden z-50 border-t border-gray-700">
//             <Input
//               placeholder="Search..."
//               className="bg-[#1f1f1f] border-none text-white placeholder:text-gray-400"
//             />
//             <div className="cursor-pointer">Find Jobs</div>
//             <div className="cursor-pointer">Deliver Jobs</div>
//             <div className="cursor-pointer">Wallet</div>
//             <div className="cursor-pointer">Messages</div>
//             <div className="flex items-center gap-4 mt-4">
//               <Bell className="w-6 h-6" />
//               <HelpCircle className="w-6 h-6" />
//               <img
//                 src={profile.profile_picture ?? "/images/avatar.jpg"}
//                 alt="User avatar"
//                 className="w-8 h-8 rounded-full border-2 border-white"
//               />
//             </div>
//           </div>
//         )}
//       </header>

//       {children}
//     </div>
//   )
// }

// export default PluginNavbar1






'use client'

import { Input } from '@/components/ui/input'
import { Bell, HelpCircle, Menu, Search, X } from 'lucide-react'

import { useState } from 'react'
import { RootState } from '@/stores/userStore'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'

// import Image from 'next/image'


interface PluginNavbarProps {

        children?: React.ReactNode;

}
const PluginNavbar1: React.FC<PluginNavbarProps> = ({ children }) => {
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

export default PluginNavbar1;

