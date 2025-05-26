// 'use client'
// import Image from "next/image"
// import { Button } from "@/components/ui/button"

// export default function DashboardPage() {
//   return (
//     <div className="min-h-screen bg-black text-white px-4 md:px-10 py-6 space-y-10">
//       {/* Banner */}
//       <div className="bg-[#FDC800] text-black rounded-2xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center">
//         <div className="space-y-2 md:max-w-lg">
//           <h2 className="text-xl md:text-2xl font-semibold">Level up your brand with seamless, on-demand design help.</h2>
//           <p className="text-sm md:text-base">Hire with ease, manage payments smoothly, and stay on top of every project.</p>
//           <Button className="mt-4 bg-black text-white hover:bg-gray-800">Get Started</Button>
//         </div>
//         <div className="mt-6 md:mt-0">
//           <Image src="/rocket.png" alt="Rocket" width={160} height={160} />
//         </div>
//       </div>

//       {/* Overview */}
//       <section className="space-y-6">
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-semibold">Welcome back!</h2>
//           <Button className="bg-[#FDC800] text-black hover:bg-[#e2b900]">Post a Job</Button>
//         </div>

//         <div className="space-y-4">
//           {[1, 2, 3].map((_, i) => (
//             <div key={i} className="bg-[#111] p-4 rounded-xl flex justify-between items-center text-sm">
//               <div className="flex items-center gap-3">
//                 <div className="bg-white rounded-full p-2">
//                   <Image src="/plugin-icon.svg" alt="Icon" width={20} height={20} />
//                 </div>
//                 <div>
//                   <p className="font-medium">UI/UX Designer</p>
//                   <p className="text-[#FDC800] text-xs">{i === 0 ? 'Job posted' : 'Draft job post'}</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 {i === 0 ? (
//                   <Button variant="outline" className="border border-[#FDC800] text-[#FDC800]">Bids (1)</Button>
//                 ) : (
//                   <Button className="bg-[#FDC800] text-black hover:bg-[#e2b900]">Fill in draft</Button>
//                 )}
//                 <div className="text-white text-xl">...</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Expert cards */}
//       <section className="space-y-4">
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-semibold">Review your project’s goals with an expert, one-on-one</h2>
//           <a href="#" className="text-[#FDC800] text-sm">Browse consultation →</a>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {[1, 2, 3].map((_, i) => (
//             <div key={i} className="bg-[#111] rounded-2xl p-6 space-y-4">
//               <div className="flex items-center gap-4">
//                 <Image
//                   src="/avatar.jpg"
//                   alt="David S."
//                   width={48}
//                   height={48}
//                   className="rounded-full"
//                 />
//                 <div>
//                   <p className="font-semibold">David S.</p>
//                   <p className="text-xs text-gray-400">Lagos, Nigeria</p>
//                 </div>
//               </div>
//               <div className="text-sm space-y-1">
//                 <p>99% Job Success</p>
//                 <p>5000+ ratings</p>
//                 <p>539 Total jobs</p>
//               </div>
//               <div className="text-sm font-medium">
//                 <p>Reliable UI/UX Designer and Web Development</p>
//                 <p className="text-xs text-gray-400 mt-2">I am truly passionate about what I do, and I want my designs to represent your business...</p>
//               </div>
//               <div className="text-sm text-gray-400">Fixed: ₦250,000</div>
//               <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-black">
//                 Book Consultation
//               </Button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }



import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertCircle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-8 py-6 space-y-6">
      {/* Header Navigation */}
      <header className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Plugin logo" className="h-8" />
          <h1 className="text-xl font-bold">Plugin</h1>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#">Find Talent</a>
          <a href="#">Manage Jobs</a>
          <a href="#">Messages</a>
          <Input placeholder="Search..." className="max-w-xs" />
          <Avatar>
            <AvatarImage src="/profile.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </nav>
      </header>

      {/* Yellow Banner */}
      <section className="bg-[#FFD02F] text-black rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold">Level up your brand with seamless, on-demand design help.</h2>
          <p className="text-lg font-medium">Hire with ease, manage payments smoothly, and stay on top of every project.</p>
          <Button className="bg-black text-white hover:bg-gray-900 mt-4">Get Started</Button>
        </div>
        <img src="/rocket.png" alt="Rocket" className="w-32 md:w-40 mt-6 md:mt-0" />
      </section>

      {/* Overview Section */}
      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Welcome back!</h2>
        <h3 className="text-lg font-medium mb-4">Overview</h3>
        <div className="flex items-center text-sm text-red-500 gap-x-2 mb-4">
          <AlertCircle size={16} /> Kyc verification is in progress
        </div>

        {/* Jobs Cards */}
        <div className="space-y-4">
          {[1, 2, 3].map((_, idx) => (
            <Card key={idx} className="bg-[#1a1a1a] border border-gray-700">
              <CardContent className="flex justify-between items-center py-4 px-6">
                <div>
                  <h4 className="font-medium">UI/UX Designer</h4>
                  <p className="text-xs text-gray-400">
                    {idx === 0 ? 'Job posted • 23 hours ago' : 'Draft job post • Add details to your draft'}
                  </p>
                </div>
                <Button variant="secondary" className="text-black bg-[#FFD02F] hover:bg-yellow-400">
                  {idx === 0 ? 'Bids (4)' : 'Fill in draft'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Select a Category */}
      <section>
        <div className="flex justify-between items-center mt-10 mb-4">
          <h3 className="text-lg font-medium">Select a category</h3>
          <a href="#" className="text-sm text-yellow-400">See more →</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            "Business Registration & Compliance",
            "Branding, Design & Identity",
            "Digital & Creative Economy",
            "Website, App & Software Development",
          ].map((title, idx) => (
            <Card key={idx} className="bg-[#1a1a1a] border border-gray-700">
              <CardContent className="p-2">
                <img
                  src={`/cat${idx + 1}.jpg`}
                  alt={title}
                  className="rounded-md w-full h-28 object-cover"
                />
                <p className="text-sm text-center mt-2 font-medium">{title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experts Section */}
      <section>
        <div className="flex justify-between items-center mt-10 mb-4">
          <h3 className="text-lg font-medium">Review your project’s goals with an expert, one-on-one</h3>
          <a href="#" className="text-sm text-yellow-400">See more →</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((_, idx) => (
            <Card key={idx} className="bg-[#1a1a1a] border border-gray-700 p-4">
              <div className="flex items-center gap-x-4">
                <Avatar>
                  <AvatarImage src="/expert.jpg" />
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">David S.</h4>
                  <p className="text-sm text-gray-400">Lagos, Nigeria</p>
                </div>
              </div>
              <div className="mt-4 space-y-1 text-sm text-gray-300">
                <p>99% Job Success</p>
                <p>5000+ ratings</p>
                <p>539 Total jobs</p>
              </div>
              <p className="mt-2 text-sm text-white line-clamp-4">
                I am truly passionate about what I do, and I want my designs to represent your business, an expert in the field of design. I am truly passionate about what I do, and I want you…
              </p>
              <div className="mt-3 text-sm text-white font-semibold">Fixed: ₦250,000</div>
              <Button variant="outline" className="w-full mt-2 text-white border-white hover:bg-white hover:text-black">
                Book Consultation
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
