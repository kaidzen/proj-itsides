import axios from 'axios';

const URL = 'https://books-backend.p.goit.global/books/category-list';

const categoriesContainer = document.querySelector('.categories-list-js');

const getCategoriesList = async () => {
  try {
    const response = await axios(URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

function createMurkupForCategoryList(arr) {
  return arr
    .map(
      el =>
        `<li class="categories-list__item"><a href="#">${el.list_name}</a></li>`
    )
    .join('');
}

getCategoriesList().then(categoriesListArray =>
  categoriesContainer.insertAdjacentHTML(
    'beforeend',
    createMurkupForCategoryList(categoriesListArray)
  )
);
