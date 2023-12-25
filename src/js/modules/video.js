function activateVideo() {
  const videoButton = document.querySelector("#video-button");
  const videoOverlay = document.querySelector(".video__overlay");
  const videoWrapper = document.querySelector(".video");
  const video = document.querySelector("#video-item");

  videoWrapper.addEventListener("click", function () {
    if (video.paused || (!video.paused && video.autoplay)) {
      if (video.autoplay) video.currentTime = 0;
      videoOverlay.classList.add("hidden");
      videoButton.classList.add("hidden");
      video.autoplay = 0;
      video.muted = false;
      video.play();
    } else {
      videoOverlay.classList.remove("hidden");
      videoButton.classList.remove("hidden");
      video.pause();
    }
  });

  video.addEventListener("click", function (e) {
    e.preventDefault();
  });
}

export default activateVideo;
