import React, { Fragment, useContext } from "react";
import { DateContext } from "../../context/date-context";
import SearchStayWithDate from "../SearchStayWithDate/SearchStayWithDate";
import { Filter } from './../Filter/Filter';
import { useFilter } from "../../context/filter-context";

const Navbar = () => {
  const {isFilterModalOpen} = useFilter()
  const {
    dateDispatch,
    checkInDate,
    checkOutDate,
    destination,
    guests,
    isSearchModalOpen,
  } = useContext(DateContext);
  const searchOption = () => {
    dateDispatch({
      type: "OPEN_SEARCH_MODAL",
    });
  };
  return (
    <Fragment>
      <header className="heading d-flex align-center">
        <div className="heading-1">
          <h1 className="heading-title">TravelO</h1>
        </div>
        <div
          className="form-container d-flex align-center cursor-pointer shadow"
          onClick={() => searchOption()}
        >
          <span className="form-option">{destination || "Any Where"}</span>
          <span className="border-right-1px">|</span>
          <span className="form-option">
            {checkInDate && checkOutDate
              ? `${
                  checkInDate.getMonth() < 10
                    ? `0${checkInDate.getMonth() + 1}`
                    : checkInDate.getMonth() + 1
                } ${checkInDate.getDate()}
         -
        ${
          checkOutDate.getMonth() < 10
            ? `0${checkOutDate.getMonth() + 1}`
            : checkOutDate.getMonth() + 1
        } ${checkOutDate.getDate()}`
              : "Any Week"}
          </span>
          <span className="border-right-1px">|</span>
          <span className="form-option">
            {guests > 0 ? `${guests} guests` : "Add Guests"}
          </span>
          <span class="material-icons-outlined search">search</span>
        </div>
        <nav className="d-flex align-center gap-large">
          <div className="nav d-flex align-center cursor-pointer">
            <span className="material-icons-outlined profile-option menu">
              menu
            </span>
            <span className="material-icons-outlined profile-option person">
              person
            </span>
          </div>
        </nav>
      </header>
      {isFilterModalOpen && <Filter/>}
      {isSearchModalOpen && <SearchStayWithDate />}
    </Fragment>
  );
};

export default Navbar;
