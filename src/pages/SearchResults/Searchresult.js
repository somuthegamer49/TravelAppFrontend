import React, { Fragment, useContext, useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { DateContext } from '../../context/date-context'
import Hotelcard from './../../components/Hotelcard/Hotelcard';
import axios from 'axios';

const Searchresult = () => {
  const {destination} = useContext(DateContext)
  const [hotels, sethotels] = useState([]);
  const filteredSearchedResults = hotels.filter((hotel)=>{
    return (
        hotel.address.toLowerCase()===(destination.toLowerCase()) ||
        hotel.city.toLowerCase()===(destination.toLowerCase()) ||
        hotel.state.toLowerCase()===(destination.toLowerCase())
      );
  })
  useEffect(() => {
    const getHotels = async () => {
      const response = await axios.get(`http://localhost:3500/api/hotels/`);
      const data = response.data;
      if (data) {
        sethotels(data);
      }
    };
    getHotels();
  }, [destination]);

  

  return (
    <Fragment>
    <Navbar/>   
    <section>
    {
        filteredSearchedResults.length>0 ? 
            <Hotelcard hotels={filteredSearchedResults}/>:<h3>Hotel Not Found!!</h3>
    }
    </section>
    </Fragment>
  )
}

export default Searchresult