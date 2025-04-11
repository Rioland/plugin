'use client'
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Toaster } from "sonner";

 interface StartKcProps {
        onContinue?: () => void
}
const StartKc: React.FC<StartKcProps> = ({ onContinue }) => {

        return (<div>
                <h1 className='text-center text-4xl  font-semibold  py-8 text-blue-950'>KYC Verification</h1>
                <p className='text-center text-lg text-gray-600 md:w-1/2 mx-auto pb-12'>To comply with regulation each participant will have to go through indentity verification (KYC/AML) to prevent fraud causes. Please, complete our fast and secure verification process to participate in our token sale.</p>

                <Card className='w-full md:w-1/2 md:mx-auto py-12 px-12'>
                        <div className='w-fit border-1 border-gray-300 p-8 rounded-full mx-auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-12">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                </svg>

                        </div>
                        <p className='text-center text-lg text-gray-600'>You have not submitted your necessary documents to verify your identity. In order to purchase our tokens, please verify your identity.</p>
                        {/*  */}
                        <Button className="w-fit bg-yellow-500 py-6 mt-10 mx-auto  " onClick={onContinue}>
                                Click here to complete your kyc
                        </Button>
                </Card>
                <Toaster position="top-center" />
        </div>);
}

export default StartKc;