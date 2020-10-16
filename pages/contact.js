import React, { useState } from "react";
import { Collapse } from "antd";
import Nav from "../components/Nav";
import Footer from "./components/Footer";
import "./styles/contact.scss";
import ReactMapGL from "react-map-gl";

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const states = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

export default function contact() {
  const [viewPort, setViewPort] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 6.56321,
    longitude: 3.374422,
    zoom: 13,
  });
  return (
    <>
      <Nav />
      <div className="contact">
        <div className="banner">
          <ReactMapGL
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken="pk.eyJ1Ijoib2xhd2FsbGUiLCJhIjoiY2tma3ZzNXMxMHV0NjJ1cWh5bjBhODBiciJ9.NySLSE1kNzZ9SKJ7n0wgmQ"
            onViewportChange={(viewport) => setViewPort(viewport)}
            {...viewPort}
          />
        </div>
        <div className="container contact-content">
          <p className="header">AFCF in Nigeria</p>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Collapse
                expandIconPosition="right"
                style={{ backgroundColor: "#3bafdae3", border: 0 }}
                defaultActiveKey={[]}
              >
                {states
                  .filter((s, i) => i <= 18)
                  .map((state) => (
                    <Panel
                      style={{ marginBottom: 10, backgroundColor: "#fff" }}
                      header={state}
                      key={state}
                    >
                      <p>{text}</p>
                    </Panel>
                  ))}
              </Collapse>
            </div>
            <div className="col-sm-12 col-md-6">
              <Collapse
                expandIconPosition="right"
                style={{ backgroundColor: "#3bafdae3", border: 0 }}
                defaultActiveKey={[]}
              >
                {states
                  .filter((s, i) => i > 18)
                  .map((state) => (
                    <Panel
                      style={{ marginBottom: 10, backgroundColor: "#fff" }}
                      header={state}
                      key={state}
                    >
                      <p>{text}</p>
                    </Panel>
                  ))}
              </Collapse>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
