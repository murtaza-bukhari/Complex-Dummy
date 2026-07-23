import { useState } from "react";
import "./page-styles/contact.css";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <section className="contact-section">

      {!submitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>

          <h2>Contact Us</h2>

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <textarea
            placeholder="Tell us what you need..."
            rows="5"
            required
          />

          <button type="submit">
            Send Request
          </button>

        </form>
      ) : (
        <div className="success-message">

          <div className="success-circle">
            ✓
          </div>

          <h2>Request Sent</h2>

          <p>
            We will get in touch with you shortly.
          </p>

        </div>
      )}

    </section>
  );
};