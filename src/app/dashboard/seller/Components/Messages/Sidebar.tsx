// components/Messages/Sidebar.tsx
'use client'
import { Input } from "@/components/ui/input";
import { SlidersHorizontal } from "lucide-react";

const dummyContacts = Array(6).fill({
  name: "Wade Warren",
  message: "I can pay $665",
  avatar: "/images/avatar.jpg",
});

export default function Sidebar() {
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 border-r border-[#1f1f1f] bg-[#0f0f0f] h-full flex flex-col">
      <div className="p-4 text-xl font-bold">Messages</div>
      <div className="flex items-center gap-2 px-4 pb-4">
        <Input placeholder="Search" className="bg-[#1f1f1f] text-white text-sm" />
        <SlidersHorizontal size={20} />
      </div>
      <div className="flex-1 overflow-y-auto px-4 space-y-4 pb-4">
        {dummyContacts.map((contact, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={contact.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
              <div className="text-sm">
                <p className="font-medium">{contact.name}</p>
                <p className="text-xs text-gray-400">{contact.message}</p>
              </div>
            </div>
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
