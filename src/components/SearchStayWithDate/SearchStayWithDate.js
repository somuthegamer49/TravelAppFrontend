import React, { useContext, useState, useEffect } from "react";
import Dateselector from "../Dateselector/Dateselector";
import { DateContext } from "../../context/date-context";
import { CategoryContext } from "../../context/category-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SearchStayWithDate = () => {
  const navigate = useNavigate()
  const [hotels, sethotels] = useState([]);
  const { State } = useContext(CategoryContext);
  const { destination, guests,isSearchResultOpen, dateDispatch } = useContext(DateContext);
  useEffect(() => {
    const getHotels = async () => {
      const response = await axios.get(`http://localhost:3500/api/hotels/`);
      const data = response.data;
      if (data) {
        sethotels(data);
      }
    };
    getHotels();
  }, [State]);
  const searchDest = (e) => {
    dateDispatch({
      type: "DESTINATION",
      payload: e.target.value,
    });
  };
  const addGuests = (e) => {
    dateDispatch({
      type: "GUESTS",
      payload: e.target.value,
    });
  };
  const searchClick = (address) => {
    dateDispatch({
      type: "DESTINATION",
      payload:address
    });
  };
  const handleDestinationFocus = () => {
    dateDispatch({
      type: "SHOW_SEARCH_RESULT",
    });
  };
  const SearchButton = ()=>{
    dateDispatch({
      type: "CLOSE_SEARCH_MODAL",
    });
    navigate(`/hotels/${destination}`)
  }
  const destinationoptions = hotels.filter((hotel) => {
    return (
      hotel.address.toLowerCase().includes(destination.toLowerCase()) ||
      hotel.city.toLowerCase().includes(destination.toLowerCase()) ||
      hotel.state.toLowerCase().includes(destination.toLowerCase()) ||
      hotel.country.toLowerCase().includes(destination.toLowerCase())
    );
  });
  return (
    <div className="destination-container">
      <div className="destination-options d-flex align-center">
        <div className="location-container">
          <label className="label">Where</label>
          <input
            value={destination}
            onChange={(e) => searchDest(e)}
            className="input search-dest"
            onFocus={handleDestinationFocus}
            placeholder="Search Destination"
            type="text"
            autoFocus
          />
        </div>
        <div className="location-container">
          <label className="label">Check In</label>
          <Dateselector checkinType="checkin" />
        </div>
        <div className="location-container">
          <label className="label">Check Out</label>
          <Dateselector checkinType="checkout" />
        </div>
        <div className="location-container">
          <label className="label">No. Of Guests</label>
          <input
            value={guests}
            onChange={(e) => addGuests(e)}
            className="input search-dest"
            placeholder="Add Guests"
            type="Number"
          />
        </div>
        <div className="search-container d-flex align-center" onClick={()=>SearchButton()}>
          <span className="search material-icons-outlined">search</span>
          <span>Search</span>
        </div>
      </div>
      {isSearchResultOpen && <div className="search-result-container">
        {destinationoptions &&
          destinationoptions.map((dest) => {
            return (
              <p onClick={() => searchClick(dest.address)}>
                {dest.address}, {dest.city}
              </p>
            );
          })}
      </div>}
    </div>
  );
};

export default SearchStayWithDate;
