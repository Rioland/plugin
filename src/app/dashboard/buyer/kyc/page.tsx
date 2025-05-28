'use client'

import { toast, Toaster } from 'sonner';
import { ApiBaseUrl, fetchAndReturnUserProfile } from '@/helper/functions';
import Cookies from 'js-cookie';






import React, { useState } from 'react'
import { profile } from 'console';
import { UploadCloud } from 'lucide-react';

export default function page() {
        // const profile = useSelector((state: RootState) => (state.sellersProfileReducer));
        // const [activeStep, setActiveStep] = useState(1);
        const [activeStepList, setActiveStepList] = useState([1]);
        const [uploading, setUploading] = useState(false);
        const [verificationType, setVerificationType] = useState('nin');

        // const [date, setDate] = useState('08-11-2024');
        const [formData, setFormData] = useState({
                business_name: '',
                business_address: '',
                business_nature: '',
                proof_of_id: null,
                proof_of_address: null,
                other_documents: null,
                declaration: false,
                // phone_number:  profile.phone_number,
                // firstname: profile.firstname,
                // lastname: profile.lastname,
                type: verificationType,
                verification_number: null

        });


   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setUploading(true)

  const requiredFields = [
    'business_name',
    'business_address',
    'business_nature',
    'proof_of_id',
    'proof_of_address',
    'declaration',
    'phone_number',
    'firstname',
    'lastname',
    'type',
    'verification_number',
  ] as const

  type FieldKeys = typeof requiredFields[number]

  const missingFields = requiredFields.filter((key) => {
    const value = formData[key]

    return (
      value === null ||
      value === undefined ||
      value === '' ||
      (typeof value === 'boolean' && value === false)
    )
  })

  if (missingFields.length > 0) {
    toast.error(`Missing fields: ${missingFields.join(', ')}`)
    setUploading(false)
    return
  }

  try {
    // Step 1: Verify code
    const verifyData = {
      type: verificationType,
      code: formData.verification_number,
//       firstname: formData.firstname,
//       lastname: formData.lastname,
    }

    const verifyResponse = await fetch(`${ApiBaseUrl}/seller/kyb/verified`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
      body: JSON.stringify(verifyData),
    })

    const verifyResult = await verifyResponse.json()

    if (!verifyResponse.ok || verifyResult.status === false) {
      toast.error(verifyResult.message || 'Verification failed')
      setUploading(false)
      return
    }

    // Step 2: Submit full form data
    const body = new FormData()

    Object.entries(formData).forEach(([key, value]) => {
      if (
        value !== null &&
        value !== undefined &&
        value !== '' &&
        !(typeof value === 'boolean' && value === false)
      ) {
        if (value instanceof File || value instanceof Blob) {
          body.append(key, value)
        } else {
          body.append(key, value.toString())
        }
      }
    })

    const uploadResponse = await fetch(`${ApiBaseUrl}/seller/kyb/individual`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
      },
      body,
    })

    const uploadResult = await uploadResponse.json()

    if (!uploadResponse.ok || uploadResult.status === false) {
      toast.error(uploadResult.message || 'Upload failed')
    } else {
      toast.success('KYB form uploaded successfully!')
      const profile = await fetchAndReturnUserProfile()
//       if (profile) {
//         dispatch(updateSellersProfile(profile))
//       }
      console.log('Upload success:', uploadResult)
      window.location.href = '/dashboard/seller'
    }

  } catch (error) {
    toast.error('An unexpected error occurred. Please try again.')
    console.error('Submission error:', error)
  } finally {
    setUploading(false)
  }
}

        const handleChange = (e) => {
                const { name, type, checked, files, value } = e.target;
                const updatedValue =
                        type === 'file'
                                ? files[0]
                                : type === 'checkbox'
                                        ? checked
                                        : value;

                setFormData((prev) => {
                        const updatedForm = { ...prev, [name]: updatedValue };
                        console.log("Updated formData:", updatedForm); // ✅ logs the right data
                        return updatedForm;
                });
        };


        return (
                <form onSubmit={handleSubmit}>
                        <div className="min-h-screen bg-black text-white py-10 px-6 md:px-20">

                                {/* Left-side steps */}
                                <Toaster position='top-center' />
                                <div className="flex flex-col md:flex-row gap-10">
                                        <aside className="md:w-1/4 mb-6">
                                                <h2 className="text-xl font-semibold mb-6">KYB Verification</h2>
                                                <ol className="space-y-4 text-sm text-gray-400">
                                                        <li className={`flex items-center space-x-2 text-yellow-500`} onClick={() => setActiveStepList([1])} >
                                                                <div className={`w-5 h-5 rounded-full ${activeStepList.length >= 1 ? 'bg-yellow-500' : ''} ${activeStepList.length >= 1 ? 'text-black' : 'text-yellow-500'} ${activeStepList.length >= 1 ? '' : 'border border-yellow-500'}  flex items-center justify-center text-xs font-bold`}>1</div>
                                                                <span>Business details</span>
                                                        </li>
                                                        <li className="flex items-center space-x-2 text-yellow-500" onClick={() => setActiveStepList([1, 2])}>
                                                                <div className={`w-5 h-5 rounded-full ${activeStepList.length >= 2 ? 'bg-yellow-500' : ''} ${activeStepList.length >= 2 ? 'text-black' : 'text-yellow-500'}  ${activeStepList.length >= 2 ? '' : 'border border-yellow-500'}  flex items-center justify-center text-xs font-bold`}>2</div>
                                                                <span>Contact details</span>
                                                        </li>

                                                </ol>
                                        </aside>

                                        {/* Right-side form */}

                                        {activeStepList.length === 1 ?
                                                <div className=" w-full md:w-2/3  mx-auto md:mx-0 p-8 rounded-lg">

                                                        <div className="mb-8">
                                                                <h3 className="text-lg text-white mb-2 ">Business details</h3>
                                                                <p className='text-sm text-gray-400 mb-2'>Please provide details of your business below.</p>
                                                                <div className='bg-gray-600 w-full  mb-4 mt-2' style={{ "height": "0.3px" }} />

                                                                <div className="space-y-4 ">
                                                                        <div>
                                                                                <label className="text-sm text-gray-300 block mb-1">Business's legal name *</label>
                                                                                <input
                                                                                        type="text"
                                                                                        name="business_name"
                                                                                        value={formData.business_name}
                                                                                        onChange={handleChange}
                                                                                        placeholder="E.g ProFlix Studios"
                                                                                        className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                                                                                />
                                                                        </div>

                                                                        <div>
                                                                                <label className="text-sm text-gray-300 block mb-1">Operating Business/Office Address</label>
                                                                                <input
                                                                                        type="text"
                                                                                        name="business_address"
                                                                                        value={formData.business_address}
                                                                                        onChange={handleChange}
                                                                                        placeholder="E.g 26, Justin Brown, Ikoyi, Lagos, Nigeria"
                                                                                        className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                                                                                />
                                                                        </div>

                                                                        <div>
                                                                                <label className="text-sm text-gray-300 block mb-1">Nature of Business</label>
                                                                                <textarea
                                                                                        name="business_nature"
                                                                                        value={formData.business_nature}
                                                                                        onChange={handleChange}
                                                                                        placeholder="Please provide a brief description of your business operations."
                                                                                        className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500 h-28"
                                                                                ></textarea>
                                                                        </div>
                                                                </div>
                                                        </div>

                                                        <div className="mb-8">
                                                                <h3 className="text-lg text-white font-medium mb-4">Proof of Identification</h3>
                                                                <p className="text-sm text-gray-400 mb-2">
                                                                        Only an international Passport, NIN Slip, or Driver&apos;s License is accepted. The document must be in good condition (not torn or damaged), clear in colour, unexpired, and fully visible with all corners intact.
                                                                </p>
                                                                <label className="w-full border border-gray-700 bg-[#1E1E1E] rounded-lg p-6 flex flex-col items-center text-lg text-gray-400 cursor-pointer hover:border-yellow-500">
                                                                        <UploadCloud className="mb-2 text-yellow-500" />
                                                                        Click to upload or drag and drop
                                                                        <input type="file" name="proof_of_id" className="hidden" onChange={handleChange} />
                                                                        <p className="text-sm mt-1 text-gray-500">PDF, PNG or JPEG (max. 10MB)</p>
                                                                </label>
                                                                {formData.proof_of_id && (
                                                                        <p className="text-xl text-yellow-300 mt-2 border p-2 border-yellow-200 rounded">Selected file: {formData.proof_of_id.name}</p>
                                                                )}
                                                        </div>

                                                        <div className="mb-8">
                                                                <h3 className="text-lg text-white font-medium mb-2">Proof of Address/Utility Bill</h3>
                                                                <p className="text-sm text-gray-400 mb-2">
                                                                        This can be a utility bill (electricity or water), bank statement, tax invoice, or any government-issued document issued within the last 3 months.
                                                                </p>
                                                                <label className="w-full border border-gray-700 bg-[#1E1E1E] rounded-lg p-6 flex flex-col items-center text-lg text-gray-400 cursor-pointer hover:border-yellow-500 mb-4">
                                                                        <UploadCloud className="mb-2 text-yellow-500" />
                                                                        Click to upload or drag and drop
                                                                        <input type="file" name="proof_of_address" className="hidden" onChange={handleChange} />
                                                                        <p className="text-sm mt-1 text-gray-500">PDF, PNG or JPEG (max. 10MB)</p>
                                                                </label>
                                                                {formData.proof_of_address && (
                                                                        <p className="text-xl  text-yellow-300 mt-2 border p-2 border-yellow-200 rounded">Selected file: {formData.proof_of_address.name}</p>
                                                                )}

                                                        </div>
                                                        <div className="mb-8">
                                                                {/* <h3 className="text-lg text-white font-medium mb-2">Proof of Address/Utility Bill</h3> */}
                                                                <p className="text-sm text-gray-400 mb-2">
                                                                        Any other relevant documents (licenses, certificates, etc.)
                                                                </p>


                                                                <label className="w-full border border-gray-700 bg-[#1E1E1E] rounded-lg p-6 flex flex-col items-center text-lg text-gray-400 cursor-pointer hover:border-yellow-500">
                                                                        <UploadCloud className="mb-2 text-yellow-500" />
                                                                        Click to upload or drag and drop
                                                                        <input type="file" name="other_documents" className="hidden" onChange={handleChange} />
                                                                        <p className="text-sm mt-1 text-gray-500">PDF, PNG or JPEG (max. 10MB)</p>
                                                                </label>
                                                                {formData.other_documents && (
                                                                        <p className="text-xl  text-yellow-300 mt-2 border p-2 border-yellow-200 rounded">Selected file: {formData.other_documents.name}</p>
                                                                )}

                                                        </div>

                                                        <div className="mb-6">
                                                                <label className="flex items-start space-x-3 text-lg text-white">
                                                                        <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} className="mt-1" />
                                                                        <span>
                                                                                By submitting this form, I confirm that the information provided is true, accurate, and complete. I also agree to promptly notify Plugin of any changes to the details submitted.
                                                                        </span>
                                                                </label>
                                                        </div>

                                                        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md" onClick={() => setActiveStepList([1, 2])}>
                                                                Continue</button>


                                                </div> :
                                                (


                                                        <div className="lg:w-2/3">
                                                                <h3 className="text-lg font-semibold mb-2">Contact details</h3>
                                                                <p className="text-lg text-gray-400 mb-6">
                                                                        Enter your contact&apos;s information below.
                                                                </p>

                                                                <div className="space-y-4">
                                                                        <div>
                                                                                <label className="text-lg font-medium">FirstName <span className="text-red-600">*</span></label>
                                                                                <input
                                                                                        type="text"
                                                                                        placeholder="E.g Jeffrey Samuels"
                                                                                        name='firstname'
                                                                                        onChange={handleChange}
                                                                                        defaultValue={`${profile.firstname}`}

                                                                                        className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                                                                />
                                                                        </div>
                                                                        <div>
                                                                                <label className="text-lg font-medium">LastName <span className="text-red-600">*</span></label>
                                                                                <input
                                                                                        type="text"
                                                                                        placeholder="E.g Jeffrey Samuels"
                                                                                        onChange={handleChange}
                                                                                        name='lastname'
                                                                                        defaultValue={`${profile.lastname}`}

                                                                                        className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                                                                />
                                                                        </div>

                                                                        <div>
                                                                                <label className="text-lg font-medium">Contact phone number (with contry code )<span className="text-red-600">*</span></label>
                                                                                <div className="mt-1 flex items-center gap-2">


                                                                                        <input
                                                                                                type="tel"
                                                                                                placeholder="812 345 6789"
                                                                                                name='phone_number'
                                                                                                readOnly
                                                                                                defaultValue={profile.phone_number}
                                                                                                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                                                                        />
                                                                                </div>
                                                                        </div>

                                                                        <div>
                                                                                <label className="text-lg font-medium">Contact email address <span className="text-red-600">*</span></label>
                                                                                <input
                                                                                        type="email"
                                                                                        placeholder="E.g jsamuels@proflix.io"
                                                                                        readOnly
                                                                                        defaultValue={profile.email}
                                                                                        onChange={handleChange}
                                                                                        className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                                                                />
                                                                        </div>
                                                                        <div>
                                                                                <label className="text-lg font-medium">Please select your verification Method<span className="text-red-600">*</span></label>
                                                                                <select className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg" onChange={e => setVerificationType(e.target.value)} name='type'>
                                                                                        {/* <option value="">Select Option</option> */}
                                                                                        <option value="nin">National Identification Number (NIN) </option>
                                                                                        <option value="bvn">Bank Verification Number (BVN) </option>
                                                                                </select>
                                                                        </div>

                                                                        {verificationType === 'nin' ? <div>
                                                                                <label className="text-lg font-medium">National Identification Number (NIN) *</label>
                                                                                <input
                                                                                        type="text"
                                                                                        placeholder="E.g 9934356801434"
                                                                                        name='verification_number'
                                                                                        onChange={handleChange}
                                                                                        className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                                                                />
                                                                        </div> : <div>
                                                                                <label className="text-lg font-medium">Bank Verification Number (BVN) *</label>
                                                                                <input
                                                                                        type="text"
                                                                                        placeholder="E.g 22356801434"
                                                                                        name='verification_number'

                                                                                        onChange={handleChange}
                                                                                        className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                                                                />
                                                                        </div>}




                                                                        <div className="flex justify-between mt-6 gap-4">
                                                                                <button
                                                                                        type="button"
                                                                                        className="w-1/2 border border-yellow-400 text-yellow-400 py-3 rounded-md hover:bg-yellow-600/10 transition"
                                                                                        onClick={() => setActiveStepList([1])}
                                                                                >
                                                                                        Go back
                                                                                </button>

                                                                                {uploading ? <img src="/images/preloader.gif" className="mx-auto" /> : <button
                                                                                        type="submit"
                                                                                        onClick={() => { setActiveStepList([1, 2, 3]) }}
                                                                                        className="w-1/2 bg-yellow-400 text-black font-medium py-3 rounded-md hover:bg-yellow-500 transition"
                                                                                >
                                                                                        Submit
                                                                                </button>}

                                                                        </div>
                                                                </div>
                                                        </div>
                                                )}



                                </div>
                        </div>

                </form>

        );
}
