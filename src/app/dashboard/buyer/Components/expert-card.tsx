"use client"

import { Heart, Calendar, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ExpertCardProps {
  name: string
  location: string
  jobSuccess: number
  ratings: number
  jobsCompleted: number
  title: string
  description: string
  price: string
  currency?: string
  avatarSrc?: string
  avatarFallback?: string
  onHeartClick?: () => void
  onBookConsultation?: () => void
  isLiked?: boolean
  className?: string
}

export default function ExpertCard({
  name,
  location,
  jobSuccess,
  ratings,
  jobsCompleted,
  title,
  description,
  price,
  currency = "₦",
  avatarSrc,
  avatarFallback = "DS",
  onHeartClick,
  onBookConsultation,
  isLiked = false,
  className = "",
}: ExpertCardProps) {
  return (
    <Card className={`bg-gray-900 border-gray-800 ${className}`}>
      <CardContent className="p-4 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={avatarSrc || "/placeholder.svg?height=48&width=48"} />
              <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-semibold text-white">{name}</h4>
              <p className="text-sm text-gray-400 ">{location}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onHeartClick}>
            <Heart className={`w-4 h-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div>
            <div className="text-lg font-bold text-white">{jobSuccess}%</div>
            <div className="text-xs text-gray-400 ">Job Success</div>
          </div>
          <div>
            <div className="text-lg font-bold text-white">{ratings.toLocaleString()}+</div>
            <div className="text-xs text-gray-400">ratings</div>
          </div>
          <div>
            <div className="text-lg font-bold text-white">{jobsCompleted}</div>
            <div className="text-xs text-gray-400">jobs</div>
          </div>
        </div>

        <div>
          <h5 className="font-medium text-sm mb-2 text-white">{title}</h5>
          <p className="text-xs text-gray-400 leading-relaxed">{description}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Briefcase className="w-4 h-4  text-yellow-500" />
            <span className="text-sm font-medium text-white">
              Fixed: {currency}
              {price}
            </span>
          </div>
        </div>

        <Button
          className="w-full bg-transparent border border-gray-600 text-white hover:bg-gray-800"
          onClick={onBookConsultation}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Book Consultation
        </Button>
      </CardContent>
    </Card>
  )
}
