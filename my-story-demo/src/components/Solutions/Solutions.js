import ItemSolution from "./ItemSolution";
import RentalImage from "../../assets/images/rental.png";
import CustomImage from "../../assets/images/custom-sol.png";

import "./Solutions.css";

export default function Solutions() {
  return (
    <section>
      <div className="container sol-section" id="solutions">
        <h2 className="sol-title">Solutions</h2>
        <ItemSolution
          label="Rentals"
          subTitle="We Provide. Nationwide."
          content="More than 1,500 CBRA representatives worldwide provide
              comprehensive, ongoing support—from commissioning your system, to
              providing parts and service after the sale, to product training."
          src={RentalImage}
          isReverse={false}
        />

        <ItemSolution
          label="Custom Solutions"
          subTitle="Lower Emissions."
          content="Cleaver-Brooks works with customers to custom tailor solutions
              that help them be more environmentally friendly, decrease fuel
              costs, increase efficiency, and meet ever-stringent guidelines."
          src={CustomImage}
          isReverse={true}
        />
      </div>
    </section>
  );
}
