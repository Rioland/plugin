"use client";
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Info } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { ApiBaseUrl } from '@/helper/functions';
import { toast, Toaster } from "sonner"

export default function OtpVerification() {
  const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(6).fill(null));
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [timer, setTimer] = useState(7);
  const [loading, setLoading] = useState(false);
   const searchParams = useSearchParams();
        const email = searchParams.get('email');
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const otp = formData.get("otp") as string;
    if (!otp) {
            toast.error("OTP field is required",);
            return;  // stop the function execution here if otp field is required
    }
    setLoading(true);
    // api call
    fetch(`${ApiBaseUrl}/register-step-two`, {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    email: email,
                    verification_code: otp,
            }),
    })
            .then((res) => res.json())
            .then((data) => {
                    console.log(data);
                    if (data.status == false) {
                            toast.error(data.message,);
                            setLoading(false);
                    } else {
                            setLoading(false);
                            toast.success("Registration successful",);
                            window.location.href = "/signup/register-seller/onboarding";

                    }
            });
};
  const handleResendOTP = () => {

    if (timer > 0) {
      toast.error("Please wait for the timer to finish before resending OTP.");
      return;
    }
    setTimer(60); 
    fetch(`${ApiBaseUrl}/resend-verification`, {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    email: email
            }),
    })
            .then((res) => res.json()).then((data) => {
                    console.log(data);
                    if (data.status == false) {
                      
                            toast.error(data.message,);

                            // setLoading(false);
                    } else {
                       
                            toast.success(data.message);

                            // setLoading(false);
                    }
            });


    console.log("OTP Resent!");
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f2c94c] to-black text-white px-3">
      {/* Back button */}
      {/* <div className="absolute top-6 left-6 flex items-center text-white space-x-2 cursor-pointer">
        <ArrowLeft size={18} />
        <span>Back</span>
      </div> */}

      {/* OTP Container */}
    <form onSubmit={handleSubmit}>
    <div className="bg-[#111111] rounded-2xl p-10 w-full max-w-md shadow-xl border border-neutral-700">
        <div className="text-center mb-6">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className="p-2 rounded-lg">
              <img
                src="/images/logo-white-single.svg"
                alt="Logo"
                className="w-18 h-auto mb-4"
              />
            </div>
          </div>
          <h1 className="text-xl font-semibold mb-2">OTP Verification</h1>
          <p className="text-sm text-gray-400">Please enter the OTP sent to your device to continue</p>
          <Toaster position="top-center" />
        </div>

        {/* OTP Input Fields */}
        <div className="flex justify-center space-x-3 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
          
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              className="w-12 h-12 text-center text-lg bg-black border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[oklch(0.79_0.18_86.03)]"
            />
          ))}
        </div>

        {/* Resend Timer */}
        <div className="text-center text-lg text-gray-400 mb-5">
          Didn’t get a code? Resending in <span className="text-[oklch(0.79_0.18_86.03)] ">{timer<1 ? <div className='cursor-pointer text-lg font-semibold' onClick={(()=>{handleResendOTP()})} >Resend otp</div> :`0:${timer < 10 ? '0' : ''}${timer}`}</span>
        </div>

        {/* Continue Button */}
        {loading?<img src="/images/preloader.gif" className="mx-auto" />: <button
          type="submit"
          className="w-full py-2 rounded-md bg-[oklch(0.79_0.18_86.03)] text-black font-semibold hover:opacity-90 transition mb-4"
        >
          Continue
        </button>}
       

        {/* Info Link */}
        <div className="flex justify-center items-center text-xs text-gray-500 space-x-2">
          <Info size={14} />
          <span>Learn more about OTP & Security</span>
        </div>
      </div>
    </form>
    </div>
  );
}
