export async function fetchViewedProducts() {
  const url =
    "https://newsdata.io/api/1/latest?apikey=pub_6617835c881e40668057769932b6c20e&q=ecommerce";

  try {
    const response = await fetch(url);
    console.log("Response:", response);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    const products = data?.results;

    console.log("Parsed products:", products);

    return products;
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}
