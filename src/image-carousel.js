import "./styles.css";

const slideController = (function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide;
  
  // setting all the slides to display none
  // function hideSlide(slide) {
  //   slide.classList.add("hide");
  // }

  function hideAllSlides() {
    slides.forEach((element) => {
      element.classList.add("hide");
    });
  }

  function setCurrentSlide(index) {
    currentSlide = index;
    // currentSlide.classList.remove("hide");
  }

  function renderSlide() {
    hideAllSlides();
    const slide = slides[currentSlide];
    slide.classList.remove("hide");
  }

  function navigateLeft() {
    if (!(currentSlide === 0)) {
      setCurrentSlide(currentSlide-=1);
      renderSlide();
    }
  }

  function navigateRight() {
    if (!(currentSlide >= slides.length - 1)) {
      setCurrentSlide(currentSlide+=1);
      renderSlide();
    }
  }

  const leftBtn = document.querySelector("#left");
  leftBtn.addEventListener("click", () => navigateLeft());
  const rightBtn = document.querySelector("#right");
  rightBtn.addEventListener("click", () => navigateRight());
  // default slide
  hideAllSlides();
  setCurrentSlide(0);
  renderSlide();

})();


export default slideController;
