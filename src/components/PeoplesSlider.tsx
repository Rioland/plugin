"use client";

import React from "react";

// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function PeoplesSlider() {
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
         className="mySwiperPeople"
       >
         <SwiperSlide  style={{height: 100}}>
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
         </SwiperSlide>
   
         <SwiperSlide >
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
         </SwiperSlide>
   
         <SwiperSlide >
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
         </SwiperSlide>
   
         <SwiperSlide >
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
         </SwiperSlide>
   
       </Swiper>
  )
}
