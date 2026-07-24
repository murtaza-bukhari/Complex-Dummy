import { useState } from "react";

import { Form } from '../components/Form.jsx'
import { PaymentSection } from '../components/PaymentSection.jsx'
import { SuccessModal } from '../components/SucessModal.jsx'
import { ExpiredModal } from '../components/ExpiredModal.jsx'

export const Booking = () => {

  const [sport, setSport] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");

  const [showPayment, setShowPayment] = useState(false);

  const [paymentComplete, setPaymentComplete] = useState(false);
  const [reservationExpired, setReservationExpired] = useState(false);

  const handleReserve = () => {

    if (!sport || !date || !time || !phone) {
      alert("Please fill in all fields.");
      return;
    }

    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    setPaymentComplete(true);

    setTimeout(() => {
      resetBooking();
    }, 10000);
  };

  const handleTimerExpire = () => {
    setReservationExpired(true);

    setTimeout(() => {
      resetBooking();
    }, 10000);
  };

  const resetBooking = () => {
    setSport("");
    setDate("");
    setTime("");
    setPhone("");

    setShowPayment(false);
    setPaymentComplete(false);
    setReservationExpired(false);
  };

  if (paymentComplete) {
    return (
      <SuccessModal phone={phone} />
    );
  }

  if (reservationExpired) {
    return (
      <ExpiredModal />
    );
  }

  return (
    <div className="booking-page">

      {
        !showPayment ? (
          <Form
            sport={sport}
            setSport={setSport}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            phone={phone}
            setPhone={setPhone}
            onReserve={handleReserve}
          />
        ) : (
          <PaymentSection
            sport={sport}
            date={date}
            time={time}
            phone={phone}
            onPaymentComplete={handlePaymentComplete}
            onTimerExpire={handleTimerExpire}
          />
        )
      }

    </div>
  );
};