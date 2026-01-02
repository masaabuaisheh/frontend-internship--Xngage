var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { contactUsButton } from "./components/contactUsPopup.js";
import { recentNewsList } from "./components/recentNews.js";
import { swiperNewItems } from "./components/swiper.js";
function initUI() {
    contactUsButton();
    swiperNewItems;
}
function initData() {
    // viewedProductsList();
    recentNewsList();
}
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            initUI();
            initData();
        }
        catch (err) {
            console.error("Something went wrong", err);
        }
    });
}
init();
