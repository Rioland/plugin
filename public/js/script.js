// window.addEventListener("load", function () {
//   "use strict";

//   // Preloader
//   function preloaderLoad() {
//       const preloader = document.getElementById("preloader");
//       alert("preloader");
//       if (preloader) {
//           setTimeout(() => {
//               preloader.style.display = "none";
//           }, 200);
//       }

//       const preloaderDisabler = document.querySelector(".preloader_disabler");
//       if (preloaderDisabler) {
//           preloaderDisabler.addEventListener("click", () => {
//               document.getElementById("preloader").style.display = "none";
//           });
//       }
//       // document.getElementById("preloader").style.display = "none";
//   }

//   // Navbar Scroll Fixed
//   function navbarScrollfixed() {
//       const navbar = document.querySelector(".navbar-scrolltofixed");
//       if (navbar) {
//           window.addEventListener("scroll", function () {
//               if (window.scrollY > navbar.offsetTop) {
//                   navbar.classList.add("fixed");
//               } else {
//                   navbar.classList.remove("fixed");
//               }
//           });
//       }
//   }

//   // Mobile Navigation Toggle
//   function mobileNavToggle() {
//       document.querySelectorAll("#main-nav-bar .navbar-nav .sub-menu").forEach(subMenu => {
//           let parentAnchor = subMenu.parentElement.querySelector("a");
//           if (parentAnchor) {
//               let button = document.createElement("button");
//               button.className = "sub-nav-toggler";
//               button.innerHTML = `<span class="sr-only">Toggle navigation</span> 
//                   <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>`;
//               parentAnchor.appendChild(button);

//               button.addEventListener("click", function (e) {
//                   e.preventDefault();
//                   subMenu.classList.toggle("show");
//               });
//           }
//       });
//   }

//   // Scroll To Top
//   function scrollToTop() {
//       const scrollButton = document.querySelector(".scrollToHome");
//       if (scrollButton) {
//           window.addEventListener("scroll", function () {
//               if (window.scrollY > 300) {
//                   scrollButton.classList.add("show");
//               } else {
//                   scrollButton.classList.remove("show");
//               }
//           });

//           scrollButton.addEventListener("click", function (e) {
//               e.preventDefault();
//               window.scrollTo({ top: 0, behavior: "smooth" });
//           });
//       }
//   }

//   // Dropdown toggles
//   function setupDropdowns() {
//       document.querySelectorAll(".drop_btn, .drop_btn2, .drop_btn3, .drop_btn4").forEach(btn => {
//           btn.addEventListener("click", function () {
//               let target = document.querySelector(`.${this.className.replace("btn", "content")}`);
//               if (target) target.classList.toggle("show");
//           });
//       });
//   }

//   // Accordion
//   function setupAccordion() {
//       document.querySelectorAll(".accordion-style1 .accordion-item, .accordion-style1.style2 .accordion-item, .accordion-style2 .accordion-item")
//           .forEach(item => {
//               item.addEventListener("click", function () {
//                   this.classList.toggle("active");
//               });
//           });
//   }

//   // Quantity Controls
//   function setupQuantityControls() {
//       document.querySelectorAll(".quantity-arrow-minus, .quantity-arrow-minus2, .quantity-arrow-minus3").forEach(btn => {
//           btn.addEventListener("click", function () {
//               let input = this.parentElement.querySelector(".quantity-num");
//               if (input && input.value > 1) input.value = parseInt(input.value) - 1;
//           });
//       });

//       document.querySelectorAll(".quantity-arrow-plus, .quantity-arrow-plus2, .quantity-arrow-plus3").forEach(btn => {
//           btn.addEventListener("click", function () {
//               let input = this.parentElement.querySelector(".quantity-num");
//               if (input) input.value = parseInt(input.value) + 1;
//           });
//       });
//   }

//   // Tooltips
//   function setupTooltips() {
//       let tooltipElements = document.querySelectorAll("[data-bs-toggle='tooltip']");
//       tooltipElements.forEach(el => new bootstrap.Tooltip(el));
//   }

//   // Initialize functions
//   navbarScrollfixed();
//   scrollToTop();
//   mobileNavToggle();
//   setupDropdowns();
//   setupAccordion();
//   setupQuantityControls();
//   setupTooltips();
//   preloaderLoad();
// });

// Preloader on window load
// window.addEventListener("load", function () {
//   preloaderLoad();
// });

  // Preloader
  function preloaderLoad() {
      const preloader = document.getElementById("preloader");
      // alert("preloader");
      if (preloader) {
          setTimeout(() => {
              preloader.style.display = "none";
          }, 200);
      }

      const preloaderDisabler = document.querySelector(".preloader_disabler");
      if (preloaderDisabler) {
          preloaderDisabler.addEventListener("click", () => {
              document.getElementById("preloader").style.display = "none";
          });
      }
      // document.getElementById("preloader").style.display = "none";
  }

  preloaderLoad();