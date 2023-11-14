document.addEventListener("DOMContentLoaded", function () {
  const cursorTracker = document.getElementById("cursor-tracker");

  function updateCursorPosition(e) {
    if (e) {
      cursorTracker.style.left = e.clientX + "px";
      cursorTracker.style.top = e.clientY + "px";
    }
  }

  document.addEventListener("mousemove", updateCursorPosition);

  let isScrolling;

  window.addEventListener("scroll", () => {
    clearTimeout(isScrolling);

    const scrollY = window.scrollY;
    cursorTracker.style.top = `${scrollY}px`;

    isScrolling = setTimeout(() => {
      updateCursorPosition(event);
    }, 150);
  });

  document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    cursorTracker.style.left = `${mouseX}px`;
    cursorTracker.style.top = `${mouseY}px`;
  });
});
