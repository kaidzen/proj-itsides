const listCategories = document.querySelector('.list-categories');
const btnSeemore = document.querySelector('.btn-seemore');
const title = document.querySelector('.title-section');

const BASE_URL = 'https://books-backend.p.goit.global/books';

async function getBooksBestsellers() {
  const resps = await fetch(`${BASE_URL}/top-books`);
  return resps.json();
}

getBooksBestsellers()
  .then(resp => {
    listCategories.insertAdjacentHTML(
      'beforeend',
      createMarkupAllBestsellers(resp)
    );
    const btnSeemore = document.querySelector('.btn-seemore');
  })
  .catch(err => console.log(err));

function createMarkupAllBestsellers(arr) {
  const markup = arr
    .map(
      ({ list_name, books }) => `<li class="item-category">
         <h3 class="title-category">${list_name}</h3>
         <ul class="list-books">${createMarkupOneCategory(books)}</ul>
        <button class="btn btn-seemore">See more</button>
  </li>`
    )
    .join('');
  return markup;
}

function createMarkupOneCategory(arr_books) {
  return arr_books
    .map(
      ({ author, book_image, title }) =>
        `<li class="item-book">
     <img class="pict-book" src="${book_image}" alt="${title}">
     <h4 class="title-book">${title}</h4>
     <p class="author">${author}</p>
    </li>`
    )
    .join('');
}
