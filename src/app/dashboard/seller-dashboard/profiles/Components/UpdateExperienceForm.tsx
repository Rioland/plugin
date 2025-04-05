'use client';
import { ApiBaseUrl } from "@/helper/functions";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";

interface UpdateExperienceFormProps {
  type: string;
  start_year: string;
  end_year: string;
  title: string;
  from: string;
  desc: string;
  id:number
}

const UpdateExperienceForm: React.FC<UpdateExperienceFormProps> = ({ type, start_year, end_year, title, from, desc,id }) => {

  const [loading, setLoading] = useState(false);
  const [experience, setExperience] = useState({
    start_year: start_year,
    end_year: end_year,
    title: title,
    from: from,
    desc: desc,
    type: type,
  });

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 90 }, (_, i) => currentYear - i); // last 50 years

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${ApiBaseUrl}/seller/credentials/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(experience),
      });

      const data = await response.json();
      if (data.status) {
        toast.success(` ${type === 'education' ? 'Education' : type === 'award' ? 'Award' : 'Experience'} updated successfully!`);
       
      } else {
        toast.error("Failed to add experience");
      }
    } catch (error) {
      toast.error("An error occurred while adding experience");
    }finally{
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Update {type === 'education' ? 'Education' : type === 'award' ? 'Award' : 'Experience'}
      </h2>

      <select name="start_year" value={experience.start_year} onChange={handleChange} className="border p-2 w-full mb-2 rounded" required>
        <option value="">Select Start Year</option>
        {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>

      <select name="end_year" value={experience.end_year} onChange={handleChange} className="border p-2 w-full mb-2 rounded" required>
        <option value="">Select End Year</option>
        {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>

      <input type="text" name="title" value={experience.title} onChange={handleChange} placeholder={` ${type === 'education' ? 'Education' : type === 'award' ? 'Award' : 'Experience'} Title`} className="border p-2 w-full mb-2 rounded" required />
      <input type="text" name="from" value={experience.from} onChange={handleChange} placeholder={`${type === 'education' ? 'School' :"Company"} Name`}  className="border p-2 w-full mb-2 rounded" required />
      <input type="hidden" name="type" value={type} />
      <textarea name="desc" value={experience.desc} onChange={handleChange} placeholder="Description" className="border p-2 w-full mb-2 rounded" required></textarea>

      {loading ? (
            <div className="flex items-center justify-center">
                  <i className="fa-solid fa-circle-notch animate-spin text-4xl"></i>
            </div>
            ) : <Button type="submit" className="w-full bg-yellow-500 py-6 mt-10 ">
             Submit<i className="fal fa-arrow-right-long"></i>
            </Button>}
      <Toaster position="top-center" />
    </form>
  );
};

export default UpdateExperienceForm;
