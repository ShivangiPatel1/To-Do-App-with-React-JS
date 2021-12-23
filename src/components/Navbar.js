import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
      <div className="filters btn-group stack-exception">
      <button><Link to="/">Home</Link></button>
      <button><Link to="/About">About Us</Link></button></div>
      </nav>
    </div>
  );
};
export default Navbar;
