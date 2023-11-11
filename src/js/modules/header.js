function activateHeaderShadow() {
  const header = document.querySelector(".header__wrapper");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("header__wrapper_active");
    } else {
      header.classList.remove("header__wrapper_active");
    }
  });
}

export default activateHeaderShadow;
