import { fetchRecentNews } from "../services/api/fetchNews.js";
import { recentNews } from "../shared/selectors.js";
import { NewsList } from "../services/api/fetchNews.js";

export function recentNewsList(): void {
  fetchRecentNews().then((data) => {
    data.results.forEach((news: NewsList) => {
      const image = news.image_url ?? "../../assets/image/recentnews.jpg";

      if (!recentNews) {
        return;
      }

      recentNews.innerHTML += `
        <div class="new-card swiper-slide">
          <div class="news-card-image">
            <img
              src="${image}" 
              alt="${news.title} "
              loading="lazy"
            />
          </div>

          <div class="news-card-title">
            <h3>${news.title ?? "No Title"} </h3>
          </div>

          <div class="news-card-desc">
            <p>${news.description ?? "No description available"}</p>
          </div>

          <div class="news-link">
            <a href=${news.link ?? "#"} target="_blank">Read More &rarr;</a>
          </div>
        </div>
    `;
    });
  });
}
