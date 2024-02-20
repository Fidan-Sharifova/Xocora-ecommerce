import React from "react";
import "./Personalized.css";
import { Link } from "react-router-dom";
const Personalized = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="pesonalized-section">
      <div className="left_side">
        <img
          src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/h1_decor2.png"
          alt=""
        />
      </div>
      <div className="pesonalized-section-text-area">
        <h1>Personalised Chocolate Gifts</h1>
        <p>
          <i>
            Make the gift of Xocora that little bit sweeter by adding a free
            personalised message.
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
            src="https://demo2.wpopal.com/xocora/wp-content/uploads/2023/11/h1_img-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Personalized;
