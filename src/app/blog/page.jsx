"use client";
//for static data
import React from "react";
import Link from "next/link";

const getData = async () => {

  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("error");
  }
  return res.json();
};

const Blog = async () => {
  const datas = await getData();
  console.log(datas)
  return (
    <div>
      {datas.map((data) => {
        return (
          <div key={data._id}>
          <Link href={`/blog/${data._id}`} > <h4>{data.title}</h4>
            <span style={{ paddingLeft: "20px" }}>{data.desc}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
