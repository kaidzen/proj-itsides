import { getBookById } from './get-data'; 
import { Notify } from 'notiflix';
import scrollLock from 'scroll-lock';

import icon from './img/icon-book-store/amazon.png';
import appleshop from './img/icon-book-store/apple-store.png';
import boockshop from './img/icon-book-store/book-shop.png';

const bookGet = {
  getBookById, 
};

Notify.init({ showOnlyTheLastOne: true, clickToClose: true });

let shoppingList = [];
let shoppingBook = {};

shoppingList = JSON.parse(localStorage.getItem('shopping-list'));
if (shoppingList === null) {
  shoppingList = [];
}

const dom = {
  closeModalBtn: document.querySelector('.modal-btn'),
  backdrop: document.querySelector('.hi-backdrop'),
  informModalText: document.querySelector('.modal-text'),
  modalIconCardBoock: document.querySelector('.modal-content'),
  addToShopBtn: document.querySelector('.openmodal-btn'),
};

dom.closeModalBtn.addEventListener('click', onModalClose);
dom.backdrop.addEventListener('click', onBackdropClick);
dom.addToShopBtn.addEventListener('click', buttonAddListAction);

function onModalOpen() {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
  dom.informModalText.style.display = 'none';
  dom.addToShopBtn.textContent = 'Add to shopping list';
  scrollLock.disablePageScroll(document.body);
  isThisBookExist();
}

function onModalClose() {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
  scrollLock.enablePageScroll(document.body);
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onModalClose();
  }
}

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  if (event.code === ESC_KEY_CODE) {
    onModalClose();
  }
}

function buttonAddListAction() {
  if (dom.addToShopBtn.classList.contains('openmodal-btn')) {
    openModalBtn();
    addToShoppingList();
  } else {
    closeModalBtn();
    removeShoppingList();
  }
}

function openModalBtn() {
  onOpenFunc();
  dom.addToShopBtn.addEventListener('click', buttonAddListAction);
}

function closeModalBtn() {
  onCloseFunction();
  dom.addToShopBtn.addEventListener('click', buttonAddListAction);
}

function onOpenFunc() {
  dom.addToShopBtn.textContent = 'remove from the shopping list';
  dom.informModalText.style.display = 'block';
  dom.addToShopBtn.classList.add('closemodal-btn');
  dom.addToShopBtn.classList.remove('openmodal-btn');
}

function onCloseFunction() {
  dom.informModalText.style.display = 'none';
  dom.addToShopBtn.textContent = 'Add to shopping list';
  dom.addToShopBtn.classList.remove('closemodal-btn');
  dom.addToShopBtn.classList.add('openmodal-btn');
}

function renderingBooksCard(book) {
    const markup = modalCardBook(book);
    dom.modalIconCardBoock.innerHTML = markup;
    dom.addToShopBtn = document.querySelector('.openmodal-btn');
    dom.addToShopBtn.addEventListener('click', buttonAddListAction);
  }

  function modalCartBoock(book) {
    return  `
            <div class="modal-content-card">
            <div class="modal-content-img">
                <img class='modal-content-pict' src="${book.book_image}" alt="${book.title}"/>
            </div>
            <div class="modal-content-text">
                <h2 class="modal-content-titl"><b>${book.title}</b></h2>
                <p class="modal-content-autur"><b>${book.author}</b></p>
            <p class="modal-content-abst"><b>${book.description}</b></p>
            <ul class="modal-link">
              <li>
                <a class="modal-link" href="${book.buy_links[0].url}" target="_blank">
                  <img class="modal-link-icon" src="${icon}" srcset="${icon}" alt="amazon" width="62" height="19"></img>
                  </a>
              </li>
              <li>
                    <a class="modal-link" href="${book.buy_links[1].url}" target="_blank">
                        <img class="modal-link-icon" src="${appleshop}}" srcset="${appleshop}" alt="apple shop" width="33" height="32>
                        </img>
                        </a>
              </li>
              <li>
                  <a class="modal-link" href="${book.buy_links[4].url}" target="_blank">
                        <img class="modal-link-icon" src="${boockshop}" srcset="${boockshop}" alt="book shop" width="38" height="36">
                        </img>
                        </a>
                </li>
                </ul>
              </div>
             </div>`;
}
//  function modalCardBook(book) {
//    return `
//      <div class="card-modal">
//        <button class="close-button" type="button" aria-label="close-modal"></button>
//        <img src="${book.bookImage}" alt="${book.title}" class="modal-book-image" />
//        <div class="modal-book-info">
//          <h2 class="modal-book-title">${book.title}</h2>
//          <p class="modal-book-author">Author: ${book.author}</p>
//          <p class="modal-book-description">${book.description}</p>
//          <div class="modal-book-buy-links">
//            <h3 class="buy-links-header">Buy Links:</h3>
//            <ul class="buy-links-list">
//             ${renderBuyLinks(book.buyLinks)}
//            </ul>
//          </div>
//        </div>
//      </div>
//    `;
//  }
//
//  function renderBuyLinks(buyLinks) {
//    return buyLinks
//      .map((link) => {
//        const { name, url } = link;
//        let iconUrl = '';
//        if (name === 'Amazon') {
//          iconUrl = icon;
//        } else if (name === 'Apple Books') {
//          iconUrl = appleshop;
//        } else if (name === 'Bookshop') {
//          iconUrl = boockshop;
//        }
//        return `
//          <li class="buy-link-item">
//            <a href="${url}" target="_blank" class="buy-link">
//              <img src="${iconUrl}" alt="${name}" class="buy-link-icon" />
//              <span>${name}</span>
//            </a>
//          </li>
//        `;
//      })
//      .join('');
//  }
  
  function isThisBookExist() {
    const bookId = location.href.split('=')[1];
    bookGet.getBookById(bookId)
      .then((book) => {
        shoppingBook = book;
        renderingBooksCard(book);
      })
      .catch((error) => {
        Notify.failure('Oops, something went wrong!');
        console.log(error);
      });
  }
  
  function addToShoppingList() {
    shoppingList.push(shoppingBook);
    localStorage.setItem('shopping-list', JSON.stringify(shoppingList));
    Notify.success('Added to shopping list!');
  }
  
  function removeShoppingList() {
    const bookId = location.href.split('=')[1];
    shoppingList = shoppingList.filter((book) => book.id !== bookId);
    localStorage.setItem('shopping-list', JSON.stringify(shoppingList));
    Notify.success('Removed from shopping list!');
  }
  
  