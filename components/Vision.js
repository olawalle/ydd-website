import Link from "next/link";
import React from "react";

export default function Vision() {
  return (
    <div className="container">
      <div className="row" style={{ margin: "50px 0" }}>
        <div className="col-md-4 col-sm-12 featured-block featured-block-equal">
          <h3 style={{ textAlign: "center" }}>Our Vision</h3>
          <figure>
            <Link href="/about#vision">
              <a>
                <img src="/ourvision.png" alt="" />
              </a>
            </Link>
          </figure>{" "}
          <div className="featured-block-equal-cont">
            <p>
              To raise and retain an army of outstanding young people going to
              Heaven and persuading others to come along.
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 featured-block featured-block-equal">
          <h3 style={{ textAlign: "center" }}>Our Mission</h3>
          <figure>
            <Link href="/about#mission">
              <a>
                <img src="/ourmission.png" alt="" />
              </a>
            </Link>
          </figure>{" "}
          <div className="featured-block-equal-cont">
            <p
              style={{
                position: "relative",
              }}
            >
              To create platforms using relevant channels through which young
              people can discover themselves, connect with God, the Church and
              one another as means of converting the world.
              <Link href="/about#mission">
                <a
                  style={{
                    position: "absolute",
                    top: 100,
                    right: 0,
                  }}
                >
                  Learn More
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 featured-block featured-block-equal   ">
          <h3 style={{ textAlign: "center" }}>Our Values</h3>
          <figure>
            <Link href="/about#values">
              <a>
                <img src="/ourvalues.png" alt="" />
              </a>
            </Link>
          </figure>{" "}
          <div className="featured-block-equal-cont">
            <p
              style={{
                position: "relative",
              }}
            >
              We value and strive to maintain the presence of God in our lives
              more than anything in the world.
              <Link href="/about#values">
                <a
                  style={{
                    position: "absolute",
                    top: 100,
                    right: 0,
                  }}
                >
                  Learn More
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
