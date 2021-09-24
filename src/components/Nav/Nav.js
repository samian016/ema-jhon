import React from "react";
import "./Nav.css"

const Nav = () => {
  return (
    <div className="nav">
      <a href="/home">Home</a>
      <a href="/manage inventory">Manage Inventory</a>
      <a href="/review order">Review Order</a>
    </div>
  );
};

export default Nav;
