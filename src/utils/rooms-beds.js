const gethotelsByRooms = (hotels,noOfBathrooms, noOfBedrooms, noOfBeds)=>{
    const filterByRooms = hotels.filter((hotel)=>{
        if(noOfBathrooms==='Any'&&noOfBedrooms==='Any'&&noOfBeds==='Any'){
            return hotels
        }
        return(hotel.numberOfBathrooms===noOfBathrooms||hotel.numberOfBedrooms===noOfBedrooms||hotel.numberOfBeds===noOfBeds)
    })
    return filterByRooms
}

export default gethotelsByRooms