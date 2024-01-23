import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
const Body = () => {
  console.log(<RestaurantCard />, "RestaurantCard virtual dom");
  //State variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //3rd - useeffect called after body renedered
  useEffect(() => {
    fetchData();
  }, []);
  //fetch is a  superpowerfull method for calling an api, given to us by browser, fetch will return a promise
  //to resolve promise we can use async await
  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.41015115907704&lng=77.05018782462052&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    //mode: 'no-cors' - to fix cors error , always use method , else it will throw a promise error
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.41015115907704&lng=77.05018782462052",
    //   {mode: 'no-cors',
    // method:'GET'}
      );
    const info = await data.json();
     console.log(info, "jsonInfo",info.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
     //optional chaining in js
     setListOfRestaurants(info?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
 
  if(listOfRestaurants.length === 0) {
    return <ShimmerCard/>
  }
  // console.log("bodycalled"); //1st this will call
  //plainjs variable
  // let listOfRestaurantsJS = [
  //     {
  //         info: {
  //           id: "39243",
  //           name: "KFC",
  //           cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
  //           locality: "ILD Mall",
  //           areaName: "Sohna Road",
  //           costForTwo: "₹450 for two",
  //           cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //           avgRating: 4.1,
  //           parentId: "547",
  //           avgRatingString: "4.1",
  //           totalRatingsString: "10K+",
  //         },
  //       },
  //       {
  //         info: {
  //           id: "50463",
  //           name: "Burger King",
  //           cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //           locality: "Element One Mall",
  //           areaName: "Sector 47",
  //           costForTwo: "₹350 for two",
  //           cuisines: ["Burgers", "American"],
  //           avgRating: 4.3,
  //           parentId: "166",
  //           avgRatingString: "4.3",
  //           totalRatingsString: "10K+",
  //         },
  //       },
  //       {
  //         info: {
  //           id: "36358",
  //           name: "Pizza Hut",
  //           cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //           locality: "Baani Square",
  //           areaName: "Sector 50",
  //           costForTwo: "₹350 for two",
  //           cuisines: ["Pizzas"],
  //           avgRating: 3.9,
  //           parentId: "721",
  //           avgRatingString: "3.9",
  //           totalRatingsString: "1K+",
  //         },
  //       },
  // ]
  //then this jsx will rendered -2nd
  return (
    <div className="body">
      <div className="search">
        <input type="search" placeholder="Search here " />
      </div>

      <div className="filter">
        <button
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (resta) => resta.info.avgRating > 4
            );
            console.log(listOfRestaurants, "listoffilteredrestauramt"); //filter doesn't change the original array so it will be 20 only with 3.9 rating as well
            console.log(filteredRestaurants, "filteredRestaurants"); //filter updated the new array which is filtered restaurant so it will be 18 , exclufing 3.9 rating s
            setListOfRestaurants(filteredRestaurants);
          }}
          className="filter-btn"
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="sort">
        <button
          onClick={() => {
            const sortedRestaurant = [...listOfRestaurants].sort((a, b) => {
              return b.info.avgRating - a.info.avgRating; // if you are using curly brace u need to write return , otherwise it wont work
            });
            console.log(
              listOfRestaurants,
              "Array.prototype.sort sorts array in place i.e. it mutates the original obj. reference doesnt chnage and mutation doesnt get noticed"
            );
            console.log(sortedRestaurant, "sorted");

            setListOfRestaurants(sortedRestaurant);
          }}
        >
          top rating sort
        </button>
      </div>

      <div className="res-container">
        {console.log(listOfRestaurants, "list")}

        {/* {restaurants.map((res) => ( */}
        {listOfRestaurants.map((res) => (
          <RestaurantCard resData={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
