'use client'
import React, { Fragment, useEffect, useState } from 'react'
// import { toast, Toaster } from 'sonner';
import Cookies from 'js-cookie';
// import { useDropzone } from 'react-dropzone';
import SuccefullKycUpload from './Components/SuccefullKycUpload';
import StartKc from './Components/StartKc';
import UpgradeToleveltwo from './Components/UpgradeToleveltwo';
import { setCurrentPage } from '@/app/myslices';


export default function Page() {  // Renamed to "Page"
    const [kycCurrentPage, setkycCurrentPage] = React.useState('start');
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const user = Cookies.get("currentUser") as string;
        const currentUser = user ? JSON.parse(user) : null;
        setProfile(currentUser);
        console.log(currentUser);
     
    }, []);




    if (!profile) return <p className="text-center py-10">Loading profile...</p>;

    return (
        <div>
            {profile.account_type == 'individual' ?
                <Fragment>
                    { !profile.kycverifications ? (
                        <StartKc onContinue={() => setkycCurrentPage('level2')} />
                    ) : (
                        <UpgradeToleveltwo onContinue={() => setkycCurrentPage('success')} />
                    ) }
                </Fragment> : <p> coming soon .......</p>
            }
        </div>
    )
}
