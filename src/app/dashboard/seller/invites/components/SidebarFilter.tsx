'use client';

import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function SidebarFilter() {
  return (
    <div className="bg-[#0f0f0f] p-4 rounded-lg border border-[#1f1f1f]">
           <div className="mb-3">
            {/* <p className="text-lg text-gray-400 mb-1">Welcome back, David</p> */}
            <div className="text-yellow-400 font-semibold py-3 px-5 border border-gray-700 p-6 rounded-xl  flex flex-row gap-3 text-lg"> <img src="/images/logo-single-yellow.png" />  <span className="font-bold"> Plugs:</span> <span className="text-white">275</span></div>
          </div>
      <div className="text-sm mb-4">
        <p className="mb-1">Category</p>
        <Select>
          <SelectTrigger className="w-full bg-[#1a1a1a] border border-[#333] text-white text-xs">
            <SelectValue placeholder="Product Design" />
          </SelectTrigger>
          <SelectContent className="bg-[#1a1a1a] text-white border border-[#333]">
            <SelectItem value="product-design">Product Design</SelectItem>
            <SelectItem value="graphic-design">Graphic Design</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="text-sm mb-4">
        <p className="mb-1">Location</p>
        <Select>
          <SelectTrigger className="w-full bg-[#1a1a1a] border border-[#333] text-white text-xs">
            <SelectValue placeholder="Lagos" />
          </SelectTrigger>
          <SelectContent className="bg-[#1a1a1a] text-white border border-[#333]">
            <SelectItem value="lagos">Lagos</SelectItem>
            <SelectItem value="abuja">Abuja</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <p className="mb-2 text-sm">Budget</p>
        <div className="flex flex-col gap-2 text-sm">
          {[
            "Less than ₦100,000",
            "₦100,000 - ₦250,000",
            "₦250,000 - ₦500,000",
            "₦500,000 - ₦1,000,000",
            "₦1,000,000 and above",
          ].map((label, idx) => (
            <label key={idx} className="flex items-center gap-2">
              <Checkbox id={`budget-${idx}`} />
              <span>{label}</span>
            </label>
          ))}
        </div>

        <div className="flex gap-2 mt-2">
          <input
            placeholder="Min"
            className="w-1/2 px-2 py-1 rounded bg-[#1f1f1f] text-white text-xs"
          />
          <input
            placeholder="Max"
            className="w-1/2 px-2 py-1 rounded bg-[#1f1f1f] text-white text-xs"
          />
        </div>
      </div>
    </div>
  );
}
