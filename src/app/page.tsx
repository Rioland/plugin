'use client';
import React from 'react';

const PluginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-500 to-black flex flex-col items-center justify-center">
      <div className="text-center mb-8">
  
        <div className=" p-2 rounded-lg">
            <img
                src="/images/logo-white-single.svg"
                alt="Logo"
                className="w-18 h-auto mb-4 mx-auto"  />
           
        </div>
        <h1 className="text-white text-3xl">What brings you to Plugin?</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-6">
        <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-sm cursor-pointer" onClick={() => window.location.href = '/get-started'}>
          <div className="flex justify-center mb-4">
          <img
                src="/images/ineedsservice.svg"
                alt="Logo"
                className="w-25 h-auto mb-4 mx-auto"  />
            {/* <div className="text-6xl">&#129300;&#128161;</div> Thinking face and lightbulb */}
          </div>
          <h2 className="text-xl font-bold mb-4">I Need a Service</h2>
          <p>
          I&#39;m looking for trusted professionals to handle tasks like home repairs, beauty treatments, event planning, or fitness coaching. I want convenience and quality at my fingertips.
          </p>
        </div>
        <div className="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-sm cursor-pointer" onClick={() => window.location.href = '/select-bussiness-type'}>
          <div className="flex justify-center mb-4">
            {/* <div className="text-6xl">&#128682;&#129309;</div> Door and handshake
             */}
            <img
                src="/images/offer-service.svg"
                alt="Logo"
                className="w-38 h-auto mb-4 mx-auto"  />
          </div>
          <h2 className="text-xl font-bold mb-4">I Offer a Service</h2>
          <p>
          I&#39;m a professional or business ready to connect with more clients, showcase my skills, and grow my brand. I need a platform to manage bookings and gain visibility.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <a href="/login" className="text-white ">Already have an account? <span className='text-yellow-500'> Login</span></a>
      </div>
    </div>
  );
};

export default PluginPage;
