document.addEventListener("DOMContentLoaded", function () {
  adjustVideoHeight();
});

window.addEventListener("resize", function () {
  adjustVideoHeight();
});

function adjustVideoHeight() {
  var videoContainer = document.getElementById("video-container");
  var contentInner = document.querySelector(".content-inner");

  if (videoContainer && contentInner) {
    videoContainer.style.height = contentInner.offsetHeight + "px";
  }
}
