/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Share2, Pencil, Star, Bookmark, PlusCircleIcon, Trash, EditIcon, Briefcase, ArrowRight, CircleUser, PencilIcon } from "lucide-react";
import MyModal from "@/components/ui/MyModal";
import AddExperienceForm from "./Components/AddExperienceForm";
import SellerSkills from "@/components/onboarding/SellerSkills";
import { toast, Toaster } from "sonner";
import Swal from "sweetalert2";
import UpdateExperienceForm from "./Components/UpdateExperienceForm";
import PluginNavbar from "../Components/NavBar";
import { createClient } from "@/lib/supabase/clients";

// Create Supabase client
const supabase = createClient();

// Fetch all profile data (profile + experiences + awards + educations)
const fetchProfileData = async () => {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) throw new Error("User not authenticated");

  // Fetch profile
  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();
  if (profileError) throw profileError;

  // Fetch all user experiences
  const { data: experiencesData, error: expError } = await supabase
    .from("user_experiences")
    .select("*")
    .eq("user_id", user.id);
  if (expError) throw expError;

  // Separate experiences by type
  const experiences = experiencesData.filter((exp) => exp.type === "experience");
  const awards = experiencesData.filter((exp) => exp.type === "award");
  const educations = experiencesData.filter((exp) => exp.type === "education");

  return {
    ...profile,
    experiences,
    awards,
    educations,
  };
};

