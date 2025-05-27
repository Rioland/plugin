"use client"

import { ChevronRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "./Components/NavBar"
import HeroSlider from "./Components/hero-slider"
import JobCard from "./Components/job-card"
import ExpertCard from "./Components/expert-card"
import CategoryCard from "./Components/category-card"
import { useRouter } from "next/navigation"


export default function PluginDashboard() {
  const router=useRouter()
  const categories = [
    {
      title: "Business Registration & Compliance",
      imageSrc: "/placeholder.svg?height=120&width=200",
      imageAlt: "Business Registration",
    },
    {
      title: "Branding, Design & Identity",
      imageSrc: "/placeholder.svg?height=120&width=200",
      imageAlt: "Branding",
    },
    {
      title: "Digital & Creative Economy",
      imageSrc: "/placeholder.svg?height=120&width=200",
      imageAlt: "Digital Creative",
    },
    {
      title: "Website, App & Software Development",
      imageSrc: "/placeholder.svg?height=120&width=200",
      imageAlt: "Website Development",
    },
  ]

  const experts = [
    {
      name: "David S.",
      location: "Lagos, Nigeria",
      jobSuccess: 99,
      ratings: 5000,
      jobsCompleted: 539,
      title: "Reliable UI/UX Designer and Web Development",
      description:
        "I am truly passionate about what I do, and I want my designs to represent your business, an expert in the field of design, I am truly passionate about I am truly about what I do, and I want you...",
      price: "250,000",
    },
    {
      name: "David S.",
      location: "Lagos, Nigeria",
      jobSuccess: 99,
      ratings: 5000,
      jobsCompleted: 539,
      title: "Reliable UI/UX Designer and Web Development",
      description:
        "I am truly passionate about what I do, and I want my designs to represent your business, an expert in the field of design, I am truly passionate about I am truly about what I do, and I want you...",
      price: "250,000",
    },
    {
      name: "David S.",
      location: "Lagos, Nigeria",
      jobSuccess: 99,
      ratings: 5000,
      jobsCompleted: 539,
      title: "Reliable UI/UX Designer and Web Development",
      description:
        "I am truly passionate about what I do, and I want my designs to represent your business, an expert in the field of design, I am truly passionate about I am truly about what I do, and I want you...",
      price: "250,000",
    },
    {
      name: "David S.",
      location: "Lagos, Nigeria",
      jobSuccess: 99,
      ratings: 5000,
      jobsCompleted: 539,
      title: "Reliable UI/UX Designer and Web Development",
      description:
        "I am truly passionate about what I do, and I want my designs to represent your business, an expert in the field of design, I am truly passionate about I am truly about what I do, and I want you...",
      price: "250,000",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="md:px-32 px-4 py-6 space-y-8">
        {/* Hero Slider */}
        <HeroSlider />

        {/* Welcome Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
          <div>
            <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
            <h3 className="text-xl font-semibold mb-4">Overview</h3>
            <div className="flex items-center space-x-2 text-sm">
              <span>Kyc verification is in progress</span>
              <Info className="w-4 h-4 text-red-500" />
            </div>
          </div>
          <Button className="bg-yellow-500 text-black hover:bg-yellow-600 font-bold"  onClick={()=>router.push('/dashboard/buyer/create-job')}>Post a Job</Button>
        </div>

        {/* Job Posts */}
        <div className="space-y-4">
          <JobCard
            title="UI/UX Designer"
            status="posted"
            timeAgo="23 hours ago"
            bidsCount={0}
            onBidsClick={() => console.log("Bids clicked")}
            onMoreClick={() => console.log("More clicked")}
          />

          <JobCard
            title="UI/UX Designer"
            status="draft"
            draftMessage="Add details to your draft"
            onDraftClick={() => console.log("Fill in draft clicked")}
            onMoreClick={() => console.log("More clicked")}
          />

          <JobCard
            title="UI/UX Designer"
            status="draft"
            draftMessage="Add details to your draft"
            onDraftClick={() => console.log("Fill in draft clicked")}
            onMoreClick={() => console.log("More clicked")}
          />
        </div>

        {/* Categories Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Select a category</h3>
            <button className="text-yellow-500 hover:text-yellow-400 flex items-center space-x-1">
              <span>See more</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                imageSrc={category.imageSrc}
                imageAlt={category.imageAlt}
                onClick={() => console.log(`Category clicked: ${category.title}`)}
              />
            ))}
          </div>
        </div>

        {/* Expert Consultation Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Review your project's goals with an expert, one-on-one</h3>
            <button className="text-yellow-500 hover:text-yellow-400 flex items-center space-x-1">
              <span>See more</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {experts.map((expert, index) => (
              <ExpertCard
                key={index}
                name={expert.name}
                location={expert.location}
                jobSuccess={expert.jobSuccess}
                ratings={expert.ratings}
                jobsCompleted={expert.jobsCompleted}
                title={expert.title}
                description={expert.description}
                price={expert.price}
                onHeartClick={() => console.log(`Heart clicked for ${expert.name}`)}
                onBookConsultation={() => console.log(`Book consultation for ${expert.name}`)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
