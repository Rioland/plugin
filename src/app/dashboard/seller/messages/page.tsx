
'use client'

import ChatHeader from "../Components/Messages/ChatHeader";
import ChatInput from "../Components/Messages/ChatInput";
import ChatMessages from "../Components/Messages/ChatMessages";
import Sidebar from "../Components/Messages/Sidebar";
import PluginNavbar from "../Components/NavBar";

// import { Input } from "@/components/ui/input";
// import { MoreVertical, Search, } from "lucide-react";
// import PluginNavbar from "../Components/NavBar";


// export default function MessagesPage() {
//   return (
//     <PluginNavbar  >

// <div className="min-h-screen bg-black text-white flex">
//       {/* Sidebar */}
//       <aside className="w-80 bg-[#0e0e0e] border-r border-yellow-600 p-4 flex flex-col">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Messages</h2>
//           <MoreVertical className="w-5 h-5 text-white" />
//         </div>
//         <div className="relative mb-4">
//           <Input
//             placeholder="Search"
//             className="bg-[#1a1a1a] text-sm text-white placeholder-gray-400 pl-10"
//           />
//           <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
//         </div>
//         <div className="flex flex-col gap-3 overflow-y-auto">
//           {Array.from({ length: 6 }).map((_, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-3 p-2 hover:bg-[#1f1f1f] cursor-pointer rounded"
//             >
//               <img
//                 src="/avatar.png"
//                 alt="Avatar"
//                 width={40}
//                 height={40}
//                 className="rounded-full"
//               />
//               <div className="flex-1">
//                 <p className="text-sm font-medium">Wade Warren</p>
//                 <p className="text-xs text-gray-400">I can pay $665</p>
//               </div>
//               <div className="w-2 h-2 rounded-full bg-yellow-400" />
//             </div>
//           ))}
//         </div>
//       </aside>

//       {/* Chat Area */}
//       <main className="flex-1 flex flex-col">
//         <div className="flex items-center justify-between px-6 py-4 border-b border-yellow-600">
//           <h3 className="text-lg font-semibold">Wade Warren</h3>
//           <MoreVertical className="w-5 h-5 text-white" />
//         </div>

//         <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto">
//           {/* Incoming message */}
//           <div className="flex items-start gap-3">
//             <img
//               src="/avatar.png"
//               alt="User"
//               width={32}
//               height={32}
//               className="rounded-full"
//             />
//             <div className="bg-[#1f1f1f] text-sm px-4 py-3 rounded-3xl max-w-xl">
//               Hi! Thanks for taking the time to chat. I need help designing an app interface,
//               but I&apos;m not sure where to start.
//             </div>
//           </div>

//           {/* Outgoing message */}
//           <div className="flex items-end gap-3 self-end">
//             <div className="bg-[#1f1f1f] text-sm px-4 py-3 rounded-3xl max-w-xl">
//               Of course! I&apos;d love to help. Can you tell me a bit about your app? What&apos;s its main purpose?
//             </div>
//             <img
//               src="/avatar.png"
//               alt="You"
//               width={32}
//               height={32}
//               className="rounded-full"
//             />
//           </div>
//         </div>

//         <div className="p-4">
//           <div className="bg-[#1a1a1a] text-sm text-gray-400 rounded-full px-6 py-3 w-full">
//             Click here to chat
//           </div>
//         </div>
//       </main>
//     </div>
//     </PluginNavbar>
//   );
// }



// // import { useState } from 'react';

// // import { Button } from '@/components/ui/button';
// // import { ScrollArea } from '@/components/ui/scroll-area';
// // import PluginNavbar from "../Components/NavBar";

// // type Message = {
// //   id: number;
// //   sender: 'user' | 'other';
// //   content: string;
// // };

// // export default function MessagesPage() {
// //   const [messages, setMessages] = useState<Message[]>([
// //     { id: 1, sender: 'other', content: 'Hi, I’m interested in your service!' },
// //     { id: 2, sender: 'user', content: 'Thanks! How can I help you today?' },
// //     { id: 3, sender: 'other', content: 'Can we schedule a quick call?' },
// //   ]);

// //   const [newMessage, setNewMessage] = useState('');

// //   const handleSend = () => {
// //     if (newMessage.trim()) {
// //       setMessages([...messages, { id: messages.length + 1, sender: 'user', content: newMessage }]);
// //       setNewMessage('');
// //     }
// //   };

// //   return (
// //     <PluginNavbar  >
// //     <div className="flex flex-col h-screen">
// //       {/* Messages List */}
// //       <ScrollArea className="h-10/12 overflow-y-auto px-4 py-6 space-y-4 bg-[#0f0f0f]">
// //         {messages.map((msg) => (
// //           <div
// //             key={msg.id}
// //             className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-lg text-sm my-4 ${
// //               msg.sender === 'user'
// //                 ? 'ml-auto bg-yellow-500 text-black'
// //                 : 'mr-auto bg-[#1E1E1E] text-white'
// //             }`}
// //           >
// //             {msg.content}
// //           </div>
// //         ))}
// //       </ScrollArea>

// //       {/* Message Input */}
// //       <div className="border-t border-gray-800 p-4 bg-[#0f0f0f] flex items-center gap-2">
// //         <Input
// //           className="flex-1 bg-[#1E1E1E] text-white placeholder-gray-400 border-gray-700"
// //           placeholder="Type your message..."
// //           value={newMessage}
// //           onChange={(e) => setNewMessage(e.target.value)}
// //           onKeyDown={(e) => {
// //             if (e.key === 'Enter') handleSend();
// //           }}
// //         />
// //         <Button className="bg-yellow-500 text-black hover:bg-yellow-600" onClick={handleSend}>
// //           Send
// //         </Button>
// //       </div>
// //     </div>
// //     </PluginNavbar>
// //   );
// // }


// app/messages/page.tsx


export default function MessagesPage() {
  return (
    <PluginNavbar>
    <div className="h-screen flex flex-col md:flex-row bg-black text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <ChatHeader />
        <ChatMessages />
        <ChatInput />
      </div>
    </div>
    </PluginNavbar>
  );
}
