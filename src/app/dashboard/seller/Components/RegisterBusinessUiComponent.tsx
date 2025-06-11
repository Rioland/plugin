import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
// import { Button } from '@/components/ui/button';
import { UploadCloudIcon } from 'lucide-react'; // Assuming lucide-react for icons
import PhoneInput from 'react-phone-input-2'; // For phone number input
import 'react-phone-input-2/lib/style.css'; // PhoneInput styles
import Cookies from 'js-cookie'; // For reading cookies

// Placeholder components - Replace these with your actual UI library components
const UploadBox = ({ label, name, handleChange }) => (
    <div className="mb-5 border border-gray-700 p-4 rounded-lg bg-[#1E1E1E]">
        <label htmlFor={name} className="block mb-2 text-sm text-gray-300">{label}</label>
        <div className="flex items-center justify-between bg-neutral-800 px-3 py-2 rounded-md">
            <input
                type="file"
                name={name}
                id={name}
                onChange={handleChange}
                accept=".jpg,.jpeg,.png,.pdf" // Specify accepted file types
                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400 p-3 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
            />
            <UploadCloudIcon className="h-5 w-5 text-purple-400" />
        </div>
    </div>
);

const Checkbox = ({ id, label, checked, onChange }) => (
    <div className="flex items-start space-x-3">
        <input
            type="checkbox"
            id={id}
            name={id} // Assuming name matches id for handleChange
            checked={checked}
            onChange={onChange}
            className="mt-1 h-4 w-4 text-yellow-500 rounded border-gray-700 focus:ring-yellow-500"
        />
        <label htmlFor={id} className="text-sm text-gray-300">
            {label}
        </label>
    </div>
);

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
    const baseClasses = "py-3 rounded-md font-bold transition";
    const primaryClasses = "bg-yellow-500 text-black hover:bg-yellow-600";
    const outlineClasses = "border border-yellow-500 text-yellow-500 hover:bg-yellow-600/10 hover:text-yellow-600";

    const buttonClasses = `${baseClasses} ${variant === "primary" ? primaryClasses : outlineClasses} ${className}`;

    return (
        <button type={variant === "submit" ? "submit" : "button"} onClick={onClick} className={buttonClasses}>
            {children}
        </button>
    );
};

