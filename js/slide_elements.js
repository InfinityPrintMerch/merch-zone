let customSlideIndex = 0;

function moveCustomSlide(step) {
  const customSlides = document.querySelectorAll('.custom-slide');
  customSlideIndex += step;

  if (customSlideIndex >= customSlides.length) {
    customSlideIndex = 0;
  } else if (customSlideIndex < 0) {
    customSlideIndex = customSlides.length - 1;
  }

  const customSlider = document.querySelector('.custom-slider');
  customSlider.style.transform = `translateX(-${customSlideIndex * 100}%)`;
}
