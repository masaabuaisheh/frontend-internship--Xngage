// fetch UI Render
import { fetchProducts } from "../services/api/fetchProducts.js";
import { viewedProducts } from "../shared/selectors.js";

export function viewedProductsList() {
  fetchProducts().then((data) => {
    data.products.forEach((product) => {
      const image =
        product.thumbnail ||
        product.images ||
        "../../assets/image/recentnews.jpg";

      const productLink = `../../views/pages/product-details.html?id=${product.id}`;

      viewedProducts.innerHTML += `
        <div class="viewed-product swiper-slide">
          <div class="product-img">
            <img
              src="${image}" 
              alt="${product.title}"
              loading="lazy"
            />
          </div>
          <div class="product-content">
            <div class="product-name">
              <h3>${product.title}</h3>
            </div>
            <div class="cp-part">
              <h4>CB Part #:</h4>
              <p>${product.price}</p>
            </div>
            <div class="view-details-btn">
              <button type="button" 
                onclick="window.open('${productLink}', '_blank');"
              >View Details</button>
            </div>
          </div>
          <div class="product-badge">
            <p>${product.category}</p>
          </div>
        </div>
      `;
    });
  });
}
