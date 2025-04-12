// 'use client';
// import React, { Fragment, useState } from 'react';
// import { ChevronDown, HelpCircle, UploadCloud } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import PhoneInput from 'react-phone-number-input/input';
// // import { PhoneInput } from 'react-international-phone';
// const KYBVerificationForm = () => {

//         return (
                // <div>
                //         {localStorage.getItem('account_type') == 'individual' ? <UnRegisterBusinessUi /> : <RegisterBusinessUi />}
                // </div>

//         );
// };

// export default KYBVerificationForm;




// const UnRegisterBusinessUi = () => {
//         const [activeStep, setActiveStep] = useState(1);
//         const [phone, setPhone] = useState('');
//         // const [countryCode, setCountryCode] = useState('NG');
//         // const [showDropdown, setShowDropdown] = useState(false);



//         const [formData, setFormData] = useState({
//                 businessName: '',
//                 officeAddress: '',
//                 natureOfBusiness: '',
//                 proofOfID: null,
//                 proofOfAddress: null,
//                 otherDocs: null,
//                 declaration: false,
//         });

//         const handleChange = (e) => {
//                 const { name, type, checked, files, value } = e.target;
//                 setFormData((prev) => ({
//                         ...prev,
//                         [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value,
//                 }));
//         };

//         return (
//                 <div className='bg-black text-white  px-4  ' style={{ backgroundImage: '/images/Wrapper.png', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
//                         <div className='flex justify-between items-center w-full  px-5 py-5 '>
//                                 <div className="">
//                                         <img src='/images/Logo-yellow.png' className=' h-9' />

//                                 </div>

//                                 <div className="">
//                                         <Button variant="outline" className="bg-white text-black text-lg font-medium px-4 py-2 rounded-md">
//                                                 Skip for now
//                                         </Button>
//                                 </div>
//                         </div>

//                         <div className="min-h-screen  px-6 py-10  bg-blend-color  w-full flex flex-col  md:flex-row gap-5 justify-center  " >
//                                 <div className="mb-8 w-full md:w-1/5  ">
//                                         <h2 className="text-xl font-semibold mb-4 md:text-center">KYB Verification</h2>
//                                         <div className="flex md:flex-col items-center  gap-4 ">
//                                                 <div className={`cursor-pointer flex items-center space-x-2 ${activeStep === 1 ? 'text-yellow-500' : 'text-gray-500'}`} onClick={() => setActiveStep(1)}>
//                                                         <div className={`w-6 h-6 flex items-center justify-center border ${activeStep === 1 ? 'border-yellow-500' : 'border-gray-500'} rounded-full`}>1</div>
//                                                         <span>Business details</span>
//                                                 </div>
//                                                 <div className={`flex items-center space-x-2 ${activeStep === 2 ? 'text-yellow-500' : 'text-gray-500 cursor-pointer'}`} onClick={() => setActiveStep(2)}>
//                                                         <div className={`w-6 h-6 flex items-center justify-center border ${activeStep === 2 ? 'border-yellow-500' : 'border-gray-500'} rounded-full cursor-pointer`}>2</div>
//                                                         <span>Contact details</span>
//                                                 </div>
//                                         </div>
//                                 </div>

//                                 {activeStep === 1 ?
//                                         <div className=" w-full md:w-2/3  mx-auto md:mx-0 p-8 rounded-lg">

//                                                 <div className="mb-8">
//                                                         <h3 className="text-lg text-white mb-2 ">Business details</h3>
//                                                         <p className='text-sm text-gray-400 mb-2'>Please provide details of your business below.</p>
//                                                         <div className='bg-gray-600 w-full  mb-4 mt-2' style={{ "height": "0.3px" }} />

//                                                         <div className="space-y-4 ">
//                                                                 <div>
//                                                                         <label className="text-sm text-gray-300 block mb-1">Business's legal name *</label>
//                                                                         <input
//                                                                                 type="text"
//                                                                                 name="businessName"
//                                                                                 value={formData.businessName}
//                                                                                 onChange={handleChange}
//                                                                                 placeholder="E.g ProFlix Studios"
//                                                                                 className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
//                                                                         />
//                                                                 </div>

