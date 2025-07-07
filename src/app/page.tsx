import React from 'react'

import Image from 'next/image';

export default function AdminLoginPage() {
  return (

    <div className='min-h-screen '>
      <div className="flex items-center gap-3 text-white text-3xl font-semibold bg-black/80 py-12 px-4">
        <Image src="/images/logo-single-yellow.png" alt="Plugin logo" width={40} height={40} />
        <span>Plugin</span>
      </div>
      <div className="min-h-screen flex">
        {/* Left Section */}
        <div className="w-1/2 bg-[#F6A700]/90 text-white px-16 py-20 flex flex-col justify-between">
          <div>

            <div className="mt-16 space-y-10">
              <div>
                <h3 className="font-bold text-lg">✅ Secure Login</h3>
                <p className="text-sm mt-2">Use your email to sign in</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">✅ Enhanced User Management</h3>
                <p className="text-sm mt-2">
                  Gain insights into user activity, track jobs and analyse Plugin patterns
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg">✅ Proactive Monitoring</h3>
                <p className="text-sm mt-2">
                  Stay on top with real-time data and reports, ensuring a smooth experience for users.
                </p>
              </div>
            </div>
          </div>
          <div className="text-sm">
            Pluginafrica &nbsp; | &nbsp;
            <a href="#" className="underline">
              Terms and Privacy
            </a>
          </div>
        </div>

        {/* Right Section */}
        {/* Right Section */}
        <div className="w-1/2 bg-black/80 relative text-white flex items-center justify-center">
          <div className="absolute inset-0">
            <Image src="/images/people.png" alt="Team Background" layout="fill" objectFit="cover" className="opacity-20" />
          </div>
          <div className="z-10 w-full max-w-md p-10">
            <div className="mb-10 text-center">
              <Image src="/logo.svg" alt="Plugin logo" width={40} height={40} className="mx-auto mb-3" />
              <h2 className="text-2xl font-semibold">Welcome Admin</h2>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Johndoe@pluginafrica.com"
                  className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Password</label>
                <input
                  type="password"
                  placeholder="********"
                  className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#F6A700] text-black font-semibold py-3 rounded-full hover:bg-yellow-500 transition"
              >
                LOGIN →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
