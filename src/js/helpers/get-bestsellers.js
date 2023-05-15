import Notiflix from 'notiflix';

export const listCategories = document.querySelector('.js-books-list');

export const titleSection = document.querySelector('.js-category-title');
export const BASE_URL = 'https://books-backend.p.goit.global/books';

async function getBooksBestsellers() {
  const resps = await fetch(`${BASE_URL}/top-books`);
  if (!resps.ok) {
    throw new Error();
  }
  return resps.json();
}

getBooksBestsellers()
  .then(resp => {
    listCategories.insertAdjacentHTML(
      'beforeend',
      createMarkupAllBestsellers(resp)
    );
  })
  .catch(() => {
    Notiflix.Notify.failure(`Sorry, search failed. Please try again.`);
  });

function createMarkupAllBestsellers(arr) {
  const markup = arr
    .map(
      ({ list_name, books }) => `<li class="item-category">
         <h3 class="title-category">${list_name}</h3>
         <ul class="list-books">${createMarkupOneCategory(books)}</ul>
        <button class="btn btn-seemore" data-category="${list_name}">See more</button>
  </li>`
    )
    .join('');
  return markup;
}

function createMarkupOneCategory(arr_books) {
  return arr_books
    .map(
      ({ author, book_image, title, _id }) =>
        `<li class="item-book" data-id="${_id}">
     <img class="pict-book" src="${book_image}" alt="${title}">
     <h4 class="title-book">${title}</h4>
     <p class="author">${author}</p>
    </li>`
    )
    .join('');
}
