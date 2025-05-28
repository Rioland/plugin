import React from 'react'

import Navbar from '../../Components/NavBar'

export default function page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="md:max-w-11/12 mx-auto px-4 py-8 flex flex-col gap-8">
        <div className="w-full mx-auto border border-gray-700 p-6 rounded-tr-2xl rounded-tl-2xl shadow-lg">
          <h1 className='font-bold text-3xl'>UI/UX Designer and Developer Needed </h1>

        </div>
        <div className="w-full mx-auto border border-gray-700 p-6  shadow-lg">
          <p className='font-bold text-lg'>We are looking for a talented UI/UX Designer and Developer to create engaging and user-friendly interfaces for our web and mobile applications. The ideal candidate will have a strong portfolio showcasing their design skills and a solid understanding of front-end development. You will collaborate with our team to enhance user experience through innovative design solutions. If you are passionate about creating intuitive designs and have experience in both design and development, we want to hear from you!</p>

        </div>
        <div className="w-full mx-auto border border-gray-700 p-6  shadow-lg">
          <div className='mb-6'>         
             <h1 className='font-bold text-2xl'>Category</h1>
            <p className='font-bold text-lg'>UI/UX Design</p>
            </div>

          <div className='mb-6'>         
             <h1 className='font-bold text-2xl'>Skills</h1>
            <p className='font-bold text-lg'>Prototyping, Graphics design, User flow, App development, Responsive design</p>
            </div>

          <div className='mb-6'>         
             <h1 className='font-bold text-2xl'>Scope</h1>
            <p className='font-bold text-lg'>Medium Well-defined projects, 45 days, Expert</p>
            </div>

          <div className='mb-6'>         
             <h1 className='font-bold text-2xl'>Budget</h1>
            <p className='font-bold text-lg'>Fixed rate </p>
            </div>
            
          <div className='mb-6'>         
             <h1 className='font-bold text-2xl'>Budget</h1>
            <p className='font-bold text-lg'>Fixed rate </p>
            </div>
        </div>
      </main>
    </div>
  )
}
