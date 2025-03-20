"use client";
import React, { Fragment } from "react";
import SearchModal from "./SearchModal";
import Head from "next/head";
import Script from "next/script";

interface HeadersProps {
  currentPage?: string;
}
const MyHeaders: React.FC<HeadersProps> = ({ currentPage }) => {
  return (
    <Fragment>
      <Head>
      <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/jquery-ui.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>
        <link rel="stylesheet" href="/css/ace-responsive-menu.css" />
        <link rel="stylesheet" href="/css/menu.css" />
        <link rel="stylesheet" href="/css/fontawesome.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/bootstrap-select.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/slider.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/ud-custom-spacing.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
        <Script src="js/jquery-3.6.4.min.js"></Script>
        <Script src="js/jquery-migrate-3.0.0.min.js"></Script>
        <Script src="js/popper.min.js"></Script>
        <Script src="js/bootstrap.min.js"></Script>
        <Script src="js/bootstrap-select.min.js"></Script>
        <Script src="js/jquery.mmenu.all.js"></Script>
        <Script src="js/ace-responsive-menu.js"></Script>
        <Script src="js/jquery-scrolltofixed-min.js"></Script>
        <Script src="js/wow.min.js"></Script>
        <Script src="js/owl.js"></Script>
        <Script src="js/scrollbalance.js"></Script>
        <Script src="js/Script.js"></Script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></Script>
      </Head>
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
                  href="/about-us"
                >
                  About
                </a>
              </li>

              <li className="nav-item ms-4">
                <a
                  className="nav-link  text-black fw-5 fs-5"
                  aria-current="page"
                  href="/contact-us"
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
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
                fill="black"
                className="bi bi-search me-3"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
              <a href="" className="text-black fs-5 fw-5 me-3">
                Become A seller
              </a>
              <a
                href="/signup"
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

    

      <SearchModal />
    </Fragment>
  );
};
export default MyHeaders;
