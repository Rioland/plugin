"use client";

import React from "react";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function ProductSlider() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="true"
    >
     
      <div className="carousel-inner">
        <div className="carousel-item active">
          {/* <div className="img-fluid p50 p30-sm"> */}
            <img
              src="/assets/images/listings/service-details-1.jpg"
              alt=""
              className="w-100 "
            />
          {/* </div> */}
        </div>
        <div className="carousel-item">
          {/* <div className="thumb p50 p30-sm"> */}
            <img
              src="/assets/images/listings/service-details-1.jpg"
              alt=""
              className="w-100 img-fluid"
            />
          {/* </div> */}
        </div>
        <div className="carousel-item">
          {/* <div className="thumb p50 p30-sm"> */}
            <img
              src="/assets/images/listings/service-details-1.jpg"
              alt=""
              className="w-100 img-fluid"
            />
          {/* </div> */}
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>


  );
}
