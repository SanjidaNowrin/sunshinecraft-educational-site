import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Home.css";
import Events from "./../Events/Events";
const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/artschool.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      {/* Banner section */}
      <div className="hero-image">
        <div className="hero-text">
          <h1 style={{ fontSize: "3rem", marginBottom: "23px" }}>
            Pursue <span>your</span> passion. <br></br>Create your{" "}
            <span>life</span>.
          </h1>
          <button className="p-3 text-white button draw-border header-button">
            EXPLORE OUR PROGRAMS
          </button>
        </div>
      </div>
      {/* service */}
      <div className="row service-bg">
        <h1 className="mt-5 mb-5 text-center services-text">Our Services</h1>
        {services?.slice(0, 4).map((service) => (
          <Service service={service} key={service.key}></Service>
        ))}
      </div>
      <Events></Events>
    </div>
  );
};

export default Home;
