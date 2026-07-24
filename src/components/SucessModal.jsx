import "./component-styles/successModal.css";

export const SuccessModal = ({ phone }) => {
  return (
    <section className="success-modal">

      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Payment Successful!</h1>

        <p className="success-message">
          Your booking has been confirmed.
        </p>

        <div className="success-details">

          <p>
            A confirmation has been sent to
          </p>

          <h2>{phone}</h2>

        </div>

        <p className="success-footer">
          Thank you for choosing our sports complex.
          We look forward to seeing you!
        </p>

      </div>

    </section>
  );
};