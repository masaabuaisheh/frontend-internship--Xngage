import FeaturedCategories from "./FeaturedCategories";

import "./Products.css";

import ProductImage from "../../assets/images/products-bg-gray.png";
import BoilerImage from "../../assets/images/boiler.jpg";
import BurnersImage from "../../assets/images/burners.jpg";
import ControlsImage from "../../assets/images/control.jpg";
import HeatRecoveryImage from "../../assets/images/heat_recovery.jpg";
import WaterSystemImage from "../../assets/images/water_system.jpg";
import ExhaustSolutionImage from "../../assets/images/wall_stack.jpg";
import ServiceImage from "../../assets/images/waterloo.jpg";

export default function Products() {
  return (
    <section className="product-sec">
      <picture className="products-bg">
        <source media="(min-width: 1024px)" srcSet={ProductImage} />
        <source media="(min-width: 768px)" srcSet={ProductImage} />
        <img src={ProductImage} alt="Product section image" loading="lazy" />
      </picture>
      <div className="container product-title">
        <h2>Products</h2>
      </div>

      <div className="container featured-categories">
        <div className="featured-categories-title">
          <h2>Featured Categories</h2>
        </div>
        <div className="categories-items">
          <FeaturedCategories src={BoilerImage} title="Boilers" />
          <FeaturedCategories src={BurnersImage} title="Burners" />
          <FeaturedCategories src={ControlsImage} title="Controls" />
          <FeaturedCategories src={HeatRecoveryImage} title="Heat Recovery" />
          <FeaturedCategories src={WaterSystemImage} title="Water Systems" />
          <FeaturedCategories
            src={ExhaustSolutionImage}
            title="Exhaust Solutions"
          />
          <FeaturedCategories src={ServiceImage} title="Parts & Service" />
        </div>
      </div>
    </section>
  );
}
