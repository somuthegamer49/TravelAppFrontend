import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CategoryProvider } from "./context/category-context";
import { DateProvider } from "./context/date-context";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/filter-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CategoryProvider>
    <DateProvider>
      <FilterProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FilterProvider>
    </DateProvider>
  </CategoryProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
