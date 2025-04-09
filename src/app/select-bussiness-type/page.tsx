'use client'

import { Button } from '@/components/ui/button';
import React from 'react';


const KYCVerification = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-500 to-black flex flex-col items-center justify-center  py-10 md:py-0">
      {/* Back Button */}
      {/* <div className="absolute top-4 left-4">
        <Button variant="ghost">Back</Button>
      </div> */}

      {/* Header */}
      <div className="text-center mb-8">
        <div className="mb-4">
          {/* Icon placeholder */}
          <img src="/images/logo-white-single.svg" alt="KYC Icon" className="mx-auto h-16 w-16" />
        </div>
        <h1 className="text-white text-3xl font-bold">KYC Verification</h1>
      </div>

      {/* Options */}
      <div className="flex flex-col md:flex-row  space-x-8 gap-4 md:gap-0">
        {/* Registered Business Card */}
        <div className="bg-black text-white p-6 rounded-lg shadow-lg w-80 cursor-pointer" onClick={()=>{
          localStorage.setItem('account_type', 'business');
          window.location.href = '/signup/register-seller';
        }}>
          <div className="mb-4">
            {/* Illustration placeholder */}
            <img
              src="/images/regbusiness.png"
              alt="Registered Business"
              className="mx-auto "
            />
          </div>
          <h2 className="text-xl font-semibold mb-4">Registered Business</h2>
          <p className="text-sm">
            I run an officially registered business with all the necessary documents, like a Certificate of Incorporation.
            My business is fully set up and recognized as a legal entity, so this option is right for me!
          </p>
        </div>

        {/* Unregistered Business Card */}
        <div className="bg-black text-white p-6 rounded-lg shadow-lg w-80 cursor-pointer" onClick={()=>{
          localStorage.setItem('account_type', 'individual');
          window.location.href = '/signup/register-seller';
        }}>
          <div className="mb-4">
            {/* Illustration placeholder */}
            <img
              src="/images/unregbusiness.png"
              alt="Unregistered Business"
              className="mx-auto  "
            />
          </div>
          <h2 className="text-xl font-semibold mb-4">Unregistered Business</h2>
          <p className="text-sm">
            I run my business as an individual without formal registration. As a freelancer, sole proprietor, or someone
            just starting out, this option suits me perfectly!
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <Button variant="link" className='text-white cursor-pointer'  onClick={()=>window.location.href='/login'}>Already have an account? <span className='text-yellow-500'> Login</span></Button>
      </div>
    </div>
  );
};

export default KYCVerification;
