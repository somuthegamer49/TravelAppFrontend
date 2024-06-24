import React, { Fragment } from "react";

const Hotelimages = ({ singlehotel }) => {
  return (
    <Fragment>
      <div className="d-flex hotel-image-container gap-small">
        <div className="primary-image-container" style={{backgroundImage:`url(${singlehotel.image})`}}>
        </div>
        <div className="d-flex wrap gap-small">
          {singlehotel.imageArr &&
            singlehotel.imageArr.map((image) => {
              return <img
                key={image}
                className="hotel-img"
                src={image}
                alt="hotel"
              />;
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default Hotelimages;
