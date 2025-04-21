import { Button } from '@/components/ui/button'
import React from 'react'

export default function SkipNavBar() {
  return (
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
  )
}
