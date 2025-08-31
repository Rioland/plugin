/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/clients";


interface AddExperienceFormProps {
  type: string;
}

const AddExperienceForm: React.FC<AddExperienceFormProps> = ({ type }) => {
  const [loading, setLoading] = useState(false);
  const [experience, setExperience] = useState({
    start_year: "",
    end_year: "",
    title: "",
    from: "",
    description: "",
    type: type,
  });

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 90 }, (_, i) => currentYear - i);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const supabase = createClient();

      // Get the logged-in user
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        toast.error("You must be logged in to add experience");
        setLoading(false);
        return;
      }

      // Insert into experiences table
      const { error } = await supabase.from("user_experiences").insert([
        {
          user_id: user.id,
          start_year: experience.start_year,
          end_year: experience.end_year,
          title: experience.title,
          from: experience.from,
          description: experience.description,
          type: experience.type,
        },
      ]);

      if (error) {
        console.error("Supabase insert error:", error.message);
        toast.error("Failed to add experience");
      } else {
        toast.success(
          `${
            type === "education"
              ? "Education"
              : type === "award"
              ? "Award"
              : "Experience"
          } added successfully!`
        );

        setExperience({
          start_year: "",
          end_year: "",
          title: "",
          from: "",
          description: "",
          type: type,
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while adding experience");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black p-6 rounded-lg shadow-2xl max-w-lg mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4 text-white">
        Add{" "}
        {type === "education"
          ? "Education"
          : type === "award"
          ? "Award"
          : "Experience"}
      </h2>

      <select
        name="start_year"
        value={experience.start_year}
        onChange={handleChange}
        className="border p-2 w-full mb-2 rounded text-white bg-black"
        required
      >
        <option value="">Select Start Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <select
        name="end_year"
        value={experience.end_year}
        onChange={handleChange}
        className="border p-2 w-full mb-2 rounded text-white bg-black"
        required
      >
        <option value="">Select End Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="title"
        value={experience.title}
        onChange={handleChange}
        placeholder={` ${
          type === "education"
            ? "Education"
            : type === "award"
            ? "Award"
            : "Experience"
        } Title`}
        className="border p-2 w-full mb-2 rounded text-white bg-black"
        required
      />

      <input
        type="text"
        name="from"
        value={experience.from}
        onChange={handleChange}
        placeholder={`${
          type === "education" ? "School" : "Company"
        } Name`}
        className="border p-2 w-full mb-2 rounded text-white bg-black"
        required
      />

      <input type="hidden" name="type" value={type} />

      <textarea
        name="description"
        value={experience.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 w-full mb-2 rounded text-white bg-black"
        required
      ></textarea>

      {loading ? (
        <div className="flex items-center justify-center">
          <img src="/images/preloader.gif" alt="loading" />
        </div>
      ) : (
        <Button
          type="submit"
          className="w-full bg-yellow-500 py-6 mt-10 hover:border hover:border-yellow-500 hover:bg-transparent hover:text-yellow-500"
        >
          Submit <i className="fal fa-arrow-right-long"></i>
        </Button>
      )}
      <Toaster position="top-center" />
    </form>
  );
};

export default AddExperienceForm;
