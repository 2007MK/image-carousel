import slideController from "./slideController";

const newImageCarousel = (function () {
  const body = document.querySelector("body");
  const frame = document.createElement("div");
  frame.setAttribute("class", "frame");
  const slides = document.querySelectorAll(".slide");
  const leftBtn = document.createElement("button");
  leftBtn.setAttribute("class", "navigation");
  leftBtn.setAttribute("id", "left");
  leftBtn.textContent = "<";
  leftBtn.addEventListener("click", () => slideController.navigateLeft());
  const rightBtn = document.createElement("button");
  rightBtn.setAttribute("class", "navigation");
  rightBtn.setAttribute("id", "right");
  rightBtn.textContent = ">";
  rightBtn.addEventListener("click", () => slideController.navigateRight());
  const dotsContainer = document.createElement("div");
  dotsContainer.setAttribute("class", "dots-container");
  function renderSlides() {
    slides.forEach((element) => {
      frame.appendChild(element);
    });
  }

  function renderNavDots() {
    dotsContainer.innerHTML = "";

    for (let i = 0; i < slides.length; i++) {
      let slide = slides[i];
      let dot = document.createElement("div");
      dot.setAttribute("class", "nav-dots");
      if (!slide.classList.contains("hide")) {
        dot.classList.add("filled");
      }
      dot.addEventListener("click", (e) => {
        slideController.dotHandler(e)
      });
      dot.id = i;
      dotsContainer.appendChild(dot);
    }
  }

  frame.appendChild(leftBtn);
  renderSlides();
  frame.appendChild(rightBtn);
  body.appendChild(frame);
  frame.appendChild(dotsContainer);
  slideController.hideAllSlides();

  return {renderNavDots}
})();

export { newImageCarousel };
