import { Routes, Route } from "react-router-dom";

import Header from "./layouts/Header/Header";
import Main from "./layouts/Main/Main";
import Footer from "./layouts/Footer/Footer";
import AllNews from "./components/RecentNews/AllNews";
import ProductDetail from "./components/ViewedProducts/ProductDetail";
import "./App.css";

function Layout() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/all-news" element={<AllNews />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
