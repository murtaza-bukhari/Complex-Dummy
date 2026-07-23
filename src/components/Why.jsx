import "./component-styles/why.css";
import {
  FaHeart,
  FaRunning,
  FaUsers,
  FaLeaf
} from "react-icons/fa";

export const Why = () => {
  return (
    <section className="why">

      <div className="why-header">
        <p>WHY CHOOSE COMPLEX?</p>

        <h2>More Than Just A Sports Complex</h2>

        <span></span>

        <p className="why-description">
          Whether you're playing competitively or simply staying active,
          every visit contributes to a healthier body, a stronger mind,
          and a better lifestyle.
        </p>
      </div>

      <div className="why-cards">

        <div className="why-card">
          <div className="icon">
            <FaHeart />
          </div>

          <h3>Better Heart Health</h3>

          <p>
            Regular physical activity improves cardiovascular health
            and helps maintain long-term fitness.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">
            <FaRunning />
          </div>

          <h3>Stay Active</h3>

          <p>
            Enjoy football, cricket, tennis, padel and jogging
            in one modern facility.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">
            <FaUsers />
          </div>

          <h3>Build Connections</h3>

          <p>
            Meet new people, compete with friends and become
            part of an active sporting community.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">
            <FaLeaf />
          </div>

          <h3>Peaceful Environment</h3>

          <p>
            Surrounded by open farmland, enjoy sports away
            from the noise of the city.
          </p>
        </div>

      </div>

      <div className="quote">

        <h2>
          "One Hour On The Court Can Change Your Entire Day."
        </h2>

      </div>

      <div className="stats">

        <div>
          <h1>5+</h1>
          <p>Sports</p>
        </div>

        <div>
          <h1>500+</h1>
          <p>Visitors</p>
        </div>

        <div>
          <h1>24/7</h1>
          <p>Bookings</p>
        </div>

        <div>
          <h1>100%</h1>
          <p>Passion</p>
        </div>

      </div>

    </section>
  );
};