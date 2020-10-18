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
    `To bridge the gap for our teenagers
    between when they leave the Elementary
    Department and when they get
    admitted into higher institutions.`,
    `To make them know who they are in Christ
    from an early stage in their lives.`,
    `To promote all-round excellence
    among our teenagers.`,
    `To  promote the heart and culture
    of the gospel among our teenagers.`,
    `To prepare a ready-made army to lunch into
    the campus world and "Let the light shine".`,
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
        <div className="banner teens">
          <p>
            ABOUT <span>Teenage Ministry</span>
          </p>
        </div>
        <p style={{ lineHeight: "30px", paddingLeft: 30 }}>
          <Link href="/teenage">Back to Teenage Home</Link>
        </p>

        <h1 className="page-heading">
          <hr style={{ width: "50%" }} />
          <span>About us</span>
          <hr style={{ width: "30%" }} />
        </h1>
        <div className="ypf-content container">
          <div className="row">
            <p className="header-desc" style={{ border: 0, paddingBottom: 10 }}>
              The Teenage Ministry is a unit within the Outreach Department
              under the Youth Development Directorate. During their gatherings,
              they handle different aspects of the service from singing to the
              playing of musical instruments which give them a sense of
              belonging in the church.
            </p>
            <p
              className="header-desc"
              style={{
                border: 0,
                paddingTop: 0,
                paddingBottom: 10,
                width: "100%",
                marginBottom: 0,
              }}
            >
              Further details of this unit are shared below:
            </p>
          </div>
          <div className="stagnant">WHO IS A TEANAGER?</div>
          <div className="row">
            <p className="header-desc" style={{ border: 0, paddingBottom: 10 }}>
              The Teenage Ministry is focused on profering guidance to the AFM
              WECA Teenagers. This then raises the question - Who is a Teenager?
            </p>
            <p
              className="header-desc"
              style={{
                border: 0,
                paddingTop: 0,
                paddingBottom: 10,
                width: "100%",
                marginBottom: 0,
              }}
            >
              A teenager, or teen, is a young person whose age falls within the
              range of 13–19. They are called teenagers because their age number
              ends with "teen”… (Wikipedia)
            </p>
            <p
              className="header-desc"
              style={{
                border: 0,
                paddingTop: 0,
                paddingBottom: 10,
                width: "100%",
                marginBottom: 0,
              }}
            >
              Categories of those who fall into this Group – Teenage:
            </p>{" "}
            <br />
            <p
              className="header-desc"
              style={{
                border: 0,
                paddingTop: 0,
                paddingBottom: 10,
                width: "100%",
                marginBottom: 0,
              }}
            >
              <ol>
                <li>Those between ages 13-19.</li>
                <li>
                  All secondary school students irrespective of their age.
                </li>
                <li>All youths seeking admission irrespective of their age</li>
              </ol>
            </p>
            <p className="header-desc" style={{ border: 0 }}>
              Note: This group excludes all higher institution students
              irrespective of the age.
            </p>
          </div>
          <div className="row objectives">
            <p className="heading">Our Objectives</p>
            <h3>
              The objective of the Singles forum is to fulfill the YDD care
              mission of providing physical, spiritual and emotionally care for
              singles. This grand objective is broken down into the following:
            </h3>

            <div className="circle-wrap teens-circle">
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
          <div className="cards-wrap" style={{ marginBottom: "120px" }}>
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <p>BRANCH/ZONAL LEVEL</p>
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={
                    <img alt="example" src="/ydd-photos/teensprograms1.jpg" />
                  }
                >
                  <p className="card-text">
                    Specific programmes targeted at Teenagers, at least once in
                    a quarter at Branch level. September Back to School
                  </p>
                  <p className="card-text">
                    Pre-Varsity/Parent Orientation – Yearly session with SS2/SS3
                    students with their parents.
                  </p>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12">
                <p>DISTRICT/ZONAL LEVEL</p>
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={
                    <img alt="example" src="/ydd-photos/teensprograms.jpg" />
                  }
                >
                  <p className="card-text">
                    May 27 Teenagers Programme – Youth Weekend (during this
                    programme, district representatives for “Who wants to be a
                    Bible Giant” are selected based on their performance).
                  </p>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12">
                <p>NATIONAL/WECA LEVEL</p>
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={<img alt="example" src="/ydd-photos/praying.jpg" />}
                >
                  <p className="card-text">
                    August Camp Meeting Teenagers Programmes.
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
                          <a
                            href="#"
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
                          by <a href="#">Rey Richardson</a> on January 24, 2018
                          in <a href="#">in Youth Resources, Soul Foods</a>
                        </div>
                        <p>
                          The way to winning souls is not to be just like the
                          sinner, but to make the sinner want to be just like
                          the Christian.
                        </p>{" "}
                        <p>
                          <a href="#" className="basic-link">
                            Continue reading{" "}
                            <i className="fa fa-angle-right"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="very-latest-post format-standard">
                        <div className="title-row">
                          <a
                            href="#"
                            className="comments-go"
                            title="10 comments"
                          >
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
                            Symbiotic Trust
                          </a>
                        </h3>
                        <div className="meta-data">
                          Teen Series 4 on August 15, 2020 i
                          <a href="category/featured/index.html">
                            in Youth Resources, Soul Foods
                          </a>
                        </div>
                        <h3 className="post-title">
                          <a href="2018/01/24/standard-post-format/index.html">
                            Spiritual Immunisation
                          </a>
                        </h3>
                        <div className="meta-data">
                          Teen Series 4 on August 15, 2020 i
                          <a href="category/featured/index.html">
                            in Youth Resources, Soul Foods
                          </a>
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
                      <a href="#">Taught by God</a>
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
                      <a href="#">Trusting God</a>
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
            <Link href="/gallery">
              <a>
                <div className="grid-item-inner">
                  <a href="#" target="_blank" className="media-box">
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
                href="http://www.imithemes.com/"
                target="_blank"
                className="media-box"
              >
                <img
                  src="/ydd-photos/sermon.jpg"
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
