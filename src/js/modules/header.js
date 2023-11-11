function activateHeaderShadow() {
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  });
}

export default activateHeaderShadow;
