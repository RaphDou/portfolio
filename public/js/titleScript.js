document.addEventListener('DOMContentLoaded', (event) => {
  const nameElement = document.querySelector('.navbar-brand');
  const homeElement = document.querySelector('.nav-link.active');

  nameElement.style.opacity = 0;
  fadeIn(nameElement, 3000);

  nameElement.style.fontSize = '50px';
  nameElement.style.fontWeight = '800';
  nameElement.style.zIndex = '2';

  function fadeIn(element, duration) {
    let opacity = 0;
    const interval = 10;
    const delta = interval / duration;

    function tick() {
      opacity += delta;
      element.style.opacity = opacity;

      if (opacity < 1) {
        setTimeout(tick, interval);
      }
    }

    tick();
  }
});