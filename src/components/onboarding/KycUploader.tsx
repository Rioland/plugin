'use client';

import { useState } from 'react';
import { toast, Toaster } from "sonner";
import Cookies from 'js-cookie';
import { ApiBaseUrl } from '@/helper/functions';

const KYCVerification = () => {
    const [selfie, setSelfie] = useState(null);
    const [documentType, setDocumentType] = useState('');
    const [documentFile, setDocumentFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e, setFile) => {
        const file = e.target.files[0];
        if (file) setFile(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selfie || !documentType || !documentFile) {
            return toast.error("All fields are required!");
        }

        setLoading(true);
        const formData = new FormData();
        formData.append("selfie_photo", selfie);
        formData.append("document_type", documentType);
        formData.append("tier", '1');
        formData.append("document_file", documentFile);

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
                toast.success("KYC Submitted Successfully!");
            } else {
                toast.error("KYC Submission Failed!");
            }
        } catch (error) {
                console.error(error);
    
            toast.error("Error submitting KYC");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-center">KYC Verification</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Selfie Upload */}
                        <Toaster position="top-center" className='bg-amber-200' />
                <div>
                    <label className="block font-medium mb-1">Upload Selfie</label>
                    <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, setSelfie)} required className="border w-full p-2 rounded" />
                </div>
                
                {/* Document Type */}
                <div>
                    <label className="block font-medium mb-1">Select Document Type</label>
                    <select onChange={(e) => setDocumentType(e.target.value)} required className="border w-full p-2 rounded">
                        <option value="">Select Document Type</option>
                        <option value="nid">National ID Card (NID)</option>
                        <option value="ip">International Passport (IP)</option>
                        <option value="dl">Driver’s License (DL)</option>
                    </select>
                </div>
                
                {/* Document Upload */}
                <div>
                    <label className="block font-medium mb-1">Upload Document</label>
                    <input type="file" accept="image/*,application/pdf" onChange={(e) => handleFileChange(e, setDocumentFile)} required className="border w-full p-2 rounded" />
                </div>
                
                {/* Submit Button */}
                <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400">
                    {loading ? "Submitting..." : "Submit KYC"}
                </button>
            </form>
        </div>
    );
};

export default KYCVerification;
