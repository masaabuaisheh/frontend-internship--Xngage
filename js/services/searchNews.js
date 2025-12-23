import {
  searchButton,
  searchIcon,
  searchForm,
  buttonPrimary,
  buttonSearch,
  closeBtn,
  searchField,
} from "../domElements.js";

import { fetchRecentNews, fetchNewsQuery } from "../api/jqueryApi.js";

// console.log(searchForm);

searchButton.addEventListener("click", () => {
  searchIcon.style.display = "none";
  searchForm.style.display = "block";
  buttonPrimary.style.display = "none";
  buttonSearch.style.display = "block";
  buttonSearch.style.padding = "10px 20px";
  buttonSearch.style.border = "1px solid #003150";
  buttonSearch.style.borderRadius = "5px";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  searchForm.style.display = "none";
  searchIcon.style.display = "block";
  buttonSearch.style.display = "none";
  buttonPrimary.style.display = "block";
  closeBtn.style.display = "none";
  initData();
});

buttonSearch.addEventListener("click", async () => {
  const query = searchField.value.trim();

  if (query == "") {
    initData();
  }
  
  if (query !== "") {
    try {
      const news = await fetchNewsQuery(query);
      renderNews(news);
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  }
});

function renderNews(posts) {
  const container = document.querySelector(".news-cards");

  if (!container || !Array.isArray(posts)) return;

  container.style.gridTemplateColumns = "1fr 1fr";
  container.innerHTML = "";

  posts.forEach((post) => {
    container.innerHTML += `
      <div class="new-card">
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

async function initData() {
  const news = await fetchRecentNews();
  renderNews(news);
}

async function init() {
  try {
    await initData();
  } catch (err) {
    console.error("Something went wrong", err);
  }
}

init();
