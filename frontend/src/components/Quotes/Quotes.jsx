import React from 'react'
import "./Quotes.css"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Quotes = () => {
  return (
    <div className="quotes-section">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <p style={{ color: "rgb(81,70,51)", fontSize: "30px" }}>
            "Chocolate impressed me on multiple levels. Really good. I would
            also like to say thank you to all your staff. I use chocolate often.
            We have no regrets!"
          </p>
          <span style={{ color: "rgb(113,97,71)" }}>-Bettine N.</span>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <p style={{ color: "rgb(81,70,51)", fontSize: "30px" }}>
            "I will let my mum know about this, she could really make use of
            chocolate! I can't say enough about chocolate. Thank you so much for
            your help."
          </p>
          <span style={{ color: "rgb(113,97,71)" }}>-Sharie V.</span>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <p style={{ color: "rgb(81,70,51)", fontSize: "30px" }}>
            “My order arrived the other day in perfect shape, and perfectly
            wrapped… You are a great company, and your chocolate is wonderful!”
          </p>
          <span style={{ color: "rgb(113,97,71)" }}>-JOAN L. , OMAHA, NE</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Quotes