window.addEventListener('DOMContentLoaded', function() {
    //Slider
    const swiper = new Swiper(".approve__slider", {
        loop: true,
        mousewheel: true,
        spaceBetween: 25,
        speed: 2500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
      });
});