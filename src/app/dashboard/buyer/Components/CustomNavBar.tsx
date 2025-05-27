"use client"
import { AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import {
  Search,
  Bell,
  HelpCircle,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

import React, { useState } from 'react'

import { Input } from "@/components/ui/input"
import { Avatar } from '@/components/ui/avatar'
export default function CustomNavBar() {
          const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
          const [findTalentOpen, setFindTalentOpen] = useState(false)
          const [manageJobsOpen, setManageJobsOpen] = useState(false)
          const [mobileFindTalentOpen, setMobileFindTalentOpen] = useState(false)
          const [mobileManageJobsOpen, setMobileManageJobsOpen] = useState(false)
        
          // Close dropdowns when clicking outside
          const closeDropdowns = () => {
            setFindTalentOpen(false)
            setManageJobsOpen(false)
          }
        
  return (
    <div>
       {/* Header */}
      <header className="flex items-center justify-between px-4 lg:px-8 py-4 border-b border-gray-800">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-sm"></div>
            </div>
            <span className="text-xl font-bold">Plugin</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="relative">
              <button
                className="text-white hover:text-yellow-500 flex items-center space-x-1"
                onClick={() => setFindTalentOpen(!findTalentOpen)}
              >
                <span>Find Talent</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${findTalentOpen ? "rotate-180" : ""}`} />
              </button>
              {findTalentOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                      Browse Freelancers
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                      Post a Project
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                      Talent Scout
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                      Enterprise
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="text-white hover:text-yellow-500 flex items-center space-x-1"
                onClick={() => setManageJobsOpen(!manageJobsOpen)}
              >
                <span>Manage Jobs</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${manageJobsOpen ? "rotate-180" : ""}`} />
              </button>
              {manageJobsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                      My Jobs
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                      All Contracts
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                      Work Diary
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">
                      Reports
                    </a>
                  </div>
                </div>
              )}
            </div>

            <button className="text-white hover:text-yellow-500">Messages</button>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Desktop Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400 w-64"
            />
          </div>

          {/* Desktop Icons */}
          <div className="hidden sm:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <HelpCircle className="w-5 h-5" />
            </Button>
          </div>

          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search..."
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-full"
              />
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-2">
              <div>
                <button
                  className="w-full text-left text-white hover:text-yellow-500 flex items-center justify-between py-2"
                  onClick={() => setMobileFindTalentOpen(!mobileFindTalentOpen)}
                >
                  <span>Find Talent</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileFindTalentOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileFindTalentOpen && (
                  <div className="pl-4 space-y-2">
                    <a href="#" className="block text-sm text-gray-300 hover:text-white py-1">
                      Browse Freelancers
                    </a>
                    <a href="#" className="block text-sm text-gray-300 hover:text-white py-1">
                      Post a Project
                    </a>
                    <a href="#" className="block text-sm text-gray-300 hover:text-white py-1">
                      Talent Scout
                    </a>
                    <a href="#" className="block text-sm text-gray-300 hover:text-white py-1">
                      Enterprise
                    </a>
                  </div>
                )}
              </div>

              <div>
                <button
                  className="w-full text-left text-white hover:text-yellow-500 flex items-center justify-between py-2"
                  onClick={() => setMobileManageJobsOpen(!mobileManageJobsOpen)}
                >
                  <span>Manage Jobs</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileManageJobsOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileManageJobsOpen && (
                  <div className="pl-4 space-y-2">
                    <a href="#" className="block text-sm text-gray-300 hover:text-white py-1">
                      My Jobs
                    </a>
                    <a href="#" className="block text-sm text-gray-300 hover:text-white py-1">
                      All Contracts
                    </a>
                    <a href="#" className="block text-sm text-gray-300 hover:text-white py-1">
                      Work Diary
                    </a>
                    <a href="#" className="block text-sm text-gray-300 hover:text-white py-1">
                      Reports
                    </a>
                  </div>
                )}
              </div>

              <a href="#" className="block text-white hover:text-yellow-500 py-2">
                Messages
              </a>
            </div>

            {/* Mobile Icons */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <HelpCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
