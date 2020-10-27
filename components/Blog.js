import React from "react";
import Link from "next/link";
import * as dayjs from "dayjs";

export default function Blog({ blog, withImage, category }) {
  return (
    <>
      {withImage && (
        <img
          src={`/ydd-photos/${blog.banner}`}
          className='attachment-800x500 size-800x500 wp-post-image'
          alt=''
          style={{ marginBottom: 10 }}
        />
      )}
      <a>
        <strong className='post-title'>{blog.title}</strong>
      </a>
      <div className='meta-data'>
        by <a>{blog.writer}</a> on {dayjs(blog.date).format("DD MM, YYYY")} in{" "}
        <a>in Youth Resources.</a>
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
            pathname: category ? "/singlereport" : "/singleblog",
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
