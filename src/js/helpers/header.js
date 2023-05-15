const menuBtn = document.querySelector('#mobile-menu-btn');

const mobileMenu = document.querySelector('.js-mobile-menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-menu-open');
  mobileMenu.classList.toggle('is-menu-open');
});
