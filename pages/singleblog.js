import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "../components/Nav";
import { blogsList } from "../mocks/blogsList";
import Footer from "../components/Footer";
import "./styles/singleblog.scss";
import Link from "next/link";

export default function singleblog() {
  const router = useRouter();
  const title = router.query.title;
  const [blogItem, setblogItem] = useState({});
  useEffect(() => {
    setblogItem(
      title ? blogsList.find((b) => b.title === title) : blogsList[0]
    );
  }, [title]);
  return (
    <div className='single-blog'>
      <Nav />
      <div className='banner'>
        <div className='crumbs'>
          <div
            className='container'
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
            <Link href='/'>
              <a>
                <span>YDD</span>
              </a>
            </Link>
            {" > "}
            <Link href='/youthresources'>
              <a>
                <span>Youth Resources</span>
              </a>
            </Link>
            {" > "}
            <Link href='/soulfood'>
              <a>
                <span>Soul food</span>
              </a>
            </Link>
            {" > "} <span>{blogItem.title}</span>
          </div>
        </div>
      </div>
      <div className='container content'>
        <h1 className='page-heading'>
          <hr />
          <span>{blogItem.title}</span>
          <span
            style={{
              display: "block",
              fontSize: 14,
            }}
          >
            by {blogItem.writer}
          </span>
          <hr />
        </h1>
        <div className='content'>
          <p dangerouslySetInnerHTML={{ __html: blogItem.content }}></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
