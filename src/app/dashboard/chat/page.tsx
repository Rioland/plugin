"use client"

import { useState } from "react"
import {
  Search,
  Bell,
  MessageCircle,
  Send,
  Users,
  Briefcase,
  Wallet,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
  Phone,
  Copy,
  Smile,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedChat, setSelectedChat] = useState(0)
  const [showPhonePopup, setShowPhonePopup] = useState(false)

  const chatList = Array(8).fill({
    phone: "(+234) 7038-993-3992",
    message: "I have issues making payment",
    time: "15:30",
    unread: true,
  })

  return (
    <div className="min-h-screen bg-[#0e0f0f] text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 lg:px-6 py-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="w-5 h-5" />
          </Button>
          <div className="w-6 h-6 lg:w-8 lg:h-8 bg-[#e3a325] rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 lg:w-5 lg:h-5 bg-[#e3a325] rounded-sm relative">
              <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute bottom-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-white rounded-full"></div>
            </div>
          </div>
          <span className="text-white text-lg lg:text-xl font-bold">Plugin</span>
        </div>

        <div className="flex-1 max-w-md mx-4 lg:mx-8 hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search..."
              className="bg-[#1b1c23] border-gray-700 text-white placeholder:text-gray-400 pl-10 rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          <Button variant="ghost" size="icon" className="sm:hidden">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </Button>
        </div>
      </header>

      <div className="flex relative">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed lg:relative lg:translate-x-0 w-64 min-h-screen bg-[#0e0f0f] border-r border-gray-800 p-4 lg:p-6 z-50 transition-transform duration-300 ease-in-out`}
        >
          <div className="flex items-center justify-between lg:hidden mb-6">
            <span className="text-lg font-semibold">Menu</span>
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* User Profile */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="User avatar"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm lg:text-base">Hi, Tobi</h3>
                <p className="text-xs lg:text-sm text-gray-400">toby1e4@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <a
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 text-sm lg:text-base"
            >
              <div className="w-5 h-5 bg-gray-600 rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-400 rounded"></div>
              </div>
              Dashboard
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 text-sm lg:text-base"
            >
              <Users className="w-5 h-5" />
              Users
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 text-sm lg:text-base"
            >
              <Briefcase className="w-5 h-5" />
              Jobs
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 text-sm lg:text-base"
            >
              <Wallet className="w-5 h-5" />
              Wallet
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e3a325] text-black font-medium text-sm lg:text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Chat
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 text-sm lg:text-base"
            >
              <Settings className="w-5 h-5" />
              Settings
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 text-sm lg:text-base"
            >
              <HelpCircle className="w-5 h-5" />
              Help
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 hover:bg-red-500/10 text-sm lg:text-base"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex h-[calc(100vh-73px)]">
          {/* Chat List */}
          <div className="w-full lg:w-80 border-r border-gray-800 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Support Chats</h2>
                <Badge className="bg-[#e3a325] text-black">Closed</Badge>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search"
                  className="bg-[#1b1c23] border-gray-700 text-white placeholder:text-gray-400 pl-10"
                />
              </div>
            </div>

            {/* Chat List Items */}
            <div className="flex-1 overflow-y-auto">
              {chatList.map((chat, index) => (
                <div
                  key={index}
                  className={`p-4 border-b border-gray-800 cursor-pointer hover:bg-gray-800/50 ${
                    selectedChat === index ? "bg-gray-800/50" : ""
                  }`}
                  onClick={() => setSelectedChat(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#e3a325] rounded-full"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{chat.phone}</span>
                        <span className="text-xs text-gray-400">{chat.time}</span>
                      </div>
                      <p className="text-sm text-gray-400 truncate">{chat.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col hidden lg:flex">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg font-medium">(+234) 7038-993-3992</span>
              </div>
              <Button variant="ghost" size="icon">
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#e3a325] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-black" />
                </div>
                <p className="text-gray-400 mb-2">No messages yet</p>
                <p className="text-sm text-gray-500">Start a conversation with the customer</p>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-800">
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <Input
                    placeholder="Click here to chat"
                    className="bg-[#57585f] border-0 text-white placeholder:text-white/60 rounded-full pr-12"
                  />
                  <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <Smile className="w-5 h-5 text-gray-400" />
                  </Button>
                </div>
                <Button className="bg-[#e3a325] hover:bg-[#e0c224] text-black rounded-full p-3">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* User Info Panel */}
          <div className="w-80 border-l border-gray-800 p-4 hidden xl:block">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="User avatar"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-lg font-medium">Buyer</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-500">Verified</span>
                </div>
              </div>
              <Button variant="ghost" className="text-[#e3a325]">
                <Smile className="w-4 h-4" />
              </Button>
            </div>

            {/* Phone Number */}
            <div className="relative">
              <Button
                className="w-full bg-black text-white hover:bg-gray-900 rounded-lg p-3 flex items-center justify-between"
                onClick={() => setShowPhonePopup(!showPhonePopup)}
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>08079782020</span>
                </div>
                <Copy className="w-4 h-4" />
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 space-y-4">
              <div className="text-right">
                <p className="text-sm text-gray-400">ID: 9270392023</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">ACCESS BANK</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
