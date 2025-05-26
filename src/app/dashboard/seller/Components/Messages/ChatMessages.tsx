// components/Messages/ChatMessages.tsx
export default function ChatMessages() {
        const messages = [
          { from: "user", text: "Hi! Thanks for taking the time to chat..." },
          { from: "you", text: "Of course! I'd love to help..." },
          { from: "user", text: "Hi! Thanks for taking the time..." },
          { from: "you", text: "Of course! I'd love to help..." },
        ];
      
        return (
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[75%] px-4 py-2 rounded-full text-sm ${
                  msg.from === "you"
                    ? "ml-auto bg-[#1f1f1f] text-white"
                    : "mr-auto bg-[#111] text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        );
      }
      