import Footer from '@/components/Footer'
import MyHeaders from '@/components/Headers'
import React, { Fragment } from 'react'

export default function page() {
  return (
<Fragment>
        <MyHeaders currentPage="About Us" />
        <>
  {/* Breadcumb Sections */}
  <section className="breadcumb-section wow fadeInUp mt40">
    <div className="cta-commmon-v1 cta-banner bgc-thm2 mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg">
      <img
        className="left-top-img wow zoomIn"
        src="images/vector-img/left-top.png"
        alt=""
      />
      <img
        className="right-bottom-img wow zoomIn"
        src="images/vector-img/right-bottom.png"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div
              className="position-relative wow fadeInUp"
              data-wow-delay="300ms"
            >
              <h2 className="text-white">Contact us</h2>
              <p className="text mb0 text-white">
                We'd love to talk about how we can help you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Contact Info */}
  <section className="pt-0">
    <div className="container">
      <div className="row wow fadeInUp" data-wow-delay="300ms">
        <div className="col-lg-6">
          <div className="position-relative mt40">
            <div className="main-title">
              <h4 className="form-title mb25">Keep In Touch With Us.</h4>
              <p className="text">
                Neque convallis a cras semper auctor. Libero id faucibus nisl
                tincidunt egetnvallis.
              </p>
            </div>
            <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
              <div className="icon flex-shrink-0">
                <span className="flaticon-tracking" />
              </div>
              <div className="details">
                <h5 className="title">Address</h5>
                <p className="mb-0 text">
                  328 Queensberry Street, North <br /> Melbourne VIC 3051,
                  Australia.
                </p>
              </div>
            </div>
            <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
              <div className="icon flex-shrink-0">
                <span className="flaticon-call" />
              </div>
              <div className="details">
                <h5 className="title">Phone</h5>
                <p className="mb-0 text">+(0) 392 94 03 01</p>
              </div>
            </div>
            <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
              <div className="icon flex-shrink-0">
                <span className="flaticon-mail" />
              </div>
              <div className="details">
                <h5 className="title">Email</h5>
                <p className="mb-0 text">hello@freeio.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-page-form default-box-shadow1 bdrs8 bdr1 p50 mb30-md bgc-white">
            <h4 className="form-title mb25">Tell us about yourself</h4>
            <p className="text mb30">
              Whether you have questions or you would just like to say hello,
              contact us.
            </p>
            <form action="#" className="form-style1">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb20">
                    <label
                      className="heading-color ff-heading fw500 mb10"
                      htmlFor=""
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ali"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb20">
                    <label
                      className="heading-color ff-heading fw500 mb10"
                      htmlFor=""
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Tufan"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb20">
                    <label
                      className="heading-color ff-heading fw500 mb10"
                      htmlFor=""
                    >
                      Messages
                    </label>
                    <textarea
                      name=""
                      id=""
                      cols={30}
                      rows={6}
                      placeholder="Description"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="">
                    <a className="ud-btn btn-thm" href="page-contact.html">
                      Send Messages
                      <i className="fal fa-arrow-right-long" />
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Google Map */}
  <section className="p-0 wow fadeInUp" data-wow-delay="300ms">
    <div className="mx-auto maxw1700 bdrs16 position-relative mx20-lg">
      <iframe
        className="contact-page-map"
        loading="lazy"
        src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=14&output=embed&iwloc=near"
        title="London Eye, London, United Kingdom"
        aria-label="London Eye, London, United Kingdom"
      />
    </div>
  </section>
  {/* Faq */}
  <section className="pb70">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 m-auto wow fadeInUp" data-wow-delay="300ms">
          <div className="main-title text-center">
            <h2 className="title">Frequently Asked Questions</h2>
            <p className="paragraph mt10">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="300ms">
        <div className="col-lg-8 mx-auto">
          <div className="ui-content">
            <div className="accordion-style1 faq-page">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item active">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What methods of payments are supported?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Cras vitae ac nunc orci. Purus amet tortor non at
                      phasellus ultricies hendrerit. Eget a, sit morbi nunc sit
                      id massa. Metus, scelerisque volutpat nec sit vel donec.
                      Sagittis, id volutpat erat vel.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Can I cancel at anytime?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Cras vitae ac nunc orci. Purus amet tortor non at
                      phasellus ultricies hendrerit. Eget a, sit morbi nunc sit
                      id massa. Metus, scelerisque volutpat nec sit vel donec.
                      Sagittis, id volutpat erat vel.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How do I get a receipt for my purchase?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Cras vitae ac nunc orci. Purus amet tortor non at
                      phasellus ultricies hendrerit. Eget a, sit morbi nunc sit
                      id massa. Metus, scelerisque volutpat nec sit vel donec.
                      Sagittis, id volutpat erat vel.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Which license do I need?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Cras vitae ac nunc orci. Purus amet tortor non at
                      phasellus ultricies hendrerit. Eget a, sit morbi nunc sit
                      id massa. Metus, scelerisque volutpat nec sit vel donec.
                      Sagittis, id volutpat erat vel.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      How do I get access to a theme I purchased?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Cras vitae ac nunc orci. Purus amet tortor non at
                      phasellus ultricies hendrerit. Eget a, sit morbi nunc sit
                      id massa. Metus, scelerisque volutpat nec sit vel donec.
                      Sagittis, id volutpat erat vel.
                    </div>
                  </div>
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
