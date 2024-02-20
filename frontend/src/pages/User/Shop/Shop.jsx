import React, { useContext, useEffect, useState } from "react";
import "./Shop.css";
import { Helmet } from "react-helmet";
import dataContext from "../../../context/dataContext";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Shop = () => {
  const { data, handleSort, addToBasket, addToWishlist } =
    useContext(dataContext);
  const [filteredData, setFilteredData] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const toTopp = () => {
    window.scrollTo(0,0);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
    console.log(value);
  };
  const handleFilter = () => {
    const min = priceRange[0];
    const max = priceRange[1];
    const filteredByPrice = data.filter(
      (item) => item.price >= min && item.price <= max
    );
    setFilteredData(filteredByPrice);
    console.log("pricerange", priceRange);
    console.log(filteredByPrice);
  };

  const filterByCategory = (category) => {
    const filtered = data.filter((item) => item.category === category);
    setFilteredData(filtered);
    setSelectedCategory(category);
  };

  const filterUniqueCategories = () => {
    const allCategories = data.map((item) => item.category);

    const uniqueCategories = [];

    allCategories.forEach((category) => {
      if (!uniqueCategories.includes(category)) {
        uniqueCategories.push(category);
      }
    });

    setUniqueCategories(uniqueCategories);
  };

  useEffect(() => {
    filterUniqueCategories();
  }, [data]);
  return (
    <div className="shop-page">
      <div className="other-page-header-backg"></div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Shop</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="current-page">
        <p>Home Page / Shop / {selectedCategory}</p>
      </div>
      <div className="shop-page-container">
        <div className="shop-left-side">
          <div className="sorting-area">
            <span>
              Showing 1–{Math.min(data.length, 18)} of {data.length} results
            </span>
            <select
              className="selectbox-sort"
              name=""
              id=""
              onChange={handleSort}
            >
              <option value="df">Default Sorting</option>
              <option value="09">Sort by Price- Low to High</option>
              <option value="90">Sort by Price- High to Low</option>
            </select>
          </div>
          <div className="shop-products">
            <div className="row">
              {filteredData.length > 0
                ? filteredData.map((item, index) => (
                    <div
                      key={item._id}
                      className="col-4 d-flex justify-content-center flex-column align-items-center swiper-card"
                    >
                      <div className="swiper-card-img">
                        <img
                          src={item.image}
                          style={{ width: "14rem" }}
                          alt=""
                        />
                        <div className="card-links-container">
                          <div className="card-links">
                            <div className="product-card--quickview product-card--page-link">
                              <Link
                                onClick={toTopp}
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
                          style={{
                            textDecoration: "none",
                            color: "rgb(191,98,76)",
                          }}
                        >
                          {item.category}
                        </Link>
                        <span>{item.name}</span>
                        <p>${item.price}</p>
                      </div>
                    </div>
                  ))
                : data.map((item, index) => (
                    <div
                      key={item._id}
                      className="col-4 d-flex justify-content-center flex-column align-items-center swiper-card"
                    >
                      <div className="shop-card-img">
                        <img
                          src={item.image}
                          style={{ width: "14rem" }}
                          alt=""
                        />
                        <div className="card-links-container">
                          <div className="card-links">
                            <div className="product-card--quickview product-card--page-link">
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
                          style={{
                            textDecoration: "none",
                            color: "rgb(191,98,76)",
                          }}
                        >
                          {item.category}
                        </Link>
                        <span>{item.name}</span>
                        <p>${item.price}</p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>

        <div className="shop-right-side">
          <div className="categories-section">
            <h3>Categories</h3>
            <hr />
            <div className="category-box-container">
              {uniqueCategories.map((category) => (
                <div className="category-box" key={category}>
                  <button
                    className={`category-btn ${
                      category === selectedCategory ? "selected" : ""
                    }`}
                    onClick={() => filterByCategory(category)}
                  >
                    {category}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div style={{ margin: "20px" }} className="filter-by-price-slider">
            <Slider
              min={0}
              max={1000}
              defaultValue={[0, 1000]}
              value={priceRange}
              onChange={handlePriceChange}
              marks={{
                0: "$100",
                200: "$200",
                400: "$400",
                600: "$600",
                800: "$800",
                1000: "$1000",
              }}
            />

            <button
              className="filterBtn"
              style={{ marginTop: "10vh", fontFamily: "arial" }}
              onClick={handleFilter}
            >
              FILTER
            </button>
          </div>
          <div className="popular-products">
            <h3>Popular Products</h3>
            <hr />
            <div className="popular-cards">
              {data.map(
                (item, index) =>
                  item.isPopular == true && (
                    <div key={index} className="popular-card">
                      <img src={item.image} alt="" style={{ width: "6rem" }} />
                      <div className="popular-card-context">
                        <span>
                          <Link to={`/${item._id}`}>{item.name}</Link>
                        </span>
                        <p>
                          <b>${item.price}</b>
                        </p>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
          {/* <div className="the-coctail-menu">
            <img style={{ width: "15rem" }} src="" alt="" />
            <div className="the-coctail-menu-content">
              <h3>THE COCTAIL MENU</h3>
              <button className="shopBtn">
                <Link to={`/shop`}>Shop Now</Link>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Shop;
