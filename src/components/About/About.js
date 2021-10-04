import React from "react";
import "./About.css";
import woman from "../..//images/woman.png";
const About = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src="http://crown-art.ancorathemes.com/wp-content/uploads/2017/03/image-57.jpg"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <h1 className="about-title">
              A leader in educating artists since 2020
            </h1>
            <p className="about-detail">
              Sunshine Craft School offers nationally accredited undergraduate,
              graduate, and post-baccalaureate programs to more than 2,800
              students from all over the world. <br></br> <br></br>Our school
              has an educational philosophy built upon an integrative approach
              to art, giving students exceptional opportunities to develop their
              creative and critical abilities, while working with leading
              faculty who include many of the famed artists.Sunshine Craft is a
              well resourced and highly professional school.<br></br>
              <br></br>We fulfill this mission by offering high quality and
              accessible education and instruction in painting, drawing, sketch,
              sculpture and digital. <br></br> <br></br>The Sunshine Craft
              School offers workshops and year-round studio art classes taught
              by professional artists and experienced educators in a unique
              setting. Our students have access to an inspiring world-class
              collection of art.
            </p>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="about-section">
        <div className="container mt-5">
          <div className="row">
            <div className="second-title col-md-6">
              <h1 className="about-title">
                The highest caliber of artistic education
              </h1>
              <p className="about-detail">
                The Sunshine Craft educates students in the language and process
                of making art in an environment where anyone who wishes to
                pursue an art education can realize his or her full potential.
                <br></br> <br></br> We fulfill this mission by offering high
                quality and accessible education and instruction in painting,
                drawing, sketch, sculpture and digital.
              </p>
            </div>
            <div className="mt-3 col-md-6">
              <img
                src={woman}
                alt=""
                width="368px"
                height="609px"
                style={{ marginLeft: "150px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
