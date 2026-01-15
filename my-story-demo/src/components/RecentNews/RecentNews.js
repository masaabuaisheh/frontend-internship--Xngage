import RecentNewsList from "./RecentNewsList";
import "./RecentNews.css";
import { Link } from "react-router-dom";

export default function RecentNews() {
  return (
    <section>
      <div className="container recent-news swiper">
        <div className="recent-news-header">
          <h2>Recent News</h2>
          <Link to="/all-news"> View All News &rarr;</Link>
        </div>
        <div className="news-cards swiper">
          <div className="swiper-wrapper" id="recent-news-wrapper">
            {/* dynamic  */}im
            <RecentNewsList />
          </div>
        </div>
        <div className="slider">
          <a className="prev swiper-button-prev">
            <i className="fa-solid fa-arrow-left"></i>
          </a>
          <a className="next swiper-button-next">
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
