import "./component-styles/form.css";

const availableSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];

export const Form = ({
  sport,
  setSport,
  date,
  setDate,
  time,
  setTime,
  phone,
  setPhone,
  onReserve,
}) => {
  return (
    <section className="booking-form">

      <div className="booking-header">
        <h1>Book Your Slot</h1>

        <p>
          Choose your preferred sport, date and time to reserve your
          playing slot.
        </p>
      </div>

      <div className="booking-grid">

        <div className="form-group">
          <label>Sport</label>

          <select
            value={sport}
            onChange={(e) => {
              setSport(e.target.value);
              setTime(""); // Reset selected time when sport changes
            }}
          >
            <option value="">Select Sport</option>
            <option value="Futsal">Futsal</option>
            <option value="Cricket">Cricket</option>
            <option value="Tennis">Tennis</option>
            <option value="Padel">Padel</option>
            <option value="Jogging Track">Jogging Track</option>
          </select>
        </div>

        <div className="form-group">
          <label>Date</label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Available Time</label>

          <select
            value={time}
            disabled={!sport || !date}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">Select Time</option>

            {availableSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Phone Number</label>

          <input
            type="tel"
            placeholder="0000-0000000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

      </div>

      <button
        className="reserve-btn"
        onClick={onReserve}
      >
        Reserve Slot
      </button>

    </section>
  );
};