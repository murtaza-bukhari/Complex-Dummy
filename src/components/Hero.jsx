import { useEffect, useState } from "react";
import "./component-styles/hero.css";

import { useNavigate } from "react-router-dom";

const images = [
  "/images/hero-image0.png",
  "/images/hero-image1.png",
  "/images/hero-image2.png",
  "/images/hero-image3.png",
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <img
        className="hero-image"
        src={images[currentImage]}
        alt="Sports Complex"
      />

      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-subtitle">WELCOME TO</p>

          <h1>COMPLEX</h1>

          <h2>Where Passion Meets Performance</h2>

          <p className="hero-description">
            Premium sports facilities designed for athletes, families and
            everyone who enjoys an active lifestyle.
          </p>

          <div className="hero-buttons">
            <button onClick={() => navigate("/booking")}>Book Now</button>
            <button className="secondary" onClick={() => navigate("/facilities")}>Explore Facilities</button>
          </div>
        </div>

        <div className="scroll-indicator">
          <span></span>
          <p>Scroll</p>
        </div>
      </div>
    </section>
  );
};