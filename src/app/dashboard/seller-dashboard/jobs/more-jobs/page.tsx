

import AppbarItem from "../../Components/AppbarOne";
import JobCard from "../job-search/components/JobCard";


const jobs = [1, 2, 3];

export default function JobListPage() {
  return (
   <AppbarItem text="More Jobs">
     <div className="min-h-screen bg-black text-white px-6 md:px-24 py-10">
      <header className="flex items-center justify-end mb-6">
        {/* <Link href="#" className="text-yellow-500 text-sm font-medium hover:underline">
          &lt; return to search
        </Link> */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-[#1E1E1E] border border-gray-700 text-white px-4 py-2 rounded-full text-sm pl-10 focus:outline-none"
          />
          <div className="absolute top-2.5 left-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z" />
            </svg>
          </div>
        </div>
      </header>
    <section className="flex-1 space-y-6">
          {[1, 2, 3].map((_, idx) => (
            <JobCard key={idx} />
          ))}
        </section>
      {/* <div className="space-y-6">
        {jobs.map((_, i) => (
          <Card key={i} className="bg-[#111] border border-gray-800">
            <CardContent className="p-6">
              <p className="text-xs text-gray-400 mb-2">Posted 2hrs ago</p>
              <h2 className="text-xl font-semibold mb-4 text-white">
                UI/UX Designer Needed for Fintech Company
              </h2>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-300 mb-4">
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
                  <ThumbsDown className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-yellow-500 hover:text-yellow-600 border border-yellow-500">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </div>
     </AppbarItem>
  );
} 
