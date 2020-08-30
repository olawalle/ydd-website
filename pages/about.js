import Nav from "../components/Nav";
import Link from "next/link";
import "./styles/index.scss";
import MainCarousel from "./components/MainCarousel";
import Footer from "./components/Footer";
import { Card } from "antd";
export default function about() {
  return (
    <div className="about">
      <div className="body">
        <Nav />

        <MainCarousel />

        <div className="about-content container">
          <h1>The Youth Development Directorate</h1>
          <p className="desc">
            The AFM WECA Youth Development Directorate (YDD) is the youth
            centered focus-area of the Apostolic Faith Mission work in West and
            Central Africa, born out of the necessity to focus on various need
            areas particular to the young and thriving population of the Church.
          </p>
          <img src="/ydd-photos/YDD-Banner.jpg" className="wide-img" alt="" />

          <h1 style={{ marginTop: "50px" }}>Who Are We?</h1>
          <p className="desc">
            We are <b>an army of outstanding young people serving the Lord.</b>
          </p>

          <img
            src="/ydd-photos/Vision-Statement.jpg"
            className="wide-img"
            alt=""
            style={{ marginTop: "-20px" }}
          />

          <div className="pale">
            <h1 style={{ marginTop: "10px" }}>Our Vision is:</h1>
            <p className="vision">
              "To raise and retain an army of outstanding young people going to
              Heaven and persuading others to come along."
            </p>
          </div>

          <h1 style={{ marginTop: "100px" }}>Our Mission</h1>

          <div className="cards-wrap">
            <div className="row">
              <div className="col-md-3">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={
                    <img alt="example" src="/ydd-photos/ourstructure.jpg" />
                  }
                >
                  <p className="card-text">
                    To facilitate the implementation of an organisational
                    structure that will support the Youth Directorate.
                  </p>
                </Card>
              </div>
              <div className="col-md-3">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={
                    <img alt="example" src="/ydd-photos/ourplatforms.jpg" />
                  }
                >
                  <p className="card-text">
                    To create platforms using relevant channels through which
                    young people can discover themselves, connect with God, the
                    Church and one another as means of converting the world.
                  </p>
                </Card>
              </div>
              <div className="col-md-3">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={
                    <img alt="example" src="/ydd-photos/ourprograms.jpg" />
                  }
                >
                  <p className="card-text">
                    To develop Spirit-inspired programmes that will passionately
                    connect all young people to God.
                  </p>
                </Card>
              </div>
              <div className="col-md-3">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={<img alt="example" src="/ydd-photos/ourcare.jpg" />}
                >
                  <p className="card-text">
                    To facilitate the process through which the Church cares
                    (physically, spiritually and emotionally) for young people.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
