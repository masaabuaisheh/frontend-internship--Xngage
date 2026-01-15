import { useEffect, useState } from "react";

import fetchRecentNews from "../../services/fetchNews";
import defaultImage from "../../assets/images/recentnews.jpg";
import { swiperNewItems } from "../Swiper/Swiper";

export default function RecentNewsList() {
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

  useEffect(() => {
    if (items.length > 0) {
      const swiper = swiperNewItems();

      return () => {
        swiper.destroy(true, true);
      };
    }
  }, [items]);

  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Please wait....</h1>
      </div>
    );
  }

  return (
    <>
      {items.map((item, index) => (
        <div className="swiper-slide new-card" key={index}>
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
    </>
  );
}
