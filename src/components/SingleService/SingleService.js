import React from "react";
import "./SingleService.css";
const SingleService = (props) => {
  const { name, category, img, time, days, cost } = props.service;
  return (
    <div className="mb-2 col-md-4">
      <div className="container">
        <div className="card">
          <div className="card-header">
            <img src={img} alt="" />
          </div>
          <div className="card-body">
            <span className="tag tag-purple">{category}</span>
            <h4>{name}</h4>
            <div className="user">
              <div className="user-info">
                <h5>Time:{time}</h5>
                <h5>Days:{days}</h5>
                <h5>Cost:{cost}</h5>
              </div>
              <button className="container purchase-btn">Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
