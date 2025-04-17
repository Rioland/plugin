'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/states/store';
// import { useNavigate } from 'react-router-dom';
// import { Icon } from 'lucide-react'; // Placeholder, replace with actual icon if needed

const KYBIntroScreen = () => {
  const profile=useSelector((state:RootState)=>(state.sellersProfileReducer));

  return (
    <div className='bg-black text-white  px-4 h-screen ' style={{ backgroundImage: '/images/Wrapper.png', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className='flex justify-between items-center w-full  px-5 py-5 '>
        <div className="">
          <img src='/images/Logo-yellow.png' className=' h-9' />

        </div>

        <div className="">
          <Button variant="outline" className="bg-white text-black text-sm font-medium px-4 py-2 rounded-md" onClick={()=>{window.location.href='/dashboard/seller-dashboard/'}}>
            Skip for now
          </Button>
        </div>
      </div>
      {profile.account_type === 'individual' ? <KYBUnregisterCard /> : <KYBRegisterCard />}

    </div>
  );
};

export default KYBIntroScreen;


const KYBUnregisterCard = () => {

  const router = useRouter();
  return <Card className="bg-[#2C2C2C] w-full max-w-md rounded-xl shadow-lg text-center py-8 px-6 border-0 mx-auto mt-8">
    <CardContent className=''>
      <div className="flex justify-start mb-4">
        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
          <span className="">
            <img src="/images/Group 84.png" alt="Logo" className="w-4 h-4" />
          </span>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-2 text-white text-start">Plugin Vendor KYB Onboarding Form</h2>
      <p className="text-sm text-gray-300 mb-4 text-start">
        Please fill out every section of this form with accurate information.
      </p>
      <div className="text-sm text-gray-300 text-left mb-6">
        To successfully onboard as a vendor on Plugin, ensure you provide the following details:
        <ul className="list-disc list-inside mt-2">
          <li>Proof of address</li>
          <li>A valid ID document to verify your identity</li>
        </ul>
      </div>

      <Button className="bg-yellow-500 text-black w-full font-semibold py-2 rounded-md hover:bg-yellow-600" onClick={() => router.push('/dashboard/seller-dashboard/onboarding/kyb-form')}>
        Get started
      </Button>
    </CardContent>
  </Card>
}

function KYBRegisterCard() {

  const router = useRouter();
  return <Card className="bg-[#2C2C2C] w-full max-w-md rounded-xl shadow-lg text-center py-8 px-6 mx-auto border-0 mt-8">
    <CardContent>
      <div className="flex justify-start mb-4">
        <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
          <span className="">
            <img src="/images/Group 84.png" alt="Logo" className="w-4 h-4" />
          </span>
        </div>
      </div>

      <h2 className="text-lg font-semibold mb-2 text-white text-start">Plugin Vendor KYB Onboarding Form</h2>
      <p className="text-sm text-gray-300 mb-4 text-start">
        Please fill out every section of this form with accurate information.
      </p>
      <div className="text-sm text-gray-300 text-left mb-6">
        To successfully onboard as a vendor on Plugin, ensure you provide the following details:
        <ul className="list-disc list-inside mt-2">
          <li>Company/Business registration documents</li>
          <li>Proof of address</li>
          <li>ID documents of your directors and shareholders</li>
        </ul>
      </div>

      <Button className="bg-yellow-500 text-black w-full font-semibold py-2 rounded-md hover:bg-yellow-600" onClick={() => router.push('/dashboard/seller-dashboard/onboarding/kyb-form')}>
        Get started
      </Button>
    </CardContent>
  </Card>
}