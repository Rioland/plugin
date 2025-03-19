"use client"

import Footer from "@/components/Footer";
import Headers from "@/components/Headers";
import Link from "next/link";
import { Fragment, useState } from "react";


export default function Home() {
  

  return (
    <Fragment>
    <section className="hero-home6 py-0">
  <div className="container">
    <div className="row align-items-center justify-content-between">
      <div className="col-lg-6">
        <div className="pr50 pr0-xl mb30-md position-relative">
          <h1 className="animate-up-1 mb15 text-thm2">
            With talented <span className="text-thm">freelancers</span>
            <br className="d-none d-xl-block" />
            do more work.
          </h1>
          <p className="animate-up-2 ff-heading mb30 text">
            Millions of people use freeio.com to turn their ideas into reality.
          </p>
          <div className="advance-search-tab at-home6 bgc-white bdrs4 p10 position-relative zi2 animate-up-3">
            <div className="row">
              <div className="col-md-9 col-lg-8 col-xl-9">
                <div className="advance-search-field mb10-sm">
                  <form className="form-search position-relative">
                    <div className="box-search">
                      <span className="icon far fa-magnifying-glass" />
                      <input
                        className="form-control"
                        type="text"
                        name="search"
                        placeholder="What are you looking for?"
                      />
                      <div className="search-suggestions">
                        <h6 className="fz14 ml30 mt25 mb-3">Popular Search</h6>
                        <div className="box-suggestions">
                          <ul className="px-0 m-0 pb-4">
                            <li>
                              <div className="info-product">
                                <div className="item_title">
                                  mobile app development
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="info-product">
                                <div className="item_title">
                                  mobile app builder
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="info-product">
                                <div className="item_title">mobile legends</div>
                              </div>
                            </li>
                            <li>
                              <div className="info-product">
                                <div className="item_title">
                                  mobile app ui ux design
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="info-product">
                                <div className="item_title">
                                  mobile game app development
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="info-product">
                                <div className="item_title">
                                  mobile app design
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-3 col-lg-4 col-xl-3">
                <div className="text-center">
                  <button className="ud-btn btn-thm2 bdrs4 w-100" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-block d-md-flex mt30 banner-text animate-up-4">
            <p className="hero-text fz15 me-2 mb-0 text">Popular Searches</p>
            <a className="text" href="#">
              {" "}
              Designer,
            </a>
            <a className="text" href="#">
              {" "}
              Developer,
            </a>
            <a className="text" href="#">
              {" "}
              Web,
            </a>
            <a className="text" href="#">
              {" "}
              IOS,
            </a>
            <a className="text" href="#">
              {" "}
              PHP,
            </a>
            <a className="text" href="#">
              {" "}
              Senior,
            </a>
            <a className="text" href="#">
              {" "}
              Engineer
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-xl-5">
        <div className="home6-hero-content position-relative">
          <div className="iconbox-small1 d-none d-md-block wow fadeInRight default-box-shadow4 bounce-y animate-up-1">
            <span className="icon flaticon-review" />
            <div className="details">
              <h6>4.9/5</h6>
              <p className="text fz13 mb-0">Clients rate professionals</p>
            </div>
          </div>
          <div className="iconbox-small2 d-none d-md-block wow fadeInLeft default-box-shadow4 bounce-y animate-up-2">
            <span className="icon flaticon-review" />
            <div className="details">
              <h6>+12M</h6>
              <p className="text fz13 mb-0">Project Completed</p>
            </div>
          </div>
          <img
            src="/assets/images/about/element-10.png"
            alt=""
            className="bounce-x img-4"
          />
          <img
            src="/assets/images/about/element-11.png"
            alt=""
            className="spin-right img-5 d-none d-sm-block"
          />
          <img
            src="/assets/images/about/home6-hero-element-1.png"
            alt=""
            className="bounce-y img-1 d-none d-sm-block"
          />
          <img
            src="/assets/images/about/home6-hero-element-2.png"
            alt=""
            className="bounce-y img-2 d-none d-sm-block"
          />
          <img
            src="/assets/images/about/home6-hero-element-3.png"
            alt=""
            className="bounce-y img-3 d-none d-sm-block"
          />
          <img
            src="/assets/images/about/home6-hero-img-1.png"
            alt=""
            className="animate-up-1 w-100"
          />
        </div>
      </div>
    </div>
  </div>
</section>
  {/* Need something */}
  <section
    className="our-features pb90 pb30-md pt0-lg"
    style={{ paddingTop: "50px !important" }}
  >
    <div className="container wow fadeInUp">
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <div className="iconbox-style1 bdr1 text-center">
            <div className="thumb">
              <img
                className="w-100"
                src="/assets/images/about/home19-vector-1.png"
                alt=""
              />
            </div>
            <div className="details">
              <h4 className="title mt10 mb-3">Post a job</h4>
              <p className="text">
                It’s free and easy to post a job. Simply
                <br className="d-none d-xxl-block" />
                fill in a title, description.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="iconbox-style1 bdr1 text-center">
            <div className="thumb">
              <img
                className="w-100"
                src="/assets/images/about/home19-vector-2.png"
                alt=""
              />
            </div>
            <div className="details">
              <h4 className="title mt10 mb-3">Choose freelancers</h4>
              <p className="text">
                It’s free and easy to post a job. Simply
                <br className="d-none d-xxl-block" />
                fill in a title, description.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="iconbox-style1 bdr1 text-center">
            <div className="thumb">
              <img
                className="w-100"
                src="/assets/images/about/home19-vector-3.png"
                alt=""
              />
            </div>
            <div className="details">
              <h4 className="title mt10 mb-3">Pay safely</h4>
              <p className="text">
                It’s free and easy to post a job. Simply
                <br className="d-none d-xxl-block" />
                fill in a title, description.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="iconbox-style1 bdr1 text-center">
            <div className="thumb">
              <img
                className="w-100"
                src="/assets/images/about/home19-vector-4.png"
                alt=""
              />
            </div>
            <div className="details">
              <h4 className="title mt10 mb-3">We’re here to help</h4>
              <p className="text">
                It’s free and easy to post a job. Simply
                <br className="d-none d-xxl-block" />
                fill in a title, description.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  {/* talent by category */}
  <section className="pb40-md pb90 pt-0">
    <div className="container">
      <div
        className="row align-items-center wow fadeInUp"
        data-wow-delay="300ms"
      >
        <div className="col-lg-9">
          <div className="main-title2">
            <h2 className="title">Browse talent by category</h2>
            <p className="paragraph">Aliquam lacinia diam quis lacus euismod</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="text-start text-lg-end mb-4">
            <a
              className="ud-btn3 ud-btn btn-white2 double-border bdrs60"
              href="page-project-v1.html"
            >
              All Category
              <i className="fal fa-arrow-right-long" />
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 wow fadeInUp" data-wow-delay="300ms">
          <div className="dots_none slider-dib-sm slider-5-grid vam_nav_style owl-theme owl-carousel">
            <div className="item">
              <div className="feature-style1 mb30 bdrs16">
                <div className="feature-img bdrs16 overflow-hidden">
                  <img
                    className="w-100"
                    src="/assets/images/listings/category-1.jpg"
                    alt=""
                  />
                </div>
                <div className="feature-content">
                  <div className="top-area">
                    <h6 className="title mb-1">1.853 skills</h6>
                    <h5 className="text">
                      Development &amp; <br className="d-none d-lg-block" />
                      IT
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="feature-style1 mb30 bdrs16">
                <div className="feature-img bdrs16 overflow-hidden">
                  <img
                    className="w-100"
                    src="/assets/images/listings/category-2.jpg"
                    alt=""
                  />
                </div>
                <div className="feature-content">
                  <div className="top-area">
                    <h6 className="title mb-1">1.853 skills</h6>
                    <h5 className="text">
                      Design &amp; <br className="d-none d-lg-block" />
                      Creative
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="feature-style1 mb30 bdrs16">
                <div className="feature-img bdrs16 overflow-hidden">
                  <img
                    className="w-100"
                    src="/assets/images/listings/category-3.jpg"
                    alt=""
                  />
                </div>
                <div className="feature-content">
                  <div className="top-area">
                    <h6 className="title mb-1">1.853 skills</h6>
                    <h5 className="text">
                      Digital <br className="d-none d-lg-block" />
                      Marketing
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="feature-style1 mb30 bdrs16">
                <div className="feature-img bdrs16 overflow-hidden">
                  <img
                    className="w-100"
                    src="/assets/images/listings/category-4.jpg"
                    alt=""
                  />
                </div>
                <div className="feature-content">
                  <div className="top-area">
                    <h6 className="title mb-1">1.853 skills</h6>
                    <h5 className="text">
                      Writing &amp;
                      <br className="d-none d-lg-block" />
                      Translation
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="feature-style1 mb30 bdrs16">
                <div className="feature-img bdrs16 overflow-hidden">
                  <img
                    className="w-100"
                    src="/assets/images/listings/category-5.jpg"
                    alt=""
                  />
                </div>
                <div className="feature-content">
                  <div className="top-area">
                    <h6 className="title mb-1">1.853 skills</h6>
                    <h5 className="text">
                      Music &amp; <br className="d-none d-lg-block" />
                      Audio
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Popular Services */}
  <section className="pt-0 pb-0 pb30-md">
    <div className="container">
      <div className="row align-items-center wow fadeInUp">
        <div className="col-xl-3">
          <div className="main-title mb30-lg">
            <h2 className="title">Popular Services</h2>
            <p className="paragraph">
              Most viewed and all-time top-selling services
            </p>
          </div>
        </div>
        <div className="col-xl-9">
          <div className="navpill-style2 at-home9 mb50-lg">
            <ul
              className="nav nav-pills mb20 justify-content-xl-end"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active fw500 dark-color"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Development &amp; IT
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fw500 dark-color"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Design &amp; Creative
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fw500 dark-color"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Digital Marketing
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fw500 dark-color"
                  id="pills-music-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-music"
                  type="button"
                  role="tab"
                  aria-controls="pills-music"
                  aria-selected="false"
                >
                  Music &amp; Audio
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link fw500 dark-color"
                  id="pills-video-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-video"
                  type="button"
                  role="tab"
                  aria-controls="pills-video"
                  aria-selected="false"
                >
                  Video &amp; Animation
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="navpill-style2">
            <div className="tab-content ha" id="pills-tabContent">
              <div
                className="tab-pane fade fz15 text show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="row">
                  <div className=" col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-5.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-5.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                



                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-3.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Design &amp; Creative
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-services-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-7.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Design &amp; Creative
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-services-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-4.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-services-single.html">
                            I will do mobile app development for ios and android
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-4.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-center mt30">
                      <a
                        className="ud-btn btn-white2 double-border bdrs60"
                        href="page-service-v1.html"
                      >
                        All Services
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-5.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme">
                          <div className="item">
                            <img
                              className="w-100"
                              src="/assets/images/listings/g-2.jpg"
                              alt=""
                            />
                            <a href="#" className="listing-fav fz12">
                              <span className="far fa-heart" />
                            </a>
                          </div>
                          <div className="item">
                            <img
                              className="w-100"
                              src="/assets/images/listings/g-3.jpg"
                              alt=""
                            />
                            <a href="#" className="listing-fav fz12">
                              <span className="far fa-heart" />
                            </a>
                          </div>
                          <div className="item">
                            <img
                              className="w-100"
                              src="/assets/images/listings/g-4.jpg"
                              alt=""
                            />
                            <a href="#" className="listing-fav fz12">
                              <span className="far fa-heart" />
                            </a>
                          </div>
                          <div className="item">
                            <img
                              className="w-100"
                              src="/assets/images/listings/g-5.jpg"
                              alt=""
                            />
                            <a href="#" className="listing-fav fz12">
                              <span className="far fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Art &amp; Illustration
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will create modern flat design illustration
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badge" />
                            </span>
                            <span className="fz14">Ali Tufan</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-6.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-3.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Design &amp; Creative
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-services-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-7.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Design &amp; Creative
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-services-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-4.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-services-single.html">
                            I will do mobile app development for ios and android
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-4.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-center mt30">
                      <a
                        className="ud-btn btn-white2 double-border bdrs60"
                        href="page-service-v1.html"
                      >
                        All Services
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-5.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme">
                          <div className="item">
                            <img
                              className="w-100"
                              src="/assets/images/listings/g-2.jpg"
                              alt=""
                            />
                            <a href="#" className="listing-fav fz12">
                              <span className="far fa-heart" />
                            </a>
                          </div>
                          <div className="item">
                            <img
                              className="w-100"
                              src="/assets/images/listings/g-3.jpg"
                              alt=""
                            />
                            <a href="#" className="listing-fav fz12">
                              <span className="far fa-heart" />
                            </a>
                          </div>
                          <div className="item">
                            <img
                              className="w-100"
                              src="/assets/images/listings/g-4.jpg"
                              alt=""
                            />
                            <a href="#" className="listing-fav fz12">
                              <span className="far fa-heart" />
                            </a>
                          </div>
                          <div className="item">
                            <img
                              className="w-100"
                              src="/assets/images/listings/g-5.jpg"
                              alt=""
                            />
                            <a href="#" className="listing-fav fz12">
                              <span className="far fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Art &amp; Illustration
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will create modern flat design illustration
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badge" />
                            </span>
                            <span className="fz14">Ali Tufan</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-6.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-3.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Design &amp; Creative
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-services-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-7.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Design &amp; Creative
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-services-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-4.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-services-single.html">
                            I will do mobile app development for ios and android
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-4.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-center mt30">
                      <a
                        className="ud-btn btn-white2 double-border bdrs60"
                        href="page-service-v1.html"
                      >
                        All Services
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="pills-audio"
                role="tabpanel"
                aria-labelledby="pills-audio-tab"
              >
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-5.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme">
                          <div className="item">
                            <img
                              className="w-100"
                              src="/assets/images/listings/g-2.jpg"
                              alt=""
                            />
                            <a href="#" className="listing-fav fz12">
                              <span className="far fa-heart" />
                            </a>
                          </div>
                          <div className="item">
                            <img
                              className="w-100"
                              src="/assets/images/listings/g-3.jpg"
                              alt=""
                            />
                            <a href="#" className="listing-fav fz12">
                              <span className="far fa-heart" />
                            </a>
                          </div>
                          <div className="item">
                            <img
                              className="w-100"
                              src="/assets/images/listings/g-4.jpg"
                              alt=""
                            />
                            <a href="#" className="listing-fav fz12">
                              <span className="far fa-heart" />
                            </a>
                          </div>
                          <div className="item">
                            <img
                              className="w-100"
                              src="/assets/images/listings/g-5.jpg"
                              alt=""
                            />
                            <a href="#" className="listing-fav fz12">
                              <span className="far fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Art &amp; Illustration
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will create modern flat design illustration
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badge" />
                            </span>
                            <span className="fz14">Ali Tufan</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-6.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-3.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Design &amp; Creative
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-services-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-7.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Design &amp; Creative
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-services-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-4.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-services-single.html">
                            I will do mobile app development for ios and android
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-4.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-center mt30">
                      <a
                        className="ud-btn btn-white2 double-border bdrs60"
                        href="page-service-v1.html"
                      >
                        All Services
                        <i className="fal fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade fz15 text"
                id="pills-video"
                role="tabpanel"
                aria-labelledby="pills-video-tab"
              >
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-5.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 default-box-shadow1 bdrs16">
                      <div className="list-thumb">
                        <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme">
                          <div className="item">
                            <img
                              className="w-100"
                              src="/assets/images/listings/g-2.jpg"
                              alt=""
                            />
                            <a href="#" className="listing-fav fz12">
                              <span className="far fa-heart" />
                            </a>
                          </div>
                          <div className="item">
                            <img
                              className="w-100"
                              src="/assets/images/listings/g-3.jpg"
                              alt=""
                            />
                            <a href="#" className="listing-fav fz12">
                              <span className="far fa-heart" />
                            </a>
                          </div>
                          <div className="item">
                            <img
                              className="w-100"
                              src="/assets/images/listings/g-4.jpg"
                              alt=""
                            />
                            <a href="#" className="listing-fav fz12">
                              <span className="far fa-heart" />
                            </a>
                          </div>
                          <div className="item">
                            <img
                              className="w-100"
                              src="/assets/images/listings/g-5.jpg"
                              alt=""
                            />
                            <a href="#" className="listing-fav fz12">
                              <span className="far fa-heart" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Art &amp; Illustration
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will create modern flat design illustration
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badge" />
                            </span>
                            <span className="fz14">Ali Tufan</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-6.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-2.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-3.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Design &amp; Creative
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-services-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-7.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Design &amp; Creative
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-services-single.html">
                            I will build a fully responsive design in HTML,CSS,
                            bootstrap, and javascript
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-3.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-4.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title line-clamp2">
                          <a href="page-services-single.html">
                            I will do mobile app development for ios and android
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle"
                                src="/assets/images/team/fl-s-4.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-style1 bdrs16">
                      <div className="list-thumb">
                        <img
                          className="w-100"
                          src="/assets/images/listings/g-1.jpg"
                          alt=""
                        />
                        <a href="#" className="listing-fav fz12">
                          <span className="far fa-heart" />
                        </a>
                      </div>
                      <div className="list-content">
                        <p className="list-text body-color fz14 mb-1">
                          Web &amp; App Design
                        </p>
                        <h5 className="list-title">
                          <a href="page-services-single.html">
                            I will design modern websites in figma or adobe xd
                          </a>
                        </h5>
                        <div className="review-meta d-flex align-items-center">
                          <i className="fas fa-star fz10 review-color me-2" />
                          <p className="mb-0 body-color fz14">
                            <span className="dark-color me-2">4.82</span>94
                            reviews
                          </p>
                        </div>
                        <hr className="my-2" />
                        <div className="list-meta d-flex justify-content-between align-items-center mt15">
                          <a className="d-flex" href="#">
                            <span className="position-relative mr10">
                              <img
                                className="rounded-circle wa"
                                src="/assets/images/team/fl-s-1.png"
                                alt="Freelancer Photo"
                              />
                              <span className="online-badges" />
                            </span>
                            <span className="fz14">Wanda Runo</span>
                          </a>
                          <div className="budget">
                            <p className="mb-0 body-color">
                              Starting at
                              <span className="fz17 fw500 dark-color ms-1">
                                $983
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-center mt30">
                      <a
                        className="ud-btn btn-white2 double-border bdrs60"
                        href="page-service-v1.html"
                      >
                        All Services
                        <i className="fal fa-arrow-right-long" />
                      </a>
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


  
  {/* Our CTA */}
  <section className="our-cta bgc-thm4 maxw1400 mx-auto pt80 pb90 pt60-md pb60-md mt110 mt0-lg bdrs16">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-md-7 col-xl-5 wow fadeInLeft">
          <div className="cta-style3 pl80 pl0-lg">
            <h2 className="cta-title">
              With talented freelancers do more work.
            </h2>
            <div className="d-sm-flex align-items-center mt30">
              <a
                href="page-project-v1.html"
                className="ud-btn btn-dark bdrs60 me-sm-3"
              >
                Find Work <i className="fal fa-arrow-right-long" />
              </a>
              <a
                href="page-freelancer-v1.html"
                className="ud-btn btn-transparent double-border bdrs60"
              >
                Find Talent <i className="fal fa-arrow-right-long" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-xl-4 position-relative wow zoomIn">
          <div className="cta-img me-4">
            <img className="w-100" src="/assets/images/about/about-6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>



      <Footer />
    </Fragment>


  );
}