//                                                                 <div>
//                                                                         <label className="text-sm text-gray-300 block mb-1">Operating Business/Office Address</label>
//                                                                         <input
//                                                                                 type="text"
//                                                                                 name="officeAddress"
//                                                                                 value={formData.officeAddress}
//                                                                                 onChange={handleChange}
//                                                                                 placeholder="E.g 26, Justin Brown, Ikoyi, Lagos, Nigeria"
//                                                                                 className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
//                                                                         />
//                                                                 </div>

//                                                                 <div>
//                                                                         <label className="text-sm text-gray-300 block mb-1">Nature of Business</label>
//                                                                         <textarea
//                                                                                 name="natureOfBusiness"
//                                                                                 value={formData.natureOfBusiness}
//                                                                                 onChange={handleChange}
//                                                                                 placeholder="Please provide a brief description of your business operations."
//                                                                                 className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500 h-28"
//                                                                         ></textarea>
//                                                                 </div>
//                                                         </div>
//                                                 </div>

//                                                 <div className="mb-8">
//                                                         <h3 className="text-lg text-white font-medium mb-4">Proof of Identification</h3>
//                                                         <p className="text-sm text-gray-400 mb-2">
//                                                                 Only an international Passport, NIN Slip, or Driver’s License is accepted. The document must be in good condition (not torn or damaged), clear in colour, unexpired, and fully visible with all corners intact.
//                                                         </p>
//                                                         <label className="w-full border border-gray-700 bg-[#1E1E1E] rounded-lg p-6 flex flex-col items-center text-lg text-gray-400 cursor-pointer hover:border-yellow-500">
//                                                                 <UploadCloud className="mb-2 text-yellow-500" />
//                                                                 Click to upload or drag and drop
//                                                                 <input type="file" name="proofOfID" className="hidden" onChange={handleChange} />
//                                                                 <p className="text-sm mt-1 text-gray-500">PDF, PNG or JPEG (max. 10MB)</p>
//                                                         </label>
//                                                 </div>

//                                                 <div className="mb-8">
//                                                         <h3 className="text-lg text-white font-medium mb-2">Proof of Address/Utility Bill</h3>
//                                                         <p className="text-sm text-gray-400 mb-2">
//                                                                 This can be a utility bill (electricity or water), bank statement, tax invoice, or any government-issued document issued within the last 3 months.
//                                                         </p>
//                                                         <label className="w-full border border-gray-700 bg-[#1E1E1E] rounded-lg p-6 flex flex-col items-center text-lg text-gray-400 cursor-pointer hover:border-yellow-500 mb-4">
//                                                                 <UploadCloud className="mb-2 text-yellow-500" />
//                                                                 Click to upload or drag and drop
//                                                                 <input type="file" name="proofOfAddress" className="hidden" onChange={handleChange} />
//                                                                 <p className="text-sm mt-1 text-gray-500">PDF, PNG or JPEG (max. 10MB)</p>
//                                                         </label>

//                                                         <label className="w-full border border-gray-700 bg-[#1E1E1E] rounded-lg p-6 flex flex-col items-center text-lg text-gray-400 cursor-pointer hover:border-yellow-500">
//                                                                 <UploadCloud className="mb-2 text-yellow-500" />
//                                                                 Click to upload or drag and drop
//                                                                 <input type="file" name="otherDocs" className="hidden" onChange={handleChange} />
//                                                                 <p className="text-sm mt-1 text-gray-500">PDF, PNG or JPEG (max. 10MB)</p>
//                                                         </label>
//                                                 </div>

//                                                 <div className="mb-6">
//                                                         <label className="flex items-start space-x-3 text-lg text-white">
//                                                                 <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} className="mt-1" />
//                                                                 <span>
//                                                                         By submitting this form, I confirm that the information provided is true, accurate, and complete. I also agree to promptly notify Plugin of any changes to the details submitted.
//                                                                 </span>
//                                                         </label>
//                                                 </div>

//                                                 <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md" onClick={() => setActiveStep(2)}>
//                                                         Continue</button>


//                                         </div> :
//                                         (


//                                                 <div className="lg:w-2/3">
//                                                         <h3 className="text-lg font-semibold mb-2">Contact details</h3>
//                                                         <p className="text-lg text-gray-400 mb-6">
//                                                                 Enter your contact’s information below.
//                                                         </p>

