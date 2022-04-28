import React from "react";
import "./Header.css";
import bg from "../../image/165796.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header_titles">
        <span className="header_title1">BLOG APPLICATION</span>
        <span className="header_title2"></span>
      </div>
      <img src={bg} alt="backgroud" />
    </div>
  );
}

export default Header;
