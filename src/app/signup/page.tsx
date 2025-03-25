"use client"
import React from 'react'

export default function page() {
  return (
    <div className='pt-20 '>
        {/* place 2 shadch link in a row adding register as seller , and register as buyer */}
        <div className="flex gap-2 items-center justify-center mx-auto">
            <a href="/signup/register-seller" className="text-sm text-blue-500 hover:text-blue-600">Register as Seller</a>
            <a href="/signup/register-buyer" className="text-sm text-blue-500 hover:text-blue-600">Register as Buyer</a>
        </div>
        
        


    </div>
  )
}
