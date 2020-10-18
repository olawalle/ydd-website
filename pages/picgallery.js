import { Card } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "./components/Footer";
import MainCarousel from "./components/MainCarousel";
import "./styles/picgallery.scss";
import { gallery } from "../mocks/galleryData";

export default function Picgallery() {
  const router = useRouter();
  const category = router.query.category;
  const [items, setitems] = useState([]);
  useEffect(() => {
    setitems(
      category ? gallery.filter((r) => r.category === category) : gallery
    );
  }, [category]);

  return (
    <div className="pic-gallery">
      <Nav />
      <div className="body">
        <div className="main-carousel">
          <MainCarousel
            pictures={[
              "/ydd-photos/follow.jpg",
              "/ydd-photos/youngprof.jpg",
              "/ydd-photos/slide82.jpg",
              "/ydd-photos/slide83.jpg",
              "/ydd-photos/slide84.jpg",
              "/ydd-photos/slide85.jpg",
              "/ydd-photos/slide86.jpg",
              "/ydd-photos/slide87.jpg",
              "/ydd-photos/slide88.jpg",
            ]}
          />
        </div>

        <div className="pic-content container">
          <div className="cards-wrap" style={{ marginBottom: "120px" }}>
            <div className="row">
              {gallery.map((itm) => (
                <div
                  className="col-md-3 col-sm-12"
                  style={{ marginBottom: 60 }}
                >
                  <Card
                    style={{
                      width: "100%",
                      border: 0,
                      boxShadow: "rgb(238 238 238 / 71%) 2px 0px 9px 4px",
                    }}
                    cover={<img alt="example" src={itm.img} />}
                  >
                    <p className="time">
                      <span>{itm.date}</span>
                    </p>
                    <p className="card-title">{itm.title}</p>
                    <p className="card-text">{itm.text}</p>
                    {itm.link && (
                      <a href={itm.link}>
                        <span className="viewmore">view more</span>
                      </a>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
