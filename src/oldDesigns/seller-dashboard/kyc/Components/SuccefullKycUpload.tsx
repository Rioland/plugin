'use client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Toaster } from "sonner";

interface SuccefullKycUploadProps {
        onContinue?: () => void
}
const SuccefullKycUpload: React.FC<SuccefullKycUploadProps> = ({ onContinue }) => {
        const router=useRouter();
        return (<div>
                <h1 className='text-center text-4xl  font-semibold  py-8 text-blue-950'>Begin your ID-Verification</h1>
                <p className='text-center text-lg text-gray-600 md:w-1/2 mx-auto pb-12'>Verify your identity to participate in tokensale.</p>

                <Card className='w-full md:w-1/2 md:mx-auto py-12 px-12'>
                        <div className='w-fit border-2 border-green-500 p-8 rounded-full mx-auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-12">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>


                        </div>
                        <p className='text-center text-lg text-gray-600'>You have not submitted your necessary documents to verify your identity. In order to purchase our tokens, please verify your identity.</p>
                        {/*  */}
                        <Button className="w-fit bg-yellow-500 py-6 mt-10 mx-auto  " onClick={()=>router.push('/dashboard/seller-dashboard/profile')} >
                                Back to Profile
                        </Button>
                </Card>
                <Toaster position="top-center" />
        </div>);
}

export default SuccefullKycUpload;