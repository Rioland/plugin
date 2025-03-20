'use client'
import React from "react";

export default function FiltersContent() {
        const [sortType, setSortType] = React.useState("Best Seller");
    
  return (
    <>
      <div className="lefttside-hidden-bar">
        <div className="hsidebar-header bdrb1">
          <h4 className="list-title">All filters</h4>
          <div className="sidebar-close-icon">
            <span className="far fa-times" />
          </div>
        </div>
        <div className="hsidebar-content">
          <div className="widget-wrapper">
            <div className="sidebar-accordion">
              <div className="accordion" id="accordionExample2">
                <div className="card mb20 pb10">
                  <div className="card-header active" id="headingZero">
                    <h4>
                      <button
                        className="btn btn-link ps-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseZero"
                        aria-expanded="true"
                        aria-controls="collapseZero"
                      >
                        Delivery Time
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseZero"
                    className="collapse show"
                    aria-labelledby="headingZero"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <div className="radio-element">
                        <div className="form-check d-flex align-items-center mb10">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1s"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1s"
                          >
                            Express 24H
                          </label>
                          <span className="right-tags">(1,945)</span>
                        </div>
                        <div className="form-check d-flex align-items-center mb10">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2s"
                            defaultChecked={true}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2s"
                          >
                            Up to 3 days
                          </label>
                          <span className="right-tags">(8,136)</span>
                        </div>
                        <div className="form-check d-flex align-items-center mb10">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3s"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3s"
                          >
                            Up to 7 days
                          </label>
                          <span className="right-tags">(917)</span>
                        </div>
                        <div className="form-check d-flex align-items-center">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault4s"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault4s"
                          >
                            Anytime
                          </label>
                          <span className="right-tags">(240)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb20 pb0">
                  <div className="card-header" id="headingOnes">
                    <h4>
                      <button
                        className="btn btn-link ps-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOnes"
                        aria-expanded="true"
                        aria-controls="collapseOnes"
                      >
                        Budget
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseOnes"
                    className="collapse"
                    aria-labelledby="headingOnes"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      {/* Range Slider Mobile Version */}
                      <div className="range-slider-style2">
                        <div className="range-wrapper">
                          <div className="mb10 mt15" id="slider" />
                          <div className="d-flex align-items-center justify-content-center">
                            <span id="slider-range-value1" />
                            <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
                            <span id="slider-range-value2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb20 pb5">
                  <div className="card-header" id="headingTwos">
                    <h4>
                      <button
                        className="btn btn-link ps-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwos"
                        aria-expanded="true"
                        aria-controls="collapseTwos"
                      >
                        Design Tool
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseTwos"
                    className="collapse"
                    aria-labelledby="headingTwos"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <div className="checkbox-style1 mb15">
                        <label className="custom_checkbox">
                          Adobe Photoshop
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">(1,945)</span>
                        </label>
                        <label className="custom_checkbox">
                          Figma
                          <input type="checkbox" defaultChecked={true} />
                          <span className="checkmark" />
                          <span className="right-tags">(8,136)</span>
                        </label>
                        <label className="custom_checkbox">
                          Sketch
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">(917)</span>
                        </label>
                        <label className="custom_checkbox">
                          Adobe XD
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">(240)</span>
                        </label>
                        <label className="custom_checkbox">
                          Balsamiq
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">((2,460)</span>
                        </label>
                      </div>
                      <a className="text-thm" href="#">
                        +20 more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card mb20 pb5">
                  <div className="card-header" id="headingThrees">
                    <h4>
                      <button
                        className="btn btn-link ps-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThrees"
                        aria-expanded="true"
                        aria-controls="collapseThrees"
                      >
                        Location
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseThrees"
                    className="collapse"
                    aria-labelledby="headingThrees"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <div className="search_area mb15">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="What are you looking for?"
                        />
                        <label>
                          <span className="flaticon-loupe" />
                        </label>
                      </div>
                      <div className="checkbox-style1 mb15">
                        <label className="custom_checkbox">
                          United States
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">(1,945)</span>
                        </label>
                        <label className="custom_checkbox">
                          United Kingdom
                          <input type="checkbox" defaultChecked={true} />
                          <span className="checkmark" />
                          <span className="right-tags">(8,136)</span>
                        </label>
                        <label className="custom_checkbox">
                          Canada
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">(917)</span>
                        </label>
                        <label className="custom_checkbox">
                          Germany
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">(240)</span>
                        </label>
                        <label className="custom_checkbox">
                          Turkey
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">((2,460)</span>
                        </label>
                      </div>
                      <a className="text-thm" href="#">
                        +20 more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card mb20 pb5">
                  <div className="card-header" id="headingFours">
                    <h4>
                      <button
                        className="btn btn-link ps-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFours"
                        aria-expanded="true"
                        aria-controls="collapseFours"
                      >
                        Speaks
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseFours"
                    className="collapse"
                    aria-labelledby="headingFours"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <div className="checkbox-style1 mb15">
                        <label className="custom_checkbox">
                          Turkish
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">(1,945)</span>
                        </label>
                        <label className="custom_checkbox">
                          English
                          <input type="checkbox" defaultChecked={true} />
                          <span className="checkmark" />
                          <span className="right-tags">(8,136)</span>
                        </label>
                        <label className="custom_checkbox">
                          Italian
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">(917)</span>
                        </label>
                        <label className="custom_checkbox">
                          Spanish
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">(240)</span>
                        </label>
                      </div>
                      <a className="text-thm" href="#">
                        +20 more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card mb20 pb0">
                  <div className="card-header" id="headingFives">
                    <h4>
                      <button
                        className="btn btn-link ps-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFives"
                        aria-expanded="true"
                        aria-controls="collapseFives"
                      >
                        Level
                      </button>
                    </h4>
                  </div>
                  <div
                    id="collapseFives"
                    className="collapse"
                    aria-labelledby="headingFives"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body card-body px-0 pt-0">
                      <div className="checkbox-style1">
                        <label className="custom_checkbox">
                          Top Rated Seller
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">(1,945)</span>
                        </label>
                        <label className="custom_checkbox">
                          Level Two
                          <input type="checkbox" defaultChecked={true} />
                          <span className="checkmark" />
                          <span className="right-tags">(8,136)</span>
                        </label>
                        <label className="custom_checkbox">
                          Level One
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">(917)</span>
                        </label>
                        <label className="custom_checkbox">
                          New Seller
                          <input type="checkbox" />
                          <span className="checkmark" />
                          <span className="right-tags">(240)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Filter Content In Hiddn SideBar */}
      <div className="container">
        <div className="hiddenbar-body-ovelay" />
        <div className="row align-items-center mb20">
          <div className="col-6 col-sm-6 col-lg-9 pe-0">
            <div className="text-center text-sm-start">
              <div className="dropdown-lists">
                <ul className="p-0 mb-0 text-center text-sm-start">
                  <li className="list-inline-item">
                    {/* Advance Features modal trigger */}
                    <button
                      type="button"
                      className="open-btn filter-btn-left mb10"
                    >
                      {" "}
                      <img
                        className="me-2"
                        src="/assets/images/icon/all-filter-icon.svg"
                        alt=""
                      />{" "}
                      All Filter
                    </button>
                  </li>
                  <li className="list-inline-item position-relative d-none d-xl-inline-block">
                    <button
                      className="open-btn mb10 dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Delivery Time <i className="fa fa-angle-down ms-2" />
                    </button>
                    <div className="dropdown-menu">
                      <div className="widget-wrapper pb25 mb0">
                        <div className="radio-element">
                          <div className="form-check d-flex align-items-center mb10">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Express 24H
                            </label>
                          </div>
                          <div className="form-check d-flex align-items-center mb10">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              defaultChecked={true}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault2"
                            >
                              Up to 3 days
                            </label>
                          </div>
                          <div className="form-check d-flex align-items-center mb10">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault3"
                            >
                              Up to 7 days
                            </label>
                          </div>
                          <div className="form-check d-flex align-items-center">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault4"
                            >
                              Anytime
                            </label>
                          </div>
                        </div>
                      </div>
                      <button className="done-btn ud-btn btn-thm drop_btn">
                        Apply
                        <i className="fal fa-arrow-right-long" />
                      </button>
                    </div>
                  </li>
                  <li className="list-inline-item position-relative d-none d-xl-inline-block">
                    <button
                      className="open-btn mb10 dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Budget <i className="fa fa-angle-down ms-2" />
                    </button>
                    <div className="dropdown-menu dd3">
                      <div className="widget-wrapper pb25 mb0 pr20">
                        {/* Range Slider Desktop Version */}
                        <div className="range-slider-style1">
                          <div className="range-wrapper">
                            <div className="slider-range mb20" />
                            <div className="text-center">
                              <input
                                type="text"
                                className="amount"
                                placeholder="$20"
                              />
                              <span className="fa-sharp fa-solid fa-minus mx-1 dark-color" />
                              <input
                                type="text"
                                className="amount2"
                                placeholder="$70987"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="done-btn ud-btn btn-thm drop_btn3">
                        Apply
                        <i className="fal fa-arrow-right-long" />
                      </button>
                    </div>
                  </li>
                  <li className="list-inline-item position-relative d-none d-xl-inline-block">
                    <button
                      className="open-btn mb10 dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Level <i className="fa fa-angle-down ms-2" />
                    </button>
                    <div className="dropdown-menu">
                      <div className="widget-wrapper pb25 mb0">
                        <div className="checkbox-style1">
                          <label className="custom_checkbox">
                            Top Rated Seller
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                          <label className="custom_checkbox">
                            Level Two
                            <input type="checkbox" defaultChecked={true} />
                            <span className="checkmark" />
                          </label>
                          <label className="custom_checkbox">
                            Level One
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                          <label className="custom_checkbox">
                            New Seller
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </div>
                      </div>
                      <button className="done-btn ud-btn btn-thm dropdown-toggle">
                        Apply
                        <i className="fal fa-arrow-right-long" />
                      </button>
                    </div>
                  </li>
                  <li className="list-inline-item position-relative d-none d-xl-inline-block">
                    <button
                      className="open-btn mb10 dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Location <i className="fa fa-angle-down ms-2" />
                    </button>
                    <div className="dropdown-menu dd4 pb20">
                      <div className="widget-wrapper pr20">
                        <div className="checkbox-style1">
                          <label className="custom_checkbox">
                            United States
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                          <label className="custom_checkbox">
                            United Kingdom
                            <input type="checkbox" defaultChecked={true} />
                            <span className="checkmark" />
                          </label>
                          <label className="custom_checkbox">
                            Canada
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                          <label className="custom_checkbox">
                            Germany
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                          <label className="custom_checkbox">
                            Turkey
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                        </div>
                      </div>
                      <button className="done-btn ud-btn btn-thm drop_btn4">
                        Apply
                        <i className="fal fa-arrow-right-long" />
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-lg-3 px-0">
            <div className="page_control_shorting mb10 d-flex align-items-center justify-content-center justify-content-sm-end">
              

              {/* <div className="pcs_dropdown dark-color pr10 pr0-xs d-flex align-content-center justify-content-center"> */}
                <span>Sort by</span>
                <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{textDecoration: "none"}}
                >
                  {sortType}
                </a>
                <ul className="dropdown-menu">
                  <li onClick={() => setSortType("Best Seller")}>
                    <a className="dropdown-item text-decoration-none" href="#" style={{textDecoration: "none"}}>
                    Best Seller
                    </a>
                  </li>
                  <li onClick={() => setSortType("Recommended")}>
                    <a className="dropdown-item text-decoration-none" href="#" style={{textDecoration: "none"}}>
                    Recommended
                    </a>
                  </li>
                  <li onClick={() => setSortType("New Arrivals")}>
                    <a className="dropdown-item text-decoration-none" href="#" style={{textDecoration: "none"}}>
                    New Arrivals
                    </a>
                  </li>
                  
                </ul>
                 </li>
              
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
