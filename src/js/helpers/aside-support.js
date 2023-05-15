


  // const markupCardFund = (
  //   { title, url, img, img2}, position) => 
  //   `<li class="support_list-item swiper-slide">
  //   <p class="support_number">${position}</p>
  //   <a class="support_link" href="${url}" target="_blank" rel="noopener noreferrer nofollow">
  //     <img
  //     srcset="${img} 1x, ${img2} 2x"
  //       src="${img}"
  //       alt="${title}"
  //       width="149"
  //       loading="lazy"
  //     />
  //   </a>
  // </li>`;

import { fundsArray } from './fund-array';
import { markupCardFund } from './markup-support';



// const supportListEl = document.querySelector('.support_list-js');
// const btnSwiperEl = document.querySelector('.swiper-button-next');

// let position = 0;

// const addLeadingZero = value => {
//   return String(value).padStart(2, '0');
// };

// const markupSetFunds = fundsArray
//   .map((el, i) => {
//     position = addLeadingZero(i + 1);

//     return markupCardFund(el, position);
//   })
//   .join('');

// supportListEl.innerHTML = markupSetFunds;

// const swiper = new Swiper('.swiper', {
//   direction: 'vertical',
//   spaceBetween: 20,
//   slidesPerView: 'auto',
//   rewind: true,

//   navigation: {
//     nextEl: '.swiper-button-next',
//   },
// });

// swiper.update();

// btnSwiperEl.addEventListener('click', () => {
//   swiper.slideNext();

// });

