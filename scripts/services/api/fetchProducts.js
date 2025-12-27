import { get } from "../request.js";

const productsApi = "https://dummyjson.com/products";

export function fetchProducts() {
  return get(productsApi);
}

export function fetchProduct(id) {
  return get(`${productsApi}/${id}`);
}
