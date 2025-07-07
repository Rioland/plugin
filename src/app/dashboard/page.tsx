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
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Menu,
  X,
  Copy,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [jobDialogOpen, setJobDialogOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)
  const [messageDialogOpen, setMessageDialogOpen] = useState(false)
  const [selectedMessageType, setSelectedMessageType] = useState("Push Notifications")
  const [chatDialogOpen, setChatDialogOpen] = useState(false)

  const jobsData = [
    {
      category: "Design",
      type: "Via Invite",
      seller: "Damola Ola",
      buyer: "Tobi Obi",
      amount: "₦123,866",
      duration: "2 months",
      status: "Confirmed",
      date: "10-02-2023 15:19",
    },
    {
      category: "Design",
      type: "Via Invite",
      seller: "Damola Ola",
      buyer: "Tobi Obi",
      amount: "₦123,866",
      duration: "2 months",
      status: "Completed",
      date: "10-02-2023 15:19",
    },
    {
      category: "Design",
      type: "Via Post",
      seller: "Damola Ola",
      buyer: "Tobi Obi",
      amount: "₦123,866",
      duration: "2 months",
      status: "Confirmed",
      date: "10-02-2023 15:19",
    },
    {
      category: "Design",
      type: "Via Invite",
      seller: "Damola Ola",
      buyer: "Tobi Obi",
      amount: "₦123,866",
      duration: "2 months",
      status: "Confirmed",
      date: "10-02-2023 15:19",
    },
    {
      category: "Design",
      type: "Via Invite",
      seller: "Damola Ola",
      buyer: "Tobi Obi",
      amount: "₦123,866",
      duration: "2 months",
      status: "Completed",
      date: "10-02-2023 15:19",
    },
    {
      category: "Design",
      type: "Via Invite",
      seller: "Damola Ola",
      buyer: "Tobi Obi",
      amount: "₦123,866",
      duration: "2 months",
      status: "Completed",
      date: "10-02-2023 15:19",
    },
    {
      category: "Design",
      type: "Via Invite",
      seller: "Damola Ola",
      buyer: "Tobi Obi",
      amount: "₦123,866",
      duration: "2 months",
      status: "Confirmed",
      date: "10-02-2023 15:19",
    },
  ]

  const handleJobClick = (job, index) => {
    const jobDetails = {
      category: job.category,
      title: "Website Design",
      seller: "Olamide Dami",
      buyer: "Tobi Dami",
      orderId: "929295",
      duration: "30 days",
      status: "In Progress",
      time: "30 July 2024, 11:11 AM",
      amount: "NGN 45,800.00",
    }
    setSelectedJob(jobDetails)
    setJobDialogOpen(true)
  }

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
          className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed lg:relative lg:translate-x-0 w-64 min-h-screen bg-[#0e0f0f] border-r border-gray-800 p-4 lg:p-6 z-50 transition-transform duration-300 ease-in-out`}
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
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e3a325] text-black font-medium text-sm lg:text-base"
            >
              <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-[#e3a325] rounded"></div>
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
        <main className="flex-1 p-4 lg:p-6">
          {/* Balance Section */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 lg:mb-8 gap-4">
            <div>
              <p className="text-gray-400 mb-2 text-sm lg:text-base">Total Balance</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 lg:gap-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">₦123,866,987.89</h1>
                <span className="text-gray-400 text-sm">NGN</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-transparent border border-[#e3a325] text-[#e3a325] hover:bg-[#e3a325] hover:text-black rounded-full px-4 lg:px-6 text-sm lg:text-base"
                onClick={() => setChatDialogOpen(true)}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat
                <div className="ml-2 w-5 h-5 bg-[#e3a325] text-black rounded-full flex items-center justify-center text-xs">
                  5
                </div>
              </Button>
              <Button
                className="bg-[#e3a325] text-black hover:bg-[#e0c224] rounded-full px-4 lg:px-6 text-sm lg:text-base"
                onClick={() => setMessageDialogOpen(true)}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </div>
          </div>

          {/* Dashboard Stats */}
          <div className="mb-6 lg:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 lg:mb-6 gap-2">
              <h2 className="text-lg lg:text-xl font-semibold">Dashboard</h2>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                Filter by: All Time
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
              <div className="bg-[#1b1c23] rounded-lg p-4 lg:p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#e3a325] rounded-lg flex items-center justify-center">
                    <Briefcase className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </div>
                <div className="mb-2">
                  <h3 className="text-xl lg:text-2xl font-bold">128,803</h3>
                  <p className="text-gray-400 text-xs lg:text-sm">Total Jobs</p>
                </div>
                <p className="text-green-500 text-xs lg:text-sm">+20 compared to last week</p>
              </div>

              <div className="bg-[#1b1c23] rounded-lg p-4 lg:p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#e3a325] rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </div>
                <div className="mb-2">
                  <h3 className="text-xl lg:text-2xl font-bold">128,803</h3>
                  <p className="text-gray-400 text-xs lg:text-sm">Total Users</p>
                </div>
                <p className="text-green-500 text-xs lg:text-sm">+20 compared to last week</p>
              </div>

              <div className="bg-[#1b1c23] rounded-lg p-4 lg:p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#e3a325] rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-sm lg:text-base">₦</span>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </div>
                <div className="mb-2">
                  <h3 className="text-xl lg:text-2xl font-bold">128,803</h3>
                  <p className="text-gray-400 text-xs lg:text-sm">Total Earnings in ₦</p>
                </div>
                <p className="text-green-500 text-xs lg:text-sm">+20,000 compared to last week</p>
              </div>

              <div className="bg-[#1b1c23] rounded-lg p-4 lg:p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#e3a325] rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-sm lg:text-base">%</span>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </div>
                <div className="mb-2">
                  <h3 className="text-xl lg:text-2xl font-bold">89</h3>
                  <p className="text-gray-400 text-xs lg:text-sm">Completion Rate</p>
                </div>
                <p className="text-green-500 text-xs lg:text-sm">+2% compared to last week</p>
              </div>
            </div>
          </div>

          {/* Recent Jobs Table */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 lg:mb-6 gap-2">
              <h2 className="text-lg lg:text-xl font-semibold">Recent Jobs</h2>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400">Filter by:</span>
                <Button variant="ghost" className="text-sm text-gray-400">
                  Export
                </Button>
              </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block bg-[#1b1c23] rounded-lg border border-gray-800 overflow-hidden">
              <div className="grid grid-cols-8 gap-4 p-4 border-b border-gray-800 text-sm text-gray-400 font-medium">
                <div>Category</div>
                <div>Type</div>
                <div>Seller</div>
                <div>Buyer</div>
                <div>Amount</div>
                <div>Duration</div>
                <div>Status</div>
                <div>Date</div>
              </div>

              {jobsData.map((job, index) => (
                <div
                  key={index}
                  className="grid grid-cols-8 gap-4 p-4 border-b border-gray-800 last:border-b-0 text-sm cursor-pointer hover:bg-gray-800/30"
                  onClick={() => handleJobClick(job, index)}
                >
                  <div>{job.category}</div>
                  <div>{job.type}</div>
                  <div>{job.seller}</div>
                  <div>{job.buyer}</div>
                  <div>{job.amount}</div>
                  <div>{job.duration}</div>
                  <div>
                    <Badge
                      variant={job.status === "Completed" ? "default" : "secondary"}
                      className={job.status === "Completed" ? "bg-green-500 text-white" : "bg-[#e3a325] text-black"}
                    >
                      {job.status}
                    </Badge>
                  </div>
                  <div className="text-gray-400">{job.date}</div>
                </div>
              ))}
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-4">
              {jobsData.map((job, index) => (
                <div
                  key={index}
                  className="bg-[#1b1c23] rounded-lg border border-gray-800 p-4 cursor-pointer hover:bg-gray-800/30"
                  onClick={() => handleJobClick(job, index)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{job.category}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">{job.type}</span>
                    </div>
                    <Badge
                      variant={job.status === "Completed" ? "default" : "secondary"}
                      className={job.status === "Completed" ? "bg-green-500 text-white" : "bg-[#e3a325] text-black"}
                    >
                      {job.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-400">Seller: </span>
                      <span>{job.seller}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Buyer: </span>
                      <span>{job.buyer}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Amount: </span>
                      <span>{job.amount}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Duration: </span>
                      <span>{job.duration}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">{job.date}</div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-6 gap-4">
              <p className="text-sm text-gray-400">1 - 3 of items</p>
              <div className="flex items-center justify-center gap-2">
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button className="w-8 h-8 bg-[#e3a325] text-black hover:bg-[#e0c224]">1</Button>
                <Button variant="ghost" className="w-8 h-8 text-gray-400">
                  2
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              <Button variant="ghost" className="text-sm text-gray-400 hidden sm:flex">
                Expand
                <MoreHorizontal className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
          {/* Job Details Dialog */}
          <Dialog open={jobDialogOpen} onOpenChange={setJobDialogOpen}>
            <DialogContent className="bg-[#1b1c23] border-gray-800 text-white max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#e3a325] rounded-lg flex items-center justify-center">
                    <div className="w-5 h-5 bg-[#e3a325] rounded-sm relative">
                      <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                      <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                      <div className="absolute bottom-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                      <div className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  Job details
                </DialogTitle>
              </DialogHeader>

              {selectedJob && (
                <div className="space-y-6 pt-4">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{selectedJob.category}</p>
                    <h3 className="text-xl font-semibold">{selectedJob.title}</h3>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-1">Seller</p>
                    <p className="text-lg font-semibold">{selectedJob.seller}</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-1">Buyer</p>
                    <p className="text-lg font-semibold">{selectedJob.buyer}</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-1">Order ID</p>
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-semibold">{selectedJob.orderId}</p>
                      <Button variant="ghost" size="icon" className="w-5 h-5">
                        <Copy className="w-4 h-4 text-gray-400" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-1">Duration</p>
                    <p className="text-lg font-semibold">{selectedJob.duration}</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-1">Transaction Status:</p>
                    <p className="text-lg font-semibold text-[#e3a325]">{selectedJob.status}</p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm mb-1">Time</p>
                    <p className="text-lg font-semibold">{selectedJob.time}</p>
                  </div>

                  <div className="border-t border-gray-800 pt-6">
                    <p className="text-gray-400 text-sm mb-1">Amount</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold">{selectedJob.amount}</p>
                      <Button variant="ghost" size="icon" className="w-5 h-5">
                        <Copy className="w-4 h-4 text-gray-400" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
          {/* Send Message Dialog */}
          <Dialog open={messageDialogOpen} onOpenChange={setMessageDialogOpen}>
            <DialogContent className="bg-[#1b1c23] border-gray-800 text-white max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold">Send Message</DialogTitle>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                {/* Message Type Tabs */}
                <div className="flex gap-2">
                  {["Push Notifications", "Important Updates", "Image pop-up"].map((type) => (
                    <Button
                      key={type}
                      variant={selectedMessageType === type ? "default" : "ghost"}
                      className={`rounded-full px-4 py-2 text-sm ${
                        selectedMessageType === type
                          ? "bg-[#e3a325] text-black hover:bg-[#e0c224]"
                          : "bg-[#57585f] text-white hover:bg-gray-600"
                      }`}
                      onClick={() => setSelectedMessageType(type)}
                    >
                      {type}
                    </Button>
                  ))}
                </div>

                {/* Tab Content */}
                {selectedMessageType === "Push Notifications" && (
                  <div className="space-y-6">
                    {/* Topic Field */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Topic</label>
                      <Input
                        placeholder="Enter Topic"
                        className="bg-[#57585f] border-gray-600 text-white placeholder:text-gray-400 rounded-lg"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Message</label>
                      <textarea
                        placeholder="Type a message"
                        rows={6}
                        className="w-full bg-[#57585f] border border-gray-600 text-white placeholder:text-gray-400 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#e3a325] focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {selectedMessageType === "Important Updates" && (
                  <div className="space-y-6">
                    {/* Slide 1 */}
                    <div>
                      <h3 className="text-white text-lg font-medium mb-3">Slide 1</h3>
                      <div className="bg-[#57585f] border border-gray-600 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-white text-lg font-semibold">Reminder! you can Refer and Earn</h4>
                          <Button variant="ghost" className="text-[#e3a325] hover:text-[#e0c224] p-0 h-auto">
                            Edit
                          </Button>
                        </div>
                        <p className="text-gray-300 mb-3">
                          Hurry! Earn up to 50 Plugs and more rewards simply by inviting your peers and colleagues. To
                          leverage your connections today.
                        </p>
                        <div className="text-right">
                          <span className="text-gray-400 text-sm">05/02/2024 03:254</span>
                        </div>
                      </div>
                    </div>

                    {/* Slide 2 */}
                    <div>
                      <h3 className="text-white text-lg font-medium mb-3">Slide 2</h3>
                      <div className="bg-transparent border border-gray-600 border-dashed rounded-lg p-8 text-center">
                        <Button variant="ghost" className="text-white hover:text-[#e3a325] text-lg">
                          + Add new
                        </Button>
                      </div>
                    </div>
                  </div>
                )}

                {selectedMessageType === "Image pop-up" && (
                  <div className="space-y-6">
                    {/* Upload Area */}
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                      <div className="w-12 h-12 bg-[#e3a325] rounded-lg flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      </div>
                      <p className="text-[#e3a325] text-lg mb-2">Click to upload</p>
                      <p className="text-gray-400">or drag and drop</p>
                      <p className="text-gray-400 text-sm mt-2">SVG, PNG, JPG or GIF (max. 430x932px)</p>
                    </div>

                    {/* OR Divider */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-600"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-[#1b1c23] text-white">OR</span>
                      </div>
                    </div>

                    {/* Image URL */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Image url</label>
                      <Input
                        placeholder="Paste url link here"
                        className="bg-[#57585f] border-gray-600 text-white placeholder:text-gray-400 rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-4">
                <Button variant="ghost" className="text-[#e3a325] hover:text-[#e0c224]">
                  History
                </Button>
                <div className="flex gap-3">
                  <Button className="bg-[#57585f] text-white hover:bg-gray-600 rounded-full px-6 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Schedule
                  </Button>
                  <Button className="bg-[#e3a325] text-black hover:bg-[#e0c224] rounded-full px-6 flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          {/* Message History Dialog */}
          <Dialog open={chatDialogOpen} onOpenChange={setChatDialogOpen}>
            <DialogContent className="bg-[#1b1c23] border-gray-800 text-white max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold">Message History</DialogTitle>
              </DialogHeader>

              <div className="space-y-6 pt-4">
                {/* Message Type Tabs */}
                <div className="flex gap-2">
                  {["Push Notifications", "Important Updates", "Image pop-up"].map((type) => (
                    <Button
                      key={type}
                      variant={selectedMessageType === type ? "default" : "ghost"}
                      className={`rounded-full px-4 py-2 text-sm ${
                        selectedMessageType === type
                          ? "bg-[#e3a325] text-black hover:bg-[#e0c224]"
                          : "bg-[#57585f] text-white hover:bg-gray-600"
                      }`}
                      onClick={() => setSelectedMessageType(type)}
                    >
                      {type}
                    </Button>
                  ))}
                </div>

                {/* Message History List */}
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {Array(5)
                    .fill(null)
                    .map((_, index) => (
                      <div key={index} className="bg-[#57585f] rounded-lg p-4 flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#e3a325] rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-6 h-6 bg-[#e3a325] rounded-sm relative">
                            <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                            <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                            <div className="absolute bottom-0.5 left-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                            <div className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-white rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-white">Celebrate Plugin at 2</h3>
                            <span className="text-sm text-gray-400">30 mins ago</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-gray-300">{"It's a new era at Plugin!"}</p>
                            <span className="text-[#e3a325] text-sm font-medium">2,000 Read</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </main>
      </div>
    </div>
  )
}
