"use client"

import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  title: string
  imageSrc?: string
  imageAlt?: string
  onClick?: () => void
  className?: string
}

export default function CategoryCard({ title, imageSrc, imageAlt, onClick, className = "" }: CategoryCardProps) {
  return (
    <Card
      className={`bg-gray-900 border-gray-800 overflow-hidden group hover:border-yellow-500 transition-colors cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="aspect-video relative">
        <img
          src={imageSrc || "/placeholder.svg?height=120&width=200"}
          alt={imageAlt || title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h4 className="font-medium text-sm text-white">{title}</h4>
      </CardContent>
    </Card>
  )
}
