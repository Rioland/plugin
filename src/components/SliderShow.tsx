"use client";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderShow = () => {
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
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>

      <SwiperSlide>
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
      </SwiperSlide>

      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
    </Swiper>
  );
};
export default SliderShow;
