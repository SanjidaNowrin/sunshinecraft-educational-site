import React from "react";
import { Link } from "react-router-dom";
import logo from "../..//images/sunshine.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="MenuBar-container backround">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="mt-2">
              <p>
                SUNSHINE
                <img className="logo-img" src={logo} alt="" />
                CRAFT
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="menu-container ">
              <ul className="mt-2 text-center d-flex align-items-end justify-content-end ">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About</li>
                </Link>
                <Link to="/services" className="items">
                  <li>Services</li>
                </Link>
                <Link to="/contact" className="items">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
