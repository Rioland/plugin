import Image from "next/image";
import { useState } from "react";

const ChatUI = () => {
  const [messages, setMessages] = useState([
    {
      from: "Albert Flores",
      time: "35 mins",
      text: "How likely are you to recommend our company to your friends and family?",
      direction: "inbound",
    },
    {
      from: "You",
      time: "35 mins",
      text: "Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.",
      direction: "outbound",
    },
    {
      from: "Albert Flores",
      time: "35 mins",
      text: "Ok, Understood!",
      direction: "inbound",
    },
  ]);

  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages([...messages, { from: "You", time: "now", text: message, direction: "outbound" }]);
    setMessage("");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 border-r bg-white p-4 overflow-y-auto">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border rounded mb-4"
        />
        <div className="space-y-4">
          {["Darlene Robertson", "Jane Cooper", "Arlene McCoy", "Albert Flores", "Cameron Williamson", "Kristin Watson"].map(
            (name, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300" />
                  <div>
                    <p className="font-semibold text-sm">{name}</p>
                    <p className="text-xs text-gray-500">Head of Development</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">35 mins</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Chat window */}
      <div className="flex-1 flex flex-col">
        <div className="border-b p-4 flex items-center justify-between bg-white">
          <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <div>
            <p className="font-semibold">Arlene McCoy</p>
            <p className="text-sm text-green-500">Active</p>
          </div>
          </div>
          <button className="text-red-500 text-sm">Delete Conversation</button>
        </div>

        {/* Chat body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.direction === "outbound" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-xs p-3 rounded-lg ${msg.direction === "outbound" ? "bg-green-100 text-green-700" : "bg-gray-100"}`}>
                <p className="text-sm">{msg.text}</p>
                <p className="text-xs text-right mt-1 text-gray-400">{msg.time} {msg.direction === "outbound" && "You"}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chat input */}
        <div className="p-4 bg-white border-t flex items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a Message"
            className="flex-1 p-2 border rounded mr-2"
          />
          <button
            onClick={sendMessage}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Send Message ↗
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;