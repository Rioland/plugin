



'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
// import { Label } from '@/components/ui/label';
import { UploadCloud, UploadCloudIcon } from 'lucide-react';
import PhoneInput from 'react-phone-number-input/input';
import { toast, Toaster } from 'sonner';

import cookie from 'js-cookie';

import { ApiBaseUrl } from '@/helper/functions';
import { useRouter } from 'next/navigation';
import Preloading from '@/components/preloading';
import { createClient } from '@/lib/supabase/clients';
import SkipNavBar from '../../Components/SkipNavBar';
import Swal from 'sweetalert2';
// import RegisterBusinessUi from '../../Components/RegisterKyb';
// import RegisterBusinessUi from '../../Components/RegisterBusinessUiComponent';

const UploadBox = ({
  label,
  handleChange,
  name,
  filename,
}: {
  name: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filename: File | string | null;
}) => {
  const displayName =
    filename instanceof File ? filename.name : filename || "No file chosen";

  return (
    <div className="mb-8">
      <h3 className="text-lg text-white font-medium mb-4">{label}</h3>
      <p className="text-sm text-gray-400 mb-2">
        Only an international Passport, NIN Slip, or Driver&apos;s License is
        accepted. The document must be in good condition (not torn or damaged),
        clear in colour, unexpired, and fully visible with all corners intact.
      </p>
      <label className="w-full border border-gray-700 bg-[#1E1E1E] rounded-lg p-6 flex flex-col items-center text-lg text-gray-400 cursor-pointer hover:border-yellow-500">
        <UploadCloud className="mb-2 text-yellow-500" />
        Click to upload or drag and drop
        <input
          type="file"
          name={name}
          className="hidden"
          onChange={handleChange}
        />
        <p className="text-sm mt-1 text-gray-500">PDF, PNG or JPEG (max. 10MB)</p>
        <p className="text-sm mt-1 text-yellow-500">{displayName}</p>
      </label>
    </div>
  );
};

