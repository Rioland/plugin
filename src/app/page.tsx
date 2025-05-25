"use client"


import { toast, Toaster } from "sonner"
import { ApiBaseUrl, fetchAndReturnUserProfile, fetchAndStoreUserProfile } from "@/helper/functions";
import Cookies from "js-cookie";

import { useDispatch } from "react-redux";
import { updateSellersProfile } from "@/states/sellersProfileSlice";
import React from "react";



import { useState } from 'react';
import { Eye, EyeOff, User, Lock } from 'lucide-react';
import Link from "next/link";

export default function LoginForm() {
  const dispatcher = useDispatch();

  const [loading, setLoading] = React.useState(false);
const[rememberMe,setRememberMe]=useState(localStorage.getItem('rememberMe')=='true'?true:false)



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
      toast.error("All fields must be provided",);

    } else {
      setLoading(true);
      fetch(`${ApiBaseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then(async (data) => {
          console.log(data);
          if (data.status === false) {
           
            toast.error(data.message,);

            setLoading(false);
          } else {
            if(rememberMe==true){
              localStorage.setItem("rememberMe", "true");
              localStorage.setItem("username", username);
              localStorage.setItem("password", password);
            }
            if(data.data.verified==true){
              setLoading(false);
              toast.success("Login successful",);
              // Set cookies instead of localStorage
              Cookies.set("token", data.data.token, {
                expires: 0.5,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
              });
              Cookies.set("role", data.data.role, {
                expires: 0.5,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
              });
      
              if (data.data.role == 1) {
                const profile = await fetchAndReturnUserProfile();
                console.log(profile);
                if (profile && profile.id) {
                  dispatcher(updateSellersProfile(profile));
                  if(!profile.kycverifications || profile.kycverifications.length==0){
                    window.location.href = `/dashboard/seller-dashboard/onboarding`;
                  }else{
                    window.location.href = `/dashboard/seller-dashboard`;
                  }
                  // window.location.href = `/dashboard/seller-dashboard`;
                }else{
                  toast.error("Failed to fetch user profile",);
                  setLoading(false);
                }
               
              } else {
                // window.location.href = `/dashboard/buyer-dashboard`;
                setLoading(false);
              }
            }else{
              fetch(`${ApiBaseUrl}/resend-verification`, {
                method: "POST",
                headers: {
                        "Content-Type": "application/json",
                },
                body: JSON.stringify({
                        email: data.data.user.email
                }),
        })
                .then((res) => res.json()).then((data) => {
                        console.log(data);
                        if (data.status == false) {
                          
                                toast.error(data.message,);
  
                                // setLoading(false);
                        } else {
                           
                                toast.success(data.message);
                                window.location.href = "/signup/verify-otp";
    
                                // setLoading(false);
                        }
                });
            }
        
        

          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
          setLoading(false);
        });
    }

  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f2c94c] to-black text-white p-2">
      <div className="bg-[#111111] rounded-2xl p-10 w-full max-w-xl shadow-xl border border-neutral-700">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <Toaster  position="top-center"  />
           
            <div className=" p-2 rounded-lg">
            <img
                src="/images/logo-white-single.svg"
                alt="Logo"
                className="w-18 h-auto mb-4"  />
            </div>
          </div>
          <h1 className="text-xl font-semibold">Login to Plugin</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-5">
            <label className="block mb-1 text-sm">Username</label>
            <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md">
              <User className="h-4 w-4 text-purple-400" />
              <input
                type="text"
                name="username"
                id="username"
                required
                defaultValue={localStorage.getItem('username')??""}
                autoComplete="username"
                autoFocus
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck="false"
                placeholder="Username"
                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400 p-3"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="block mb-1 text-sm">Password</label>
            <div className="flex items-center bg-neutral-800 px-3 py-2 rounded-md relative">
              <Lock className="h-4 w-4 text-purple-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                defaultValue={localStorage.getItem('password')??''}
                autoComplete="current-password"
                required
                name="password"
                id="password"
                className="bg-transparent ml-2 outline-none w-full text-sm placeholder-gray-400 py-3"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-purple-300"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            <div className="text-right mt-1">
              <a href="/forgot-password" className="text-[oklch(0.79_0.18_86.03)] text-xs">Forgot password?</a>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-5">
            <input type="checkbox" id="remember" className="accent-purple-500" checked={rememberMe}  onChange={(e)=>setRememberMe(e.target.checked)}/>
            <label htmlFor="remember" className="text-sm">Remember Me</label>
          </div>
{loading?<img src="/images/preloader.gif" className="mx-auto" />:    <button
            type="submit"
            className="w-full py-2 rounded-md bg-[oklch(0.79_0.18_86.03)] text-black font-semibold hover:opacity-90 transition"
          >
            Log in
          </button>}
       

          <p className="text-center text-sm mt-4">
            Do not have an account?{' '}
            <Link href="/select-account-type" className="text-[oklch(0.79_0.18_86.03)] font-medium cursor-pointer" >Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}











// const MyOldDesign= () => {
//   <Fragment>
//     <Myheader/>
//     <div className="pt-34 px-4"  >

// <h1 className="text-center text-5xl font-bold  mb-15">Log In</h1>
// <div className="w-full lg:w-2/5 mx-auto ">
//   {/* Your content goes here */}
//   <Card className="border-none py-16">
//     <CardHeader>
//       <CardTitle className="pb-2">We&apos;re glad to see you again!</CardTitle>
//       <CardDescription className="font-semibold text-sm mb-5">Don&apos;t have an account?  <a href="/signup" className="text-yellow-500">Sign Up!</a></CardDescription>

//       <CardContent>
//         <form className="space-y-6" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <Label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">Username</Label>
//             <Input
//               type="text"
//               name="username"
//               id="username"
//               required
//               className="shadow-sm focus:ring-primary focus:border-primary block w-full px-4 py-7 rounded-md"
//             />
//           </div>
//           <Toaster position="top-center"  />

//           <div className="mb-4">
//             <Label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</Label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               required
//               className="shadow-sm focus:ring-primary focus:border-primary block w-full px-4 py-4 rounded-md"
//             />
//           </div>
//           {/* remember me checkbox and forgot password  */}
//           <div className="flex items-center justify-between my-4">
//             <div className="flex items-center justify-content-center">
//               <input
//                 type="checkbox"
//                 name="rememberPassword"
//                 id="rememberPassword" />
//               <Label htmlFor="rememberPassword" className="block text-sm font-medium text-gray-700 ms-2">Remember me</Label>



//             </div>
//             <a href="/forgot-password" className="text-sm text-blue-500 hover:text-blue-600">Lost your password?</a>

//           </div>
         
     
//             {loading ? (
//             <div className="flex items-center justify-center">
//                   <i className="fa-solid fa-circle-notch animate-spin text-4xl"></i>
//             </div>
//             ) : <Button type="submit" className="w-full bg-yellow-500 py-6 mt-10 ">
//               Log In <i className="fal fa-arrow-right-long"></i>
//             </Button>}


    
//         </form>
//       </CardContent>
//     </CardHeader>
//   </Card>
// </div>
// </div>
// <Footer/>
    
//    </Fragment>
// }
