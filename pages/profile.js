import React from "react";
import Nav from "../components/Nav";
import "./styles/profile.scss";
import { Row, Input, Col, Avatar } from "antd";

export default function profile() {
  return (
    <div className="profile">
      <Nav />
      <div className="profile-content container">
        <div className="left">
          <ul>
            <li className="active">Personal Information</li>
            <li>Personal Information</li>
            <li>Personal Information</li>
            <li>Personal Information</li>
            <li>Personal Information</li>
          </ul>
        </div>
        <div className="right">
          <Avatar
            style={{
              width: "200px",
              height: "200px",
              marginBottom: "30px",
              border: "1px solid #eee",
            }}
            src="https://randomuser.me/api/portraits/men/91.jpg"
          />
          <Row gutter={20}>
            <Col span={12}>
              <label>Firstname</label>
              <Input size="large" />
            </Col>
            <Col span={12}>
              <label>Lastname</label>
              <Input size="large" />
            </Col>
            <Col span={12}>
              <label>Username</label>
              <Input size="large" />
            </Col>
            <Col span={12}>
              <label>Branch</label>
              <Input size="large" />
            </Col>
            <Col span={12}>
              <label>Phone number</label>
              <Input size="large" />
            </Col>
            <Col span={12}>
              <label>Email address</label>
              <Input size="large" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
