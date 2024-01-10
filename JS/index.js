// loader

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  // Add a class to show the loader
  loader.classList.add("loader--visible");

  // Set a timeout to hide the loader after 3 seconds
  setTimeout(() => {
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  }, 2000); // 3000 milliseconds = 3 seconds
});

/// slide motion
const Caerousel = document.querySelector(".caerousel");
const ArrowsBtn = document.querySelectorAll(".scroll-head i");
const firstCardWidth = Caerousel.querySelector(".card").offsetWidth;

let isDragging = false,
  startX,
  startScrollLeft;

ArrowsBtn.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    Caerousel.scrollLeft +=
      arrow.id == "left" ? -firstCardWidth : firstCardWidth + 160;
  });
});
const DragStart = (e) => {
  isDragging = true;
  Caerousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = Caerousel.scrollLeft;
};
const dragging = (e) => {
  if (!isDragging) return;
  Caerousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop = () => {
  isDragging = false;
  Caerousel.classList.remove("dragging");
};
Caerousel.addEventListener("mousedown", DragStart);
Caerousel.addEventListener("mousemove", dragging);
Caerousel.addEventListener("mouseup", dragStop);
