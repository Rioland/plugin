// components/Messages/ChatHeader.tsx
import { PhoneCall } from "lucide-react";

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-[#1f1f1f]">
      <div className="flex items-center gap-3">
        <img src="/images/avatar.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
        <div className="text-sm">
          <p className="font-medium text-white">Wade Warren</p>
        </div>
      </div>
      <PhoneCall className="text-yellow-400" />
    </div>
  );
}
