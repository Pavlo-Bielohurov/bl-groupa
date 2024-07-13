import { URL_DUMMY } from '../services/api';

// --------------------------------Task 1------------------------------------------------
export async function getProducts() {
  return await URL_DUMMY.get('/products');
}

// --------------------------------Task 2------------------------------------------------

export async function getProductById(id) {
  return await URL_DUMMY.get(`/products/${id}`);
}
