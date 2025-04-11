'use client';
import React, { Fragment, useState } from 'react';
import { ChevronDown, HelpCircle, UploadCloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import PhoneInput from 'react-phone-number-input/input';
// import { PhoneInput } from 'react-international-phone';
const KYBVerificationForm = () => {
      
        return (
             <div>
                {localStorage. getItem('account_type')=='individual' ? <UnRegisterBusinessUi /> : <RegisterBusinessUi />}
             </div>

        );
};

export default KYBVerificationForm;




const UnRegisterBusinessUi=()=>{
        const [activeStep, setActiveStep] = useState(1);
        const [phone, setPhone] = useState('');
        // const [countryCode, setCountryCode] = useState('NG');
        // const [showDropdown, setShowDropdown] = useState(false);



        const [formData, setFormData] = useState({
                businessName: '',
                officeAddress: '',
                natureOfBusiness: '',
                proofOfID: null,
                proofOfAddress: null,
                otherDocs: null,
                declaration: false,
        });

        const handleChange = (e) => {
                const { name, type, checked, files, value } = e.target;
                setFormData((prev) => ({
                        ...prev,
                        [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value,
                }));
        };

        return(
                <div className='bg-black text-white  px-4  ' style={{ backgroundImage: '/images/Wrapper.png', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='flex justify-between items-center w-full  px-5 py-5 '>
                        <div className="">
                                <img src='/images/Logo-yellow.png' className=' h-9' />

                        </div>

                        <div className="">
                                <Button variant="outline" className="bg-white text-black text-lg font-medium px-4 py-2 rounded-md">
                                        Skip for now
                                </Button>
                        </div>
                </div>

                <div className="min-h-screen  px-6 py-10  bg-blend-color  w-full flex flex-col  md:flex-row gap-5 justify-center  " >
                        <div className="mb-8 w-full md:w-1/5  ">
                                <h2 className="text-xl font-semibold mb-4 md:text-center">KYB Verification</h2>
                                <div className="flex md:flex-col items-center  gap-4 ">
                                        <div className={`cursor-pointer flex items-center space-x-2 ${activeStep === 1 ? 'text-yellow-500' : 'text-gray-500'}`} onClick={() => setActiveStep(1)}>
                                                <div className={`w-6 h-6 flex items-center justify-center border ${activeStep === 1 ? 'border-yellow-500' : 'border-gray-500'} rounded-full`}>1</div>
                                                <span>Business details</span>
                                        </div>
                                        <div className={`flex items-center space-x-2 ${activeStep === 2 ? 'text-yellow-500' : 'text-gray-500 cursor-pointer'}`} onClick={() => setActiveStep(2)}>
                                                <div className={`w-6 h-6 flex items-center justify-center border ${activeStep === 2 ? 'border-yellow-500' : 'border-gray-500'} rounded-full cursor-pointer`}>2</div>
                                                <span>Contact details</span>
                                        </div>
                                </div>
                        </div>

                        {activeStep === 1 ?
                                <div className=" w-full md:w-2/3  mx-auto md:mx-0 p-8 rounded-lg">

                                        <div className="mb-8">
                                                <h3 className="text-lg text-white mb-2 ">Business details</h3>
                                                <p className='text-xs text-gray-400 mb-2'>Please provide details of your business below.</p>
                                                <div className='bg-gray-600 w-full  mb-4 mt-2' style={{ "height": "0.3px" }} />

                                                <div className="space-y-4 ">
                                                        <div>
                                                                <label className="text-xs text-gray-300 block mb-1">Business's legal name *</label>
                                                                <input
                                                                        type="text"
                                                                        name="businessName"
                                                                        value={formData.businessName}
                                                                        onChange={handleChange}
                                                                        placeholder="E.g ProFlix Studios"
                                                                        className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                                                                />
                                                        </div>

                                                        <div>
                                                                <label className="text-xs text-gray-300 block mb-1">Operating Business/Office Address</label>
                                                                <input
                                                                        type="text"
                                                                        name="officeAddress"
                                                                        value={formData.officeAddress}
                                                                        onChange={handleChange}
                                                                        placeholder="E.g 26, Justin Brown, Ikoyi, Lagos, Nigeria"
                                                                        className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                                                                />
                                                        </div>

                                                        <div>
                                                                <label className="text-xs text-gray-300 block mb-1">Nature of Business</label>
                                                                <textarea
                                                                        name="natureOfBusiness"
                                                                        value={formData.natureOfBusiness}
                                                                        onChange={handleChange}
                                                                        placeholder="Please provide a brief description of your business operations."
                                                                        className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500 h-28"
                                                                ></textarea>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="mb-8">
                                                <h3 className="text-lg text-white font-medium mb-4">Proof of Identification</h3>
                                                <p className="text-xs text-gray-400 mb-2">
                                                        Only an international Passport, NIN Slip, or Driver’s License is accepted. The document must be in good condition (not torn or damaged), clear in colour, unexpired, and fully visible with all corners intact.
                                                </p>
                                                <label className="w-full border border-gray-700 bg-[#1E1E1E] rounded-lg p-6 flex flex-col items-center text-lg text-gray-400 cursor-pointer hover:border-yellow-500">
                                                        <UploadCloud className="mb-2 text-yellow-500" />
                                                        Click to upload or drag and drop
                                                        <input type="file" name="proofOfID" className="hidden" onChange={handleChange} />
                                                        <p className="text-xs mt-1 text-gray-500">PDF, PNG or JPEG (max. 10MB)</p>
                                                </label>
                                        </div>

                                        <div className="mb-8">
                                                <h3 className="text-lg text-white font-medium mb-2">Proof of Address/Utility Bill</h3>
                                                <p className="text-xs text-gray-400 mb-2">
                                                        This can be a utility bill (electricity or water), bank statement, tax invoice, or any government-issued document issued within the last 3 months.
                                                </p>
                                                <label className="w-full border border-gray-700 bg-[#1E1E1E] rounded-lg p-6 flex flex-col items-center text-lg text-gray-400 cursor-pointer hover:border-yellow-500 mb-4">
                                                        <UploadCloud className="mb-2 text-yellow-500" />
                                                        Click to upload or drag and drop
                                                        <input type="file" name="proofOfAddress" className="hidden" onChange={handleChange} />
                                                        <p className="text-xs mt-1 text-gray-500">PDF, PNG or JPEG (max. 10MB)</p>
                                                </label>

                                                <label className="w-full border border-gray-700 bg-[#1E1E1E] rounded-lg p-6 flex flex-col items-center text-lg text-gray-400 cursor-pointer hover:border-yellow-500">
                                                        <UploadCloud className="mb-2 text-yellow-500" />
                                                        Click to upload or drag and drop
                                                        <input type="file" name="otherDocs" className="hidden" onChange={handleChange} />
                                                        <p className="text-xs mt-1 text-gray-500">PDF, PNG or JPEG (max. 10MB)</p>
                                                </label>
                                        </div>

                                        <div className="mb-6">
                                                <label className="flex items-start space-x-3 text-lg text-white">
                                                        <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} className="mt-1" />
                                                        <span>
                                                                By submitting this form, I confirm that the information provided is true, accurate, and complete. I also agree to promptly notify Plugin of any changes to the details submitted.
                                                        </span>
                                                </label>
                                        </div>

                                        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md" onClick={() => setActiveStep(2)}>
                                                Continue</button>


                                </div> :
                                (


                                        <div className="lg:w-2/3">
                                                <h3 className="text-lg font-semibold mb-2">Contact details</h3>
                                                <p className="text-lg text-gray-400 mb-6">
                                                        Enter your contact’s information below.
                                                </p>

                                                <form className="space-y-4">
                                                        <div>
                                                                <label className="text-lg font-medium">Contact name *</label>
                                                                <input
                                                                        type="text"
                                                                        placeholder="E.g Jeffrey Samuels"
                                                                        className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                                                />
                                                        </div>

                                                        <div>
                                                                <label className="text-lg font-medium">Contact phone number (with contry code )*</label>
                                                                <div className="mt-1 flex items-center gap-2">
                                                                        {/* <div className="bg-gray-900 border border-gray-700 rounded-md px-1 py-3 flex items-center flex-row w-1/14">
                                                                                🇳🇬 +234
                                                                        </div> */}
                                                                        <PhoneInput className='w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-lg'
                                                                                // defaultCountry="ng"
                                                                                value={phone}
                                                                                onChange={setPhone}
                                                                        />
                                                                        {/* <input
                                                                                type="tel"
                                                                                placeholder="812 345 6789"
                                                                                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                                                        /> */}
                                                                </div>
                                                        </div>

                                                        <div>
                                                                <label className="text-lg font-medium">Contact email address *</label>
                                                                <input
                                                                        type="email"
                                                                        placeholder="E.g jsamuels@proflix.io"
                                                                        className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                                                />
                                                        </div>

                                                        <div>
                                                                <label className="text-lg font-medium">Bank Verification Number (BVN) *</label>
                                                                <input
                                                                        type="text"
                                                                        placeholder="E.g 22356801434"
                                                                        className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                                                />
                                                        </div>

                                                        <div>
                                                                <label className="text-lg font-medium">National Identification Number (NIN) *</label>
                                                                <input
                                                                        type="text"
                                                                        placeholder="E.g 9934356801434"
                                                                        className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                                                />
                                                        </div>

                                                        <div className="flex justify-between mt-6 gap-4">
                                                                <button
                                                                        type="button"
                                                                        className="w-1/2 border border-yellow-400 text-yellow-400 py-3 rounded-md hover:bg-yellow-600/10 transition"
                                                                        onClick={() => setActiveStep(1)}
                                                                >
                                                                        Go back
                                                                </button>
                                                                <button
                                                                        type="submit"
                                                                        className="w-1/2 bg-yellow-400 text-black font-medium py-3 rounded-md hover:bg-yellow-500 transition"
                                                                >
                                                                        Submit
                                                                </button>
                                                        </div>
                                                </form>
                                        </div>
                                )}



                </div>


        </div>
        );
}







const RegisterBusinessUi=()=>{
        const [activeStep, setActiveStep] = useState(1);
        const [phone, setPhone] = useState('');
        // const [countryCode, setCountryCode] = useState('NG');
        // const [showDropdown, setShowDropdown] = useState(false);



        const [formData, setFormData] = useState({
                businessName: '',
                officeAddress: '',
                natureOfBusiness: '',
                proofOfID: null,
                proofOfAddress: null,
                otherDocs: null,
                declaration: false,
        });

        const handleChange = (e) => {
                const { name, type, checked, files, value } = e.target;
                setFormData((prev) => ({
                        ...prev,
                        [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value,
                }));
        };

        return(
                <div className='bg-black text-white  px-4  ' style={{ backgroundImage: '/images/Wrapper.png', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='flex justify-between items-center w-full  px-5 py-5 '>
                        <div className="">
                                <img src='/images/Logo-yellow.png' className=' h-9' />

                        </div>

                        <div className="">
                                <Button variant="outline" className="bg-white text-black text-lg font-medium px-4 py-2 rounded-md">
                                        Skip for now
                                </Button>
                        </div>
                </div>

                <div className="min-h-screen  px-6 py-10  bg-blend-color  w-full flex flex-col  md:flex-row gap-5 justify-center  " >
                        <div className="mb-8 w-full md:w-1/5  ">
                                <h2 className="text-xl font-semibold mb-4 md:text-center">KYB Verification</h2>
                                <div className="flex md:flex-col items-center  gap-4 ">
                                        <div className={`cursor-pointer flex items-center space-x-2 ${activeStep === 1 ? 'text-yellow-500' : 'text-gray-500'}`} onClick={() => setActiveStep(1)}>
                                                <div className={`w-6 h-6 flex items-center justify-center border ${activeStep === 1 ? 'border-yellow-500' : 'border-gray-500'} rounded-full`}>1</div>
                                                <span>Business details</span>
                                        </div>
                                        <div className={`flex items-center space-x-2 ${activeStep === 2 ? 'text-yellow-500' : 'text-gray-500 cursor-pointer'}`} onClick={() => setActiveStep(2)}>
                                                <div className={`w-6 h-6 flex items-center justify-center border ${activeStep === 2 ? 'border-yellow-500' : 'border-gray-500'} rounded-full cursor-pointer`}>2</div>
                                                <span>Contact details</span>
                                        </div>
                                </div>
                        </div>

                        {activeStep === 1 ?
                                <div className=" w-full md:w-2/3  mx-auto md:mx-0 p-8 rounded-lg">

                                        <div className="mb-8">
                                                <h3 className="text-lg text-white mb-2 ">Business details</h3>
                                                <p className='text-xs text-gray-400 mb-2'>Please provide details of your business below.</p>
                                                <div className='bg-gray-600 w-full  mb-4 mt-2' style={{ "height": "0.3px" }} />

                                                <div className="space-y-4 ">
                                                        <div>
                                                                <label className="text-xs text-gray-300 block mb-1">Business's legal name *</label>
                                                                <input
                                                                        type="text"
                                                                        name="businessName"
                                                                        value={formData.businessName}
                                                                        onChange={handleChange}
                                                                        placeholder="E.g ProFlix Studios"
                                                                        className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                                                                />
                                                        </div>

                                                        <div>
                                                                <label className="text-xs text-gray-300 block mb-1">Operating Business/Office Address</label>
                                                                <input
                                                                        type="text"
                                                                        name="officeAddress"
                                                                        value={formData.officeAddress}
                                                                        onChange={handleChange}
                                                                        placeholder="E.g 26, Justin Brown, Ikoyi, Lagos, Nigeria"
                                                                        className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                                                                />
                                                        </div>

                                                        <div>
                                                                <label className="text-xs text-gray-300 block mb-1">Nature of Business</label>
                                                                <textarea
                                                                        name="natureOfBusiness"
                                                                        value={formData.natureOfBusiness}
                                                                        onChange={handleChange}
                                                                        placeholder="Please provide a brief description of your business operations."
                                                                        className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500 h-28"
                                                                ></textarea>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="mb-8">
                                                <h3 className="text-lg text-white font-medium mb-4">Proof of Identification</h3>
                                                <p className="text-xs text-gray-400 mb-2">
                                                        Only an international Passport, NIN Slip, or Driver’s License is accepted. The document must be in good condition (not torn or damaged), clear in colour, unexpired, and fully visible with all corners intact.
                                                </p>
                                                <label className="w-full border border-gray-700 bg-[#1E1E1E] rounded-lg p-6 flex flex-col items-center text-lg text-gray-400 cursor-pointer hover:border-yellow-500">
                                                        <UploadCloud className="mb-2 text-yellow-500" />
                                                        Click to upload or drag and drop
                                                        <input type="file" name="proofOfID" className="hidden" onChange={handleChange} />
                                                        <p className="text-xs mt-1 text-gray-500">PDF, PNG or JPEG (max. 10MB)</p>
                                                </label>
                                        </div>

                                        <div className="mb-8">
                                                <h3 className="text-lg text-white font-medium mb-2">Proof of Address/Utility Bill</h3>
                                                <p className="text-xs text-gray-400 mb-2">
                                                        This can be a utility bill (electricity or water), bank statement, tax invoice, or any government-issued document issued within the last 3 months.
                                                </p>
                                                <label className="w-full border border-gray-700 bg-[#1E1E1E] rounded-lg p-6 flex flex-col items-center text-lg text-gray-400 cursor-pointer hover:border-yellow-500 mb-4">
                                                        <UploadCloud className="mb-2 text-yellow-500" />
                                                        Click to upload or drag and drop
                                                        <input type="file" name="proofOfAddress" className="hidden" onChange={handleChange} />
                                                        <p className="text-xs mt-1 text-gray-500">PDF, PNG or JPEG (max. 10MB)</p>
                                                </label>

                                                <label className="w-full border border-gray-700 bg-[#1E1E1E] rounded-lg p-6 flex flex-col items-center text-lg text-gray-400 cursor-pointer hover:border-yellow-500">
                                                        <UploadCloud className="mb-2 text-yellow-500" />
                                                        Click to upload or drag and drop
                                                        <input type="file" name="otherDocs" className="hidden" onChange={handleChange} />
                                                        <p className="text-xs mt-1 text-gray-500">PDF, PNG or JPEG (max. 10MB)</p>
                                                </label>
                                        </div>

                                        <div className="mb-6">
                                                <label className="flex items-start space-x-3 text-lg text-white">
                                                        <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} className="mt-1" />
                                                        <span>
                                                                By submitting this form, I confirm that the information provided is true, accurate, and complete. I also agree to promptly notify Plugin of any changes to the details submitted.
                                                        </span>
                                                </label>
                                        </div>

                                        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md" onClick={() => setActiveStep(2)}>
                                                Continue</button>


                                </div> :
                                (


                                        <div className="lg:w-2/3">
                                                <h3 className="text-lg font-semibold mb-2">Contact details</h3>
                                                <p className="text-lg text-gray-400 mb-6">
                                                        Enter your contact’s information below.
                                                </p>

                                                <form className="space-y-4">
                                                        <div>
                                                                <label className="text-lg font-medium">Contact name *</label>
                                                                <input
                                                                        type="text"
                                                                        placeholder="E.g Jeffrey Samuels"
                                                                        className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                                                />
                                                        </div>

                                                        <div>
                                                                <label className="text-lg font-medium">Contact phone number (with contry code )*</label>
                                                                <div className="mt-1 flex items-center gap-2">
                                                                        {/* <div className="bg-gray-900 border border-gray-700 rounded-md px-1 py-3 flex items-center flex-row w-1/14">
                                                                                🇳🇬 +234
                                                                        </div> */}
                                                                        <PhoneInput className='w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-lg'
                                                                                // defaultCountry="ng"
                                                                                value={phone}
                                                                                onChange={setPhone}
                                                                        />
                                                                        {/* <input
                                                                                type="tel"
                                                                                placeholder="812 345 6789"
                                                                                className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                                                        /> */}
                                                                </div>
                                                        </div>

                                                        <div>
                                                                <label className="text-lg font-medium">Contact email address *</label>
                                                                <input
                                                                        type="email"
                                                                        placeholder="E.g jsamuels@proflix.io"
                                                                        className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                                                />
                                                        </div>

                                                        <div>
                                                                <label className="text-lg font-medium">Bank Verification Number (BVN) *</label>
                                                                <input
                                                                        type="text"
                                                                        placeholder="E.g 22356801434"
                                                                        className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                                                />
                                                        </div>

                                                        <div>
                                                                <label className="text-lg font-medium">National Identification Number (NIN) *</label>
                                                                <input
                                                                        type="text"
                                                                        placeholder="E.g 9934356801434"
                                                                        className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                                                />
                                                        </div>

                                                        <div className="flex justify-between mt-6 gap-4">
                                                                <button
                                                                        type="button"
                                                                        className="w-1/2 border border-yellow-400 text-yellow-400 py-3 rounded-md hover:bg-yellow-600/10 transition"
                                                                        onClick={() => setActiveStep(1)}
                                                                >
                                                                        Go back
                                                                </button>
                                                                <button
                                                                        type="submit"
                                                                        className="w-1/2 bg-yellow-400 text-black font-medium py-3 rounded-md hover:bg-yellow-500 transition"
                                                                >
                                                                        Submit
                                                                </button>
                                                        </div>
                                                </form>
                                        </div>
                                )}



                </div>


        </div>
        );
}