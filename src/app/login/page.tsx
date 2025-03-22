'use client'
import Footer from '@/components/Footer'
import MyHeaders from '@/components/Headers';

import Link from 'next/link'
import React, { Fragment, useState } from 'react'

export default function login() {
         const [formData, setFormData] = useState({
            username: "",
            password: "",
          });
          const [loading, setLoading] = useState(false);
          const [show, setShow] = useState(false);
        
          //const [message, setMessage] = useState("");
          const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            setLoading(true);
            // setMessage("");
            if (formData.username !== "" && formData.password !== "") {
              //dispatch action from hooks
            } else {
              setShow(true);
            }
            setTimeout(() => {
              setLoading(false);
            }, 2000);
          };
        
          const handleInput = (
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            const { name, value } = e.target;
            setFormData((prev) => ({
              ...prev,
              [name]: value,
            }));
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
              <h2 className="title">Log In</h2>
            </div>
          </div>
        </div>
        <div className="row wow fadeInRight" data-wow-delay="300ms">
          <div className="col-xl-6 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
                <div className="mb30">
                  <h4>We're glad to see you again!</h4>
                  <p className="text">
                    Don't have an account?{" "}
                    <Link href="/signup" className="text-thm">
                      Sign Up!
                    </Link>
                  </p>
                </div>
                <div className="mb20">
                  <label className="form-label fw600 dark-color">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="alitfn58@gmail.com"
                    name="username"
                    onChange={handleInput}
                  />
                </div>
                <div className="mb15">
                  <label className="form-label fw600 dark-color">
                    Password
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    onChange={handleInput}
                  />
                </div>
                <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                  <label className="custom_checkbox fz14 ff-heading">
                    Remember me
                    <input type="checkbox" defaultChecked={true} />
                    <span className="checkmark"></span>
                  </label>
                  <Link className="fz14 ff-heading" href='/login/forgot-password'>
                    Lost your password?
                  </Link>
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
                        Log In <i className="fal fa-arrow-right-long"></i>
                      </>
                    )}
                  </button>
                </div>
                {/* <div className="hr_content mb20">
                  <hr />
                  <span className="hr_top_text">OR</span>
                </div>
                <div className="d-md-flex justify-content-between">
                  <button
                    className="ud-btn btn-fb fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  >
                    <i className="fab fa-facebook-f pr10"></i> Continue
                    Facebook
                  </button>
                  <button
                    className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0"
                    type="button"
                  >
                    <i className="fab fa-google"></i> Continue Google
                  </button>
                  <button
                    className="ud-btn btn-apple fz14 fw400"
                    type="button"
                  >
                    <i className="fab fa-apple"></i> Continue Apple
                  </button>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
        <Footer />
      </Fragment>
  
  )
}
