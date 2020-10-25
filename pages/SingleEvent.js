import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./styles/singleevent.scss";

export default function SingleEvent() {
  return (
    <div className="single-event">
      <Nav />
      <div className="banner"></div>
      <div className="info">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p>Youth camp meeting</p>
              God blesses us with gifts and even makes divine appointments with
              our lives even before we were born. We only grow up to discover so
              many of these endowments and may even die without ever discovering
              some. This is clearly expressed in Rom_11:29 and it states: For
              the gifts and calling of God are without repentance. (KJV) God
              never changes his mind about the people he calls. He never decides
              to take back the blessings he has given them. (ERV) God doesn't
              take back the gifts he has given or forget about the people he has
              chosen. (CEV) And when God chooses someone and graciously imparts
              gifts to him, they are never rescinded. (TPT)
            </div>
            <div className="col-md-6 col-sm-12">
              <iframe src="youtube.com" frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="countdown">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <p className="small"> CAMP DATE</p>
              <p className="large">COUNT EVERY SECOND UNTIL THE EVENT</p>
            </div>
            <div className="col-sm-12 col-md-8">
              <div className="col-md-4">
                <div className="bordered">
                  <div className="count">00</div>
                  <div className="tag">DAYS</div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bordered">
                  <div className="count">00</div>
                  <div className="tag">DAYS</div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bordered">
                  <div className="count">00</div>
                  <div className="tag">DAYS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="schedule">
        <div className="container">
          <div className="top">OUR TIMETABLE</div>
          <div className="btm">SCHEDULE PLAN</div>

          <div className="tabs">
            <div className="tab">
              <div className="day">Thurdsay</div>
              <div className="date">July 23, 2020</div>
            </div>
            <div className="tab">
              <div className="day">Thurdsay</div>
              <div className="date">July 23, 2020</div>
            </div>
            <div className="tab">
              <div className="day">Thurdsay</div>
              <div className="date">July 23, 2020</div>
            </div>
          </div>

          <div className="itenery">
            <div>Morning Prayer</div>
            <div className="times">
              6am - 7:30am
              <p className="location">Main auditorium</p>
            </div>
            <button className="join">Join now</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
