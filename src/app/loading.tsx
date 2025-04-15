// app/loading.tsx
'use client'

import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <Image
        src="/images/preloader.gif" // Replace this with your spinner path
        alt="Loading..."
        width={60}
        height={60}
      />
    </div>
  )
}
