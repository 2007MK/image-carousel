import { newImageCarousel } from "./newImageCarousel";

const slideController = (function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide;

  function hideAllSlides() {
    slides.forEach((element) => {
      element.classList.add("hide");
    });
  }

  function setCurrentSlide(index) {
    currentSlide = Number(index);
    hideAllSlides();
    const slide = slides[currentSlide];
    slide.classList.remove("hide");
    newImageCarousel.renderNavDots();
  }

  function navigateLeft() {
    if (currentSlide > 0) {
      setCurrentSlide((currentSlide -= 1));
    }
  }

  function navigateRight() {
    if ((currentSlide < slides.length - 1)) {
      setCurrentSlide((currentSlide += 1));
    }
  }

  function dotHandler(e) {
    let index = Number(e.target.id);
    setCurrentSlide(index);
  }

  return { hideAllSlides, setCurrentSlide, navigateLeft, navigateRight, dotHandler };
})();

export default slideController;
