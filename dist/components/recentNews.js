import { fetchRecentNews } from "../services/api/fetchNews.js";
import { recentNews } from "../shared/selectors.js";
export function recentNewsList() {
    fetchRecentNews().then((data) => {
        data.results.forEach((news) => {
            var _a, _b, _c, _d;
            const image = (_a = news.image_url) !== null && _a !== void 0 ? _a : "../../assets/image/recentnews.jpg";
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
            <h3>${(_b = news.title) !== null && _b !== void 0 ? _b : "No Title"} </h3>
          </div>

          <div class="news-card-desc">
            <p>${(_c = news.description) !== null && _c !== void 0 ? _c : "No description available"}</p>
          </div>

          <div class="news-link">
            <a href=${(_d = news.link) !== null && _d !== void 0 ? _d : "#"} target="_blank">Read More &rarr;</a>
          </div>
        </div>
    `;
        });
    });
}
