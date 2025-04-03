import { ApiBaseUrl, fetchAndStoreUserProfile } from '@/helper/functions';
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { toast, Toaster } from 'sonner'
import { Button } from '../ui/button';
import Cookies from 'js-cookie';


interface UpdateUserProfilePictureProps{
        // screen: string;
        onPrevious: () => void;
        // onNext: () => void;
        // onFinish: () => void;
  
}
const UploadProfilePicture:React.FC<UpdateUserProfilePictureProps>=({onPrevious})=> {
         const [image, setImage] = useState<File | null>(null);
          const [preview, setPreview] = useState<string | null>(null);
          const [uploading, setUploading] = useState(false);
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
                formData.append("profile_picture", image); // Ensure the field name matches what the backend expects
              
                try {
                  const response = await fetch(`${ApiBaseUrl}/seller/upload-profile-picture`, {
                    method: "POST",
                    body: formData,
                    headers: {
                      Authorization: `Bearer ${Cookies.get("token")}`, // Keep only this header
                    },
                  });
              
                  const data = await response.json();
              
                  if (!data.status) {
                    toast.error(data.message);
                  } else {
                    toast.success("Upload Successful!");
                  await  fetchAndStoreUserProfile();
                    window.location.reload();
                //     setOnboardingState('Bio');
                  }
                } catch (error) {
                  console.error(error);
                  toast.error("Upload Failed!");
                } finally {
                  setUploading(false);
                }
              };
              
  return(
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
      )
}
export default UploadProfilePicture;