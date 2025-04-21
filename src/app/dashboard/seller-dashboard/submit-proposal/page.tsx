'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Paperclip, ArrowLeft } from "lucide-react";

import MyModal from "@/components/ui/MyModal";
import { useState } from "react";
import WorkSmart from "./WorkSmartDialog";
import PluginNavbar from "../Components/NavBar";

export default function SubmitProposalPage() {
  const [showSubitDialog, setShowSubmitDialog] = useState(false)
  return (
    <PluginNavbar >

      <div className="max-w-4xl mx-auto px-4 py-6 text-white">
        <div className="mb-4 flex items-center space-x-2 text-sm text-yellow-500 cursor-pointer">
          <ArrowLeft size={16} />
          <span>return to search</span>
        </div>

        <h1 className="text-2xl font-semibold mb-6 text-white">Submit a proposal</h1>

        {/* Proposal Settings */}
        <Card className="mb-6 bg-[#111111] border border-[#222] text-white">
          <CardContent className="py-4">
            <h2 className="font-semibold text-lg mb-1 text-white">Proposal settings</h2>
            <p className="text-sm text-gray-400 ">
              This proposal requires 10 plugs<br />
              When you submit this proposal you will have 265 plugs left.
            </p>
          </CardContent>
        </Card>

        {/* Job Details */}
        <Card className="mb-6 bg-[#111111] border border-[#222]">
          <CardContent className="py-4 text-white">
            <h2 className="font-semibold text-lg mb-2 text-white">Job details</h2>
            <div className="mb-2">
              <p className="font-semibold text-white">UI/UX Designer Needed</p>
              <div className="flex flex-wrap gap-2 mt-1">
                <Badge variant="secondary">UX</Badge>
                <Badge variant="secondary">Graphics</Badge>
                <Badge variant="secondary">Web Design</Badge>
              </div>
              <p className="text-sm text-gray-400 mt-1">Posted 14 April 2025</p>
            </div>

            <p className="text-sm text-gray-300">
              We’re looking for a talented UI/UX Designer to join our team. You’ll be responsible for designing intuitive and
              visually appealing user experiences for web and mobile applications.
            </p>

            <ul className="list-disc list-inside text-sm text-gray-300 mt-2 space-y-1">
              <li>Create user-friendly interfaces that enhance usability and engagement.</li>
              <li>Conduct user research and analyze feedback to improve designs.</li>
              <li>Develop wireframes, prototypes, and high-fidelity designs.</li>
              <li>Collaborate with developers to ensure seamless implementation.</li>
              <li>Stay updated on UI/UX trends and best practices.</li>
            </ul>

            <p className="text-sm text-yellow-500 mt-2 underline cursor-pointer">View full details</p>

            <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-300">
              <div>
                <p className="font-semibold text-white text-base">1 month</p>
                <p>Job length</p>
              </div>
              <div>
                <p className="font-semibold text-white text-base">₦250,000</p>
                <p>Fixed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Proposal Form */}
        <Card className="mb-6 bg-[#111111] border border-[#222] text-white">
          <CardContent className="py-4 space-y-4">
            <h2 className="font-semibold text-lg mb-2 text-white">Proposal</h2>

            <div>
              <Label>Your bid for the job</Label>
              <Input placeholder="₦200,000" className="mt-1 bg-black border-[#333] text-white" />
            </div>

            <div>
              <Label>10% service fee</Label>
              <Input value="₦20,000" disabled className="mt-1 bg-black border-[#333] text-white" />
            </div>

            <div>
              <Label>You get</Label>
              <Input value="₦180,000" disabled className="mt-1 bg-black border-[#333] text-white" />
            </div>

            <div>
              <Label>How long will it take?</Label>
              <Select>
                <SelectTrigger className="mt-1 bg-black border-[#333] text-white">
                  <SelectValue placeholder="Select a duration" />
                </SelectTrigger>
                <SelectContent className="bg-black border-[#333] text-white">
                  <SelectItem value="1">1 week</SelectItem>
                  <SelectItem value="2">2 weeks</SelectItem>
                  <SelectItem value="3">3 weeks</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Additional Details */}
        <Card className="mb-6 bg-[#111111] border border-[#222]">
          <CardContent className="py-4 space-y-4">
            <h2 className="font-semibold text-lg mb-2 text-white">Additional details</h2>

            <div>
              <Label>Cover letter</Label>
              <Textarea rows={6} placeholder="Write your cover letter here..." className="mt-1 bg-black border-[#333] text-white" />
            </div>

            <div>
              <Label>Attachments</Label>
              <Button variant="outline" className="mt-1 flex items-center gap-2 border-yellow-500 text-yellow-500">
                <Paperclip size={16} /> Attach files
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Submit Buttons */}
        <div className="flex flex-wrap gap-4">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" onClick={() => {
            setShowSubmitDialog(true)
          }}>Submit proposal</Button>
          <Button variant="ghost" className="text-white border border-gray-700">Cancel</Button>
        </div>
      </div>
      <MyModal isOpen={showSubitDialog} onClose={() => { setShowSubmitDialog(false) }} >
        <WorkSmart onSubmit={() => {}} onCancle={() => {setShowSubmitDialog(false) }} />
      </MyModal>
    </PluginNavbar>
  );
}
