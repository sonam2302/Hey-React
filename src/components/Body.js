import React from "react";
import RestaurantCard from "./RestaurantCard";
import {restaurants} from '../utils/mockdata';

const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <input type="search" placeholder="Search here " />
        </div>
  
        <div className="res-container">
          {restaurants.map((res) => (
            <RestaurantCard resData={res} key={res.info.id}/>
          ))}
        </div>
      </div>
    );
  };
  export default Body;