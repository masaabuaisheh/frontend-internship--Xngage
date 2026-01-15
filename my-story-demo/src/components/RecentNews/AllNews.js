import { useEffect, useState } from "react";
import defaultImage from "../../assets/images/recentnews.jpg";
import Header from "../../layouts/Header/Header";
import fetchRecentNews from "../../services/fetchNews";

export default function AllNews() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    fetchRecentNews()
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setItems(data.results);
        setDataIsLoaded(true);
      });
  }, []);

  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Please wait some time....</h1>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section>
          <div class="container recent-news">
            <div class="recent-news-header">
              <h2>All News</h2>
            </div>
            <div id="all-news-cards">
              {items.map((item, index) => (
                <div className="new-card" key={index}>
                  <div className="news-card-image">
                    <img
                      src={item.image_url || defaultImage}
                      alt={item.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="news-card-title">
                    <h3>{item.title}</h3>
                  </div>

                  <div className="news-card-desc">
                    <p>{item.description}</p>
                  </div>

                  <div className="news-link">
                    <a href={item.link} target="_blank">
                      Read More &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
