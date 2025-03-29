'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import MyModal from "@/components/ui/MyModal"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import OnBoardingScreen from "@/components/onboarding/OnBoardingScreen";




export default function Page() {
  const user = Cookies.get("currentUser") as any;
  const [showOnboarding, setshowOnboarding] = useState(false);
  const currentUser = user ? JSON.parse(user) : null;
  // console.log(currentUser);
  const [onboardingState, setOnboardingState] = useState('ProfilePicture');

  // Check if user has uploaded a profile picture and update the state accordingly
  useEffect(() => {
    if (!currentUser.profile_picture == null) {
      setOnboardingState('ProfilePicture');
      setshowOnboarding(true);
    } else if (currentUser.bio == null) {
      setOnboardingState('Bio');
      setshowOnboarding(true);
    } else if (currentUser.skills==null || currentUser.skills.length){
      setOnboardingState('Skills');
      setshowOnboarding(true);
    }else if (currentUser.kyc_verified==0){
      setOnboardingState('kyc');
      setshowOnboarding(true);
    }else{
      setshowOnboarding(false);
    }
  }, [])

  return (
    <div>

      <Card className="w-full md:w-3/5 mx-auto">
        <CardHeader >
          <h2>Welcome! We are going to work you through setting up your Account</h2>
        </CardHeader>
        <CardContent>


        </CardContent>
        {/* <CardDescription >Description</CardDescription> */}
      </Card>

      <MyModal isOpen={showOnboarding} onClose={() => { setshowOnboarding(false) }}  >
        <OnBoardingScreen screen={onboardingState}onPrevious={() => { setshowOnboarding(false) }} />
      </MyModal>
    </div>
  )
}
