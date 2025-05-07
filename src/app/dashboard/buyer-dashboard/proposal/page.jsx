import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Star } from "lucide-react"

export default function ViewProposalPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-10 py-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">View proposal</h1>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Input placeholder="Search..." className="bg-zinc-900 border border-zinc-700 text-white" />
          <button className="bg-zinc-800 border border-zinc-700 p-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9m-9 6h9m-9 6h9m-12-6h.008v.008H7.5V12zm0 6h.008v.008H7.5V18zm0-12h.008v.008H7.5V6z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {Array(5).fill(0).map((_, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row justify-between gap-4 border-b border-zinc-800 pb-4"
          >
            <div>
              <h2 className="text-lg font-medium">UI/UX Designer Needed for Fintech Company</h2>
              <p className="text-sm text-zinc-400 mt-1">Mar 12 - Apr 12</p>
            </div>
            <div className="flex flex-col md:items-end gap-2 text-right">
              <button className="text-yellow-500 font-medium hover:underline">View details</button>
              <div className="flex items-center justify-end gap-2 text-sm text-white">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75V6A2.25 2.25 0 0015 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25h9A2.25 2.25 0 0017.25 18v-.75M17.25 12l3 3m0 0l-3 3m3-3H9" />
                  </svg>
                  ₦250,000
                </div>
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  30 days
                </div>
              </div>
              <div className="flex items-center justify-end gap-1 text-yellow-500">
                {[1, 2, 3, 4].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-500 stroke-yellow-500" />
                ))}
                <Star className="w-4 h-4 stroke-yellow-500" />
                <span className="ml-1 text-sm text-white">4.0</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
