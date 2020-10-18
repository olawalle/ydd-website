import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-top">
          <div className="row">
            <div className="col-md-4 col-sm-4 widget footer-widget widget_text">
              <img
                src="/ydd-photos/ydd_logo.png"
                className="attachment-400x400 size-400x400 wp-post-image"
                alt=""
              />
              <h4 className="widgettitle">AFM WECA YDD </h4>{" "}
              <div className="textwidget">
                <p>
                  We are the Youth Development Directorate of the Apostolic
                  Faith work in West and Central Africa.
                </p>
                <p>
                  {" "}
                  We are an army of outstanding young people, going to Heaven
                  and persuading others to come along
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 widget footer-widget widget_twitter_feeds">
              <h4 className="widgettitle">QUICK LINKS TO RESOURCES</h4>
              <ul>
                <li>
                  <a href="">Sunday School: </a>
                  View lessons from our beloved Sunday School books
                </li>
                <li>
                  <a href="">Devotionals: </a>
                  Enjoy Daily morsels for your Spiritual growth
                </li>
                <li>
                  <a href="">Doctrinal Resources: </a>
                  View lessons from our beloved Sunday School books
                </li>
                <li>
                  <a href="">AFM Magazines: </a>
                  Edify your spirit with soul lifting articles
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-4 widget footer-widget widget_newsletter">
              <h4 className="widgettitle">PRAYER REQUESTS</h4>
              <p>
                Subscribe to our newsletter in order to receive the latest new &
                articles. We promise we won't spam your inbox!
              </p>
              <form method="post" action="#">
                <textarea
                  rows="3"
                  cols="100"
                  className="form-control"
                  id="message"
                  required
                  data-validation-required-message="Please enter your message"
                  placeholder="Enter your Prayer request for the people of God to intercede on your behalf"
                ></textarea>

                <input
                  type="email"
                  name="newsletter_email"
                  id="email-nl"
                  placeholder="Enter your email"
                  className="form-control"
                />
                <input
                  type="submit"
                  name="newsletter_submit"
                  className="btn btn-primary btn-block btn-lg"
                  value="Submit"
                />
              </form>
            </div>
          </div>
          <div className="quick-info">
            <div className="row">
              <div className="col-md-9">
                <div className="col-md-4 ">
                  <h4 className="">
                    <i className="fa fa-clock-o"></i> Service Times
                  </h4>
                  <p className=""> Sundays @ 02:30 PM </p>
                  <p>(Forthnightly)</p>
                </div>
                <div className="col-md-4 ">
                  <h4 className="">
                    <i className="fa fa-map-marker"></i> Our Location
                  </h4>
                  <p className="">All Apostolic Faith </p>
                  <p>WECA Churches</p>
                </div>
                <div className="col-md-4 ">
                  <h4 className="">
                    <i className="fa fa-envelope"></i> Contact Info
                  </h4>
                  <p className="">youthinfo@apostolicfaithweca.org</p>
                </div>{" "}
              </div>
              <div className="col-md-3">
                <h4>
                  <i className="fa fa-clock-o"></i> CONNECT WITH US
                </h4>
                <ul className="social-icons-colored inversed">
                  <li className="facebook">
                    <a
                      href="http://www.facebook.com/afmwecayouth"
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="http://twitter.com/afmwecayouth" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="google-plus">
                    <a href="http://instagram.com/afmwecayouth" target="_blank">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="vimeo-square">
                    <a href="https://vimeo.com/user118214378" target="_blank">
                      <i className="fa fa-vimeo-square"></i>
                    </a>
                  </li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer-bottom">
          <div className="row">
            <div className="col-md-6 col-sm-6 copyrights-coll">
              © 2020 AFMWECA YDD. All Rights Reserved{" "}
            </div>
            {/* <div className="col-md-6 col-sm-6 copyrights-colr">
              <nav className="footer-nav" role="navigation">
                <ul id="menu-footer-menu" className="">
                  <li
                    id="menu-item-528"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-28 current_page_item menu-item-528"
                  >
                    <a href="index.html" aria-current="page">
                      Home
                    </a>
                  </li>
                  <li
                    id="menu-item-529"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-529"
                  >
                    <a href="contact/index.html">Contact</a>
                  </li>
                  <li
                    id="menu-item-530"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-530"
                  >
                    <a href="im-new-here/index.html">New Here</a>
                  </li>
                </ul>{" "}
              </nav>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
