import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

export default function FreelancerProfile() {
  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-10">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <button className="text-yellow-500 text-sm">&lt; Back</button>
          <div className="flex items-center space-x-4">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl px-6">Hire</Button>
            <button className="text-yellow-500">❤</button>
            <button className="text-yellow-500">Share ↗</button>
          </div>
        </div>

        {/* Profile Header */}
        <div className="mt-6 md:flex md:justify-between md:items-start">
          {/* Left */}
          <div className="flex items-start space-x-4">
            <Image
              src="/images/avatar.jpg"
              alt="avatar"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">David S.</h2>
              <p className="text-sm text-white/70">Lagos, Nigeria</p>
              <div className="flex items-center space-x-2 mt-1 text-sm">
                <span className="text-yellow-500">🏆 99% Job Success</span>
                <span className="text-yellow-500">• 5000+ ratings</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-10">
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-6">
            <div>
              <h3 className="font-semibold text-lg">539</h3>
              <p className="text-sm text-white/70">Completed jobs</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Hours per week</h3>
              <p className="text-sm text-white/70">More than 30 hrs/week</p>
              <p className="text-sm text-yellow-500">Open to contract to hire</p>
            </div>
            <div className="space-y-2">
              <Button className="w-full bg-transparent border border-white rounded-xl hover:bg-white/10">Send a message</Button>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black rounded-xl">Book Consultation</Button>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Certifications</h4>
              <p className="flex items-center text-sm">
                ✅ Google Ads Search Certification <br />
                <span className="text-white/70">Verified by Upwork</span>
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-10">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Ui/Ux designer and Product developer</h3>
                <p className="text-lg font-semibold">₦30,000/hr</p>
              </div>
              <p className="text-white/70 mt-4 text-sm leading-relaxed">
                I am a passionate UI/UX designer and product developer dedicated to creating intuitive, user-centric digital experiences. With a keen eye for design and a problem-solving mindset, I specialize in crafting seamless interfaces and innovative products that enhance usability and engagement. My expertise spans user research, wireframing, prototyping, and front-end design, ensuring that every product I develop is both visually appealing and functionally efficient. Driven by a deep understanding of user behavior and emerging trends, I strive to bridge the gap......... <span className="text-yellow-500 cursor-pointer">more</span>
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["UI/UX", "App development", "Social media marketing", "Web designer", "Game developer", "Data analytics", "Product developer"].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Work History</h4>
              <ul className="space-y-4">
                {Array(5).fill(0).map((_, index) => (
                  <li key={index} className="text-sm">
                    <p className="font-semibold">Senior UI/UX Designer</p>
                    <p className="text-white/70">XYZ Tech Solutions | Jan 2022 – Present</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Client Reviews</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Array(3).fill(0).map((_, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-xl">
                    <div className="flex items-center space-x-2">
                      {Array(4).fill(0).map((_, j) => (
                        <Star key={j} size={16} className="text-yellow-500" />
                      ))}
                      <span className="text-sm">4.0</span>
                    </div>
                    <p className="text-sm text-white/70 mt-2">
                      Working with him was smooth from start to finish. Clear requirements, prompt feedback, and timely payments. Would definitely work with him again
                    </p>
                    <p className="mt-2 text-xs text-white/50">Adebayo Tobi</p>
                    {i === 2 && <p className="text-yellow-500 mt-2 text-sm cursor-pointer">View more →</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
