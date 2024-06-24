import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./../../components/navbar/Navbar";
import Hotelimages from "./../../components/Hotelimages/Hotelimages";
import Hoteldetails from "./../../components/Hoteldetails/Hoteldetails";
import Finalprice from "../../components/Finalprice/Finalprice";
const Singlehotel = () => {
  const { hotelId } = useParams();
  const [singlehotel, setsinglehotel] = useState();
  useEffect(() => {
    const getHotelById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3500/api/hotels/${hotelId}`
        );
        const data = response.data;
        setsinglehotel(data);
      } catch (err) {
        console.log(err);
      }
    };
    getHotelById();
  }, [hotelId]);

  return (
    <Fragment>
      <Navbar />
      <main className="single-hotel-page">
        {singlehotel && (
          <p className="single-hotel-name">
            {singlehotel.name}, {singlehotel.country}
          </p>
        )}
        {singlehotel && <Hotelimages singlehotel={singlehotel}/>}
        <div className="d-flex">
        {singlehotel && <Hoteldetails singlehotel={singlehotel}/>}
        {singlehotel && <Finalprice singlehotel={singlehotel}/>}
        </div>
      </main>
    </Fragment>
  );
};

export default Singlehotel;
