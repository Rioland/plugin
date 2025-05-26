"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { toast, Toaster } from "sonner"
export default function CloseAccount() {
                const [loading, setLoading] = useState(false);
  return (
        <div className='p-2'>
                <p className='text-2xl font-semibold py-3'>Close account</p>
                <p className='py-3'>Warning: If you close your account, you will be unsubscribed from all your 5 courses, and will lose access forever.</p>
        <form >
        <Toaster position="top-center" />
           <div className=" flex flex-col md:flex-row gap-4">
                   <div className=" p-1">
                           <label htmlFor="password"> Enter Password</label><br />
                           <input type="password" id="password" placeholder="**********" name="password" className="p-2 border-1 border-gray-400 mt-2 rounded w-full  md:w-200 " />
                   </div>

           </div>
           

           {loading ? (
                   <div className="flex items-center justify-center">
                           <i className="fa-solid fa-circle-notch animate-spin text-4xl"></i>
                   </div>
           ) : <Button type="submit" className="w-fit bg-yellow-500 py-6 mt-10 ">
                  Save <i className="fal fa-arrow-right-long"></i>
           </Button>}
        </form>
   </div>
  )
}
