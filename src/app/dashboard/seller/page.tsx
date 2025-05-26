// // components/Navbar.tsx
// 'use client';

// import { Input } from '@/components/ui/input';
// import { Bell, Settings } from 'lucide-react';
// import Image from 'next/image';

// export  function Navbar() {
//   // !profile.kycverifications || profile.kycverifications.length==0
//   return (
//     <header className="bg-black text-white px-6 py-4 flex items-center justify-between shadow-md">
//       <div className="flex items-center space-x-10">
//         <div className="flex items-center space-x-2">
//           <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-black font-bold">
//             <span>🟨</span>
//           </div>
//           <span className="text-2xl font-semibold">Plugin</span>
//         </div>

//         <nav className="hidden md:flex space-x-6 text-sm font-medium">
//           <a href="#" className="hover:text-yellow-400">Find Jobs</a>
//           <a href="#" className="hover:text-yellow-400">Deliver Jobs</a>
//           <a href="#" className="hover:text-yellow-400">Wallet</a>
//           <a href="#" className="hover:text-yellow-400">Messages</a>
//         </nav>
//       </div>

//       <div className="flex items-center space-x-4">
//         <Input
//           type="text"
//           placeholder="Search..."
//           className="bg-[#1a1a1a] border border-gray-700 text-sm text-white placeholder-gray-400 px-3 py-2 w-56"
//         />
//         <Bell className="text-white w-5 h-5" />
//         <Settings className="text-white w-5 h-5" />
//         <Image
//           src="/avatar.png"
//           alt="User Avatar"
//           width={32}
//           height={32}
//           className="rounded-full"
//         />
//       </div>
//     </header>
//   );
// }
// // components/Hero.tsx
// export  function HeroBanner() {
//   return (
//     <div className="bg-yellow-400 p-6 rounded-lg mx-6 mt-6 text-black flex justify-between items-center">
//       <div>
//         <h2 className="text-xl font-bold mb-2">Boost your freelance business effortlessly</h2>
//         <p>Seamless hiring, faster payments, and more control—all in one plugin!</p>
//         <button className="mt-4 px-4 py-2 bg-black text-white rounded-md font-semibold">
//           Get Started
//         </button>
//       </div>
//       <div>
//         <img src="/rocket.png" alt="Rocket" className="h-24" />
//       </div>
//     </div>
//   );
// }


// // components/JobList.tsx
// export  function JobList() {
//   return (
//     <section className="flex-1 mx-6 mt-6 bg-black text-white">
//       <h2 className="text-lg font-semibold mb-4">Jobs you might like</h2>
//       <div className="flex space-x-4 mb-6">
//         <button className="border border-yellow-400 text-yellow-400 px-4 py-2 rounded-full">Best Matches</button>
//         <button className="border border-gray-700 px-4 py-2 rounded-full text-white">Saved Jobs</button>
//       </div>

//       <div className="bg-[#1a1a1a] rounded-lg p-4">
//         <h3 className="text-white font-semibold">UI/UX Designer Needed for Fintech Company</h3>
//         <p className="text-sm text-gray-400 mb-2">Posted 2hrs ago</p>
//         <p className="text-sm text-gray-300">Create user-friendly interfaces that enhance usability...</p>

//         <div className="flex mt-4 space-x-2">
//           <button className="text-sm px-4 py-2 border border-yellow-400 rounded text-yellow-400">Save Job</button>
//           <button className="text-sm px-4 py-2 bg-yellow-400 text-black rounded">Apply for 10 Plugs</button>
//         </div>
//       </div>
//     </section>
//   );
// }



// // components/Sidebar.tsx
// export  function Sidebar() {
//   return (
//     <aside className="w-72 p-4 text-white">
//       <div className="mb-6">
//         <h4 className="font-semibold text-lg mb-1">Welcome back, David</h4>
//         <div className="text-sm text-gray-400">Plugs: <span className="font-bold text-yellow-400">275</span></div>
//       </div>

//       <div className="mb-6 bg-[#1a1a1a] p-4 rounded-lg">
//         <h5 className="font-semibold mb-2">Proposals and offers</h5>
//         <p className="text-sm text-gray-300">Contract Offers: 2</p>
//         <p className="text-sm text-gray-300">Proposals: 2</p>
//       </div>

//       <div className="mb-6 bg-[#1a1a1a] p-4 rounded-lg">
//         <h5 className="font-semibold mb-1">Profile Completion</h5>
//         <div className="h-1 bg-gray-700 w-full rounded overflow-hidden">
//           <div className="bg-yellow-400 h-1 w-[70%]"></div>
//         </div>
//         <p className="text-sm text-gray-400 mt-2">70% complete</p>
//       </div>

//       <div className="bg-[#1a1a1a] p-4 rounded-lg">
//         <h5 className="font-semibold mb-2">Share your Vendor Link</h5>
//         <button className="text-yellow-400 border border-yellow-400 px-3 py-1 rounded">Copy Link</button>
//       </div>
//     </aside>
//   );
// }





// export default function Dashboard() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navbar />
//       <HeroBanner />
//       <main className="flex flex-col lg:flex-row">
//         <JobList />
//         <Sidebar />
//       </main>
//     </div>
//   );
// }



'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import Image from 'next/image';

import PluginNavbar from './Components/NavBar';



export default function DashboardPage() {
 
  return (
    <PluginNavbar >
      <div className="flex-grow flex items-center justify-center p-6">
        <Card className="bg-black border border-gray-800 max-w-lg w-full text-center">
          <CardContent className="p-6 flex flex-col items-center">
            <Image
              src="/images/designer-working.png"
              alt="Illustration"
              width={300}
              height={300}
            />
            <h2 className="text-lg font-bold mt-6 text-white">Welcome to your dashboard, Bola</h2>
            <p className="text-gray-400 mt-2 text-sm">
              You’re all set to start managing your business on Plugin. Explore your dashboard to track orders, update products, and grow your sales!
            </p>
            <Button className="mt-6 bg-yellow-500 text-black hover:bg-yellow-600" onClick={() => { window.location.href = '/dashboard/seller/choose-category' }}>
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>

    </PluginNavbar>

  );
}

