import React from "react";
import "./Service.css";
const Service = (props) => {
  const { name, time, days, cost, img, description, category } = props.service;
  return (
    <div className="col-md-6">
      <div id="container">
        <div className="product-details">
          <h1>{name}</h1>
          <div className="information">
            <h5>Time:{time}</h5>
            <h5>Days:{days}</h5>
            <h5>Cost:{cost}</h5>
            <h5>Category:{category}</h5>
          </div>
        </div>

        <div className="product-image">
          <img src={img}></img>
          <div className="info">
            <h2> Description</h2>
            <ul>{description}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
