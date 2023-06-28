import React from "react";
import Button from "../../../component/button/Button";
import styles from "./styles.module.css"
const getDataById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  if (!res.ok) {
    throw new Error("error");
  }
  return res.json();
};

const BlogPost = async ({ params }) => {
  const data = await getDataById(params.id);
  return (
    <div className={styles.blogPost}>
      <h4>{data.title}</h4>
      <span style={{ paddingLeft: "20px" }}>{data.body}</span>
      <Button text={"Back"} url={"/blog"}/>
    </div>
  );
};

export default BlogPost;
