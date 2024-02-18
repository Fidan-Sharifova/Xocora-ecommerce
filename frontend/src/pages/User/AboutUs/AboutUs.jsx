import React from "react";
import "./AboutUs.css";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div>
      <div className="other-page-header-backg"></div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="get-in-touch-img">
        <img
          src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/AboutUs_bg.jpg"
          alt=""
        />
      </div>

      <div className="get-in-touch">
        <p>GET IN TOUCH</p>
        <h1>About Us</h1>
      </div>
    </div>
  );
};

export default AboutUs;
