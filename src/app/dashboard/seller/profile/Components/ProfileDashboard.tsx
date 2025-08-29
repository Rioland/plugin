"use client";
import { useState } from "react";
import { FiEdit2, FiShare2 } from "react-icons/fi";
import { BsBookmarkFill } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function ProfileDashboard() {
  const [profileCompletion] = useState(70);

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col">
      {/* Top Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <div className="flex items-center gap-4">
          <img
            src="https://via.placeholder.com/60"
            alt="profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h1 className="text-xl font-semibold">David S.</h1>
            <p className="text-sm text-gray-400">Lagos, Nigeria</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="bg-yellow-500 text-black font-medium px-4 py-2 rounded-lg">
            Saved Jobs
          </button>
          <button className="bg-yellow-600 text-black font-medium px-4 py-2 rounded-lg">
            See Profile Settings
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="lg:w-1/4 w-full bg-black border-r border-gray-700 p-5 flex flex-col gap-6">
          {/* Plugs */}
          <div className="bg-black border border-gray-700 rounded-xl p-4">
            <p className="text-gray-400">Plugs:</p>
            <p className="text-yellow-400 font-bold text-lg">275</p>
          </div>

          {/* Proposals */}
          <div className="bg-black border border-gray-700 rounded-xl p-4">
            <h3 className="text-yellow-400 font-medium">Proposals and Offers</h3>
            <div className="flex justify-between text-sm mt-3">
              <span>Contract Offers</span>
              <span className="font-semibold">2</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Proposals</span>
              <span className="font-semibold">2</span>
            </div>
          </div>

          {/* Profile Completion */}
          <div className="bg-black border border-gray-700 rounded-xl p-4">
            <h3 className="font-medium">Profile Completion</h3>
            <div className="mt-2 flex justify-between text-sm">
              <span className="text-gray-400">Profile Visibility</span>
              <button className="text-yellow-400 underline">Edit</button>
            </div>
            <div className="relative w-full bg-gray-800 rounded-full h-2 mt-2">
              <div
                className="bg-yellow-500 h-2 rounded-full"
                style={{ width: `${profileCompletion}%` }}
              ></div>
            </div>
            <p className="text-right text-xs mt-1 text-gray-400">{profileCompletion}%</p>
            <button className="mt-3 text-yellow-400 underline text-sm">
              Complete your profile
            </button>
          </div>

          {/* Extra Info */}
          <div className="space-y-3">
            <p className="text-sm text-gray-400">
              <strong className="text-white">Hours per week:</strong> More than 30 hrs/week
            </p>
            <p className="text-sm text-gray-400">
              <strong className="text-white">Licenses:</strong> <HiOutlineDocumentText className="inline" />
            </p>
            <p className="text-sm text-gray-400">
              <strong className="text-white">Education:</strong> <HiOutlineDocumentText className="inline" />
            </p>
          </div>
          <button className="bg-yellow-600 text-black font-medium w-full py-2 rounded-lg mt-4">
            Manage Projects
          </button>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4 w-full p-6 space-y-8">
          {/* Title */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold">UI/UX Designer and Product Developer</h2>
              <p className="text-gray-400 text-sm mt-1">
                I am a passionate UI/UX designer and product developer dedicated to creating
                intuitive, user-centric digital experiences. My expertise spans user research,
                wireframing, prototyping, and front-end design.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-lg font-semibold text-yellow-500">₦30,000/hr</span>
              <FiEdit2 className="cursor-pointer" />
              <FiShare2 className="cursor-pointer" />
            </div>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Portfolio</h3>
            <div className="bg-black border border-gray-700 rounded-lg p-6 text-center">
              <p className="text-yellow-400 cursor-pointer">Add a Project</p>
              <p className="text-gray-400 text-xs mt-1">
                Talent are hired 9x more often if they've published a portfolio.
              </p>
            </div>
          </div>

          {/* Work History */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Work History</h3>
            <ul className="space-y-3">
              <li>
                <span className="font-medium">Senior UI/UX Designer</span> — XYZ Tech Solutions
                <p className="text-gray-400 text-sm">Jan 2022 – Present</p>
              </li>
              <li>
                <span className="font-medium">Senior UI/UX Designer</span> — XYZ Tech Solutions
                <p className="text-gray-400 text-sm">Jan 2022 – Present</p>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {["UI/UX", "App development", "Web designer", "Game developer", "Data analytics", "Product developer"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 border border-gray-600 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
