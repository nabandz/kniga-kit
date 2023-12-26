function activateMobileMenu() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const navItems = document.querySelectorAll(".nav__link");
  const body = document.body;

  burger.addEventListener("click", () => {
    body.classList.toggle("stop-scroll");
    burger.classList.toggle("burger_active");
    nav.classList.toggle("nav_active");
  });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      body.classList.remove("stop-scroll");
      burger.classList.remove("burger_active");
      nav.classList.remove("nav_active");
    });
  });
}

export default activateMobileMenu;
