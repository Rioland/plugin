
'use client'
import React from 'react'
import { Card } from './card'


// interface ServiceCardProps{
//         title?: string,
//         description: string,
//         icon: string,
//         count?: number,
// }
export default function ServiceCard({ title, description, icon, count,count2}) {
  return (
        <Card className="w-full p-8">
        <p className="text-gray-500 pb-6">{title??"Services Offered"}</p>

        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">{count2??25}</h1>
        {icon??  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>}
        </div>

        <p> <span className="text-green-700">{count??10} </span> {description??"New Offered"}</p>
      </Card>
  )
}
