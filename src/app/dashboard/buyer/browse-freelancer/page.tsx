import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Star, Crown, LightbulbIcon } from "lucide-react"
import Image from "next/image"

export default function BrowseFreelancerPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-12 py-10">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Browse Freelancer</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="uiux">UI/UX</SelectItem>
            <SelectItem value="dev">Development</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lagos">Lagos</SelectItem>
            <SelectItem value="abuja">Abuja</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Pricing" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low to High</SelectItem>
            <SelectItem value="high">High to Low</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Seller ratings" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5 Stars</SelectItem>
            <SelectItem value="4">4 Stars & up</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-6">
        {[1, 2, 3].map((_, i) => (
          <Card key={i} className="bg-[#121212] border border-[#2c2c2c]">
            <CardContent className="p-6 flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0">
                <Image
                  src="/avatar-placeholder.png"
                  alt="David S."
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">David S.</h2>
                    <p className="text-sm text-muted-foreground">UI/UX designer | Product developer</p>
                    <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <Heart className="text-yellow-400" />
                    <Button className="bg-yellow-400 text-black font-semibold hover:bg-yellow-300">
                      View Profile
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-4">
                  <span>₦30,000/hr</span>
                  <span className="flex items-center gap-1"><Crown className="w-4 h-4" /> 99% Job Success</span>
                  <span className="flex items-center gap-1"><Star className="w-4 h-4" /> 5000+ ratings</span>
                  <span className="flex items-center gap-1"><LightbulbIcon className="w-4 h-4" /> Available now</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["UI/UX", "App development", "Social media marketing", "Web designer", "Game developer", "Data analytics", "Product developer"].map(skill => (
                    <Badge key={skill} variant="secondary" className="bg-[#2c2c2c] text-white border-none">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Hello there! 👋 I am a passionate UI/UX designer and product developer dedicated to creating intuitive,
                  user-centric digital experiences. With a keen eye for design and a problem-solving mindset, I specialize in
                  crafting seamless interfaces and innovative products that enhance usability and engagement........
                </p>
                <p className="text-sm text-yellow-400 font-medium mt-2 cursor-pointer">View full details</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
