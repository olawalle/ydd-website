import React from "react";
import "./styles/teenage.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MainCarousel from "../components/MainCarousel";
import { Card } from "antd";
import Link from "next/link";
// import "./styles/index.scss";

export default function Teenage() {
  return (
    <div className="teenage">
      <div className="body">
        <Nav />
        <div className="banner">
          <span>Welcome to the</span> <br /> <i>Teenage Homepage</i>{" "}
        </div>

        <h1 className="page-heading">
          <hr />
          <span>Welcome to the Teenage Homepage</span>
          <hr />
        </h1>
        <div className="teen-content container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p className="heading mt5">About us</p>
              <p className="header-desc">
                The Teenage Ministry is a unit within the Outreach Department
                under the Youth Development Directorate. It caters to all
                teenage activities throughout the year in Apostolic Faith, and
                brings all teenagers together, creating an avenue for them to
                share their voices, ask questions and seek counselling.
                <p
                  style={{
                    lineHeight: "30px",
                    paddingLeft: 30,
                    float: "right",
                    marginTop: 30,
                  }}
                >
                  <Link href="/about-teenagers">continue reading</Link>
                </p>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 sliding">
              <h3>
                Are you ready for the next big thing? Watch out for-{" "}
                <strong>Who wants to be a Bible Giant (Season 6)</strong>
              </h3>
              <img src="/ydd-photos/biblegiantbanner.jpg" alt="" />
            </div>
          </div>

          <div className="row giants">
            <p className="heading">Meet our Bible Giants</p>
            <h3>
              Starting 2015, the Teenage Ministry began putting together an
              annual Bible giants quiz competition aimed at promoting a
              scripture reading culture, as well as developing the spiritual
              capacity of our teenagers, in line with the Youth Development
              Directorate’s{" "}
              <span style={{ fontWeight: "600", color: "#031169" }}>
                {" "}
                <Link href="/about#vision">vision statement.</Link>{" "}
              </span>{" "}
              Below are some of the past winners of the competition
            </h3>

            <div className="main-carousel">
              <MainCarousel
                pictures={[
                  "/ydd-photos/2167.jpg",
                  "/ydd-photos/biblegiant1.jpg",
                  "/ydd-photos/2016biblegiants.jpg",
                ]}
              />
            </div>
          </div>

          <h1 className="programs-heading">Our flagship programmes</h1>
          <p className="programs-text">
            Several programmes have been set-up at various levels by the teenage
            ministry to develop our teenagers. See details of our teenage
            programme bouquet:
          </p>
          <div className="cards-wrap" style={{ marginBottom: "120px" }}>
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <p className="card-heading">BRANCH/ZONAL LEVEL</p>
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={
                    <img alt="example" src="/ydd-photos/teensprograms2.jpg" />
                  }
                >
                  <p className="card-text">
                    September Back to School <br />
                    Pre-Varsity forum/Parent Orientation <br />
                    Other Teenage specific programs at the Branch level.
                  </p>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12">
                <p className="card-heading">DISTRICT/ZONAL LEVEL</p>
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={<img alt="example" src="/ydd-photos/staff111.jpg" />}
                >
                  <p className="card-text">
                    May 27 Teenagers Programme (a part of the Youth Weekend)
                  </p>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12">
                <p className="card-heading">NATIONAL/WECA LEVEL</p>
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={
                    <img alt="example" src="/ydd-photos/teensprograms3.jpg" />
                  }
                >
                  <p className="card-text">
                    August Camp Meeting Teenagers Programs.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="main" role="main">
          <div id="content" className="content full">
            <div className="container">
              <hr className="fw"></hr>
              <div className="row">
                <div className="col-md-12">
                  <p className="heading mt100">
                    <b>From Our Blog</b>
                  </p>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6">
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
                          <h4>Featured</h4>
                        </div>
                        <img
                          src="/ydd-photos/featuredteen.jpg"
                          className="attachment-800x500 size-800x500 wp-post-image"
                          alt=""
                        />{" "}
                        <h3 className="post-title">
                          <a href="#">How many yards is your faith?</a>
                        </h3>
                        <div className="meta-data">
                          <a href="#">Teen Series 5 on August 15, 2020 in</a>{" "}
                          <a href="category/featured/index.html">
                            Teens Resources, Soul Food
                          </a>
                        </div>
                        <p>
                          You have that dream. You have that vision. You have
                          that aspiration. You have crafted and designed your
                          life perfectly in your mind. But then, how many yards
                          is your faith?
                        </p>{" "}
                        <p>
                          <Link
                            href={{
                              pathname: "/soulfood",
                              query: { category: "Teens" },
                            }}
                          >
                            <a className="basic-link">
                              Continue reading{" "}
                              <i className="fa fa-angle-right"></i>
                            </a>
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="very-latest-post format-standard">
                        <div className="title-row">
                          <a className="comments-go" title="10 comments">
                            <i className="icon-dialogue-text"></i>
                          </a>
                          <a className="comments-go">
                            <i className="icon-dialogue-text"></i>
                          </a>{" "}
                          <h4>Featured</h4>
                        </div>
                        <img
                          src="/ydd-photos/soulfood.png"
                          className="attachment-800x500 size-800x500 wp-post-image"
                          alt=""
                        />{" "}
                        <h3 className="post-title">
                          <a>Symbiotic Trust</a>
                        </h3>
                        <div className="meta-data">
                          <a>Teen Series 1</a> on August 15, 2020 in{" "}
                          <a>Teens Resources, Soul Food</a>
                        </div>
                        <h3 className="post-title">
                          <a href="#">Spiritual Immunisation</a>
                        </h3>
                        <div className="meta-data">
                          <a>Teen Series 4</a> on August 15, 2020 in{" "}
                          <a>Teens Resources, Soul Food</a>
                        </div>
                        <p>
                          <a
                            href="2018/01/24/standard-post-format/index.html"
                            className="basic-link"
                          >
                            Continue reading{" "}
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="very-latest-post format-standard">
                    <div className="title-row">
                      <a className="comments-go">
                        <i className="icon-dialogue-text"></i>
                      </a>
                      <a
                        href="2018/01/24/standard-post-format/index.html#respond"
                        className="comments-go"
                      >
                        <i className="icon-dialogue-text"></i>
                      </a>{" "}
                      <h4>TESTIMONIES</h4>
                    </div>
                    <h3 className="post-title">
                      <img
                        src="/ydd-photos/testimonies.jpg"
                        className="attachment-800x500 size-800x500 wp-post-image"
                        alt=""
                        style={{ marginBottom: 12 }}
                      />{" "}
                      <Link
                        href={{
                          pathname: "/reports",
                          query: { category: "Teens" },
                        }}
                      >
                        <a>Taught by God</a>
                      </Link>
                    </h3>
                    <div className="meta-data">
                      by <a>Ayomide Aderibigbe</a> on August 14, 2020 in{" "}
                      <Link
                        href={{
                          pathname: "/reports",
                          query: { category: "Teens" },
                        }}
                      >
                        <a>in Teens Resources, My School Experience</a>
                      </Link>
                    </div>
                    <br />
                    <h3 className="post-title">
                      <Link
                        href={{
                          pathname: "/reports",
                          query: { category: "Teens" },
                        }}
                      >
                        <a>Trusting God</a>
                      </Link>
                    </h3>
                    <div className="meta-data">
                      by <a>Bolude Ajiboye</a> on August 15, 2020 in{" "}
                      <Link
                        href={{
                          pathname: "/reports",
                          query: { category: "Teens" },
                        }}
                      >
                        <a>in Teens Resources, My School Experience</a>
                      </Link>
                    </div>
                  </div>
                </div>
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
                query: { category: "Teens" },
              }}
            >
              <a>
                <div className="grid-item-inner">
                  <a target="_blank" className="media-box">
                    <img
                      src="/ydd-photos/teensvids.jpg"
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
                href="https://soundcloud.com/apostolic-faith-weca/sets/ydd-teens-audios"
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
                  query: { category: "Teens" },
                }}
              >
                <a target="_blank" className="media-box">
                  <img
                    src="/ydd-photos/teenspics.jpg"
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
                  src="/ydd-photos/inspired.jpg"
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
                  pathname: "/reports",
                  query: { category: "Teens" },
                }}
              >
                <a target="_blank" className="media-box">
                  <img
                    src="/ydd-photos/teensreport.jpg"
                    className="attachment-400x400 size-400x400 wp-post-image"
                    alt=""
                  />
                </a>
              </Link>
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
