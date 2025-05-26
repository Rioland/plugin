import { useState } from "react";
import Cookies from "js-cookie";
import { toast, Toaster } from "sonner";
import { ApiBaseUrl, fetchAndReturnUserProfile } from "@/helper/functions";
import { Badge } from "@/components/ui/badge";
import { updateSellersProfile } from "@/states/sellersProfileSlice";
import { useDispatch } from "react-redux";
interface MySkillProps {
  cominprofile: any;
}
const MySkills: React.FC<MySkillProps> = ({ cominprofile }) => {
  const [profile, setProfile] = useState(cominprofile);
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const dispatcher = useDispatch();

  const handleSkillClick = (skillId: number) => {
    setSelectedSkills((prev) =>
      prev.includes(skillId) ? prev.filter((id) => id !== skillId) : [...prev, skillId]
    );
  };

  const removeSkills = async () => {
    if (selectedSkills.length === 0) {
      toast.error("Select at least one skill to remove.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${ApiBaseUrl}/seller/remove-skills`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify({ skills: selectedSkills }),
      });

      const data = await response.json();

      if (data.status) {
        toast.success("Skill(s) removed successfully!");
        const profile = await fetchAndReturnUserProfile();
        if (profile && profile.id) {
          dispatcher(updateSellersProfile(profile));
        }
        setProfile((prev) => ({
          ...prev,
          skills: prev.skills.filter((skill) => !selectedSkills.includes(skill.id)),
        }));
        setSelectedSkills([]);
        setLoading(false);
      } else {
        toast.error("Failed to remove skills.");
        setLoading(false);
      }
    } catch (error) {
      toast.error("An error occurred while removing skills.");
      setLoading(false);
    }
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-2">Skills</h2>

      {/* Skill List */}
      <div className="flex flex-wrap gap-2 mt-2">
        {profile.skills.map((skill) => (
          <Badge variant="secondary" key={skill.id} onClick={() => handleSkillClick(skill.id)} className={`cursor-pointer px-3 py-1 rounded-full text-sm ${selectedSkills.includes(skill.id) ? "bg-red-500 text-white" : ""
            }`}>  {skill.name}</Badge>

        ))}
      </div>

      {/* Remove Button */}
      {selectedSkills.length > 0 && (
        <button
          onClick={removeSkills}
          className=" bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition mt-6"
        >
          {loading ? 'Uploading......' : " Remove Selected Skills"}
        </button>
      )}
      <Toaster position="top-center" />
    </div>
  );
};

export default MySkills;
