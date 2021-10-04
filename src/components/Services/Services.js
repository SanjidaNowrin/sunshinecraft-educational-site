import React, { useEffect, useState } from "react";
import SingleService from "../SingleService/SingleService";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  const [filteredSource, setFilteredSource] = useState([]);
  useEffect(() => {
    fetch("/artschool.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setFilteredSource(data);
      });
  }, []);
  const [catagoryValue, setCatagoryValue] = useState("Drawing");
  const handleSelect = (event) => {
    setCatagoryValue(event.target.value);
    let s = filteredSource.filter(
      (service) => service.category === event.target.value
    );
    setServices(s);
  };
  return (
    <div>
      <div style={{ backgroundColor: "#f7f8fc" }}>
        {/* select section */}
        <div className="container">
          <div className="p-4 m-3 w-75">
            <select
              value={catagoryValue}
              className="form-select "
              aria-label="Default select example"
              onChange={handleSelect}
            >
              <option value>Select according to category</option>
              <option value="drawing">Drawing</option>
              <option value="sculpture">Sculpture</option>
              <option value="digital">Digital</option>
            </select>
          </div>
        </div>
        <div className="services">
          {/* services cart section */}
          <div className="row">
            {services?.map((service) => (
              <SingleService
                service={service}
                key={service.key}
              ></SingleService>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
