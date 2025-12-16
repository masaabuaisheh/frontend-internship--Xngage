export function renderNews(posts) {
  const container = document.querySelector(".swiper-wrapper");

  if (!container || !Array.isArray(posts)) return;

  posts.forEach((post) => {
    container.innerHTML += `
      <div class="new-card swiper-slide">
        <div class="news-card-image">
          <img
            src="${post.image_url || "../assets/image/recentnews.jpg"}" 
            alt="${post.title}"
            loading="lazy"
          />
        </div>

        <div class="news-card-title">
          <h3>${post.title}</h3>
        </div>

        <div class="news-card-desc">
          <p>${post.description}</p>
        </div>

        <div class="news-link">
          <a href="${post.link}" target="_blank">Read More &rarr;</a>
        </div>
      </div>
    `;
  });
}
