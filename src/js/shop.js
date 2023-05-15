import './helpers/header';
import './nav-menu';

const containerShoppingList = document.querySelector('.ulShoppingList');
const deleteEl = document.querySelector('.delete-btn');
const emptyListEl = document.querySelector('.emptyList');
const support = document.querySelector('.js-support');
let screenWidth = window.innerWidth;

support.classList.add('support-shop-wrapper');
console.dir(emptyListEl);
const example = [
  {
    id: '643282b1e85766588626a07a',
    title: 'DAISY JONES & THE SIX',
    author: 'Taylor Jenkins Reid',
    bookImage:
      'https://storage.googleapis.com/du-prd/books/images/9781524798628.jpg',
    categoryName: 'Combined Print and E-Book Fiction',
    description:
      'A fictional oral history charting the rise and fall of a ’70s rock ’n’ roll band.',
    buyLinks: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Daisy-Jones-Taylor-Jenkins-Reid/dp/1524798622?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781524798642?at=10lIEQ',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781524798642&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DDAISY%2BJONES%2B%2526%2BTHE%2BSIX',
      },
    ],
  },
  {
    id: '643282b1e85766588626a0a8',
    title: 'IT STARTS WITH US',
    author: 'Colleen Hoover',
    bookImage:
      'https://storage.googleapis.com/du-prd/books/images/9781668001226.jpg',
    categoryName: 'Combined Print and E-Book Fiction',
    description:
      'In the sequel to “It Ends With Us,” Lily deals with her jealous ex-husband as she reconnects with her first boyfriend.',
    buyLinks: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/1668001225?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781668001226?at=10lIEQ',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781668001226&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BSTARTS%2BWITH%2BUS',
      },
    ],
  },
  {
    id: '643282b1e85766588626a0c8',
    title: 'LESSONS IN CHEMISTRY',
    author: 'Bonnie Garmus',
    bookImage:
      'https://storage.googleapis.com/du-prd/books/images/9780385547345.jpg',
    categoryName: 'Combined Print and E-Book Fiction',
    description:
      'A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.',
    buyLinks: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/dp/038554734X?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780385547345?at=10lIEQ',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780385547345&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DLESSONS%2BIN%2BCHEMISTRY',
      },
    ],
  },
  {
    id: '643282b2e85766588626a0e6',
    title: 'IT ENDS WITH US',
    author: 'Colleen Hoover',
    bookImage:
      'https://storage.googleapis.com/du-prd/books/images/9781501110375.jpg',
    categoryName: 'Combined Print and E-Book Fiction',
    description:
      'A battered wife raised in a violent home attempts to halt the cycle of abuse.',
    buyLinks: [
      {
        name: 'Amazon',
        url: 'http://www.amazon.com/Ends-Us-Novel-Colleen-Hoover-ebook/dp/B0176M3U10?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781501110368?at=10lIEQ',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781501110368&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DIT%2BENDS%2BWITH%2BUS',
      },
    ],
  },
];

function createMarkupShoppingList(arr) {
  return arr
    .map(
      ({
        id,
        title,
        author,
        bookImage,
        categoryName,
        description,
        buyLinks: [
          { name: amazon, url: amazonUrl },
          { name: apple, url: appleUrl },
          { name: book, url: bookUrl },
        ],
      }) =>
        `<li class="item-shoppingList" id = '${id}'>
                <img class="pict-shoppingList" src="${bookImage}" alt="img"></img>
                <div class="content-container-shoppingList">
                    <div class="title-delete-shoppingList">
                        <div class="title-shoppingList">
                            <h3 class="shop-book-title js-book-title">${title}</h3>
                            <p class="shop-sub-title js-book-subtitle">${categoryName}</p>
                        </div>
                        <a class='delete-btn'>
                            <svg class="dump" width="20" height="20" >
        <use href="./img/sprite.svg#dump"></use>
                    </a>
                        
                    </div>
                    <p class="discription-shoppinglist js-description">${description}</p>
                    <div>
                    <div class="autor-link-shoppingList">
                        <p class="shop-book-autor">${author}</p>
                        <ul class="links-shoppingList">
                        <li class="shop-book-link amazon-link">     <a class="shop-a" href="${amazonUrl}"><img class="amazon" src="../img/icon-book-store/amazon.png" alt="${amazon}" width="32 "></a></li>
                        <li class="shop-book-link apple-store-link"><a class="shop-a" href="${appleUrl}"><img class="apple-store" src="../img/icon-book-store/apple-store.png" alt="${apple} " width="16"></a></li>
                        <li class="shop-book-link book-shop-link">  <a class="shop-a" href="${bookUrl}"><img class="book-shop" src="../img/icon-book-store/book-shop.png" alt="${book} " width="16"></a></li>
                        </ul>
                    </div> 
                    </div>
                </div>
            </li>`
    )
    .join('');
}

if (example.length > 0) {
  containerShoppingList.insertAdjacentHTML(
    'beforeend',
    createMarkupShoppingList(example)
  );
  const booksTitle = document.querySelectorAll('.js-book-title');
  const booksSubTitle = document.querySelectorAll('.js-book-subtitle');
  const bookDescription = document.querySelectorAll('.js-description');

  if (screenWidth <= 767) {
    sliceTitleLength(booksTitle);
    sliceSubTitleLength(booksSubTitle);
    sliceDescriptionLength(bookDescription);
  }
} else {
  emptyListEl.style.display = 'block';
}

function createMarkupPaginationSHopList() {}

function sliceTitleLength(ellArr) {
  for (let i = 0; i < ellArr.length; i++) {
    const bookTitleArr = ellArr[i].textContent.split('');
    if (bookTitleArr.length > 14) {
      const sliceTitelArr = bookTitleArr.slice(0, 16);
      const sliseTitle = sliceTitelArr.join('');
      ellArr[i].textContent = `${sliseTitle}...`;
    }
  }
}

function sliceSubTitleLength(ellArr) {
  for (let i = 0; i < ellArr.length; i++) {
    const bookSubTitleArr = ellArr[i].textContent.split('');
    if (bookSubTitleArr.length > 21) {
      const sliceSubTitelArr = bookSubTitleArr.slice(0, 21);
      const sliseSubTitle = sliceSubTitelArr.join('');
      ellArr[i].textContent = `${sliseSubTitle}...`;
    }
  }
}
function sliceDescriptionLength(ellArr) {
  for (let i = 0; i < ellArr.length; i++) {
    const bookDescription = ellArr[i].textContent.split('');
    if (bookDescription.length > 83) {
      const sliceDescriptionArr = bookDescription.slice(0, 90);
      const sliseDescription = sliceDescriptionArr.join('');
      ellArr[i].textContent = `${sliseDescription}...`;
    }
  }
}
