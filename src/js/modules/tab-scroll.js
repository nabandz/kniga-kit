function activateTabShadow() {
  const shadow = document.querySelector(".tabcontent__shadow"),
    storyScroll = document.querySelector(".tabcontent__header");

  storyScroll.addEventListener("scroll", function () {
    if (storyScroll.scrollTop > 0) {
      shadow.classList.add("hide");
      shadow.classList.remove("show", "fade");
    } else {
      shadow.classList.add("show", "fade");
      shadow.classList.remove("hide");
    }
  });
}

export default activateTabShadow;
