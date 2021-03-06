import React from "react";
import Nav from "../components/Nav";
import "./styles/gallery.scss";
import { Pagination, Row, Col, Card, Modal, Button } from "antd";
import Search from "antd/lib/input/Search";

import { videos } from "../mocks/videosList";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Gallery() {
  const [visible, setvisible] = useState(false);
  const [src, setSrc] = useState("");
  const [currentVideoSet, setcurrentVideoSet] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const pageCount = 12;
  const router = useRouter();
  const [category, setcategory] = useState("");
  const category_ = router.query.category;
  const [items, setitems] = useState([]);

  const openModal = (link) => {
    setvisible(true);
    setSrc(link);
  };
  useEffect(() => {
    setcategory(category_);
  }, []);

  useEffect(() => {
    let videoSet = !category
      ? videos
      : videos
          .filter((r) => r.category === category)
          .map((v, index) => {
            return {
              ...v,
              index,
            };
          })
          .slice((currentPage - 1) * pageCount, currentPage * 12);
    console.log({ category, videoSet });
    setcurrentVideoSet(videoSet);
  }, [currentPage, category]);

  const pageChanged = (e) => {
    setcurrentPage(e);
  };

  return (
    <div className="gallery">
      <Nav />
      <div className="banner">
        <iframe
          width="697"
          height="465"
          src="https://www.youtube.com/embed/Wz5UmRPjg9c"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div className="videos container">
        <div className="col-sm-12 col-md-8">
          {!currentVideoSet.length ? (
            <p>There are no videos in this page. Kindly check back later</p>
          ) : (
            <>
              <Row gutter={15}>
                {currentVideoSet.map((video, i) => {
                  return (
                    <Col sm={24} lg={8}>
                      <Card
                        onClick={() => openModal(video.link)}
                        className="video"
                        style={{ padding: 0 }}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${
                            video.link.split("/")[4]
                          }/0.jpg`}
                          alt=""
                        />
                        <div className="desc">
                          <span className="date">{video.date}</span>
                          <p>
                            {video.desc} {video.index}
                          </p>
                          <Button onClick={() => openModal(video.link)}>
                            Watch now
                          </Button>
                        </div>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
              <Pagination
                defaultPageSize={pageCount}
                defaultCurrent={1}
                total={currentVideoSet.length}
                onChange={pageChanged}
              />
            </>
          )}
        </div>
        <div className="col-sm-12 col-md-4">
          <Search
            size="large"
            placeholder="input search text"
            onSearch={(value) => console.log(value)}
            enterButton
          />
          <p style={{ fontSize: 30, marginTop: 50, color: "#000" }}>
            Gallery Categories
          </p>

          <ul style={{ padding: 0, margin: 0 }}>
            <li
              style={{
                listStyle: "none",
                marginBottom: 12,
                borderBottom: "1px solid #eee",
                paddingBottom: 5,
              }}
              onClick={() => setcategory("")}
            >
              <a>All Videos</a>
            </li>
            <li
              style={{
                listStyle: "none",
                marginBottom: 12,
                borderBottom: "1px solid #eee",
                paddingBottom: 5,
              }}
              onClick={() => setcategory("ACFMC")}
            >
              <a>Afcmf Videos</a>
            </li>
            <li
              style={{
                listStyle: "none",
                marginBottom: 12,
                borderBottom: "1px solid #eee",
                paddingBottom: 5,
              }}
              onClick={() => setcategory("ACFC")}
            >
              <a>Afcf Videos</a>
            </li>
            <li
              style={{
                listStyle: "none",
                marginBottom: 12,
                borderBottom: "1px solid #eee",
                paddingBottom: 5,
              }}
              onClick={() => setcategory("Singles")}
            >
              <a>Singles's Videos</a>
            </li>
            <li
              style={{
                listStyle: "none",
                marginBottom: 12,
                borderBottom: "1px solid #eee",
                paddingBottom: 5,
              }}
              onClick={() => setcategory("Couples")}
            >
              <a>Couple's Videos</a>
            </li>
            <li
              style={{
                listStyle: "none",
                marginBottom: 12,
                borderBottom: "1px solid #eee",
                paddingBottom: 5,
              }}
              onClick={() => setcategory("Teens")}
            >
              <a>Teenager's Videos</a>
            </li>
            <li
              style={{
                listStyle: "none",
                marginBottom: 12,
                borderBottom: "1px solid #eee",
                paddingBottom: 5,
              }}
              onClick={() => setcategory("YPF")}
            >
              <a>YPF Videos</a>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
      <Modal
        onCancel={() => setvisible(false)}
        visible={visible}
        width={600}
        footer={false}
      >
        <iframe src={src} width={550} height={550}></iframe>
      </Modal>
    </div>
  );
}
