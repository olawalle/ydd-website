import Search from "antd/lib/input/Search";
import React from "react";
import Nav from "../components/Nav";
import Footer from "./components/Footer";
import "./styles/reports.scss";
import { CalendarOutlined } from "@ant-design/icons";

export default function reports() {
  const reports = [
    "Teens Reports (3)",
    "AFCF Reports (3)",
    "AFCMF Reports (3)",
    "YPF Reports (3)",
    "Couples and Family (3)",
    "Singles Reports (3)",
  ];
  return (
    <div className="reports">
      <Nav />
      <div className="banner">
        <p className="big">Youth Reports</p>
        {/* <p className="small">Way to show what is going on in YDD</p> */}
      </div>
      <div className="container reports-contents">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            {[1, 2, 3, 4, 5].map((blog) => (
              <div className="blog">
                <img src="/ydd-photos/afcfreport.jpg" alt="" />
                <p className="time">
                  <CalendarOutlined /> January 24, 2018 by <span>Admin</span>
                </p>
                <p className="blog-title">Young Couples Forum</p>
                <p className="blog-text">
                  The virtual program had two guest couples connected from their
                  respective locations, to give their various experiences and
                  perspectives as regards the topic... how important it is for
                  Husband and Wife to work together in Partnership to make their
                  marriage a success. He also identified some key advantages of
                  couples working together from Ecclesiastes 4:9-12. Some of
                  these are - They have good reward for their labour, to prevent
                  one another from falling, to keep warm and to have victory
                  over the enemy in partnership.
                </p>
                <div className="foot">
                  <span className="cont">CONTINUE READING</span>
                  <p>
                    <span>FEATURED</span>| <span>GENERAL</span>|{" "}
                    <span>UNCATEGORIZED</span> NO COMMENTS YET
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-sm-12 col-md-4">
            <Search
              size="large"
              placeholder="input search text"
              onSearch={(value) => console.log(value)}
              enterButton
            />
            <p style={{ fontSize: 34, marginTop: 50, color: "#000" }}>
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
