import "./About.css";

export default function About() {
  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <section>
      <div className="container who-we-are">
        <h2 className="title">Who We Are</h2>
        <div className="info">
          <p>
            Founded in 1929, Cleaver-Brooks is a complete boiler room solutions
            provider that helps
            <span className="br-desktop"></span>
            businesses run better every day. It develops hot water and steam
            generation products
            <span className="br-desktop"></span> aimed at integrating and
            optimizing the total boiler/burner/control/stack exhaust system
            <span className="br-desktop"></span>
            to maximize energy efficiency and reliability while minimizing
            emissions.
          </p>
        </div>
        <div className="adv">
          <p>
            Our dedicated reps help you commission your system, obtain parts and
            service, and provide product training.
          </p>
          <a href="" onClick={handleClick}>
            <i className="fa-solid fa-magnifying-glass"></i>
            Find a Rep Near You
          </a>
        </div>
      </div>
    </section>
  );
}
