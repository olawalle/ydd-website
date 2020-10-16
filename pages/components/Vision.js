import React from "react";

export default function Vision() {
  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <div className="row">
        <div className="col-md-4 col-sm-4 featured-block featured-block-equal">
          <h3 style={{ textAlign: "center" }}>Our Vision</h3>
          <figure>
            <a href="vision.html">
              <img src="/ourvision.png" alt="" />
            </a>
          </figure>{" "}
          <div className="featured-block-equal-cont">
            <p>
              To raise and retain an army of outstanding young people going to
              Heaven and persuading others to come along.
              <a href="vision.html">Learn More</a>
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 featured-block featured-block-equal">
          <h3 style={{ textAlign: "center" }}>Our Mission</h3>
          <figure>
            <a href="vision.html">
              <img src="/ourmission.png" alt="" />
            </a>
          </figure>{" "}
          <div className="featured-block-equal-cont">
            <p>
              To create platforms using relevant channels through which young
              people can discover themselves, connect with God, the Church and
              one another as means of converting the world.
              <a href="vision.html">Learn More</a>
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 featured-block featured-block-equal   ">
          <h3 style={{ textAlign: "center" }}>Our Values</h3>
          <figure>
            <a href="#">
              <img src="/ourvalues.png" alt="" />
            </a>
          </figure>{" "}
          <div className="featured-block-equal-cont">
            <p>
              We value and strive to maintain the presence of God in our lives
              more than anything in the world.
              <a href="vision.html">Learn More</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
