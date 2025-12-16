import { fetchRecentNews } from "./api/jqueryApi.js";
import { fetchViewedProducts } from "./api/asyncApi.js";

import { renderNews } from "./ui/renderNews.js";
import { renderViewed } from "./ui/renderViewed.js";

// import { swiperNewItems } from "./services/swiper.js";

import { initScrollListener } from "./services/scrollService.js";

import { Popup } from "./services/popupService.js";

import { contactUs } from "./services/contactUS.js";
import { formValidations } from "./services/formValidations.js";

// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs";

import { swiperNewItems } from "./services/swiper.js";
import { swiperRecentlyNews } from "./services/swiper.js";

function initUI() {
  const popup = new Popup(
    ".learn-more-btn",
    "Thank you for your interest. More details will be available shortly."
  );

  popup.init();

  initScrollListener();
  contactUs();
  formValidations();

  swiperNewItems;
  swiperRecentlyNews;
}

async function initData() {
  const news = await fetchRecentNews();
  renderNews(news);

  const viewed = await fetchViewedProducts();
  renderViewed(viewed);
}

async function init() {
  try {
    initUI();
    await initData();
  } catch (err) {
    console.error("Something went wrong", err);
  }
}

init();