//                                                         <form className="space-y-4">
//                                                                 <div>
//                                                                         <label className="text-lg font-medium">Contact name *</label>
//                                                                         <input
//                                                                                 type="text"
//                                                                                 placeholder="E.g Jeffrey Samuels"
//                                                                                 className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
//                                                                         />
//                                                                 </div>

//                                                                 <div>
//                                                                         <label className="text-lg font-medium">Contact phone number (with contry code )*</label>
//                                                                         <div className="mt-1 flex items-center gap-2">
//                                                                                 {/* <div className="bg-gray-900 border border-gray-700 rounded-md px-1 py-3 flex items-center flex-row w-1/14">
//                                                                                 🇳🇬 +234
//                                                                         </div> */}
//                                                                                 <PhoneInput className='w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-lg'
//                                                                                         // defaultCountry="ng"
//                                                                                         value={phone}
//                                                                                         onChange={setPhone}
//                                                                                 />
//                                                                                 {/* <input
//                                                                                 type="tel"
//                                                                                 placeholder="812 345 6789"
//                                                                                 className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
//                                                                         /> */}
//                                                                         </div>
//                                                                 </div>

//                                                                 <div>
//                                                                         <label className="text-lg font-medium">Contact email address *</label>
//                                                                         <input
//                                                                                 type="email"
//                                                                                 placeholder="E.g jsamuels@proflix.io"
//                                                                                 className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
//                                                                         />
//                                                                 </div>

//                                                                 <div>
//                                                                         <label className="text-lg font-medium">Bank Verification Number (BVN) *</label>
//                                                                         <input
//                                                                                 type="text"
//                                                                                 placeholder="E.g 22356801434"
//                                                                                 className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
//                                                                         />
//                                                                 </div>

//                                                                 <div>
//                                                                         <label className="text-lg font-medium">National Identification Number (NIN) *</label>
//                                                                         <input
//                                                                                 type="text"
//                                                                                 placeholder="E.g 9934356801434"
//                                                                                 className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
//                                                                         />
//                                                                 </div>

//                                                                 <div className="flex justify-between mt-6 gap-4">
//                                                                         <button
//                                                                                 type="button"
//                                                                                 className="w-1/2 border border-yellow-400 text-yellow-400 py-3 rounded-md hover:bg-yellow-600/10 transition"
//                                                                                 onClick={() => setActiveStep(1)}
//                                                                         >
//                                                                                 Go back
//                                                                         </button>
//                                                                         <button
//                                                                                 type="submit"
//                                                                                 className="w-1/2 bg-yellow-400 text-black font-medium py-3 rounded-md hover:bg-yellow-500 transition"
//                                                                         >
//                                                                                 Submit
//                                                                         </button>
//                                                                 </div>
//                                                         </form>
//                                                 </div>
//                                         )}



//                         </div>


//                 </div>
//         );
// }







// const RegisterBusinessUi = () => {
        // const [activeStep, setActiveStep] = useState(1);
        // const [phone, setPhone] = useState('');
        // const [date, setDate] = useState('08-11-2024');
//         // const [countryCode, setCountryCode] = useState('NG');
//         // const [showDropdown, setShowDropdown] = useState(false);



        // const [formData, setFormData] = useState({
        //         businessName: '',
        //         officeAddress: '',
        //         natureOfBusiness: '',
        //         proofOfID: null,
        //         proofOfAddress: null,
        //         otherDocs: null,
        //         declaration: false,
        // });

        // const handleChange = (e) => {
        //         const { name, type, checked, files, value } = e.target;
        //         setFormData((prev) => ({
        //                 ...prev,
        //                 [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value,
        //         }));
        // };

//         return (
//                 <div className='bg-black text-white  px-4  ' style={{ backgroundImage: '/images/Wrapper.png', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
//                         <div className='flex justify-between items-center w-full  px-5 py-5 '>
//                                 <div className="">
//                                         <img src='/images/Logo-yellow.png' className=' h-9' />

//                                 </div>

//                                 <div className="">
//                                         <Button variant="outline" className="bg-white text-black text-lg font-medium px-4 py-2 rounded-md">
//                                                 Skip for now
//                                         </Button>
//                                 </div>
//                         </div>

