import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import RoomIntelligence from "../../components/RoomIntelligence/RoomIntelligence";
import Solutions from "../../components/Solutions/Solutions";
import Products from "../../components/Products/Products";
import Discover from "../../components/Discover/Discover";
import RecentNews from "../../components/RecentNews/RecentNews";
import ViewedProducts from "../../components/ViewedProducts/ViewedProducts";

export default function Main() {
  return (
    <main>
      <Hero />
      <About />
      <RoomIntelligence />
      <Solutions />
      <RecentNews />
      <Products />
      <ViewedProducts />
      <Discover />
    </main>
  );
}
