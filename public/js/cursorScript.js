document.addEventListener("DOMContentLoaded", function () {
  const cursorTracker = document.getElementById("cursor-tracker");

  function updateCursorPosition(e) {
    cursorTracker.style.left = e.clientX + "px";
    cursorTracker.style.top = e.clientY + "px";
  }

  document.addEventListener("mousemove", updateCursorPosition);

  let isScrolling;

  window.addEventListener("scroll", () => {
    clearTimeout(isScrolling);

    const scrollY = window.scrollY || window.pageYOffset;
    cursorTracker.style.top = `${scrollY}px`;

    isScrolling = setTimeout(() => {
      updateCursorPosition(event);
    }, 150);
  });

  // Ajoutez un gestionnaire d'événement de chargement initial
  window.addEventListener("load", () => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    cursorTracker.style.left = `${mouseX}px`;
    cursorTracker.style.top = `${mouseY}px`;
  });
});