import React from "react";
import {LOGO_URL} from '../utils/constant';
import { useState } from "react";
const Header = () => {

  const [btnNameReact, setBtnName] = useState("lOGIN")
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
          <button className="login" onClick={
            () => {
              setBtnName("LOGOUT");
              console.log(btnNameReact); 
              }}
              >{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
