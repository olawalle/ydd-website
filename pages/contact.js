import React, { useState } from "react";
import { Collapse } from "antd";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./styles/contact.scss";
import ReactMapGL from "react-map-gl";

const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const states = [
  {
    "State/District": "WeCA",
    "CONTACT PERSON": "Ayomikun Akinbobola",
    PORTFOLIO: "AFCMF President",
    "PHONE NO.": "07037090335",
    "E-MAIL ADDRESS": "akinbobolaayomikun@gmail.com",
  },
  {
    "State/District": "WeCA",
    "CONTACT PERSON": "Oluwatosin Fasanya",
    PORTFOLIO: " Secretary",
    "PHONE NO.": "08168038532",
    "E-MAIL ADDRESS": "oluwatosindeborah680@gmail.com",
  },
  {
    "State/District": "WeCA",
    "CONTACT PERSON": "Adesanwo Abiodun",
    PORTFOLIO: "Welfare",
    "PHONE NO.": "07033934605",
    "E-MAIL ADDRESS": "adesanwoabiodun@yahoo.com",
  },
  {
    "State/District": "WeCA",
    "CONTACT PERSON": "Adejumo Adetunji",
    PORTFOLIO: "Strategy and Planning",
    "PHONE NO.": "08162605225",
    "E-MAIL ADDRESS": "adetunjiadejumo62@gmail.com",
  },
  {
    "State/District": "Abia",
    "CONTACT PERSON": "Onwuegbu Samuel",
    PORTFOLIO: "District Outreach Head",
    "PHONE NO.": "08064613838",
    "E-MAIL ADDRESS": "onwuegbusam@gmail.com",
  },
  {
    "State/District": "Abuja",
    "CONTACT PERSON": "Sanmi Alonge",
    PORTFOLIO: "Regional Outreach Head",
    "PHONE NO.": "08164947400",
    "E-MAIL ADDRESS": "jeffdejas@gmail.com",
  },
  {
    "State/District": "Abuja",
    "CONTACT PERSON": "Chima Anih",
    PORTFOLIO: "District Outreach Head",
    "PHONE NO.": "08069079336",
    "E-MAIL ADDRESS": "anih_david@yahoo.com",
  },
  {
    "State/District": "Ado-Ekiti",
    "CONTACT PERSON": "Abraham Salau",
    PORTFOLIO: "Regional Outreach Head",
    "PHONE NO.": "08067628231",
    "E-MAIL ADDRESS": "salawuabraham@gmail.com",
  },
  {
    "State/District": "Ado-Ekiti",
    "CONTACT PERSON": "Fasiku Ayo",
    PORTFOLIO: "AFCMF Coordinator",
    "PHONE NO.": "07034923362",
    "E-MAIL ADDRESS": "nil",
  },
  {
    "State/District": "Ado-Ekiti",
    "CONTACT PERSON": "Olowofila Olaolu",
    PORTFOLIO: "District Outreach Head",
    "PHONE NO.": "08138339528",
    "E-MAIL ADDRESS": "sirollyman@gmail.com",
  },
  {
    "State/District": "Anambra",
    "CONTACT PERSON": "Oliseh Okafor",
    PORTFOLIO: "District Outreach Head",
    "PHONE NO.": "07032813444",
    "E-MAIL ADDRESS": "whengracespeaks@gmail.com",
  },
  {
    "State/District": "Bayelsa",
    "CONTACT PERSON": "Promise Blessing",
    PORTFOLIO: "District Outreach Head",
    "PHONE NO.": "08032552393",
    "E-MAIL ADDRESS": "blessprom1@yahoo.com",
  },
  {
    "State/District": "Cross-River",
    "CONTACT PERSON": "Agbor Godwin Ebri",
    PORTFOLIO: "District Outreach Head",
    "PHONE NO.": "08065294758",
    "E-MAIL ADDRESS": "godwinagbor2013@gmail.com",
  },
  {
    "State/District": "Delta",
    "CONTACT PERSON": "James Ubong Effiong",
    PORTFOLIO: "District Outreach Head",
    "PHONE NO.": "07064977630",
    "E-MAIL ADDRESS": "eyenabasi1@gmail.com",
  },
  {
    "State/District": "Delta",
    "CONTACT PERSON": "Effiong Gift",
    PORTFOLIO: "AFCMF Coordinator",
    "PHONE NO.": "07062483936",
    "E-MAIL ADDRESS": "nil",
  },
  {
    "State/District": "Edo",
    "CONTACT PERSON": "Joshua Omowale",
    PORTFOLIO: "District Outreach Head",
    "PHONE NO.": "08034235212",
    "E-MAIL ADDRESS": "joshuaorogun2013@gmail.com",
  },
  {
    "State/District": "Edo",
    "CONTACT PERSON": "Mercy Tope",
    PORTFOLIO: "AFCMF Coordinator",
    "PHONE NO.": "08167224144",
    "E-MAIL ADDRESS": "nil",
  },
  {
    "State/District": "Enugu",
    "CONTACT PERSON": "Samuel Anih",
    PORTFOLIO: "Regional Outreach Head",
    "PHONE NO.": "08033906820",
    "E-MAIL ADDRESS": "anihsammy2015@gmail.com",
  },
  {
    "State/District": "Faith City",
    "CONTACT PERSON": "Ope Abioye",
    PORTFOLIO: "District Outreach Head",
    "PHONE NO.": "08065411448",
    "E-MAIL ADDRESS": "abioye.jonathan48@gmail.com",
  },
  {
    "State/District": "Ibadan",
    "CONTACT PERSON": "Adewale Olumide",
    PORTFOLIO: "Regional Outreach Head",
    "PHONE NO.": "08166195650",
    "E-MAIL ADDRESS": "adewale.mide@yahoo.com",
  },
  {
    "State/District": "Ibadan",
    "CONTACT PERSON": "Abraham Itanola",
    PORTFOLIO: "AFCMF Coordinator",
    "PHONE NO.": "08066669699",
    "E-MAIL ADDRESS": "nil",
  },
  {
    "State/District": "Ikot-Ewang",
    "CONTACT PERSON": "Joseph Udoaka Etim",
    PORTFOLIO: "Regional Outreach Head",
    "PHONE NO.": "08142088011",
    "E-MAIL ADDRESS": "udoakajoseph1993@gmail.com",
  },
  {
    "State/District": "Imo ",
    "CONTACT PERSON": "Nmeregini Oliver",
    PORTFOLIO: "District Outreach Head",
    "PHONE NO.": "08058785199",
    "E-MAIL ADDRESS": "oziokojoshua@yahoo.com",
  },
  {
    "State/District": "Jos",
    "CONTACT PERSON": "Olubummo Temitope ",
    PORTFOLIO: "District Outreach Head",
    "PHONE NO.": "08038516518",
    "E-MAIL ADDRESS": "olubummojerry@gmail.com",
  },
  {
    "State/District": "Jos",
    "CONTACT PERSON": "Kemi Dada",
    PORTFOLIO: "AFCMF Coordinator",
    "PHONE NO.": "07062718787",
    "E-MAIL ADDRESS": "nil",
  },
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
        <div
          className="container contact-content"
          style={{ marginBottom: 100 }}
        >
          <p className="header">AFCF in Nigeria</p>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Collapse
                expandIconPosition="right"
                style={{ backgroundColor: "#3bafdae3", border: 0 }}
                defaultActiveKey={[]}
              >
                {states
                  .filter((s, i) => i % 2 === 0)
                  .map((state) => (
                    <Panel
                      style={{ marginBottom: 10, backgroundColor: "#fff" }}
                      header={state["State/District"]}
                      key={state["State/District"]}
                    >
                      <p>{state["CONTACT PERSON"]}</p>
                      <p>{state["PORTFOLIO"]}</p>
                      <p>{state["PHONE NO."]}</p>
                      <p>{state["E-MAIL ADDRESS"]}</p>
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
                  .filter((s, i) => i % 2 === 1)
                  .map((state) => (
                    <Panel
                      style={{ marginBottom: 10, backgroundColor: "#fff" }}
                      header={state["State/District"]}
                      key={state["State/District"]}
                    >
                      <p>{state["CONTACT PERSON"]}</p>
                      <p>{state["PORTFOLIO"]}</p>
                      <p>{state["PHONE NO."]}</p>
                      <p>{state["E-MAIL ADDRESS"]}</p>
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
