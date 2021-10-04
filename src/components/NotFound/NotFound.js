import React from "react";

const NotFound = () => {
  return (
    <div>
      <img
        className="container mt-5"
        src="https://vetra.laborasyon.com/assets/svg/404.svg"
        alt=""
        width="424px"
        height="231px"
      />
      <div className="mt-5 text-center text-danger">
        <h2>Page not found</h2>
        <h5>The page you want to go is not currently available</h5>
      </div>
    </div>
  );
};

export default NotFound;
