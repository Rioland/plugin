 'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ApiBaseUrl, fetchAndStoreUserProfile } from "@/helper/functions";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast, Toaster } from 'sonner'
import Cookies from 'js-cookie';
 interface UpgradeToleveltwoProps {
        onContinue?: () => void
}
const UpgradeToleveltwo :React.FC<UpgradeToleveltwoProps>= ({onContinue}) => {
       
        const [selectedId, setSelectedId] = useState('passport')
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

        const uploadkycTierone = async (e) => {
                e.preventDefault();
                if (!image) return toast.error("Please select an image");
                if (!selectedId) return toast.error("Please select id type");
                setUploading(true)
                const formData = new FormData();
                formData.append("selfie_photo", image);
                formData.append("document_type", selectedId);
                formData.append("tier", '1');
                formData.append("document_file", image);

                try {
                        const response = await fetch(`${ApiBaseUrl}/seller/kyc/upload`, {
                            method: 'POST',
                            body: formData,
                            headers: {
                                    Authorization: `Bearer ${Cookies.get("token")}`, 
                            }
                        });
                        const data = await response.json();
                        
                        if (data.status) {
                            toast.success("KYC Submitted Successfully! waiting for Verification");
                            await fetchAndStoreUserProfile();
                            onContinue && onContinue();
                        } else {
                            toast.error("KYC Submission Failed!");
                        }
                    } catch (error) {
                            console.error(error);
                
                        toast.error("Error submitting KYC");
                    } finally {
                        setUploading(false);
                    }
              
        }

        return (
                <div>
                        <h1 className='text-center text-4xl  font-semibold  py-8 text-blue-950'>Begin your ID-Verification</h1>
                        <p className='text-center text-lg text-gray-600 md:w-1/2 mx-auto pb-12'>Verify your identity to participate in tokensale.</p>

                        <Card className='w-full md:w-1/2 md:mx-auto py-12 px-2'>
                                <CardHeader className='flex items-start justify-start border-b border-gray-400 py-2 mb'>
                                        {/* <p className='text-lg font-semibold pb-3'>Upgrading to level</p> */}
                                        <div className="rounded-full p-3 border-2 border-gray-400 font-bold text-xl w-fit ">02</div>
                                        <div className=' ms-3'>
                                                <h1 className='text-xl font-black text-blue-950 pb-2'> Document Upload</h1>
                                                <p className='text-gray-700 '>To verify your identity, please upload any of your document</p>
                                        </div>
                                </CardHeader>
                                <CardContent className='px-8'>
                                        <form onSubmit={uploadkycTierone}>
                                        <p className='text-gray-500  font-bold pb-6'>In order to complete, please upload any of the following personal document.</p>

                                        <div className='flex justify-center items-center gap-4 flex-col md:flex-row mb-5'>
                                                <div className={`flex  gap-2 border-2 rounded ${selectedId == 'passport' ? 'border-blue-500' : 'border-gray-400 cursor-pointer '} px-4 py-3 items-center w-full`} onClick={() => setSelectedId('passport')}>
                                                        <img src='/images/icon-passport-color.png' className='w-10 h-10' />
                                                        <p className={` font-bold text-gray-500 uppercase text-sm`}>Passport</p>

                                                </div>
                                                <div className={`flex  gap-2 border-2 rounded ${selectedId == 'nin' ? 'border-blue-500' : 'border-gray-400 cursor-pointer'} px-4 py-3 items-center w-full `} onClick={() => setSelectedId('nin')}>
                                                        <img src='/images/icon-passport-color.png' className='w-10 h-10' />
                                                        <p className={` font-bold text-gray-500 uppercase text-sm`}>National ID Card</p>

                                                </div>
                                                <div className={`flex  gap-2 border-2 rounded ${selectedId == 'dl' ? 'border-blue-500' : 'border-gray-400 cursor-pointer'} px-4 py-3 items-center w-full`} onClick={() => setSelectedId('dl')}>
                                                        <img src='/images/icon-passport-color.png' className='w-10 h-10' />
                                                        <p className={` font-bold text-gray-500 uppercase text-sm`}>Drivers License</p>

                                                </div>
                                        </div>
                                        <p className='text-lg font-semibold text-blue-950 pb-2'>To avoid delays when verifying account, Please make sure bellow:</p>
                                        <u className='pb-2'>
                                                <li className=' text-decoration-none pb-1'>Your documents are in the most recent and accurate format.</li>
                                                <li className=' text-decoration-none pb-1'>Your documents are clearly and legibly presented.</li>
                                                <li className=' text-decoration-none pb-1'>You are the actual owner of the documents.</li>
                                        </u>
                                        <p className='text-lg font-semibold text-blue-950 pb-2 pt-2'>Upload Here Your {selectedId == 'passport' ? 'Passport' : selectedId == 'dl' ? 'Driver\'s License' : 'National ID Card'}  Copy</p>

                                        <div className='flex justify-between items-center '>
                                                <div
                                                        {...getRootProps()}
                                                        className="w-full md:w-1/2 h-40 border-2 border-dashed border-gray-500 flex items-center justify-center cursor-pointer relative mb-3"
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

                                                <img src='/images/vector-licence.png' className=' hidden md:block w-50'  />
                                        </div>
                                          {uploading ? (
                                                      <div className="flex items-center justify-center">
                                                        <i className="fa-solid fa-circle-notch animate-spin text-4xl"></i>
                                                      </div>
                                                    ) : (
                                                      <Button
                                                        type="submit"
                                                        // onClick={uploadImage}
                                                        
                                                        className="w-full bg-yellow-500 py-6 mt-10"
                                                      >
                                                        Proceed to Verification <i className="fal fa-arrow-right-long"></i>
                                                      </Button>
                                                    )}
                                                    </form>
                                </CardContent>
                        </Card>
                        <Toaster position="top-center" />
                </div>
        );
}

export default UpgradeToleveltwo;