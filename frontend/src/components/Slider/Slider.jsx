import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="slider-section">
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 4000 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src=" https://demo2.wpopal.com/xocora/wp-content/uploads/2023/11/rev_slider1-bg-2.jpg"
            alt=""
          />
          <div className="slider1-text">
            <img
              src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/rev_slider1_text-2.png"
              alt=""
            />
            <p>Give Your Honey A Sweetie Pie.</p>
            <button className="sliderBtn">
              <Link to={`/shop`}>Shop Now</Link>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://demo2.wpopal.com/xocora/wp-content/uploads/2023/11/rev_slider1_bg-1.jpg"
            alt=""
          />
          <div className="slider2-text">
            <img
              src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/rev_slider1_text-1.png"
              alt=""
            />
            <p>Give Your Honey A Sweetie Pie.</p>
            <button className="sliderBtn">
              <Link
                to={`/shop`}
              >
                Shop Now
              </Link>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
