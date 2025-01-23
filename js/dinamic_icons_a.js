document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev i");
  const nextButton = document.querySelector(".next i");

  prevButton.addEventListener("mouseenter", function () {
    prevButton.classList.remove("fa-regular");
    prevButton.classList.add("fa-solid");
  });

  prevButton.addEventListener("mouseleave", function () {
    prevButton.classList.remove("fa-solid");
    prevButton.classList.add("fa-regular");
  });

  nextButton.addEventListener("mouseenter", function () {
    nextButton.classList.remove("fa-regular");
    nextButton.classList.add("fa-solid");
  });

  nextButton.addEventListener("mouseleave", function () {
    nextButton.classList.remove("fa-solid");
    nextButton.classList.add("fa-regular");
  });
});
