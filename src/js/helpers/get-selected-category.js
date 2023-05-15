import Notiflix from 'notiflix';
import { openModal } from './modal-window';
import { getBookById } from './get-data';
import { listCategories, titleSection, BASE_URL } from './get-bestsellers';
const listSelectCategory = document.querySelector('.js-books-list');

listCategories.addEventListener('click', onLoadOneCategory);

function onLoadOneCategory(evt) {
  if (evt.target.classList.contains("js-item-book")){
    const bookCard = evt.target.closest('.item-book');

    const bookId = bookCard.dataset.id;
    getBookById(bookId).then(data => console.log(data));
    console.log(openModal());
      }
  // перевіряємо клік по кнопке
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  } else {
    // достаємо атрибут датасет з кнопки = назва категорії
    const titelCategory = evt.target.dataset.category;
    // приводимо назку категорії до значення, яке вставляємо в URL
    const selectCategory = titelCategory.split(' ').join('%20');

    // робимо масив зі словами з назви категорії
    const arrWordsTitle = titelCategory.split(' ');

    // знаходимо останній елемент масиву = останнє слово в назві категоріі
    const lastWord = arrWordsTitle[arrWordsTitle.length - 1];

    // знаходимо усі інші елементи масиву і з'єднаємо елементи в строку
    const titel = arrWordsTitle.slice(0, -1).join(' ');

    // робимо фетч запит
    async function getBooksOneCategory() {
      const resps = await fetch(
        `${BASE_URL}/category?category=${selectCategory}`
      );
      if (!resps.ok) {
        throw new Error();
      }
      return resps.json();
    }

    getBooksOneCategory()
      .then(resp => {
        //очищаемо розмітку
        clearMarkupBestsellers();

        // визиваємо функцію, яка змінює заголовок сторінки
        changeTitle(titel, lastWord);

        // додаємо розмітку за обранною категорією
        listSelectCategory.insertAdjacentHTML(
          'beforeend',
          createMarkupSelectCategory(resp)
        );
      })
      .catch(() => {
        Notiflix.Notify.failure(`Sorry, search failed. Please try again.`);
      });
    removeSeemoreListener();
  }
}

// функція, яка очищає розмітку
export function clearMarkupBestsellers() {
  listCategories.innerHTML = '';
}

//функція, яка знімає прослуховувач подій
function removeSeemoreListener() {
  listCategories.removeEventListener('click', onLoadOneCategory);
}

// розмітка за обранною категорією
function createMarkupSelectCategory(arr_select_books) {
  return arr_select_books
    .map(
      ({ author, book_image, title, _id }) =>
        `<li class="item-book-select" data-id="${_id}">
     <img class="pict-book" src="${book_image}" alt="${title}">
     <h4 class="title-book">${title}</h4>
     <p class="author">${author}</p>
    </li>`
    )
    .join('');
}

// зміна заголовка сторінки = назві обранної категорії
function changeTitle(beginWords, lastWord) {
  titleSection.innerHTML = `${beginWords} <span class="titel-span">${lastWord}</span>`;
}
