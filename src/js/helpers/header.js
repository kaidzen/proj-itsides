const menuBtn = document.querySelector('#mobile-menu-btn');

const mobileMenu = document.querySelector('.js-mobile-menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-menu-open');
  mobileMenu.classList.toggle('is-menu-open');
});

const themeSwitcher = document.getElementById('themeSwitcher');
const container = document.querySelector('.header');

themeSwitcher.addEventListener('change', (event) => {
  // container.classList.toggle('dark-theme');
  console.dir(event.target)
  if (event.target.checked) {
    document.documentElement.setAttribute('theme', 'dark');
  } else {
    document.documentElement.removeAttribute('theme');
  }
});


// const themeSwitcherBody = document.getElementById('themeSwitcher');
// const body = document.querySelector('body');

// themeSwitcherBody.addEventListener('change', () => {
//   body.classList.toggle('dark-theme');
// });
