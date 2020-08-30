import React from "react";
import "./styles/afcf.scss";
import Nav from "../components/Nav";
import { Button, Row, Col, Modal } from "antd";
import Footer from "./components/Footer";
import { useState } from "react";

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
          <div className="heading">About us</div>
          <h3>
            <p>
              Apostolic Faith Campus Fellowship (AFCF) is the Campus wing of The
              Apostolic Faith Church, under the auspices of the Outreach
              Department of the Youth Development Directorate (YDD). She is a
              body made up of Christian students across various higher
              institutions in West and Central Africa (WeCA).{" "}
            </p>
            <p>
              AFCF was formerly known as Association of Visiting Secretaries
              (AVS), modified to Campus AVS. She shares the burning vision of
              the YDD "to raise and retain an army of outstanding young people
              going to heaven and persuading others to come along”. Members of
              the AFCF see to the fulfilment of this vision on their various
              campuses and institutions of higher learning.{" "}
            </p>
            <p>
              Members are encouraged to seek God and in turn, bring others to
              Christ by the lives they live. Therefore, young soldiers can be
              raised and efforts geared towards nurturing them through the
              undiluted word of God and doctrinal practices as ordained by God
              through His Church.
            </p>
            <p>
              The main aim of every member is to get to Heaven at last and not
              alone - but with as many students within our reach through various
              means of evangelism, because we have been empowered to be
              witnesses on our campuses.
            </p>
            <p>
              AFCF as a body organises programmes that cut across various
              spheres of a student's life; particularly the academic, physical,
              spiritual and social spheres. Her programmes are organised
              appealingly to every individual in the school community.
            </p>
          </h3>

          <Row>
            <Col className="gutter-row" span={6}>
              <div className="grid1">APOSTOLIC FAITH CAMPUS FELLOWSHIP</div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="grid2">
                <div className="inner-slide">
                  <p>Our Vision</p>
                  <span>
                    To raise and retain an army of outstanding young people
                    going to Heaven and persuading others to come along.
                  </span>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="grid2 grid3">
                <div className="inner-slide">
                  <p>Our Mission</p>
                  <span>
                    AFCF mission borders on the strong pillars through which it
                    reaches out to students and they are...
                    <Button onClick={() => setvisible(true)} size="small">
                      Learn more
                    </Button>
                  </span>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="grid2 grid4"></div>
            </Col>
          </Row>

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
                  <a
                    href="2018/01/24/standard-post-format/index.html#respond"
                    className="comments-go"
                  >
                    <i className="icon-dialogue-text"></i>
                  </a>{" "}
                  <h4>FEATURED</h4>
                </div>
                <img
                  src="/ydd-photos/slide1-800x500.jpg"
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
                  <a
                    href="2018/01/24/standard-post-format/index.html#respond"
                    className="comments-go"
                  >
                    <i className="icon-dialogue-text"></i>
                  </a>{" "}
                  <h4>SOUL FOOD</h4>
                </div>
                <img
                  src="/ydd-photos/slide1-800x500.jpg"
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
