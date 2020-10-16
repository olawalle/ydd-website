import React from "react";
import "./styles/afcf.scss";
import Nav from "../components/Nav";
import { Button, Row, Col, Modal } from "antd";
import Footer from "./components/Footer";
import { useState } from "react";
import MainCarousel from "./components/MainCarousel";
import Link from "next/link";

export default function afcf() {
  const [visible, setvisible] = useState(false);
  return (
    <div className="afcf">
      <Nav />
      <div className="banner">
        <p>APOSTOLIC FAITH CAMPUS FELLOWSHIP (AFCF)</p>
        <Button shape="round" size="large" style={{ marginRight: "12px" }}>
          Register
        </Button>
        <Button type="primary" shape="round" size="large">
          Contact us
        </Button>
      </div>
      <div className="container">
        <div className="afcf-content">
          <div className="top-btns">
            <Button
              type="primary"
              shape="round"
              size="large"
              className="f-left"
            >
              Contact us
            </Button>
            <Button type="primary" shape="round" size="large">
              Contact us
            </Button>
            <Button
              type="primary"
              shape="round"
              size="large"
              className="f-right"
            >
              Contact us
            </Button>
          </div>

          <h1 className="page-heading">
            <hr />
            <span>Welcome to the AFCF Homepage</span>
            <hr />
          </h1>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p className="heading mt100">About us</p>
              <p className="header-desc">
                Apostolic Faith Campus Fellowship (AFCF) is the Campus wing of
                The Apostolic Faith Church, under the auspices of the Outreach
                Department of the Youth Development Directorate (YDD). She is a
                body made up of Christian students across various higher
                institutions in West and Central Africa (WeCA). AFCF was
                formerly known as Association of Visiting Secretaries (AVS),
                modified to Campus AVS.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 sliding">
              <img src="/ydd-photos/afcfprogram.jpg" alt="" />
            </div>
          </div>

          <div className="main-carousel" style={{ paddingTop: "30px" }}>
            <hr />
            <MainCarousel
              pictures={[
                "/ydd-photos/follow.jpg",
                "/ydd-photos/slide8.jpg",
                "/ydd-photos/slide3.jpg",
                "/ydd-photos/slide8.png",
              ]}
            />
            <hr />
          </div>

          <div className="row" style={{ marginTop: "70px" }}>
            <div className="col-md-4">
              <div className="very-latest-post format-standard">
                <div className="title-row">
                  <a
                    href="blog-post.html#comments"
                    className="comments-go"
                    title="10 comments"
                  >
                    <i className="icon-dialogue-text"></i>
                  </a>
                  <a href="#" className="comments-go">
                    <i className="icon-dialogue-text"></i>
                  </a>{" "}
                  <h4>FEATURED</h4>
                </div>
                <img
                  src="/ydd-photos/afcfreport.jpg"
                  className="attachment-800x500 size-800x500 wp-post-image"
                  alt=""
                />{" "}
                <h3 className="post-title">
                  <a href="2018/01/24/standard-post-format/index.html">
                    Agent Of Change
                  </a>
                </h3>
                <div className="meta-data">
                  by <a href="author/imicreation/index.html">Rey Richardson</a>{" "}
                  on January 24, 2018 in{" "}
                  <a href="category/featured/index.html">
                    in Youth Resources, Soul Foods
                  </a>
                </div>
                <p>
                  The way to winning souls is not to be just like the sinner,
                  but to make the sinner want to be just like the Christian.
                </p>{" "}
                <p>
                  <a href="#" className="basic-link">
                    Continue reading <i className="fa fa-angle-right"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="very-latest-post format-standard">
                <div className="title-row">
                  <a href="#" className="comments-go" title="10 comments">
                    <i className="icon-dialogue-text"></i>
                  </a>
                  <a href="#" className="comments-go">
                    <i className="icon-dialogue-text"></i>
                  </a>{" "}
                  <h4>SOUL FOOD</h4>
                </div>
                <img
                  src="/ydd-photos/soulfood.png"
                  className="attachment-800x500 size-800x500 wp-post-image"
                  alt=""
                />{" "}
                <h3 className="post-title">
                  <a href="2018/01/24/standard-post-format/index.html">
                    Agent Of Change
                  </a>
                </h3>
                <div className="meta-data">
                  by <a href="author/imicreation/index.html">Rey Richardson</a>{" "}
                  on January 24, 2018 in{" "}
                  <a href="category/featured/index.html">
                    in Youth Resources, Soul Foods
                  </a>
                </div>
                <p>
                  The way to winning souls is not to be just like the sinner,
                  but to make the sinner want to be just like the Christian.
                </p>{" "}
                <p>
                  <a
                    href="2018/01/24/standard-post-format/index.html"
                    className="basic-link"
                  >
                    Continue reading <i className="fa fa-angle-right"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="very-latest-post format-standard">
                <div className="title-row">
                  <a
                    href="blog-post.html#comments"
                    className="comments-go"
                    title="10 comments"
                  >
                    <i className="icon-dialogue-text"></i>
                  </a>
                  <h4>TESTIMONIES</h4>
                </div>
                <img
                  src="/ydd-photos/testimonies.jpg"
                  className="attachment-800x500 size-800x500 wp-post-image"
                  alt=""
                />{" "}
                <h3 className="post-title">
                  <a href="2018/01/24/standard-post-format/index.html">
                    Agent Of Change
                  </a>
                </h3>
                <div className="meta-data">
                  by <a href="author/imicreation/index.html">Rey Richardson</a>{" "}
                  on January 24, 2018 in{" "}
                  <a href="category/featured/index.html">
                    in Youth Resources, Soul Foods
                  </a>
                </div>
                <p>
                  The way to winning souls is not to be just like the sinner,
                  but to make the sinner want to be just like the Christian.
                </p>{" "}
                <p>
                  <a
                    href="2018/01/24/standard-post-format/index.html"
                    className="basic-link"
                  >
                    Continue reading <i className="fa fa-angle-right"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-updates cols5 clearfix">
        <ul>
          <li className="format-link">
            <Link href="/gallery">
              <a>
                <div className="grid-item-inner">
                  <a target="_blank" className="media-box">
                    <img
                      src="/ydd-photos/Campus Videos.jpg"
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
                href="https://www.flickr.com/photos/145401401@N03/albums/72157707542025395"
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
              <a
                href="https://vimeo.com/manage/folders/2583758"
                target="_blank"
                className="media-box"
              >
                <img
                  src="/ydd-photos/Campusphotos.jpg"
                  className="attachment-400x400 size-400x400 wp-post-image"
                  alt=""
                />
              </a>
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
                  src="/ydd-photos/inspired.jpg"
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
                  src="/ydd-photos/Campus Reports.jpg"
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
      <Modal
        title="Our Mission"
        footer={false}
        visible={visible}
        onCancel={() => setvisible(false)}
      >
        <ul>
          <li>
            Structure: AFCF has a well-built structure whereby a very deliberate
            channel of help is available to every student that identifies with
            the body.
          </li>
          <li>
            Platform: AFCF provides a sustainable platform for the building of
            young minds in the way of the Lord. This is done by providing a
            great team spirit and an atmosphere for togetherness between
            students and the church.
          </li>
          <li>
            Programme: AFCF organizes weekly programmes for the total
            edification (spiritually and academically) of students in all
            campuses where the fellowship is present. The AFCF also holds two
            nation-wide programs twice every year in all her campuses. This goes
            a long way to reach out to students on the campuses and God has
            always used such programmes mightily to break the power of hell and
            deliver students from their misery.
          </li>
          <li>
            Care: The love among the brethren serve as a bedrock for the
            flourishing of this family of God. Everyone looks out for one
            another and helps when the need arises.
          </li>
        </ul>
      </Modal>
    </div>
  );
}
