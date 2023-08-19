import Swiper from "swiper/bundle";

//Slider - section 'Storie'
const swiperStories = new Swiper(".stories__slider", {
  loop: true,
  effect: "fade",
  speed: 2500,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
});

//Slider - section 'Approve'
const swiperApprove = new Swiper(".approve__slider", {
  loop: true,
  mousewheel: true,
  speed: 2500,
  spaceBetween: 50,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".approve__button_next",
    prevEl: ".approve__button_prev",
  },
});