//                         <div className="min-h-screen  px-6 py-10  bg-blend-color  w-full flex flex-col  md:flex-row gap-5 justify-center  " >
//                                 <div className="mb-8 w-full md:w-1/5  ">
//                                         <h2 className="text-xl font-semibold mb-4 md:text-center">KYB Verification</h2>
//                                         <div className="flex md:flex-col items-center  gap-4 ">
//                                                 <div className={`cursor-pointer flex items-center space-x-2 ${activeStep === 1 ? 'text-yellow-500' : 'text-gray-500'}`} onClick={() => setActiveStep(1)}>
//                                                         <div className={`w-6 h-6 flex items-center justify-center border ${activeStep === 1 ? 'border-yellow-500' : 'border-gray-500'} rounded-full`}>1</div>
//                                                         <span>Business details</span>
//                                                 </div>
//                                                 <div className={`flex items-center space-x-2 ${activeStep === 2 ? 'text-yellow-500' : 'text-gray-500 cursor-pointer'}`} onClick={() => setActiveStep(2)}>
//                                                         <div className={`w-6 h-6 flex items-center justify-center border ${activeStep === 2 ? 'border-yellow-500' : 'border-gray-500'} rounded-full cursor-pointer`}>2</div>
//                                                         <span>Contact details</span>
//                                                 </div>
//                                                 <div className={`flex items-center space-x-2 ${activeStep === 3 ? 'text-yellow-500' : 'text-gray-500 cursor-pointer'}`} onClick={() => setActiveStep(2)}>
//                                                         <div className={`w-6 h-6 flex items-center justify-center border ${activeStep === 3 ? 'border-yellow-500' : 'border-gray-500'} rounded-full cursor-pointer`}>3</div>
//                                                         <span>Contact details</span>
//                                                 </div>
//                                         </div>
//                                 </div>

                                // {activeStep === 1 ?
                                //         <div className=" w-full md:w-2/3  mx-auto md:mx-0 p-8 rounded-lg">

                                //                 <div className="mb-8">
                                //                         <h3 className="text-lg text-white mb-2 ">Business details</h3>
                                //                         <p className='text-sm text-gray-400 mb-2'>Please provide details of your business below.</p>
                                //                         <div className='bg-gray-600 w-full  mb-4 mt-2 ' style={{ "height": "0.3px" }} />

                                //                         <div className="space-y-4 ">
                                //                                 <div>
                                //                                         <label className="text-sm text-gray-300 block mb-1">Business's legal name <span className="text-red-600">*</span></label>
                                //                                         <input
                                //                                                 type="text"
                                //                                                 name="businessName"
                                //                                                 value={formData.businessName}
                                //                                                 onChange={handleChange}
                                //                                                 placeholder="E.g ZoomFix Global Limited"
                                //                                                 className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                                //                                         />
                                //                                 </div>

                                //                                 <div>
                                //                                         <label className="text-sm text-gray-300 block mb-1">Business Registration Number (RC) <span className="text-red-600">*</span></label>
                                //                                         <input
                                //                                                 type="text"
                                //                                                 name="regnumber"
                                //                                                 // value={formData.officeAddress}
                                //                                                 onChange={handleChange}
                                //                                                 placeholder="E.g RC123456"
                                //                                                 className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                                //                                         />
                                //                                 </div>
                                //                                 {/* date */}
                                //                                 <div className="flex flex-col">
                                //                                         <label className="text-white font-medium mb-1 text-sm">
                                //                                                 Date of Registration/Incorporation <span className="text-red-600">*</span>
                                //                                         </label>
                                //                                         <div className="relative">
                                //                                                 <input
                                //                                                         type="date"
                                //                                                         value={date}
                                //                                                         onChange={(e) => setDate(e.target.value)}
                                //                                                         className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-white"
                                //                                                 />
                                //                                                 <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                //                                                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                //                                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                                //                                                         </svg>

                                //                                                 </div>
                                //                                         </div>
                                //                                 </div>


                                //                                 <div >
                                //                                         <label className="text-sm text-gray-300 block mb-1">Operating Business/Office Address <span className="text-red-600">*</span></label>
                                //                                         <input
                                //                                                 type="text"
                                //                                                 name="officeAddress"
                                //                                                 value={formData.officeAddress}
                                //                                                 onChange={handleChange}
                                //                                                 placeholder="E.g 26, Justin Brown, Ikoyi, Lagos, Nigeria"
                                //                                                 className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                                //                                         />
                                //                                 </div>

                                //                                 <div>
                                //                                         <label className="text-sm text-gray-300 block mb-1">Nature of Business <span className="text-red-600">*</span></label>
                                //                                         <textarea
                                //                                                 name="natureOfBusiness"
                                //                                                 value={formData.natureOfBusiness}
                                //                                                 onChange={handleChange}
                                //                                                 placeholder="Please provide a brief description of your business operations."
                                //                                                 className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500 h-28"
                                //                                         ></textarea>
                                //                                 </div>
                                //                         </div>
                                //                 </div>


                                //                 <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md" onClick={() => setActiveStep(2)}>
                                //                         Continue</button>


                                //         </div> :activeStep === 2?
                                //         (


                                //                 <div className="lg:w-2/3">
                                //                         <h3 className="text-lg font-semibold mb-2">Contact details</h3>
                                //                         <p className="text-lg text-gray-400 mb-6">
                                //                                 Enter your contact’s information below.
                                //                         </p>

                                //                         <form className="space-y-4">
                                //                                 <div>
                                //                                         <label className="text-lg font-medium">Contact name *</label>
                                //                                         <input
                                //                                                 type="text"
                                //                                                 placeholder="E.g Jeffrey Samuels"
                                //                                                 className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                //                                         />
                                //                                 </div>

                                //                                 <div>
                                //                                         <label className="text-lg font-medium">Contact phone number (with contry code )*</label>
                                //                                         <div className="mt-1 flex items-center gap-2">
                                //                                                 {/* <div className="bg-gray-900 border border-gray-700 rounded-md px-1 py-3 flex items-center flex-row w-1/14">
                                //                                                 🇳🇬 +234
                                //                                         </div> */}
                                //                                                 <PhoneInput className='w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-lg'
                                //                                                         // defaultCountry="ng"
                                //                                                         value={phone}
                                //                                                         onChange={setPhone}
                                //                                                 />
                                //                                                 {/* <input
                                //                                                 type="tel"
                                //                                                 placeholder="812 345 6789"
                                //                                                 className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                //                                         /> */}
                                //                                         </div>
                                //                                 </div>

                                //                                 <div>
                                //                                         <label className="text-lg font-medium">Contact email address *</label>
                                //                                         <input
                                //                                                 type="email"
                                //                                                 placeholder="E.g jsamuels@proflix.io"
                                //                                                 className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                //                                         />
                                //                                 </div>

                                //                                 <div>
                                //                                         <label className="text-lg font-medium">Bank Verification Number (BVN) *</label>
                                //                                         <input
                                //                                                 type="text"
                                //                                                 placeholder="E.g 22356801434"
                                //                                                 className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                //                                         />
                                //                                 </div>

                                //                                 <div>
                                //                                         <label className="text-lg font-medium">National Identification Number (NIN) *</label>
                                //                                         <input
                                //                                                 type="text"
                                //                                                 placeholder="E.g 9934356801434"
                                //                                                 className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                                //                                         />
                                //                                 </div>

                                //                                 <div className="flex justify-between mt-6 gap-4">
                                //                                         <button
                                //                                                 type="button"
                                //                                                 className="w-1/2 border border-yellow-400 text-yellow-400 py-3 rounded-md hover:bg-yellow-600/10 transition"
                                //                                                 onClick={() => setActiveStep(1)}
                                //                                         >
                                //                                                 Go back
                                //                                         </button>
                                //                                         <button
                                //                                                 type="submit"
                                //                                                 onClick={() => { setActiveStep(3)}}
                                //                                                 className="w-1/2 bg-yellow-400 text-black font-medium py-3 rounded-md hover:bg-yellow-500 transition"
                                //                                         >
                                //                                                 Submit
                                //                                         </button>
                                //                                 </div>
                                //                         </form>
                                //                 </div>
                                //         ) :<></> }



