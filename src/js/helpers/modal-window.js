import { getBookById } from './get-data'; 
import { Notify } from 'notiflix';
import scrollLock from 'scroll-lock';

const modalBtnCls = document.querySelector(".modal-btn");
const modal = document.querySelector('.backdrop');
const bookItems = document.querySelector('.js-list-books');
const URL = 'https://books-backend.p.goit.global/books/category?category=';
const bookGet = {
  getBookById, 
};

let idBookOne = [];


function disableScroll() {
  scrollLock.disablePageScroll();
}

function enableScroll() {
  scrollLock.enablePageScroll();
}

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

  disableScroll();
  document.addEventListener('keydown', handleKeyDown);
}

function closeModal() {
  modalBtnCls.removeEventListener('click', closeModal);
  modal.classList.add('hi-backdrop');
  enableScroll();
  document.removeEventListener('keydown', handleKeyDown);
}

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

function handleKeyDown(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

const addToShopBtn = document.querySelector('.add-modal-btn');
const modalText = document.querySelector('.modal-text');
addToShopBtn.addEventListener('click', toggleShoppingList);

function toggleShoppingList() {
  if (addToShopBtn.classList.contains('openmodal-btn')) {
    addToShoppingList();
  } else {
    removeFromShoppingList();
  }
}

function addToShoppingList() {
  addToShopBtn.textContent = 'Remove from the shopping list';
  modalText.style.display = 'block';
  addToShopBtn.classList.remove('openmodal-btn');
  addToShopBtn.classList.add('closemodal-btn');
  // треба написати ще додавання книги до списку покупок
}

function removeFromShoppingList() {
  addToShopBtn.textContent = 'Add to shopping list';
  modalText.style.display = 'none';
  addToShopBtn.classList.remove('closemodal-btn');
  addToShopBtn.classList.add('openmodal-btn');
  // треба написати ще логіку для видалення книги зі списку покупок
}