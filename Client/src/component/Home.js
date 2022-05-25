import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Header from "./Header";
import "./Homestyle.css";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../Images/Home.jpg"
            alt="Home Image"
          />
          <Carousel.Caption>
            <h3>Sri Lanka Institute of Information Technology</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer />
    </div>
  );
};

export default Home;
