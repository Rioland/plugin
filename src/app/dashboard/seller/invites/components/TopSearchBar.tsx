// components/TopSearchBar.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Search } from "lucide-react";

export default function TopSearchBar() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      <div className="flex flex-1 items-center bg-[#0f0f0f] rounded-lg px-4 py-2 border border-[#1f1f1f]">
        <Search className="text-white mr-2 w-4 h-4" />
        <Input
          type="text"
          placeholder="UI/UX designer"
          className="bg-transparent border-none outline-none text-white"
        />
      </div>
      <Button variant="ghost">
        <SlidersHorizontal className="w-5 h-5" />
      </Button>
    </div>
  );
}
