import Search from "antd/lib/input/Search";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./styles/reports.scss";
import { CalendarOutlined } from "@ant-design/icons";
import Event from "../components/Event";
import { eventsList } from "../mocks/eventsList";
import { reportsList } from "../mocks/reportsList";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";

export default function reports() {
  const [reports, setreports] = useState([]);
  const router = useRouter();
  const category = router.query.category;
  const [items, setitems] = useState([]);
  console.log({ category });
  useEffect(() => {
    setitems(
      category
        ? reportsList.filter((r) => r.category === category)
        : reportsList
    );

    let itms = reportsList.reduce((agg, itm) => {
      agg[itm.category]
        ? (agg[itm.category] = agg[itm.category] + 1)
        : (agg[itm.category] = 1);
      return agg;
    }, {});
    let reports = Object.keys(itms).map(
      (key) => `${key} Reports (${itms[key]})`
    );
    setreports(reports);
  }, [category]);

  return (
    <div className='reports'>
      <Nav />
      <div className='banner'>
        <p className='big'>Youth Reports</p>
        {/* <p className="small">Way to show what is going on in YDD</p> */}
      </div>
      <div className='container reports-contents'>
        <div className='row'>
          <div className='col-sm-12 col-md-8'>
            {items.map((blog, i) => (
              <div className='blog'>
                <img src={`/ydd-photos/${blog.banner}`} alt='' />
                <p className='time'>
                  <CalendarOutlined /> {dayjs(blog.date).format("DD MMM YYYY")}{" "}
                  <span style={{ marginLeft: 5 }}>Admin</span>
                </p>
                <p className='blog-title' style={{ lineHeight: "40px" }}>
                  {blog.title}
                </p>
                <p className='blog-text'>
                  {blog.content.replace(/<p>/g, "").replace(/<\/p>/g, "")}
                </p>
                <div className='foot'>
                  <Link
                    href={{
                      pathname: "/singlereport",
                      query: {
                        title: `${blog.title}`,
                        type: "report",
                      },
                    }}
                  >
                    <a>
                      <span className='cont' style={{ cursor: "pointer" }}>
                        continue reading
                      </span>
                    </a>
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
                      pathname: "/reports",
                      query: { category: itm.split(" ")[0] },
                    }}
                  >
                    {itm}
                  </Link>
                </li>
              ))}
            </ul>

            <p style={{ fontSize: 30, marginTop: 50, color: "#000" }}>
              Upcoming Events
            </p>
            {eventsList.slice(0, 3).map((e) => (
              <Event noreg={true} event={e} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
