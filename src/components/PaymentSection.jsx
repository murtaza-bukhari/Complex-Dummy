import { useEffect, useState } from "react";
import "./component-styles/paymentSection.css";

export const PaymentSection = ({
  sport,
  date,
  time,
  phone,
  onPaymentComplete,
  onTimerExpire,
}) => {

  const [timeLeft, setTimeLeft] = useState(1 * 60);

  useEffect(() => {

    const interval = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev <= 1) {
          clearInterval(interval);
          onTimerExpire();
          return 0;
        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="payment-section">

      <h1>Complete Your Payment</h1>

      <p className="payment-message">
        Your slot has been reserved. Please complete your payment
        within the remaining time.
      </p>

      <div className="booking-summary">

        <p><strong>Sport:</strong> {sport}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Phone:</strong> {phone}</p>

      </div>

      <div className="timer">

        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}

      </div>

      <button
        className="payment-btn"
        onClick={onPaymentComplete}
      >
        Proceed
      </button>

    </section>
  );
};