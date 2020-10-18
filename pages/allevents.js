import { Card } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import MainCarousel from "../components/MainCarousel";
import "./styles/picgallery.scss";
import { eventsList } from "../mocks/eventsList";
import * as dayjs from "dayjs";

export default function AllEvents() {
  const router = useRouter();
  const category = router.query.category;
  const [items, setitems] = useState([]);
  useEffect(() => {
    setitems(
      category ? eventsList.filter((r) => r.category === category) : eventsList
    );
  });

  return (
    <div className="pic-gallery">
      <Nav />
      <div className="body">
        <div className="main-carousel">
          <MainCarousel pictures={["/ydd-photos/slide88.jpg"]} />
        </div>

        <div className="pic-content container">
          <div className="cards-wrap" style={{ marginBottom: "120px" }}>
            <div className="row">
              {eventsList.map((itm) => (
                <div
                  className="col-md-4 col-sm-12"
                  style={{ marginBottom: 60 }}
                >
                  <Card
                    style={{
                      width: "100%",
                      border: 0,
                      boxShadow: "rgb(238 238 238 / 71%) 2px 0px 9px 4px",
                    }}
                    cover={<img alt="example" src={itm.banner} />}
                  >
                    <p className="time">
                      <span>{dayjs(itm.date).format("DD MMM YYYY")}</span>
                    </p>
                    <p className="card-title">{itm.name}</p>
                    <p className="card-text">{itm.address}</p>
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
