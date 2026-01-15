import DiscoverItem from "./DiscoverItem";

import "./Discover.css";

import ProductIndexImage from "../../assets/images/prod-index.png";
import FindRepo from "../../assets/images/find-aa-rep.png";

export default function Discover() {
  return (
    <section>
      <div className="container discover-more">
        <h2 className="discover-main-title">Discover More</h2>
        <div className="discover-grid">
          <DiscoverItem
            src={ProductIndexImage}
            tag="PRODUCT INDEX"
            title="Have Something in Mind?"
            description=" Lorem ipsum dolor sit amet consectetur adipiscing elit enam
                nonummy lorem ipsum dolor sit amet consectetur adipiscing elit
                enam."
            isLeft={true}
          />

          <DiscoverItem
            src={FindRepo}
            tag="FIND A REP"
            title={[
              "Over 1,500",
              <span className="br"></span>,
              "Reps Worldwide",
            ]}
            description="he Cleaver-Brooks Representative Association (CBRA) is the
                first and only dedicated sales and service rep network in the
                industry."
            isLeft={false}
          />
        </div>
      </div>
    </section>
  );
}
