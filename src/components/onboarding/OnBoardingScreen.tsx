import React, { useEffect } from 'react'
import { useCallback, useState } from "react";


import { useDropzone } from "react-dropzone";

import { ApiBaseUrl, fetchAndStoreUserProfile } from '@/helper/functions';
import { Button } from '../ui/button';
import { toast, Toaster } from "sonner"
import Cookies from 'js-cookie';
interface OnBoardingScreenProps{
  screen?: string;
  onNext?: () => void;
  onPrevious?: () => void;
}
const  OnBoardingScreen:React.FC<OnBoardingScreenProps>=({screen,onNext,onPrevious})=> {
  // const [headingText,setHeadingText]=useState('Lorem ipsum dolor sit amet consectetur adipisicing elit.')
  // const [bodyText,setBodyText]=useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos alias neque non! Porro soluta blanditiis impedit quisquam nemo.')
        const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [onboardingState,setOnboardingState] =useState(screen);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]; // Get the first file
    console.log(screen);
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Preview the image
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] }, // Accept only images
    multiple: false,
  });

  const uploadImage = async () => {
    if (!image) return toast.error("Please select an image first!");

    setUploading(true);

    const formData = new FormData();
    formData.append("image", image); // 'image' is the field name

    try {
      const response = await fetch(`${ApiBaseUrl}/seller/upload-profile-picture`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      toast.success("Upload Successful: " + data.url);
      fetchAndStoreUserProfile()
      setOnboardingState('Bio')
    } catch (error) {
      toast.error("Upload Failed!");
    } finally {
      setUploading(false);
    }
  };


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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "bio": biography}),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Biography uploaded successfully');
        setBiography('');
        setOnboardingState('Skills');
        fetchAndStoreUserProfile()
      } else {
        toast.error(data.message || 'Upload failed');
      }
    } catch (error) {
      toast.error('An error occurred while uploading');
    } finally {
      setLoading(false);
    }
  };

// skills up
const [categories, setCategories] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    fetch(`${ApiBaseUrl}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data.data))
      .catch(() => toast.error('Failed to fetch categories'));
  }, []);

  const toggleSkill = (skillId, categoryId) => {
    setSelectedSkills((prev) => {
      if (prev.some((skill) => skill.id === skillId)) {
        return prev.filter((skill) => skill.id !== skillId);
      }
      return [...prev, { id: skillId, category_id: categoryId }];
    });
  };


  const handleSubmitSkill = async () => {
    if (selectedSkills.length === 0) {
      return toast.error('Please select at least one skill');
    }

    setLoading(true);
    const skills = selectedSkills.map((s) => s.id);
    const categoryIds = [...new Set(selectedSkills.map((s) => s.category_id))];
    
    try {
      const response = await fetch(`${ApiBaseUrl}/seller/set-skills`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${Cookies.get('token')}`,
        },
        body: JSON.stringify({ skills, category_id: categoryIds }),
      });

      const data = await response.json();
      if (data.status) {
        toast.success('Skills updated successfully');
        fetchAndStoreUserProfile()
        onPrevious();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Failed to update skills');
    } finally {
      setLoading(false);
    }
  };





// 

  return (
    <>
      {onboardingState == 'ProfilePicture' ? (
        <section className='m-6'>
          <Toaster position="top-center" className='bg-amber-200' />
          <div>
            <h1 className='pb-5 text-xl font-bold'>{'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}</h1>
            <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos alias neque non! Porro soluta blanditiis impedit quisquam nemo.'}</p>
            <br />
          </div>
  
          <div className="flex flex-col items-center gap-4 p-6 border border-gray-300 rounded-lg">
            <div
              {...getRootProps()}
              className="w-64 h-40 border-2 border-dashed border-gray-500 flex items-center justify-center cursor-pointer relative mb-3"
            >
              <input {...getInputProps()} />
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="absolute inset-0 w-full h-full object-cover rounded-md"
                />
              ) : (
                <p className="text-center text-gray-500">
                  Drag & drop an image here, or click to select
                </p>
              )}
            </div>
  
            {uploading ? (
              <div className="flex items-center justify-center">
                <i className="fa-solid fa-circle-notch animate-spin text-4xl"></i>
              </div>
            ) : (
              <Button
                type="submit"
                onClick={uploadImage}
                className="w-full bg-yellow-500 py-6 mt-10"
              >
                Upload Image <i className="fal fa-arrow-right-long"></i>
              </Button>
            )}
          </div>
  
          <div className="flex items-center justify-end gap-4">
            <button className="px-4 py-2 mt-4 text-gray-500" onClick={onPrevious}>
              skip
            </button>
          </div>
        </section>
      ) : onboardingState =="Bio"?( <div className="p-4 border rounded-lg max-w-lg mx-auto bg-white shadow-md">
        <Toaster position="top-center" />
        <h2 className="text-xl font-bold mb-2">Upload Your Biography</h2>
        <textarea
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          placeholder="Write your biography here..."
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
        />
        <Button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          {loading ? 'Uploading...' : 'Upload Biography'}
        </Button>
      </div>) :  onboardingState=='Skills' ?(
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Select Your Skills</h2>
      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.id}>
            <h3 className="font-semibold mb-2">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => toggleSkill(skill.id, category.id)}
                  className={`px-3 py-1 border rounded-full text-sm cursor-pointer transition-all ${
                    selectedSkills.some((s) => s.id === skill.id)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200'
                  }`}
                >
                  {skill.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button
        onClick={handleSubmitSkill}
        className="mt-4 w-full"
        disabled={loading}
      >
        {loading ? 'Saving...' : 'Save Skills'}
      </Button>
    </div>
  ) :onboardingState=='kyc'?(<p></p>):<p>hgsahgjhs</p>  }
    </>
  );
  
}
export default OnBoardingScreen;


