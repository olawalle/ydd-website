import React from "react";
import Link from "next/link";
import * as dayjs from "dayjs";

export default function Blog({ blog, withImage, category }) {
  return (
    <>
      {withImage && (
        <figure style={{ height: 200, marginBottom: 15, overflow: "hidden" }}>
          <img
            src={`/ydd-photos/${blog.banner}`}
            className='attachment-800x500 size-800x500 wp-post-image'
            alt=''
            style={{ marginBottom: 10 }}
          />
        </figure>
      )}
      <a>
        <strong className='post-title'>{blog.title}</strong>
      </a>
      <div className='meta-data'>
        by <a>{blog.writer}</a> on {dayjs(blog.date).format("DD MM, YYYY")} in{" "}
        <Link
          href={{
            pathname: blog.subCategory ? "/testimonies" : "/youthresources",
            query: {
              subCategory: blog.subCategory,
            },
          }}
        >
          <a>{blog.subCategory || "Youth Resources"}.</a>
        </Link>
      </div>
      <p
        style={{
          display: " -webkit-box",
          "-webkit-line-clamp": "3",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
        }}
      >
        {blog.content.replace(/<p>/g, "").replace(/<\/p>/g, "")}
      </p>{" "}
      <p>
        <Link
          href={{
            pathname: category !== "soulfood" ? "/singlereport" : "/singleblog",
            query: { title: blog.title, type: category },
          }}
        >
          <a className='basic-link'>
            Continue reading <i className='fa fa-angle-right'></i>
          </a>
        </Link>
      </p>
    </>
  );
}
