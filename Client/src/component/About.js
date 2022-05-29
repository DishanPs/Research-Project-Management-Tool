import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Header from "./Header";
import "./Homestyle.css";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <Header />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../Images/About.jpg"
            alt="Project Guidlines"
          />
        </Carousel.Item>
      </Carousel>
      <Footer />
    </div>
  );
};

export default About;
