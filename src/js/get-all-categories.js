import Notiflix from 'notiflix';
import { BASE_URL } from './helpers/get-bestsellers';
import {
  createMarkupAllBestsellers,
  listCategories,
  titleSection,
} from './helpers/get-bestsellers';
import {
  clearMarkupBestsellers,
  listSelectCategory,
  onLoadOneCategory,
} from './helpers/get-selected-category';

const allCategories = document.querySelector('.link-allcategories');

allCategories.addEventListener('click', getBestsellers);

function getBestsellers() {
  clearMarkupBestsellers();
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
  titleSection.innerHTML = `Best Sellers <span class="titel-span">Books</span>`;
}

listSelectCategory.addEventListener('click', onLoadOneCategory);
