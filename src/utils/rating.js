const getHotelsByRating = (hotels,rating)=>{
    const filteredHotels = hotels.filter((hotel)=>{
        return rating>=hotel.rating
    })
    return filteredHotels
}

export default getHotelsByRating