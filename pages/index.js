/** @format */

import Head from "next/head";
import Nav from "../components/Nav";
import Link from "next/link";
import "./styles/index.scss";
import MainCarousel from "./components/MainCarousel";
import Vision from "./components/Vision";
import Platforms from "./components/Platforms";
import Footer from "./components/Footer";
import Event from "./components/Event";
import { eventsList } from "../mocks/eventsList";
import { useEffect } from "react";
import * as dayjs from "dayjs";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [countdown, setcountdown] = useState({
    second: 0,
    minute: 0,
    hour: 0,
    day: 0,
  });
  useEffect(() => {
    // axios.get(
    //   "http://api.soundcloud.com/users/apostolic-faith-weca/playlists?client_id=0gk6cWFxRJcIGpDjYPiqm0zXGM6O6cLx"
    // );

    const interval = setInterval(() => {
      let today = dayjs(eventsList[0].date);
      let endDate = dayjs();
      let second = today.diff(endDate, "second") % 60;
      let minute = today.diff(endDate, "minute") % 60;
      let hour = today.diff(endDate, "hour") % 24;
      let day = today.diff(endDate, "day") % 24;
      setcountdown({
        second: second ? second : 60,
        minute: minute ? minute : 60,
        hour,
        day,
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="wrapper index">
      <div className="body">
        <Nav />
        <div className="main-carousel">
          <MainCarousel
            pictures={[
              "/ydd-photos/follow.jpg",
              "/ydd-photos/slide8.jpg",
              "/ydd-photos/slide3.jpg",
              "/ydd-photos/slide8.png",
            ]}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "300px",
            marginBottom: "-250px",
            marginTop: "-75px",
            backgroundColor: "#f8f8f8",
          }}
        ></div>

        <Vision />

        <Platforms />

        <div className="main" role="main">
          <div id="content" className="content full">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-sm-5" id="sidebar-col">
                  <div
                    id="event_counter-1"
                    className="widget sidebar-widget widget_event_counter"
                  >
                    <section className="upcoming-event format-standard event-list-item event-dynamic">
                      <a className="media-box">
                        <img
                          src={eventsList[0].banner}
                          className="attachment-600x400 size-600x400 wp-post-image"
                          alt=""
                        />
                      </a>
                      <div className="upcoming-event-content">
                        <span
                          className="label label-primary upcoming-event-label"
                          style={{ backgroundColor: "#3aafdb" }}
                        >
                          Next coming event
                        </span>
                        <h3>
                          <a className="event-title">{eventsList[0].name}</a>
                        </h3>
                        <span className="meta-data">
                          On{" "}
                          <span className="event-date">
                            {dayjs(eventsList[0].date).format("DD MMM, YYYY")}
                          </span>{" "}
                          by{" "}
                          <span className="event-time">
                            {eventsList[0].time}
                          </span>{" "}
                          at
                        </span>
                        <span className="meta-data event-location">
                          {" "}
                          <span className="event-location-address">
                            {eventsList[0].address}
                          </span>
                        </span>

                        <div
                          id="event-counter-event_counter-1"
                          className="counter clearfix"
                          style={{ marginTop: 20 }}
                        >
                          <div className="timer-col">
                            {" "}
                            <span id="days">{countdown.day}</span>{" "}
                            <span className="timer-type">Days</span>{" "}
                          </div>
                          <div className="timer-col">
                            {" "}
                            <span id="hours">{countdown.hour}</span>{" "}
                            <span className="timer-type">Hours</span>{" "}
                          </div>
                          <div className="timer-col">
                            {" "}
                            <span id="minutes">{countdown.minute}</span>{" "}
                            <span className="timer-type">Minutes</span>{" "}
                          </div>
                          <div className="timer-col">
                            {" "}
                            <span id="seconds">{countdown.second}</span>{" "}
                            <span className="timer-type">Seconds</span>{" "}
                          </div>
                        </div>
                      </div>
                      {/* <div className="upcoming-event-footer">
                        <a
                          id="imicregister-2763|1587308401"
                          href="#"
                          className="pull-right btn btn-primary btn-sm event-tickets event-register-button"
                        >
                          Register
                        </a>
                        <ul className="action-buttons">
                          <li title="Share event">
                            <a
                              href="#"
                              data-trigger="focus"
                              data-placement="top"
                              data-content=""
                              data-toggle="popover"
                              data-original-title="Share Event"
                              className="event-share-link"
                            >
                              <i className="icon-share"></i>
                            </a>
                          </li>
                          <li title="Get directions" className="hidden-xs">
                            <a
                              href="#"
                              className="cover-overlay-trigger event-direction-link"
                            >
                              <i className="icon-compass"></i>
                            </a>
                          </li>
                          <li title="Contact event manager">
                            <a
                              id="imiccontact-2763|1587308401"
                              href="#"
                              data-toggle="modal"
                              data-target="#Econtact"
                              className="event-contact-link"
                            >
                              <i className="icon-mail"></i>
                            </a>
                          </li>
                        </ul>
                      </div> */}
                    </section>
                  </div>
                </div>
                <div className="col-md-7 col-sm-7" id="content-col">
                  <div className="element-block events-listing">
                    <div className="events-listing-header">
                      <Link href="/allevents">
                        <h3
                          className="element-title"
                          style={{ cursor: "pointer" }}
                        >
                          Upcoming Events
                        </h3>
                      </Link>
                      <hr className="sm"></hr>
                    </div>
                    {eventsList.slice(0, 3).map((evnt) => {
                      return (
                        <div style={{ marginBottom: 40 }}>
                          <Event noreg={true} event={evnt} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main" role="main">
          <div id="content" className="content full">
            <div className="container">
              <hr className="fw"></hr>
              <div className="row">
                <div className="col-md-8">
                  <h3>Youth Resources</h3>
                  <hr className="sm"></hr>
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
                          <h4>FROM OUR BLOG</h4>
                        </div>
                        <img
                          src="/ydd-photos/slide1-800x500.jpg"
                          className="attachment-800x500 size-800x500 wp-post-image"
                          alt=""
                        />{" "}
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
                      <ul className="blog-classic-listing">
                        <li className="format-standard">
                          <div className="row">
                            <div className="col-md-12">
                              <a>
                                <strong className="post-title">
                                  God Still Speaks
                                </strong>
                              </a>
                              <div className="meta-data">
                                by <a>Tobi Popogbe</a> on January 24, 2018 in{" "}
                                <a>
                                  in Youth Resources, My Praythrough Experience
                                </a>
                              </div>
                              <p>
                                One thing worked for me and it is that I never
                                wanted anything out of God's will, and He always
                                saw that I was desperate to have His Will done.
                              </p>{" "}
                              <p>
                                <a className="basic-link">
                                  Continue reading{" "}
                                  <i className="fa fa-angle-right"></i>
                                </a>
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="format-standard">
                          <div className="row">
                            <div className="col-md-12">
                              <a>
                                <strong className="post-title">
                                  Mercy Found Me
                                </strong>
                              </a>
                              <div className="meta-data">
                                by <a>Peter Oyeniyi</a> on January 24, 2018 in{" "}
                                <a>Youth Resources, My Salvation Story</a>
                              </div>
                              <p>
                                I remember wispering a prayer out of desperation
                                to God saying if He could help me get my life
                                together, i'll give Him a chance; and God was
                                faithful...
                              </p>{" "}
                              <p>
                                <a>
                                  Continue reading{" "}
                                  <i className="fa fa-angle-right"></i>
                                </a>
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <h3>Youth Reports</h3>
                  <hr className="sm"></hr>
                  <div className="very-latest-post format-standard">
                    <div className="title-row">
                      <a className="comments-go" title="10 comments">
                        <i className="icon-dialogue-text"></i>
                      </a>
                      <a className="comments-go">
                        <i className="icon-dialogue-text"></i>
                      </a>{" "}
                      <h4>REPORTS FROM YDD</h4>
                    </div>
                    <img
                      src="/ydd-photos/slide1-800x500.jpg"
                      className="attachment-800x500 size-800x500 wp-post-image"
                      alt=""
                    />{" "}
                    <h3 className="post-title">
                      <a>Akure YLCB</a>
                    </h3>
                    <div className="meta-data">
                      by <a>Tosin Shobukola</a> on January 24, 2018 in{" "}
                      <a>in Youth Resources, Reports</a>
                    </div>
                    <p>
                      He stressed that the world is more interested in seeing
                      Christians live what they preach.
                    </p>{" "}
                    <p>
                      <a className="basic-link">
                        Continue reading <i className="fa fa-angle-right"></i>
                      </a>
                    </p>
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
              <Link href="/picgallery">
                <div className="grid-item-inner">
                  <a target="_blank" className="media-box">
                    <img
                      src="/ydd-photos/sermon.jpg"
                      className="attachment-400x400 size-400x400 wp-post-image"
                      alt=""
                    />
                  </a>
                </div>
              </Link>
            </li>
            <li className="format-link">
              <div className="grid-item-inner">
                <a
                  href="http://www.apostolicfaithweca.org/livecast/newlivecast.html"
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
                  href="https://vimeo.com/user118214378"
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
    </div>
  );
}
