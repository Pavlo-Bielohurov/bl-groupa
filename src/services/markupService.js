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
