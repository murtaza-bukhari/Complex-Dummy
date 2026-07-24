import "./component-styles/expiredModal.css";

export const ExpiredModal = () => {
  return (
    <section className="expired-modal">

      <div className="expired-card">

        <div className="expired-icon">
          ✕
        </div>

        <h1>Reservation Expired</h1>

        <p className="expired-message">
          The 20 minute payment window has expired.
        </p>

        <div className="expired-details">

          <p>
            Your reserved slot has been released and is now
            available to reserve again.
          </p>

        </div>

        <p className="expired-footer">
          You can return to the booking form and reserve
          another slot at any time.
        </p>

      </div>

    </section>
  );
};