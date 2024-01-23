import React from "react";
import {LOGO_URL} from '../utils/constant';
const Header = () => {
  let btnName = "Login";
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
              btnName="Logout";
              console.log(btnName); //its changing to logout but its not showing in the UI , Bcz , it wont rerender the comp , thats y we use state varaiable instead of local js variable
              }}
              >{btnName}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
