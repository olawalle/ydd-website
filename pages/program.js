import React, { useState } from "react";
import { useEffect } from "react";
import Nav from "../components/Nav";

export default function program() {
  const [data, setdata] = useState("");
  useEffect(() => {
    let user = localStorage.getItem("afm-data");
    let gender = JSON.parse(user).gender;
    let token = localStorage.getItem("afm-data-token");
    let data = `accesstoken=${token}&gender=${gender}`;
    setdata(data);
  }, []);
  return (
    <div>
      <Nav />
      <iframe
        src={`http://127.0.0.1:5501/index.html?#${data}`}
        style={{ width: "100%" }}
      ></iframe>
    </div>
  );
}
