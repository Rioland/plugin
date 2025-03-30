import React from 'react'
import { useState } from "react";


import SellerSkills from './SellerSkills';
import UploadProfilePicture from './UploadProfilePicture';
import SetBio from './SetBio';
interface OnBoardingScreenProps {
  screen?: string;
  // onNext?: () => void;
  onPrevious?: () => void;
}
const OnBoardingScreen: React.FC<OnBoardingScreenProps> = ({ screen, onPrevious }) => {
  // const [headingText,setHeadingText]=useState('Lorem ipsum dolor sit amet consectetur adipisicing elit.')
  // const [bodyText,setBodyText]=useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos alias neque non! Porro soluta blanditiis impedit quisquam nemo.')

  const [onboardingState, setOnboardingState] = useState(screen);




  return (
    <>
      {onboardingState == 'ProfilePicture' ? <UploadProfilePicture onPrevious={onPrevious} /> : onboardingState == "Bio" ? 
      <SetBio /> : onboardingState == 'Skills' ? (<SellerSkills />

      ) : null}
    </>
  );

}
export default OnBoardingScreen;


