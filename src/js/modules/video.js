const videoButton = document.querySelector("#video-button"),
  videoWrapper = document.querySelector(".video"),
  video = document.querySelector("#video-item");

videoButton.addEventListener("click", function () {
  videoButton.classList.add("hide");
  video.classList.remove("hidden");
});
