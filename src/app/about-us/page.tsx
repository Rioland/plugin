import Footer from '@/components/Footer'
import MyHeaders from '@/components/Headers'
import React, { Fragment } from 'react'

export default function page() {
  return (
    <Fragment>
        <MyHeaders currentPage="About Us" />
        <>
  {/* Breadcumb Sections */}
  <section className="breadcumb-section mt40">
    <div className="cta-about-v1 mx-auto maxw1700 pt120 pb120 bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="position-relative">
              <h2 className="text-white">About</h2>
              <p className="text-white mb30">
                Give your visitor a smooth online experience with a solid UX
                design
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About Section Area */}
  <section className="our-about pb0 pt60-lg">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 col-xl-6">
          <div
            className="about-img mb30-sm wow fadeInRight"
            data-wow-delay="300ms"
          >
            <img className="w100" src="/assets/images/about/about-1.png" alt="" />
          </div>
        </div>
        <div className="col-md-6 col-xl-5 offset-xl-1">
          <div
            className="position-relative wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <h2 className="mb25">
              Join World's Best Marketplace <br className="d-none d-xl-block" />{" "}
              for Workers
            </h2>
            <p className="text mb25">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <div className="list-style2">
              <ul className="mb20">
                <li>
                  <i className="far fa-check" />
                  Connect to freelancers with proven business experience
                </li>
                <li>
                  <i className="far fa-check" />
                  Get matched with the perfect talent by a customer success
                  manager
                </li>
                <li>
                  <i className="far fa-check" />
                  Unmatched quality of remote, hybrid, and flexible jobs
                </li>
              </ul>
            </div>
            <a href="page-freelancer-v1.html" className="ud-btn btn-thm-border">
              Find Talent
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Funfact */}
  <section className="pb0 pt60">
    <div className="container maxw1600 bdrb1 pb60">
      <div
        className="row justify-content-center wow fadeInUp"
        data-wow-delay="300ms"
      >
        <div className="col-6 col-md-3">
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
        <div className="col-6 col-md-3">
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
        <div className="col-6 col-md-3">
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
        <div className="col-6 col-md-3">
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
  </section>
  {/* CTA Banner */}
  <section className="p-0">
    <div className="cta-banner mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden mx20-lg">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-md-6 col-xl-5 pl30-md pl15-xs wow fadeInRight"
            data-wow-delay="500ms"
          >
            <div className="mb30">
              <div className="main-title">
                <h2 className="title">
                  A whole world of freelance{" "}
                  <br className="d-none d-lg-block" /> talent at your fingertips
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
          <div
            className="col-md-6 col-xl-6 offset-xl-1 wow fadeInLeft"
            data-wow-delay="500ms"
          >
            <div className="about-img">
              <img className="w100" src="/assets/images/about/about-6.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Funfact */}
  <section className="bgc-light-yellow pb90 pb30-md overflow-hidden maxw1700 mx-auto bdrs4">
    <img
      className="left-top-img wow zoomIn d-none d-lg-block"
      src="/assets/images/vector-img/left-top.png"
      alt=""
    />
    <img
      className="right-bottom-img wow zoomIn d-none d-lg-block"
      src="/assets/images/vector-img/right-bottom.png"
      alt=""
    />
    <div className="container">
      <div className="row align-items-center">
        <div
          className="col-md-6 col-xl-4 offset-xl-1 wow fadeInRight"
          data-wow-delay="100ms"
        >
          <div className="cta-style6 mb30-sm">
            <h2 className="cta-title mb25">
              Find the talent needed to <br className="d-none d-lg-block" />
              get your business growing.
            </h2>
            <p className="text-thm2 fz15 mb25">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
              <br className="d-none d-md-block" /> do eiusmod tempor incididunt.
            </p>
            <a href="page-contact.html" className="ud-btn btn-thm">
              Get Started <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
        <div
          className="col-md-6 col-xl-6 offset-xl-1 wow fadeInLeft"
          data-wow-delay="300ms"
        >
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="funfact-style1 bdrs16 text-center ms-md-auto">
                <ul className="ps-0 mb-0 d-flex justify-content-center">
                  <li>
                    <div className="timer title mb15">4</div>
                  </li>
                  <li>
                    <span>.9/5</span>
                  </li>
                </ul>
                <p className="fz15 dark-color">
                  Clients rate <br />
                  professionals on Freeio
                </p>
              </div>
              <div className="funfact-style1 bdrs16 text-center ms-md-auto">
                <ul className="ps-0 mb-0 d-flex justify-content-center">
                  <li>
                    <div className="timer title mb15">96</div>
                  </li>
                  <li>
                    <span>%</span>
                  </li>
                </ul>
                <p className="fz15 dark-color">
                  95% of customers are satisfied through to see their <br />
                  freelancers
                </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="funfact-style1 bdrs16 text-center">
                <ul className="ps-0 mb-0 d-flex justify-content-center">
                  <li>
                    <div className="title mb15">Award</div>
                  </li>
                </ul>
                <p className="fz15 dark-color">
                  G2’s 2021 Best <br />
                  Software Awards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Testimonials */}
  <section className="our-testimonial">
    <div className="container wow fadeInUp" data-wow-delay="300ms">
      <div className="row">
        <div className="col-lg-6 m-auto">
          <div className="main-title text-center">
            <h2 className="title">What our students have to say</h2>
            <p className="paragraph mt10">
              Discover your perfect program in our courses.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-xl-10 mx-auto">
          <div className="home2_testimonial_tabs position-relative">
            <div className="tab-content" id="pills-tabContent2">
              <div
                className="tab-pane fade"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="testimonial-style2 at-about2 text-center">
                  <div className="testi-content text-center">
                    <span className="icon fas fa-quote-left" />
                    <h4 className="testi-text">
                      "Our family was traveling via bullet train between cities
                      in Japan with our luggage - the location for this hotel
                      made that so easy. Agoda price was fantastic. "
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade show active"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="testimonial-style2 at-about2 text-center">
                  <div className="testi-content text-center">
                    <span className="icon fas fa-quote-left" />
                    <h4 className="testi-text">
                      "Our family was traveling via bullet train between cities
                      in Japan with our luggage - the location for this hotel
                      made that so easy. Agoda price was fantastic. "
                    </h4>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="testimonial-style2 at-about2 text-center">
                  <div className="testi-content text-center">
                    <span className="icon fas fa-quote-left" />
                    <h4 className="testi-text">
                      "Our family was traveling via bullet train between cities
                      in Japan with our luggage - the location for this hotel
                      made that so easy. Agoda price was fantastic. "
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <ul
              className="nav justify-content-center"
              id="pills-tab2"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <div className="thumb d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="/assets/images/testimonials/1.jpg"
                      alt="1.jpg"
                    />
                    <h6 className="title ml30 ml15-xl mb-0">
                      Albert Cole
                      <br />
                      <small>Designer</small>
                    </h6>
                  </div>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  <div className="thumb d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="/assets/images/testimonials/2.jpg"
                      alt="2.jpg"
                    />
                    <h6 className="title ml30 ml15-xl mb-0">
                      Alison Dawn
                      <br />
                      <small>WP Developer</small>
                    </h6>
                  </div>
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  href="#pills-contact"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <div className="thumb d-flex align-items-center">
                    <img
                      className="rounded-circle"
                      src="/assets/images/testimonials/3.jpg"
                      alt="3.jpg"
                    />
                    <h6 className="title ml30 ml15-xl mb-0">
                      Daniel Parker
                      <br />
                      <small>Front-end Developer</small>
                    </h6>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* CTA Banner */}
  <section className="cta-banner-about2 mx-auto maxw1700 position-relative mx20-lg pt60-lg pb60-lg">
    <img
      className="cta-about2-img d-none d-xl-block"
      src="/assets/images/about/about-7.jpg"
      alt=""
    />
    <div className="container">
      <div className="row">
        <div className="col-md-11 wow fadeInUp" data-wow-delay="200ms">
          <div className="main-title">
            <h2 className="title text-capitalize">Need something done?</h2>
            <p className="text">
              Most viewed and all-time top-selling services
            </p>
          </div>
        </div>
      </div>
      <div className="row wow fadeInDown" data-wow-delay="400ms">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30">
            <span className="icon fz40 flaticon-cv" />
            <h4 className="iconbox-title mt20">Post a job</h4>
            <p className="text mb-0">
              It’s free and easy to post a job.
              <br className="d-none d-md-block" /> Simply fill in a title,
              description.
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30">
            <span className="icon fz40 flaticon-web-design" />
            <h4 className="iconbox-title mt20">Choose freelancers</h4>
            <p className="text mb-0">
              It’s free and easy to post a job.
              <br className="d-none d-md-block" /> Simply fill in a title,
              description.
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="iconbox-style9 default-box-shadow1 bgc-white p40 bdrs12 position-relative mb30">
            <span className="icon fz40 flaticon-secure" />
            <h4 className="iconbox-title mt20">Pay safely</h4>
            <p className="text mb-0">
              It’s free and easy to post a job.
              <br className="d-none d-md-block" /> Simply fill in a title,
              description.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Faq Area */}
  <section className="our-faq pb90">
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
        <div className="col-xl-8 mx-auto">
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
  {/* Our Partners */}
  <section className="our-partners pt0 pb90">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 wow fadeInUp">
          <div className="main-title text-center">
            <h6>Trusted by the world’s best</h6>
          </div>
        </div>
        <div className="col-lg-12">
          <div
            className="dots_none nav_none slider-dib-sm slider-6-grid owl-carousel owl-theme wow fadeInUp"
            data-wow-delay="300ms"
          >
            <div className="item">
              <div className="partner_item">
                <img
                  className="wa m-auto"
                  src="/assets/images/partners/1.png"
                  alt="1.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="partner_item">
                <img
                  className="wa m-auto"
                  src="/assets/images/partners/2.png"
                  alt="2.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="partner_item">
                <img
                  className="wa m-auto"
                  src="/assets/images/partners/3.png"
                  alt="3.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="partner_item">
                <img
                  className="wa m-auto"
                  src="/assets/images/partners/4.png"
                  alt="4.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="partner_item">
                <img
                  className="wa m-auto"
                  src="/assets/images/partners/5.png"
                  alt="5.png"
                />
              </div>
            </div>
            <div className="item">
              <div className="partner_item">
                <img
                  className="wa m-auto"
                  src="/assets/images/partners/6.png"
                  alt="6.png"
                />
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
