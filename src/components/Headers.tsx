import React, { Fragment } from "react";
import SearchModal from "./SearchModal";

interface HeadersProps {
  currentPage?: string;
}
const MyHeaders: React.FC<HeadersProps> = ({ currentPage }) => {
  return (
    <Fragment>

    <nav className="navbar navbar-expand-lg mb-4">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/assets/images/logo-1.png"
            style={{ width: 150, height: 50 }}
          />
        </a>

        <div
          className="navbar-toggler"
          // type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
            style={{ width: 30, height: 30 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
          <li className="nav-item dropdown ms-4">
              <a
                className="nav-link  text-black fw-5 fs-5"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>



            <li className="nav-item ms-4">
              <a
                className="nav-link  text-black fw-5 fs-5"
                aria-current="page"
                href="./"
              >
                Home
              </a>
            </li>

            <li className="nav-item dropdown ms-4">
              <a
                className="nav-link dropdown-toggle text-black fw-5 fs-5"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Browse Jobs
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/projects">
                   Projects
                  </a>
                </li>
               
             
              </ul>
            </li>

            <li className="nav-item ms-4">
              <a
                className="nav-link  text-black fw-5 fs-5"
                aria-current="page"
                href="#"
              >
                About
              </a>
            </li>

            <li className="nav-item ms-4">
              <a
                className="nav-link  text-black fw-5 fs-5"
                aria-current="page"
                href="#"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <form
            className="d-flex justify-content-center align-items-center"
            role="search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              data-bs-toggle="modal" data-bs-target="#searchModal"
              fill="black"
              className="bi bi-search me-3"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <a href="" className="text-black fs-5 fw-5 me-3">
              Become A seller
            </a>
            <a href="/signup"
              className="btn btn-warning"
              type="submit"
              
              style={{ height: 40, width: 100 }}
            >
              Join
            </a>
          </form>
        </div>
      </div>
    </nav>

    {/*  */}
    <>
  {/* Mobile Nav  */}
  <div id="page" className="mobilie_header_nav stylehome1">
    <div className="mobile-menu">
      <div className="header bdrb1">
        <div className="menu_and_widgets">
          <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
            <a className="mobile_logo" href="#">
              <img src="/assets/images/header-logo-dark.svg" alt="" />
            </a>
            <div className="right-side text-end">
              <a className="" href="page-login.html">
                join
              </a>
              <a className="menubar ml30" href="#menu">
                <img src="/assets/images/mobile-dark-nav-icon.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="posr">
          <div className="mobile_menu_close_btn">
            <span className="far fa-times" />
          </div>
        </div>
      </div>
    </div>
    {/* /.mobile-menu */}
    <nav id="menu" className="">
      <ul>
        <li>
          <span>Home</span>
          <ul>
            <li>
              <a href="index.html">Home V1</a>
            </li>
            <li>
              <a href="index2.html">Home V2</a>
            </li>
            <li>
              <a href="index3.html">Home V3</a>
            </li>
            <li>
              <a href="index4.html">Home V4</a>
            </li>
            <li>
              <a href="index5.html">Home V5</a>
            </li>
            <li>
              <a href="index6.html">Home V6</a>
            </li>
            <li>
              <a href="index7.html">Home V7</a>
            </li>
            <li>
              <a href="index8.html">Home V8</a>
            </li>
            <li>
              <a href="index9.html">Home V9</a>
            </li>
            <li>
              <a href="index10.html">Home V10</a>
            </li>
            <li>
              <a href="index11.html">Home V11</a>
            </li>
            <li>
              <a href="index12.html">Home V12</a>
            </li>
            <li>
              <a href="index13.html">Home V13</a>
            </li>
            <li>
              <a href="index14.html">Home V14</a>
            </li>
            <li>
              <a href="index15.html">Home V15</a>
            </li>
            <li>
              <a href="index16.html">Home V16</a>
            </li>
            <li>
              <a href="index17.html">Home V17</a>
            </li>
            <li>
              <a href="index18.html">Home V18</a>
            </li>
            <li>
              <a href="index19.html">Home V19</a>
            </li>
            <li>
              <a href="index20.html">Home V20</a>
            </li>
          </ul>
        </li>
        <li>
          <span>Browse Jobs</span>
          <ul>
            <li>
              <span>Services</span>
              <ul>
                <li>
                  <a href="page-service-v1.html">Service v1</a>
                </li>
                <li>
                  <a href="page-service-v2.html">Service v2</a>
                </li>
                <li>
                  <a href="page-service-v3.html">Service v3</a>
                </li>
                <li>
                  <a href="page-service-v4.html">Service v4</a>
                </li>
                <li>
                  <a href="page-service-v5.html">Service v5</a>
                </li>
                <li>
                  <a href="page-service-v6.html">Service v6</a>
                </li>
                <li>
                  <a href="page-service-v7.html">Service v7</a>
                </li>
                <li>
                  <a href="page-service-all.html">Service All</a>
                </li>
                <li>
                  <a href="page-service-single.html">Service Single</a>
                </li>
                <li>
                  <a href="page-service-single-v1.html">Single V1</a>
                </li>
                <li>
                  <a href="page-service-single-v2.html">Single V2</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Projects</span>
              <ul>
                <li>
                  <a href="page-project-v1.html">Project v1</a>
                </li>
                <li>
                  <a href="page-project-list-v1.html">List v1</a>
                </li>
                <li>
                  <a href="page-project-list-v2.html">List v2</a>
                </li>
                <li>
                  <a href="page-project-list-v3.html">List v3</a>
                </li>
                <li>
                  <a href="page-project-single.html">Project Single</a>
                </li>
                <li>
                  <a href="page-project-single-v1.html">Single V1</a>
                </li>
                <li>
                  <a href="page-project-single-v2.html">Single V2</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Job View</span>
              <ul>
                <li>
                  <a href="page-job-list-v1.html">Job list v1</a>
                </li>
                <li>
                  <a href="page-job-list-v2.html">Job list v2</a>
                </li>
                <li>
                  <a href="page-job-list-v3.html">Job list V3</a>
                </li>
                <li>
                  <a href="page-job-list-single.html">Job Single</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <span>Users</span>
          <ul>
            <li>
              <span>Dashboard</span>
              <ul>
                <li>
                  <a href="page-dashboard.html">Dashboard</a>
                </li>
                <li>
                  <a href="page-dashboard-proposal.html">Proposal</a>
                </li>
                <li>
                  <a href="page-dashboard-save.html">Saved</a>
                </li>
                <li>
                  <a href="page-dashboard-message.html">Message</a>
                </li>
                <li>
                  <a href="page-dashboard-reviews.html">Reviews</a>
                </li>
                <li>
                  <a href="page-dashboard-invoice.html">Invoice</a>
                </li>
                <li>
                  <a href="page-dashboard-payouts.html">Payouts</a>
                </li>
                <li>
                  <a href="page-dashboard-statement.html">Statement</a>
                </li>
                <li>
                  <a href="page-dashboard-manage-service.html">
                    Manage Service
                  </a>
                </li>
                <li>
                  <a href="page-dashboard-add-service.html">Add Services</a>
                </li>
                <li>
                  <a href="page-dashboard-manage-jobs.html">Manage Jobs</a>
                </li>
                <li>
                  <a href="page-dashboard-manage-project.html">
                    Manage Project
                  </a>
                </li>
                <li>
                  <a href="page-dashboard-create-project.html">
                    Create Project
                  </a>
                </li>
                <li>
                  <a href="page-dashboard-profile.html">My Profile</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Employee</span>
              <ul>
                <li>
                  <a href="page-employee-v1.html">Employee V1</a>
                </li>
                <li>
                  <a href="page-employee-v2.html">Employee V2</a>
                </li>
                <li>
                  <a href="page-employee-single.html">Employee Single</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Freelancer</span>
              <ul>
                <li>
                  <a href="page-freelancer-v1.html">Freelancer V1</a>
                </li>
                <li>
                  <a href="page-freelancer-v2.html">Freelancer V2</a>
                </li>
                <li>
                  <a href="page-freelancer-v3.html">Freelancer V3</a>
                </li>
                <li>
                  <a href="page-freelancer-list-v1.html">List V1</a>
                </li>
                <li>
                  <a href="page-freelancer-list-v2.html">List V2</a>
                </li>
                <li>
                  <a href="page-freelancer-list-v3.html">List V3</a>
                </li>
                <li>
                  <a href="page-freelancer-single.html">Freelancer Single</a>
                </li>
                <li>
                  <a href="page-freelancer-single-v1.html">Single V1</a>
                </li>
                <li>
                  <a href="page-freelancer-single-v2.html">Single V2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="page-become-seller.html">Become Seller</a>
            </li>
          </ul>
        </li>
        <li>
          <span>Pages</span>
          <ul>
            <li>
              <span>About</span>
              <ul>
                <li>
                  <a href="page-about.html">About v1</a>
                </li>
                <li>
                  <a href="page-about-v2.html">About v2</a>
                </li>
              </ul>
            </li>
            <li>
              <span>Shop</span>
              <ul>
                <li>
                  <a href="page-shop.html">List</a>
                </li>
                <li>
                  <a href="page-shop-single.html">Single</a>
                </li>
                <li>
                  <a href="page-shop-cart.html">Cart</a>
                </li>
                <li>
                  <a href="page-shop-checkout.html">Checkout</a>
                </li>
                <li>
                  <a href="page-shop-order.html">Order</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="page-contact.html">Contact</a>
            </li>
            <li>
              <a href="page-error.html">404</a>
            </li>
            <li>
              <a href="page-faq.html">Faq</a>
            </li>
            <li>
              <a href="page-help.html">Help</a>
            </li>
            <li>
              <a href="page-invoice.html">Invoices</a>
            </li>
            <li>
              <a href="page-login.html">Login</a>
            </li>
            <li>
              <a href="page-pricing.html">Pricing</a>
            </li>
            <li>
              <a href="page-register.html">Register</a>
            </li>
            <li>
              <a href="page-terms.html">Terms</a>
            </li>
            <li>
              <a href="page-ui-element.html">UI Elements</a>
            </li>
          </ul>
        </li>
        <li>
          <span>Blog</span>
          <ul>
            <li>
              <a href="page-blog-v1.html">List V1</a>
            </li>
            <li>
              <a href="page-blog-v2.html">List V2</a>
            </li>
            <li>
              <a href="page-blog-v3.html">List V3</a>
            </li>
            <li>
              <a href="page-blog-single.html">Single</a>
            </li>
          </ul>
        </li>
        {/* Only for Mobile View */}
      </ul>
    </nav>
  </div>
</>

    <SearchModal />

    </Fragment>
  );
};
export default MyHeaders;
