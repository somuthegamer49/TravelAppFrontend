import { useFilter } from "../../context/filter-context";
import { PriceRange } from "./PriceRange";
import { RoomsAndBeds } from "./RoomsAndBeds";
import { PropertyType } from "./PropertyType";
import { Ratings } from "./Ratings";
import { FreeCancel } from "./FreeCancel";
export const Filter = () => {
  const { filterDispatch } = useFilter();

  const handleFilterModalCloseClick = () => {
    filterDispatch({
      type: "SHOW_FILTER_MODAL",
    });
  };

  const handleClearFilterClick = () => {
    filterDispatch({
      type: "CLEAR_ALL",
    });
  };

  return (
    <div className="filter-modal">
      <div className="filter-page shadow">
        <div className="d-flex align-center justify-space-between">
          <span className="filter-label">Filter</span>
          <button
            className="button btn-filter-close cursor-pointer d-flex align-center justify-center"
            onClick={handleFilterModalCloseClick}
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <PriceRange />
        <RoomsAndBeds />
        <PropertyType />
        <Ratings />
        <FreeCancel />
        <div className="d-flex align-center justify-space-between">
          <button
            className="button cursor btn-link-primary"
            onClick={handleClearFilterClick}
          >
            Clear All
          </button>
          <button
            className="button cursor btn-primary btn-apply"
            onClick={handleFilterModalCloseClick}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};