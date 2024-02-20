import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import dataContext from "../../../context/dataContext";

const Header = () => {
  const { handleSearch, basket, increaseCountBasket, decreaseCountBasket } =
    useContext(dataContext);
  const clientMessage = "Basket is empty!";

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img
              src="	https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/logo_light.svg"
              alt=""
            />
          </div>
          <nav>
            <ul>
              <li className="dropdown">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="dropdown">
                <Link to={"/shop"}>Shop</Link>
              </li>
              {/* <li className="dropdown">
                <Link>Product</Link>
              </li> */}
              <li className="dropdown">
                <Link to={"/blog"}>Blog</Link>
              </li>

              <li className="dropdown">
                <Link to={`/contact`}>Contact</Link>
              </li>
              <li className="dropdown">
                <Link>About</Link>
                <i className="fa-solid fa-angle-down"></i>
                <div className="dropdown-content">
                  <ul>
                    <li>
                      <Link to={`/aboutMe`}>About Me</Link>
                    </li>
                    <li>
                      <Link to={`/aboutUs`}>About Us</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <div className="navbar-icons">
            <div className="searchCanvas">
              <button
                className="canvasBtn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasTop"
                aria-controls="offcanvasTop"
              >
                <CiSearch />
              </button>

              <div
                className="offcanvas offcanvas-top"
                tabIndex="-1"
                id="offcanvasTop"
                aria-labelledby="offcanvasTopLabel"
              >
                <div className="offcanvas-header">
                  <h5 id="offcanvasTopLabel"></h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <div className="search-form">
                    <input
                      className="searchInp"
                      placeholder="Search..."
                      type="text"
                      onChange={(e) => handleSearch(e)}
                    />
                    <CiSearch className="searchBtn" />
                  </div>
                </div>
              </div>
            </div>

            <Link to={"/login"} style={{ color: "white" }}>
              <CiUser />
            </Link>

            <button
              className="canvasBtn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <CiShoppingCart />
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Basket</h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="basketDatas">
                  {basket.length == 0 ? (
                    <div className="client-msg-canvas">
                      <p className="clientMsg">{clientMessage}</p>
                    </div>
                  ) : (
                    basket.map((item, index) => (
                      <div key={index} className="basket-canvas-card">
                        <div className="basket-canvas-img">
                          <img src={item.item.image} alt="" />
                        </div>
                        <div className="basket-canvas-info">
                          <span>{item.item.name}</span>
                          <span>${item.totalPrice}</span>
                          <div className="item-count-controller">
                            <button
                              className="basket-canvas-btn"
                              onClick={() => decreaseCountBasket(item)}
                            >
                              <i class="fa-solid fa-angle-left"></i>
                            </button>
                            <span>{item.count}</span>
                            <button
                              className="basket-canvas-btn"
                              onClick={() => increaseCountBasket(item)}
                            >
                              <i class="fa-solid fa-angle-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <Link
                  className="go-to-basket"
                  to={`/basket`}
                  style={{ color: "black" }}
                >
                  Go To Page
                </Link>
              </div>
            </div>

            <Link style={{ color: "white" }} to={`/wishlist`}>
              <CiHeart />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
