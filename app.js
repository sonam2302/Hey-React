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
            <img  className="res-card-logo" alt="res-logo" src ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"/>
            <h3>Pizza Hut</h3>
            <h4>Pizzas, Italian, Pasta, Desserts</h4>
            <h4>4.4 stars</h4>
            <h4> 20 minutes</h4>
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
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>

            </div>

        </div>
    )
}
// lets make top level component where we will place all compo 
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>); // to render compnent we pass it with brackets s

// this render method converting this object to h1 tag and placing it in root node
