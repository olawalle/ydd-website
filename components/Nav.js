/** @format */

import React from "react";

import { Menu, Dropdown, Avatar } from "antd";
import Link from "next/link";
import "../pages/styles/nav.scss";
import { useEffect } from "react";
import { useState } from "react";

const Nav = () => {
  const [darkNav, setDarkNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    window.scrollY > 70 ? setDarkNav(true) : setDarkNav(false);
  };

  return (
    <header className={`nav ${darkNav ? "transparent" : ""}`}>
      <div className="container">
        <div className="for-navi">
          <div className="" style={{ display: "inline-block" }}>
            <h1>
              <Link href="/">
                <a title="Logo">
                  <div className="text-logo">
                    <span className="logo-icon">
                      <i className="fa fa-heart"></i>
                    </span>
                    <span className="logo-text">
                      AFMWECA<span> YDD</span>
                    </span>
                  </div>
                  {/* <div className="">
                <img src="logo.png" alt="" style={{ height: "50px" }} />
              </div>{" "} */}
                </a>
              </Link>
            </h1>
          </div>
          <div
            className="navigation-links"
            style={{ float: "right", display: "inline-block" }}
          >
            <span>
              <Link href="/">
                <a>Home</a>
              </Link>
            </span>
            <span>
              <Link href="/about">
                <a>About</a>
              </Link>
            </span>
            <span>
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item>
                      <a href="http://www.alipay.com/">Videos</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href="http://www.alipay.com/">Audio</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href="http://www.alipay.com/">Soundcloud audios</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href="http://www.alipay.com/">Webcast</a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href="http://www.alipay.com/">Youth reports</a>
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
                      <Link href="/teenage">
                        <a>Teenage ministry</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/afcf">
                        <a>AFCF</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/afcmf">
                        <a>AFCMF</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/ypf">
                        <a>YPF</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/couples">
                        <a>Couples & Family</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/singles">
                        <a>Singles forumn</a>
                      </Link>
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
            <span>
              <Dropdown
                style={{ marginLeft: "20px" }}
                overlay={
                  <Menu>
                    <Menu.Item>
                      <Link href="/afcf">
                        <a>Reports</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/afcmf">
                        <a>Testimonies</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/ypf">
                        <a>Soul Food</a>
                      </Link>
                    </Menu.Item>
                  </Menu>
                }
              >
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Youth Resources
                </a>
              </Dropdown>
            </span>
            <span>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </span>
            {/* <span>
              <Link href="/profile">
                <a>
                  <div className="avatar">
                    <img
                      src="https://randomuser.me/api/portraits/men/91.jpg"
                      alt=""
                    />
                  </div>
                </a>
              </Link>
            </span> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
