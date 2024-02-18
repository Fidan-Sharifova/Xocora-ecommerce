import React from "react";
import "./LimitedEdition.css";
import { Link } from "react-router-dom";
const LimitedEdition = () => {
  return (
    <div className="limited-edition">
      <div className="left-side-background">
        <div className="left-side">
          <img
            src="https://demo2.wpopal.com/xocora/wp-content/uploads/2023/11/h1_img1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="limited-edition-text-area">
        <span>NEW IN – LIMITED EDITION</span>
        <h1>Discover Excellence Cocoa Pure</h1>
        <p>
          <i>Made 100% from cocoa fruit – nothing else.</i>
        </p>

        <button className="shopBtn">
          <Link
            to={"/shop"}
          >
            {" "}
            Shop Now
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
  );
};

export default LimitedEdition;
