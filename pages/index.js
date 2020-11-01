/** @format */

import Head from "next/head";
import Nav from "../components/Nav";
import Link from "next/link";
import "./styles/index.scss";
import MainCarousel from "../components/MainCarousel";
import Vision from "../components/Vision";
import Platforms from "../components/Platforms";
import Footer from "../components/Footer";
import Event from "../components/Event";
import { eventsList } from "../mocks/eventsList";
import { blogsList } from "../mocks/blogsList";
import { reportsList } from "../mocks/reportsList";
import { testimoniesList } from "../mocks/testimoniesList";
import { useEffect } from "react";
import * as dayjs from "dayjs";
import { useState } from "react";
import axios from "axios";
import Blog from "../components/Blog";

export default function Home() {
  const [countdown, setcountdown] = useState({
    second: 0,
    minute: 0,
    hour: 0,
    day: 0,
  });
  const featuredEvent = eventsList[0];
  useEffect(() => {
    const interval = setInterval(() => {
      let today = dayjs(featuredEvent.date);
      let endDate = dayjs();

      let second = today.diff(endDate, "seconds") % 60;
      let minute = today.diff(endDate, "minute") % 60;
      let hour = today.diff(endDate, "hour") % 24;
      let day = today.diff(endDate, "day");
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
    <div className='wrapper index'>
      <div className='body'>
        <Nav />
        <div className='main-carousel'>
          <MainCarousel
            pictures={[
              "/ydd-photos/slide82.png",
              "/ydd-photos/slide8.png",
              "/ydd-photos/slide3.jpg",
              "/ydd-photos/follow.jpg",
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

        <div className='main' role='main'>
          <div id='content' className='content full'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-5 col-sm-5' id='sidebar-col'>
                  <div
                    id='event_counter-1'
                    className='widget sidebar-widget widget_event_counter'
                  >
                    <section className='upcoming-event format-standard event-list-item event-dynamic'>
                      <Link href='/singleevent'>
                        <a
                          className='media-box'
                          style={{
                            maxHeight: 300,
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={featuredEvent.banner}
                            className='attachment-600x400 size-600x400 wp-post-image'
                            alt=''
                          />
                        </a>
                      </Link>
                      <div className='upcoming-event-content'>
                        <span
                          className='label label-primary upcoming-event-label'
                          style={{ backgroundColor: "#3aafdb" }}
                        >
                          Next coming event
                        </span>
                        <h3>
                          <Link href='/singleevent'>
                            <a className='event-title'>{featuredEvent.name}</a>
                          </Link>
                        </h3>
                        <span className='meta-data'>
                          On{" "}
                          <span className='event-date'>
                            {dayjs(featuredEvent.date).format("DD MMM, YYYY")}
                          </span>{" "}
                          by{" "}
                          <span className='event-time'>
                            {featuredEvent.time}
                          </span>{" "}
                          at
                        </span>
                        <span className='meta-data event-location'>
                          {" "}
                          <span className='event-location-address'>
                            {featuredEvent.address}
                          </span>
                        </span>

                        <div
                          id='event-counter-event_counter-1'
                          className='counter clearfix'
                          style={{ marginTop: 20 }}
                        >
                          <div className='timer-col'>
                            {" "}
                            <span id='days'>{countdown.day}</span>{" "}
                            <span className='timer-type'>Days</span>{" "}
                          </div>
                          <div className='timer-col'>
                            {" "}
                            <span id='hours'>{countdown.hour}</span>{" "}
                            <span className='timer-type'>Hours</span>{" "}
                          </div>
                          <div className='timer-col'>
                            {" "}
                            <span id='minutes'>{countdown.minute}</span>{" "}
                            <span className='timer-type'>Minutes</span>{" "}
                          </div>
                          <div className='timer-col'>
                            {" "}
                            <span id='seconds'>{countdown.second}</span>{" "}
                            <span className='timer-type'>Seconds</span>{" "}
                          </div>
                        </div>
                      </div>
                      <div className='upcoming-event-footer'>
                        <span
                          style={{ maxWidth: "60%", display: "inline-block" }}
                        >
                          For more details on the IYC click here to{" "}
                          <Link href='/singleevent'>
                            <a>see more</a>
                          </Link>
                        </span>
                        <Link href='/singleevent'>
                          <a
                            id='imicregister-2763|1587308401'
                            className='pull-right btn btn-primary btn-sm event-tickets event-register-button'
                          >
                            Register
                          </a>
                        </Link>
                      </div>
                    </section>
                  </div>
                </div>
                <div className='col-md-7 col-sm-7' id='content-col'>
                  <div className='element-block events-listing'>
                    <div className='events-listing-header'>
                      <Link href='/allevents'>
                        <h3
                          className='element-title'
                          style={{ cursor: "pointer" }}
                        >
                          Upcoming Events
                        </h3>
                      </Link>
                      <hr className='sm'></hr>
                    </div>
                    {eventsList.slice(1, 5).map((evnt) => {
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
        <div className='main' role='main'>
          <div id='content' className='content full'>
            <div className='container'>
              <hr className='fw'></hr>
              <div className='row'>
                <div className='col-md-12'>
                  <h3>
                    <Link href='/youthresources'>
                      <a>Youth Resources</a>
                    </Link>
                  </h3>
                </div>
                <div className='col-md-8'>
                  <hr className='sm'></hr>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='very-latest-post format-standard'>
                        <div className='title-row'>
                          <a className='comments-go' title='10 comments'>
                            <i className='icon-dialogue-text'></i>
                          </a>
                          <a className='comments-go'>
                            <i className='icon-dialogue-text'></i>
                          </a>{" "}
                          <h4>OUR BLOG</h4>
                        </div>

                        <ul className='blog-classic-listing'>
                          <li className='format-standard'>
                            <Blog
                              category='soulfood'
                              blog={blogsList[0]}
                              withImage={true}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='title-row'>
                        <a className='comments-go' title='10 comments'>
                          <i className='icon-dialogue-text'></i>
                        </a>
                        <a className='comments-go'>
                          <i className='icon-dialogue-text'></i>
                        </a>{" "}
                        <h4>Testimonies</h4>
                      </div>
                      <ul className='blog-classic-listing'>
                        <li className='format-standard'>
                          <div className='row'>
                            <div className='col-md-12'>
                              <Blog
                                category='testimonies'
                                blog={testimoniesList[1]}
                                withImage
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='very-latest-post format-standard'>
                    <div className='title-row'>
                      <a className='comments-go' title='10 comments'>
                        <i className='icon-dialogue-text'></i>
                      </a>
                      <a className='comments-go'>
                        <i className='icon-dialogue-text'></i>
                      </a>{" "}
                      <h4>REPORTS</h4>
                    </div>
                    <ul className='blog-classic-listing'>
                      <li className='format-standard'>
                        <Blog
                          category='report'
                          blog={reportsList[0]}
                          withImage={true}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='gallery-updates cols5 clearfix'>
          <ul>
            <li className='format-link'>
              <Link href='/gallery'>
                <a>
                  <div className='grid-item-inner'>
                    <a target='_blank' className='media-box'>
                      <img
                        src='/ydd-photos/video.jpg'
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
                  href='https://soundcloud.com/apostolic-faith-weca/sets/ydd-teens-audios'
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
              <Link href='/picgallery'>
                <div className='grid-item-inner'>
                  <a target='_blank' className='media-box'>
                    <img
                      src='/ydd-photos/sermon.jpg'
                      className='attachment-400x400 size-400x400 wp-post-image'
                      alt=''
                    />
                  </a>
                </div>
              </Link>
            </li>
            <li className='format-link'>
              <div className='grid-item-inner'>
                <a
                  href='http://www.apostolicfaithweca.org/livecast/newlivecast.html'
                  target='_blank'
                  className='media-box'
                >
                  <img
                    src='/ydd-photos/webcast.jpg'
                    className='attachment-400x400 size-400x400 wp-post-image'
                    alt=''
                  />
                </a>
              </div>
            </li>
            <li className='format-link'>
              <div className='grid-item-inner'>
                <a
                  href='https://vimeo.com/user118214378'
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
          </ul>
          <div className='gallery-updates-overlay'>
            <div className='container'>
              <i className='icon-multiple-image'></i>
              <h2>Updates from our gallery</h2>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
