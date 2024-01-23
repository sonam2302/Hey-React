import React from "react";
import {LOGO_URL} from '../utils/constant';
import { useState } from "react";
const Header = () => {

  const [btnNameReact, setBtnName] = useState("lOGIN")
  console.log("Header render"); // calling the whole header with updated btnnamereact
  //this btnNameReact is a constant variable,how it is getting updated with new value . Isn't it defeating the js priinciple
  //whenever u update setBtnNname, its calling/rendering this header fn once again 
  //when u invoke this setbtname fn this btnNameReact will be  a new varaiable, its create a new instanve 
  //this btnnamereact is new intsance then older value , its default value is now logout
  //as soon as we call this setBtnName react , it will update the btnnamereact  value refernce, render header comp once again
  //it will find the div with b/w older version and newer version and it will see only button getting upadted, no change in ul or li, nothimg will change 
  //only button will be change, this happened bcz of diff algo, this is reconcillation process
  //the button 
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="Sonam's Kitchen"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          {/* React rerender the whole header component with this login click  */}
          <button className="login" onClick={
            () => {
             btnNameReact === "LOGIN"? setBtnName("LOGOUT"):setBtnName("LOGIN");
              console.log(btnNameReact); 
              }}
              >{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
