'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import MyModal from "@/components/ui/MyModal"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import OnBoardingScreen from "@/components/onboarding/OnBoardingScreen";
import { Chart1 } from "./Components/Chart1";




export default function Page() {
  const user = Cookies.get("currentUser") as string;
  const [showOnboarding, setshowOnboarding] = useState(false);
  const currentUser = user ? JSON.parse(user) : null;
  console.log(currentUser);
  const [onboardingState, setOnboardingState] = useState('ProfilePicture');

  // Check if user has uploaded a profile picture and update the state accordingly
  useEffect(() => {
    if (!currentUser.profile_picture == null || !currentUser.profile_picture) {
      setOnboardingState('ProfilePicture');
      setshowOnboarding(true);
    } else if (currentUser.bio == null ||  !currentUser.bio ) {
      setOnboardingState('Bio');
      setshowOnboarding(true);
    } else if (currentUser.skills==null || !currentUser.skills){
      setOnboardingState('Skills');
      setshowOnboarding(true);
    }else{
      setshowOnboarding(false);
    }
  }, [])

  return (
    <div>

      <Chart1/>

      <MyModal isOpen={showOnboarding} onClose={() => { setshowOnboarding(false) }}  >
        <OnBoardingScreen screen={onboardingState}onPrevious={() => { setshowOnboarding(false) }} />
      </MyModal>
    </div>
  )
}
