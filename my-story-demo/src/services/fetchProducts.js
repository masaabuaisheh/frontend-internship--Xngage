import Get from "./request";

const productsApi = "https://dummyjson.com/products";

export default function fetchProducts() {
  return Get(productsApi);
}

export function fetchProduct(id) {
  return Get({ productsApi } / id);
}
