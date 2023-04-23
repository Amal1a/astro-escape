const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll(".slide");
const prevButton = carousel.querySelector(".prev-button");
const nextButton = carousel.querySelector(".next-button");

let currentSlide = 0;

function showSlide(n) {
  console.log("hallo?");

  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPrevSlide() {
  showSlide(currentSlide - 1);
}

prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

showSlide(currentSlide);
