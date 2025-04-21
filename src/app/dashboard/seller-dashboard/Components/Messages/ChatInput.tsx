// components/Messages/ChatInput.tsx
import { Paperclip } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="flex items-center gap-4 p-4 border-t border-[#1f1f1f]">
      <Paperclip className="text-white" />
      <input
        placeholder="Click here to chat"
        className="flex-1 bg-[#1f1f1f] text-white px-4 py-2 rounded-full text-sm border-none outline-none"
      />
    </div>
  );
}
