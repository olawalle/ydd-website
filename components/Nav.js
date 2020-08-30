/** @format */

import React from "react";

import { Menu, Dropdown, Avatar } from "antd";
import Link from "next/link";
import "../pages/styles/nav.scss";

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
          <span>
            <Link href="/">Home</Link>
          </span>
          <span>
            <Link href="/about">About</Link>
          </span>
          <span>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      Videos
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      Audio
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      Soundcloud audios
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      Webcast
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      Youth reports
                    </a>
                  </Menu.Item>
                </Menu>
              }
            >
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                Gallery
              </a>
            </Dropdown>
          </span>
          <span>
            <Dropdown
              style={{ marginLeft: "20px" }}
              overlay={
                <Menu>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      Teenage ministry
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      AFCF
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      AFCMF
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      YPF
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      Couples & Family
                    </a>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      Singles forumn
                    </a>
                  </Menu.Item>
                </Menu>
              }
            >
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                Platforms
              </a>
            </Dropdown>
          </span>
          <span>Blog</span>
          <span>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </span>
          <span>
            <Link href="/profile">
              <div className="avatar">
                <img
                  src="https://randomuser.me/api/portraits/men/91.jpg"
                  alt=""
                />
              </div>
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Nav;
