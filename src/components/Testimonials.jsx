import "./component-styles/testimonials.css";

const testimonials = [
  {
    name: "Ahmed R.",
    role: "Futsal Player",
    review:
      "The futsal courts are always in excellent condition. Booking is simple and the atmosphere is fantastic."
  },
  {
    name: "Usman K.",
    role: "Cricket Enthusiast",
    review:
      "The cricket ground is spacious and perfect for weekend matches with friends and family."
  },
  {
    name: "Hassan A.",
    role: "Padel Player",
    review:
      "Modern courts, friendly staff and a great overall experience every single visit."
  },
  {
    name: "Ayesha N.",
    role: "Jogger",
    review:
      "The jogging track is clean, quiet and surrounded by beautiful scenery. A wonderful place to exercise."
  }
];

export const Testimonials = () => {
  return (
    <section className="testimonials">

      <div className="testimonial-header">
        <p>TESTIMONIALS</p>

        <h2>What Our Players Say</h2>

        <span></span>

        <p>
          Trusted by players, families and sports enthusiasts who
          choose Complex for recreation and competition.
        </p>
      </div>

      <div className="testimonial-grid">

        {testimonials.map((person, index) => (

          <div className="testimonial-card" key={index}>

            <div className="avatar"></div>

            <div className="stars">
              ★★★★★
            </div>

            <p className="review">
              "{person.review}"
            </p>

            <h3>{person.name}</h3>

            <span>{person.role}</span>

          </div>

        ))}

      </div>

    </section>
  );
};