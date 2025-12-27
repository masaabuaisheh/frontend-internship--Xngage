import { fetchRecentNews } from "../services/api/fetchNews.js";
import { recentNews } from "../shared/selectors.js";

export function recentNewsList() {
  fetchRecentNews().then((data) => {
    data.results.forEach((news) => {
      const image = news.image_url || "../../assets/image/recentnews.jpg";
      recentNews.innerHTML += `
        <div class="new-card swiper-slide">
          <div class="news-card-image">
            <img
              src="${image}" 
              alt="${news.title}"
              loading="lazy"
            />
          </div>

          <div class="news-card-title">
            <h3>${news.title}</h3>
          </div>

          <div class="news-card-desc">
            <p>${news.description}</p>
          </div>

          <div class="news-link">
            <a href=${news.link} target="_blank">Read More &rarr;</a>
          </div>
        </div>
    `;
    });
  });
}
