// Імпорти запитів на бєк------------------------------------------

import { getProducts, getProductById } from './requests/products';

//Імпорти функцій

import { markupCard, markupProductById } from './services/markupService';

// -----------------------------------Task 1---------------------------------
getProducts().then(console.log);
const allProducts = document.querySelector('#allProducts');

getProducts().then(({ data: { products } }) => {
  const markup = markupCard(products);
  allProducts.insertAdjacentHTML('afterbegin', markup);
});

// -----------------------------------Task 2---------------------------------
const formSearch = document.querySelector('#singleProductForm');
const singleProduct = document.querySelector('#singleProduct');

formSearch.addEventListener('submit', handleSearch);

function handleSearch(evt) {
  evt.preventDefault();
  const id = evt.target.elements.id.value;
  getProductById(id).then(console.log);
  getProductById(id).then(({ data }) => {
    const markupElement = markupProductById(data);
    singleProduct.innerHTML = markupElement;
  });
  formSearch.reset();
}
