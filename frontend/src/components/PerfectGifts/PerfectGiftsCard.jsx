import React, { useContext } from "react";
import "./PerfectGiftsCard.css";
import dataContext from "../../context/dataContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
const PerfectGiftsCard = () => {
  const { data, addToWishlist, addToBasket } = useContext(dataContext);

  return (
    <div className="PerfectGiftsCard">
      <div className="dataCards">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="mySwiper swiper_slides"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="swiper-card">
              <div className="swiper-card-img">
                <img src={item.image} alt="" />
                <div className="card-links-container">
                  <div className="card-links">
                    <div
                      className="product-card--quickview product-card--page-link"
                    >
                      <Link
                        style={{ color: "rgb(81,70,51)" }}
                        to={`/${item._id}`}
                      >
                        {" "}
                        <i className="fa-regular fa-eye"></i>
                      </Link>
                    </div>

                    <div className="product-card--add-to-card product-card--page-link">
                      <Link style={{ color: "rgb(81,70,51)" }}>
                        <i
                          onClick={() => addToBasket(item)}
                          className="fa-solid fa-basket-shopping"
                        ></i>
                      </Link>
                    </div>

                    <div className="product-card--wishlist product-card--page-link">
                      <Link style={{ color: "rgb(81,70,51)" }}>
                        <i
                          onClick={() => addToWishlist(item)}
                          className="fa-regular fa-heart"
                        ></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-info">
                <Link
                  style={{ textDecoration: "none", color: "rgb(191,98,76)" }}
                >
                  {item.category}
                </Link>
                <span>{item.name}</span>
                <p>${item.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PerfectGiftsCard;
