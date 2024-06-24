import { createContext, useReducer } from "react";
import dateReducer from "../reducer/dateReducer";
const DateContext = createContext();

const initialState = {
    destination: "",
    guests: 0,
    checkInDate: null,
    checkOutDate: null,
    isSearchModalOpen: false,
    isSearchResultOpen: true,
  };

const DateProvider = ({ children }) => {
    const [
        {
          destination,
          guests,
          checkInDate,
          checkOutDate,
          isSearchModalOpen,
          isSearchResultOpen,
        },
        dateDispatch,
      ] = useReducer(dateReducer, initialState);
  return (
    <DateContext.Provider value={{dateDispatch,destination,
      guests,
      checkInDate,
      checkOutDate,
      isSearchModalOpen,
      isSearchResultOpen}}>
      {children}
    </DateContext.Provider>
  );
};

export {DateProvider, DateContext };