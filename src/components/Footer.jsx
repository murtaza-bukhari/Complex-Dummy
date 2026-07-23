import "./component-styles/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Complex</h2>

        <p>
          Premium sports facilities designed for athletes, families
          and everyone who enjoys an active lifestyle.
        </p>

        <div className="contact-info">

          <div className="contact-item">
            <h4>Phone</h4>
            <p>0000-0000000</p>
          </div>

          <div className="contact-item">
            <h4>Email</h4>
            <p>contact@complex.com</p>
          </div>

          <div className="contact-item">
            <h4>Location</h4>
            <p>Multan, Pakistan</p>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Complex. All Rights Reserved.</p>
      </div>

    </footer>
  );
};