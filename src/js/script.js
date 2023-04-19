window.addEventListener('DOMContentLoaded', function() {

    //Menu
    const mobileMenu = document.querySelector('.header__nav'),
          menuLinks = document.querySelectorAll('.header__link'),
          menuButton = document.querySelector('.header__menu-button');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('header__nav_active');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.toggle('header__nav_active');
        });
    });

    //Slider - section Stories
    const swiperStories = new Swiper(".stories__slider", {
        loop: true,
        effect: "fade",
        spaceBetween: 50,
        speed: 2500,
        autoplay: {
            delay: 3000,
        },
    });

    //Slider - section Approve
    const swiperApprove = new Swiper(".approve__slider", {
        loop: true,
        mousewheel: true,
        spaceBetween: 50,
        speed: 2500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
    });
});