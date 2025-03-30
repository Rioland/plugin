import { ApiBaseUrl, fetchAndStoreUserProfile } from '@/helper/functions';
import React, { useState } from 'react'
import { toast, Toaster } from 'sonner';
import { Button } from '../ui/button';
import Cookies from 'js-cookie';
export default function SetBio() {
          // bio
  const [biography, setBiography] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!biography.trim()) {
      toast.error('Biography cannot be empty');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${ApiBaseUrl}/seller/bio`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`, // Ensure auth token is included
        },
        body: JSON.stringify({ "bio": biography }),

      });

      const data = await response.json();

      if (response.ok) {
        if (data.success == false) {
          toast.error(data.message);
        } else {
          toast.success('Biography uploaded successfully');
          setBiography('');
          setOnboardingState('Skills');
          fetchAndStoreUserProfile()
        }
      } else {
        toast.error(data.message || 'Upload failed');
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred while uploading');
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
            Upload Image <i className="fal fa-arrow-right-long"></i>
          </Button>
        )}
        {/* <Button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          {loading ? 'Uploading...' : 'Upload Biography'}
        </Button> */}
      </div>
  )
}
function setOnboardingState(arg0: string) {
        throw new Error('Function not implemented.');
}

