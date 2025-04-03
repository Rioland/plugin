'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import MyModal from "@/components/ui/MyModal"
import { Fragment, useEffect, useState } from "react";
import Cookies from "js-cookie";
import OnBoardingScreen from "@/components/onboarding/OnBoardingScreen";
import { Chart1 } from "./Components/Chart1";
import ServiceCard from "@/components/ui/ServiceCard";




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
    } else if (currentUser.bio == null || !currentUser.bio) {
      setOnboardingState('Bio');
      setshowOnboarding(true);
    } else if (currentUser.skills == null || !currentUser.skills || currentUser.skills.length == 0) {
      setOnboardingState('Skills');
      setshowOnboarding(true);
    } else {
      setshowOnboarding(false);
    }
  }, [])

  return (
    <section className="px-8 py-7">


      <h1 className="uppercase text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-500 py-4">Lorem ipsum dolor sit amet, consectetur.</p>

      <div className="mt-3 flex flex-col gap-4 md:flex-row md:justify-between md:items-center ">
        {/*  */}
        <ServiceCard title={null} icon={null} description={null} count={null} count2={null} />
        <ServiceCard title={"Completed Services"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
        } description={"New Completed"} count={"80+"} count2={1292} />
        <ServiceCard title={'in Queue Services'} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
        </svg>
        } description={'New Queue'} count={'35+'} count2={182} />
        <ServiceCard title={'Total Review'} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
        </svg>
        } description={'New Review'} count={'290+'} count2={'22,786'} />

      </div>

      <MyModal isOpen={showOnboarding} onClose={() => { setshowOnboarding(false) }}  >
        <OnBoardingScreen screen={onboardingState} onPrevious={() => { setshowOnboarding(false) }} />
      </MyModal>

    </section>
  )
}
