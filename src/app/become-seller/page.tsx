import Footer from '@/components/Footer'
import MyHeaders from '@/components/Headers'
import React, { Fragment } from 'react'

export default function page() {
  return (
<Fragment>
        <MyHeaders />
        <>
  {/* Breadcumb Sections */}
  <section className="breadcumb-section wow fadeInUp mt40">
    <div className="cta-commmon-v1 cta-banner bgc-thm2 mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg">
      <img
        className="left-top-img wow zoomIn"
        src="/assets/images/vector-img/left-top.png"
        alt=""
      />
      <img
        className="right-bottom-img wow zoomIn"
        src="/assets/images/vector-img/right-bottom.png"
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div
              className="position-relative wow fadeInUp"
              data-wow-delay="300ms"
            >
              <h2 className="text-white">Work Your Way</h2>
              <p className="text mb30 text-white">
                Give your visitor a smooth online experience with a solid UX
                design.
              </p>
              <a className="ud-btn btn-thm" href="page-contact.html">
                Become Seller
                <i className="fal fa-arrow-right-long" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About Section Area */}
  <section className="our-faq pb90 pt100">
    <div className="container">
      <div className="row wow fadeInUp">
        <div className="col-lg-4">
          <div className="vertical-tab">
            <div className="widget_list">
              <nav>
                <div
                  className="nav flex-column nav-tabs text-start"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active text-start"
                    id="nav-accountpayment-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-accountpayment"
                    type="button"
                    role="tab"
                    aria-controls="nav-accountpayment"
                    aria-selected="true"
                  >
                    <span>For Hiring</span>
                  </button>
                  <button
                    className="nav-link text-start"
                    id="nav-manageother-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-manageother"
                    type="button"
                    role="tab"
                    aria-controls="nav-manageother"
                    aria-selected="false"
                  >
                    <span>For Freelancing</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-accountpayment"
              role="tabpanel"
              aria-labelledby="nav-accountpayment-tab"
            >
              <div className="for-hire">
                <h4>For Hiring</h4>
                <p className="text mb30">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <p className="text mb40">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
                <a href="/become-seller" className="ud-btn btn-thm-border mb25 me-4">
                  Get Started
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-manageother"
              role="tabpanel"
              aria-labelledby="nav-manageother-tab"
            >
              <div className="for-hire">
                <h4>For Freelancing</h4>
                <p className="text mb30">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <p className="text mb40">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
                <a href="#" className="ud-btn btn-thm-border mb25 me-4">
                  Get Started
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Features */}
  <section className="our-features pt-0 pb90">
    <div className="container">
      <div className="row wow fadeInUp">
        <div className="col-lg-12">
          <div className="main-title">
            <h2>How It Works</h2>
            <p className="text">
              Most viewed and all-time top-selling services
            </p>
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp" data-wow-delay="300ms">
        <div className="col-sm-6 col-lg-3">
          <div className="iconbox-style1 border-less p-0">
            <div className="icon before-none">
              <span className="flaticon-cv" />
            </div>
            <div className="details">
              <h4 className="title mt10 mb-3">Post a job</h4>
              <p className="text">
                It’s free and easy to post a job. Simply fill{" "}
                <br className="d-none d-xxl-block" /> in a title, description.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="iconbox-style1 border-less p-0">
            <div className="icon before-none">
              <span className="flaticon-web-design" />
            </div>
            <div className="details">
              <h4 className="title mt10 mb-3">Choose freelancers</h4>
              <p className="text">
                It’s free and easy to post a job. Simply fill{" "}
                <br className="d-none d-xxl-block" /> in a title, description.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="iconbox-style1 border-less p-0">
            <div className="icon before-none">
              <span className="flaticon-secure" />
            </div>
            <div className="details">
              <h4 className="title mt10 mb-3">Pay safely</h4>
              <p className="text">
                It’s free and easy to post a job. Simply fill{" "}
                <br className="d-none d-xxl-block" /> in a title, description.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="iconbox-style1 border-less p-0">
            <div className="icon before-none">
              <span className="flaticon-customer-service" />
            </div>
            <div className="details">
              <h4 className="title mt10 mb-3">We’re here to help</h4>
              <p className="text">
                It’s free and easy to post a job. Simply fill{" "}
                <br className="d-none d-xxl-block" /> in a title, description.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* CTA Banner */}
  <section className="p-0">
    <div className="cta-banner3 bgc-thm4 mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-5">
            <div className="mb30">
              <div className="main-title">
                <h2 className="title">
                  A whole world of freelance{" "}
                  <br className="d-none d-md-block" /> talent at your fingertips
                </h2>
              </div>
            </div>
            <div className="why-chose-list">
              <div className="list-one d-flex align-items-start mb30">
                <span className="list-icon flex-shrink-0 flaticon-badge" />
                <div className="list-content flex-grow-1 ml20">
                  <h4 className="mb-1">Proof of quality</h4>
                  <p className="text mb-0 fz15">
                    Check any pro’s work samples, client reviews, and identity{" "}
                    <br className="d-none d-lg-block" /> verification.
                  </p>
                </div>
              </div>
              <div className="list-one d-flex align-items-start mb30">
                <span className="list-icon flex-shrink-0 flaticon-money" />
                <div className="list-content flex-grow-1 ml20">
                  <h4 className="mb-1">No cost until you hire</h4>
                  <p className="text mb-0 fz15">
                    Interview potential fits for your job, negotiate rates, and
                    only pay <br className="d-none d-lg-block" /> for work you
                    approve.
                  </p>
                </div>
              </div>
              <div className="list-one d-flex align-items-start mb30">
                <span className="list-icon flex-shrink-0 flaticon-security" />
                <div className="list-content flex-grow-1 ml20">
                  <h4 className="mb-1">Safe and secure</h4>
                  <p className="text mb-0 fz15">
                    Focus on your work knowing we help protect your data and
                    privacy. We’re here with 24/7 support if you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="cta-banner3-img wow fadeInLeft"
        src="/assets/images/about/about-5.jpg"
        alt=""
        data-wow-delay="300ms"
      />
    </div>
  </section>
  {/* Funfact */}
  <section className="pb0 pt60">
    <div className="container maxw1600 bdrb1 pb60">
      <div className="row">
        <div className="col-xl-11 mx-auto">
          <div className="row justify-content-center" data-wow-delay="300ms">
            <div className="col-sm-6 col-lg-3">
              <div className="funfact_one text-center">
                <div className="details">
                  <ul className="ps-0 mb-0 d-flex justify-content-center">
                    <li>
                      <div className="timer">834</div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">Total Freelancer</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="funfact_one text-center">
                <div className="details">
                  <ul className="ps-0 mb-0 d-flex justify-content-center">
                    <li>
                      <div className="timer">732</div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">Positive Review</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="funfact_one text-center">
                <div className="details">
                  <ul className="ps-0 mb-0 d-flex justify-content-center">
                    <li>
                      <div className="timer">90</div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">Order recieved</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="funfact_one text-center">
                <div className="details">
                  <ul className="ps-0 mb-0 d-flex justify-content-center">
                    <li>
                      <div className="timer">236</div>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                  </ul>
                  <p className="text mb-0">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Agents */}
  <section className="pb80 pb50-md">
    <div className="container">
      <div className="row wow fadeInUp">
        <div className="col-lg-9">
          <div className="main-title2">
            <h2 className="title">Our Team</h2>
            <p className="paragraph">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <div className="row wow fadeInUp justify-content-center" data-wow-delay="300ms">
        <div className="col-12 col-md-6 col-lg-3">
        <div className="item">
              <div className="feature-style2 mb30">
                <div className="feature-img">
                  <img src="/assets/images/team/team-1.jpg" alt="" />
                </div>
                <div className="feature-content pt15">
                  <h5 className="title mb-2">Cody Fisher</h5>
                  <p className="text fz15">Medical Assistant</p>
                </div>
              </div>
            </div> 
        </div>
        <div className="col-12 col-md-6 col-lg-3">
        <div className="item">
              <div className="feature-style2 mb30">
                <div className="feature-img">
                  <img src="/assets/images/team/team-2.jpg" alt="" />
                </div>
                <div className="feature-content pt15">
                  <h5 className="title mb-2">Dianne Russell</h5>
                  <p className="text fz15">Web Designer</p>
                </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
        <div className="item">
              <div className="feature-style2 mb30">
                <div className="feature-img">
                  <img src="/assets/images/team/team-3.jpg" alt="" />
                </div>
                <div className="feature-content pt15">
                  <h5 className="title mb-2">Jerome Bell</h5>
                  <p className="text fz15">Marketing Coordinator</p>
                </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
        <div className="item">
              <div className="feature-style2 mb30">
                <div className="feature-img">
                  <img src="/assets/images/team/team-4.jpg" alt="" />
                </div>
                <div className="feature-content pt15">
                  <h5 className="title mb-2">Theresa Webb</h5>
                  <p className="text fz15">Nursing Assistant</p>
                </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
        <div className="item">
              <div className="feature-style2 mb30">
                <div className="feature-img">
                  <img src="/assets/images/team/team-5.jpg" alt="" />
                </div>
                <div className="feature-content pt15">
                  <h5 className="title mb-2">Cameron Williamson</h5>
                  <p className="text fz15">Dog Trainer</p>
                </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
        <div className="item">
              <div className="feature-style2 mb30">
                <div className="feature-img">
                  <img src="/assets/images/team/team-5.jpg" alt="" />
                </div>
                <div className="feature-content pt15">
                  <h5 className="title mb-2">Cameron Williamson</h5>
                  <p className="text fz15">Dog Trainer</p>
                </div>
              </div>
            </div>
        </div>
   
      </div>
    </div>
  </section>
  {/* Our faq */}
  <section className="our-faqs pt-0 pb50">
    <div className="container">
      <div className="row wow fadeInUp">
        <div className="col-lg-6 m-auto">
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
            <div className="accordion-style1 faq-page mb-4 mb-lg-5">
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


        <Footer/>

</Fragment>
  )
}
