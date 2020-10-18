import React from "react";
import "./styles/afcmf.scss";
import Nav from "../components/Nav";
import { Button, Row, Col, Modal, Card } from "antd";
import Footer from "../components/Footer";
import { useState } from "react";
import MainCarousel from "../components/MainCarousel";
import Link from "next/link";

export default function Afcmf() {
  const [visible, setvisible] = useState(false);
  return (
    <div className="afcmf">
      <Nav />
      <div className="banner">
        <p>APOSTOLIC FAITH CORPS MEMBERS FELLOWSHIP (AFCMF)</p>
        <Button shape="round" size="large" style={{ marginRight: "12px" }}>
          Register
        </Button>{" "}
        <br />
        <Button
          style={{ marginTop: 12 }}
          type="primary"
          shape="round"
          size="large"
        >
          Contact us
        </Button>
      </div>
      <div className="container">
        <div className="afcf-content">
          <h1 className="page-heading">
            <hr />
            <span>Welcome to the AFCMF Homepage</span>
            <hr />
          </h1>

          <div className="row">
            <div className="col-md-12 col-sm-12">
              <p className="header-desc">
                In line with the Youth Development Directorate’s{" "}
                <Link href="/about#vision">
                  <a href="" style={{ fontWeight: "600" }}>
                    vision statement
                  </a>
                </Link>{" "}
                of “raising an army of outstanding young people going to heaven
                and persuading others to come along”, the Apostolic Faith Corps
                Members Fellowship (AFCMF) was created. AFCMF is an outreach arm
                of the Apostolic Faith Youth Development Directorate (YDD). The
                aim of the fellowship is to persuasively link and commit corps
                members to the church and her activities, thereby fueling their
                interest and active participation.
              </p>
            </div>
          </div>

          <div className="main-carousel" style={{ paddingTop: "30px" }}>
            <MainCarousel
              pictures={[
                "/ydd-photos/afcmfslide1.jpg",
                "/ydd-photos/afcmfslide2.jpg",
                "/ydd-photos/afcmfslide3.jpg",
                "/ydd-photos/afcmfslide4.jpg",
              ]}
            />
          </div>

          <p
            className="heading"
            style={{
              textAlign: "center",
              width: "80%",
              borderBottom: "1px solid #05982e",
              margin: "50px auto 10px",
            }}
          >
            Our Programs and Events
          </p>
          <p
            className="inner-desc"
            style={{ border: 0, marginBottom: 0, paddingBottom: 0 }}
          >
            All members of AFCMF would take part in all the three (3) programmes
            and three (3) major events within their calendar year which are
            stated below:
          </p>
          <div className="cards-wrap" style={{ marginBottom: "120px" }}>
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={<img alt="example" src="/ydd-photos/outreach.jpg" />}
                >
                  <p className="card-text">Outreach</p>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={<img alt="example" src="/ydd-photos/reachout.jpg" />}
                >
                  <p className="card-text">Reach-out</p>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={
                    <img alt="example" src="/ydd-photos/regionalretreat.jpg" />
                  }
                >
                  <p className="card-text">Regional Retreat</p>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={<img alt="example" src="/ydd-photos/camp.jpg" />}
                >
                  <p className="card-text">Orientation camp</p>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={<img alt="example" src="/ydd-photos/agm.jpg" />}
                >
                  <p className="card-text">Annual General Meeting</p>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={<img alt="example" src="/ydd-photos/iycparrade.jpg" />}
                >
                  <p className="card-text">IYC Parade</p>
                </Card>
              </div>
            </div>
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
                  <Link
                    href={{
                      pathname: "/soulfood",
                      query: { category: "AFCMF" },
                    }}
                  >
                    <a className="basic-link">
                      Continue reading <i className="fa fa-angle-right"></i>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="very-latest-post format-standard">
                <div className="title-row">
                  <a className="comments-go" title="10 comments">
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
                  <a>Agent Of Change</a>
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
                  <Link
                    href={{
                      pathname: "/testimonies",
                      query: { category: "AFCMF" },
                    }}
                  >
                    <a className="basic-link">
                      Continue reading <i className="fa fa-angle-right"></i>
                    </a>
                  </Link>
                </p>
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
                query: { category: "AFCMF" },
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
                href="https://soundcloud.com/apostolic-faith-weca/sets/afcmf-inspiring-audios"
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
                  query: { category: "AFCMF" },
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
              <Link
                href={{
                  pathname: "/reports",
                  query: { category: "AFCMF" },
                }}
              >
                <a target="_blank" className="media-box">
                  <img
                    src="/ydd-photos/youthreportgallery.jpg"
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
