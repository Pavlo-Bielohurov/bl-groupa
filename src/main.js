// Імпорти запитів на бєк------------------------------------------

import { getProducts } from './requests/products';
import { markupCard } from './services/markupService';

// -----------------------------------Task 1---------------------------------
getProducts().then(console.log);
const allProducts = document.querySelector('#allProducts');

getProducts().then(({ data: { products } }) => {
  const markup = markupCard(products);
  allProducts.insertAdjacentHTML('afterbegin', markup);
});
