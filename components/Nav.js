/** @format */

import React from "react";

import { Menu, Dropdown } from "antd";
import Link from "next/link";
import "../pages/styles/nav.scss";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const Nav = () => {
  return (
    <header class="site-header nav">
      <div class="container for-navi">
        <div class="" style={{ display: "inline-block" }}>
          <h1>
            <a href="" title="Logo">
              <div class="text-logo">
                <span class="logo-icon">
                  <i class="fa fa-heart"></i>
                </span>
                <span class="logo-text">
                  AFMWECA<span> YDD</span>
                </span>
              </div>
              {/* <div class="">
                <img src="logo.png" alt="" style={{ height: "50px" }} />
              </div>{" "} */}
            </a>
          </h1>
        </div>
        <div
          className="navigation-links"
          style={{ float: "right", display: "inline-block" }}
        >
          <span>Home</span>
          <span>Devotionals</span>
          <span>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </span>
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Hover me
            </a>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Nav;
