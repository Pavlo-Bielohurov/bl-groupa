// Імпорти запитів на бєк------------------------------------------

import { getProducts, getProductById, addProduct } from './requests/products';

//Імпорти функцій

import {
  markupCard,
  markupProductById,
  markupAddProduct,
} from './services/markupService';

// -----------------------------------Task 1---------------------------------
getProducts().then(console.log);
const allProducts = document.querySelector('#allProducts');

getProducts().then(({ data: { products } }) => {
  const markup = markupCard(products);
  // allProducts.insertAdjacentHTML('afterbegin', markup);
});

// -----------------------------------Task 2---------------------------------
const formSearch = document.querySelector('#singleProductForm');
const singleProduct = document.querySelector('#singleProduct');

// formSearch.addEventListener('submit', handleSearch);

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

// ----------------------Task 3 -----------------------

const newProductForm = document.querySelector('#newProductForm');
const newProductSection = document.querySelector('#newProductSection');

newProductForm.addEventListener('submit', createProduct);

function createProduct(event) {
  event.preventDefault();
  const title = event.target.elements.title.value;
  const price = event.target.elements.price.value;
  const description = event.target.elements.description.value;

  const newProduct = {
    title,
    price,
    description,
  };
  console.log(newProduct);
  addProduct(newProduct).then(({ data }) => {
    const markupNewCard = markupAddProduct(data);
    newProductSection.innerHTML = markupNewCard;
    newProductForm.reset();
  });
}
