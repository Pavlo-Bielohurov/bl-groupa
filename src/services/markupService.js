export function markupCard(products) {
  return products
    .map(({ title, images, description, rating, price, id, brand, stock }) => {
      return `<li data-product="${id}">
      <img src="${images[0]}" alt="${title}" width="300" />
      <h2>Brand:${brand}</h2>
      <p>Price:${price}</p>
      <p>Rating:${rating}</p>
      <p>Quantity:${stock}</p>
      <p>Description:${description}</p>
 </li>`;
    })
    .join('');
}

export function markupProductById({
  title,
  images,
  description,
  rating,
  price,
  id,
  brand,
  stock,
}) {
  return `<div data-product="${id}">
      <img src="${images[0]}" alt="${title}" width="300" />
      <h2>Brand:${brand}</h2>
      <p>Price:${price}</p>
      <p>Rating:${rating}</p>
      <p>Quantity:${stock}</p>
      <p>Description:${description}</p>
 </div>`;
}

export function markupAddProduct({ description, price, title }) {
  return `
  <h2>Brand:${title}</h2>
      <p>Price:${price}</p>
      <p>Description:${description}</p>
      `;
}
