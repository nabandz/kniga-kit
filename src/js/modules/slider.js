import Swiper from "swiper/bundle";

function slider() {
  const swiperApprove = new Swiper(".approve__slider", {
    loop: true,
    mousewheel: true,
    speed: 1700,
    spaceBetween: 50,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".approve__button_next",
      prevEl: ".approve__button_prev",
    },
  });
}

export default slider;
