const getHotelsByProperty = (hotels,propertyType)=>{
    if(propertyType==='Any'){
        return hotels
    }
    const filteredHotels = hotels.filter((hotel)=>{
        return hotel.propertyType===propertyType
    })
    return filteredHotels
}

export default getHotelsByProperty