
'use client'
import React, { Fragment } from 'react'
// import { toast, Toaster } from 'sonner';
import Cookies from 'js-cookie';
// import { useDropzone } from 'react-dropzone';
import SuccefullKycUpload from './Components/SuccefullKycUpload';
import StartKc from './Components/StartKc';
import UpgradeToleveltwo from './Components/UpgradeToleveltwo';

export default function page() {
        // const [loading, setLoading] = useState(false);
        //   const [profile, setProfile] = useState(null);
        const user = Cookies.get("currentUser") as string;
        const currentUser = user ? JSON.parse(user) : null;
        console.log(currentUser);
        const [kycCurrentPage, setkycCurrentPage] =React.useState("start");


        return (
                <Fragment>
                        {kycCurrentPage == 'start' ? <StartKc onContinue={() => setkycCurrentPage('level2')} /> : kycCurrentPage == 'level2' ? <UpgradeToleveltwo onContinue={() => setkycCurrentPage('success')} /> : <SuccefullKycUpload />}

                </Fragment>
        )
}