//                         </div>


//                 </div>
//         );
// }





'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { UploadCloud } from 'lucide-react';
import PhoneInput from 'react-phone-number-input/input';

const UploadBox = ({ label }: { label: string }) => (
  <div className="mb-6">
    <Label className="block mb-2 text-sm font-medium text-white">{label}</Label>
    <div className="bg-[#2C2C2C] text-center border border-gray-600 rounded-md py-6 px-4 text-white flex flex-col items-center justify-center">
      <UploadCloud size={32} className="text-yellow-500 mb-2" />
      <span className="font-medium text-yellow-500 cursor-pointer">Click to upload</span>
      <p className="text-sm text-gray-400 mt-1">or drag and drop</p>
      <p className="text-xs text-gray-500 mt-1">PDF, PNG or JPEG (max. 10MB)</p>
    </div>
  </div>
);

const KybCompanyDocumentationForm = () => {
  return (
        <div>
        {localStorage.getItem('account_type') == 'individual' ? <UnRegisterBusinessUi /> : <RegisterBusinessUi />}
</div>
  );
};

export default KybCompanyDocumentationForm;



const RegisterBusinessUi = () => {
        // const [activeStep, setActiveStep] = useState(1);
        const [activeStepList, setActiveStepList] = useState([1]);
        const [phone, setPhone] = useState('');
        const [date, setDate] = useState('08-11-2024');
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

        return (

                <div className="min-h-screen bg-black text-white py-10 px-6 md:px-20">
                  {/* Left-side steps */}
                  <div className="flex flex-col md:flex-row gap-10">
                    <aside className="md:w-1/4 mb-6">
                      <h2 className="text-xl font-semibold mb-6">KYB Verification</h2>
                      <ol className="space-y-4 text-sm text-gray-400">
                        <li className={`flex items-center space-x-2 text-yellow-500`}  onClick={ () => setActiveStepList([1])} >
                          <div className={`w-5 h-5 rounded-full ${activeStepList.length >=1   ? 'bg-yellow-500' : ''} ${activeStepList.length >=1 ?'text-black':'text-yellow-500'} ${activeStepList.length >=1 ? '':'border border-yellow-500'}  flex items-center justify-center text-xs font-bold`}>1</div>
                          <span>Business details</span>
                        </li>
                        <li className="flex items-center space-x-2 text-yellow-500" onClick={ () => setActiveStepList([1,2])}>
                          <div className={`w-5 h-5 rounded-full ${activeStepList.length >=2 ? 'bg-yellow-500' : ''} ${activeStepList.length >=2?'text-black':'text-yellow-500'}  ${activeStepList.length >=2? '':'border border-yellow-500'}  flex items-center justify-center text-xs font-bold`}>2</div>
                          <span>Contact details</span>
                        </li>
                        <li className="flex items-center space-x-2 text-yellow-500 font-medium"  onClick={ () => setActiveStepList([1,2,3])} >
                          <div className={`w-5 h-5 rounded-full ${activeStepList.length >=3 ? 'bg-yellow-500' : ''} ${activeStepList.length >=3?'text-black':'text-yellow-500'} ${activeStepList.length >=3? '':'border border-yellow-500'} flex items-center justify-center text-xs font-bold`}>3</div>
                          <span>Company/Business documentation</span>
                        </li>
                      </ol>
                    </aside>
            
                    {/* Right-side form */}

                    {activeStepList.length ===1 ?
                                        <div className=" w-full md:w-2/3  mx-auto md:mx-0 p-8 rounded-lg">

                                                <div className="mb-8">
                                                        <h3 className="text-lg text-white mb-2 ">Business details</h3>
                                                        <p className='text-sm text-gray-400 mb-2'>Please provide details of your business below.</p>
                                                        <div className='bg-gray-600 w-full  mb-4 mt-2 ' style={{ "height": "0.3px" }} />

                                                        <div className="space-y-4 ">
                                                                <div>
                                                                        <label className="text-sm text-gray-300 block mb-1">Business's legal name <span className="text-red-600">*</span></label>
                                                                        <input
                                                                                type="text"
                                                                                name="businessName"
                                                                                value={formData.businessName}
                                                                                onChange={handleChange}
                                                                                placeholder="E.g ZoomFix Global Limited"
                                                                                className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                                                                        />
                                                                </div>

                                                                <div>
                                                                        <label className="text-sm text-gray-300 block mb-1">Business Registration Number (RC) <span className="text-red-600">*</span></label>
                                                                        <input
                                                                                type="text"
                                                                                name="regnumber"
                                                                                // value={formData.officeAddress}
                                                                                onChange={handleChange}
                                                                                placeholder="E.g RC123456"
                                                                                className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                                                                        />
                                                                </div>
                                                                {/* date */}
                                                                <div className="flex flex-col">
                                                                        <label className="text-white font-medium mb-1 text-sm">
                                                                                Date of Registration/Incorporation <span className="text-red-600">*</span>
                                                                        </label>
                                                                        <div className="relative">
                                                                                <input
                                                                                        type="date"
                                                                                        value={date}
                                                                                        onChange={(e) => setDate(e.target.value)}
                                                                                        className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-white"
                                                                                />
                                                                                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                                                                                        </svg>

                                                                                </div>
                                                                        </div>
                                                                </div>


                                                                <div >
                                                                        <label className="text-sm text-gray-300 block mb-1">Operating Business/Office Address <span className="text-red-600">*</span></label>
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
                                                                        <label className="text-sm text-gray-300 block mb-1">Nature of Business <span className="text-red-600">*</span></label>
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


                                                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md" onClick={() => setActiveStepList([1,2])}>
                                                        Continue</button>


                                        </div> :activeStepList.length ===2?
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
                                                                                onClick={() => setActiveStepList([1])}
                                                                        >
                                                                                Go back
                                                                        </button>
                                                                        <button
                                                                                type="submit"
                                                                                onClick={() => { setActiveStepList([1,2,3])}}
                                                                                className="w-1/2 bg-yellow-400 text-black font-medium py-3 rounded-md hover:bg-yellow-500 transition"
                                                                        >
                                                                                Submit
                                                                        </button>
                                                                </div>
                                                        </form>
                                                </div>
                                        ) :  <main className="md:w-3/4">
                                        <section className="mb-10">
                                          <h3 className="text-lg font-semibold mb-1">Company/Business documentation</h3>
                                          <p className="text-sm text-gray-400 mb-6">Please upload relevant documents below.</p>
                              
                                          <UploadBox label="Certificate of incorporation/registration *" />
                                          <UploadBox label="Upload Certified List of Shareholders/CAC 2A/Application for Registration of a company/Status Report issued by CAC *" />
                                        </section>
                              
                                        <section className="mb-10">
                                          <h3 className="text-lg font-semibold mb-1">Proof of Identification</h3>
                                          <p className="text-sm text-gray-400 mb-6">
                                            Only an International Passport, NIN Slip, or Driver’s License is accepted. The document must be in good condition (not torn or damaged), clear in color, unexpired, and fully visible with all corners intact.
                                          </p>
                                          <UploadBox label="Proof of Identification for individual shareholders who own 5% shares or more *" />
                                        </section>
                              
                                        <section className="mb-6">
                                          <h3 className="text-lg font-semibold mb-1">Proof of Address/Utility Bill</h3>
                                          <p className="text-sm text-gray-400 mb-6">
                                            This can be a utility bill (electricity or waste), bank statement, tax invoice, or any government-issued document issued within the last 3 months.
                                          </p>
                                          <UploadBox label="Proof of Address *" />
                                          <UploadBox label="Any other relevant documents (licenses, certificates, etc.)" />
                                        </section>
                              
                                        <div className="mb-6 flex items-start space-x-3">
                                          <Checkbox id="declaration" />
                                          <label htmlFor="declaration" className="text-sm text-gray-300">
                                            By submitting this form, I confirm that the information provided is true, accurate, and complete. I also agree to promptly notify Plugin of any changes to the details submitted.
                                          </label>
                                        </div>
                              
                                        <div className="flex flex-col sm:flex-row gap-4 justify-end">
                                          <Button variant="outline" className="border-yellow-500 bg-transparent text-white hover:bg-yellow-600 hover:text-black" onClick={ () => setActiveStepList([1,2])}>
                                            Go back
                                          </Button>
                                          <Button className="bg-yellow-500 text-black hover:bg-yellow-600 px-8">
                                            Submit
                                          </Button>
                                        </div>
                                      </main> }
                  


                  </div>
                </div>
              );

}




const UnRegisterBusinessUi =()=>{
        return(<>klljdwwjdkl</>)
}