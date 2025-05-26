"use client"
import { Button } from "@/components/ui/button";

import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Share2, Pencil, Star, Bookmark, PlusCircleIcon, Trash, EditIcon } from "lucide-react";

import { RootState } from "@/stores/userStore";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import MyModal from "@/components/ui/MyModal";
import AddExperienceForm from "./Components/AddExperienceForm";
import SellerSkills from "@/components/onboarding/SellerSkills";
import { toast, Toaster } from "sonner";
import MySkills from "./Components/MySkill";
import { ApiBaseUrl, fetchAndReturnUserProfile } from "@/helper/functions";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { updateSellersProfile } from "@/states/sellersProfileSlice";
import { Experience } from "@/types/SellersProfileType";
import UpdateExperienceForm from "./Components/UpdateExperienceForm";
import PluginNavbar from "../Components/NavBar";

export default function ProfilePage() {
  const profile = useSelector((state: RootState) => state.sellersProfileReducer)
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const [addSkill, setAddSkill] = useState(false);
  const [addExperience, setAddExperience] = useState(false);
  const [addAward, setAddAward] = useState(false);
  const [addEducation, setAddEducation] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [preview, setPreview] = useState(null);
  const [updateExperience, setUpdateExperience] = useState<Experience | null>(null)
  const [uploading, setUploading] = useState(false);
  const dispatcher = useDispatch();
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

    const formData = new FormData();
    formData.append("profile_picture", selectedFile);

    try {
      const response = await fetch(`${ApiBaseUrl}/seller/upload-profile-picture`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`, // Keep only Authorization header

        },
      });

      const data = await response.json();
      if (data.status) {
         const profile = await fetchAndReturnUserProfile();
                       console.log(profile);
                       if (profile && profile.id) {
                         dispatcher(updateSellersProfile(profile));
                       }

        toast.success("Profile picture updated successfully!");
      } else {
        toast.error("Upload failed!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Upload error occurred");
    } finally {
      setUploading(false);
    }
  };

  console.log(profile)
  return (
    <PluginNavbar   >
      <div className=" bg-[#0C0C0C] text-white p-4 md:p-10">
        <div className="w-full mx-auto">
          <div className="bg-[#141414] p-6 md:p-10 rounded-2xl border border-[#2A2A2A]">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-start  my-5">

                  <div className="flex items-center">
                    <div className=" relative w-24 h-24 rounded-full overflow-hidden ">
                      <img
                        src={preview || profile.profile_picture || "/images/avatar.jpg"}
                        // {profile.profile_picture || "https://picsum.photos/200/300"}
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
                      <h2 className="text-xl font-semibold">{profile.firstname} {profile.lastname}</h2>
                      <p className="text-sm text-gray-400">{profile.email}</p>
                    </div>

                  </div>




                  <div className=" p-2 bg-yellow-500 w-fit  rounded h-fit ms-4 cursor-pointer hover:bg-transparent hover:border hover:border-yellow-500" onClick={uploadImage}>
                    <p> {uploading ? "Uploading..." : "Update Profile Picture"}</p>
                  </div>




                </div>
                {/* <Image
                  src={profile.profile_picture ?? "/images/avatar.jpg"}
                  width={60}
                  height={60}
                  alt="avatar"
                  className="rounded-full"
                /> */}

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
                      I am a passionate UI/UX designer and product developer... <Button variant="link" className="text-yellow-500 px-1 text-sm">more</Button>
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
                {/* ************************************************ */}
                <div className="border-b border-[#2A2A2A] rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Work History</h3>
                  <div className="text-sm text-gray-200 space-y-2">


                    {profile.experiences.length === 0 ? <p>No Work Experience Added</p> : profile.experiences.map((experience, index) => (
                      <div className="flex justify-between items-start py-4" key={experience.id}>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-yellow-500 text-sm">●</span>
                            <p>{experience.title}</p>
                          </div>
                          <p className="text-gray-400 ml-4">{experience.from}| {experience.start_year} - {experience.end_year}</p>
                        </div>

                        <div className="flex items-center gap-4">
                          <EditIcon width={20} height={20} className="text-yellow-500 cursor-pointer" onClick={() => {
                            setUpdateExperience(experience)
                            setShowUpdateModal(true)
                          }} />
                          <Trash width={20} height={20} className="text-red-400" onClick={() => Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!"
                          }).then((result) => {
                            if (result.isConfirmed) {

                              fetch(`${ApiBaseUrl}/seller/credentials/${experience.id}/delete`, {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization: `Bearer ${Cookies.get("token")}`,
                                },
                              })
                                .then((res) => res.json())
                                .then(async (data) => {
                                  if (data.status) {
                                    const profile = await fetchAndReturnUserProfile();
                                    console.log(profile);
                                    if (profile && profile.id) {
                                      dispatch(updateSellersProfile(profile));
                                    }
                                    // setExperiences((prev) =>
                                    //         prev.filter((item) => item.id !== exp.id)
                                    // )

                                    toast.success("Experience deleted successfully!")
                                  } else {
                                    toast.error("Failed to delete experience")

                                  }
                                })
                                .catch((error) => {
                                  toast.error("An error occurred while deleting experience")
                                  console.error("Error deleting experience:", error)
                                })


                            }
                          })
                          } />
                        </div>


                      </div>
                    ))


                    }

                  </div>
                </div>
                {/* ************************************************ */}
                <div className="border-b border-[#2A2A2A] rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Education History</h3>
                  <div className="text-sm text-gray-200 space-y-2">


                    {profile.educations.length === 0 ? <p>No Work Experience Added</p> : profile.educations.map((educations, index) => (
                      <div className="flex justify-between items-start py-4" key={educations.id}>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-yellow-500 text-sm">●</span>
                            <p>{educations.title}</p>
                          </div>
                          <p className="text-gray-400 ml-4">{educations.from}| {educations.start_year} - {educations.end_year}</p>
                        </div>

                        <div className="flex items-center gap-4">
                          <EditIcon width={20} height={20} className="text-yellow-500 cursor-pointer" onClick={() => {
                            setUpdateExperience(educations)
                            setShowUpdateModal(true)
                          }} />
                          <Trash width={20} height={20} className="text-red-400" onClick={() => Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!"
                          }).then((result) => {
                            if (result.isConfirmed) {

                              fetch(`${ApiBaseUrl}/seller/credentials/${educations.id}/delete`, {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization: `Bearer ${Cookies.get("token")}`,
                                },
                              })
                                .then((res) => res.json())
                                .then(async (data) => {
                                  if (data.status) {
                                    const profile = await fetchAndReturnUserProfile();
                                    console.log(profile);
                                    if (profile && profile.id) {
                                      dispatch(updateSellersProfile(profile));
                                    }
                                    // setExperiences((prev) =>
                                    //         prev.filter((item) => item.id !== exp.id)
                                    // )

                                    toast.success("Experience deleted successfully!")
                                  } else {
                                    toast.error("Failed to delete experience")

                                  }
                                })
                                .catch((error) => {
                                  toast.error("An error occurred while deleting experience")
                                  console.error("Error deleting experience:", error)
                                })


                            }
                          })
                          } />
                        </div>


                      </div>
                    ))


                    }

                  </div>
                </div>
                {/* ************************************************ */}

                <div className="border-b border-[#2A2A2A] rounded-xl p-4">
                  <h3 className="font-semibold mb-2">Award History</h3>
                  <div className="text-sm text-gray-200 space-y-2">


                    {profile.awards.length === 0 ? <p>No Work Experience Added</p> : profile.awards.map((awards, index) => (
                      <div className="flex justify-between items-start py-4" key={awards.id}>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-yellow-500 text-sm">●</span>
                            <p>{awards.title}</p>
                          </div>
                          <p className="text-gray-400 ml-4">{awards.from}| {awards.start_year} - {awards.end_year}</p>
                        </div>

                        <div className="flex items-center gap-4">
                          <EditIcon width={20} height={20} className="text-yellow-500 cursor-pointer" onClick={() => {
                            setUpdateExperience(awards)
                            setShowUpdateModal(true)
                          }} />
                          <Trash width={20} height={20} className="text-red-400" onClick={() => Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!"
                          }).then((result) => {
                            if (result.isConfirmed) {

                              fetch(`${ApiBaseUrl}/seller/credentials/${awards.id}/delete`, {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization: `Bearer ${Cookies.get("token")}`,
                                },
                              })
                                .then((res) => res.json())
                                .then(async (data) => {
                                  if (data.status) {
                                    const profile = await fetchAndReturnUserProfile();
                                    console.log(profile);
                                    if (profile && profile.id) {
                                      dispatch(updateSellersProfile(profile));
                                    }
                                    // setExperiences((prev) =>
                                    //         prev.filter((item) => item.id !== exp.id)
                                    // )

                                    toast.success("Experience deleted successfully!")
                                  } else {
                                    toast.error("Failed to delete experience")

                                  }
                                })
                                .catch((error) => {
                                  toast.error("An error occurred while deleting experience")
                                  console.error("Error deleting experience:", error)
                                })


                            }
                          })
                          } />
                        </div>


                      </div>
                    ))


                    }

                  </div>
                </div>

                {/* ************************************************ */}


                <div>

                  <MySkills cominprofile={profile} />
                  {/* <Badge variant="secondary">UX/UI</Badge> */}
                  {/* <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">UX/UI</Badge>
                  <Badge variant="secondary">Graphics</Badge>
                  <Badge variant="secondary">App development</Badge>
                  <Badge variant="secondary">Web Design</Badge>
                </div> */}
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
      {/* others */}
      <MyModal isOpen={showUpdateModal} onClose={() => {
        setShowUpdateModal(false)
        setUpdateExperience(null)
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
      <MyModal isOpen={addSkill} onClose={() => { setAddSkill(false) }}>
        <SellerSkills />
      </MyModal>
      <MyModal isOpen={addExperience} onClose={() => { setAddExperience(false) }}>
        <AddExperienceForm type="experience" />
      </MyModal>
      <MyModal isOpen={addAward} onClose={() => { setAddAward(false) }}>
        <AddExperienceForm type="award" />
      </MyModal>
      <MyModal isOpen={addEducation} onClose={() => { setAddEducation(false) }}>
        <AddExperienceForm type="education" />
      </MyModal>
      <Toaster position="top-center" />
    </PluginNavbar>
  );
}
