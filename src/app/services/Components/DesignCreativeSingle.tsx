import React from 'react'

export default function DesignCreativeSingle() {
  return (
        <section className="breadcumb-section pt-0">
        <div className="cta-service-single cta-banner mx-auto maxw1700 pt120 pt60-sm pb120 pb60-sm bdrs16 position-relative overflow-hidden d-flex align-items-center mx20-lg px30-lg">
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
          <img
            className="service-v1-vector bounce-y d-none d-xl-block"
            src="/assets/images/vector-img/vector-service-v1.png"
            alt=""
          />
          <div className="container">
            <div className="row wow fadeInUp">
              <div className="col-xl-7">
                <div className="position-relative">
                  <h2>I will design website UI UX in adobe xd or figma</h2>
                  <div className="list-meta mt30">
                    <a className="list-inline-item mb5-sm" href="#">
                      <span className="position-relative mr10">
                        <img
                          className="rounded-circle"
                          src="/assets/images/team/fl-d-1.png"
                          alt="Freelancer Photo"
                        />
                        <span className="online-badge" />
                      </span>
                      <span className="fz14">Eleanor Pena</span>
                    </a>
                    <p className="mb-0 dark-color fz14 list-inline-item ml25 ml15-sm mb5-sm ml0-xs">
                      <i className="fas fa-star vam fz10 review-color me-2" /> 4.82 94
                      reviews
                    </p>
                    <p className="mb-0 dark-color fz14 list-inline-item ml25 ml15-sm mb5-sm ml0-xs">
                      <i className="flaticon-file-1 vam fz20 me-2" /> 2 Order in Queue
                    </p>
                    <p className="mb-0 dark-color fz14 list-inline-item ml25 ml15-sm mb5-sm ml0-xs">
                      <i className="flaticon-website vam fz20 me-2" /> 902 Views
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
  )
}
