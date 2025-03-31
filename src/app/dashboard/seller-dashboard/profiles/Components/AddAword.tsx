import { ApiBaseUrl } from "@/helper/functions";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import Cookies from "js-cookie";

const AddAword = () => {
  const [experience, setExperience] = useState({
    startDate: "",
    endDate: "",
    title: "",
    companyName: "",
    description: "",
  });

  const handleChange = (e) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${ApiBaseUrl}/seller/add-experience`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(experience),
      });
      const data = await response.json();
      if (data.status) {
        toast.success("Experience added successfully!");
        setExperience({
          startDate: "",
          endDate: "",
          title: "",
          companyName: "",
          description: "",
        });
      } else {
        toast.error("Failed to add experience");
      }
    } catch (error) {
      toast.error("An error occurred while adding experience");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add Experience</h2>
      <input type="date" name="startDate" value={experience.startDate} onChange={handleChange} placeholder="Start Date" className="border p-2 w-full mb-2 rounded" required />
      <input type="date" name="endDate" value={experience.endDate} onChange={handleChange} placeholder="End Date" className="border p-2 w-full mb-2 rounded" required />
      <input type="text" name="title" value={experience.title} onChange={handleChange} placeholder="Experience Title" className="border p-2 w-full mb-2 rounded" required />
      <input type="text" name="companyName" value={experience.companyName} onChange={handleChange} placeholder="Company Name" className="border p-2 w-full mb-2 rounded" required />
      <textarea name="description" value={experience.description} onChange={handleChange} placeholder="Description" className="border p-2 w-full mb-2 rounded" required></textarea>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Submit</button>
      <Toaster position="top-center"  />
    </form>
  );
};

export default AddAword;