import Search from "antd/lib/input/Search";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./styles/reports.scss";
import { CalendarOutlined } from "@ant-design/icons";
import Event from "../components/Event";
import { eventsList } from "../mocks/eventsList";
import { testimoniesList } from "../mocks/testimoniesList";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";

export default function reports() {
  const [reports, setreports] = useState([]);

  const router = useRouter();
  const subCategory = router.query.subCategory;

  const [testimoniesList_, settestimoniesList_] = useState([]);

  useEffect(() => {
    let filteredList = subCategory
      ? testimoniesList.filter((t) => t.subCategory === subCategory.trim())
      : testimoniesList;
    settestimoniesList_(filteredList);
    let itms = testimoniesList.reduce((agg, itm) => {
      agg[itm.subCategory]
        ? (agg[itm.subCategory] = agg[itm.subCategory] + 1)
        : (agg[itm.subCategory] = 1);
      return agg;
    }, {});
    let reports = Object.keys(itms).map((key) => `${key} (${itms[key]})`);
    setreports(reports);
  }, [subCategory]);

  return (
    <div className='reports'>
      <Nav />
      <div className='banner'>
        <p className='big'>Testimonies</p>
        <p className='small'>
          And they overcame him by the blood of the Lamb, and by the word of
          their testimony... <i>Rev 12:11</i>
        </p>
      </div>
      <div className='container reports-contents'>
        <div className='row'>
          <div className='col-sm-12 col-md-8'>
            {testimoniesList_.map((blog, i) => (
              <div className='blog'>
                <img src={`/ydd-photos/${blog.banner}`} alt='' />
                <p className='time'>
                  <CalendarOutlined /> {dayjs(blog.date).format("DD MMM YYYY")}{" "}
                  <span style={{ marginLeft: 5 }}>{blog.writer}</span>
                </p>
                <p className='blog-title'>{blog.title}</p>
                <p className='blog-text'>
                  {blog.content.replace(/<p>/g, "").replace(/<\/p>/g, "")}
                </p>
                <div className='foot'>
                  <Link
                    href={{
                      pathname: "/singlereport",
                      query: {
                        title: `${blog.title}`,
                        type: "testimonies",
                      },
                    }}
                  >
                    <span className='cont' style={{ cursor: "pointer" }}>
                      CONTINUE READING
                    </span>
                  </Link>
                  {/* <p>
                    <span>FEATURED</span>| <span>GENERAL</span>|{" "}
                    <span>UNCATEGORIZED</span> NO COMMENTS YET
                  </p> */}
                </div>
              </div>
            ))}
          </div>
          <div className='col-sm-12 col-md-4'>
            <Search
              size='large'
              placeholder='input search text'
              onSearch={(value) => console.log(value)}
              enterButton
            />
            <p style={{ fontSize: 30, marginTop: 50, color: "#000" }}>
              Report Categories
            </p>
            <ul style={{ padding: 0, margin: 0 }}>
              {reports.map((itm) => (
                <li
                  style={{
                    listStyle: "none",
                    marginBottom: 12,
                    borderBottom: "1px solid #eee",
                    paddingBottom: 5,
                  }}
                >
                  <Link
                    href={{
                      pathname: "/testimonies",
                      query: { subCategory: itm.split("(")[0] },
                    }}
                  >
                    <a>{itm}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
