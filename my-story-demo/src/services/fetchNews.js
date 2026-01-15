import Get from "./request";

const newsApi =
  "https://newsdata.io/api/1/latest?apikey=pub_6617835c881e40668057769932b6c20e&q=ecommerce";

export default function fetchNews() {
  return Get(newsApi);
}
