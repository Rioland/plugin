import Head from "next/head";
import Script from "next/script";
import React from "react";

export default function MyHeaderOne() {
  
  return (
    <>
      <Head>
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
      </Head>
      <header className="header-nav nav-innerpage-style bg-transparent stricky main-menu border-0">
        {/* Ace Responsive Menu */}
        <nav className="posr">
          <div className="container posr menu_bdrt1">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto px-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos">
                    <a className="header-logo logo2" href="index.html">
                      <img
                        src="images/logo-1.png"
                        width={150}
                        alt="Header Logo"
                      />
                    </a>
                  </div>
                  <div className="home2_style">
                    <div id="mega-menu">
                      <a className="btn-mega fw500" href="#">
                        <span className="pl30 pl10-xl pr5 fz15 vam flaticon-menu" />
                        Categories
                      </a>
                      <ul className="menu ps-0" style={{ width: 450 }}>
                        <li>
                          <a className="dropdown" href="#">
                            <span className="menu-icn flaticon-developer" />
                            <span className="menu-title">
                              Business, Corporate &amp; Financial
                            </span>
                          </a>
                          <div className="drop-menu d-flex justify-content-between">
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Web &amp; App Design
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Website Design</a>
                                </li>
                                <li>
                                  <a href="#">App DesignUX Design</a>
                                </li>
                                <li>
                                  <a href="#">Landing Page Design</a>
                                </li>
                                <li>
                                  <a href="#">Icon Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">
                                Marketing Design
                              </div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Social Media Design</a>
                                </li>
                                <li>
                                  <a href="#">Email Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Banners</a>
                                </li>
                                <li>
                                  <a href="#">Signage Design</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Art &amp; Illustration
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Illustration</a>
                                </li>
                                <li>
                                  <a href="#">NFT Art</a>
                                </li>
                                <li>
                                  <a href="#">Pattern Design</a>
                                </li>
                                <li>
                                  <a href="#">Portraits &amp; Caricatures</a>
                                </li>
                                <li>
                                  <a href="#">Cartoons &amp; Comics</a>
                                </li>
                                <li>
                                  <a href="#">Tattoo Design</a>
                                </li>
                                <li>
                                  <a href="#">Storyboards</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Gaming</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Game Art</a>
                                </li>
                                <li>
                                  <a href="#">Graphics for Streamers</a>
                                </li>
                                <li>
                                  <a href="#">Twitch Store</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">Visual Design</div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Image Editing</a>
                                </li>
                                <li>
                                  <a href="#">Presentation Design</a>
                                </li>
                                <li>
                                  <a href="#">Infographic Design</a>
                                </li>
                                <li>
                                  <a href="#">Vector Tracing</a>
                                </li>
                                <li>
                                  <a href="#">Resume Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Print Design</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">T-Shirts &amp; Merchandise</a>
                                </li>
                                <li>
                                  <a href="#">Flyer Design</a>
                                </li>
                                <li>
                                  <a href="#">Brochure Design</a>
                                </li>
                                <li>
                                  <a href="#">Poster Design</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Design</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a className="dropdown" href="#">
                            <span className="menu-icn flaticon-web-design-1" />
                            <span className="menu-title">
                              Branding, Design &amp; Identity
                            </span>
                          </a>
                          <div className="drop-menu d-flex justify-content-between">
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Web &amp; App Design
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Website Design</a>
                                </li>
                                <li>
                                  <a href="#">App DesignUX Design</a>
                                </li>
                                <li>
                                  <a href="#">Landing Page Design</a>
                                </li>
                                <li>
                                  <a href="#">Icon Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">
                                Marketing Design
                              </div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Social Media Design</a>
                                </li>
                                <li>
                                  <a href="#">Email Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Banners</a>
                                </li>
                                <li>
                                  <a href="#">Signage Design</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Art &amp; Illustration
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Illustration</a>
                                </li>
                                <li>
                                  <a href="#">NFT Art</a>
                                </li>
                                <li>
                                  <a href="#">Pattern Design</a>
                                </li>
                                <li>
                                  <a href="#">Portraits &amp; Caricatures</a>
                                </li>
                                <li>
                                  <a href="#">Cartoons &amp; Comics</a>
                                </li>
                                <li>
                                  <a href="#">Tattoo Design</a>
                                </li>
                                <li>
                                  <a href="#">Storyboards</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Gaming</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Game Art</a>
                                </li>
                                <li>
                                  <a href="#">Graphics for Streamers</a>
                                </li>
                                <li>
                                  <a href="#">Twitch Store</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">Visual Design</div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Image Editing</a>
                                </li>
                                <li>
                                  <a href="#">Presentation Design</a>
                                </li>
                                <li>
                                  <a href="#">Infographic Design</a>
                                </li>
                                <li>
                                  <a href="#">Vector Tracing</a>
                                </li>
                                <li>
                                  <a href="#">Resume Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Print Design</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">T-Shirts &amp; Merchandise</a>
                                </li>
                                <li>
                                  <a href="#">Flyer Design</a>
                                </li>
                                <li>
                                  <a href="#">Brochure Design</a>
                                </li>
                                <li>
                                  <a href="#">Poster Design</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Design</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a className="dropdown" href="#">
                            <span className="menu-icn flaticon-digital-marketing" />
                            <span className="menu-title">
                              Digital &amp; Creative Economy
                            </span>
                          </a>
                          <div className="drop-menu d-flex justify-content-between">
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Web &amp; App Design
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Website Design</a>
                                </li>
                                <li>
                                  <a href="#">App DesignUX Design</a>
                                </li>
                                <li>
                                  <a href="#">Landing Page Design</a>
                                </li>
                                <li>
                                  <a href="#">Icon Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">
                                Marketing Design
                              </div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Social Media Design</a>
                                </li>
                                <li>
                                  <a href="#">Email Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Banners</a>
                                </li>
                                <li>
                                  <a href="#">Signage Design</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Art &amp; Illustration
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Illustration</a>
                                </li>
                                <li>
                                  <a href="#">NFT Art</a>
                                </li>
                                <li>
                                  <a href="#">Pattern Design</a>
                                </li>
                                <li>
                                  <a href="#">Portraits &amp; Caricatures</a>
                                </li>
                                <li>
                                  <a href="#">Cartoons &amp; Comics</a>
                                </li>
                                <li>
                                  <a href="#">Tattoo Design</a>
                                </li>
                                <li>
                                  <a href="#">Storyboards</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Gaming</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Game Art</a>
                                </li>
                                <li>
                                  <a href="#">Graphics for Streamers</a>
                                </li>
                                <li>
                                  <a href="#">Twitch Store</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">Visual Design</div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Image Editing</a>
                                </li>
                                <li>
                                  <a href="#">Presentation Design</a>
                                </li>
                                <li>
                                  <a href="#">Infographic Design</a>
                                </li>
                                <li>
                                  <a href="#">Vector Tracing</a>
                                </li>
                                <li>
                                  <a href="#">Resume Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Print Design</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">T-Shirts &amp; Merchandise</a>
                                </li>
                                <li>
                                  <a href="#">Flyer Design</a>
                                </li>
                                <li>
                                  <a href="#">Brochure Design</a>
                                </li>
                                <li>
                                  <a href="#">Poster Design</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Design</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a className="dropdown" href="#">
                            <span className="menu-icn flaticon-translator" />
                            <span className="menu-title">
                              Website, App &amp; Software Development
                            </span>
                          </a>
                          <div className="drop-menu d-flex justify-content-between">
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Web &amp; App Design
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Website Design</a>
                                </li>
                                <li>
                                  <a href="#">App DesignUX Design</a>
                                </li>
                                <li>
                                  <a href="#">Landing Page Design</a>
                                </li>
                                <li>
                                  <a href="#">Icon Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">
                                Marketing Design
                              </div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Social Media Design</a>
                                </li>
                                <li>
                                  <a href="#">Email Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Banners</a>
                                </li>
                                <li>
                                  <a href="#">Signage Design</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Art &amp; Illustration
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Illustration</a>
                                </li>
                                <li>
                                  <a href="#">NFT Art</a>
                                </li>
                                <li>
                                  <a href="#">Pattern Design</a>
                                </li>
                                <li>
                                  <a href="#">Portraits &amp; Caricatures</a>
                                </li>
                                <li>
                                  <a href="#">Cartoons &amp; Comics</a>
                                </li>
                                <li>
                                  <a href="#">Tattoo Design</a>
                                </li>
                                <li>
                                  <a href="#">Storyboards</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Gaming</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Game Art</a>
                                </li>
                                <li>
                                  <a href="#">Graphics for Streamers</a>
                                </li>
                                <li>
                                  <a href="#">Twitch Store</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">Visual Design</div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Image Editing</a>
                                </li>
                                <li>
                                  <a href="#">Presentation Design</a>
                                </li>
                                <li>
                                  <a href="#">Infographic Design</a>
                                </li>
                                <li>
                                  <a href="#">Vector Tracing</a>
                                </li>
                                <li>
                                  <a href="#">Resume Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Print Design</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">T-Shirts &amp; Merchandise</a>
                                </li>
                                <li>
                                  <a href="#">Flyer Design</a>
                                </li>
                                <li>
                                  <a href="#">Brochure Design</a>
                                </li>
                                <li>
                                  <a href="#">Poster Design</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Design</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a className="dropdown" href="#">
                            <span className="menu-icn flaticon-microphone" />
                            <span className="menu-title">
                              Digital Marketing &amp; E-Commerce
                            </span>
                          </a>
                          <div className="drop-menu d-flex justify-content-between">
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Web &amp; App Design
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Website Design</a>
                                </li>
                                <li>
                                  <a href="#">App DesignUX Design</a>
                                </li>
                                <li>
                                  <a href="#">Landing Page Design</a>
                                </li>
                                <li>
                                  <a href="#">Icon Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">
                                Marketing Design
                              </div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Social Media Design</a>
                                </li>
                                <li>
                                  <a href="#">Email Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Banners</a>
                                </li>
                                <li>
                                  <a href="#">Signage Design</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Art &amp; Illustration
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Illustration</a>
                                </li>
                                <li>
                                  <a href="#">NFT Art</a>
                                </li>
                                <li>
                                  <a href="#">Pattern Design</a>
                                </li>
                                <li>
                                  <a href="#">Portraits &amp; Caricatures</a>
                                </li>
                                <li>
                                  <a href="#">Cartoons &amp; Comics</a>
                                </li>
                                <li>
                                  <a href="#">Tattoo Design</a>
                                </li>
                                <li>
                                  <a href="#">Storyboards</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Gaming</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Game Art</a>
                                </li>
                                <li>
                                  <a href="#">Graphics for Streamers</a>
                                </li>
                                <li>
                                  <a href="#">Twitch Store</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">Visual Design</div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Image Editing</a>
                                </li>
                                <li>
                                  <a href="#">Presentation Design</a>
                                </li>
                                <li>
                                  <a href="#">Infographic Design</a>
                                </li>
                                <li>
                                  <a href="#">Vector Tracing</a>
                                </li>
                                <li>
                                  <a href="#">Resume Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Print Design</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">T-Shirts &amp; Merchandise</a>
                                </li>
                                <li>
                                  <a href="#">Flyer Design</a>
                                </li>
                                <li>
                                  <a href="#">Brochure Design</a>
                                </li>
                                <li>
                                  <a href="#">Poster Design</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Design</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a className="dropdown" href="#">
                            <span className="menu-icn flaticon-video-file" />
                            <span className="menu-title">
                              Video, Film &amp; Entertainment
                            </span>
                          </a>
                          <div className="drop-menu d-flex justify-content-between">
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Web &amp; App Design
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Website Design</a>
                                </li>
                                <li>
                                  <a href="#">App DesignUX Design</a>
                                </li>
                                <li>
                                  <a href="#">Landing Page Design</a>
                                </li>
                                <li>
                                  <a href="#">Icon Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">
                                Marketing Design
                              </div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Social Media Design</a>
                                </li>
                                <li>
                                  <a href="#">Email Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Banners</a>
                                </li>
                                <li>
                                  <a href="#">Signage Design</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Art &amp; Illustration
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Illustration</a>
                                </li>
                                <li>
                                  <a href="#">NFT Art</a>
                                </li>
                                <li>
                                  <a href="#">Pattern Design</a>
                                </li>
                                <li>
                                  <a href="#">Portraits &amp; Caricatures</a>
                                </li>
                                <li>
                                  <a href="#">Cartoons &amp; Comics</a>
                                </li>
                                <li>
                                  <a href="#">Tattoo Design</a>
                                </li>
                                <li>
                                  <a href="#">Storyboards</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Gaming</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Game Art</a>
                                </li>
                                <li>
                                  <a href="#">Graphics for Streamers</a>
                                </li>
                                <li>
                                  <a href="#">Twitch Store</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">Visual Design</div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Image Editing</a>
                                </li>
                                <li>
                                  <a href="#">Presentation Design</a>
                                </li>
                                <li>
                                  <a href="#">Infographic Design</a>
                                </li>
                                <li>
                                  <a href="#">Vector Tracing</a>
                                </li>
                                <li>
                                  <a href="#">Resume Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Print Design</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">T-Shirts &amp; Merchandise</a>
                                </li>
                                <li>
                                  <a href="#">Flyer Design</a>
                                </li>
                                <li>
                                  <a href="#">Brochure Design</a>
                                </li>
                                <li>
                                  <a href="#">Poster Design</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Design</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a className="dropdown" href="#">
                            <span className="menu-icn flaticon-ruler" />
                            <span className="menu-title">
                              Media, Talent &amp; Influencer Services e
                            </span>
                          </a>
                          <div className="drop-menu d-flex justify-content-between">
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Web &amp; App Design
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Website Design</a>
                                </li>
                                <li>
                                  <a href="#">App DesignUX Design</a>
                                </li>
                                <li>
                                  <a href="#">Landing Page Design</a>
                                </li>
                                <li>
                                  <a href="#">Icon Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">
                                Marketing Design
                              </div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Social Media Design</a>
                                </li>
                                <li>
                                  <a href="#">Email Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Banners</a>
                                </li>
                                <li>
                                  <a href="#">Signage Design</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Art &amp; Illustration
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Illustration</a>
                                </li>
                                <li>
                                  <a href="#">NFT Art</a>
                                </li>
                                <li>
                                  <a href="#">Pattern Design</a>
                                </li>
                                <li>
                                  <a href="#">Portraits &amp; Caricatures</a>
                                </li>
                                <li>
                                  <a href="#">Cartoons &amp; Comics</a>
                                </li>
                                <li>
                                  <a href="#">Tattoo Design</a>
                                </li>
                                <li>
                                  <a href="#">Storyboards</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Gaming</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Game Art</a>
                                </li>
                                <li>
                                  <a href="#">Graphics for Streamers</a>
                                </li>
                                <li>
                                  <a href="#">Twitch Store</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">Visual Design</div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Image Editing</a>
                                </li>
                                <li>
                                  <a href="#">Presentation Design</a>
                                </li>
                                <li>
                                  <a href="#">Infographic Design</a>
                                </li>
                                <li>
                                  <a href="#">Vector Tracing</a>
                                </li>
                                <li>
                                  <a href="#">Resume Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Print Design</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">T-Shirts &amp; Merchandise</a>
                                </li>
                                <li>
                                  <a href="#">Flyer Design</a>
                                </li>
                                <li>
                                  <a href="#">Brochure Design</a>
                                </li>
                                <li>
                                  <a href="#">Poster Design</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Design</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a className="dropdown" href="#">
                            <span className="menu-icn flaticon-goal" />
                            <span className="menu-title">
                              Music &amp; Audio Production
                            </span>
                          </a>
                          <div className="drop-menu d-flex justify-content-between">
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Web &amp; App Design
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Website Design</a>
                                </li>
                                <li>
                                  <a href="#">App DesignUX Design</a>
                                </li>
                                <li>
                                  <a href="#">Landing Page Design</a>
                                </li>
                                <li>
                                  <a href="#">Icon Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">
                                Marketing Design
                              </div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Social Media Design</a>
                                </li>
                                <li>
                                  <a href="#">Email Design</a>
                                </li>
                                <li>
                                  <a href="#">Web Banners</a>
                                </li>
                                <li>
                                  <a href="#">Signage Design</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">
                                Art &amp; Illustration
                              </div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Illustration</a>
                                </li>
                                <li>
                                  <a href="#">NFT Art</a>
                                </li>
                                <li>
                                  <a href="#">Pattern Design</a>
                                </li>
                                <li>
                                  <a href="#">Portraits &amp; Caricatures</a>
                                </li>
                                <li>
                                  <a href="#">Cartoons &amp; Comics</a>
                                </li>
                                <li>
                                  <a href="#">Tattoo Design</a>
                                </li>
                                <li>
                                  <a href="#">Storyboards</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Gaming</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">Game Art</a>
                                </li>
                                <li>
                                  <a href="#">Graphics for Streamers</a>
                                </li>
                                <li>
                                  <a href="#">Twitch Store</a>
                                </li>
                              </ul>
                            </div>
                            <div className="one-third">
                              <div className="h6 cat-title">Visual Design</div>
                              <ul className="ps-0 mb40">
                                <li>
                                  <a href="#">Image Editing</a>
                                </li>
                                <li>
                                  <a href="#">Presentation Design</a>
                                </li>
                                <li>
                                  <a href="#">Infographic Design</a>
                                </li>
                                <li>
                                  <a href="#">Vector Tracing</a>
                                </li>
                                <li>
                                  <a href="#">Resume Design</a>
                                </li>
                              </ul>
                              <div className="h6 cat-title">Print Design</div>
                              <ul className="ps-0 mb-0">
                                <li>
                                  <a href="#">T-Shirts &amp; Merchandise</a>
                                </li>
                                <li>
                                  <a href="#">Flyer Design</a>
                                </li>
                                <li>
                                  <a href="#">Brochure Design</a>
                                </li>
                                <li>
                                  <a href="#">Poster Design</a>
                                </li>
                                <li>
                                  <a href="#">Catalog Design</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Responsive Menu Structure*/}
                  <ul
                    id="respMenu"
                    className="ace-responsive-menu"
                    data-menu-style="horizontal"
                  >
                    <li className="visible_list">
                      <a className="list-item" href="#">
                        <span className="title">Home</span>
                      </a>
                    </li>
                    <li className="visible_list">
                      <a className="list-item" href="#">
                        <span className="title">Browse Jobs</span>
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <span className="title">Services</span>
                          </a>
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
                              <a href="page-service-single.html">
                                Service Single
                              </a>
                            </li>
                            <li>
                              <a href="page-service-single-v1.html">
                                Single V1
                              </a>
                            </li>
                            <li>
                              <a href="page-service-single-v2.html">
                                Single V2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <span className="title">Projects</span>
                          </a>
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
                              <a href="page-project-single.html">
                                Project Single
                              </a>
                            </li>
                            <li>
                              <a href="page-project-single-v1.html">
                                Single V1
                              </a>
                            </li>
                            <li>
                              <a href="page-project-single-v2.html">
                                Single V2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <span className="title">Job View</span>
                          </a>
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
                    <li className="visible_list">
                      <a className="list-item" href="#">
                        <span className="title">Users</span>
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <span className="title">Dashboard</span>
                          </a>
                          <ul>
                            <li>
                              <a href="page-dashboard.html">Dashboard</a>
                            </li>
                            <li>
                              <a href="page-dashboard-proposal.html">
                                Proposal
                              </a>
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
                              <a href="page-dashboard-statement.html">
                                Statement
                              </a>
                            </li>
                            <li>
                              <a href="page-dashboard-manage-service.html">
                                Manage Service
                              </a>
                            </li>
                            <li>
                              <a href="page-dashboard-add-service.html">
                                Add Services
                              </a>
                            </li>
                            <li>
                              <a href="page-dashboard-manage-jobs.html">
                                Manage Jobs
                              </a>
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
                              <a href="page-dashboard-profile.html">
                                My Profile
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <span className="title">Employee</span>
                          </a>
                          <ul>
                            <li>
                              <a href="page-employee-v1.html">Employee V1</a>
                            </li>
                            <li>
                              <a href="page-employee-v2.html">Employee V2</a>
                            </li>
                            <li>
                              <a href="page-employee-single.html">
                                Employee Single
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <span className="title">Freelancer</span>
                          </a>
                          <ul>
                            <li>
                              <a href="page-freelancer-v1.html">
                                Freelancer V1
                              </a>
                            </li>
                            <li>
                              <a href="page-freelancer-v2.html">
                                Freelancer V2
                              </a>
                            </li>
                            <li>
                              <a href="page-freelancer-v3.html">
                                Freelancer V3
                              </a>
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
                              <a href="page-freelancer-single.html">
                                Freelancer Single
                              </a>
                            </li>
                            <li>
                              <a href="page-freelancer-single-v1.html">
                                Single V1
                              </a>
                            </li>
                            <li>
                              <a href="page-freelancer-single-v2.html">
                                Single V2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="page-become-seller.html">
                            <span className="title">Become Seller</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="visible_list">
                      <a className="list-item" href="#">
                        <span className="title">Pages</span>
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            <span className="title">About</span>
                          </a>
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
                          <a href="#">
                            <span className="title">Blog</span>
                          </a>
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
                        <li>
                          <a href="#">
                            <span className="title">Shop</span>
                          </a>
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
                      <a className="list-item" href="page-contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto px-0">
                <div className="d-flex align-items-center">
                  <a
                    className="login-info"
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                    role="button"
                  >
                    <span className="flaticon-loupe" />
                  </a>
                  <a
                    className="login-info mx10-lg mx30"
                    href="page-become-seller.html"
                  >
                    <span className="d-none d-xl-inline-block">Become a</span>
                    Seller
                  </a>
                  <a className="login-info mr10-lg mr30" href="page-login.html">
                    Sign in
                  </a>
                  <a
                    className="ud-btn btn-thm add-joining"
                    href="page-register.html"
                  >
                    Join
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Search Modal */}
      <div className="search-modal">
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex={-1}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalToggleLabel" />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fal fa-xmark" />
                </button>
              </div>
              <div className="modal-body">
                <div className="popup-search-field search_area">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="What service are you looking for today?"
                  />
                  <label>
                    <span className="far fa-magnifying-glass" />
                  </label>
                  <button className="ud-btn btn-thm" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hiddenbar-body-ovelay" />
      {/* Mobile Nav  */}
      <div id="page" className="mobilie_header_nav stylehome1">
        <div className="mobile-menu">
          <div className="header bdrb1">
            <div className="menu_and_widgets">
              <div className="mobile_menu_bar d-flex justify-content-between align-items-center">
                <a className="mobile_logo" href="#">
                  <img src="images/header-logo-dark.svg" alt="" />
                </a>
                <div className="right-side text-end">
                  <a className="" href="page-login.html">
                    join
                  </a>
                  <a className="menubar ml30" href="#menu">
                    <img src="images/mobile-dark-nav-icon.svg" alt="" />
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
              <a href="#">
                <span>Home</span>
              </a>
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
                      <a href="page-freelancer-single.html">
                        Freelancer Single
                      </a>
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
  );
}
