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
                  <img src='/ydd-photos/reports.jpg' alt='' />
                </a>
              </Link>
            </figure>{" "}
            <div className='featured-block-equal-cont'>
              <p>
                
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
                  <img src='/ydd-photos/soulfood.jpg' alt='' />
                </a>
              </Link>
            </figure>{" "}
            <div className='featured-block-equal-cont'>
              <p>
                
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
                  <img src='/ydd-photos/testimony.jpg' alt='' />
                </a>
              </Link>
            </figure>{" "}
            <div className='featured-block-equal-cont'>
              <p>
                
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
