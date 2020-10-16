import React from "react";
import Nav from "../components/Nav";
import Footer from "./components/Footer";
import { CalendarOutlined } from "@ant-design/icons";
import "./styles/single-report.scss";
import { useEffect } from "react";
import { reportsList } from "../mocks/reportsList";
import Router from "next/dist/next-server/lib/router/router";
import { useState } from "react";
import dayjs from "dayjs";
import Search from "antd/lib/transfer/search";
import { eventsList } from "../mocks/eventsList";
import Event from "./components/Event";

export default function singleReport() {
  const [currentReport, setReport] = useState({});
  const [reports, setreports] = useState([]);
  useEffect(() => {
    let id = window.location.href.split("=")[1];
    let currentReport = reportsList[id];
    console.log(currentReport);
    currentReport ? setReport(currentReport) : setReport({});

    let itms = reportsList.reduce((agg, itm) => {
      agg[itm.category]
        ? (agg[itm.category] = agg[itm.category] + 1)
        : (agg[itm.category] = 1);
      return agg;
    }, {});
    let reports = Object.keys(itms).map(
      (key) => `${key} Reports (${itms[key]})`
    );
    setreports(reports);
  }, []);

  return (
    <div className="single-report">
      <Nav />
      <div
        className="banner"
        style={{
          backgroundImage: `url("/ydd-photos/${currentReport.banner}")`,
        }}
      >
        <p>{currentReport.category}</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <p className="blog-title">{currentReport.title}</p>
            <p className="time">
              <CalendarOutlined />{" "}
              {dayjs(currentReport.date).format("DD MM YYYY")} by{" "}
              {currentReport.writer}{" "}
              <span>Youth Resources, General, Youth Reports</span>
            </p>
            <img
              src={`/ydd-photos/${currentReport.banner}`}
              className="blog-img"
              alt=""
            />
            <p className="blog-heading">{currentReport.title}</p>

            <p className="txt">{currentReport.content}</p>
          </div>

          <div className="col-sm-12 col-md-4">
            <Search
              size="large"
              placeholder="input search text"
              onSearch={(value) => console.log(value)}
              enterButton
            />
            <p style={{ fontSize: 30, marginTop: 50, color: "#000" }}>
              Report Categories
            </p>
            <ul style={{ padding: 0, margin: 0 }}>
              {reports.map((itm) => (
                <li
                  style={{
                    listStyle: "none",
                    marginBottom: 12,
                    borderBottom: "1px solid #eee",
                    paddingBottom: 5,
                  }}
                >
                  {itm}
                </li>
              ))}
            </ul>

            <p style={{ fontSize: 30, marginTop: 50, color: "#000" }}>
              Post Tags
            </p>

            <div className="tags">
              {currentReport.tags &&
                currentReport.tags.map((tag) => {
                  return (
                    <div key={tag} className="tag">
                      {tag}
                    </div>
                  );
                })}
            </div>

            <p style={{ fontSize: 30, marginTop: 50, color: "#000" }}>
              Upcoming Events
            </p>
            {eventsList.slice(0, 3).map((e) => (
              <Event noreg={true} event={e} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
