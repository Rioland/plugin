'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Menu, X } from "lucide-react";

export default function JobDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800 relative">
        <div className="flex items-center gap-2">
          <Image src="/images/Logo-yellow.png" alt="Plugin Logo" width={100} height={100} />
          {/* <span className="text-lg font-semibold">Plugin</span> */}
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <div className="cursor-pointer">Find Jobs ▾</div>
          <div className="cursor-pointer">Deliver Jobs ▾</div>
          <div className="cursor-pointer">Wallet</div>
          <div className="cursor-pointer">Messages</div>
        </nav>

        <div className="flex items-center gap-4">
          <Input placeholder="Search..." className="bg-[#1f1f1f] border-none text-white placeholder:text-gray-400 hidden md:block" />
          <div className="w-8 h-8 rounded-full bg-gray-600 hidden md:block" />
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
            <div className="cursor-pointer">Find Jobs ▾</div>
            <div className="cursor-pointer">Deliver Jobs ▾</div>
            <div className="cursor-pointer">Wallet</div>
            <div className="cursor-pointer">Messages</div>
          </div>
        )}
      </header>

      <main className="px-4 md:px-10 py-6 grid md:grid-cols-3 gap-6">
        <section className="md:col-span-2">
          <div className="bg-yellow-400 text-black rounded-xl p-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold mb-1">Boost your freelance business effortlessly</h2>
              <p className="text-sm">Seamless hiring, faster payments, and more control—all in one plugin!</p>
              <Button className="mt-4 bg-black text-white hover:bg-gray-900">Get Started</Button>
            </div>
            <Image src="/images/rocket.png" alt="Rocket" width={120} height={120} className="hidden md:block" />
          </div>

          <Input
            placeholder="Search for jobs"
            className="mt-6 bg-[#1f1f1f] placeholder:text-gray-400 border-none w-full"
          />

          <div className="mt-6 bg-[#111] rounded-xl p-4">
            <h3 className="text-lg font-semibold">Jobs you might like</h3>
            <div className="mt-4 flex gap-4">
              <Button variant="secondary" className="bg-yellow-400 text-black">Best Matches</Button>
              <Button variant="ghost" className="text-white border border-gray-700">Saved Jobs</Button>
            </div>

            <div className="grid md:grid-cols-2 mt-6 gap-4">
              <ScrollArea className="h-[400px] bg-[#1a1a1a] rounded-lg p-4 space-y-4">
                <div className="border border-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold">UI/UX Designer Needed for Fintech Company</h4>
                  <div className="text-sm text-gray-400 mt-2">
                    <p>💰 Fixed: ₦250,000</p>
                    <p>📍 Lagos, Nigeria (Remote)</p>
                    <p>🕒 1 month</p>
                    <div className="flex gap-2 mt-2 text-xs">
                      <span className="bg-[#333] px-2 py-1 rounded">UX</span>
                      <span className="bg-[#333] px-2 py-1 rounded">Graphics</span>
                      <span className="bg-[#333] px-2 py-1 rounded">Web Design</span>
                    </div>
                    <p className="text-xs mt-2">Posted 2hrs ago</p>
                  </div>
                </div>
              </ScrollArea>

              <div className="bg-[#1a1a1a] rounded-lg p-6 h-[400px] overflow-auto">
                <h4 className="text-lg font-semibold mb-2">UI/UX Designer Needed for Fintech Company</h4>
                <p className="text-sm text-gray-400 mb-2">Posted 2hrs ago</p>
                <p className="text-sm mb-4">
                  We’re looking for a talented UI/UX Designer to join our team. You’ll be responsible
                  for designing intuitive and visually appealing user experiences for web and mobile applications.
                </p>
                <h5 className="font-semibold mb-2">Key Responsibilities</h5>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Create user-friendly interfaces that enhance usability and engagement.</li>
                  <li>Conduct user research and analyze feedback to improve designs.</li>
                  <li>Develop wireframes, prototypes, and high-fidelity designs.</li>
                  <li>Collaborate with developers to ensure seamless implementation.</li>
                </ul>
                <h5 className="font-semibold mt-4 mb-2">Requirements:</h5>
                <ul className="list-disc pl-6 text-sm space-y-1">
                  <li>Experience in UI/UX design, preferably in web or mobile applications.</li>
                  <li>Strong understanding of user-centered design principles.</li>
                </ul>
                <div className="flex justify-between mt-4">
                  <Button variant="ghost" className="text-yellow-400">Save Job</Button>
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-300">Apply for 10 Plugs</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="bg-[#111] p-4 rounded-xl space-y-6 h-fit">
          <div>
            <p className="text-sm text-gray-400">Welcome back, David</p>
            <p className="text-yellow-400 font-semibold">Plugs: <span className="text-white">275</span></p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Proposals and offers</h4>
            <div className="text-sm text-gray-300">
              <p>Contract Offers <span className="float-right">2</span></p>
              <p>Proposals <span className="float-right">2</span></p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Profile Completion</h4>
            <div className="text-sm text-gray-300">Profile Visibility <span className="float-right">Public</span></div>
            <div className="w-full h-1 bg-gray-700 mt-1 rounded">
              <div className="w-[70%] h-1 bg-yellow-400 rounded" />
            </div>
            <p className="text-xs text-yellow-400 mt-1 cursor-pointer">Complete your profile</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Share your Vendor Link</h4>
            <p className="text-xs text-gray-400">Share your vendor link and grow your business</p>
            <p className="text-sm mt-1 text-yellow-400 cursor-pointer">Copy Link</p>
          </div>
        </aside>
      </main>
    </div>
  );
}



        //   {/* Category Section */}
        //   <section className="mt-10">
        //     <h3 className="text-lg font-semibold mb-4">Choose a category to get started</h3>
        //     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        //       {[
        //         { name: "Graphics Design", color: "bg-[#1a1a1a]" },
        //         { name: "Web Development", color: "bg-[#1a1a1a]" },
        //         { name: "Mobile App", color: "bg-[#1a1a1a]" },
        //         { name: "Marketing", color: "bg-[#1a1a1a]" },
        //       ].map((cat, index) => (
        //         <div
        //           key={index}
        //           className={`${cat.color} hover:bg-[#222] p-4 rounded-lg cursor-pointer transition duration-300`}
        //         >
        //           <h4 className="font-semibold text-white text-sm">{cat.name}</h4>
        //           <p className="text-xs text-gray-400 mt-1">Explore jobs in {cat.name}</p>
        //         </div>
        //       ))}
        //     </div>
        //   </section>
