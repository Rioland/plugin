/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Share2, Pencil, Star, Bookmark, PlusCircleIcon, Trash, EditIcon } from "lucide-react";
import { useState, useEffect } from "react";
import MyModal from "@/components/ui/MyModal";
import AddExperienceForm from "./Components/AddExperienceForm";
import SellerSkills from "@/components/onboarding/SellerSkills";
import { toast, Toaster } from "sonner";
import MySkills from "./Components/MySkill";
import { createClient } from "@supabase/supabase-js";
import Swal from "sweetalert2";
import UpdateExperienceForm from "./Components/UpdateExperienceForm";
import PluginNavbar from "../Components/NavBar";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Function to fetch user profile and related data
async function fetchAndReturnUserProfile() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("No user logged in");

  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .select("id, first_name, last_name, email, avatar_url")
    .eq("id", user.id)
    .single();

  if (profileError) throw profileError;

  const { data: experiences, error: expError } = await supabase
    .from("experiences")
    .select("*")
    .eq("user_id", user.id);

  if (expError) throw expError;

  const { data: educations, error: eduError } = await supabase
    .from("educations")
    .select("*")
    .eq("user_id", user.id);

  if (eduError) throw eduError;

  const { data: awards, error: awardError } = await supabase
    .from("awards")
    .select("*")
    .eq("user_id", user.id);

  if (awardError) throw awardError;

  return {
    ...profileData,
    experiences: experiences || [],
    educations: educations || [],
    awards: awards || [],
  };
}

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    id: null,
    first_name: "",
    last_name: "",
    email: "",
    avatar_url: null,
    experiences: [],
    educations: [],
    awards: [],
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [addSkill, setAddSkill] = useState(false);
  const [addExperience, setAddExperience] = useState(false);
  const [addAward, setAddAward] = useState(false);
  const [addEducation, setAddEducation] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [preview, setPreview] = useState(null);
  const [updateExperience, setUpdateExperience] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Fetch profile on component mount
  useEffect(() => {
    async function loadProfile() {
      try {
        const profileData = await fetchAndReturnUserProfile();
        if (profileData && profileData.id) {
          setProfile(profileData);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Failed to load profile");
      }
    }
    loadProfile();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    if (!selectedFile) return toast.error("Please select an image first!");
    setUploading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("No user logged in");

      const fileExt = selectedFile.name.split(".").pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(fileName, selectedFile, {
          cacheControl: "3600",
          upsert: true,
        });

      if (error) throw error;

      const { data: { publicUrl } } = supabase.storage
        .from("avatars")
        .getPublicUrl(fileName);

      // Update profile with new avatar URL
      const { error: updateError } = await supabase
        .from("profiles")
        .update({ avatar_url: publicUrl })
        .eq("id", user.id);

      if (updateError) throw updateError;

      // Refresh profile
      const profileData = await fetchAndReturnUserProfile();
      if (profileData && profileData.id) {
        setProfile(profileData);
      }

      toast.success("Profile picture updated successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Upload error occurred");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id, type) => {
    try {
      const table = type === "experience" ? "experiences" : type === "education" ? "educations" : "awards";
      const { error } = await supabase
        .from(table)
        .delete()
        .eq("id", id);

      if (error) throw error;

      // Refresh profile
      const profileData = await fetchAndReturnUserProfile();
      if (profileData && profileData.id) {
        setProfile(profileData);
      }

      toast.success(`${type.charAt(0).toUpperCase() + type.slice(1)} deleted successfully!`);
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
      toast.error(`An error occurred while deleting ${type}`);
    }
  };

  return (
    <PluginNavbar>
      <div className="bg-[#0C0C0C] text-white p-4 md:p-10">
        <div className="w-full mx-auto">
          <div className="bg-[#141414] p-6 md:p-10 rounded-2xl border border-[#2A2A2A]">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-start my-5">
                  <div className="flex items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden">
                      <img
                        src={preview || profile.avatar_url || "/images/avatar.jpg"}
                        alt="User Avatar"
                        className="w-20 h-20 rounded-full object-cover border shadow"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handleImageChange}
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold">{profile.first_name} {profile.last_name}</h2>
                      <p className="text-sm text-gray-400">{profile.email}</p>
                    </div>
                  </div>
                  <div
                    className="p-2 bg-yellow-500 w-fit rounded h-fit ms-4 cursor-pointer hover:bg-transparent hover:border hover:border-yellow-500"
                    onClick={uploadImage}
                  >
                    <p>{uploading ? "Uploading..." : "Update Profile Picture"}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-transparent hover:text-yellow-500">
                  Saved Jobs
                </Button>
                <Button className="bg-yellow-500 text-black hover:bg-yellow-600">
                  See Profile Settings
                </Button>
              </div>
            </div>

            <Separator className="my-6 bg-[#2A2A2A]" />

            <div className="grid md:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="space-y-6">
                <div className="border border-[#2A2A2A] rounded-xl p-4">
                  <div className="text-sm text-gray-300 mb-1">Plugs:</div>
                  <div className="text-2xl font-bold">275</div>
                </div>

                <div className="border border-[#2A2A2A] rounded-xl p-4 space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Proposals and offers</p>
                    <div className="flex justify-between text-sm">
                      <span>Contract Offers</span>
                      <span>2</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Proposals</span>
                      <span>2</span>
                    </div>
                  </div>

                  <Separator className="bg-[#2A2A2A]" />

                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Profile Visibility</span>
                      <Button variant="link" className="text-yellow-500 px-0 h-auto text-sm">Edit</Button>
                    </div>
                    <div className="mt-2">
                      <Progress value={70} className="h-2 bg-[#1C1C1C]" />
                      <p className="text-xs mt-1 text-gray-400">70%</p>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-400 space-y-2">
                  <p>Hours per week</p>
                  <p className="text-white">More than 30 hrs/week</p>
                  <p>Open to contract to hire</p>
                </div>
                <div className="text-sm text-gray-400 flex items-center justify-between">
                  <p>Experience</p>
                  <PlusCircleIcon className="hover:text-yellow-500 cursor-pointer" onClick={() => setAddExperience(true)} />
                </div>
                <div className="text-sm text-gray-400 flex items-center justify-between">
                  <p>Skills</p>
                  <PlusCircleIcon className="hover:text-yellow-500 cursor-pointer" onClick={() => setAddSkill(true)} />
                </div>
                <div className="text-sm text-gray-400 flex items-center justify-between">
                  <p>Education</p>
                  <PlusCircleIcon className="hover:text-yellow-500 cursor-pointer" onClick={() => setAddEducation(true)} />
                </div>
                <div className="text-sm text-gray-400 flex items-center justify-between">
                  <p>Awards</p>
                  <PlusCircleIcon className="hover:text-yellow-500 cursor-pointer" onClick={() => setAddAward(true)} />
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-3 space-y-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-bold">Ui/Ux designer and Product developer</h2>
                    <p className="text-sm mt-2 text-gray-300">
                      I am a passionate UI/UX designer and product developer...{" "}
                      <Button variant="link" className="text-yellow-500 px-1 text-sm">more</Button>
                    </p>
                  </div>
                  <div className="text-right text-sm">
                    <p className="font-bold">$12.50/hr</p>
                    <div className="flex justify-end gap-2 mt-1 text-yellow-500">
                      <Pencil size={16} className="cursor-pointer" />
                      <Star size={16} className="cursor-pointer" />
                      <Bookmark size={16} />
                      <Share2 size={16} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Portfolio</h3>
                  <div className="flex gap-4 mb-2">
                    <span className="text-yellow-500 border-b border-yellow-500 pb-1 text-sm cursor-pointer">Published</span>
                    <span className="text-gray-400 text-sm cursor-pointer">Draft</span>
                  </div>
                  <div className="text-sm text-gray-400 border border-[#2A2A2A] p-4 rounded-xl">
                    Add a Project. Talent are hired 9x more often if theyve published a portfolio.
                  </div>
                </div>

                <div className="border-b border-[#2A2A2A] rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Work History</h3>
                  <div className="text-sm text-gray-200 space-y-2">
                    {profile.experiences.length === 0 ? (
                      <p>No Work Experience Added</p>
                    ) : (
                      profile.experiences.map((experience) => (
                        <div className="flex justify-between items-start py-4" key={experience.id}>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-500 text-sm">●</span>
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
                                    handleDelete(experience.id, "experience");
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

                <div className="border-b border-[#2A2A2A] rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Education History</h3>
                  <div className="text-sm text-gray-200 space-y-2">
                    {profile.educations.length === 0 ? (
                      <p>No Education Added</p>
                    ) : (
                      profile.educations.map((education) => (
                        <div className="flex justify-between items-start py-4" key={education.id}>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-500 text-sm">●</span>
                              <p>{education.title}</p>
                            </div>
                            <p className="text-gray-400 ml-4">
                              {education.from} | {education.start_year} - {education.end_year}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <EditIcon
                              width={20}
                              height={20}
                              className="text-yellow-500 cursor-pointer"
                              onClick={() => {
                                setUpdateExperience(education);
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
                                    handleDelete(education.id, "education");
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

                <div className="border-b border-[#2A2A2A] rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Award History</h3>
                  <div className="text-sm text-gray-200 space-y-2">
                    {profile.awards.length === 0 ? (
                      <p>No Awards Added</p>
                    ) : (
                      profile.awards.map((award) => (
                        <div className="flex justify-between items-start py-4" key={award.id}>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-yellow-500 text-sm">●</span>
                              <p>{award.title}</p>
                            </div>
                            <p className="text-gray-400 ml-4">
                              {award.from} | {award.start_year} - {award.end_year}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <EditIcon
                              width={20}
                              height={20}
                              className="text-yellow-500 cursor-pointer"
                              onClick={() => {
                                setUpdateExperience(award);
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
                                    handleDelete(award.id, "award");
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

                <div>
                  <MySkills cominprofile={profile} />
                </div>
              </div>
            </div>

            <Separator className="my-6 bg-[#2A2A2A]" />

            <div className="text-sm text-gray-400 bg-[#0F0F0F] border border-[#2A2A2A] rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="mb-2 text-white">Your project catalog</p>
                <p className="max-w-lg">
                  Projects are a new way to earn on Upwork that helps you do more of the work you love to do. Create project offerings that highlight your strengths and attract more clients.
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