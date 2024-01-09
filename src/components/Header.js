import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="Sonam's Kitchen"
          src="https://stock.adobe.com/in/search?k=restaurant+logo&asset_id=469998410"
        />
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
  );
};
export default Header;
