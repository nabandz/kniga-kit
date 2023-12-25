import Swiper from "swiper/bundle";

function slider() {
  const swiperApprove = new Swiper(".slider", {
    loop: true,
    speed: 1400,
    spaceBetween: 64,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".slider__button_next",
      prevEl: ".slider__button_prev",
    },
  });
}

export default slider;
