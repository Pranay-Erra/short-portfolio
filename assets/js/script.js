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


//Contact form-emailJS
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const submitButton = document.querySelector('.form-btn');

    form.addEventListener('input', () => {
      // Enable the submit button if all required fields are filled
      const allFilled = [...form.querySelectorAll('[required]')].every(input => input.value.trim() !== '');
      submitButton.disabled = !allFilled;
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      submitButton.disabled = true;

      const formData = {
        fullname: form.fullname.value,
        email: form.email.value,
        message: form.message.value
      };

      emailjs.send('service_act3854', 'template_f6xelnu', formData)
        .then(() => {
          alert('Message sent successfully!');
          form.reset();
          submitButton.disabled = true;
        })
        .catch(err => {
          console.error('Failed to send message', err);
          alert('Failed to send message. Please try again later.');
          submitButton.disabled = false;
        });
    });
  });

