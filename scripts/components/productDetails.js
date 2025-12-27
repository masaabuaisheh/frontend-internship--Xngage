import { fetchProduct } from "../services/api/fetchProducts.js";
import { productInfo } from "../shared/selectors.js";

const queryString = new URLSearchParams(window.location.search);
const id = queryString.get("id");

export function viewProductDetails() {
  fetchProduct(id).then((product) => {
    const image =
      product.thumbnail ||
      product.images ||
      "../../assets/image/recentnews.jpg";
    productInfo.innerHTML += `
        <div class="view-product">
          <img class="product-image" src="${image}" alt="${product.title}" loading="lazy" />
          <div class="details-product"> 
            <p class="category">Category: ${product.category}</p>
            <h3 class="details-product-title">${product.title}</h3>
            <h4 class="description">${product.description}</h4>
            <p class="price">Price: ${product.price}</p>
          </div>
        </div>
      `;
  });
}

async function init() {
  try {
    viewProductDetails();
  } catch (err) {
    console.error("Something went wrong", err);
  }
}

init();
