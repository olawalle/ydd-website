import React from "react";
import Nav from "../components/Nav";
import "./styles/gallery.scss";
import { Pagination, Row, Col, Card, Modal, Button } from "antd";

import { videos } from "../mocks/videosList";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";

export default function gallery() {
  const [visible, setvisible] = useState(false);
  const [src, setSrc] = useState("");
  const [currentVideoSet, setcurrentVideoSet] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const pageCount = 12;
  const openModal = (link) => {
    setvisible(true);
    setSrc(link);
  };
  useEffect(() => {
    let videoSet = videos
      .map((v, index) => {
        return {
          ...v,
          index,
        };
      })
      .slice((currentPage - 1) * pageCount, currentPage * 12);
    console.log(videoSet, currentPage);
    setcurrentVideoSet(videoSet);
  }, [currentPage]);

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
        <Row gutter={15}>
          {currentVideoSet.map((video, i) => {
            return (
              <Col sm={24} lg={6}>
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
          total={videos.length}
          onChange={pageChanged}
        />
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
