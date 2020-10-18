import React, { useState } from "react";
import Nav from "../components/Nav";
import "./styles/ypf.scss";
import { Card } from "antd";
import Footer from "../components/Footer";
import MainCarousel from "../components/MainCarousel";
import { useEffect } from "react";
import Link from "next/link";

export default function Ypf() {
  const [items, setitems] = useState([
    `To create sustainable livelihoods for
    young people through the provision
    of support in the form of
    refundable grants for the expansion
    of their businesses.`,
    `To encourage young professionals
  to participate in the work of
  God and spread the gospel through-out
  Africa and beyond`,
    `To provide mentorship programmes
to young professionals of the Apostolic
Faith church WECA, to develop
potentials and facilitate achievement
of goals.`,
    `To promote innovative ideas for
economic, social development and
leadership among the Apostolic faith
young people.`,
    `To develop and create various
channels for skill acquisition and
self-improvement for young
professionals in various fields
of human endeavour.`,
  ]);
  const [selectedItem, setselectedItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      selectedItem < 4 ? setselectedItem(selectedItem + 1) : setselectedItem(0);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [selectedItem]);

  return (
    <div className="ypf">
      <div className="body">
        <Nav />
        <div className="banner">
          <p>
            WELCOME TO THE <span>Young Professionals Forum</span>
          </p>
        </div>

        <h1 className="page-heading">
          <hr />
          <span>YOUNG PROFESSIONALS FORUM (YPF)</span>
          <hr />
        </h1>
        <div className="ypf-content container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p className="heading mt100">About us</p>
              <p className="header-desc">
                The Young Professionals forum (YPF) is a Non-governmental
                Organisation comprising of young professionals of the Apostolic
                Faith Church in West and Central Africa. Under the umbrella of
                the Youth Development Directorate (YDD), the YPF brings together
                professionals from various fields of human endeavours including
                career professionals, as well as those in the entrepreneurial
                space.
              </p>
            </div>
            <div className="col-sm-12 col-md-6 sliding">
              <div className="small-carousel">
                <MainCarousel
                  pictures={[
                    "/ydd-photos/ypfslide1.jpg",
                    "/ydd-photos/ypfslide2.jpg",
                    "/ydd-photos/ypfslide3.jpg",
                    "/ydd-photos/ypfslide4.jpg",
                    "/ydd-photos/ypfslide5.jpg",
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="row objectives">
            <p className="heading">Our Objectives</p>
            <h3>
              The objective of the YPF is to fulfill the YDD care mission of
              providing physical, spiritual and emotionally care to young
              people. This grand objective is broken down into the following:
            </h3>

            <div className="circle-wrap">
              <div className="circle">
                <div
                  className="inner inner1"
                  style={{
                    backgroundImage:
                      selectedItem === 0 ? `url('/ydd-photos/ypf5.jpg')` : null,
                  }}
                ></div>
                <div
                  className="inner inner3"
                  style={{
                    backgroundImage:
                      selectedItem === 1 ? `url('/ydd-photos/ypf3.jpg')` : null,
                  }}
                ></div>
                <div
                  className="inner inner2"
                  style={{
                    backgroundImage:
                      selectedItem === 2 ? `url('/ydd-photos/ypf2.jpg')` : null,
                  }}
                ></div>
                <div
                  className="inner inner4"
                  style={{
                    backgroundImage:
                      selectedItem === 3 ? `url('/ydd-photos/ypf4.jpg')` : null,
                  }}
                ></div>
                <div
                  className="inner inner5"
                  style={{
                    backgroundImage:
                      selectedItem === 4 ? `url('/ydd-photos/ypf1.jpg')` : null,
                  }}
                ></div>
                <div className="text">{items[selectedItem]}</div>
              </div>
            </div>
          </div>

          <p className="heading">Our Programs</p>
          <p className="inner-desc">
            The YPF has put together several programs in order to achieve her
            objectives. A few of these programs are stated below:
          </p>
          <div className="cards-wrap" style={{ marginBottom: "120px" }}>
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={<img alt="example" src="/ydd-photos/skill1.jpg" />}
                >
                  <p className="card-text">
                    Young Professionals Exhibition at the Annual International
                    Youth Camp
                  </p>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={<img alt="example" src="/ydd-photos/skill2.jpg" />}
                >
                  <p className="card-text">
                    Annual Youth Weekend Young Professionals Programs
                  </p>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={<img alt="example" src="/ydd-photos/skill3.jpg" />}
                >
                  <p className="card-text">
                    Periodic skill acquisition programs (e.g. Google Digital
                    Skills, Bootcamps etc)
                  </p>
                </Card>
              </div>
            </div>
          </div>

          <div id="content" className="content full">
            <div className="container">
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
                          <a className="comments-go" title="10 comments">
                            <i className="icon-dialogue-text"></i>
                          </a>
                          <a className="comments-go">
                            <i className="icon-dialogue-text"></i>
                          </a>{" "}
                          <h4>Featured</h4>
                        </div>
                        <h3 className="post-title">
                          <a>Agent Of Change</a>
                        </h3>
                        <div className="meta-data">
                          by <a>Rey Richardson</a> on January 24, 2018 in{" "}
                          <a>in Youth Resources, Soul Foods</a>
                        </div>
                        <p>
                          The way to winning souls is not to be just like the
                          sinner, but to make the sinner want to be just like
                          the Christian.
                        </p>{" "}
                        <p>
                          <a className="basic-link">
                            Continue reading{" "}
                            <i className="fa fa-angle-right"></i>
                          </a>
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
                          by{" "}
                          <a href="author/imicreation/index.html">
                            Rey Richardson
                          </a>{" "}
                          on January 24, 2018 in{" "}
                          <a href="category/featured/index.html">
                            in Youth Resources, Soul Foods
                          </a>
                        </div>
                        <p>
                          The way to winning souls is not to be just like the
                          sinner, but to make the sinner want to be just like
                          the Christian.
                        </p>{" "}
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
                      <a
                        href="blog-post.html#comments"
                        className="comments-go"
                        title="10 comments"
                      >
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
                    <img
                      src="/ydd-photos/testimonies.jpg"
                      className="attachment-800x500 size-800x500 wp-post-image"
                      alt=""
                    />{" "}
                    <h3 className="post-title">
                      <a>Taught by God</a>
                    </h3>
                    <div className="meta-data">
                      by{" "}
                      <a href="author/imicreation/index.html">
                        Ayomide Aderibigbe
                      </a>{" "}
                      on August 14, 2020 in{" "}
                      <a href="category/featured/index.html">
                        in Teens Resources, My School Experience
                      </a>
                    </div>
                    <br />
                    <h3 className="post-title">
                      <a>Trusting God</a>
                    </h3>
                    <div className="meta-data">
                      by{" "}
                      <a href="author/imicreation/index.html">Bolude Ajiboye</a>{" "}
                      on August 15, 2020 in{" "}
                      <a href="category/featured/index.html">
                        in Teens Resources, My School Experience
                      </a>
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
                query: { category: "YPF" },
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
                href="https://soundcloud.com/apostolic-faith-weca/sets/ydd-ypf-audios"
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
                  query: { category: "YPF" },
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
