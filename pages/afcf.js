import React from "react";
import "./styles/afcf.scss";
import Nav from "../components/Nav";
import { Button, Row, Col, Modal } from "antd";
import Footer from "../components/Footer";
import { useState } from "react";
import MainCarousel from "../components/MainCarousel";
import Link from "next/link";
import Blog from "../components/Blog";
import { blogsList } from "../mocks/blogsList";
import { testimoniesList } from "../mocks/testimoniesList";
import { soulfoodList_ } from "../mocks/soulfoodList";

export default function afcf() {
  const [visible, setvisible] = useState(false);
  return (
    <div className='afcf'>
      <Nav />
      <div className='banner'>
        <p>APOSTOLIC FAITH CAMPUS FELLOWSHIP (AFCF)</p>
        <Button shape='round' size='large' style={{ marginRight: "12px" }}>
          Register
        </Button>{" "}
        <br />
        <Button
          style={{ marginTop: 12 }}
          type='primary'
          shape='round'
          size='large'
        >
          <Link href='/contact'>Contact us</Link>
        </Button>
      </div>
      <div className='container'>
        <div className='afcf-content'>
          <h1 className='page-heading'>
            <hr />
            <span>Welcome to the AFCF Homepage</span>
            <hr />
          </h1>

          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <p className='heading mt100'>About us</p>
              <p className='header-desc'>
                Apostolic Faith Campus Fellowship (AFCF) is the Campus wing of
                The Apostolic Faith Church, under the auspices of the Outreach
                Department of the Youth Development Directorate (YDD). She is a
                body made up of Christian students across various higher
                institutions in West and Central Africa (WeCA). AFCF was
                formerly known as Association of Visiting Secretaries (AVS),
                modified to Campus AVS.
              </p>
              <Link href='/about-afcf'>
                <a style={{ float: "right" }}>Continue reading...</a>
              </Link>
            </div>
            <div className='col-sm-12 col-md-6 sliding'>
              <img src='/ydd-photos/afcfprogram.jpg' alt='' />
            </div>
          </div>

          <div className='main-carousel' style={{ paddingTop: "30px" }}>
            <hr />
            <MainCarousel
              pictures={[
                "/ydd-photos/afcf2.jpg",
                "/ydd-photos/afcf3.jpg",
                "/ydd-photos/afcf5.jpg",
                "/ydd-photos/afcfslider4.jpg",
                "/ydd-photos/afcfslider5.jpg",
                "/ydd-photos/afcfslider5.jpg",
                "/ydd-photos/img_sermon216.jpg",
              ]}
            />
            <hr />
          </div>

          <div className='row' style={{ marginTop: "70px" }}>
            <div className='col-md-4'>
              <div className='very-latest-post format-standard'>
                <div className='title-row'>
                  <h4>FEATURED</h4>
                </div>
                <ul className='blog-classic-listing'>
                  <li className='format-standard'>
                    <Blog
                      blog={
                        blogsList.find((b) => b.category === "AFCF") ||
                        blogsList[0]
                      }
                      withImage={true}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='very-latest-post format-standard'>
                <div className='title-row'>
                  <h4>SOULFOOD</h4>
                </div>
                <ul className='blog-classic-listing'>
                  <li className='format-standard'>
                    <Blog
                      category='soulfood'
                      blog={
                        soulfoodList_.find((b) => b.category === "AFCF") ||
                        soulfoodList_[0]
                      }
                      withImage={true}
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='very-latest-post format-standard'>
                <div className='title-row'>
                  <h4>TESTIMONIES</h4>
                </div>
                <ul className='blog-classic-listing'>
                  <li className='format-standard'>
                    <Blog
                      category='testimonies'
                      blog={
                        testimoniesList.find((b) => b.category === "AFCF") ||
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

      <div className='gallery-updates cols5 clearfix'>
        <ul>
          <li className='format-link'>
            <Link
              href={{
                pathname: "/gallery",
                query: { category: "AFCF" },
              }}
            >
              <a>
                <div className='grid-item-inner'>
                  <a target='_blank' className='media-box'>
                    <img
                      src='/ydd-photos/Campus_Videos.jpg'
                      className='attachment-400x400 size-400x400 wp-post-image'
                      alt=''
                    />
                  </a>
                </div>
              </a>
            </Link>
          </li>
          <li className='format-link'>
            <div className='grid-item-inner'>
              <a
                href='https://soundcloud.com/apostolic-faith-weca/sets/afcf-inspiring-audios'
                target='_blank'
                className='media-box'
              >
                <img
                  src='/ydd-photos/sound.jpg'
                  className='attachment-400x400 size-400x400 wp-post-image'
                  alt=''
                />
              </a>
            </div>
          </li>
          <li className='format-link'>
            <div className='grid-item-inner'>
              <Link
                href={{
                  pathname: "/picgallery",
                  query: { category: "AFCF" },
                }}
              >
                <a target='_blank' className='media-box'>
                  <img
                    src='/ydd-photos/Campus_Photos.jpg'
                    className='attachment-400x400 size-400x400 wp-post-image'
                    alt=''
                  />
                </a>
              </Link>
            </div>
          </li>
          <li className='format-link'>
            <div className='grid-item-inner'>
              <a
                href='https://www.instagram.com/afmwecayouth/'
                target='_blank'
                className='media-box'
              >
                <img
                  src='/ydd-photos/inspired.jpg'
                  className='attachment-400x400 size-400x400 wp-post-image'
                  alt=''
                />
              </a>
            </div>
          </li>
          <li className='format-link'>
            <div className='grid-item-inner'>
              <Link
                href={{
                  pathname: "/reports",
                  query: { category: "AFCF" },
                }}
              >
                <a target='_blank' className='media-box'>
                  <img
                    src='/ydd-photos/Campus_Reports.jpg'
                    className='attachment-400x400 size-400x400 wp-post-image'
                    alt=''
                  />
                </a>
              </Link>
            </div>
          </li>
        </ul>
        <div className='gallery-updates-overlay'>
          <div className='container'>
            <i className='icon-multiple-image'></i>
            <h2>Updates from our gallery</h2>
          </div>
        </div>
      </div>
      <Footer />
      <Modal
        title='Our Mission'
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
