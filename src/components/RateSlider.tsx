"use client";

import React from 'react'

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function RateSlider() {
  return (
        <Swiper
      spaceBetween={30}
      slidesPerView={3}
      navigation={true}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        clickableClass: "swiper-pagination-clickable",
      }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        {" "}
        <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                    <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                      <img
                        className="rounded-circle mx-auto"
                        src="/assets/images/team/fl-1.png"
                        alt=""
                      />
                      <span className="online" />
                    </div>
                    <div className="details">
                      <h5 className="title mb-1">Robert Fox</h5>
                      <p className="mb-0">Nursing Assistant</p>
                      <div className="review">
                        <p>
                          <i className="fas fa-star fz10 review-color pr10" />
                          <span className="dark-color">4.9</span> (595 reviews)
                        </p>
                      </div>
                      <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                        <span className="tag">Figma</span>
                        <span className="tag mx10">Sketch</span>
                        <span className="tag">HTML5</span>
                      </div>
                      <hr className="opacity-100 mt20 mb15" />
                      <div className="fl-meta d-flex align-items-center justify-content-between">
                        <a className="meta fw500 text-start">
                          Location
                          <br />
                          <span className="fz14 fw400">London</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Rate
                          <br />
                          <span className="fz14 fw400">$90 / hr</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Job Success
                          <br />
                          <span className="fz14 fw400">%98</span>
                        </a>
                      </div>
                      <div className="d-grid mt15">
                        <a
                          href="page-freelancer-single.html"
                          className="ud-btn btn-white2 double-border bdrs60"
                        >
                          View Profile
                          <i className="fal fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                    <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                      <img
                        className="rounded-circle mx-auto"
                        src="/assets/images/team/fl-2.png"
                        alt=""
                      />
                      <span className="online" />
                    </div>
                    <div className="details">
                      <h5 className="title mb-1">Kristin Watson</h5>
                      <p className="mb-0">Dog Trainer</p>
                      <div className="review">
                        <p>
                          <i className="fas fa-star fz10 review-color pr10" />
                          <span className="dark-color">4.9</span> (595 reviews)
                        </p>
                      </div>
                      <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                        <span className="tag">Figma</span>
                        <span className="tag mx10">Sketch</span>
                        <span className="tag">HTML5</span>
                      </div>
                      <hr className="opacity-100 mt20 mb15" />
                      <div className="fl-meta d-flex align-items-center justify-content-between">
                        <a className="meta fw500 text-start">
                          Location
                          <br />
                          <span className="fz14 fw400">London</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Rate
                          <br />
                          <span className="fz14 fw400">$90 / hr</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Job Success
                          <br />
                          <span className="fz14 fw400">%98</span>
                        </a>
                      </div>
                      <div className="d-grid mt15">
                        <a
                          href="page-freelancer-single.html"
                          className="ud-btn btn-white2 double-border bdrs60"
                        >
                          View Profile
                          <i className="fal fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
      </SwiperSlide>

      <SwiperSlide>
          <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                    <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                      <img
                        className="rounded-circle mx-auto"
                        src="/assets/images/team/fl-3.png"
                        alt=""
                      />
                      <span className="online" />
                    </div>
                    <div className="details">
                      <h5 className="title mb-1">Darrell Steward</h5>
                      <p className="mb-0">Medical Assistant</p>
                      <div className="review">
                        <p>
                          <i className="fas fa-star fz10 review-color pr10" />
                          <span className="dark-color">4.9</span> (595 reviews)
                        </p>
                      </div>
                      <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                        <span className="tag">Figma</span>
                        <span className="tag mx10">Sketch</span>
                        <span className="tag">HTML5</span>
                      </div>
                      <hr className="opacity-100 mt20 mb15" />
                      <div className="fl-meta d-flex align-items-center justify-content-between">
                        <a className="meta fw500 text-start">
                          Location
                          <br />
                          <span className="fz14 fw400">London</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Rate
                          <br />
                          <span className="fz14 fw400">$90 / hr</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Job Success
                          <br />
                          <span className="fz14 fw400">%98</span>
                        </a>
                      </div>
                      <div className="d-grid mt15">
                        <a
                          href="page-freelancer-single.html"
                          className="ud-btn btn-white2 double-border bdrs60"
                        >
                          View Profile
                          <i className="fal fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                    <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                      <img
                        className="rounded-circle mx-auto"
                        src="/assets/images/team/fl-4.png"
                        alt=""
                      />
                      <span className="online" />
                    </div>
                    <div className="details">
                      <h5 className="title mb-1">Theresa Webb</h5>
                      <p className="mb-0">Marketing Coordinator</p>
                      <div className="review">
                        <p>
                          <i className="fas fa-star fz10 review-color pr10" />
                          <span className="dark-color">4.9</span> (595 reviews)
                        </p>
                      </div>
                      <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                        <span className="tag">Figma</span>
                        <span className="tag mx10">Sketch</span>
                        <span className="tag">HTML5</span>
                      </div>
                      <hr className="opacity-100 mt20 mb15" />
                      <div className="fl-meta d-flex align-items-center justify-content-between">
                        <a className="meta fw500 text-start">
                          Location
                          <br />
                          <span className="fz14 fw400">London</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Rate
                          <br />
                          <span className="fz14 fw400">$90 / hr</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Job Success
                          <br />
                          <span className="fz14 fw400">%98</span>
                        </a>
                      </div>
                      <div className="d-grid mt15">
                        <a
                          href="page-freelancer-single.html"
                          className="ud-btn btn-white2 double-border bdrs60"
                        >
                          View Profile
                          <i className="fal fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
      </SwiperSlide>


      <SwiperSlide>
         <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                    <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                      <img
                        className="rounded-circle mx-auto"
                        src="/assets/images/team/fl-1.png"
                        alt=""
                      />
                      <span className="online" />
                    </div>
                    <div className="details">
                      <h5 className="title mb-1">Robert Fox</h5>
                      <p className="mb-0">Nursing Assistant</p>
                      <div className="review">
                        <p>
                          <i className="fas fa-star fz10 review-color pr10" />
                          <span className="dark-color">4.9</span> (595 reviews)
                        </p>
                      </div>
                      <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                        <span className="tag">Figma</span>
                        <span className="tag mx10">Sketch</span>
                        <span className="tag">HTML5</span>
                      </div>
                      <hr className="opacity-100 mt20 mb15" />
                      <div className="fl-meta d-flex align-items-center justify-content-between">
                        <a className="meta fw500 text-start">
                          Location
                          <br />
                          <span className="fz14 fw400">London</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Rate
                          <br />
                          <span className="fz14 fw400">$90 / hr</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Job Success
                          <br />
                          <span className="fz14 fw400">%98</span>
                        </a>
                      </div>
                      <div className="d-grid mt15">
                        <a
                          href="page-freelancer-single.html"
                          className="ud-btn btn-white2 double-border bdrs60"
                        >
                          View Profile
                          <i className="fal fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
      </SwiperSlide>

        <SwiperSlide>
        <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                    <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                      <img
                        className="rounded-circle mx-auto"
                        src="/assets/images/team/fl-2.png"
                        alt=""
                      />
                      <span className="online" />
                    </div>
                    <div className="details">
                      <h5 className="title mb-1">Kristin Watson</h5>
                      <p className="mb-0">Dog Trainer</p>
                      <div className="review">
                        <p>
                          <i className="fas fa-star fz10 review-color pr10" />
                          <span className="dark-color">4.9</span> (595 reviews)
                        </p>
                      </div>
                      <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                        <span className="tag">Figma</span>
                        <span className="tag mx10">Sketch</span>
                        <span className="tag">HTML5</span>
                      </div>
                      <hr className="opacity-100 mt20 mb15" />
                      <div className="fl-meta d-flex align-items-center justify-content-between">
                        <a className="meta fw500 text-start">
                          Location
                          <br />
                          <span className="fz14 fw400">London</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Rate
                          <br />
                          <span className="fz14 fw400">$90 / hr</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Job Success
                          <br />
                          <span className="fz14 fw400">%98</span>
                        </a>
                      </div>
                      <div className="d-grid mt15">
                        <a
                          href="page-freelancer-single.html"
                          className="ud-btn btn-white2 double-border bdrs60"
                        >
                          View Profile
                          <i className="fal fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

        <SwiperSlide> 
        <div className="freelancer-style1 text-center bdr1 hover-box-shadow mb60 bdrs16">
                    <div className="thumb w90 mb25 mx-auto position-relative rounded-circle">
                      <img
                        className="rounded-circle mx-auto"
                        src="/assets/images/team/fl-3.png"
                        alt=""
                      />
                      <span className="online" />
                    </div>
                    <div className="details">
                      <h5 className="title mb-1">Darrell Steward</h5>
                      <p className="mb-0">Medical Assistant</p>
                      <div className="review">
                        <p>
                          <i className="fas fa-star fz10 review-color pr10" />
                          <span className="dark-color">4.9</span> (595 reviews)
                        </p>
                      </div>
                      <div className="skill-tags d-flex align-items-center justify-content-center mb5">
                        <span className="tag">Figma</span>
                        <span className="tag mx10">Sketch</span>
                        <span className="tag">HTML5</span>
                      </div>
                      <hr className="opacity-100 mt20 mb15" />
                      <div className="fl-meta d-flex align-items-center justify-content-between">
                        <a className="meta fw500 text-start">
                          Location
                          <br />
                          <span className="fz14 fw400">London</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Rate
                          <br />
                          <span className="fz14 fw400">$90 / hr</span>
                        </a>
                        <a className="meta fw500 text-start">
                          Job Success
                          <br />
                          <span className="fz14 fw400">%98</span>
                        </a>
                      </div>
                      <div className="d-grid mt15">
                        <a
                          href="page-freelancer-single.html"
                          className="ud-btn btn-white2 double-border bdrs60"
                        >
                          View Profile
                          <i className="fal fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
        </SwiperSlide>
        
    </Swiper>
  )
}
