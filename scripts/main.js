import { recentNewsList } from "./components/recentNews.js";
import { viewedProductsList } from "./components/viewedProducts.js";
import { contactUsButton } from "./components/contactUsPopup.js";
import { swiperNewItems } from "./components/swiper.js";

function initUI() {
  swiperNewItems;
  contactUsButton();
}

async function initData() {
  viewedProductsList();
  recentNewsList();
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
