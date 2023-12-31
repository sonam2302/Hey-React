import React from "react";
import RestaurantCard from "./RestaurantCard";
import {restaurants} from '../utils/mockdata';

const Body = () => {
    //normal js variable

    let listOfRestaurants = [
        {
            info: {
              id: "39243",
              name: "KFC",
              cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
              locality: "ILD Mall",
              areaName: "Sohna Road",
              costForTwo: "₹450 for two",
              cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
              avgRating: 4.1,
              parentId: "547",
              avgRatingString: "4.1",
              totalRatingsString: "10K+",
            },
          },
          {
            info: {
              id: "50463",
              name: "Burger King",
              cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
              locality: "Element One Mall",
              areaName: "Sector 47",
              costForTwo: "₹350 for two",
              cuisines: ["Burgers", "American"],
              avgRating: 4.3,
              parentId: "166",
              avgRatingString: "4.3",
              totalRatingsString: "10K+",
            },
          },
          {
            info: {
              id: "36358",
              name: "Pizza Hut",
              cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
              locality: "Baani Square",
              areaName: "Sector 50",
              costForTwo: "₹350 for two",
              cuisines: ["Pizzas"],
              avgRating: 3.9,
              parentId: "721",
              avgRatingString: "3.9",
              totalRatingsString: "1K+",
            },
          },
    ]
    return (
      <div className="body">
        <div className="search">
          <input type="search" placeholder="Search here " />
        </div>

        <div className="filter">
            <button onClick = 
            { 
                () => {
                   listOfRestaurants = listOfRestaurants.filter(
                    (resta) => resta.info.avgRating >4
                   );
                   console.log(listOfRestaurants,'listoffilteredrestauramt');
                }
            } 
            className="filter-btn">Top Rated Restaurant</button>
        </div>
  
        <div className="res-container">
          {/* {restaurants.map((res) => ( */}
          {listOfRestaurants.map((res) => (
            <RestaurantCard resData={res} key={res.info.id}/>
          ))}
        </div>
      </div>
    );
  };
  export default Body;