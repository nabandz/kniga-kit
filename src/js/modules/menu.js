export function mobileMenu () {
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
}