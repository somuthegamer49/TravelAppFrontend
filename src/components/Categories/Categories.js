import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../context/category-context";
import { useFilter } from "../../context/filter-context";
const Categories = () => {
  const [categories, setcategories] = useState([]);
  const [totalcat, settotalcat] = useState([]);
  const [noOfCatToShow, setnoOfCatToShow] = useState(0);
  const [right, setright] = useState(0);
  const [left, setleft] = useState(0);
  const { State, setState, sethotelCardByCat } = useContext(CategoryContext);
  const { filterDispatch } = useFilter();
  const moveRight = () => {
    setnoOfCatToShow((prev) => prev + 1);
  };
  const moveLeft = () => {
    setnoOfCatToShow((prev) => prev - 1);
  };
  const showCategory = (category) => {
    setState(category);
  };
  const handleFilterClick = () => {
    filterDispatch({
      type: "SHOW_FILTER_MODAL",
    });
  };
  useEffect(() => {
    const getByCategory = async () => {
      const repsonse = await axios.get(
        `http://localhost:3500/api/hotels?category=${State}`
      );
      const data = repsonse.data;
      sethotelCardByCat(data);
    };
    getByCategory();
  }, [State, sethotelCardByCat]);
  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get("http://localhost:3500/api/categories/");
      const data = response.data;
      settotalcat(data);
      const categoriesToShow = data.slice(noOfCatToShow, noOfCatToShow + 12);
      setright(noOfCatToShow + 12);
      setleft(noOfCatToShow);
      setcategories(categoriesToShow);
    };
    getCategories();
  }, [noOfCatToShow]);
  return (
    <section className="categories d-flex align-center">
      <button
        className="btn-category"
        disabled={left <= 0 ? true : false}
        onClick={() => moveLeft()}
      >
        <span class="material-icons-outlined">chevron_left</span>
      </button>
      {categories &&
        categories.map((cat) => {
          return (
            <span
              className={cat.category === State ? "category-type" : null}
              onClick={() => showCategory(cat.category)}
              style={{ cursor: "pointer" }}
            >
              {cat.category}
            </span>
          );
        })}
      <button
        className="btn-category"
        disabled={right <= totalcat.length ? false : true}
        onClick={() => moveRight()}
      >
        <span class="material-icons-outlined">chevron_right</span>
      </button>
      <div>
        <button
          className="button btn-filter d-flex align-center gap-small cursor-pointer"
          onClick={handleFilterClick}
        >
          <span className="material-icons-outlined">filter_alt</span>
          <span>Filter</span>
        </button>
      </div>
    </section>
  );
};

export default Categories;
