import React from "react";
import Nav from "../components/Nav";
import Footer from "./components/Footer";
import { CalendarOutlined } from "@ant-design/icons";
import "./styles/single-report.scss";

export default function singleReport() {
  return (
    <div className="single-report">
      <Nav />
      <div className="banner">
        <p>YOUNG COUPLES FORUM</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <p className="blog-title">It Takes Two</p>
            <p className="time">
              <CalendarOutlined /> January 24, 2018by Admin{" "}
              <span>Youth Resources, General, Youth Reports</span>
            </p>
            <img src="/ydd-photos/afcfreport.jpg" className="blog-img" alt="" />
            <p className="blog-heading">
              REPORT OF THE YOUNG COUPLES FORUM HELD ON SATURDAY 2nd of May 2020
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
