import { get } from "../request.js";

const newsApi =
  "https://newsdata.io/api/1/latest?apikey=pub_6617835c881e40668057769932b6c20e&q=ecommerce";

// The format of the data returned from the server
interface Response {
  status: "success";
  totalResults: number;
  results: NewsList[];
}

export interface NewsList {
  image_url: string;
  title: string;
  description: string;
  link: string;
}

export function fetchRecentNews() {
  return get<Response>(newsApi);
}
