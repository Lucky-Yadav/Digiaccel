import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
    return (
      <div>
        <Link to="/"> home </Link>
        <Link to={"/products"}>Products</Link>
        <Login />
      </div>
    );
};

export default Navbar;
