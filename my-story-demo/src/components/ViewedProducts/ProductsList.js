import { useEffect, useState } from "react";
import { swiperRecentlyProducts } from "../Swiper/Swiper";
import { useNavigate } from "react-router-dom";

import fetchProducts from "../../services/fetchProducts";
import defaultImage from "../../assets/images/recentnews.jpg";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  useEffect(() => {
    fetchProducts()
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
        setDataIsLoaded(true);
      });
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const swiper = swiperRecentlyProducts();

      return () => {
        swiper.destroy(true, true);
      };
    }
  }, [products]);

  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Please wait....</h1>
      </div>
    );
  }

  return (
    <>
      {products.map((product, index) => (
        <div className="swiper-slide viewed-product" key={index}>
          <div className="product-img">
            <img
              src={product.thumbnail || product.images || defaultImage}
              alt={product.title}
              loading="lazy"
            />
          </div>
          <div className="product-content">
            <div className="product-name">
              <h3>{product.title}</h3>
            </div>
            <div className="cp-part">
              <h4>CB Part #:</h4>
              <p>{product.price}</p>
            </div>
            <div className="view-details-btn">
              <button
                type="button"
                onClick={() => handleProductClick([product.id])}
              >
                View Details
              </button>
            </div>
          </div>
          <div className="product-badge">
            <p>{product.category}</p>
          </div>
        </div>
      ))}
    </>
  );
}
