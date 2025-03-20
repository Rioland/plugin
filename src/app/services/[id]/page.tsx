import Footer from "@/components/Footer";
import MyHeaders from "@/components/Headers";
import SearchModal from "@/components/SearchModal";
import React, { Fragment } from "react";
import AllServiceSection from "../Components/AllServiceSection";
import BreadCrumb from "../Components/BreadCrumb";
import CategoryTabs from "../Components/CategoryTabs";
import DesignCreativeUi from "../Components/DesignCreativeUi";
import DesignCreativeSingle from "../Components/DesignCreativeSingle";
import CategorySingle from "../Components/CategorySingle";
import ProductSlider from "./component/ProductSlider";

export default function page() {
  return (
    <Fragment>
      <MyHeaders currentPage="Services" />
      <CategoryTabs />
      <CategorySingle />
      <DesignCreativeSingle />
      <>
        {/* Service Details */}
        <section className="pt10 pb90 pb30-md">
          <div className="container">
            <div className="row wrap">
              <div className="col-lg-8">
                <div className="column">
                  <div className="row">
                    <div className="col-sm-6 col-md-4">
                      <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                        <div className="icon flex-shrink-0">
                          <span className="flaticon-calendar" />
                        </div>
                        <div className="details">
                          <h5 className="title">Delivery Time</h5>
                          <p className="mb-0 text">1-3 Days</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                        <div className="icon flex-shrink-0">
                          <span className="flaticon-goal" />
                        </div>
                        <div className="details">
                          <h5 className="title">English Level</h5>
                          <p className="mb-0 text">Professional</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <div className="iconbox-style1 contact-style d-flex align-items-start mb30">
                        <div className="icon flex-shrink-0">
                          <span className="flaticon-tracking" />
                        </div>
                        <div className="details">
                          <h5 className="title">Location</h5>
                          <p className="mb-0 text">New York</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="service-single-sldier vam_nav_style slider-1-grid owl-carousel owl-theme mb60">
                    <ProductSlider />
                  </div>
                  <div className="service-about">
                    <h4>About</h4>
                    <p className="text mb30">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                    <p className="text mb-0">Services I provide:</p>
                    <p className="text mb-0">1) Website Design</p>
                    <p className="text mb-0">2) Mobile App Design</p>
                    <p className="text mb-0">3) Brochure Design</p>
                    <p className="text mb-0">4) Business Card Design</p>
                    <p className="text mb30">5) Flyer Design</p>
                    <p className="text mb30">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in
                      their infancy. Various versions have evolved over the
                      years, sometimes by accident, sometimes on purpose
                      (injected humour and the like).
                    </p>
                    <div className="d-flex align-items-start mb50">
                      <div className="list1">
                        <h6>App type</h6>
                        <p className="text mb-0">Business, Food &amp; drink,</p>
                        <p className="text">Graphics &amp; design</p>
                      </div>
                      <div className="list1 ml80">
                        <h6>Design tool</h6>
                        <p className="text mb-0">Adobe XD, Figma,</p>
                        <p className="text">Adobe Photoshop</p>
                      </div>
                      <div className="list1 ml80">
                        <h6>Device</h6>
                        <p className="text">Mobile, Desktop</p>
                      </div>
                    </div>
                    <hr className="opacity-100 mb60" />
                    <h4>Compare Packages</h4>
                    <div className="table-style2 table-responsive bdr1 mt30 mb60">
                      <table className="table table-borderless mb-0">
                        <thead className="t-head">
                          <tr>
                            <th className="col" scope="col" />
                            <th className="col" scope="col">
                              <span className="h2">
                                $29 <small>/ monthly</small>
                              </span>
                              <br />
                              <span className="h4">Basic</span>
                              <br />
                              <span className="text">
                                I will redesign your current{" "}
                                <br className="d-none d-lg-block" /> landing
                                page or create one for{" "}
                                <br className="d-none d-lg-block" /> you (upto 4
                                sections)
                              </span>
                            </th>
                            <th className="col" scope="col">
                              <span className="h2">
                                $49 <small>/ monthly</small>
                              </span>
                              <br />
                              <span className="h4">Standard</span>
                              <br />
                              <span className="text">
                                4 High Quality Desktop{" "}
                                <br className="d-none d-lg-block" /> Pages.
                              </span>
                            </th>
                            <th className="col" scope="col">
                              <span className="h2">
                                $89 <small>/ monthly</small>
                              </span>
                              <br />
                              <span className="h4">Premium</span>
                              <br />
                              <span className="text">
                                4 High Quality Desktop and{" "}
                                <br className="d-none d-lg-block" /> Mobile
                                Pages.
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="t-body">
                          <tr className="bgc-thm3">
                            <th scope="row">Source file</th>
                            <td>
                              <a className="check_circle bgc-thm" href="#">
                                <span className="fas fa-check" />
                              </a>
                            </td>
                            <td>
                              <a className="check_circle bgc-thm" href="#">
                                <span className="fas fa-check" />
                              </a>
                            </td>
                            <td>
                              <a className="check_circle bgc-thm" href="#">
                                <span className="fas fa-check" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Number of pages</th>
                            <td>2</td>
                            <td>4</td>
                            <td>6</td>
                          </tr>
                          <tr className="bgc-thm3">
                            <th scope="row">Revisions</th>
                            <td>1</td>
                            <td>3</td>
                            <td>5</td>
                          </tr>
                          <tr>
                            <th scope="row">Delivery Time </th>
                            <td>2 Days</td>
                            <td>3 Days</td>
                            <td>4 Days</td>
                          </tr>
                          <tr className="bgc-thm3">
                            <th scope="row">Total</th>
                            <td>$29</td>
                            <td>$49</td>
                            <td>$89</td>
                          </tr>
                          <tr>
                            <th scope="row" />
                            <td>
                              <a href="#" className="ud-btn btn-thm">
                                Select
                                <i className="fal fa-arrow-right-long" />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="ud-btn btn-thm">
                                Select
                                <i className="fal fa-arrow-right-long" />
                              </a>
                            </td>
                            <td>
                              <a href="#" className="ud-btn btn-thm">
                                Select
                                <i className="fal fa-arrow-right-long" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <hr className="opacity-100 mb60" />
                    <h4>Frequently Asked Questions</h4>
                    <div className="accordion-style1 faq-page mb-4 mb-lg-5 mt30">
                      <div className="accordion" id="accordionExample">
                        <div className="accordion-item active">
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              What methods of payments are supported?
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Cras vitae ac nunc orci. Purus amet tortor non at
                              phasellus ultricies hendrerit. Eget a, sit morbi
                              nunc sit id massa. Metus, scelerisque volutpat nec
                              sit vel donec. Sagittis, id volutpat erat vel.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Can I cancel at anytime?
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Cras vitae ac nunc orci. Purus amet tortor non at
                              phasellus ultricies hendrerit. Eget a, sit morbi
                              nunc sit id massa. Metus, scelerisque volutpat nec
                              sit vel donec. Sagittis, id volutpat erat vel.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              How do I get a receipt for my purchase?
                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Cras vitae ac nunc orci. Purus amet tortor non at
                              phasellus ultricies hendrerit. Eget a, sit morbi
                              nunc sit id massa. Metus, scelerisque volutpat nec
                              sit vel donec. Sagittis, id volutpat erat vel.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFour">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              Which license do I need?
                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Cras vitae ac nunc orci. Purus amet tortor non at
                              phasellus ultricies hendrerit. Eget a, sit morbi
                              nunc sit id massa. Metus, scelerisque volutpat nec
                              sit vel donec. Sagittis, id volutpat erat vel.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingFive">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              How do I get access to a theme I purchased?
                            </button>
                          </h2>
                          <div
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#accordionExample"
                          >
                            <div className="accordion-body">
                              Cras vitae ac nunc orci. Purus amet tortor non at
                              phasellus ultricies hendrerit. Eget a, sit morbi
                              nunc sit id massa. Metus, scelerisque volutpat nec
                              sit vel donec. Sagittis, id volutpat erat vel.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="opacity-100 mb60" />
                    <h4>Add Extra Services</h4>
                    <div className="extra-service-tab mb40 mt30">
                      <nav>
                        <div
                          className="nav flex-column nav-tabs"
                          id="nav-tab"
                          role="tablist"
                        >
                          <button
                            className="nav-link"
                            id="nav-home2-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-home2"
                            type="button"
                            role="tab"
                            aria-selected="true"
                          >
                            <label className="custom_checkbox fw500 text-start">
                              100 Words (+2 days)
                              <span className="text text-bottom">
                                I will professionally translate english to
                                german
                              </span>
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                            <span className="price">$25</span>
                          </button>
                          <button
                            className="nav-link active"
                            id="nav-profile2-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-profile2"
                            type="button"
                            role="tab"
                            aria-selected="false"
                          >
                            <label className="custom_checkbox fw500 text-start">
                              100 Words (+2 days)
                              <span className="text text-bottom">
                                I will professionally translate english to
                                german
                              </span>
                              <input type="checkbox" defaultChecked={true} />
                              <span className="checkmark" />
                            </label>
                            <span className="price">$45</span>
                          </button>
                          <button
                            className="nav-link"
                            id="nav-contact2-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-contact2"
                            type="button"
                            role="tab"
                            aria-selected="false"
                          >
                            <label className="custom_checkbox fw500 text-start">
                              100 Words (+2 days)
                              <span className="text text-bottom">
                                I will professionally translate english to
                                german
                              </span>
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                            <span className="price">$75</span>
                          </button>
                        </div>
                      </nav>
                    </div>
                    <hr className="opacity-100 mb15" />
                    <div className="product_single_content mb50">
                      <div className="mbp_pagination_comments">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="total_review mb30 mt45">
                              <h4>80 Reviews</h4>
                            </div>
                            <div className="d-md-flex align-items-center mb30">
                              <div className="total-review-box d-flex align-items-center text-center mb30-sm">
                                <div className="wrapper mx-auto">
                                  <div className="t-review mb15">4.96</div>
                                  <h5>Exceptional</h5>
                                  <p className="text mb-0">3,014 reviews</p>
                                </div>
                              </div>
                              <div className="wrapper ml60 ml0-sm">
                                <div className="review-list d-flex align-items-center mb10">
                                  <div className="list-number">5 Star</div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      style={{ width: "90%" }}
                                      role="progressbar"
                                      aria-valuenow={90}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <div className="value text-end">58</div>
                                </div>
                                <div className="review-list d-flex align-items-center mb10">
                                  <div className="list-number">4 Star</div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar w-75"
                                      role="progressbar"
                                      aria-valuenow={75}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <div className="value text-end">20</div>
                                </div>
                                <div className="review-list d-flex align-items-center mb10">
                                  <div className="list-number">3 Star</div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar w-50"
                                      role="progressbar"
                                      aria-valuenow={50}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <div className="value text-end">15</div>
                                </div>
                                <div className="review-list d-flex align-items-center mb10">
                                  <div className="list-number">2 Star</div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      style={{ width: "30%" }}
                                      role="progressbar"
                                      aria-valuenow={30}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <div className="value text-end">2</div>
                                </div>
                                <div className="review-list d-flex align-items-center mb10">
                                  <div className="list-number">1 Star</div>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      style={{ width: "20%" }}
                                      role="progressbar"
                                      aria-valuenow={10}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  <div className="value text-end">1</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mbp_first position-relative d-flex align-items-center justify-content-start mb30-sm">
                              <img
                                src="/assets/images/blog/comments-2.png"
                                className="mr-3"
                                alt="comments-2.png"
                              />
                              <div className="ml20">
                                <h6 className="mt-0 mb-0">Bessie Cooper</h6>
                                <div>
                                  <span className="fz14">12 March 2022</span>
                                </div>
                              </div>
                            </div>
                            <p className="text mt20 mb20">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable. If you are going to use a passage of
                              Lorem Ipsum, you need to be sure there isn't
                              anything embarrassing hidden in the middle of
                              text.
                            </p>
                            <div className="review_cansel_btns d-flex">
                              <a href="#">
                                <i className="fas fa-thumbs-up" />
                                Helpful
                              </a>
                              <a href="#">
                                <i className="fas fa-thumbs-down" />
                                Not helpful
                              </a>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mbp_first position-relative d-flex align-items-center justify-content-start mt30 mb30-sm">
                              <img
                                src="/assets/images/blog/comments-2.png"
                                className="mr-3"
                                alt="comments-2.png"
                              />
                              <div className="ml20">
                                <h6 className="mt-0 mb-0">Darrell Steward</h6>
                                <div>
                                  <span className="fz14">12 March 2022</span>
                                </div>
                              </div>
                            </div>
                            <p className="text mt20 mb20">
                              There are many variations of passages of Lorem
                              Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or
                              randomised words which don't look even slightly
                              believable. If you are going to use a passage of
                              Lorem Ipsum, you need to be sure there isn't
                              anything embarrassing hidden in the middle of
                              text.
                            </p>
                            <div className="review_cansel_btns d-flex pb30">
                              <a href="#">
                                <i className="fas fa-thumbs-up" />
                                Helpful
                              </a>
                              <a href="#">
                                <i className="fas fa-thumbs-down" />
                                Not helpful
                              </a>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="position-relative bdrb1 pb50">
                              <a
                                href="page-service-single.html"
                                className="ud-btn btn-light-thm"
                              >
                                See More
                                <i className="fal fa-arrow-right-long" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bsp_reveiw_wrt">
                      <h6 className="fz17">Add a Review</h6>
                      <p className="text">
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                      <h6>Your rating of this product</h6>
                      <div className="d-flex">
                        <i className="fas fa-star review-color" />
                        <i className="far fa-star review-color ms-2" />
                        <i className="far fa-star review-color ms-2" />
                        <i className="far fa-star review-color ms-2" />
                        <i className="far fa-star review-color ms-2" />
                      </div>
                      <form className="comments_form mt30 mb30-md">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-4">
                              <label className="fw500 fz16 ff-heading dark-color mb-2">
                                Comment
                              </label>
                              <textarea
                                className="pt15"
                                rows={6}
                                placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb20">
                              <label className="fw500 ff-heading dark-color mb-2">
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Ali Tufan"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb20">
                              <label className="fw500 ff-heading dark-color mb-2">
                                Email
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                placeholder="creativelayers088"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="checkbox-style1 d-block d-sm-flex align-items-center justify-content-between mb20">
                              <label className="custom_checkbox fz15 ff-heading">
                                Save my name, email, and website in this browser
                                for the next time I comment.
                                <input type="checkbox" />
                                <span className="checkmark" />
                              </label>
                            </div>
                            <a href="#" className="ud-btn btn-thm">
                              Send
                              <i className="fal fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="column">
                  <div className="blog-sidebar ms-lg-auto">
                    <div className="price-widget">
                      <div className="navtab-style1">
                        <nav>
                          <div
                            className="nav nav-tabs mb20"
                            id="nav-tab2p"
                            role="tablist"
                          >
                            <button
                              className="nav-link fw500"
                              id="nav-item1p-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-item1p"
                              type="button"
                              role="tab"
                              aria-controls="nav-item1p"
                              aria-selected="true"
                            >
                              Basic
                            </button>
                            <button
                              className="nav-link active fw500"
                              id="nav-item2p-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-item2p"
                              type="button"
                              role="tab"
                              aria-controls="nav-item2p"
                              aria-selected="false"
                            >
                              Standart
                            </button>
                            <button
                              className="nav-link fw500"
                              id="nav-item3-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-item3p"
                              type="button"
                              role="tab"
                              aria-controls="nav-item3p"
                              aria-selected="false"
                            >
                              Premium
                            </button>
                          </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                          <div
                            className="tab-pane fade"
                            id="nav-item1p"
                            role="tabpanel"
                            aria-labelledby="nav-item1p-tab"
                          >
                            <div className="price-content">
                              <div className="price">$50</div>
                              <div className="h5 mb-2">
                                High-converting Landing Pages
                              </div>
                              <p className="text fz14">
                                I will redesign your current landing page or
                                create one for you (upto 4 sections)
                              </p>
                              <hr className="opacity-100 mb20" />
                              <ul className="p-0 mb15 d-sm-flex align-items-center">
                                <li className="fz14 fw500 dark-color">
                                  <i className="flaticon-sandclock fz20 text-thm2 me-2 vam" />
                                  3 Days Delivery
                                </li>
                                <li className="fz14 fw500 dark-color ml20 ml0-xs">
                                  <i className="flaticon-recycle fz20 text-thm2 me-2 vam" />
                                  2 Revisions
                                </li>
                              </ul>
                              <div className="list-style1">
                                <ul className="">
                                  <li className="mb15">
                                    <i className="far fa-check text-thm3 bgc-thm3-light" />
                                    2 Page / Screen
                                  </li>
                                  <li>
                                    <i className="far fa-check text-thm3 bgc-thm3-light" />
                                    Source file
                                  </li>
                                </ul>
                              </div>
                              <div className="d-grid">
                                <a href="#" className="ud-btn btn-thm">
                                  Continue $50
                                  <i className="fal fa-arrow-right-long" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade show active"
                            id="nav-item2p"
                            role="tabpanel"
                            aria-labelledby="nav-item2p-tab"
                          >
                            <div className="price-content">
                              <div className="price">$29</div>
                              <div className="h5 mb-2">
                                High-converting Landing Pages
                              </div>
                              <p className="text fz14">
                                I will redesign your current landing page or
                                create one for you (upto 4 sections)
                              </p>
                              <hr className="opacity-100 mb20" />
                              <ul className="p-0 mb15 d-sm-flex align-items-center">
                                <li className="fz14 fw500 dark-color">
                                  <i className="flaticon-sandclock fz20 text-thm2 me-2 vam" />
                                  3 Days Delivery
                                </li>
                                <li className="fz14 fw500 dark-color ml20 ml0-xs">
                                  <i className="flaticon-recycle fz20 text-thm2 me-2 vam" />
                                  2 Revisions
                                </li>
                              </ul>
                              <div className="list-style1">
                                <ul className="">
                                  <li className="mb15">
                                    <i className="far fa-check text-thm3 bgc-thm3-light" />
                                    2 Page / Screen
                                  </li>
                                  <li>
                                    <i className="far fa-check text-thm3 bgc-thm3-light" />
                                    Source file
                                  </li>
                                </ul>
                              </div>
                              <div className="d-grid">
                                <a href="#" className="ud-btn btn-thm">
                                  Continue $29
                                  <i className="fal fa-arrow-right-long" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-item3p"
                            role="tabpanel"
                            aria-labelledby="nav-item3p-tab"
                          >
                            <div className="price-content">
                              <div className="price">$250</div>
                              <div className="h5 mb-2">
                                High-converting Landing Pages
                              </div>
                              <p className="text fz14">
                                I will redesign your current landing page or
                                create one for you (upto 4 sections)
                              </p>
                              <hr className="opacity-100 mb20" />
                              <ul className="p-0 mb15 d-sm-flex align-items-center">
                                <li className="fz14 fw500 dark-color">
                                  <i className="flaticon-sandclock fz20 text-thm2 me-2 vam" />
                                  3 Days Delivery
                                </li>
                                <li className="fz14 fw500 dark-color ml20 ml0-xs">
                                  <i className="flaticon-recycle fz20 text-thm2 me-2 vam" />
                                  2 Revisions
                                </li>
                              </ul>
                              <div className="list-style1">
                                <ul className="">
                                  <li className="mb15">
                                    <i className="far fa-check text-thm3 bgc-thm3-light" />
                                    2 Page / Screen
                                  </li>
                                  <li>
                                    <i className="far fa-check text-thm3 bgc-thm3-light" />
                                    Source file
                                  </li>
                                </ul>
                              </div>
                              <div className="d-grid">
                                <a href="#" className="ud-btn btn-thm">
                                  Continue $250
                                  <i className="fal fa-arrow-right-long" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="freelancer-style1 service-single mb-0">
                      <div className="wrapper d-flex align-items-center">
                        <div className="thumb position-relative mb25">
                          <img
                            className="rounded-circle mx-auto"
                            src="/assets/images/team/fl-1.png"
                            alt=""
                          />
                          <span className="online" />
                        </div>
                        <div className="ml20">
                          <h5 className="title mb-1">Kristin Watson</h5>
                          <p className="mb-0">Dog Trainer</p>
                          <div className="review">
                            <p>
                              <i className="fas fa-star fz10 review-color pr10" />
                              <span className="dark-color">4.9</span> (595
                              reviews)
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr className="opacity-100" />
                      <div className="details">
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
                      </div>
                      <div className="d-grid mt30">
                        <a
                          href="page-freelancer-single.html"
                          className="ud-btn btn-thm-border"
                        >
                          Contact Me
                          <i className="fal fa-arrow-right-long" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <section className="pt30 pb90 pb30-md">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-12">
              <div className="main-title mb35">
                <h2>People Who Viewed This Service Also Viewed </h2>
                <p className="text">
                  Give your visitor a smooth online experience with a solid UX
                  design
                </p>
              </div>
            </div>
          </div>
          <div className="row wow fadeInUp">
            <div className="col-md-6 col-lg-3">
              <div className="listing-style1">
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
                    <a href="#">
                      <span className="position-relative mr10">
                        <img
                          className="rounded-circle"
                          src="/assets/images/team/fl-s-1.png"
                          alt="Freelancer Photo"
                        />
                        <span className="online-badge" />
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
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="listing-style1">
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
                    <a href="#">
                      <span className="position-relative mr10">
                        <img
                          className="rounded-circle"
                          src="/assets/images/team/fl-s-1.png"
                          alt="Freelancer Photo"
                        />
                        <span className="online-badge" />
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
            </div>
            


            <div className="col-md-6 col-lg-3">
              <div className="listing-style1">
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
                      <span className="dark-color me-2">4.82</span>94 reviews
                    </p>
                  </div>
                  <hr className="my-2" />
                  <div className="list-meta d-flex justify-content-between align-items-center mt15">
                    <a href="#">
                      <span className="position-relative mr10">
                        <img
                          className="rounded-circle"
                          src="/assets/images/team/fl-s-3.png"
                          alt="Freelancer Photo"
                        />
                        <span className="online-badge" />
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
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="listing-style1">
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
                  <h5 className="list-title">
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
                    <a href="#">
                      <span className="position-relative mr10">
                        <img
                          className="rounded-circle"
                          src="/assets/images/team/fl-s-4.png"
                          alt="Freelancer Photo"
                        />
                        <span className="online-badge" />
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
}
