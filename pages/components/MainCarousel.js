import React from "react";
import { Carousel } from "antd";

export default function MainCarousel() {
  return (
    <Carousel>
      <div className="carousel">
        <div className="slide1"></div>
      </div>
      <div className="carousel">
        <div className="slide2"></div>
      </div>
      <div className="carousel">
        <div className="slide3"></div>
      </div>
      <div className="carousel">
        <div className="slide4"></div>
      </div>
    </Carousel>
  );
}
