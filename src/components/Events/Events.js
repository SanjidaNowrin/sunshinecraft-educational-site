import React from "react";
import "./Events.css";
import art from "../..//images/art.jpg";
import art1 from "../..//images/art1.jpg";
import art2 from "../..//images/art2.jpg";
const Events = () => {
  return (
    <div>
      <section className="container p-4 mb-5">
        <h1 className="event-title">Exhibitions & Events</h1>
        <div className="row align-items-center mt-4 gy-5  gx-5 mt-4">
          <div className="col-md-6">
            <h3 className="event-color uppercase">The Student Concours</h3>
            <h5 className="icon-color mt-3">
              <i className="fas fa-calendar-week"></i> 09 Jan - 07 May 21
            </h5>
            <p className="text-muted fs-5 mt-3">
              Every year from January through mid-May, you can see works by
              current League students exhibited in the gallery. These exhibits
              showcase work of every discipline taught at The League (painting,
              drawing, printmaking, sculpture and mixed media). Each week has a
              new exhibition with several classes on display.
            </p>
            <button
              type="button"
              className="px-4 py-1 mt-4 rounded text-white border-0 uppercase btn-color"
            >
              View Details
            </button>
          </div>
          <div className="col-md-6">
            <img
              src={art1}
              alt=""
              className="img-fluid rounded"
              width="526px"
              height="275px"
            ></img>
          </div>
        </div>
        <div className="row align-items-center mt-4 gx-5">
          <div className="col-md-6">
            <img
              src={art2}
              alt=""
              className="img-fluid rounded"
              height="385px"
            ></img>
          </div>
          <div className="col-md-6">
            <h3 className="event-color uppercase">Summer Session 1</h3>
            <h5 className="icon-color mt-3">
              <i className="fas fa-calendar-week"></i> 13 Feb - 12 Mar 22
            </h5>
            <p className="text-muted fs-5 mt-3">
              The Summer Sessions are short-term international art and
              technology residencies for emerging artists and designers. A
              network of cultural organizations all over the world sponsors and
              hosts the residencies. Every summer we offer early-career artists
              and designers support so they can take part in production
              residencies abroad.
            </p>
            <button
              type="button"
              className="px-4 py-1 mt-4 rounded text-white border-0 uppercase btn-color"
            >
              View Details
            </button>
          </div>
        </div>
        <div className="row align-items-center mt-4 gy-5  gx-5">
          <div className="col-md-6">
            <h3 className="event-color uppercase">Regular Session</h3>
            <h5 className="icon-color mt-3">
              <i className="fas fa-calendar-week"></i> 16 Jan - 15 Feb 21
            </h5>
            <p className="text-muted fs-5 mt-3">
              Great, affordable art classes for everyone and toddlers are,
              luckily, not that hard to find, and you’ve come to the right place
              for some great art classes for everyone that are on the computer.
            </p>
            <button
              type="button"
              className="px-4 py-1 mt-4 rounded text-white border-0 uppercase btn-color"
            >
              View Details
            </button>
          </div>
          <div className="col-md-6">
            <img
              src={art}
              alt=""
              className="img-fluid rounded"
              width="526px"
              height="385px"
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
