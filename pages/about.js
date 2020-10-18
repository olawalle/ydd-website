import Nav from "../components/Nav";
import Link from "next/link";
import "./styles/index.scss";
import "./styles/about.scss";
import MainCarousel from "./components/MainCarousel";
import Footer from "./components/Footer";
import { Card } from "antd";
export default function about() {
  return (
    <div className="about">
      <div className="body">
        <Nav />
        <div className="main-carousel">
          <MainCarousel
            pictures={["/ydd-photos/slide8.png", "/ydd-photos/follow.jpg"]}
          />
        </div>

        <div className="about-content container">
          <h1 className="page-heading">
            <hr />
            <span>The Youth Development Directorate</span>
            <hr />
          </h1>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p className="abt">About us</p>
              <p className="desc">
                The AFM WECA Youth Development Directorate (YDD) is the youth
                centered focus-area of the Apostolic Faith Mission work in West
                and Central Africa, born out of the necessity to focus on
                various need areas particular to the young and thriving
                population of the Church.
                <p>
                  <span>
                    We are an army of{" "}
                    <b style={{ fontWeight: "600" }}>
                      outstanding young people
                    </b>{" "}
                    serving the Lord.
                  </span>
                  <span>We are a complement.</span>
                  <span>
                    We are executors of the Church Management’s initiatives.
                  </span>
                  <span>We are generators of ideas.</span>
                  <span>We are the energy of the Gospel train.</span>
                </p>
              </p>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="small-carousel">
                <MainCarousel
                  pictures={[
                    "/ydd-photos/YDD-Banner.jpg",
                    "/ydd-photos/aboutus1.jpg",
                    "/ydd-photos/aboutus2.jpg",
                    "/ydd-photos/aboutus3.jpg",
                    "/ydd-photos/aboutus5.jpg",
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="vision_fixed" id="vision"></div>

          <div className="vision-text">
            <h3>Our Vision is:</h3>
            <hr />
            <p className="vision">
              "To raise and retain <b>an army of outstanding young people</b>{" "}
              going to Heaven and persuading others to come along."
            </p>
          </div>

          <div className="mission_fixed" id="mission">
            <div className="strip">OUR MISSION</div>
          </div>

          <h1 className="mission-heading">Our Mission</h1>
          <p className="mission-text">
            The following four (4) key pillars have been setup as our mission
            statement to drive the actualisation of the YDD vision
          </p>
          <div className="cards-wrap">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <p className="card-heading">STRUCTURE</p>
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
              <div className="col-md-3 col-sm-12">
                <p className="card-heading">PLATFORMS</p>
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
              <div className="col-md-3 col-sm-12">
                <p className="card-heading">PROGRAMMES</p>
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
              <div className="col-md-3 col-sm-12">
                <p className="card-heading">CARE</p>
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

          <div className="values_fixed" id="values">
            <div className="strip">OUR VALUES</div>
          </div>
          <h1 className="mission-heading">Our Values</h1>
          <p className="mission-text">
            Our belief system is based on the following values:
          </p>
          <div className="cards-wrap" style={{ marginBottom: "120px" }}>
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={<img alt="example" src="/ydd-photos/aboutus4.jpg" />}
                >
                  <p className="card-text">
                    We value and strive to maintain the presence of God in our
                    lives more than anything in the world
                  </p>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={<img alt="example" src="/ydd-photos/ypfslider3.jpg" />}
                >
                  <p className="card-text">
                    Everything we do is geared towards the realization of our
                    vision statement
                  </p>
                </Card>
              </div>
              <div className="col-md-4 col-sm-12">
                <Card
                  style={{ width: "100%", border: 0 }}
                  cover={<img alt="example" src="/ydd-photos/aboutus.jpg" />}
                >
                  <p className="card-text">
                    We give God all praises for the little He has aided us to do
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
