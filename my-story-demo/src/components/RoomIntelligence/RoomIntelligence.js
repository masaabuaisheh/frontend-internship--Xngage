import "./RoomIntelligence.css";

import PosterImage from "../../assets/images/thumbnail.jpeg";
import BoilerRoomVideo from "../../assets/videos/Hospital-Boiler-Room.mp4";

export default function RoomIntelligence() {
  return (
    <section>
      <div className="container room-intelligence">
        <div className="intel-section">
          <div className="prometha">
            <p>prometha</p>
          </div>
          <div className="intel-title">
            <h2>Boiler Room Intelligence at Your Fingertips</h2>
          </div>
          <div className="intel-content">
            <p>
              Ideal for any industry, Prometha offers users the ability to
              remotely monitor boiler systems from anywhere, providing alerts
              and actionable insights that help increase reliability.
              efficiency, safety and sustainability in the boiler room.
            </p>
          </div>
        </div>
        <div className="video-section">
          <video preload="none" height="340" poster={PosterImage} controls>
            <source src={BoilerRoomVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
