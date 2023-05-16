import { getBookById } from './get-data'; 
import { Notify } from 'notiflix';
import scrollLock from 'scroll-lock';

const URL = 'https://books-backend.p.goit.global/books/category?category=';

const bookGet = {
  getBookById, 
};

<<<<<<< Updated upstream
=======
let idBookOne = [];

// bookItems.addEventListener('click', onBookCardClick)

// function onBookCardClick(e) {
//   if (!e.target.classList.contains("js-item-book")){
//     return
//   }
//   console.log("tyt",e.target)
//   idBookOne = [];
//   const bookCard = e.target.closest('.item-book');

//   const bookId = bookCard.dataset.id;
//   if (!bookCard) return;
//   idBookOne.push(bookId);
//   return openModal(bookId);
// }

function disableScroll() {
  scrollLock.disablePageScroll();
}

function enableScroll() {
  scrollLock.enablePageScroll();
}

export function openModal(bookId) {
  modalBtnCls.addEventListener('click', closeModal);
  modal.classList.remove('hi-backdrop');
  disableScroll();
}

function closeModal() {
  modalBtnCls.removeEventListener('click', closeModal);
  modal.classList.add('hi-backdrop');
  enableScroll();
}

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
>>>>>>> Stashed changes
