// app/loading.tsx
'use client'

import Image from 'next/image'
import { useRouter } from 'next/router'

import { useState, useEffect } from 'react'

export default function Preloader() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleStop = () => setLoading(false)

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleStop)
    router.events.on("routeChangeError", handleStop)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleStop)
      router.events.off("routeChangeError", handleStop)
    }
  }, [router])

  if (!loading) return null
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
