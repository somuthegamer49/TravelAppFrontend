const getHotelsByPrice = (hotels, priceRange) => {
  const filteredHotels = hotels.filter((hotel) => {
    return hotel.price > priceRange[0] && hotel.price < priceRange[1];
  });
  return filteredHotels;
};
export default getHotelsByPrice;
