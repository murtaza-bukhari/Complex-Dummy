import "./component-styles/location.css";

export const Location = () => {
  return (
    <section className="location">

      <div className="location-header">

        <p>A PLACE WORTH VISITING</p>

        <h2>Surrounded By Nature, Built For Sport</h2>

        <span></span>

        <p className="location-description">
          Nestled among peaceful farmland, our sports complex offers
          a refreshing escape from the city's hustle while remaining
          easily accessible. Train, compete and unwind in an open,
          natural environment.
        </p>

      </div>

      <div className="location-gallery">

        <img
          src={`${import.meta.env.BASE_URL}images/field0.png`}
          alt="Sports Complex View"
        />

        <img
          src={`${import.meta.env.BASE_URL}images/field1.png`}
          alt="Sports Complex Entrance"
        />

        <img
          src={`${import.meta.env.BASE_URL}images/field2.png`}
          alt="Sports Complex Surroundings"
        />

      </div>

      <div className="location-footer">

        <p>
          📍 Conveniently located with spacious surroundings,
          providing the perfect setting for sports, recreation,
          and community events.
        </p>

      </div>

    </section>
  );
}