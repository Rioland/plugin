"use client";
import React, { Fragment } from "react";
import DashBoardHeader from "./Components/DashBoardHeader";
import DashboardFooter from "./Components/DashboardFooter";
import ChartCanvasOne from "./Components/ChartCanvasOne";

export default function page() {
  function myFunction() {
    document.getElementById("myDropdown")?.classList.toggle("show");
  }

  return (
    <Fragment>
      <DashBoardHeader />
      <div className="dashboard_content_wrapper">
        <div className="dashboard dashboard_wrapper pr30 pr0-xl">
          <div className="dashboard__sidebar d-none d-lg-block">
            <div className="dashboard_sidebar_list">
              <p className="fz15 fw400 ff-heading pl30">Start</p>
              <div className="sidebar_list_item">
                <a
                  href="page-dashboard.html"
                  className="items-center -is-active"
                >
                  <i className="flaticon-home mr15" />
                  Dashboard
                </a>
              </div>
              <div className="sidebar_list_item">
                <a href="page-dashboard-proposal.html" className="items-center">
                  <i className="flaticon-document mr15" />
                  My Proposals
                </a>
              </div>
              <div className="sidebar_list_item">
                <a href="page-dashboard-save.html" className="items-center">
                  <i className="flaticon-like mr15" />
                  Saved
                </a>
              </div>
              <div className="sidebar_list_item ">
                <a href="page-dashboard-message.html" className="items-center">
                  <i className="flaticon-chat mr15" />
                  Message
                </a>
              </div>
              <div className="sidebar_list_item ">
                <a href="page-dashboard-reviews.html" className="items-center">
                  <i className="flaticon-review-1 mr15" />
                  Reviews
                </a>
              </div>
              <div className="sidebar_list_item">
                <a href="page-dashboard-invoice.html" className="items-center">
                  <i className="flaticon-receipt mr15" />
                  Invoice
                </a>
              </div>
              <div className="sidebar_list_item">
                <a href="page-dashboard-payouts.html" className="items-center">
                  <i className="flaticon-dollar mr15" />
                  Payouts
                </a>
              </div>
              <div className="sidebar_list_item">
                <a
                  href="page-dashboard-statement.html"
                  className="items-center"
                >
                  <i className="flaticon-web mr15" />
                  Statements
                </a>
              </div>
              <p className="fz15 fw400 ff-heading pl30 mt30">
                Organize and Manage
              </p>
              <div className="sidebar_list_item ">
                <a
                  href="page-dashboard-manage-service.html"
                  className="items-center"
                >
                  <i className="flaticon-presentation mr15" />
                  Manage Services
                </a>
              </div>
              <div className="sidebar_list_item ">
                <a
                  href="page-dashboard-manage-jobs.html"
                  className="items-center"
                >
                  <i className="flaticon-briefcase mr15" />
                  Manage Jobs
                </a>
              </div>
              <div className="sidebar_list_item ">
                <a
                  href="page-dashboard-manage-project.html"
                  className="items-center"
                >
                  <i className="flaticon-content mr15" />
                  Manage Project
                </a>
              </div>
              <p className="fz15 fw400 ff-heading pl30 mt30">Account</p>
              <div className="sidebar_list_item ">
                <a href="page-dashboard-profile.html" className="items-center">
                  <i className="flaticon-photo mr15" />
                  My Profile
                </a>
              </div>
              <div className="sidebar_list_item ">
                <a href="page-login.html" className="items-center">
                  <i className="flaticon-logout mr15" />
                  Logout
                </a>
              </div>
            </div>
          </div>
          <div className="dashboard__main pl0-md">
            <div className="dashboard__content hover-bgc-color">
              <div className="row pb40">
                <div className="col-lg-12">
                  <div className="dashboard_navigationbar d-block d-lg-none">
                    <div className="dropdown">
                      <button
                        onClick={() => {
                          myFunction();
                          // document.getElementById("myDropdown").classList.toggle("show");
                        }}
                        className="dropbtn"
                      >
                        <i className="fa fa-bars pr10" /> Dashboard Navigation
                      </button>
                      <ul id="myDropdown" className="dropdown-content">
                        <li>
                          <p className="fz15 fw400 ff-heading mt30 pl30">
                            Start
                          </p>
                        </li>
                        <li className="active">
                          <a href="page-dashboard.html">
                            <i className="flaticon-home mr10" />
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="page-dashboard-proposal.html">
                            <i className="flaticon-document mr10" />
                            My Proposals
                          </a>
                        </li>
                        <li>
                          <a href="page-dashboard-save.html">
                            <i className="flaticon-like mr10" />
                            Saved
                          </a>
                        </li>
                        <li>
                          <a href="page-dashboard-message.html">
                            <i className="flaticon-chat mr10" />
                            Message
                          </a>
                        </li>
                        <li>
                          <a href="page-dashboard-reviews.html">
                            <i className="flaticon-review-1 mr10" />
                            Reviews
                          </a>
                        </li>
                        <li>
                          <a href="page-dashboard-invoice.html">
                            <i className="flaticon-receipt mr10" />
                            Invoice
                          </a>
                        </li>
                        <li>
                          <a href="page-dashboard-payouts.html">
                            <i className="flaticon-dollar mr10" />
                            Payouts
                          </a>
                        </li>
                        <li>
                          <a href="page-dashboard-statement.html">
                            <i className="flaticon-web mr10" />
                            Statements
                          </a>
                        </li>
                        <li>
                          <p className="fz15 fw400 ff-heading mt30 pl30">
                            Organize and Manage
                          </p>
                        </li>
                        <li>
                          <a href="page-dashboard-manage-service.html">
                            <i className="flaticon-presentation mr10" />
                            Manage Services
                          </a>
                        </li>
                        <li>
                          <a href="page-dashboard-manage-jobs.html">
                            <i className="flaticon-briefcase mr10" />
                            Manage Jobs
                          </a>
                        </li>
                        <li>
                          <a href="page-dashboard-manage-project.html">
                            <i className="flaticon-content mr10" />
                            Manage Project
                          </a>
                        </li>
                        <li>
                          <p className="fz15 fw400 ff-heading mt30 pl30">
                            Account
                          </p>
                        </li>
                        <li>
                          <a href="page-dashboard-profile.html">
                            <i className="flaticon-photo mr10" />
                            My Profile
                          </a>
                        </li>
                        <li>
                          <a href="page-login.html">
                            <i className="flaticon-logout mr10" />
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="dashboard_title_area">
                    <h2>Dashboard</h2>
                    <p className="text">
                      Lorem ipsum dolor sit amet, consectetur.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-xxl-3">
                  <div className="d-flex align-items-center justify-content-between statistics_funfact">
                    <div className="details">
                      <div className="fz15">Services Offered</div>
                      <div className="title">25</div>
                      <div className="text fz14">
                        <span className="text-thm">10</span> New Offered
                      </div>
                    </div>
                    <div className="icon text-center">
                      <i className="flaticon-contract" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xxl-3">
                  <div className="d-flex align-items-center justify-content-between statistics_funfact">
                    <div className="details">
                      <div className="fz15">Completed Services</div>
                      <div className="title">1292</div>
                      <div className="text fz14">
                        <span className="text-thm">80+</span> New Completed
                      </div>
                    </div>
                    <div className="icon text-center">
                      <i className="flaticon-success" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xxl-3">
                  <div className="d-flex align-items-center justify-content-between statistics_funfact">
                    <div className="details">
                      <div className="fz15">in Queue Services</div>
                      <div className="title">182</div>
                      <div className="text fz14">
                        <span className="text-thm">35+</span> New Queue
                      </div>
                    </div>
                    <div className="icon text-center">
                      <i className="flaticon-review" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xxl-3">
                  <div className="d-flex align-items-center justify-content-between statistics_funfact">
                    <div className="details">
                      <div className="fz15">Total Review</div>
                      <div className="title">22,786</div>
                      <div className="text fz14">
                        <span className="text-thm">290+</span> New Review
                      </div>
                    </div>
                    <div className="icon text-center">
                      <i className="flaticon-review-1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-8">
                  <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                    <div className="navtab-style1">
                      <div className="d-sm-flex align-items-center justify-content-between">
                        <h4 className="title fz17 mb20">Profile Views</h4>
                        <div className="page_control_shorting dark-color pr10 text-center text-md-end">
                          <select className="selectpicker show-tick">
                            <option>This Week</option>
                            <option>This Month</option>
                            <option>This Year</option>
                          </select>
                        </div>
                      </div>
                      <canvas id="myChartweave" style={{ height: 230 }} />
                      {/* <ChartCanvasOne /> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                    <div className="bdrb1 pb15 mb50">
                      <h5 className="title">Traffic</h5>
                    </div>
                    <canvas id="myChart" height="260px" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-xxl-4">
                  <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                    <div className="d-flex justify-content-between bdrb1 pb15 mb20">
                      <h5 className="title">Most Viewed Services</h5>
                      <a
                        className="text-decoration-underline text-thm6"
                        href="#"
                      >
                        View All
                      </a>
                    </div>
                    <div className="dashboard-img-service">
                      <div className="listing-style1 list-style d-block d-xl-flex align-items-center border-0 mb10">
                        <div className="list-thumb flex-shrink-0 bdrs4">
                          <img
                            className="w-100"
                            src="/assets/images/listings/g-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="list-content flex-grow-1 pt10 pb10 pl15 pl0-lg">
                          <h6 className="list-title mb-2">
                            <a href="page-services-single.html">
                              I will design modern websites in figma or adobe xd
                            </a>
                          </h6>
                          <div className="list-meta d-flex justify-content-between align-items-center">
                            <div className="review-meta d-flex align-items-center">
                              <i className="fas fa-star fz10 review-color me-2" />
                              <p className="mb-0 body-color fz14">
                                <span className="dark-color me-2">4.82</span>
                              </p>
                            </div>
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
                      <hr className="opacity-100 mt-0" />
                      <div className="listing-style1 list-style d-block d-xl-flex align-items-center border-0 mb10">
                        <div className="list-thumb flex-shrink-0 bdrs4">
                          <img
                            className="w-100"
                            src="/assets/images/listings/g-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="list-content flex-grow-1 pt0 pb10 pl15 pl0-lg">
                          <h6 className="list-title mb-2">
                            <a href="page-services-single.html">
                              I will create modern flat design illustration
                            </a>
                          </h6>
                          <div className="list-meta d-flex justify-content-between align-items-center">
                            <div className="review-meta d-flex align-items-center">
                              <i className="fas fa-star fz10 review-color me-2" />
                              <p className="mb-0 body-color fz14">
                                <span className="dark-color me-2">4.82</span>
                              </p>
                            </div>
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
                      <hr className="opacity-100 mt-0" />
                      <div className="listing-style1 list-style d-block d-xl-flex align-items-center border-0 mb-0">
                        <div className="list-thumb flex-shrink-0 bdrs4">
                          <img
                            className="w-100"
                            src="/assets/images/listings/g-6.jpg"
                            alt=""
                          />
                        </div>
                        <div className="list-content flex-grow-1 pt0 pb-0 pl15 pl0-lg pe-0">
                          <h6 className="list-title mb-2">
                            <a href="page-services-single.html">
                              I will build a fully responsive design in
                              HTML,CSS, bootstrap, and javascript
                            </a>
                          </h6>
                          <div className="list-meta d-flex justify-content-between align-items-center">
                            <div className="review-meta d-flex align-items-center">
                              <i className="fas fa-star fz10 review-color me-2" />
                              <p className="mb-0 body-color fz14">
                                <span className="dark-color me-2">4.82</span>
                              </p>
                            </div>
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
                  </div>
                </div>
                <div className="col-md-6 col-xxl-4">
                  <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                    <div className="d-flex justify-content-between bdrb1 pb15 mb30">
                      <h5 className="title">Recent Purchased Services</h5>
                      <a
                        className="text-decoration-underline text-thm6"
                        href="#"
                      >
                        View All
                      </a>
                    </div>
                    <div className="dashboard-img-service">
                      <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb10">
                        <div className="list-thumb wa flex-shrink-0 bdrs4 mb15-lg">
                          <img
                            className="wa img-2"
                            src="/assets/images/team/client-1.png"
                            alt=""
                          />
                        </div>
                        <div className="list-content flex-grow-1 py-0 pb10 pl15 pl0-lg">
                          <h6 className="list-title mb-2">
                            Medium.{" "}
                            <span className="text-thm">has purchased</span> I
                            will deal with your item Description and assets
                          </h6>
                          <div className="list-meta d-flex justify-content-between align-items-center">
                            <div className="review-meta d-flex align-items-center">
                              <p className="mb-0 body-color fz14">
                                February 26, 2021
                              </p>
                            </div>
                            <div className="budget">
                              <p className="mb-0">
                                <span className="fz15 fw500 dark-color">
                                  $983
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="opacity-100 mt-0" />
                      <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb10 mt20">
                        <div className="list-thumb wa flex-shrink-0 bdrs4 mb15-lg">
                          <img
                            className="wa img-2"
                            src="/assets/images/team/client-3.png"
                            alt=""
                          />
                        </div>
                        <div className="list-content flex-grow-1 py-0 pb10 pl15 pl0-lg">
                          <h6 className="list-title mb-2">
                            Medium.{" "}
                            <span className="text-thm">has purchased</span> I
                            will deal with your item Description and assets
                          </h6>
                          <div className="list-meta d-flex justify-content-between align-items-center">
                            <div className="review-meta d-flex align-items-center">
                              <p className="mb-0 body-color fz14">
                                February 26, 2021
                              </p>
                            </div>
                            <div className="budget">
                              <p className="mb-0">
                                <span className="fz15 fw500 dark-color">
                                  $983
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="opacity-100 mt-0" />
                      <div className="listing-style1 list-style d-block d-xl-flex align-items-start border-0 mb-0 mt20">
                        <div className="list-thumb wa flex-shrink-0 bdrs4 mb15-lg">
                          <img
                            className="wa img-2"
                            src="/assets/images/team/client-6.png"
                            alt=""
                          />
                        </div>
                        <div className="list-content flex-grow-1 py-0 pl15 pl0-lg">
                          <h6 className="list-title mb-2">
                            Medium.{" "}
                            <span className="text-thm">has purchased</span> I
                            will deal with your item Description and assets
                          </h6>
                          <div className="list-meta d-flex justify-content-between align-items-center">
                            <div className="review-meta d-flex align-items-center">
                              <p className="mb-0 body-color fz14">
                                February 26, 2021
                              </p>
                            </div>
                            <div className="budget">
                              <p className="mb-0">
                                <span className="fz15 fw500 dark-color">
                                  $983
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xxl-4">
                  <div className="ps-widget bgc-white bdrs4 p30 mb30 overflow-hidden position-relative">
                    <div className="bdrb1 pb15 mb30">
                      <h5 className="title">Recent Activity</h5>
                    </div>
                    <div className="dashboard-timeline-label">
                      <div className="timeline-item pb15">
                        {/*begin::Label*/}
                        <div className="child-timeline-label">08:42</div>
                        {/*end::Label*/}
                        {/*begin::Badge*/}
                        <div className="timeline-badge d-flex align-items-center">
                          <i className="fas fa-genderless" />
                        </div>
                        {/*end::Badge*/}
                        {/*begin::Text*/}
                        <div className="ra_pcontent pl10">
                          <span className="title">Purchase by Ali Price</span>{" "}
                          <br />{" "}
                          <span className="subtitle">
                            Product noise evolve smartwatch
                          </span>
                        </div>
                        {/*end::Text*/}
                      </div>
                    </div>
                    <div className="dashboard-timeline-label">
                      <div className="timeline-item pb15">
                        {/*begin::Label*/}
                        <div className="child-timeline-label">14:37</div>
                        {/*end::Label*/}
                        {/*begin::Badge*/}
                        <div className="timeline-badge d-flex align-items-center color3">
                          <i className="fas fa-genderless" />
                        </div>
                        {/*end::Badge*/}
                        {/*begin::Text*/}
                        <div className="ra_pcontent pl10">
                          <span className="title">
                            Make deposit{" "}
                            <span className="text-thm6 fw500">USD 700</span> to
                            TFN
                          </span>
                        </div>
                        {/*end::Text*/}
                      </div>
                    </div>
                    <div className="dashboard-timeline-label">
                      <div className="timeline-item pb0">
                        {/*begin::Label*/}
                        <div className="child-timeline-label">16:50</div>
                        {/*end::Label*/}
                        {/*begin::Badge*/}
                        <div className="timeline-badge d-flex align-items-center color4">
                          <i className="fas fa-genderless" />
                        </div>
                        {/*end::Badge*/}
                        {/*begin::Text*/}
                        <div className="ra_pcontent pl10">
                          <span className="title">
                            Natasha Carey have liked the products
                          </span>{" "}
                          <br />{" "}
                          <span className="subtitle">
                            Allow users to like products in your WooCommerce
                            store.
                          </span>
                        </div>
                        {/*end::Text*/}
                      </div>
                    </div>
                    <div className="dashboard-timeline-label">
                      <div className="timeline-item pb10">
                        {/*begin::Label*/}
                        <div className="child-timeline-label">21:03</div>
                        {/*end::Label*/}
                        {/*begin::Badge*/}
                        <div className="timeline-badge d-flex align-items-center color5">
                          <i className="fas fa-genderless" />
                        </div>
                        {/*end::Badge*/}
                        {/*begin::Text*/}
                        <div className="ra_pcontent pl10">
                          <span className="title">Favoried Product</span> <br />{" "}
                          <span className="subtitle">
                            Esther James have favorited product.
                          </span>
                        </div>
                        {/*end::Text*/}
                      </div>
                    </div>
                    <div className="dashboard-timeline-label before-none mb30">
                      <div className="timeline-item">
                        {/*begin::Label*/}
                        <div className="child-timeline-label">23:07</div>
                        {/*end::Label*/}
                        {/*begin::Badge*/}
                        <div className="timeline-badge d-flex align-items-center color6">
                          <i className="fas fa-genderless" />
                        </div>
                        {/*end::Badge*/}
                        {/*begin::Text*/}
                        <div className="ra_pcontent pl10">
                          <span className="title">
                            Today offers by Digitech Galaxy
                          </span>{" "}
                          <br />{" "}
                          <span className="subtitle">
                            Offer is valid on orders of Rs.500 Or above for
                            selected products only.
                          </span>
                        </div>
                        {/*end::Text*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <DashboardFooter />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
