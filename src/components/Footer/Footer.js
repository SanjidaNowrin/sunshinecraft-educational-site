import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <h3>Sunshine Craft</h3>
        <p>
          A leader in educating artists since 2020 Sunshine Craft School offers
          nationally accredited undergraduate, graduate, and post-baccalaureate
          programs.
        </p>
        <ul className="socials">
          <li>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-google-plus"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-linkedin-square"></i>
            </a>
          </li>
        </ul>
        <p>
          copyright &copy;2020 <span>Sunshine Craft</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
