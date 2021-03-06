import React, { useState } from "react";
import Nav from "../components/Nav";
import "./styles/ypf.scss";
import { Card } from "antd";
import Footer from "../components/Footer";
import MainCarousel from "../components/MainCarousel";
import bg1 from "../public/ydd-photos/ypf1.jpg";
import bg2 from "../public/ydd-photos/ypf2.jpg";
import bg3 from "../public/ydd-photos/ypf3.jpg";
import bg4 from "../public/ydd-photos/ypf4.jpg";
import bg5 from "../public/ydd-photos/ypf5.jpg";
import { useEffect } from "react";
import Link from "next/link";
import Blog from "../components/Blog";
import { blogsList } from "../mocks/blogsList";
import { soulfoodList_ } from "../mocks/soulfoodList";
import { testimoniesList } from "../mocks/testimoniesList";

export default function Couples() {
  const [items, setitems] = useState([
    `To establish and build a
    network of outstanding singles.`,
    `
    To help them prepare for a life fulfilling marriage.`,
    `To guide the singles on matters
    as to relationship.`,
    `To educate the Singles on how to build
    and maximise their singlehood.`,
  ]);
  const [selectedItem, setselectedItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      selectedItem < 3 ? setselectedItem(selectedItem + 1) : setselectedItem(0);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [selectedItem]);

  return (
    <div className="ypf couples">
      <div className="body">
        <Nav />
        <div className="banner couples-bg">
          <h3>
            Welcome to the <strong>Marriage and Family Forum</strong>{" "}
          </h3>
        </div>

        <h1 className="page-heading">
          <hr />
          <span>Welcome to the Marriage and Family forum</span>
          <hr />
        </h1>
        <div className="ypf-content container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p className="heading mt100">About us</p>
              <p className="header-desc">
                This forum is established for young couples who are 15 years
                into marriage and below. It is a platform focused on catering
                for all that concern the young couples as regards to marriage
                and family in other to have an outstanding and fulfilling
                marriage.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 sliding">
              <div className="small-carousel">
                <MainCarousel
                  pictures={[
                    "/ydd-photos/couples1.jpg",
                    "/ydd-photos/couples3.jpg",
                    "/ydd-photos/couples4.jpg",
                    "/ydd-photos/couples5.jpg",
                    "/ydd-photos/couples6.jpg",
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="row objectives">
            <p className="heading">Our Objectives</p>
            <h3>
              The objective of the Singles forum is to fulfill the YDD care
              mission of providing physical, spiritual and emotionally care for
              singles. This grand objective is broken down into the following:
            </h3>

            <div className="circle-wrap">
              <div className="circle couples-circles">
                <div
                  className="inner inner3"
                  style={{
                    backgroundImage: selectedItem === 0 ? `url(${bg1})` : null,
                  }}
                ></div>
                <div
                  className="inner inner2"
                  style={{
                    backgroundImage: selectedItem === 1 ? `url(${bg4})` : null,
                  }}
                ></div>
                <div
                  className="inner inner4"
                  style={{
                    backgroundImage: selectedItem === 2 ? `url(${bg3})` : null,
                  }}
                ></div>
                <div
                  className="inner inner5"
                  style={{
                    backgroundImage: selectedItem === 3 ? `url(${bg2})` : null,
                  }}
                ></div>
                <div className="text">{items[selectedItem]}</div>
              </div>
            </div>
          </div>

          <p className="heading">Our Programs</p>

          <div className="cards-wrap" style={{ marginBottom: "120px" }}>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={<img alt="example" src="/ydd-photos/couples7.jpg" />}
                >
                  <p className="card-text">Couples Forum</p>
                </Card>
              </div>
              <div className="col-md-6 col-sm-12">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={<img alt="example" src="/ydd-photos/couples2.jpg" />}
                >
                  <p className="card-text">
                    Annual Youth Weekend Young Professionals Programs
                  </p>
                </Card>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: "70px" }}>
            <div className="col-md-4">
              <div className="very-latest-post format-standard">
                <div className="title-row">
                  <h4>FEATURED</h4>
                </div>
                <ul className="blog-classic-listing">
                  <li className="format-standard">
                    <Blog
                      blog={
                        blogsList.find((b) => b.category === "Couples") ||
                        blogsList[0]
                      }
                      withImage={true}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="very-latest-post format-standard">
                <div className="title-row">
                  <h4>SOULFOOD</h4>
                </div>
                <ul className="blog-classic-listing">
                  <li className="format-standard">
                    <Blog
                      category="soulfood"
                      blog={
                        soulfoodList_.find((b) => b.category === "Couples") ||
                        soulfoodList_[0]
                      }
                      withImage={true}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="very-latest-post format-standard">
                <div className="title-row">
                  <h4>TESTIMONIES</h4>
                </div>
                <ul className="blog-classic-listing">
                  <li className="format-standard">
                    <Blog
                      category="testimonies"
                      blog={
                        testimoniesList.find((b) => b.category === "Couples") ||
                        testimoniesList[0]
                      }
                      withImage={true}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-updates cols5 clearfix">
        <ul>
          <li className="format-link">
            <Link
              href={{
                pathname: "/gallery",
                query: { category: "Couples" },
              }}
            >
              <a>
                <div className="grid-item-inner">
                  <a target="_blank" className="media-box">
                    <img
                      src="/ydd-photos/video.jpg"
                      className="attachment-400x400 size-400x400 wp-post-image"
                      alt=""
                    />
                  </a>
                </div>
              </a>
            </Link>
          </li>
          <li className="format-link">
            <div className="grid-item-inner">
              <a
                href="https://soundcloud.com/apostolic-faith-weca/sets/marriage-family-audios"
                target="_blank"
                className="media-box"
              >
                <img
                  src="/ydd-photos/sound.jpg"
                  className="attachment-400x400 size-400x400 wp-post-image"
                  alt=""
                />
              </a>
            </div>
          </li>
          <li className="format-link">
            <div className="grid-item-inner">
              <Link
                href={{
                  pathname: "/picgallery",
                  query: { category: "Couples" },
                }}
              >
                <a target="_blank" className="media-box">
                  <img
                    src="/ydd-photos/sermon.jpg"
                    className="attachment-400x400 size-400x400 wp-post-image"
                    alt=""
                  />
                </a>
              </Link>
            </div>
          </li>
          <li className="format-link">
            <div className="grid-item-inner">
              <a
                href="https://www.instagram.com/afmwecayouth/"
                target="_blank"
                className="media-box"
              >
                <img
                  src="/ydd-photos/webcast.jpg"
                  className="attachment-400x400 size-400x400 wp-post-image"
                  alt=""
                />
              </a>
            </div>
          </li>
          <li className="format-link">
            <div className="grid-item-inner">
              <a
                href="https://www.flickr.com/photos/145401401@N03/albums/with/72157677283635267"
                target="_blank"
                className="media-box"
              >
                <img
                  src="/ydd-photos/inspired.jpg"
                  className="attachment-400x400 size-400x400 wp-post-image"
                  alt=""
                />
              </a>
            </div>
          </li>
        </ul>
        <div className="gallery-updates-overlay">
          <div className="container">
            <i className="icon-multiple-image"></i>
            <h2>Updates from our gallery</h2>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
