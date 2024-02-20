import React from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div>
      <div className="other-page-header-backg"></div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <img
        className="get-in-touch-img"
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
