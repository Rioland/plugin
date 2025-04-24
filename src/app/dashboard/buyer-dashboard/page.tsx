'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-10 py-6 space-y-10">
      {/* Banner */}
      <div className="bg-[#FDC800] text-black rounded-2xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-center">
        <div className="space-y-2 md:max-w-lg">
          <h2 className="text-xl md:text-2xl font-semibold">Level up your brand with seamless, on-demand design help.</h2>
          <p className="text-sm md:text-base">Hire with ease, manage payments smoothly, and stay on top of every project.</p>
          <Button className="mt-4 bg-black text-white hover:bg-gray-800">Get Started</Button>
        </div>
        <div className="mt-6 md:mt-0">
          <Image src="/rocket.png" alt="Rocket" width={160} height={160} />
        </div>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Welcome back!</h2>
          <Button className="bg-[#FDC800] text-black hover:bg-[#e2b900]">Post a Job</Button>
        </div>

        <div className="space-y-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-[#111] p-4 rounded-xl flex justify-between items-center text-sm">
              <div className="flex items-center gap-3">
                <div className="bg-white rounded-full p-2">
                  <Image src="/plugin-icon.svg" alt="Icon" width={20} height={20} />
                </div>
                <div>
                  <p className="font-medium">UI/UX Designer</p>
                  <p className="text-[#FDC800] text-xs">{i === 0 ? 'Job posted' : 'Draft job post'}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                {i === 0 ? (
                  <Button variant="outline" className="border border-[#FDC800] text-[#FDC800]">Bids (1)</Button>
                ) : (
                  <Button className="bg-[#FDC800] text-black hover:bg-[#e2b900]">Fill in draft</Button>
                )}
                <div className="text-white text-xl">...</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expert cards */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Review your project’s goals with an expert, one-on-one</h2>
          <a href="#" className="text-[#FDC800] text-sm">Browse consultation →</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-[#111] rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/avatar.jpg"
                  alt="David S."
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">David S.</p>
                  <p className="text-xs text-gray-400">Lagos, Nigeria</p>
                </div>
              </div>
              <div className="text-sm space-y-1">
                <p>99% Job Success</p>
                <p>5000+ ratings</p>
                <p>539 Total jobs</p>
              </div>
              <div className="text-sm font-medium">
                <p>Reliable UI/UX Designer and Web Development</p>
                <p className="text-xs text-gray-400 mt-2">I am truly passionate about what I do, and I want my designs to represent your business...</p>
              </div>
              <div className="text-sm text-gray-400">Fixed: ₦250,000</div>
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-black">
                Book Consultation
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
