import { getBookById } from './get-data'; 
import { Notify } from 'notiflix';
// import scrollLock from 'scroll-lock';

const modalBtnCls = document.querySelector(".modal-btn");
const modal = document.querySelector('.backdrop');
const bookItems = document.querySelector('.js-list-books');
const URL = 'https://books-backend.p.goit.global/books/category?category=';
const bookGet = {
  getBookById, 
};

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

export function openModal(bookId) {
  modalBtnCls.addEventListener('click', closeModal);
  modal.classList.remove('hi-backdrop');
}



function closeModal() {
  modalBtnCls.removeEventListener('click', closeModal);
  modal.classList.add('hi-backdrop');
}