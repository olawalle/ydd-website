/** @format */

import React from "react";

import { Menu, Dropdown, Avatar } from "antd";
import Link from "next/link";
import "../pages/styles/nav.scss";
import { useEffect } from "react";
import { useState } from "react";
import { MenuOutlined, LogoutOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const [darkNav, setDarkNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [userData, setuserData] = useState({});

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    let user = window.localStorage.getItem("afm-data");
    setuserData(user ? JSON.parse(user) : {});
  }, []);

  const handleScroll = () => {
    window.scrollY > 70 ? setDarkNav(true) : setDarkNav(false);
  };

  const getDetailsIndex = () => {
    if (userData.username) {
      return `${userData.firstName.split("")[0]}${
        userData.lastName.split("")[0]
      }`;
    } else {
      return "";
    }
  };

  return (
    <header className={`nav ${darkNav ? "transparent" : ""}`}>
      <div className='container'>
        <div className='for-navi'>
          <div className='' style={{ display: "inline-block" }}>
            <h1>
              <Link href='/'>
                <a title='Logo'>
                  <div className='text-logo'>
                    <span className='logo-icon'>
                      {/* <i className="fa fa-heart"></i> */}
                      <img
                        src='/ydd-photos/ydd_logo.png'
                        alt=''
                        style={{ width: "45px" }}
                      />
                    </span>
                    <span className='logo-text web'>
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
            className={`mobile`}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            {userData.username && (
              <Link href='/profile'>
                <div className='initials mobile'>{getDetailsIndex()}</div>
              </Link>
            )}
            <MenuOutlined
              onClick={() => setMobileNav(!mobileNav)}
              style={{ color: "#000", marginLeft: 15 }}
              className='mobile'
            />
          </div>

          <div
            className={`navigation-links ${mobileNav ? "show" : ""}`}
            style={{ float: "right", display: "inline-block" }}
          >
            <span>
              <Link href='/'>
                <a>Home</a>
              </Link>
            </span>
            <span>
              <Link href='/about'>
                <a>About Us</a>
              </Link>
            </span>
            <span>
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item>
                      <Link href='/gallery'>
                        <a>Videos</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href='/picgallery'>
                        <a>Photos</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <a href='https://soundcloud.com/apostolic-faith-weca/sets/'>
                        Soundcloud audios
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href='http://www.apostolicfaithweca.org/livecast/newlivecast.html'>
                        Webcast
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href='https://vimeo.com/user118214378'>
                        Inspiring Videos
                      </a>
                    </Menu.Item>
                  </Menu>
                }
              >
                <a
                  className='ant-dropdown-link'
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
                      <Link href='/teenage'>
                        <a>Teenage ministry</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href='/afcf'>
                        <a>AFCF</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href='/afcmf'>
                        <a>AFCMF</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href='/ypf'>
                        <a>YPF</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href='/couples'>
                        <a>Couples & Family</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href='/singles'>
                        <a>Singles forumn</a>
                      </Link>
                    </Menu.Item>
                  </Menu>
                }
              >
                <a
                  className='ant-dropdown-link'
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
                      <Link href='/reports'>
                        <a>Reports</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href='/testimonies'>
                        <a>Testimonies</a>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href='/soulfood'>
                        <a>Soul Food</a>
                      </Link>
                    </Menu.Item>
                  </Menu>
                }
              >
                <a
                  className='ant-dropdown-link'
                  onClick={(e) => e.preventDefault()}
                >
                  Youth Resources
                </a>
              </Dropdown>
            </span>
            {!userData.username ? (
              <>
                <span>
                  <Link href='/login'>
                    <a>Login</a>
                  </Link>
                </span>
                <span>
                  <Link href='/signup'>
                    <a>Signup</a>
                  </Link>
                </span>
              </>
            ) : (
              <>
                <div className='mobile logout' style={{ padding: "5px 20px" }}>
                  <LogoutOutlined
                    style={{ marginRight: 10, color: "#d84e4e", padding: 0 }}
                  />
                  Logout
                </div>
                <span className='web'>
                  {/* <a className='ant-dropdown-link'>
                      <Link href='/profile'>
                        <div className='initials'>{getDetailsIndex()}</div>
                      </Link>
                    </a> */}

                  <Dropdown
                    style={{ marginLeft: "20px" }}
                    overlay={
                      <Menu>
                        <Menu.Item
                          onClick={() => {
                            localStorage.clear();
                            setuserData({});
                            router.push("/");
                          }}
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <LogoutOutlined style={{ marginRight: 10 }} />
                            Logout
                          </div>
                        </Menu.Item>
                      </Menu>
                    }
                  >
                    <a className='ant-dropdown-link'>
                      <Link href='/profile'>
                        <div className='initials web'>{getDetailsIndex()}</div>
                      </Link>
                    </a>
                  </Dropdown>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
