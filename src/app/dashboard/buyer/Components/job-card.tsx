"use client"

import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface JobCardProps {
  title: string
  status: "posted" | "draft"
  timeAgo?: string
  bidsCount?: number
  isDraft?: boolean
  draftMessage?: string
  avatarSrc?: string
  avatarFallback?: string
  onBidsClick?: () => void
  onDraftClick?: () => void
  onMoreClick?: () => void
  className?: string
}

export default function JobCard({
  title,
  status,
  timeAgo,
  bidsCount = 0,
  isDraft = false,
  draftMessage = "Add details to your draft",
  avatarSrc,
  avatarFallback = "UD",
  onBidsClick,
  onDraftClick,
  onMoreClick,
  className = "",
}: JobCardProps) {
  return (
    <Card className={`bg-gray-900 border-gray-800 ${className}`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={avatarSrc || "/placeholder.svg?height=40&width=40"} />
              <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-white">{title}</p>
              <div className="flex items-center space-x-4 text-sm">
                {status === "posted" ? (
                  <>
                    <span className="text-gray-400">Job posted</span>
                    {timeAgo && <span className="text-gray-400">{timeAgo}</span>}
                  </>
                ) : (
                  <>
                    <span className="text-yellow-500">Draft job post</span>
                    <span className="text-gray-400">{draftMessage}</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {status === "posted" ? (
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600 text-sm" onClick={onBidsClick}>
                Bids {bidsCount}
              </Button>
            ) : (
              <Button
                variant="outline"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black text-sm bg-transparent"
                onClick={onDraftClick}
              >
                Fill in draft
              </Button>
            )}
            <Button variant="ghost" size="icon" onClick={onMoreClick}>
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
