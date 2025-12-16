export function renderViewed(products) {
  const container = document.querySelector(".viewe.swiper-wrapper");

  console.log(container);
  if (!container || !Array.isArray(products)) return;

  products.forEach((product) => {
    container.innerHTML += `
     <div class="viewed-product swiper-slide">
              <div class="product-img">
                <img
                  src="${
                    product.image_url || "../assets/image/recentnews.jpg"
                  }" 
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
                  <p>${product.source_priority}</p>
                </div>
                <div class="view-details-btn">
                  <button type="button" 
                  onclick="window.open('${product.link}', '_blank');"
                 >View Details</button>
                </div>
              </div>
              <div class="product-badge">
                <p>${product.source_name}</p>
              </div>
            </div>
    `;
  });
}
