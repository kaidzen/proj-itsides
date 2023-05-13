import axios from 'axios';
import changeLastWordColor from './helpers/last-word-color';

const URL = 'https://books-backend.p.goit.global/books/category?category=';

const booksList = document.querySelector('.js-books-list');
const categoriesContainer = document.querySelector('.categories-list-js');

categoriesContainer.addEventListener('click', onCtegoryLinkClick);

async function getBooksByCategory(choisedCategory) {
  const response = await axios(`${URL}${choisedCategory}`);
  return response.data;
}

function onCtegoryLinkClick(e) {
  if (e.target.nodeName !== 'A') {
    return;
  }

  const selectedCategoryLink = document.querySelector(
    '.categories-list__item.is-active'
  );

  if (selectedCategoryLink) {
    selectedCategoryLink.classList.remove('is-active');
  }

  const parent = e.target.closest('.categories-list__item');
  parent.classList.add('is-active');

  const choisedCategory = e.target.textContent;
  getBooksByCategory(choisedCategory)
    .then(arr => {
      if (arr.length === 0) {
        return;
      }
      const categoryTitleText = arr[0].list_name;
      const categoryTitle = document.querySelector('.js-category-title');
      categoryTitle.textContent = categoryTitleText;

      changeLastWordColor(categoryTitle);
      const markup = createMarkupForBooksByCategory(arr);
      booksList.innerHTML = markup;
    })
    .catch(error => console.log(error));
}

function createMarkupForBooksByCategory(arr) {
  return arr
    .map(
      ({ book_image, title, list_name, author }) => `
        <li class="book-list__item">
            <a href="#">
                <div class="book-thumb">
                    <img
                    class="book-img"
                    src="${book_image}"
                    width="335"
                    alt=""
                    />
                    <div class="book-overlay">quick view</div>
                </div>
                <h3 class="book-tittle">${title}</h3>
                <p class="book-author">${author}</p>
            </a>
        </li>`
    )
    .join('');
}