export default function ProfilePage() {
  const queryClient = useQueryClient();
  const [addSkill, setAddSkill] = useState(false);
  const [addExperience, setAddExperience] = useState(false);
  const [addAward, setAddAward] = useState(false);
  const [addEducation, setAddEducation] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateExperience, setUpdateExperience] = useState(null);
  const [profileCompletion] = useState(70);
  // ✅ Fetch everything using React Query
  const {
    data: profile,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfileData,
    staleTime: 1000 * 60 * 5, // cache for 5 mins
  });

  if (isLoading) {
    return (
      <PluginNavbar>
        <div className="text-center py-20 text-white">Loading profile...</div>
      </PluginNavbar>
    );
  }

  if (isError) {
    return (
      <PluginNavbar>
        <div className="text-center py-20 text-red-500">
          Failed to fetch profile data. Please try again.
        </div>
      </PluginNavbar>
    );
  }

  return (
    <PluginNavbar>
      <div className=" text-white p-4 md:p-10">
        <div className="w-full mx-auto">
          <div className=" p-6 md:p-10 rounded-2xl border border-[#2A2A2A]">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-start my-5">
                  <div className="flex items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
                      <img
                        src={profile?.avatar_url || "/images/avatar.jpg"}
                        alt="User Avatar"
                        className="w-20 h-20 rounded-full object-cover border shadow"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{profile?.full_name}</h2>
                      <p className="text-lg text-gray-400">{profile?.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="border-2 font-bold border-yellow-500 text-yellow-500 hover:bg-transparent hover:text-yellow-500 outline px-2 py-2 rounded-md flex items-center gap-2 cursor-pointer">
                  Saved Jobs
                </div>
                <div className="bg-yellow-500 text-black hover:bg-yellow-600 px-2 py-2 rounded-md font-bold">
                  See Profile Settings
                </div>
              </div>
            </div>

            <Separator className="my-6 bg-[#2A2A2A]" />

            <div className="grid md:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="space-y-6 border-r border-[#2A2A2A] pr-6">
                {/* plugs */}
                <div className="w-full p-4 rounded-[15px]  outline-1 outline-offset-[-1px] outline-[#c2c4cf]/20 inline-flex flex-col justify-start items-start gap-3">
                  <div className="w-full inline-flex justify-center items-center gap-2.5">
                    <img src="/images/logo-single-yellow.png" alt="Plugs Icon" className="w-6 h-6" />
                    <div className="flex-1 justify-start"><span className="text-white text-base font-normal font-['Outfit'] leading-normal">Plugs:     </span><span className="text-[#e3a325] text-base font-normal font-['Outfit'] underline leading-normal">{profile.plugs ?? 0}</span></div>
                  </div>
                </div>

                <div className="w-full p-4  rounded-[15px]  outline-1 outline-offset-[-1px] outline-[#c2c4cf]/20 inline-flex flex-col justify-start items-start gap-3">
                  <div className="w-full inline-flex justify-center items-center gap-2.5">
                    <Briefcase className="w-6 h-6" color="orange" />
                    <div className="flex-1 justify-start text-white text-base font-normal font-['Outfit'] leading-normal">Proposals and offers</div>
                    <div className="w-6 h-6 relative overflow-hidden">
                      <ArrowRight className="w-6 h-6" color="orange" />
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-start gap-[135px]">
                    <div className="w-28 justify-start text-white text-lg font-normal font-['Outfit'] leading-normal">Contract Offers</div>
                    <div className="w-[13px] justify-start text-white text-sm font-normal font-['Outfit'] leading-normal">2</div>
                  </div>
                  <div className="w-full inline-flex justify-between items-start gap-[135px]">
                    <div className="w-28 justify-start text-white text-lg font-normal font-['Outfit'] leading-normal">Proposals</div>
                    <div className="w-[13px] justify-start text-white text-sm font-normal font-['Outfit'] leading-normal">2</div>
                  </div>
                </div>


                <div className=" border border-gray-700 rounded-xl p-4">
                  <h3 className="font-medium">Profile Completion</h3>
                  <div className="mt-2 flex justify-between text-sm">
                    <span className="text-gray-400">Profile Visibility</span>
                    <button className="text-yellow-400 underline">Edit</button>
                  </div>
                  <div className="relative w-full bg-gray-800 rounded-full h-2 mt-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${profileCompletion}%` }}
                    ></div>
                  </div>
                  <p className="text-right text-xs mt-1 text-gray-400">{profileCompletion}%</p>
                  <button className="mt-3 text-yellow-400 underline text-sm">
                    Complete your profile
                  </button>
                </div>


                <div className="text-lg text-gray-400 flex items-center justify-between">
                  <p>Experience</p>
                  <PlusCircleIcon className="hover:text-yellow-500 cursor-pointer" onClick={() => setAddExperience(true)} />
                </div>
                <div className="text-lg text-gray-400 flex items-center justify-between">
                  <p>Skills</p>
                  <PlusCircleIcon className="hover:text-yellow-500 cursor-pointer" onClick={() => setAddSkill(true)} />
                </div>
                <div className="text-lg text-gray-400 flex items-center justify-between">
                  <p>Education</p>
                  <PlusCircleIcon className="hover:text-yellow-500 cursor-pointer" onClick={() => setAddEducation(true)} />
                </div>
                <div className="text-lg text-gray-400 flex items-center justify-between">
                  <p>Awards</p>
                  <PlusCircleIcon className="hover:text-yellow-500 cursor-pointer" onClick={() => setAddAward(true)} />
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-3 space-y-8">

                <div className="w-full h-[344px]  border-r border-t border-b-[0.50px] border-[#c2c4cf]/20">
                  <div className="w-full  ">
                    <div className="flex flex-row justify-between items-center p-4 mb-4">
                      <div className="w-[498px] justify-start text-white text-[28px] font-normal font-['Outfit']">Ui/Ux designer and Product developer </div>
                      <div className="flex flex-row gap-2 ">
                        <div className="w-28 left-[-19px]  justify-start text-white text-xl font-normal font-['Outfit']">₦30,000/hr </div>
                        <PencilIcon className="hover:text-yellow-500 cursor-pointer" color="yellow" />
                      </div>

                    </div>

                    <div className="w-full flex flex-row justify-between items-start p-4">
                      <div className="w-11/12 h-[146px] justify-start">
                        <span className="text-white text-lg font-normal font-['Outfit'] line-clamp-5">
                          I am a passionate UI/UX designer and product developer dedicated to creating intuitive, user-centric digital experiences. With a keen eye for design and a problem-solving mindset, I specialize in crafting seamless interfaces and innovative products that enhance usability and engagement. My expertise spans user research, wireframing, prototyping, and front-end design, ensuring that every product I develop is both visually appealing and functionally efficient. Driven by a deep understanding of user behavior and emerging trends, I strive to bridge the gap........
                        </span>
                        <span className="text-[#e3a325] text-lg font-normal font-['Outfit']">more</span>
                      </div>
                      <PencilIcon className="hover:text-yellow-500 cursor-pointer" color="yellow" />
                    
                    </div>

                  </div>
                </div>
                {/* Work Experience */}
                <div className="border-b border-[#2A2A2A] rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Work History</h3>
                  <div className="text-lg text-gray-200 space-y-2">
                    {profile?.experiences?.length === 0 ? (
                      <p>No Work Experience Added</p>
                    ) : (
                      profile?.experiences?.map((experience) => (
                        <div className="flex justify-between items-start py-4" key={experience.id}>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-500 text-lg">●</span>
                              <p>{experience.title}</p>
                            </div>
                            <p className="text-gray-400 ml-4">
                              {experience.from} | {experience.start_year} - {experience.end_year}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <EditIcon
                              width={20}
                              height={20}
                              className="text-yellow-500 cursor-pointer"
                              onClick={() => {
                                setUpdateExperience(experience);
                                setShowUpdateModal(true);
                              }}
                            />
                            <Trash
                              width={20}
                              height={20}
                              className="text-red-400 cursor-pointer"
                              onClick={() =>
                                Swal.fire({
                                  title: "Are you sure?",
                                  text: "You won't be able to revert this!",
                                  icon: "warning",
                                  showCancelButton: true,
                                  confirmButtonColor: "#3085d6",
                                  cancelButtonColor: "#d33",
                                  confirmButtonText: "Yes, delete it!",
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    toast.success("Deleted successfully!");
                                    queryClient.invalidateQueries({ queryKey: ["profile"] });
                                  }
                                })
                              }
                            />
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Education */}
                <div className="border-b border-[#2A2A2A] rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Education History</h3>
                  <div className="text-lg text-gray-200 space-y-2">
                    {profile?.educations?.length === 0 ? (
                      <p>No Education Added</p>
                    ) : (
                      profile?.educations?.map((education) => (
                        <div className="flex justify-between items-start py-4" key={education.id}>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-500 text-lg">●</span>
                              <p>{education.title}</p>
                            </div>
                            <p className="text-gray-400 ml-4">
                              {education.from} | {education.start_year} - {education.end_year}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Awards */}
                <div className="border-b border-[#2A2A2A] rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Award History</h3>
                  <div className="text-lg text-gray-200 space-y-2">
                    {profile?.awards?.length === 0 ? (
                      <p>No Awards Added</p>
                    ) : (
                      profile?.awards?.map((award) => (
                        <div className="flex justify-between items-start py-4" key={award.id}>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-500 text-lg">●</span>
                              <p>{award.title}</p>
                            </div>
                            <p className="text-gray-400 ml-4">
                              {award.from} | {award.start_year} - {award.end_year}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-6 bg-[#2A2A2A]" />

            <div className="text-lg text-gray-400 bg-[#0F0F0F] border border-[#2A2A2A] rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="mb-2 text-white">Your project catalog</p>
                <p className="max-w-lg">
                  Projects are a new way to earn on Plugin that helps you do more of the work you love to do. Create project offerings that highlight your strengths and attract more clients.
                </p>
              </div>
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600 w-fit">
                Manage Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <MyModal isOpen={showUpdateModal} onClose={() => {
        setShowUpdateModal(false);
        setUpdateExperience(null);
      }}>
        {updateExperience && (
          <UpdateExperienceForm
            type={updateExperience.type}
            start_year={`${updateExperience.start_year}`}
            end_year={`${updateExperience.end_year}`}
            title={updateExperience.title}
            from={updateExperience.from}
            desc={updateExperience.desc}
            id={updateExperience.id}
          />
        )}
      </MyModal>
      <MyModal isOpen={addSkill} onClose={() => setAddSkill(false)}>
        <SellerSkills />
      </MyModal>
      <MyModal isOpen={addExperience} onClose={() => setAddExperience(false)}>
        <AddExperienceForm type="experience" />
      </MyModal>
      <MyModal isOpen={addAward} onClose={() => setAddAward(false)}>
        <AddExperienceForm type="award" />
      </MyModal>
      <MyModal isOpen={addEducation} onClose={() => setAddEducation(false)}>
        <AddExperienceForm type="education" />
      </MyModal>
      <Toaster position="top-center" />
    </PluginNavbar>
  );
}
