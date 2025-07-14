const slideController = (function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide;

  //setting all the slides to display none;
  function hideSlide(slide) {
    slide.classList.add("hide");
  }

  function hideAllSlides() {
    slides.forEach(element => {
        element.classList.add("hide");
    });
  }

  function setCurrentSlide(index) {
    currentSlide = slides[index];
    currentSlide.classList.remove("hide");
}

  return { slides, setCurrentSlide, hideSlide, hideAllSlides };
})();

export { slideController };
