import './helpers/header';
import './nav-menu';
import './helpers/aside-support';
import './helpers/pagination-shop-list';
import { createMarkupShoppingList } from './helpers/markup-shop-list';
import { example, paginationMarcup } from "../js/helpers/pagination-shop-list";


const ulShoppingList = document.querySelector('.ulShoppingList')
const deleteEl = document.querySelector('.delete-btn');
let screenWidth = window.innerWidth;
const emptyListEl = document.querySelector('.emptyList')
const support = document.querySelector('.js-support');
const pagination = document.querySelector('.pagination-shop-list')
support.classList.add('support-shop-wrapper')

const perPage = 3;
let page = 0;
let currentPageArr;

support.classList.add('support-shop-wrapper');

function marcupShoppingList(){
  console.log('ex3',example)
  let long = example.length;
  paginationMarcup(long);
  
  currentPageArr = displayPagination(example, perPage, page);

if(example.length>0 && example.length<=3){
  ulShoppingList.innerHTML = createMarkupShoppingList(currentPageArr);
  pagination.style.display='none';
  emptyListEl.style.display='none';
} 
else if(example.length>=3){
  ulShoppingList.innerHTML = createMarkupShoppingList(currentPageArr);
  emptyListEl.style.display='none';
} else {
  emptyListEl.style.display='block';
  pagination.style.display='none';
}
}
marcupShoppingList();


ulShoppingList.addEventListener("click", currentBook);
function currentBook(event) {
  let idEl
    if (!event.target.classList.contains("delete-btn")) {
      return;
    } 
    
    idEl = event.target.parentNode.getAttribute("id")
    currentPageArr.forEach((el, i) =>{
        if (el.id == idEl) {example.splice(i, 1)}
        
      })
      console.log('example2',example)

      currentPageArr = displayPagination(example, perPage, page);
      marcupShoppingList();
      
      ulShoppingList.innerHTML=createMarkupShoppingList(currentPageArr)
      
  }
function displayPagination(arr, perPage, page){

    const start = perPage * page;
    const end = start + perPage;
    return arr.slice(start, end);
}
// console.log('leng',leng)
console.log('page',page)
pagination.addEventListener("click", onclickEl);
function onclickEl(event) {
  // console.log(Math.ceil(example.length/3))
  event.target.classList.toggle("selected-page");
  // event.target.style.backgroundColor = "black";
  let leng = Math.ceil(example.length/3)
  console.log('leng',leng)
  console.log('page',page)
    if (!event.target.classList.contains("btn-shop-list")) {
      return;
    } else if (event.target.textContent === '>'){
      if(leng === page+1){
        return
      } else page += 1;
    } else if (event.target.textContent === '<'){
      if(page === 0){
        return
      } else page -= 1;
  

    } else if (event.target.textContent === '>>'){

      page = leng-1;
    } else if (event.target.textContent === '<'){
      page -= 1;
    } else if (event.target.textContent === '<<'){

      page = 0;
    }
    else {page = event.target.textContent-1;}

    // event.target.classList.add('selected-page');
    marcupShoppingList()
  }  

  

  const booksTitle = document.querySelectorAll('.js-book-title');
  const booksSubTitle = document.querySelectorAll('.js-book-subtitle');
  const bookDescription = document.querySelectorAll('js-description');
console.log(bookDescription.textContent)
  if (screenWidth <= 767) {
    sliceTitleLength(booksTitle);
    sliceSubTitleLength(booksSubTitle);
    sliceDescriptionLength(bookDescription);
  
}

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