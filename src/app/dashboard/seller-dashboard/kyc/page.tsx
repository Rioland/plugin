'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ApiBaseUrl } from '@/helper/functions';
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { toast, Toaster } from 'sonner';
import Cookies from 'js-cookie';
import { useDropzone } from 'react-dropzone';

export default function page() {
        const [loading, setLoading] = useState(false);
        //   const [profile, setProfile] = useState(null);
        const user = Cookies.get("currentUser") as string;
        const currentUser = user ? JSON.parse(user) : null;
        console.log(currentUser);
        const [kycCurrentPage, setkycCurrentPage] = useState("start");


        return (
                <Fragment>
                        {kycCurrentPage=='start' ?<StartKc  onContinue={()=>setkycCurrentPage('level2')} /> :kycCurrentPage=='level2'?<UpgradeToleveltwo onContinue={()=>setkycCurrentPage('success')}  /> : <SuccefullKycUpload /> }
                        {/* <StartKc  /> */}
                        {/* <SuccefullKycUpload /> */}
                        {/* <UpgradeToleveltwo /> */}
                </Fragment>
        )
}

interface StartKcProps {
        onContinue?: () => void
}
const StartKc: React.FC<StartKcProps> = ({ onContinue }) => {
'use client'
        return (<div>
                <h1 className='text-center text-4xl  font-semibold  py-8 text-blue-950'>KYC Verification</h1>
                <p className='text-center text-lg text-gray-600 md:w-1/2 mx-auto pb-12'>To comply with regulation each participant will have to go through indentity verification (KYC/AML) to prevent fraud causes. Please, complete our fast and secure verification process to participate in our token sale.</p>

                <Card className='w-full md:w-1/2 md:mx-auto py-12 px-12'>
                        <div className='w-fit border-1 border-gray-300 p-8 rounded-full mx-auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-12">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                </svg>

                        </div>
                        <p className='text-center text-lg text-gray-600'>You have not submitted your necessary documents to verify your identity. In order to purchase our tokens, please verify your identity.</p>
                        {/*  */}
                        <Button className="w-fit bg-yellow-500 py-6 mt-10 mx-auto  " onClick={onContinue}>
                                Click here to complete your kyc
                        </Button>
                </Card>
                <Toaster position="top-center" />
        </div>);
}

const UpgradeToleveltwo :React.FC<StartKcProps>= ({onContinue}) => {
        'use client'
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
                                                        onClick={onContinue}
                                                        className="w-full bg-yellow-500 py-6 mt-10"
                                                      >
                                                        Proceed to Verification <i className="fal fa-arrow-right-long"></i>
                                                      </Button>
                                                    )}
                                </CardContent>
                        </Card>
                        <Toaster position="top-center" />
                </div>
        );
}

interface SuccefullKycUploadProps {
        onContinue?: () => void
}
const SuccefullKycUpload: React.FC<SuccefullKycUploadProps> = ({ onContinue }) => {
'use client'
        return (<div>
                <h1 className='text-center text-4xl  font-semibold  py-8 text-blue-950'>Begin your ID-Verification</h1>
                <p className='text-center text-lg text-gray-600 md:w-1/2 mx-auto pb-12'>Verify your identity to participate in tokensale.</p>

                <Card className='w-full md:w-1/2 md:mx-auto py-12 px-12'>
                        <div className='w-fit border-2 border-green-500 p-8 rounded-full mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>


                        </div>
                        <p className='text-center text-lg text-gray-600'>You have not submitted your necessary documents to verify your identity. In order to purchase our tokens, please verify your identity.</p>
                        {/*  */}
                        <Button className="w-fit bg-yellow-500 py-6 mt-10 mx-auto  " onClick={onContinue}>
                                CBack to Profile
                        </Button>
                </Card>
                <Toaster position="top-center" />
        </div>);
}