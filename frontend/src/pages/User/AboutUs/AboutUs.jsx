import React from "react";
import "./AboutUs.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const AboutUs = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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

      <div className="explore-products">
        <img
          src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/h1_decor.png"
          alt=""
        />
        <div className="text-area">
          <p>ABOUT US</p>
          <h1>QUALITY & PASSION WITH OUR CHOCOLATE</h1>
        </div>
      </div>
      <div className="ad-cards">
        <div className="ad-card">
          <img
            src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/About_03.png"
            alt=""
          />
          <span>
            We are not just a bakery, we are not just bakers. In fact, we are
            just like you, a bunch of food lovers fascinated with sweet
            indulgence, who dreamt of creating an appetizing fairy land of
            divine delicacies that relishes the utmost desires.
          </span>
        </div>
        <div className="ad-card">
          <img
            src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/About_02.png"
            alt=""
          />
          <span>
            We are here to redefine the all-time classics to create some
            heavenly and unforgettable experiences. And with all this and more,
            we wish to fill the empty spaces in every conversation with a smile.
          </span>
        </div>
      </div>
      <div className="limited-edition">
        <div className="left-side-background">
          <div className="left-side">
            <img
              src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/About_04.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="limited-edition-text-area">
          <span>OUR HISTORY</span>
          <h1>Our Story</h1>
          <p className="about-us-content">
            <i>
              Xocora is dedicated to creating and providing the ultimate in
              luxury gifts for all age groups. We use only fairly traded,
              organically grown, premium quality products sourced from
              small-scale farmers.
            </i>
          </p>

          <button className="shopBtn">
            <Link onClick={toTop} to={"/aboutUs"}>
              {" "}
              Read More
            </Link>
          </button>
        </div>
        <div className="right-side">
          <img
            src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/our_history_decor.png"
            alt=""
          />
        </div>
      </div>
      <div className="explore-products">
        <img
          src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/h1_decor.png"
          alt=""
        />
        <div className="text-area">
          <h1>CHOCOLATE IS ALWAYS THE PERFECT GIFT</h1>
        </div>
      </div>
      <div className="intro-cards">
        <div className="intro-card">
          <img
            src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/About_05.png"
            alt=""
          />
          <h1>From Cocoa Bean To Chocolate</h1>
          <p>
            <i>
              All of our creations are made in our Manufacture in the heart of
              the Bastille, one of the few workshops in Belgium where chocolate
              is handcrafted, from cocoa bean to chocolate.
            </i>
          </p>
          <button className="shopBtn">Discover</button>
        </div>
        <div className="intro-card">
          <img
            src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/About_05.png"
            alt=""
          />
          <h1>Company space and chocolate</h1>
          <p>
            <i>
              {" "}
              All of our creations are made in our Manufacture in the heart of
              the Bastille, one of the few workshops in Belgium where chocolate
              is handcrafted, from cocoa bean to chocolate.
            </i>
          </p>
          <button className="shopBtn">Discover</button>
        </div>
      </div>
      <div className="pesonalized-section">
        <div className="left_side">
          <img
            src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/h1_decor2.png"
            alt=""
          />
        </div>
        <div className="pesonalized-section-text-area">
          <h1>Our Ethos</h1>
          <p>
            <i>
              Quality doesn’t come from taste alone. At Xocora we pride
              ourselves on knowing that our cocoa beans are sustainably and
              ethically sourced. That’s why we implemented our own sustainable
              sourcing model: The Xocora Farming Program.
            </i>
          </p>
          <button className="shopBtn">
            <Link onClick={toTop} to={"/shop"}>
              {" "}
              Shop Now
            </Link>
          </button>
        </div>
        <div className="right_side">
          <div className="right_side_bcg">
            <img
              src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/About_09.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
