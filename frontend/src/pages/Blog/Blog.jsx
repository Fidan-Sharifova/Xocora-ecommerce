import React from "react";
import { Helmet } from "react-helmet";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="blog-page">
      <div className="other-page-header-backg"></div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <img
        className="blog-img"
        src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/Breadcrumb-Blog.jpeg"
        alt=""
      />
      <div className="blog-content">
        <p>Home Page / Blog</p>
        <h1>Blog</h1>
      </div>
    </div>
  );
};

export default Blog;
