"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface HeroSliderProps {
  className?: string
}

interface SlideData {
  id: number
  title: string
  subtitle: string
  description: string
  buttonText: string
  buttonAction: () => void
}

export default function HeroSlider({ className = "" }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: SlideData[] = [
    {
      id: 1,
      title: "NIGHT PARTY",
      subtitle: "Level up your brand with seamless, on-demand design help.",
      description: "Hire with ease, manage payments smoothly, and stay on top of every project.",
      buttonText: "Get Started",
      buttonAction: () => console.log("Get Started clicked"),
    },
    {
      id: 2,
      title: "DESIGN STUDIO",
      subtitle: "Transform your ideas into stunning visual experiences.",
      description: "Connect with top designers and bring your creative vision to life.",
      buttonText: "Explore Now",
      buttonAction: () => console.log("Explore Now clicked"),
    },
    {
      id: 3,
      title: "DEV TEAM",
      subtitle: "Build powerful applications with expert developers.",
      description: "From concept to deployment, we've got your development needs covered.",
      buttonText: "Start Building",
      buttonAction: () => console.log("Start Building clicked"),
    },
    {
      id: 4,
      title: "MARKETING HUB",
      subtitle: "Grow your business with data-driven marketing strategies.",
      description: "Reach your target audience and maximize your ROI with our marketing experts.",
      buttonText: "Get Results",
      buttonAction: () => console.log("Get Results clicked"),
    },
  ]

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <Card
      className={`bg-gradient-to-r from-yellow-500 to-orange-500 border-none text-black overflow-hidden ${className}`}
    >
      <CardContent className="p-6 lg:p-8 relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="space-y-4 max-w-lg">
            <p className="text-sm font-medium">{slides[currentSlide].subtitle}</p>
            <h1 className="text-2xl lg:text-3xl font-bold leading-tight">{slides[currentSlide].description}</h1>
            <Button className="bg-black text-white hover:bg-gray-800" onClick={slides[currentSlide].buttonAction}>
              {slides[currentSlide].buttonText}
            </Button>

            {/* Slide Indicators */}
            <div className="flex space-x-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-8 h-1 rounded transition-all duration-300 ${
                    index === currentSlide ? "bg-black" : "bg-black/30"
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Decorative Element */}
          <div className="hidden lg:block">
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-full transform rotate-12"></div>
              <div className="absolute top-2 left-2 w-6 h-6 bg-blue-400 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-8 h-16 bg-yellow-300 rounded-t-full"></div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
