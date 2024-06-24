import React, { useContext } from "react";
import DatePicker from "react-datepicker";
import { DateContext } from "../../context/date-context";
const Dateselector = ({placeholder,checkinType}) => {
  const {dateDispatch,checkInDate,checkOutDate} = useContext(DateContext)
  const changeDate =(date)=>{
    dateDispatch({
      type:checkinType==="checkin"? "CHECK_IN":"CHECK_OUT",
      payload:date
    })
  }
  const handleDateFocus = () => {
    dateDispatch({
      type: "DATE_FOCUS",
    });
  };
  return (
    <DatePicker
      selected={checkinType==='checkin'? checkInDate:checkOutDate}
      onChange={(date) => changeDate(date)}
      onFocus={handleDateFocus}
      className="search-dest input"
      dateFormat={"dd/MM/yyyy"}
      placeholder={"Check In"}
      closeOnScroll={true}
    />
  );
};

export default Dateselector;
