import React, { useContext } from "react";
import { DateContext } from "../../context/date-context";
import Dateselector from "./../Dateselector/Dateselector";
const Finalprice = ({ singlehotel }) => {
  const { guests, dateDispatch } = useContext(DateContext);
  const { price, rating } = singlehotel;
  const guestsChange = (e) => {
    dateDispatch({
      type: "GUESTS",
      payload: e.target.value,
    });
  };
  return (
    <div className="price-details-container d-flex direction-column gap shadow">
      <div className="price-rating d-flex align-center justify-space-between">
        <p>
          <span className="fs-bold fs-large">Rs. {price}</span> Night
        </p>
        <span className="rating d-flex align-center">
          <span className="material-icons-outlined">star</span>
          <span>{rating}</span>
        </span>
      </div>
      <div className="d-flex direction-cloumn">
        <div className="grid-container-two-col selected-dates">
          <div className="check-in loc-container">
            <label className="label">Check In</label>
            <Dateselector checkinType="checkin" />
          </div>
        </div>
        <div>
          <div className="check-in loc-container">
            <label className="label">Check Out</label>
            <Dateselector checkinType="checkout" />
          </div>
        </div>
      </div>
      <div className="guests gutter-sm">
        <p>GUESTS</p>
        {guests <= 0 ? (
          <input
            className="guest-count-input"
            placeholder="Add Guests"
            defaultValue={guests}
            type="number"
            onChange={(e) => guestsChange(e)}
          />
        ) : (
          <span>{guests} guests</span>
        )}
      </div>
      <div>
        <button className="button btn-reserve btn-primary">Reserve</button>
      </div>
      <div className="price-distribution d-flex direction-column">
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Rs. {price} x 2 nights</span>
          <span className="span">Rs. {price * 2}</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Service Fee</span>
          <span className="span">Rs. 200</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Total</span>
          <span className="span">Rs. {price * 2 + 200}</span>
        </div>
      </div>
    </div>
  );
};

export default Finalprice;
