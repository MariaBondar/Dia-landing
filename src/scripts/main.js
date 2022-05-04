'use strict';

import png1 from "../images/Photo.png";
import png2 from "../images/slider/slide-img-1.png";
import png3 from "../images/slider/slide-img-2.png";

const images = [png1, png2, png3];
let activeSlide = 0;

const list = document.querySelector(".header__image");

const nextButton = document.querySelector(".button--next");
const prevButton = document.querySelector(".button--prev");

nextButton.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide >= 3) {
    activeSlide = 0;
  }

  const currentImage = images[activeSlide];

  list.style.backgroundImage = `url('${images[activeSlide]}')`;
  console.log(document.body.style.backgroundImage)
});

prevButton.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide <= 3) {
    activeSlide = 0;
  }

  const currentImage = images[activeSlide];

  list.style.backgroundImage = `url('${images[activeSlide]}')`;
});
