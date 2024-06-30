'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
}

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav links
navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const pageName = this.innerHTML.trim().toLowerCase();
    // Toggle active class for pages and navigation links
    pages.forEach(page => {
      if (page.dataset.page === pageName) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    navigationLinks.forEach(navLink => {
      if (navLink === this) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });

    // Scroll to top of the page
    window.scrollTo(0, 0);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const skills = document.querySelectorAll(".skills-item");

  skills.forEach(skill => {
      const value = skill.querySelector("data").value;
      const bar = skill.querySelector(".skill-progress-fill");
      bar.style.width = value + "%";
  });
});
