import React, { useState, useEffect } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
// You might need components like these, I've mocked them for the example
const UploadBox = ({ label, name, handleChange }) => (
    <div className="mb-4">
        <label className="text-sm text-gray-300 block mb-1">{label}</label>
        <input
            type="file"
            name={name}
            onChange={handleChange}
            className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
        />
    </div>
);
const Checkbox = ({ id, onChange, name }) => (
    <input id={id} name={name} onChange={onChange} type="checkbox" className="h-4 w-4 rounded border-gray-300 text-yellow-600 focus:ring-yellow-600" />
);
const Button = ({ children, ...props }) => <button {...props}>{children}</button>;


const RegisterBusinessUi = () => {
    const [activeStep, setActiveStep] = useState(1); // MODIFIED: Simplified step management
    const [isLoading, setIsLoading] = useState(false); // NEW: For loading indicators
    const [error, setError] = useState(''); // NEW: To display API errors

    const [formData, setFormData] = useState({
        business_name: '',
        registration_number: '',
        registration_date: '',
        certificate_of_incorporation: null,
        cac_form_2_1: null,
        business_address: '',
        business_nature: '',
        proof_of_id: null,
        proof_of_address: null,
        other_documents: null,
        firstname: '',
        lastname: '',
        phone_number: '',
        bvn: '',
        nin: '',
        declaration: false,
    });

    const handleChange = (e) => {
        const { name, type, checked, files, value } = e.target;
        setError(''); // Clear error on new input
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value,
        }));
    };

    // NEW: Function to handle phone number change from PhoneInput
    const handlePhoneChange = (phone) => {
        setError('');
        setFormData((prev) => ({
            ...prev,
            phone_number: phone,
        }));
    };

    // NEW: Function for BVN and NIN verification
    const handleVerificationAndContinue = async () => {
        if (!formData.bvn || !formData.nin || !formData.firstname || !formData.lastname) {
            setError('First Name, Last Name, BVN, and NIN are required for verification.');
            return;
        }

        setIsLoading(true);
        setError('');
        const API_TOKEN = '44|sCipH3r42hipprjjAE0Kgqb9QMNeRX5oIetClKCB31c8fd02'; // IMPORTANT: Use an environment variable for this

        try {
            // 1. Verify BVN
            console.log('Verifying BVN...');
            const bvnResponse = await fetch('https://plugins.cyclebreeze.com/api/seller/kyb/bvn', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${API_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    bvn: formData.bvn,
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                }),
            });

            if (!bvnResponse.ok) {
                const errorData = await bvnResponse.json();
                throw new Error(`BVN Verification Failed: ${errorData.message || 'Please check your details.'}`);
            }
            console.log('BVN Verified Successfully!');

            // 2. Verify NIN
            console.log('Verifying NIN...');
            const ninResponse = await fetch('https://plugins.cyclebreeze.com/api/seller/kyb/nin', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${API_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nin: formData.nin,
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                }),
            });

            if (!ninResponse.ok) {
                const errorData = await ninResponse.json();
                throw new Error(`NIN Verification Failed: ${errorData.message || 'Please check your details.'}`);
            }
            console.log('NIN Verified Successfully!');

            // 3. If both are successful, proceed to the next step
            setActiveStep(3);

        } catch (err) {
            setError(err.message);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };


    // NEW: Function to handle the final submission of all data
    const handleFinalSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        if (!formData.declaration) {
            setError('You must agree to the declaration before submitting.');
            return;
        }
        
        setIsLoading(true);
        setError('');
        const API_TOKEN = '44|sCipH3r42hipprjjAE0Kgqb9QMNeRX5oIetClKCB31c8fd02';

        // Use FormData for multipart/form-data requests (since you have files)
        const submissionData = new FormData();

        // Append all key-value pairs from state to the FormData object
        for (const key in formData) {
            if (formData[key] !== null) { // Ensure not to append null values
                submissionData.append(key, formData[key]);
            }
        }
        
        try {
            console.log('Submitting final business data...');
            const response = await fetch('https://plugins.cyclebreeze.com/api/seller/kyb/business', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${API_TOKEN}`,
                    // NOTE: Do NOT set Content-Type for FormData, the browser does it automatically with the correct boundary
                },
                body: submissionData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Submission Failed: ${errorData.message || 'An error occurred.'}`);
            }

            const result = await response.json();
            console.log('Submission successful:', result);
            // Handle success - e.g., redirect to a success page
            alert('Business verification submitted successfully!');

        } catch (err) {
            setError(err.message);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };
    
    // MODIFIED: Simplified step rendering logic
    const renderStep = () => {
        switch (activeStep) {
            case 1:
                return (
                    <div className="w-full md:w-2/3 mx-auto md:mx-0 p-8 rounded-lg">
                        {/* Business details form... */}
                         <div className="mb-8">
                             <h3 className="text-lg text-white mb-2 ">Business details</h3>
                             <p className='text-sm text-gray-400 mb-2'>Please provide details of your business below.</p>
                             <div className='bg-gray-600 w-full mb-4 mt-2' style={{ "height": "0.3px" }} />
                             <div className="space-y-4">
                                 {/* Business Name */}
                                 <input name="business_name" value={formData.business_name} onChange={handleChange} placeholder="Business's legal name" className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg" />
                                 {/* Registration Number */}
                                 <input name="registration_number" value={formData.registration_number} onChange={handleChange} placeholder="Business Registration Number (RC)" className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg" />
                                 {/* Registration Date */}
                                 <input type="date" name="registration_date" value={formData.registration_date} onChange={handleChange} className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg" />
                                 {/* Business Address */}
                                 <input name="business_address" value={formData.business_address} onChange={handleChange} placeholder="Operating Business/Office Address" className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg" />
                                 {/* Nature of Business */}
                                 <textarea name="business_nature" value={formData.business_nature} onChange={handleChange} placeholder="Nature of Business" className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg h-28" />
                             </div>
                         </div>
                         <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md" onClick={() => setActiveStep(2)}>
                             Continue
                         </button>
                    </div>
                );
            case 2:
                return (
                    <div className="lg:w-2/3">
                        <h3 className="text-lg font-semibold mb-2">Contact details</h3>
                        <p className="text-sm text-gray-400 mb-6">Enter your contact's information below for verification.</p>
                        <div className="space-y-4">
                             {/* First Name */}
                            <input type="text" name="firstname" placeholder="First name" required value={formData.firstname} onChange={handleChange} className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg" />
                            {/* Last Name */}
                            <input type="text" name="lastname" placeholder="Last name" required value={formData.lastname} onChange={handleChange} className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg" />
                            {/* Phone Number */}
                            <PhoneInput
                                className='w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-lg'
                                defaultCountry="ng"
                                value={formData.phone_number}
                                required
                                onChange={handlePhoneChange} // MODIFIED
                            />
                            {/* BVN */}
                            <input type="text" name="bvn" placeholder="Bank Verification Number (BVN)" required value={formData.bvn} onChange={handleChange} className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg" />
                            {/* NIN */}
                            <input type="text" name="nin" placeholder="National Identification Number (NIN)" required value={formData.nin} onChange={handleChange} className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg" />
                        </div>
                        {/* NEW: Error Display */}
                        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                        <div className="flex justify-between mt-6 gap-4">
                            <button type="button" className="w-1/2 border border-yellow-400 text-yellow-400 py-3 rounded-md" onClick={() => setActiveStep(1)}>
                                Go back
                            </button>
                            {/* MODIFIED: Calls the verification function */}
                            <button type="button" onClick={handleVerificationAndContinue} disabled={isLoading} className="w-1/2 bg-yellow-400 text-black font-medium py-3 rounded-md disabled:bg-gray-500">
                                {isLoading ? 'Verifying...' : 'Verify & Continue'}
                            </button>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <main className="md:w-3/4">
                        <form onSubmit={handleFinalSubmit}> {/* NEW: Form element with onSubmit handler */}
                            <section className="mb-10">
                                <h3 className="text-lg font-semibold mb-1">Company/Business documentation</h3>
                                <UploadBox label="Certificate of incorporation/registration *" handleChange={handleChange} name="certificate_of_incorporation" />
                                <UploadBox label="Certified List of Shareholders/CAC 2.1 *" handleChange={handleChange} name="cac_form_2_1" />
                            </section>
                            <section className="mb-10">
                                <h3 className="text-lg font-semibold mb-1">Proof of Identification</h3>
                                <UploadBox label="Proof of ID (Passport, NIN Slip, or Driver’s License) *" handleChange={handleChange} name="proof_of_id" />
                            </section>
                            <section className="mb-6">
                                <h3 className="text-lg font-semibold mb-1">Proof of Address/Utility Bill</h3>
                                <UploadBox label="Proof of Address *" handleChange={handleChange} name="proof_of_address" />
                                <UploadBox label="Any other relevant documents" handleChange={handleChange} name="other_documents" />
                            </section>
                            <div className="mb-6 flex items-start space-x-3">
                                <Checkbox id="declaration" name="declaration" onChange={handleChange} />
                                <label htmlFor="declaration" className="text-sm text-gray-300">
                                    By submitting this form, I confirm that the information provided is true, accurate, and complete.
                                </label>
                            </div>
                            {/* NEW: Error Display */}
                            {error && <p className="text-red-500 text-sm my-4">{error}</p>}
                            <div className="flex flex-col sm:flex-row gap-4 justify-end">
                                <Button type="button" variant="outline" className="border-yellow-500 bg-transparent text-white" onClick={() => setActiveStep(2)}>
                                    Go back
                                </Button>
                                {/* MODIFIED: This is now the final submit button */}
                                <Button type="submit" disabled={isLoading} className="bg-yellow-500 text-black px-8 py-3 rounded-md disabled:bg-gray-500">
                                    {isLoading ? 'Submitting...' : 'Submit Application'}
                                </Button>
                            </div>
                        </form>
                    </main>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-black text-white py-10 px-6 md:px-20">
            <div className="flex flex-col md:flex-row gap-10">
                <aside className="md:w-1/4 mb-6">
                    <h2 className="text-xl font-semibold mb-6">KYB Verification</h2>
                     {/* Stepper Logic Simplified */}
                    <ol className="space-y-4 text-sm text-gray-400">
                         {['Business details', 'Contact details', 'Documentation'].map((stepName, index) => (
                             <li key={index} className={`flex items-center space-x-2 ${activeStep >= index + 1 ? 'text-yellow-500' : 'text-gray-400'}`}>
                                 <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${activeStep >= index + 1 ? 'bg-yellow-500 text-black' : 'border border-gray-500'}`}>
                                     {index + 1}
                                 </div>
                                 <span>{stepName}</span>
                             </li>
                         ))}
                     </ol>
                </aside>
                {renderStep()}
            </div>
        </div>
    );
};

// export default RegisterBusinessUi;

