import ProductsList from "./ProductsList";
import "./ViewedProducts.css";

export default function ViewedProducts() {
  return (
    <section>
      <div className="container recently-viewed swiper">
        <h2 className="recently-viewed-title">Recently Viewed Products</h2>
        <div className="viewed-products swiper">
          <div className="swiper-wrapper" id="viewed-products-wrapper">
            {/* Dynamic */}
            <ProductsList />
          </div>
        </div>
        <div className="slider">
          <a className="pro-prev swiper-button-prev">
            <i className="fa-solid fa-arrow-left"></i>
          </a>
          <a className="pro-next swiper-button-next">
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
