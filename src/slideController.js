
const slideController = (function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide;

  function hideAllSlides() {
    slides.forEach((element) => {
      element.classList.add("hide");
    });
  }

  function setCurrentSlide(index) {
    currentSlide = index;
    hideAllSlides();
    const slide = slides[currentSlide];
    slide.classList.remove("hide");
  }

  function navigateLeft() {
    if (!(currentSlide === 0)) {
      setCurrentSlide(currentSlide-=1);
    }
  }

  function navigateRight() {
    if (!(currentSlide >= slides.length - 1)) {
      setCurrentSlide(currentSlide+=1);
    }
  }


  return {hideAllSlides, setCurrentSlide, navigateLeft, navigateRight}
})();


export default slideController;
