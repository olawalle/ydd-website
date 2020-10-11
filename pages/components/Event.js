import React from "react";
import "../styles/event.scss";
import * as dayjs from "dayjs";

export default function Event({ noreg, event }) {
  return (
    <div className="event">
      <div
        className="events-listing-content"
        style={{
          height: 100,
          width: "100%",
          marginBottom: "30px",
        }}
      >
        <div className="event-list-item-date">
          <span className="event-date">
            <span className="event-day">{dayjs(event.date).format("DD")}</span>
            <span className="event-month">
              {dayjs(event.date).format("MMM, YYYY")}
            </span>
          </span>
        </div>
        <div className="event-list-item-info">
          <div className="lined-info">
            <h4>
              <a href="#" className="event-title">
                {event.name}
              </a>
            </h4>
          </div>
          <div className="lined-info">
            <span className="meta-data">
              <i className="fa fa-clock-o"></i>
              <span className="event-time">{event.time}</span>{" "}
              <span className="label label-primary">Upcoming</span>
            </span>
          </div>
          <div className="lined-info event-location">
            <span className="meta-data">
              <i className="fa fa-map-marker"></i>{" "}
              <span className="event-location-address">{event.address}</span>
            </span>
          </div>{" "}
        </div>
        {!noreg && (
          <div className="event-list-item-actions">
            {" "}
            <a
              id="register-2763|1587308401"
              href="#"
              className="btn btn-default btn-transparent event-tickets event-register-button"
            >
              Register
            </a>
            <ul className="action-buttons">
              {" "}
              <li title="Share Event">
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
              </li>{" "}
              <li title="Get directions" className="hidden-xs">
                <a
                  href="#"
                  className="cover-overlay-trigger event-direction-link"
                >
                  <i className="icon-compass"></i>
                </a>
              </li>{" "}
              <li title="Contact event manager">
                <a
                  id="contact-2763|1587308401"
                  href="#"
                  data-toggle="modal"
                  data-target="#Econtact"
                  className="event-contact-link"
                >
                  <i className="icon-mail"></i>
                </a>
              </li>{" "}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
