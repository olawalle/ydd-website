import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { CalendarOutlined } from "@ant-design/icons";
import "./styles/single-report.scss";
import { useEffect } from "react";
import Router from "next/dist/next-server/lib/router/router";
import { useState } from "react";
import dayjs from "dayjs";
import Search from "antd/lib/input/Search";
import { eventsList } from "../mocks/eventsList";
import { reportsList } from "../mocks/reportsList";
import { testimoniesList } from "../mocks/testimoniesList";
import { soulfoodList_ } from "../mocks/soulfoodList";
import Event from "../components/Event";
import { useRouter } from "next/router";

export default function singleReport() {
  const router = useRouter();
  const title = router.query.title;
  const type_ = router.query.type;
  const [currentReport, setReport] = useState({});
  const [reports, setreports] = useState([]);

  useEffect(() => {
    // let id = window.location.href.split("=")[1];
    console.log({ title, type_ });
    let payload =
      type_ === "report"
        ? reportsList
        : type_ === "testimonies"
        ? testimoniesList
        : soulfoodList_;
    let currentReport_ = payload.find((r) => r.title === title);
    let currentReport = currentReport_ ? currentReport_ : payload[0];
    currentReport ? setReport(currentReport) : setReport({});
    console.log({ currentReport_, payload, type_ });
    console.log(router);

    let itms = payload.reduce((agg, itm) => {
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
    <>
      <Nav />
      <div className='single-report'>
        <div
          className='banner'
          style={{
            backgroundImage: `url("/ydd-photos/${currentReport.banner}")`,
          }}
        ></div>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-8'>
              <p className='blog-title'>{currentReport.title}</p>
              <p className='time'>
                <CalendarOutlined />{" "}
                {dayjs(currentReport.date).format("DD MMM, YYYY")} by{" "}
                {currentReport.writer} <span>Youth Resources.</span>
              </p>
              {/* <img
              src={`/ydd-photos/${currentReport.banner}`}
              className="blog-img"
              alt=""
            /> */}
              {/* <p className="blog-heading">{currentReport.title}</p> */}

              <p
                className='txt'
                dangerouslySetInnerHTML={{ __html: currentReport.content }}
              ></p>
            </div>

            <div className='col-sm-12 col-md-4'>
              <Search
                size='large'
                placeholder='input search text'
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

              <div className='tags'>
                {currentReport.tags &&
                  currentReport.tags.map((tag) => {
                    return (
                      <div key={tag} className='tag'>
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
      </div>
      <Footer />
    </>
  );
}
