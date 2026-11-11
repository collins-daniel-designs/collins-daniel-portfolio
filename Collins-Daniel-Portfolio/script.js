// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuToggle.textContent = "✕";
  } else {
    menuToggle.textContent = "☰";
  }

});


// CLOSE MENU AFTER CLICKING A LINK

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {

  link.addEventListener("click", function() {

    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";

  });

});


// AUTOMATIC COPYRIGHT YEAR

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// CONTACT FORM DEMONSTRATION

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;

  formMessage.textContent =
    "Thank you, " + name + "! Your message has been received.";

  formMessage.style.color = "#258c84";

  contactForm.reset();

});