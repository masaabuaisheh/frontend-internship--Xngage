import "./Hero.css";
import BoilerRoom from "../../assets/images/boiler-room-interior.png";

export default function Hero() {
  function handleClick(event) {
    event.preventDefault();
    alert("Learn more Info");
  }

  return (
    <section className="hero">
      <picture className="hero-img">
        <source media="(min-width: 1024px)" srcSet={BoilerRoom} />
        <source media="(min-width: 768px)" srcSet={BoilerRoom} />
        <img src={BoilerRoom} alt="Boiler Room Solutions Hero" loading="lazy" />
      </picture>

      <div className="container hero-content">
        <h1>
          Comprehensive <br />
          Boiler Room Solutions
        </h1>
        <a href="" onClick={handleClick} className="learn-more-btn">
          Learn More
        </a>
      </div>
    </section>
  );
}
