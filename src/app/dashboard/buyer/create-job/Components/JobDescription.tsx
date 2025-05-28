'use client'

import { useState } from 'react'

export default function JobDescription() {
  const [description, setDescription] = useState(
    'We are looking for a talented UI/UX Designer and Developer to create engaging and user-friendly interfaces for our web and mobile applications. The ideal candidate will have a strong portfolio showcasing their design skills and a solid understanding of front-end development. You will collaborate with our team to enhance user experience through innovative design solutions. If you are passionate about creating intuitive designs and have experience in both design and development, we want to hear from you!'
  )

  return (
    <div className=" text-white px-4 py-10 md:px-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="w-full">
          <p className="text-sm text-gray-400 mb-2">
            5/5 <span className="font-semibold text-white ml-2">Job post</span>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Start the conversation.</h1>

          <p className="text-white mb-4 font-semibold">Talent are looking for:</p>
          <ul className="list-disc list-inside space-y-2 text-white text-sm md:text-base">
            <li>Clear expectations about your task or deliverables</li>
            <li>The skills required for your work</li>
            <li>Good communication</li>
            <li>Details about how you or your team like to work</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full space-y-6">
          {/* Textarea */}
          <div>
            <label className="block text-white font-medium mb-2">
              Describe what you need
            </label>
            <textarea
              className="w-full h-52 p-4 rounded-lg border border-gray-400 bg-black text-white placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-white"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Help Link */}
          <div>
            <p className="font-medium mb-1">Need help?</p>
            <a
              href="#"
              className="text-yellow-500 text-sm underline hover:text-yellow-400"
            >
              See example of effective description
            </a>
          </div>

          {/* File Upload (Button Style) */}
          <div>
            <button className="flex items-center gap-2 px-4 py-3 rounded-full border border-gray-600 hover:bg-zinc-800 transition">
              📎 <span className="font-medium">Attach file</span>
            </button>
            <p className="text-sm text-gray-500 mt-1">Max file size<br />100mb</p>
          </div>
        </div>
      </div>
    </div>
  )
}
