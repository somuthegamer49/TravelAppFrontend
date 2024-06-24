import React, { Fragment, useEffect, useState } from "react";
import Navbar from "./../../components/navbar/Navbar";
import Hotelcard from "./../../components/Hotelcard/Hotelcard";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Categories from "../../components/Categories/Categories";
import getHotelsByPrice from "../../utils/price-range";
import { useFilter } from "../../context/filter-context";
import gethotelsByRooms from "../../utils/rooms-beds";
import getHotelsByProperty from "../../utils/property";
import getHotelsByRating from "../../utils/rating";

const Home = () => {
  const [hotels, sethotels] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [currentIndex, setcurrentIndex] = useState(10);
  const [testData, settestData] = useState([]);
  const { priceRange, noOfBathrooms, noOfBedrooms, noOfBeds, propertyType, traveloRating } = useFilter();
  useEffect(() => {
    const getHotels = async () => {
      const response = await axios.get("http://localhost:3500/api/hotels/");
      const data = response.data;
      if (data) {
        settestData(data);
        sethotels(data ? data.slice(0, 10) : []);
      }
    };
    getHotels();
  }, []);

  const fetchMoreData = () => {
    if (hotels.length >= testData) {
      sethasMore(false);
      return;
    }
    setTimeout(() => {
      if (hotels && hotels.length > 0) {
        sethotels(
          hotels.concat(testData.slice(currentIndex, currentIndex + 10))
        );
        setcurrentIndex((prev) => prev + 10);
      } else {
        sethotels([]);
      }
    }, 1000);
  };
  const filteredHotels = getHotelsByPrice(testData, priceRange);
  const filteredHotelsByRooms = gethotelsByRooms(
    testData,
    noOfBathrooms,
    noOfBedrooms,
    noOfBeds
  );

  const filteredHotelsByProperty = getHotelsByProperty(filteredHotelsByRooms,propertyType)
  const filterHotelsByRatings = getHotelsByRating(testData,traveloRating)
  useEffect(() => {
    if (filteredHotels.length > 0 && filteredHotels) {
      sethotels(filteredHotels);
      sethasMore(false)
    }
  }, [priceRange]);
  useEffect(() => {
    if (
      noOfBathrooms !== "Any" ||
      noOfBedrooms !== "Any" ||
      noOfBeds !== "Any"
    ) {
      sethotels(filteredHotelsByRooms);
      sethasMore(false)
    }
  }, [noOfBathrooms, noOfBedrooms, noOfBeds]);

  useEffect(()=>{
    sethotels(filteredHotelsByProperty)
  },[propertyType])
  useEffect(()=>{
    sethotels(filterHotelsByRatings)
  },[traveloRating])
  return (
    <Fragment>
      <div className="relative">
        <Navbar />
        <Categories />
        {hotels.length > 0 && hotels && (
          <InfiniteScroll
            dataLength={hotels.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={
              testData.length > hotels.length ? (
                <h1 className="loading">Loading...</h1>
              ) : (
                testData.length === hotels.length && null
              )
            }
            endMessage={<h3 className="loading">That's All!!!</h3>}
          >
            <main className="main">{<Hotelcard hotels={hotels} />}</main>
          </InfiniteScroll>
        )}
      </div>
    </Fragment>
  );
};

export default Home;
