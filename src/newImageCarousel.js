import slideController from './slideController'

const newImageCarousel = (function() {
    let body = document.querySelector("body");
    let frame = document.createElement("div");
        frame.setAttribute("class", "frame");
    let slides = document.querySelectorAll(".slide");
    let leftBtn = document.createElement("button");
        leftBtn.setAttribute("class", "navigation")
        leftBtn.setAttribute("id", "left")
        leftBtn.textContent = "<"
        leftBtn.addEventListener("click", () => slideController.navigateLeft())
    let rightBtn = document.createElement("button");
        rightBtn.setAttribute("class", "navigation")
        rightBtn.setAttribute("id", "right")
        rightBtn.textContent = ">"
        rightBtn.addEventListener("click", () => slideController.navigateRight())

    function renderSlides() {
        slides.forEach(element => {
            frame.appendChild(element);
        });
    }

    
    frame.appendChild(leftBtn);
    renderSlides();
    frame.appendChild(rightBtn);
    body.appendChild(frame);
    slideController.hideAllSlides();


})();

export {newImageCarousel}