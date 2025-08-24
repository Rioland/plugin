/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button'
import React from 'react'

export default function SkipNavBar({hideskip=false}:{hideskip?:boolean}) {
  return (
        <div className='flex justify-between items-center w-full  px-5 py-5 '>
        <div className="">
          <img src='/images/Logo-yellow.png' className=' h-9' />

        </div>

        {!hideskip && (
          <div className="">
            <Button  className="bg-yellow-500 text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-white hover:text-yellow-500" onClick={()=>{window.location.href='/dashboard/seller/'}}>
              Skip for now
            </Button>
          </div>
        )}
      </div>
  )
}
