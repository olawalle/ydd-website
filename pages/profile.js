import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import "./styles/profile.scss";
import { Row, Input, Col, Avatar, Button } from "antd";

export default function profile() {
  const [userData, setuserData] = useState({});

  useEffect(() => {
    let user = window.localStorage.getItem("afm-data");
    setuserData(user ? JSON.parse(user) : {});
  }, []);

  const getDetailsIndex = () => {
    console.log(userData);
    if (userData.username) {
      return `${userData.firstName.split("")[0]}${
        userData.lastName.split("")[0]
      }`;
    } else {
      return "";
    }
  };

  return (
    <div className="profile">
      <Nav />
      <div className="banner">
        <p className="big">Profile</p>
      </div>
      <div className="profile-content container">
        {/* <div className="left">
          <ul>
            <li className="active">Personal Information</li>
            <li>Personal Information</li>
            <li>Personal Information</li>
            <li>Personal Information</li>
            <li>Personal Information</li>
          </ul>
        </div> */}
        <div className="right">
          <div className="avatar">{getDetailsIndex()}</div>
          <Row gutter={20}>
            <Col md={12} sm={24}>
              <label>Firstname</label>
              <Input size="large" value={userData.firstName} />
            </Col>
            <Col md={12} sm={24}>
              <label>Lastname</label>
              <Input size="large" value={userData.lastName} />
            </Col>
            <Col md={12} sm={24}>
              <label>Username</label>
              <Input size="large" value={userData.username} />
            </Col>
            <Col md={12} sm={24}>
              <label>Branch</label>
              <Input size="large" />
            </Col>
            <Col md={12} sm={24}>
              <label>Phone number</label>
              <Input size="large" value={userData.phone} />
            </Col>
            <Col md={12} sm={24}>
              <label>Email address</label>
              <Input size="large" value={userData.email} />
            </Col>
          </Row>
          <Button type="primary">Update</Button>
        </div>
      </div>
    </div>
  );
}
