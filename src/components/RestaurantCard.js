import React from "react";

import {imgBaseURL} from "../utils/constant";
const styleCard = {
  backgroundColor: "red",
};

// const imgBaseUrl =
//   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    locality,
    cuisines,
    avgRating,
    areaName,
    cloudinaryImageId,
    id,
  } = resData.info;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-card-logo"
        alt="res-logo"
        src={imgBaseURL + cloudinaryImageId}
      />
      <h3> {name}</h3>
      <h4>
        {locality} , {areaName}
      </h4>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
