import "./page-styles/about.css";

export const About = () => {
  return (
    <section className="about-section">

      <div className="about-card">

        <div className="about-image">

          <img
            src={`${import.meta.env.BASE_URL}images/first-sketch.png`}
            alt="First sketch of the sports complex"
          />

          <span>First Concept Sketch</span>

        </div>


        <div className="about-content">

          <h1>A Small Beginning</h1>

          <p>
            Every project starts with an idea. Before there were courts,
            facilities, and architectural plans, there was simply a rough
            sketch.
          </p>

          <p>
            This drawing represents the very first concept of the sports
            complex. It captures the excitement of imagining a place where
            people could train, compete, and enjoy sports together.
          </p>

          <p>
            Looking back at this sketch is a reminder that every completed
            project begins with a single vision. Watching that vision grow
            into something tangible has been one of the most rewarding parts
            of this journey.
          </p>

          <div className="signature">
            — The Beginning of the Journey
          </div>

        </div>

      </div>

    </section>
  );
};