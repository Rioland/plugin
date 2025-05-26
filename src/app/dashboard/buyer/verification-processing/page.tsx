import Image from "next/image"

export default function VerificationPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#E4B041] via-[#E4B041]/60 to-black text-white px-4">
      <div className="flex flex-col items-center space-y-4">
        <div className="  flex items-center justify-center">
          <Image
            src="/images/logo-white-single.svg"
            alt="Plugin Logo"
            width={24}
            height={24}
          />
        </div>
        <h1 className="text-xl font-semibold">Verification</h1>
      </div>

      <div className="mt-10 bg-[#111] p-10 rounded-2xl flex flex-col items-center text-center max-w-sm w-full">
        <Image
          src="/images/security-shield.png"
          alt="Verification Icon"
          width={100}
          height={100}
        />
        <p className="mt-6 text-sm font-medium">Verification in progress</p>
      </div>
    </div>
  )
} 
