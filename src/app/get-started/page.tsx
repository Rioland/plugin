import { Card } from '@/components/ui/card';
import React from 'react';

const PluginPromo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white"
    style={{ backgroundImage: 'url(/images/getstarted.png)', backgroundSize: 'cover', backgroundPosition: 'center',backgroundRepeat: 'no-repeat' }}>
    
      <Card className='bg-black text-white p-8 rounded-lg shadow-2xl w-full md:w-fit border-0 py-20 px-16'>
      <div className="text-center">
        {/* Title */}
        <div className=" p-2 rounded-lg">
            <img
                src="/images/logo-wihte.png"
                alt="Logo"
                className="w-24 h-auto mb-4 mx-auto"  />
           
        </div>
        {/* <h1 className="text-5xl font-bold mb-4">Plugin</h1> */}
        <p className="text-xl mb-6">Access Services Instantly</p>
        {/* Description */}
        <p className="text-sm mb-8 w-100  mx-auto">
          Discover and book top-rated service providers to meet all your needs in one place.
        </p>
        {/* Get Started Button */}
        <button className="bg-yellow-500 text-black font-bold py-2 px-6 rounded">
          Get Started
        </button>
      </div>
      </Card>
    </div>
  );
};

export default PluginPromo;
