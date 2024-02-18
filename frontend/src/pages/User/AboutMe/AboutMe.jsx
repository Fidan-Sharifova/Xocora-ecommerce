import React from "react";
import "./AboutMe.css";
import { Helmet } from "react-helmet";
import Quotes from "../../../components/Quotes/Quotes";

const AboutMe = () => {
  return (
    <div className="about-me-page">
      <div className="other-page-header-backg"></div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <img
        className="get-in-touch-img"
        src="https://demo2.wpopal.com/xocora/wp-content/uploads/2023/11/about_bg.jpg"
        alt=""
      />
      <div className="get-in-touch">
        <p>GET IN TOUCH</p>
        <h1>About Me</h1>
      </div>
      <div className="about-me-container">
        <div className="about-me">
          <div className="about-me-img">
            <img
              src="https://demo2.wpopal.com/xocora/wp-content/uploads/2023/11/about_me_01.jpg"
              alt=""
            />
          </div>
          <div className="about-me-text-area">
            <p>ABOUT ME</p>
            <h1>I BAKE WHAT I LOVE</h1>
            <p>
              <i>
                {" "}
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps. Nanotechnology immersion
                along the information highway will close the loop on focusing
                solely on the bottom line.
              </i>
            </p>
            <p>Frederic</p>
            <p>CO FOUNDER</p>
          </div>
        </div>
      </div>
      <div className="what-people-says">
        <p>
          <i>WHAT PEOPLE ARE SAYING</i>
        </p>
        <Quotes />
      </div>
    </div>
  );
};

export default AboutMe;
