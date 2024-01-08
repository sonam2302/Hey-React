import React from "react";
import ReactDOM from "react-dom/client";

// //planning
// =>Header 
//   > logo 
//   >NavItems
// =>Body
//  >Search
//  >RestaurantContainer
//  >RestaurantCard
//    > Image
//    >Name of the Restaurant
//    > Star Ratings , cusines, delievery Time 
// =>Footer 
//    > Copyright
//    > Links
//    > Address 
//    > Contact 


const Header = () => {
    return (
        <div className ="header">
            <div className="logo-container">
                <img className="logo" alt="Sonam's Kitchen"
                src= "https://www.designmantic.com/logo-design/create?design=1759"/>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                    </ul>
            </div>
        </div>
    )
}

//restaurant Card Component

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <h1>KFC Foods</h1>
        </div>
    )
}

//body component

const Body = () => {
    return (
        <div className="body">
            <div classNamee="search">
                <input type="search" placeholder="Search here "/>
            </div>
            <div className="res-container">
                <RestaruntCard/>
            </div>

        </div>
    )
}
// lets make top level component where we will place all compo 
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
        </div>
    )
};





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>); // to render compnent we pass it with brackets s

// this render method converting this object to h1 tag and placing it in root node
