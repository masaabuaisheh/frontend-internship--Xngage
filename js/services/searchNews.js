const searchButton = document.querySelector(".search-button");
const search = document.querySelector(".search-button i");
const searchForm = document.querySelector(".search-form form");
const flexForm = document.querySelector(".search-form");
const searchField = document.getElementById("search-input");
const button1 = document.querySelector(".search-btn1");
const button = document.querySelector(".search-btn");
const closeBtn = document.querySelector(".close-btn");

console.log(searchForm);

searchButton.addEventListener("click", () => {
  search.style.display = "none";
  searchForm.style.display = "block";
  button.style.display = "none";
  button1.style.display = "block";
  button1.style.padding = "10px 20px";
  button1.style.border = "1px solid #003150";
  button1.style.borderRadius = "5px";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  searchForm.style.display = "none";
  search.style.display = "block";
  button1.style.display = "none";
  button.style.display = "block";
  closeBtn.style.display = "none";
  initData();
});

button1.addEventListener("click", async () => {
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

//  News Search
function fetchNewsQuery(query) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://newsdata.io/api/1/latest?apikey=pub_8777d81f07194323b6a7a289400a7cd3&q=ecommerce+${query}`,
      type: "GET",
      success: (data) => {
        resolve(data.results);
      },
      error: (err) => reject(err),
    });
  });
}

function fetchRecentNews() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "https://newsdata.io/api/1/latest?apikey=pub_8777d81f07194323b6a7a289400a7cd3&q=ecommerce",
      type: "GET",
      success: (data) => resolve(data.results),
      error: (err) => reject(err),
    });
  });
}

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
