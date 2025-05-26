
'use client'
import { Bookmark, Briefcase, Clock, Clock3, Heart, MapPin, ThumbsDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function JobCard() {
  const router=useRouter();
  return (
    <div onClick={()=>{router.push('/dashboard/seller/jobs/job-details')}}>

    <Card className="bg-[#111] border-none  border-gray-800" >
            <CardContent className="p-6">
              <p className="text-xs text-gray-400 mb-2">Posted 2hrs ago</p>
              <h2 className="text-xl font-semibold mb-4 text-white">
                UI/UX Designer Needed for Fintech Company
              </h2>

              <div className="flex flex-col items-start gap-x-6 gap-y-2 text-sm text-gray-300 mb-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-yellow-500" />
                  Fixed: ₦250,000
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-yellow-500" />
                  Lagos, Nigeria (Remote)
                </div>
                <div className="flex items-center gap-2">
                  <Clock3 className="w-4 h-4 text-yellow-500" />
                  1 month
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-[#2C2C2C] text-white">
                  UX
                </Badge>
                <Badge variant="secondary" className="bg-[#2C2C2C] text-white">
                  Graphics
                </Badge>
                <Badge variant="secondary" className="bg-[#2C2C2C] text-white">
                  Web Design
                </Badge>
              </div>

              <p className="text-sm text-gray-400 mb-4">
                We’re looking for a talented UI/UX Designer to join our team. You’ll be responsible
                for designing intuitive and visually appealing user experiences for web and mobile
                applications.
              </p>

              <div className="flex justify-end gap-4">
                <Button variant="ghost" size="icon" className="text-yellow-500 hover:text-yellow-600 border border-yellow-500">
                  <Bookmark className="w-5 h-5" />
                </Button>
                {/* <Button variant="ghost" size="icon" className="text-yellow-500 hover:text-yellow-600 border border-yellow-500">
                  <Heart className="w-5 h-5" />
                </Button> */}
              </div>
            </CardContent>
          </Card>
    </div>
  );
}
