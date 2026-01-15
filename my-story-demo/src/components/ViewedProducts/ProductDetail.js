import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultImage from "../../assets/images/recentnews.jpg";
// import { fetchProduct } from "../../services/fetchProduct";
import Header from "../../layouts/Header/Header";

export default function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((product) => {
        console.log(product);
        setProduct(product);
        setDataIsLoaded(true);
      });
  }, []);

  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Please wait...</h1>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="view-product">
        <img
          className="product-image"
          src={product.thumbnail || product.images || defaultImage}
          alt={product.title}
          loading="lazy"
        />
        <div className="details-product">
          <p className="category">Category: {product.category}</p>
          <h3 className="details-product-title">{product.title}</h3>
          <h4 className="description">{product.description}</h4>
          <p className="price">Price: {product.price}</p>
        </div>
      </div>
    </>
  );
}
