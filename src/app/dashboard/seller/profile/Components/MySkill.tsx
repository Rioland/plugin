"use client"
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/clients";


interface MySkillProps {
  skills: any[];
  userId: string;
}

const MySkills: React.FC<MySkillProps> = ({ skills, userId }) => {
  const supabase = createClient();
  const [skillsList, setSkillsList] = useState(skills);
  const [selectedSkills, setSelectedSkills] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  // Select or Deselect Skills
  const handleSkillClick = (skillId: number) => {
    setSelectedSkills((prev) =>
      prev.includes(skillId)
        ? prev.filter((id) => id !== skillId)
        : [...prev, skillId]
    );
  };

  // Remove Skills from Supabase
  const removeSkills = async () => {
    if (selectedSkills.length === 0) {
      toast.error("Select at least one skill to remove.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase
        .from("user_skills") // <-- Your linking table between users & skills
        .delete()
        .eq("user_id", userId)
        .in("skill_id", selectedSkills);

      if (error) throw error;

      // Update local state after successful deletion
      setSkillsList((prev) =>
        prev.filter((skill) => !selectedSkills.includes(skill.id))
      );
      setSelectedSkills([]);

      toast.success("Skill(s) removed successfully!");
    } catch (error: any) {
      console.error("Supabase error:", error);
      toast.error(error.message || "An error occurred while removing skills.");
    } finally {
      setLoading(false);
    }
  };

  if (!skillsList) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Skills</h2>

      {/* Skills List */}
      <div className="flex flex-wrap gap-2 mt-2">
        {skillsList.map((skill) => (
          <Badge
            variant="secondary"
            key={skill.id}
            onClick={() => handleSkillClick(skill.id)}
            className={`cursor-pointer px-3 py-1 rounded-full text-sm ${
              selectedSkills.includes(skill.id)
                ? "bg-red-500 text-white"
                : ""
            }`}
          >
            {skill.name}
          </Badge>
        ))}
      </div>

      {/* Remove Button */}
      {selectedSkills.length > 0 && (
        <button
          onClick={removeSkills}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition mt-6"
          disabled={loading}
        >
          {loading ? "Removing..." : "Remove Selected Skills"}
        </button>
      )}

      <Toaster position="top-center" />
    </div>
  );
};

export default MySkills;
