import "./page-styles/facilities.css";

import { useNavigate } from "react-router-dom";

export const Facilities = () => {

  const facilities = [
    {
      name: "Futsal",
      image: "/images/image0.png",
      description:
        "Experience fast-paced futsal on a premium court designed for competitive matches and training."
    },
    {
      name: "Cricket",
      image: "/images/image1.png",
      description:
        "A high-quality cricket facility built for practice sessions, matches and cricket enthusiasts."
    },
    {
      name: "Tennis",
      image: "/images/image2.png",
      description:
        "Enjoy professional tennis courts suitable for casual games and serious training."
    },
    {
      name: "Padel",
      image: "/images/image3.png",
      description:
        "Try the fastest-growing racket sport with our modern padel courts."
    },
    {
      name: "Jogging Track",
      image: "/images/image4.png",
      description:
        "A dedicated track designed for running, fitness and outdoor endurance activities."
    }
  ];

  const navigate = useNavigate();

  return (
    <section className="facilities-section">

      <h1>Our Facilities</h1>

      <div className="facility-container">

        {facilities.map((facility, index) => (

          <article
            className={`facility-card ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
            key={facility.name}
          >

            <div className="facility-image">
              <img
                src={facility.image}
                alt={facility.name}
              />
            </div>


            <div className="facility-details">

              <h2>{facility.name}</h2>

              <p>
                {facility.description}
              </p>


              <button onClick={() => navigate("/booking")}>
                Book Now
              </button>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
};