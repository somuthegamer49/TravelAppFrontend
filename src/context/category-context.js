import { createContext, useState } from "react";

const initialValue = {
  hotelCategory: "National Parks",
};
const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [State, setState] = useState(initialValue);
  const [hotelCardByCat, sethotelCardByCat] = useState([]);
  return (
    <CategoryContext.Provider value={{ State, setState, hotelCardByCat,sethotelCardByCat }}>
      {children}
    </CategoryContext.Provider>
  );
};

export {CategoryProvider, CategoryContext };
