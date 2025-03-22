"use client";
import Footer from "@/components/Footer";
import MyHeaders from "@/components/Headers";
import React, { Fragment, useState } from "react";
import { useSearchParams } from "next/navigation";
export default function page() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element: HTMLInputElement, index: number) => {
        if (isNaN(Number(element.value))) return false;
      
        setOtp((prevOtp) =>
          prevOtp.map((d, idx) => (idx === index ? element.value : d))
        );
      
        // Focus next input
        if (element.nextElementSibling instanceof HTMLInputElement) {
          element.nextElementSibling.focus();
        }
      };
      
  return (
    <Fragment>
      <MyHeaders currentPage="Login" />
      <section className="our-login">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 m-auto wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-title text-center">
                <h2 className="title">Reset Password</h2>
              </div>
            </div>
          </div>
          <div className="row wow fadeInRight" data-wow-delay="300ms">
            <div className="col-xl-6 mx-auto">
              <form>
                <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                  <div className="mb30">
                    <h4 className="text-center">
                      Reset Password OTP has been sent to you email address{" "}
                      <span className="text-primary">{email}</span>{" "}
                    </h4>
                  </div>
                  <p className="text-center">Enter the OTP sent to you to reset your password</p>
                  <div className=" container d-flex justify-content-center mb-4">
                  {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength={1}
                                pattern="[0-9]"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}
                  </div>

                  <div className="d-grid mb20">
                    <button
                      className="ud-btn btn-thm"
                      disabled={loading}
                      type="submit"
                    >
                      {loading ? (
                        <i className="fal fa-spinner spinner-grow"></i>
                      ) : (
                        <>
                        Verify OTP <i className="fal fa-arrow-right-long"></i>
                        </>
                      )}
                    </button>
                  </div>
              
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}
