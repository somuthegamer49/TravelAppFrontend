import React, { Fragment, useContext } from "react";
import { CategoryContext } from "../../context/category-context";
import { useNavigate } from "react-router-dom";
const Hotelcard = ({ hotels }) => {
  const { hotelCardByCat } = useContext(CategoryContext);
  const navigate = useNavigate()
  const hotelClick = (hotelname,id)=>{
    navigate(`/hotels/${hotelname}/${id}`)
  }
  return (
    <Fragment>
      {hotelCardByCat.length > 0 ? (
        hotelCardByCat.map((hotel) => {
          return (
            <div
              className="relative hotelcard-container shadow cursor-pointer"
              style={{
                marginRight: "2rem",
                display: "inline-block",
                marginBottom: "2rem",
              }}
            >
              <div onClick={()=>hotelClick(hotel.name,hotel._id)}>
                <img className="img" src={hotel.image} alt="hotelcard" />
                <div className="hotelcard-details">
                  <div className="d-flex align-center">
                    <span className="location">
                      {hotel.address}, {hotel.state}
                    </span>
                    <span className="rating d-flex align-center">
                      <span class="material-icons-outlined">star</span>
                      <span>{hotel.rating}</span>
                    </span>
                  </div>
                  <p className="hotel-name">{hotel.name}</p>
                  <p className="price-details">
                    <span className="price">Rs. {hotel.price}</span>
                    <span>Night</span>
                  </p>
                </div>
                <div className="wishlist">
                  <button className="button btn-wishlist absolute">
                    <span class="material-icons-outlined favorite">
                      favorite
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : hotels.length > 0 ? (
        hotels.map((hotel) => {
          return (
            <div
              className="relative hotelcard-container shadow cursor-pointer"
              style={{
                marginRight: "2rem",
                display: "inline-block",
                marginBottom: "2rem",
              }}
            >
              <div onClick={()=>hotelClick(hotel.name,hotel._id)}>
                <img className="img" src={hotel.image} alt="hotelcard" />
                <div className="hotelcard-details">
                  <div className="d-flex align-center">
                    <span className="location">
                      {hotel.address}, {hotel.state}
                    </span>
                    <span className="rating d-flex align-center">
                      <span class="material-icons-outlined">star</span>
                      <span>{hotel.rating}</span>
                    </span>
                  </div>
                  <p className="hotel-name">{hotel.name}</p>
                  <p className="price-details">
                    <span className="price">Rs. {hotel.price}</span>
                    <span>Night</span>
                  </p>
                </div>
                <div className="wishlist">
                  <button className="button btn-wishlist absolute">
                    <span class="material-icons-outlined favorite">
                      favorite
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1>No Data Available</h1>
      )}
    </Fragment>
  );
};

export default Hotelcard;
