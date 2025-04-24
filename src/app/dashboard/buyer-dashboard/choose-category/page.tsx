import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";



const categories = [
  {
    title: "Business Registration & Compliance",
    image: "/images/categories/business_registration.jpg",
  },
  {
    title: "Market Compliance & Feasibility Studies",
    image: "/images/categories/market_compliance.jpg",
  },
  {
    title: "Business Plans, Proposal & Grant Writing",
    image: "/images/categories/business_plans.jpg",
  },
  {
    title: "Import & Export Consulting",
    image: "/images/categories/import_export.jpg",
  },
  {
    title: "Sales, Lead Generation & Customer Acquisition",
    image: "/images/categories/sales_lead.jpg",
  },
  {
    title: "Tax Filing, Accounting & Investment Advisory",
    image: "/images/categories/tax_filing.jpg",
  },
  {
    title: "Debt Recovery & Loan Consulting",
    image: "/images/categories/debt_recovery.jpg",
  },
  {
    title: "Logo & Visual Identity Design",
    image: "/images/categories/logo_design.jpg",
  },
  {
    title: "Business Cards, Letterheads & Stationery",
    image: "/images/categories/stationery.jpg",
  },
  {
    title: "Product Packaging & Merchandise Design",
    image: "/images/categories/product_packaging.jpg",
  },
  {
    title: "Billboard, Signage & Outdoor Advertising",
    image: "/images/categories/billboard.jpg",
  },
  {
    title: "Social Media Graphics & Marketing Materials",
    image: "/images/categories/social_media.jpg",
  },
  {
    title: "UI/UX Design",
    image: "/images/categories/ui_ux.jpg",
  },
  {
    title: "3D Modeling & Animation",
    image: "/images/categories/3d_modeling.jpg",
  },
  {
    title: "Infographics, Pitch Decks & Presentation",
    image: "/images/categories/infographics.jpg",
  },
  {
    title: "Website Development",
    image: "/images/categories/website_dev.jpg",
  },
  {
    title: "Mobile App Development",
    image: "/images/categories/mobile_app.jpg",
  },
  {
    title: "Ai. Chatbots & Automation",
    image: "/images/categories/ai_chatbots.jpg",
  },
  {
    title: "Cybersecurity & Ethical Hacking",
    image: "/images/categories/cybersecurity.jpg",
  },
  {
    title: "Specialized & Unique Services",
    image: "/images/categories/specialized_services.jpg",
  },
];

export default function ChooseCategoryPage() {
  return (

     <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-semibold mb-2">Choose A Category</h1>
        <p className="text-gray-300 mb-8">Pick a category that fits what you offer</p>

        <div className="flex justify-center max-w-xl mx-auto mb-12">
          <Input
            type="text"
            placeholder="Search for the category of service you offer"
            className="rounded-l-md border-r-0 bg-[#1f1f1f] placeholder:text-gray-400"
          />
          <Button className="rounded-l-none bg-yellow-400 text-black hover:bg-yellow-300">
            🔍
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden bg-[#111] border border-gray-800 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={400}
                height={300}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-sm font-medium text-white text-center">
                {category.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
