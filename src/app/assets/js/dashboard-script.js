// Toggle dropdown visibility
function myFunction() {
  document.getElementById("myDropdown")?.classList.toggle("show");
}

// Close dropdown when clicking outside
window.addEventListener("click", (event) => {
  if (!event.target.closest(".dropbtn")) {
    document.querySelectorAll(".dropdown-content.show").forEach((dropdown) => {
      dropdown.classList.remove("show");
    });
  }
});

// Sidebar Menu Script
const sidebarMenu = (menu) => {
  const animationSpeed = 300;

  menu.addEventListener("click", (event) => {
    const target = event.target.closest("li a");
    if (!target) return;

    const checkElement = target.nextElementSibling;

    if (checkElement?.classList.contains("treeview-menu")) {
      event.preventDefault();
      
      if (checkElement.style.display === "block") {
        checkElement.style.display = "none";
        checkElement.classList.remove("menu-open");
        target.parentElement.classList.remove("active");
      } else {
        document.querySelectorAll(".treeview-menu").forEach((menu) => {
          menu.style.display = "none";
          menu.classList.remove("menu-open");
        });

        document.querySelectorAll(".sidebar-menu li.active").forEach((li) => {
          li.classList.remove("active");
        });

        checkElement.style.display = "block";
        checkElement.classList.add("menu-open");
        target.parentElement.classList.add("active");
      }
    }
  });
};

const sidebar = document.querySelector(".sidebar-menu");
if (sidebar) {
  sidebarMenu(sidebar);
}
document.querySelector(".dashboard_sidebar_toggle_icon")?.addEventListener("click", () => {
  document.querySelector(".dashboard.dashboard_wrapper")?.classList.toggle("dsh_board_sidebar_hidden");
});
alert("Dashboard Script Loaded");
// Dashboard Sidebar Toggle
// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelector(".dashboard_sidebar_toggle_icon")?.addEventListener("click", () => {
//     document.querySelector(".dashboard.dashboard_wrapper")?.classList.toggle("dsh_board_sidebar_hidden");
//   });
// });
