"use client";

import Footer from "@/components/Footer";
import MyHeaders from "@/components/Headers";
import Link from "next/link";
import { Fragment, useState } from "react";
// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderShow from "@/components/SliderShow";
import RateSlider from "@/components/RateSlider";
import TrendingSlider from "@/components/TrendingSlider";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function Home() {
  return (
    <Fragment>
      <MyHeaders  currentPage="Home"/>

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
                  Millions of people use freeio.com to turn their ideas into
                  reality.
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
                              <h6 className="fz14 ml30 mt25 mb-3">
                                Popular Search
                              </h6>
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
                                      <div className="item_title">
                                        mobile legends
                                      </div>
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
                        <button
                          className="ud-btn btn-thm2 bdrs4 w-100"
                          type="button"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-block d-md-flex mt30 banner-text animate-up-4">
                  <p className="hero-text fz15 me-2 mb-0 text">
                    Popular Searches
                  </p>
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
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
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
          <SliderShow />

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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will build a fully responsive design in
                                HTML,CSS, bootstrap, and javascript
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
                                I will build a fully responsive design in
                                HTML,CSS, bootstrap, and javascript
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
                                I will do mobile app development for ios and
                                android
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will build a fully responsive design in
                                HTML,CSS, bootstrap, and javascript
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
                                I will build a fully responsive design in
                                HTML,CSS, bootstrap, and javascript
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
                                I will do mobile app development for ios and
                                android
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will build a fully responsive design in
                                HTML,CSS, bootstrap, and javascript
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
                                I will build a fully responsive design in
                                HTML,CSS, bootstrap, and javascript
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
                                I will do mobile app development for ios and
                                android
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will build a fully responsive design in
                                HTML,CSS, bootstrap, and javascript
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
                                I will build a fully responsive design in
                                HTML,CSS, bootstrap, and javascript
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
                                I will do mobile app development for ios and
                                android
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will design modern websites in figma or adobe
                                xd
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
                                I will build a fully responsive design in
                                HTML,CSS, bootstrap, and javascript
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
                                I will build a fully responsive design in
                                HTML,CSS, bootstrap, and javascript
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
                                I will do mobile app development for ios and
                                android
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
                                I will design modern websites in figma or adobe
                                xd
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
                <img
                  className="w-100"
                  src="/assets/images/about/about-6.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highest Rated Freelancers */}
      <section className="pb120">
        <div className="container">
          <div className="row align-items-center wow fadeInUp">
            <div className="col-lg-9">
              <div className="main-title">
                <h2 className="title">Highest Rated Freelancers</h2>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-start text-lg-end mb-4">
                <a
                  className="ud-btn btn-white2 double-border bdrs60"
                  href="page-freelancer-v1.html"
                >
                  All Freelancers
                  <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="navi_pagi_bottom_center slider-4-grid owl-carousel owl-theme">
              

              <RateSlider/>
               
              
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Funfact */}
      <section className="hover-bgc-color pb90 pb30-md overflow-hidden">
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
              className="col-md-6 col-xl-4 wow fadeInRight"
              data-wow-delay="100ms"
            >
              <div className="cta-style6 mb30-sm">
                <h2 className="cta-title mb25">
                  Find the talent needed to
                  <br className="d-none d-lg-block" />
                  get your business growing.
                </h2>
                <p className="text-thm2 fz15 mb25">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  <br className="d-none d-md-block" />
                  do eiusmod tempor incididunt.
                </p>
                <a href="page-contact.html" className="ud-btn btn-dark bdrs60">
                  Get Started <i className="fal fa-arrow-right-long" />
                </a>
              </div>
            </div>
            <div
              className="col-md-6 col-xl-6 offset-xl-2 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="row align-items-center position-relative">
                <div className="home9-floating-img position-absolute">
                  <img
                    className="w-100-lg"
                    src="/assets/images/about/element-6.png"
                    alt=""
                  />
                </div>
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
                      95% of customers are satisfied through to see their
                      <br />
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

      <>
        {/* Trending Services */}
        <section className="bgc-dark pb90 pb30-md">
          <div className="container">
            <div className="row align-items-center wow fadeInUp">
              <div className="col-lg-9">
                <div className="main-title">
                  <h2 className="title text-white">Trending Services</h2>
                  <p className="paragraph text-white">
                    Most viewed and all-time top-selling services
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="text-lg-end mb-4">
                  <a
                    href="page-contact.html"
                    className="ud-btn btn-light-white bdrs60"
                  >
                    Get Started <i className="fal fa-arrow-right-long" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="slider-outer-dib vam_nav_style dots_none slider-4-grid owl-carousel owl-theme">
               
           
               
                 <TrendingSlider />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Learn With Freeio */}
        <section className="bgc-light-yellow">
          <div className="container">
            <div className="row align-items-md-center">
              <div
                className="col-md-6 col-lg-8 mb30-md wow fadeInUp"
                data-wow-delay="100ms"
              >
                <div className="main-title">
                  <h2 className="title">People Love To Learn With Freeio</h2>
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-lg-4">
                    <div className="funfact_one">
                      <div className="details">
                        <ul className="ps-0 d-flex mb-0">
                          <li>
                            <div className="timer">4</div>
                          </li>
                          <li>
                            <div>.</div>
                          </li>
                          <li>
                            <div className="timer">9</div>
                          </li>
                          <li>
                            <span>/</span>
                          </li>
                          <li>
                            <div className="timer">5</div>
                          </li>
                        </ul>
                        <p className="text mb-0">
                          Clients rate professionals on Freeio
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="funfact_one">
                      <div className="details">
                        <ul className="ps-0 d-flex mb-0">
                          <li>
                            <div className="timer">99</div>
                          </li>
                          <li>
                            <span>%</span>
                          </li>
                        </ul>
                        <p className="text mb-0">
                          95% of customers are satisfied <br />
                          through to see their freelancers
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="funfact_one">
                      <div className="details">
                        <h2>Award winner</h2>
                        <p className="text mb-0">Home ownership</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-4">
                <div
                  className="testimonial-slider2 navi_pagi_bottom_center slider-1-grid owl-carousel owl-theme wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="item">
                    <div className="testimonial-style1 default-box-shadow1 position-relative mb25">
                      <div className="testimonial-content">
                        <h4 className="title text-thm">Great Work</h4>
                        <span className="icon fas fa-quote-left" />
                        <h4 className="t_content">
                          “I found the course material to be highly engaging,
                          and the instructors to be helpful and communicative.”
                        </h4>
                      </div>
                      <div className="thumb d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="wa"
                            src="/assets/images/testimonials/testimonial-1.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">Courtney Henry</h6>
                          <p className="fz14 mb-0">Web Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-style1 default-box-shadow1 position-relative mb25">
                      <div className="testimonial-content">
                        <h4 className="title text-thm">Great Work</h4>
                        <span className="icon fas fa-quote-left" />
                        <h4 className="t_content">
                          “I found the course material to be highly engaging,
                          and the instructors to be helpful and communicative.”
                        </h4>
                      </div>
                      <div className="thumb d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="wa"
                            src="/assets/images/testimonials/testimonial-2.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">Courtney Henry</h6>
                          <p className="fz14 mb-0">Web Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-style1 default-box-shadow1 position-relative mb25">
                      <div className="testimonial-content">
                        <h4 className="title text-thm">Great Work</h4>
                        <span className="icon fas fa-quote-left" />
                        <h4 className="t_content">
                          “I found the course material to be highly engaging,
                          and the instructors to be helpful and communicative.”
                        </h4>
                      </div>
                      <div className="thumb d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="wa"
                            src="/assets/images/testimonials/testimonial-3.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">Courtney Henry</h6>
                          <p className="fz14 mb-0">Web Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-style1 default-box-shadow1 position-relative mb25">
                      <div className="testimonial-content">
                        <h4 className="title text-thm">Great Work</h4>
                        <span className="icon fas fa-quote-left" />
                        <h4 className="t_content">
                          “I found the course material to be highly engaging,
                          and the instructors to be helpful and communicative.”
                        </h4>
                      </div>
                      <div className="thumb d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="wa"
                            src="/assets/images/testimonials/testimonial-3.png"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-0">Courtney Henry</h6>
                          <p className="fz14 mb-0">Web Designer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Skills */}
        <section className="pb90 pb30-md">
          <div className="container">
            <div className="row align-items-md-center">
              <div className="col-lg-12">
                <div className="home9-navtab-style">
                  <div className="navtab-style2">
                    <nav>
                      <div
                        className="nav nav-tabs mb50"
                        id="nav-tab2"
                        role="tablist"
                      >
                        <button
                          className="nav-link active fw600"
                          id="nav-item1-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-item1"
                          type="button"
                          role="tab"
                          aria-controls="nav-item1"
                          aria-selected="true"
                        >
                          Top skills
                        </button>
                        <button
                          className="nav-link fw600"
                          id="nav-item2-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-item2"
                          type="button"
                          role="tab"
                          aria-controls="nav-item2"
                          aria-selected="false"
                        >
                          Trending skills
                        </button>
                        <button
                          className="nav-link fw600"
                          id="nav-item3-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-item3"
                          type="button"
                          role="tab"
                          aria-controls="nav-item3"
                          aria-selected="false"
                        >
                          Top skills in US
                        </button>
                        <button
                          className="nav-link fw600"
                          id="nav-item4-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-item4"
                          type="button"
                          role="tab"
                          aria-controls="nav-item4"
                          aria-selected="false"
                        >
                          Project Catalog
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-item1"
                        role="tabpanel"
                        aria-labelledby="nav-item1-tab"
                      >
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">Data Entry Specialists</a>
                                </li>
                                <li>
                                  <a href="#">Video Editors</a>
                                </li>
                                <li>
                                  <a href="#">Data Analyst</a>
                                </li>
                                <li>
                                  <a href="#">Shopify Developer</a>
                                </li>
                                <li>
                                  <a href="#">Ruby on Rails Developer</a>
                                </li>
                                <li>
                                  <a href="#">Social Media Manager</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">Android Developer</a>
                                </li>
                                <li>
                                  <a href="#">Bookkeeper</a>
                                </li>
                                <li>
                                  <a href="#">Content Writer</a>
                                </li>
                                <li>
                                  <a href="#">Copywriter</a>
                                </li>
                                <li>
                                  <a href="#">Database Administrator</a>
                                </li>
                                <li>
                                  <a href="#">Software Developer</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">Data Scientist</a>
                                </li>
                                <li>
                                  <a href="#">Front-End Developer</a>
                                </li>
                                <li>
                                  <a href="#">Game Developer</a>
                                </li>
                                <li>
                                  <a href="#">Graphic Designer</a>
                                </li>
                                <li>
                                  <a href="#">iOS Developer</a>
                                </li>
                                <li>
                                  <a href="#">Java Developer</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">JavaScript Developer</a>
                                </li>
                                <li>
                                  <a href="#">Logo Designer</a>
                                </li>
                                <li>
                                  <a href="#">Mobile App Developer</a>
                                </li>
                                <li>
                                  <a href="#">PHP Developer</a>
                                </li>
                                <li>
                                  <a href="#">Python Developer</a>
                                </li>
                                <li>
                                  <a href="#">Resume Writer</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">Technical Writer</a>
                                </li>
                                <li>
                                  <a href="#">UI Designer</a>
                                </li>
                                <li>
                                  <a href="#">UX Designer</a>
                                </li>
                                <li>
                                  <a href="#">Virtual Assistant</a>
                                </li>
                                <li>
                                  <a href="#">Web Designer</a>
                                </li>
                                <li>
                                  <a href="#">Wordpress Developer</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-item2"
                        role="tabpanel"
                        aria-labelledby="nav-item2-tab"
                      >
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">Data Entry Specialists</a>
                                </li>
                                <li>
                                  <a href="#">Video Editors</a>
                                </li>
                                <li>
                                  <a href="#">Data Analyst</a>
                                </li>
                                <li>
                                  <a href="#">Shopify Developer</a>
                                </li>
                                <li>
                                  <a href="#">Ruby on Rails Developer</a>
                                </li>
                                <li>
                                  <a href="#">Social Media Manager</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">Android Developer</a>
                                </li>
                                <li>
                                  <a href="#">Bookkeeper</a>
                                </li>
                                <li>
                                  <a href="#">Content Writer</a>
                                </li>
                                <li>
                                  <a href="#">Copywriter</a>
                                </li>
                                <li>
                                  <a href="#">Database Administrator</a>
                                </li>
                                <li>
                                  <a href="#">Software Developer</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">Data Scientist</a>
                                </li>
                                <li>
                                  <a href="#">Front-End Developer</a>
                                </li>
                                <li>
                                  <a href="#">Game Developer</a>
                                </li>
                                <li>
                                  <a href="#">Graphic Designer</a>
                                </li>
                                <li>
                                  <a href="#">iOS Developer</a>
                                </li>
                                <li>
                                  <a href="#">Java Developer</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">JavaScript Developer</a>
                                </li>
                                <li>
                                  <a href="#">Logo Designer</a>
                                </li>
                                <li>
                                  <a href="#">Mobile App Developer</a>
                                </li>
                                <li>
                                  <a href="#">PHP Developer</a>
                                </li>
                                <li>
                                  <a href="#">Python Developer</a>
                                </li>
                                <li>
                                  <a href="#">Resume Writer</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">Technical Writer</a>
                                </li>
                                <li>
                                  <a href="#">UI Designer</a>
                                </li>
                                <li>
                                  <a href="#">UX Designer</a>
                                </li>
                                <li>
                                  <a href="#">Virtual Assistant</a>
                                </li>
                                <li>
                                  <a href="#">Web Designer</a>
                                </li>
                                <li>
                                  <a href="#">Wordpress Developer</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-item3"
                        role="tabpanel"
                        aria-labelledby="nav-item3-tab"
                      >
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">Data Entry Specialists</a>
                                </li>
                                <li>
                                  <a href="#">Video Editors</a>
                                </li>
                                <li>
                                  <a href="#">Data Analyst</a>
                                </li>
                                <li>
                                  <a href="#">Shopify Developer</a>
                                </li>
                                <li>
                                  <a href="#">Ruby on Rails Developer</a>
                                </li>
                                <li>
                                  <a href="#">Social Media Manager</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">Android Developer</a>
                                </li>
                                <li>
                                  <a href="#">Bookkeeper</a>
                                </li>
                                <li>
                                  <a href="#">Content Writer</a>
                                </li>
                                <li>
                                  <a href="#">Copywriter</a>
                                </li>
                                <li>
                                  <a href="#">Database Administrator</a>
                                </li>
                                <li>
                                  <a href="#">Software Developer</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">Data Scientist</a>
                                </li>
                                <li>
                                  <a href="#">Front-End Developer</a>
                                </li>
                                <li>
                                  <a href="#">Game Developer</a>
                                </li>
                                <li>
                                  <a href="#">Graphic Designer</a>
                                </li>
                                <li>
                                  <a href="#">iOS Developer</a>
                                </li>
                                <li>
                                  <a href="#">Java Developer</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">JavaScript Developer</a>
                                </li>
                                <li>
                                  <a href="#">Logo Designer</a>
                                </li>
                                <li>
                                  <a href="#">Mobile App Developer</a>
                                </li>
                                <li>
                                  <a href="#">PHP Developer</a>
                                </li>
                                <li>
                                  <a href="#">Python Developer</a>
                                </li>
                                <li>
                                  <a href="#">Resume Writer</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">Technical Writer</a>
                                </li>
                                <li>
                                  <a href="#">UI Designer</a>
                                </li>
                                <li>
                                  <a href="#">UX Designer</a>
                                </li>
                                <li>
                                  <a href="#">Virtual Assistant</a>
                                </li>
                                <li>
                                  <a href="#">Web Designer</a>
                                </li>
                                <li>
                                  <a href="#">Wordpress Developer</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-item4"
                        role="tabpanel"
                        aria-labelledby="nav-item4-tab"
                      >
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">Data Entry Specialists</a>
                                </li>
                                <li>
                                  <a href="#">Video Editors</a>
                                </li>
                                <li>
                                  <a href="#">Data Analyst</a>
                                </li>
                                <li>
                                  <a href="#">Shopify Developer</a>
                                </li>
                                <li>
                                  <a href="#">Ruby on Rails Developer</a>
                                </li>
                                <li>
                                  <a href="#">Social Media Manager</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">Android Developer</a>
                                </li>
                                <li>
                                  <a href="#">Bookkeeper</a>
                                </li>
                                <li>
                                  <a href="#">Content Writer</a>
                                </li>
                                <li>
                                  <a href="#">Copywriter</a>
                                </li>
                                <li>
                                  <a href="#">Database Administrator</a>
                                </li>
                                <li>
                                  <a href="#">Software Developer</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">Data Scientist</a>
                                </li>
                                <li>
                                  <a href="#">Front-End Developer</a>
                                </li>
                                <li>
                                  <a href="#">Game Developer</a>
                                </li>
                                <li>
                                  <a href="#">Graphic Designer</a>
                                </li>
                                <li>
                                  <a href="#">iOS Developer</a>
                                </li>
                                <li>
                                  <a href="#">Java Developer</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">JavaScript Developer</a>
                                </li>
                                <li>
                                  <a href="#">Logo Designer</a>
                                </li>
                                <li>
                                  <a href="#">Mobile App Developer</a>
                                </li>
                                <li>
                                  <a href="#">PHP Developer</a>
                                </li>
                                <li>
                                  <a href="#">Python Developer</a>
                                </li>
                                <li>
                                  <a href="#">Resume Writer</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="skill-list-style1 mb20">
                              <ul className="p-0 mb-0">
                                <li>
                                  <a href="#">Technical Writer</a>
                                </li>
                                <li>
                                  <a href="#">UI Designer</a>
                                </li>
                                <li>
                                  <a href="#">UX Designer</a>
                                </li>
                                <li>
                                  <a href="#">Virtual Assistant</a>
                                </li>
                                <li>
                                  <a href="#">Web Designer</a>
                                </li>
                                <li>
                                  <a href="#">Wordpress Developer</a>
                                </li>
                              </ul>
                            </div>
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
  );
}
