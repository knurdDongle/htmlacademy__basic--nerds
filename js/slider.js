var slideIndex = 0;
showSlides(slideIndex);
// showAutoSlides()

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".slide");
  var dots = document.querySelectorAll(".slider__btn");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slider__element--current")
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("slider__btn--current")
  }

  slides[slideIndex - 1].classList.add("slider__element--current");
  dots[slideIndex - 1].classList.add("slider__btn--current")
}

// function showAutoSlides() {
//   slideIndex++;
//   setTimeout(showSlides(slideIndex), 1000)
// }
