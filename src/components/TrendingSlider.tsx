"use client";

import React from "react";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function TrendingSlider() {
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
        <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
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
                <span className="dark-color me-2">4.82</span>94 reviews
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
                  <span className="fz17 fw500 dark-color ms-1">$983</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
          <div className="list-thumb">
            <img
              className="w-100"
              src="/assets/images/listings/g-2.jpg"
              alt=""
            />
            <a href="#" className="listing-fav fz12">
              <span className="far fa-heart" />
            </a>
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
                <span className="dark-color me-2">4.82</span>94 reviews
              </p>
            </div>
            <hr className="my-2" />
            <div className="list-meta d-flex justify-content-between align-items-center mt15">
              <a className="d-flex" href="#">
                <span className="position-relative mr10">
                  <img
                    className="rounded-circle wa"
                    src="/assets/images/team/fl-s-2.png"
                    alt="Freelancer Photo"
                  />
                  <span className="online-badges" />
                </span>
                <span className="fz14">Ali Tufan</span>
              </a>
              <div className="budget">
                <p className="mb-0 body-color">
                  Starting at
                  <span className="fz17 fw500 dark-color ms-1">$983</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
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
                I will build a fully responsive design in HTML,CSS, bootstrap,
                and javascript
              </a>
            </h5>
            <div className="review-meta d-flex align-items-center">
              <i className="fas fa-star fz10 review-color me-2" />
              <p className="mb-0 body-color fz14">
                <span className="dark-color me-2">4.82</span>94 reviews
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
                  <span className="fz17 fw500 dark-color ms-1">$983</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
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
                <span className="dark-color me-2">4.82</span>94 reviews
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
                  <span className="fz17 fw500 dark-color ms-1">$983</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
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
                <span className="dark-color me-2">4.82</span>94 reviews
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
                  <span className="fz17 fw500 dark-color ms-1">$983</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
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
                <span className="dark-color me-2">4.82</span>94 reviews
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
                  <span className="fz17 fw500 dark-color ms-1">$983</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
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
                I will build a fully responsive design in HTML,CSS, bootstrap,
                and javascript
              </a>
            </h5>
            <div className="review-meta d-flex align-items-center">
              <i className="fas fa-star fz10 review-color me-2" />
              <p className="mb-0 body-color fz14">
                <span className="dark-color me-2">4.82</span>94 reviews
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
                  <span className="fz17 fw500 dark-color ms-1">$983</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
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
                <span className="dark-color me-2">4.82</span>94 reviews
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
                  <span className="fz17 fw500 dark-color ms-1">$983</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="listing-style1 border-0 default-box-shadow1 bdrs16">
          <div className="list-thumb">
            <img
              className="w-100"
              src="/assets/images/listings/g-2.jpg"
              alt=""
            />
            <a href="#" className="listing-fav fz12">
              <span className="far fa-heart" />
            </a>
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
                <span className="dark-color me-2">4.82</span>94 reviews
              </p>
            </div>
            <hr className="my-2" />
            <div className="list-meta d-flex justify-content-between align-items-center mt15">
              <a className="d-flex" href="#">
                <span className="position-relative mr10">
                  <img
                    className="rounded-circle wa"
                    src="/assets/images/team/fl-s-2.png"
                    alt="Freelancer Photo"
                  />
                  <span className="online-badges" />
                </span>
                <span className="fz14">Ali Tufan</span>
              </a>
              <div className="budget">
                <p className="mb-0 body-color">
                  Starting at
                  <span className="fz17 fw500 dark-color ms-1">$983</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
