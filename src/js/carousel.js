const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".slide");
const prevButton = carousel.querySelector(".prev-button");
const nextButton = carousel.querySelector(".next-button");
const accepted = document.querySelector(".accepted");

let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");

  //   if (document.querySelector(".slide.active").accepted !== true) {
  //     console.log("I am false");
  //     // slides[currentSlide].classList.add("active");
  //   }
  //   if (document.querySelector(".slide.active").accepted === true) {
  //     console.log("I am true");
  //     // slides[currentSlide].classList.add("hide");
  //   }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
  //   console.log("I am" + currentSlide);
}

function showPrevSlide() {
  showSlide(currentSlide - 1);
}

prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

showSlide(currentSlide);
