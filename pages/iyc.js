import React, { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { eventsList } from "../mocks/eventsList";
import "./styles/singleevent.scss";
import * as dayjs from "dayjs";

import { createPortal } from "react-dom";
import Link from "next/link";
import { Button } from "antd";

const IFrame = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null);
  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe {...props}>{mountNode && createPortal(children, mountNode)}</iframe>
  );
};

export default function SingleEvent() {
  const [tab, setTab] = useState(0);
  const [show, setshow] = useState(false);

  const [countdown, setcountdown] = useState({
    second: 0,
    minute: 0,
    hour: 0,
    day: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      //   createFrame();
    }, 3000);
  }, []);

  useEffect(() => {
    // console.log({ ...document.getElementById("log") });
    const interval = setInterval(() => {
      let today = dayjs(eventsList[0].date);
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

  const schedule = [
    {
      day: "Day 1",
      date: "Saturday 26th December, 2020",
      events: [
        {
          time: "5pm-8pm",
          name: "Welcome Programme",
        },
      ],
    },
    {
      day: "Day 2",
      date: "Sunday, 27th December 2020",
      events: [
        {
          time: "9am-1pm",
          name: "Sunday school/Morning devotional service",
        },
        {
          time: "5pm-7pm",
          name: "Evening evangelistic service",
        },
      ],
    },
    {
      day: "Day 3",
      date: "Monday, 28th December 2020",
      events: [
        {
          time: "5:30am-7am",
          name: "PUSH",
        },
        {
          time: "10am-1pm",
          name: "Bible study",
        },
        {
          time: "5pm-7pm",
          name: "Drama",
        },
      ],
    },
    {
      day: "Day 4",
      date: "Tuesday 29th December 2020",
      events: [
        {
          time: "5:30am-7am",
          name: "PUSH",
        },
        {
          time: "10am-1pm",
          name: "Aspire Symposium",
        },
        {
          time: "4pm-5:30pm",
          name: "Evangelistic Service",
        },
        {
          time: "9pm-11:30pm",
          name: "Ebenezer Night",
        },
      ],
    },
  ];

  return (
    <div className='single-event' id='log'>
      <Nav />

      <div className='banner'>
        <Link href='/iyc-register'>
          <Button type='primary'>Register</Button>
        </Link>
      </div>
      <div className='countdown'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-4'>
              <p className='small'> CAMP DATE</p>
              <p className='large'>COUNT EVERY SECOND UNTIL THE EVENT</p>
            </div>
            <div className='col-sm-12 col-md-8'>
              <div className='col-xs-3'>
                <div className='bordered'>
                  <div className='count'>{countdown.day}</div>
                  <div className='tag'>DAYS</div>
                </div>
              </div>
              <div className='col-xs-3'>
                <div className='bordered'>
                  <div className='count'>{countdown.hour}</div>
                  <div className='tag'>HOURS</div>
                </div>
              </div>
              <div className='col-xs-3'>
                <div className='bordered'>
                  <div className='count'>{countdown.minute}</div>
                  <div className='tag'>MINUTES</div>
                </div>
              </div>
              <div className='col-xs-3'>
                <div className='bordered'>
                  <div className='count'>{countdown.second}</div>
                  <div className='tag'>SECONDS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='info'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <p>International youth Camp Meeting</p>
              Our pilgrimage to Heaven requires bravery, courage and strong
              determination if we must start and cross all the hurdle along this
              pathway. In 1 Tim 6:12, Paul admonished Timothy to fight the good
              fight of faith and lay hold on to eternal life (Heaven). John
              Bunyan in His song ‘He who would valiant be’, vividly describes
              what it would require to be a successful pilgrim. In 2 Timothy
              4:7, Paul said: "I have fought a good fight, … I have kept the
              faith"; these were the words of an accomplished Christian and
              proves to us that the heavenly journey is a fight which takes only
              a VALIANT Christian to get to its end and say like Paul, “I have
              finished my course.”.
              <span style={{ display: "block", marginTop: 10 }}>
                Additionally, in our secular lives, to succeed also requires the
                same focused, fearless, determined, and valiant spirit. Numbers
                14:24 tells us of Caleb's dauntless spirit, the reason He wholly
                possessed the possession God planned for Him. Youths are
                encouraged to go up courageously like Caleb for the best and not
                settle for second best in every facet of their lives. This is
                the spirit that is needed by every solider that has enlisted in
                the army of outstanding young people that is going to heaven.
              </span>
            </div>
            <div className='col-md-6 col-sm-12 frame'>
              <iframe
                src='https://www.youtube.com/embed/Plce3aWYspo'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className='schedule'>
        <div className='container'>
          <div className='top'>OUR TIMETABLE</div>
          <div className='btm'>SCHEDULE PLAN</div>

          <div className='tabs'>
            {schedule.map((day, i) => (
              <div
                className={`tab mid ${tab === i && "active"}`}
                onClick={() => setTab(i)}
              >
                <div className='day'>{day.date}</div>
                {/* <div className='date'>July 23, 2020</div> */}
              </div>
            ))}
          </div>

          {schedule[tab].events.map((itm) => (
            <div className='itenery' key={itm.name}>
              <div className='event'>{itm.name}</div>
              <div className='times'>
                {itm.time}
                <p className='location'>WECA Headquarters</p>
              </div>
              {/* <button className='join'>
                Join <i className='fa fa-arrow-right'></i>
              </button> */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
