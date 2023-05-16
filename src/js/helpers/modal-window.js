import { getBookById } from './get-data'; 
import { Notify } from 'notiflix';
import scrollLock from 'scroll-lock';

const modalBtnCls = document.querySelector(".modal-btn");
const modal = document.querySelector('.backdrop');
const modalContentBody = document.querySelector('.modal-content-body');

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

function modalCartBoock(book) {
  return  `
          <div class="modal-content-card">
          
          <div class="modal-content-img">
              <img class='modal-content-pict' src="${book.bookImage}" alt="${book.title}"  />
          </div>
          <div class="modal-content-text">
              <h2 class="modal-content-titl"><b>${book.title}</b></h2>
              <p class="modal-content-autur"><b>${book.author}</b></p>
      <p class="modal-content-abst"><b>${book.description}</b></p>
      <ul class="modal-link">
          <li>
              <a class="modal-link" href="${book.buyLinks[0].url}" target="_blank">
                  <img class="modal-link-icon"
                          src="./img/icon-book-store/amazon.png"
                          alt="amazon" width="62" height="19"></img></a>
          </li>
          
              <li>
                  <a class="modal-link" href="${book.buyLinks[1].url}" target="_blank">
                      <img class="modal-link-icon"
                          src="./img/icon-book-store/apple-store.png"
                          alt="apple shop" width="33" height="32
                          ></img></a>
              </li>

              <li>
                  <a class="modal-link" href="${book.buyLinks[2].url}" target="_blank">
                      <img class="modal-link-icon"
                          src="./img/icon-book-store/book-shop.png"
                          alt="book shop" width="38" height="36"
                          ></img></a>
              </li>
      </ul>

          </div>
      </div>`;
}

function renderBoocksCard(book){
  modalContentBody.innerHTML = modalCartBoock(book);
}


export async function openModal(bookId) {
  modalBtnCls.addEventListener('click', closeModal);
  modal.classList.remove('hi-backdrop');

  disableScroll();
  document.addEventListener('keydown', handleKeyDown);
  
  renderBoocksCard(bookId)
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