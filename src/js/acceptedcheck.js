window.addEventListener("load", checkTestimonials);

const accepted = document.querySelector(".accepted");
const slides = document.querySelector(".slide");

const carousel = document.querySelector(".carousel");
const prevButton = carousel.querySelector(".prev-button");
const nextButton = carousel.querySelector(".next-button");

let currentSlide = 0;

function checkTestimonials(n) {
  currentSlide = (n + slides.length) % slides.length;

  if (accepted !== true) {
    console.log("I am fake");
    slides[currentSlide].classList.add("hide");
  }

  prevButton.addEventListener("click", checkTestimonialsAgain);
  nextButton.addEventListener("click", checkTestimonialsAgain);
}

function checkTestimonialsAgain() {
  if (accepted !== true) {
    console.log("I am fake 2");
    slides.classList.add("hide");
  }

  prevButton.addEventListener("click", checkTestimonials);
  nextButton.addEventListener("click", checkTestimonials);
}
