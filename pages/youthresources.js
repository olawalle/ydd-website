import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./styles/youthresources.scss";

export default function Youthresources() {
  return (
    <div className='youth-resources'>
      <Nav />
      <div className='banner'>
        <h2>YOUTH RESOURCES</h2>
        <span>Stay refreshed at all times</span>
      </div>
      <div className='container'>
        <div className='row' style={{ margin: "30px 0" }}>
          <div className='col-md-4 col-sm-12 featured-block featured-block-equal'>
            <h3 style={{ textAlign: "center" }}>
              <Link href='/reports'>
                <a>Youth Reports</a>
              </Link>
            </h3>
            <figure style={{ height: 280 }}>
              <Link href='/reports'>
                <a>
                  <img src='/ourvision.png' alt='' />
                </a>
              </Link>
            </figure>{" "}
            <div className='featured-block-equal-cont'>
              <p>
                To raise and retain an army of outstanding young people going to
                Heaven and persuading others to come along.
              </p>
            </div>
          </div>
          <div className='col-md-4 col-sm-12 featured-block featured-block-equal'>
            <h3 style={{ textAlign: "center" }}>
              <Link href='/soulfood'>
                <a>Soul food</a>
              </Link>
            </h3>
            <figure style={{ height: 280 }}>
              <Link href='/soulfood'>
                <a>
                  <img src='/ourvision.png' alt='' />
                </a>
              </Link>
            </figure>{" "}
            <div className='featured-block-equal-cont'>
              <p>
                To create platforms using relevant channels through which young
                people can discover themselves, connect with God
              </p>
            </div>
          </div>
          <div className='col-md-4 col-sm-12 featured-block featured-block-equal'>
            <h3 style={{ textAlign: "center" }}>
              <Link href='/testimonies'>
                <a>Testimonies</a>
              </Link>
            </h3>
            <figure style={{ height: 280 }}>
              <Link href='/testimonies'>
                <a>
                  <img src='/ydd-photos/Testimonies.png' alt='' />
                </a>
              </Link>
            </figure>{" "}
            <div className='featured-block-equal-cont'>
              <p>
                We value and strive to maintain the presence of God in our lives
                more than anything in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
