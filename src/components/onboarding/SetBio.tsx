"use client";

import React, { useState } from "react";
import { toast, Toaster } from "sonner";
import { Button } from "../ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { fetchAndReturnUserProfile } from "@/helper/functions";
import { useSellerProfile } from "@/stores/useSellerProfile";

export default function SetBio() {
  const setProfile = useSellerProfile((state) => state.setProfile);
  const [biography, setBiography] = useState("");
  const [loading, setLoading] = useState(false);

  // Supabase client
  const supabase = createClientComponentClient();

  const handleSubmit = async () => {
    if (!biography.trim()) {
      toast.error("Biography cannot be empty");
      return;
    }

    setLoading(true);

    try {
      // Get the current logged-in user
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        toast.error("You must be logged in to update your bio.");
        setLoading(false);
        return;
      }

      // Update the bio in the profiles table
      const { data, error } = await supabase
        .from("profiles")
        .update({ bio: biography })
        .eq("id", user.id)
        .select();

      if (error) {
        console.error(error);
        toast.error("Failed to update biography.");
      } else {
        toast.success("Biography updated successfully!");
        setBiography("");

        // Refresh profile in store
        const profile = await fetchAndReturnUserProfile();
        if (profile && profile.id) {
          setProfile(profile);
        }

        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg max-w-lg mx-auto bg-white shadow-md">
      <Toaster position="top-center" />
      <h2 className="text-xl font-bold mb-2">Upload Your Biography</h2>
      <textarea
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={5}
        placeholder="Write your biography here..."
        value={biography}
        onChange={(e) => setBiography(e.target.value)}
      />
      {loading ? (
        <div className="flex items-center justify-center">
          <i className="fa-solid fa-circle-notch animate-spin text-4xl"></i>
        </div>
      ) : (
        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-yellow-500 py-6 mt-10"
        >
          Update My Biography <i className="fal fa-arrow-right-long"></i>
        </Button>
      )}
    </div>
  );
}
