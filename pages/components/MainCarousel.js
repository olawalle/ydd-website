import React from "react";
import { Carousel } from "antd";

export default function MainCarousel({ pictures }) {
  return (
    <Carousel autoplay>
      {pictures &&
        pictures.map((pic) => (
          <div className="carousel">
            <div className="slide">
              <img
                src={pic}
                alt=""
                style={{
                  width: "110%",
                  // height: "110%",
                  // objectPosition: "center",
                  // objectFit: "cover",
                }}
              />
            </div>
          </div>
        ))}
    </Carousel>
  );
}
