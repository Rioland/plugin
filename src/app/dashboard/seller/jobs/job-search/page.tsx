
import PluginNavbar from "../../Components/NavBar";
import JobCard from "@/app/dashboard/seller/jobs/components/JobCard";


import SidebarFilter from "../components/SidebarFilter";
import TopSearchBar from "../components/TopSearchBar";




export default function JobSearchPage() {
  return (
    <PluginNavbar >
  <main className="min-h-screen bg-black text-white p-4 md:p-8">
      <TopSearchBar />

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <aside className="w-full md:w-1/4">
          <SidebarFilter />
        </aside>
        <section className="flex-1 space-y-6">
          {[1, 2, 3].map((_, idx) => (
            <JobCard key={idx} />
          ))}
        </section>
      </div>
    </main>
    </PluginNavbar>
  
  );
}
