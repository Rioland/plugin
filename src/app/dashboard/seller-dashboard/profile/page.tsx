import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Share2, Pencil, Star, Bookmark, Eye } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white p-4 md:p-10">
      <div className="w-full mx-auto">
        <div className="bg-[#141414] p-6 md:p-10 rounded-2xl border border-[#2A2A2A]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/avatar-placeholder.jpg"
                width={60}
                height={60}
                alt="avatar"
                className="rounded-full"
              />
              <div>
                <h2 className="text-xl font-semibold">David S.</h2>
                <p className="text-sm text-gray-400">Lagos, Nigeria</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-600/10">
                Saved Jobs
              </Button>
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
                See Profile Settings
              </Button>
            </div>
          </div>

          <Separator className="my-6 bg-[#2A2A2A]" />

          <div className="grid md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="border border-[#2A2A2A] rounded-xl p-4">
                <div className="text-sm text-gray-300 mb-1">Plugs:</div>
                <div className="text-2xl font-bold">275</div>
              </div>

              <div className="border border-[#2A2A2A] rounded-xl p-4 space-y-4">
                <div>
                  <p className="font-semibold mb-2">Proposals and offers</p>
                  <div className="flex justify-between text-sm">
                    <span>Contract Offers</span>
                    <span>2</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Proposals</span>
                    <span>2</span>
                  </div>
                </div>

                <Separator className="bg-[#2A2A2A]" />

                <div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Profile Visibility</span>
                    <Button variant="link" className="text-yellow-500 px-0 h-auto text-sm">Edit</Button>
                  </div>
                  <div className="mt-2">
                    <Progress value={70} className="h-2 bg-[#1C1C1C]" />
                    <p className="text-xs mt-1 text-gray-400">70%</p>
                  </div>
                </div>
              </div>

              <div className="text-sm text-gray-400 space-y-2">
                <p>Hours per week</p>
                <p className="text-white">More than 30 hrs/week</p>
                <p>Open to contract to hire</p>
              </div>
              <div className="text-sm text-gray-400">Licenses</div>
              <div className="text-sm text-gray-400">Education</div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-3 space-y-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold">Ui/Ux designer and Product developer</h2>
                  <p className="text-sm mt-2 text-gray-300">
                    I am a passionate UI/UX designer and product developer... <Button variant="link" className="text-yellow-500 px-1 text-sm">more</Button>
                  </p>
                </div>
                <div className="text-right text-sm">
                  <p className="font-bold">$12.50/hr</p>
                  <div className="flex justify-end gap-2 mt-1 text-yellow-500">
                    <Pencil size={16} />
                    <Bookmark size={16} />
                    <Share2 size={16} />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Portfolio</h3>
                <div className="flex gap-4 mb-2">
                  <span className="text-yellow-500 border-b border-yellow-500 pb-1 text-sm cursor-pointer">Published</span>
                  <span className="text-gray-400 text-sm cursor-pointer">Draft</span>
                </div>
                <div className="text-sm text-gray-400 border border-[#2A2A2A] p-4 rounded-xl">
                  Add a Project. Talent are hired 9x more often if they’ve published a portfolio.
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Work History</h3>
                <div className="text-sm text-gray-200 space-y-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500 text-sm">●</span>
                      <p>Senior UI/UX Designer</p>
                    </div>
                    <p className="text-gray-400 ml-4">XYZ Tech Solutions | Jan 2022 – Present</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500 text-sm">●</span>
                      <p>Senior UI/UX Designer</p>
                    </div>
                    <p className="text-gray-400 ml-4">XYZ Tech Solutions | Jan 2022 – Present</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">UX/UI</Badge>
                  <Badge variant="secondary">Graphics</Badge>
                  <Badge variant="secondary">App development</Badge>
                  <Badge variant="secondary">Web Design</Badge>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-6 bg-[#2A2A2A]" />

          <div className="text-sm text-gray-400 bg-[#0F0F0F] border border-[#2A2A2A] rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="mb-2 text-white">Your project catalog</p>
              <p className="max-w-lg">
                Projects are a new way to earn on Upwork that helps you do more of the work you love to do. Create project offerings that highlight your strengths and attract more clients.
              </p>
            </div>
            <Button className="bg-yellow-500 text-black hover:bg-yellow-600 w-fit">
              Manage Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