const RegisterBusinessUi = () => {
    const [activeStepList, setActiveStepList] = useState([1]);
    const [uploading, setUploading] = useState(false);

    const [formData, setFormData] = useState({
        businessName: '',
        regNumber: '', // Business Registration Number
        registrationDate: '', // Date of Registration
        officeAddress: '',
        natureOfBusiness: '',
        contactName: '',
        contactPhone: '', // Handled by PhoneInput
        contactEmail: '',
        contactBvn: '', // BVN for contact
        contactNin: '', // NIN for contact
        certificateOfIncorporation: null, // File
        certifiedList: null, // File (CAC 2A etc.)
        proofOfID: null, // File (Proof of Identification)
        proofOfAddress: null, // File (Utility Bill)
        otherDocs: null, // File (Other relevant documents)
        declaration: false, // Checkbox
    });

    const handleChange = (e) => {
        const { name, type, checked, files, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value,
        }));
    };

    // Handler for PhoneInput specifically
    const handlePhoneChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            contactPhone: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setUploading(true);
        toast.loading("Submitting your application...");

        const apiUrl = 'https://plugins.cyclebreeze.com/api/seller/kyb/business';
        const token = Cookies.get('token'); // Get token from cookies

        if (!token) {
            toast.dismiss();
            toast.error("Authentication token not found. Please log in.");
            setUploading(false);
            return;
        }

        const dataToSend = new FormData();
        dataToSend.append('business_name', formData.businessName);
        dataToSend.append('registration_number', formData.regNumber);
        dataToSend.append('registration_date', formData.registrationDate); // YYYY-MM-DD format usually
        dataToSend.append('business_address', formData.officeAddress);
        dataToSend.append('business_nature', formData.natureOfBusiness);
        dataToSend.append('firstname', formData.contactName.split(' ')[0] || ''); // Assuming contactName is full name
        dataToSend.append('lastname', formData.contactName.split(' ')[1] || '');
        dataToSend.append('phone_number', formData.contactPhone);
        dataToSend.append('nin', formData.contactNin);
        dataToSend.append('bvn', formData.contactBvn);
        // dataToSend.append('email', formData.contactEmail); // Add if API expects contact email

        // Append files
        if (formData.certificateOfIncorporation) {
            dataToSend.append('certificate_of_incorporation', formData.certificateOfIncorporation);
        }
        if (formData.certifiedList) {
            dataToSend.append('cac_form_2_1', formData.certifiedList); // Assuming 'cac_form_2_1' is the API field name
        }
        if (formData.proofOfID) {
            dataToSend.append('proof_of_id', formData.proofOfID);
        }
        if (formData.proofOfAddress) {
            dataToSend.append('proof_of_address', formData.proofOfAddress);
        }
        if (formData.otherDocs) {
            dataToSend.append('other_documents', formData.otherDocs);
        }

        // Add declaration if needed by API, though often implied by submission
        // dataToSend.append('declaration', formData.declaration ? 'true' : 'false');


        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: dataToSend,
            });

            const result = await response.json();
            toast.dismiss(); // Dismiss loading toast

            if (response.ok) {
                toast.success(result.message || 'Business registration submitted successfully!');
                console.log('Success:', result);
                // Optionally: Reset form, redirect user, show success page
                setFormData({ // Reset form after successful submission
                    businessName: '', regNumber: '', registrationDate: '', officeAddress: '', natureOfBusiness: '',
                    contactName: '', contactPhone: '', contactEmail: '', contactBvn: '', contactNin: '',
                    certificateOfIncorporation: null, certifiedList: null, proofOfID: null, proofOfAddress: null,
                    otherDocs: null, declaration: false,
                });
                setActiveStepList([1]); // Go back to first step
            } else {
                const errorMessage = result.message || result.error || 'Failed to submit business registration.';
                toast.error(errorMessage);
                console.error('API Error:', result);
            }
        } catch (error) {
            toast.dismiss();
            console.error('Network or other error:', error);
            toast.error('An unexpected error occurred. Please try again.');
        } finally {
            setUploading(false);
        }
    };


    return (
        <div className="min-h-screen bg-black text-white py-10 px-6 md:px-20">
            <Toaster position="top-center" />
            <div className="flex flex-col md:flex-row gap-10">
                {/* Left-side steps */}
                <aside className="md:w-1/4 mb-6">
                    <h2 className="text-xl font-semibold mb-6">KYB Verification</h2>
                    <ol className="space-y-4 text-sm text-gray-400">
                        <li className={`flex items-center space-x-2 cursor-pointer ${activeStepList.length >= 1 ? 'text-yellow-500' : 'text-gray-500'}`} onClick={() => setActiveStepList([1])}>
                            <div className={`w-5 h-5 rounded-full ${activeStepList.length >= 1 ? 'bg-yellow-500 text-black' : 'border border-yellow-500 text-yellow-500'} flex items-center justify-center text-xs font-bold`}>1</div>
                            <span>Business details</span>
                        </li>
                        <li className={`flex items-center space-x-2 cursor-pointer ${activeStepList.length >= 2 ? 'text-yellow-500' : 'text-gray-500'}`} onClick={() => setActiveStepList([1, 2])}>
                            <div className={`w-5 h-5 rounded-full ${activeStepList.length >= 2 ? 'bg-yellow-500 text-black' : 'border border-yellow-500 text-yellow-500'} flex items-center justify-center text-xs font-bold`}>2</div>
                            <span>Contact details</span>
                        </li>
                        <li className={`flex items-center space-x-2 cursor-pointer ${activeStepList.length >= 3 ? 'text-yellow-500' : 'text-gray-500'}`} onClick={() => setActiveStepList([1, 2, 3])}>
                            <div className={`w-5 h-5 rounded-full ${activeStepList.length >= 3 ? 'bg-yellow-500 text-black' : 'border border-yellow-500 text-yellow-500'} flex items-center justify-center text-xs font-bold`}>3</div>
                            <span>Company/Business documentation</span>
                        </li>
                    </ol>
                </aside>

                {/* Right-side form content */}
                <div className="w-full md:w-2/3 mx-auto md:mx-0 p-8 rounded-lg bg-[#111111]">
                    {activeStepList.length === 1 && (
                        <div>
                            <div className="mb-8">
                                <h3 className="text-lg text-white mb-2">Business details</h3>
                                <p className='text-sm text-gray-400 mb-2'>Please provide details of your business below.</p>
                                <div className='bg-gray-600 w-full mb-4 mt-2' style={{ "height": "0.3px" }} />

                                <div className="space-y-4 ">
                                    <div>
                                        <label htmlFor="businessName" className="text-sm text-gray-300 block mb-1">Business&apos;s legal name <span className="text-red-600">*</span></label>
                                        <input
                                            type="text"
                                            name="businessName"
                                            id="businessName"
                                            value={formData.businessName}
                                            onChange={handleChange}
                                            placeholder="E.g ZoomFix Global Limited"
                                            className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="regNumber" className="text-sm text-gray-300 block mb-1">Business Registration Number (RC) <span className="text-red-600">*</span></label>
                                        <input
                                            type="text"
                                            name="regNumber"
                                            id="regNumber"
                                            value={formData.regNumber}
                                            onChange={handleChange}
                                            placeholder="E.g RC123456"
                                            className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="registrationDate" className="text-white font-medium mb-1 text-sm">
                                            Date of Registration/Incorporation <span className="text-red-600">*</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                name="registrationDate"
                                                id="registrationDate"
                                                value={formData.registrationDate}
                                                onChange={handleChange}
                                                className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-white bg-[#1E1E1E]"
                                                required
                                            />
                                            {/* Date icon, if needed, remove if input type="date" handles it */}
                                            {/* <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                                                </svg>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="officeAddress" className="text-sm text-gray-300 block mb-1">Operating Business/Office Address <span className="text-red-600">*</span></label>
                                        <input
                                            type="text"
                                            name="officeAddress"
                                            id="officeAddress"
                                            value={formData.officeAddress}
                                            onChange={handleChange}
                                            placeholder="E.g 26, Justin Brown, Ikoyi, Lagos, Nigeria"
                                            className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="natureOfBusiness" className="text-sm text-gray-300 block mb-1">Nature of Business <span className="text-red-600">*</span></label>
                                        <textarea
                                            name="natureOfBusiness"
                                            id="natureOfBusiness"
                                            value={formData.natureOfBusiness}
                                            onChange={handleChange}
                                            placeholder="Please provide a brief description of your business operations."
                                            className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500 h-28"
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <Button
                                className="w-full"
                                onClick={() => setActiveStepList([1, 2])}
                            >
                                Continue
                            </Button>
                        </div>
                    )}

                    {activeStepList.length === 2 && (
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Contact details</h3>
                            <p className="text-lg text-gray-400 mb-6">
                                Enter your contact&apos;s information below.
                            </p>
                            <div className='bg-gray-600 w-full mb-4 mt-2' style={{ "height": "0.3px" }} />


                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="contactName" className="text-sm text-gray-300 block mb-1">Contact name <span className="text-red-600">*</span></label>
                                    <input
                                        type="text"
                                        name="contactName"
                                        id="contactName"
                                        value={formData.contactName}
                                        onChange={handleChange}
                                        placeholder="E.g Jeffrey Samuels"
                                        className="w-full bg-[#1E1E1E] border border-gray-700 rounded-md px-4 py-3 text-lg placeholder-gray-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactPhone" className="text-sm text-gray-300 block mb-1">Contact phone number (with country code)<span className="text-red-600">*</span></label>
                                    <div className="mt-1 flex items-center gap-2">
                                        <PhoneInput
                                            country={'ng'} // Default to Nigeria
                                            value={formData.contactPhone}
                                            onChange={handlePhoneChange}
                                            inputClass="w-full bg-[#1E1E1E] border border-gray-700 rounded-md px-4 py-3 text-lg"
                                            containerClass="w-full" // Apply width to the container
                                            inputStyle={{ // Apply styles directly to the input for full width
                                                width: '100%',
                                                backgroundColor: '#1E1E1E',
                                                borderColor: '#4A5568',
                                                color: '#FFFFFF',
                                                fontSize: '1rem',
                                            }}
                                            buttonStyle={{ // Style for the country select button
                                                backgroundColor: '#1E1E1E',
                                                borderColor: '#4A5568',
                                                color: '#FFFFFF',
                                            }}
                                            enableSearch={true}
                                            placeholder="812 345 6789"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="contactEmail" className="text-sm text-gray-300 block mb-1">Contact email address <span className="text-red-600">*</span></label>
                                    <input
                                        type="email"
                                        name="contactEmail"
                                        id="contactEmail"
                                        value={formData.contactEmail}
                                        onChange={handleChange}
                                        placeholder="E.g jsamuels@proflix.io"
                                        className="w-full bg-[#1E1E1E] border border-gray-700 rounded-md px-4 py-3 text-lg placeholder-gray-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactBvn" className="text-sm text-gray-300 block mb-1">Bank Verification Number (BVN) <span className="text-red-600">*</span></label>
                                    <input
                                        type="text"
                                        name="contactBvn"
                                        id="contactBvn"
                                        value={formData.contactBvn}
                                        onChange={handleChange}
                                        placeholder="E.g 22356801434"
                                        className="w-full bg-[#1E1E1E] border border-gray-700 rounded-md px-4 py-3 text-lg placeholder-gray-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contactNin" className="text-sm text-gray-300 block mb-1">National Identification Number (NIN) <span className="text-red-600">*</span></label>
                                    <input
                                        type="text"
                                        name="contactNin"
                                        id="contactNin"
                                        value={formData.contactNin}
                                        onChange={handleChange}
                                        placeholder="E.g 9934356801434"
                                        className="w-full bg-[#1E1E1E] border border-gray-700 rounded-md px-4 py-3 text-lg placeholder-gray-500"
                                        required
                                    />
                                </div>

                                <div className="flex justify-between mt-6 gap-4">
                                    <Button
                                        variant="outline"
                                        className="w-1/2"
                                        onClick={() => setActiveStepList([1])}
                                    >
                                        Go back
                                    </Button>
                                    <Button
                                        className="w-1/2"
                                        onClick={() => setActiveStepList([1, 2, 3])}
                                    >
                                        Continue
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeStepList.length === 3 && (
                        <form onSubmit={handleSubmit}>
                            <section className="mb-10">
                                <h3 className="text-lg font-semibold mb-1">Company/Business documentation</h3>
                                <p className="text-sm text-gray-400 mb-6">Please upload relevant documents below.</p>
                                <div className='bg-gray-600 w-full mb-4 mt-2' style={{ "height": "0.3px" }} />

                                <UploadBox label="Certificate of incorporation/registration *" handleChange={handleChange} name="certificateOfIncorporation" />
                                <UploadBox label="Upload Certified List of Shareholders/CAC 2A/Application for Registration of a company/Status Report issued by CAC *" handleChange={handleChange} name="certifiedList" />
                            </section>

                            <section className="mb-10">
                                <h3 className="text-lg font-semibold mb-1">Proof of Identification</h3>
                                <p className="text-sm text-gray-400 mb-6">
                                    Only an International Passport, NIN Slip, or Driver’s License is accepted. The document must be in good condition (not torn or damaged), clear in color, unexpired, and fully visible with all corners intact.
                                </p>
                                <div className='bg-gray-600 w-full mb-4 mt-2' style={{ "height": "0.3px" }} />

                                <UploadBox label="Proof of Identification for individual shareholders who own 5% shares or more *" handleChange={handleChange} name="proofOfID" />
                            </section>

                            <section className="mb-6">
                                <h3 className="text-lg font-semibold mb-1">Proof of Address/Utility Bill</h3>
                                <p className="text-sm text-gray-400 mb-6">
                                    This can be a utility bill (electricity or waste), bank statement, tax invoice, or any government-issued document issued within the last 3 months.
                                </p>
                                <div className='bg-gray-600 w-full mb-4 mt-2' style={{ "height": "0.3px" }} />

                                <UploadBox label="Proof of Address *" handleChange={handleChange} name="proofOfAddress" />
                                <UploadBox label="Any other relevant documents (licenses, certificates, etc.)" handleChange={handleChange} name="otherDocs" />
                            </section>

                            <div className="mb-6">
                                <Checkbox
                                    id="declaration"
                                    label="By submitting this form, I confirm that the information provided is true, accurate, and complete. I also agree to promptly notify Plugin of any changes to the details submitted."
                                    checked={formData.declaration}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-end">
                                <Button variant="outline" className="sm:w-auto w-full" onClick={() => setActiveStepList([1, 2])}>
                                    Go back
                                </Button>
                                {uploading ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src="/images/preloader.gif" alt="Loading..." className="mx-auto h-12" />
                                ) : (
                                    <Button  className="sm:w-auto w-full" variant="primary"  >
                                        <p>Submit</p>
                                    </Button>
                                )}
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RegisterBusinessUi;