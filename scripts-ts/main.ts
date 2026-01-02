import { contactUsButton } from "./components/contactUsPopup.js";
import { recentNewsList } from "./components/recentNews.js";
import { swiperNewItems } from "./components/swiper.js";

function initUI(): void {
  contactUsButton();
  swiperNewItems;
}

function initData(): void {
  // viewedProductsList();
  recentNewsList();
}

async function init(): Promise<void> {
  try {
    initUI();
    initData();
  } catch (err) {
    console.error("Something went wrong", err);
  }
}

init();
