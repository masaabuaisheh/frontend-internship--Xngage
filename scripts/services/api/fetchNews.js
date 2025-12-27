import { get } from "../request.js";

const newsApi =
  "https://newsdata.io/api/1/latest?apikey=pub_6617835c881e40668057769932b6c20e&q=ecommerce";

export function fetchRecentNews() {
  return get(newsApi);
}
