import { URL_DUMMY } from '../services/api';

// --------------------------------Task 1------------------------------------------------
export async function getProducts() {
  return await URL_DUMMY.get('/products');
}
