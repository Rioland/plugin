import Footer from '@/components/Footer'
import MyHeaders from '@/components/Headers'
import React, { Fragment } from 'react'

export default function register() {
  return (
    <Fragment>
      <MyHeaders />
      <>
  {/* Our SignUp Area */}
  <section className="our-register">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 m-auto wow fadeInUp" data-wow-delay="300ms">
          <div className="main-title text-center">
            <h2 className="title">Register</h2>
            <p className="paragraph">
              Give your visitor a smooth online experience with a solid UX
              design
            </p>
          </div>
        </div>
      </div>
      <div className="row wow fadeInRight" data-wow-delay="300ms">
        <div className="col-xl-6 mx-auto">
          <div className="log-reg-form search-modal form-style1 bgc-white p50 p30-sm default-box-shadow1 bdrs12">
            <div className="mb30">
              <h4>Let's create your account!</h4>
              <p className="text mt20">
                Already have an account?{" "}
                <a href="page-login.html" className="text-thm">
                  Log In!
                </a>
              </p>
            </div>
            <div className="mb25">
              <label className="form-label fw500 dark-color">
                Display Name
              </label>
              <input type="text" className="form-control" placeholder="ali" />
            </div>
            <div className="mb25">
              <label className="form-label fw500 dark-color">Username</label>
              <input type="text" className="form-control" placeholder="alitf" />
            </div>
            <div className="mb25">
              <label className="form-label fw500 dark-color">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="alitfn58@gmail.com"
              />
            </div>
            <div className="mb15">
              <label className="form-label fw500 dark-color">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="*******"
              />
            </div>
            <div className="d-grid mb20">
              <button
                className="ud-btn btn-thm default-box-shadow2"
                type="button"
              >
                Creat Account <i className="fal fa-arrow-right-long" />
              </button>
            </div>
            <div className="hr_content mb20">
              <hr />
              <span className="hr_top_text">OR</span>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4">
                <button
                className="ud-btn btn-fb fz14 fw400 mb-2 mb-md-0 w-100"
                type="button" style={{height: '50px'}}
              >
                <i className="fab fa-facebook-f pr10" /> Continue Facebook
              </button>
                </div>
                <div className="col-12 col-md-4">
                <button
                className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0 w-100" 
                type="button" style={{height: '50px'}}
              >
                <i className="fab fa-google" /> Continue Google
              </button>
                </div>
                <div className="col-12 col-md-4">
                <button className="ud-btn btn-apple fz14 fw400 w-100" type="button" style={{height: '50px'}}>
                <i className="fab fa-apple" /> Continue Apple
              </button>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </section>
</>
<Footer />

    </Fragment>
  )
}
