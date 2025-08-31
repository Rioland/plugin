import React, { useEffect, useState } from "react";
import { ApiBaseUrl, fetchAndReturnUserProfile } from "@/helper/functions";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";
import Cookies from 'js-cookie';


const SellerSkills = () => {
  const [categories, setCategories] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  // const setProfile = useSellerProfile((state) => state.setProfile);
  useEffect(() => {
    fetch(`${ApiBaseUrl}/categories`, {
      headers: {
        'Content-Type': 'application/json',

        Authorization: `Bearer ${Cookies.get("token")}`, // Keep only this header
      }
    })
      .then((res) => res.json())
      .then((data) => setCategories(data.data))
      .catch(() => toast.error("Failed to load skills"));
  }, []);
  

  const handleSelectSkill = (skillId, categoryId) => {
    setSelectedSkills((prev) => {
      const exists = prev.find((s) => s.skillId === skillId);
      return exists ? prev.filter((s) => s.skillId !== skillId) : [...prev, { skillId, categoryId }];
    });
  };

  const handleSubmit = async () => {
    if (selectedSkills.length === 0) {
      return toast.error("Please select at least one skill");
    }

    const skills = selectedSkills.map((s) => s.skillId);
    // const categoryIds = selectedSkills.map((s) => s.categoryId);

    setLoading(true);
    try {
      const response = await fetch(`${ApiBaseUrl}/seller/set-skills`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`, // Keep only this header

        },
        body: JSON.stringify({ skills,
          //  category_id: categoryIds
           }),
      });
      const data = await response.json();
      if (data.status) {
        toast.success("Skills updated successfully");
          const profile = await fetchAndReturnUserProfile();
                if (profile && profile.id) {
                  setProfile(profile);
                }
        window.location.reload();
      } else {
        toast.error("Failed to update skills");
      }
    } catch (error) {
      toast.error("Error updating skills");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-2 text-white">Select Your Skills</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        <Toaster position="top-center" className='bg-amber-200' />
        
        {categories.map((category) => (
          <div key={category.id} className="mb-3">
            <h3 className="font-medium">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <button
                  key={skill.id}
                  className={`px-3 py-1 border rounded-md cursor-pointer transition-all ${selectedSkills.some((s) => s.skillId === skill.id)
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-500"
                    }`}
                  onClick={() => handleSelectSkill(skill.id, skill.category_id)}
                >
                  {skill.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button onClick={handleSubmit} disabled={loading} className='bg-yellow-500 py-6 mt-10 hover:border hover:border-yellow-500 hover:bg-transparent hover:text-yellow-500'>
        {loading ? "Updating..." : "Update Skills"}
      </Button>
    </div>
  );
};

export default SellerSkills;
