import React from "react";
import logo from "../../images/logo.png"
import Nav from "../Nav/Nav";

import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <Nav></Nav>
    </div>
  );
};

export default Header;