const KybCompanyDocumentationForm = () => {
  const supabase = createClient();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);

        // Get the logged-in user
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) throw userError;

        if (!user) {
          console.error("No user found. Redirecting to login...");
          window.location.href = "/login";
          return;
        }

        // Fetch user profile from Supabase
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error) throw error;

        setProfile(data);
      } catch (err: any) {
        console.error("Error fetching profile:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [supabase]);

  // Show loader while fetching profile or if not yet available
  if (loading || !profile) {
    return <Preloading />;
  }

  return (
    <div className='py-3 bg-black'>
        <SkipNavBar hideskip={true} />
      {profile.account_type === "individual" ? (
        <UnRegisterBusinessUi profile={profile} />
      ) : (
        <RegisterBusinessUi profile={profile} />
      )}
    </div>
  );
};



export default KybCompanyDocumentationForm;





const RegisterBusinessUi = ({ profile }: { profile: any }) => {
  const supabase = createClient();
  const [activeStep, setActiveStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<any>({
    business_name: "",
    registration_number: "",
    registration_date: "",
    certificate_of_incorporation: null,
    cac_form_2_1: null,
    business_address: "",
    business_nature: "",
    proof_of_id: null,
    proof_of_address: null,
    other_documents: null,
    contact_name: "",
    web_website: "",
    phone_number: "",
    bvn: "",
    nin: "",
    declaration: false,
  });

  const handlePhoneChange = (phone: string) => {
    setError("");
    setFormData((prev: any) => ({ ...prev, phone_number: phone }));
  };

  const handleChange = (e: any) => {
    const { name, type, checked, files, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: type === "file" ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  // Upload file to Supabase Storage and return public URL
  const uploadFile = async (file: File, path: string) => {
    if (!file) return null;

    const { data, error } = await supabase.storage
      .from("business-kyc-documents")
      .upload(`${profile.id}/${path}/${file.name}`, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (error) {
      console.error("Upload error:", error);
      throw new Error("Failed to upload file");
    }

    const {
      data: { publicUrl },
    } = supabase.storage
      .from("business-kyc-documents")
      .getPublicUrl(`${profile.id}/${path}/${file.name}`);

    return publicUrl;
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.declaration) {
      setError("You must agree to the declaration before submitting.");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      // Upload all files first
      const uploadedFiles: any = {};
      const fileFields = [
        "certificate_of_incorporation",
        "cac_form_2_1",
        "proof_of_id",
        "proof_of_address",
        "other_documents",
      ];

      for (const field of fileFields) {
        if (formData[field]) {
          uploadedFiles[field] = await uploadFile(
            formData[field],
            field.replace(/_/g, "-")
          );
        }
      }

      // Save form data to business_kyc table
      const { data, error: insertError } = await supabase
        .from("business_kyc")
        .insert([
          {
            user_id: profile.id,
            business_name: formData.business_name,
            registration_number: formData.registration_number,
            registration_date: formData.registration_date,
            certificate_of_incorporation: uploadedFiles.certificate_of_incorporation,
            cac_form_2_1: uploadedFiles.cac_form_2_1,
            business_address: formData.business_address,
            business_nature: formData.business_nature,
            proof_of_id: uploadedFiles.proof_of_id,
            proof_of_address: uploadedFiles.proof_of_address,
            other_documents: uploadedFiles.other_documents,
            contact_name: formData.contact_name,
            web_website: formData.web_website,
            phone_number: formData.phone_number,
            bvn: formData.bvn,
            nin: formData.nin,
            declaration: formData.declaration,
          },
        ])
        .select();

      if (insertError) throw insertError;
   // Update the user's profile
      const { error: updateError } = await supabase
        .from("profiles")
        .update({ website: formData.web_website })
        .eq("id", profile.id);

      if (updateError) {
        console.error("Error updating profile:", updateError.message);
      }
      Swal.fire({
        title: "Success!",
        text: "Business KYC submitted successfully!",
        icon: "success",
      });
      window.location.href = "/dashboard/seller";
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (activeStep) {
      case 1:
        return (
          <div className="w-full md:w-2/3 mx-auto p-8 rounded-lg">
            <div className="mb-8">
              <h3 className="text-lg text-white mb-2">Business details</h3>
              <p className="text-sm text-gray-400 mb-2">
                Please provide details of your business below.
              </p>
              <div className="bg-gray-600 w-full mb-4 mt-2" style={{ height: "0.3px" }} />

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-300 block mb-1">
                    Business&apos;s legal name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="business_name"
                    required
                    value={formData.business_name}
                    onChange={handleChange}
                    placeholder="E.g ZoomFix Global Limited"
                    className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300 block mb-1">
                    Business Registration Number (RC){" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="registration_number"
                    required
                    value={formData.registration_number}
                    onChange={handleChange}
                    placeholder="E.g RC123456"
                    className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white font-medium mb-1 text-sm">
                    Date of Registration/Incorporation{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    name="registration_date"
                    value={formData.registration_date}
                    onChange={handleChange}
                    required
                    className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-white"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300 block mb-1">
                    Operating Business/Office Address{" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="business_address"
                    required
                    value={formData.business_address}
                    onChange={handleChange}
                    placeholder="E.g 26, Justin Brown, Ikoyi, Lagos, Nigeria"
                    className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300 block mb-1">
                    Nature of Business <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="business_nature"
                    value={formData.business_nature}
                    onChange={handleChange}
                    required
                    placeholder="Please provide a brief description of your business operations."
                    className="w-full bg-[#1E1E1E] border border-gray-700 text-white p-3 rounded-md text-lg placeholder-gray-500 h-28"
                  />
                </div>
              </div>
            </div>
            <button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md"
              onClick={() => setActiveStep(2)}
            >
              Continue
            </button>
          </div>
        );
      case 2:
        return (
          <div className="lg:w-2/3">
            <h3 className="text-lg font-semibold mb-2">Contact details</h3>
            <p className="text-lg text-gray-400 mb-6">
              Enter your contact&apos;s information below.
            </p>
            <div className="space-y-4">
              <div>
                <label className="text-lg font-medium">
                  Contact Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="contact_name"
                  placeholder="E.g Jeffrey"
                  value={formData.contact_name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-lg"
                />
              </div>
              <div>
                <label className="text-lg font-medium">
                  Contact phone number (with country code)
                  <span className="text-red-600">*</span>
                </label>
                <PhoneInput
                  className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-2 text-lg"
                  value={formData.phone_number}
                  onChange={handlePhoneChange}
                  required
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
                  type="button"
                  onClick={() => setActiveStep(3)}
                  disabled={isLoading}
                  className="w-1/2 bg-yellow-400 text-black font-medium py-3 rounded-md disabled:bg-gray-500"
                >
                  {isLoading ? "Verifying..." : "Verify & Continue"}
                </button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <main className="md:w-3/4">
            <form onSubmit={handleFinalSubmit}>
              <section className="mb-10">
                <h3 className="text-lg font-semibold mb-1">
                  Company/Business documentation
                </h3>
                <UploadBox
                  label="Certificate of incorporation/registration *"
                  handleChange={handleChange}
                  name="certificate_of_incorporation"
                  filename={formData.certificate_of_incorporation}
                />
                <UploadBox
                  label="CAC Form 2.1"
                  handleChange={handleChange}
                  name="cac_form_2_1"
                  filename={formData.cac_form_2_1}  
                />
              </section>
              <section className="mb-10">
                <h3 className="text-lg font-semibold mb-1">
                  Proof of Identification
                </h3>
                <UploadBox
                  label="Proof of Identification *"
                  handleChange={handleChange}
                  name="proof_of_id"
                  filename={formData.proof_of_id}
                />
              </section>
              <section className="mb-6">
                <h3 className="text-lg font-semibold mb-1">
                  Proof of Address/Utility Bill
                </h3>
                <UploadBox
                  label="Proof of Address *"
                  handleChange={handleChange}
                  name="proof_of_address"
                  filename={formData.proof_of_address}
                />
                <UploadBox
                  label="Any other relevant documents"
                  handleChange={handleChange}
                  name="other_documents"
                  filename={formData.other_documents}
                />
              </section>
             {/* Declaration Checkbox */}
              <div className="mb-6 flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="declaration"
                  name="declaration"
                  checked={formData.declaration}
                  onChange={handleChange}
                  className="h-5 w-5 cursor-pointer"
                />
                <label
                  htmlFor="declaration"
                  className="text-sm text-gray-300 cursor-pointer"
                >
                  By submitting this form, I confirm that the information
                  provided is true and accurate.
                </label>
              </div>
              {error && <p className="text-red-500 text-sm my-4">{error}</p>}
              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Button
                  variant="outline"
                  className="border-yellow-500 bg-transparent text-white hover:bg-yellow-600 hover:text-black"
                  onClick={() => setActiveStep(2)}
                >
                  Go back
                </Button>
                <Button
                  className="bg-yellow-500 text-black hover:bg-yellow-600 px-8"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
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
          <ol className="space-y-4 text-sm text-gray-400">
            {["Business details", "Contact details", "Documentation"].map(
              (stepName, index) => (
                <li
                  key={index}
                  className={`flex items-center space-x-2 ${
                    activeStep >= index + 1
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                      activeStep >= index + 1
                        ? "bg-yellow-500 text-black"
                        : "border border-gray-500"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <span>{stepName}</span>
                </li>
              )
            )}
          </ol>
        </aside>
        {renderStep()}
      </div>
    </div>
  );
};





const UnRegisterBusinessUi = ({profile}:{profile: any}) => {
    const router=useRouter()
    const [uploading, setUploading] = useState(false);

    //     const profile = useSellerProfile((state) => state.profile); // Access profile from your store
    const token = cookie.get('token')
    const [formData, setFormData] = useState({
        bvn: '',
        firstname: profile.firstname,
        lastname: profile.lastname,
        owner_id_path: null,       // File object
        proof_of_address: null,    // File object
        passport_photo_path: null, // File object
        social_media_links: '',    // String for URL
    });





    const handleChange = (e) => {
        const { name, type, files, value, checked } = e.target;

        let updatedValue;

        if (type === "file") {
            updatedValue = files.length > 0 ? files[0] : null;
        } else if (type === "checkbox") {
            updatedValue = checked;
        } else {
            updatedValue = value;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: updatedValue,
        }));

        console.log("Updated formData.", formData);
    };



    const handleSubmit = async (event) => {
        event.preventDefault();

        setUploading(true);
        const authToken = token;

        if (!authToken) {
            toast.error("Authentication token not found.");
            setUploading(false);
            return;
        }

        try {
            // 1️⃣ First verify BVN first with a simple JSON body
            const verifyResponse = await fetch(
                `${ApiBaseUrl}/seller/kyb/bvn`,
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${authToken}`
                    },
                    body: JSON.stringify({ bvn: formData.bvn, firstname: formData.firstname, lastname: formData.lastname })
                }
            );

            if (!verifyResponse.ok) {
                const error = await verifyResponse.json();
                toast.error(error.message || "BVN verification failed.");
                setUploading(false);
                return;
            }
            const json = await verifyResponse.json();

            if (json.status === false) {
                toast.error(json.message || "BVN verification failed.");
                setUploading(false);
                return;
            }

            // If BVN is successfully verified
            // Now proceed with submission
            const dataToSend = new FormData();

            dataToSend.append("type", "business");

            dataToSend.append("bvn", formData.bvn);
            if (formData.social_media_links) {
                dataToSend.append("social_media_links", formData.social_media_links);
            }
            if (formData.owner_id_path) {
                dataToSend.append("owner_id_path", formData.owner_id_path);
            }
            if (formData.proof_of_address) {
                dataToSend.append("proof_of_address", formData.proof_of_address);
            }
            if (formData.passport_photo_path) {
                dataToSend.append("passport_photo_path", formData.passport_photo_path);
            }

            // 2️⃣ Now submit to KYB API
            const response = await fetch(
                `${ApiBaseUrl}/seller/kyb/individual`,
                {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Authorization": `Bearer ${authToken}`
                    },
                    body: dataToSend,
                }
            );

            if (response.ok) {
                const result = await response.json();
                if (result.status) {
                    toast.success(result.message || "KYB submission successful!");
                    router.push("/dashboard/seller")
                } else {
                    toast.error(result.message);
                }
            } else {
                // Handle API errors (e.g. validation messages)
                const error = await response.json();
                toast.error(error.message || "An error occurred during submission.");
            }
        } catch (error) {
            console.error("Network or other error.", error);
            toast.error("Failed to connect to the server. Please try again.");
        } finally {
            setUploading(false);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f2c94c] to-black text-white">
            <div className="bg-[#111111] rounded-2xl p-10 w-full max-w-2xl shadow-xl border border-neutral-700">
                <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                        <Toaster position="top-center" />
                        <div className=" p-2 rounded-lg">
                            <img
                                src="/images/logo-white-single.svg"
                                alt="Logo"
                                className="w-10 h-auto mb-4"
                            />
                        </div>
                    </div>
                    <h1 className="text-xl font-semibold">KYB for Unregistered Business</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="mb-5">
                        <label htmlFor="fname" className="block mb-1 text-sm">First Name</label>
                        <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md">
                            {/* <User className="h-4 w-4 text-purple-400" /> */}
                            <input
                                type="text"
                                name="firstname"
                                id="fname"
                                value={formData.firstname}
                                // defaultValue={profile?.firstname}
                                required
                                onChange={handleChange}
                                placeholder="First name"
                                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400 p-3"
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="lname" className="block mb-1 text-sm">Last Name</label>
                        <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md">
                            {/* <User className="h-4 w-4 text-purple-400" /> */}
                            <input
                                type="text"
                                name="lastname"
                                id="lname"
                                value={formData.lastname}
                                // defaultValue={profile?.lastname}
                                required
                                onChange={handleChange}
                                placeholder="Last name"
                                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400 p-3"
                            />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="bvn" className="block mb-1 text-sm">Bank verification number</label>
                        <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md">
                            {/* <User className="h-4 w-4 text-purple-400" /> */}
                            <input
                                type="text"
                                name="bvn"
                                id="bvn"
                                value={formData.bvn}
                                required
                                onChange={handleChange}
                                placeholder="BVN"
                                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400 p-3"
                            />
                        </div>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="owner_id_path" className="block mb-1 text-sm">Business Owner ID</label>
                        <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md">
                            <UploadCloudIcon className="h-4 w-4 text-purple-400" />
                            <input
                                type="file"
                                name="owner_id_path" // Corrected name
                                id="owner_id_path"
                                onChange={handleChange}
                                required
                                accept=".jpg,.jpeg,.png,.pdf" // Specify accepted file types
                                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400 p-3"
                            />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Valid ID (International Passport, National ID Card, or Driver’s License)*</p>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="passport_photo_path" className="block mb-1 text-sm">Passport Photograph</label>
                        <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md">
                            <UploadCloudIcon className="h-4 w-4 text-purple-400" />
                            <input
                                type="file"
                                name="passport_photo_path" // Corrected name
                                id="passport_photo_path"
                                required
                                onChange={handleChange}
                                accept=".jpg,.jpeg,.png" // Specify accepted file types
                                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400 p-3"
                            />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Recent passport-sized photo.</p>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="proof_of_address" className="block mb-1 text-sm">Proof of Address</label>
                        <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md">
                            <UploadCloudIcon className="h-4 w-4 text-purple-400" />
                            <input
                                type="file"
                                name="proof_of_address" // Corrected name, added input
                                id="proof_of_address"
                                required
                                onChange={handleChange}
                                accept=".jpg,.jpeg,.png,.pdf" // Specify accepted file types
                                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400 p-3"
                            />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Utility bill or bank statement (not older than 3 months).</p>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="social_media_links" className="block mb-1 text-sm">Add Your Social Media Links</label>
                        <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md">
                            {/* You might want a different icon here, or none */}
                            <input
                                type="url"
                                name="social_media_links" // Corrected name
                                id="social_media_links"
                                onChange={handleChange}
                                placeholder='e.g., https://instagram.com/yourbusiness'
                                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400 p-3"
                            />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Optional: Link to your business's social media page.</p>
                    </div>

                    {uploading ? (
                        <img src="/images/preloader.gif" alt="Loading..." className="mx-auto h-12" />
                    ) : (
                        <button
                            type="submit"
                            className="w-full py-2 rounded-md bg-[oklch(0.79_0.18_86.03)] text-black font-semibold hover:opacity-90 transition"
                        >
                            Submit Application
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
}
