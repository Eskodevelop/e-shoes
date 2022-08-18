import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header>
      {" "}
      <NavLink to="/" exact="true">
        <li>Products</li>
      </NavLink>{" "}
      <NavLink to="/categories">
        <li>Categories</li>
      </NavLink>{" "}
      <NavLink to="/products">
        <li>Home Page</li>
      </NavLink>{" "}
      <NavLink to="/brands">
        <li>Brands</li>
      </NavLink>{" "}
      <NavLink to="/register">
        <li>Register</li>
      </NavLink>{" "}
      <NavLink to="/login">
        <li>Login</li>
      </NavLink>{" "}
    </header>
  );
};

export default Header;
