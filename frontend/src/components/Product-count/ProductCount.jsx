import React, { useState, useEffect, useContext } from "react";
import "./ProductCount.css";
import { Link } from "react-router-dom";
import dataContext from "../../context/dataContext";

const ProductCount = () => {
  const { data } = useContext(dataContext);
  const [categoriesCount, setCategoriesCount] = useState({});

  useEffect(() => {
    const countCategories = () => {
      const counts = {};
      data.forEach((item) => {
        if (counts[item.category]) {
          counts[item.category]++;
        } else {
          counts[item.category] = 1;
        }
      });
      setCategoriesCount(counts);
    };
    countCategories();
  }, [data]);

  return (
    <div className="counted-products-cards">
      <div className="counted-products-card">
        <div className="counted-product-image">
          <img
            src="https://demo2.wpopal.com/xocora/wp-content/uploads/2023/11/h1_cat-1.jpg"
            alt=""
          />
        </div>
        <article>
          <Link to={"/shop"} style={{ textDecoration: "none", color: "black" }}>
            <h5>Soft Desserts</h5>
          </Link>
          <p>{categoriesCount["Soft Dessert"] || 0} products</p>
        </article>
      </div>
      <div className="counted-products-card second">
        <div className="counted-product-image">
          <img
            src="https://demo2.wpopal.com/xocora/wp-content/uploads/2023/11/h1_cat-2.jpg"
            alt=""
          />
        </div>
        <article>
          <Link
            to={"/shop"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h5>Boxed Chocolates</h5>
          </Link>
          <p>{categoriesCount["Boxed Gifts"] || 0} products</p>
        </article>
      </div>
      <div className="counted-products-card">
        <div className="counted-product-image">
          <img
            src="https://demo2.wpopal.com/xocora/wp-content/uploads/2023/11/h1_cat-3.jpg"
            alt=""
          />
        </div>
        <article>
          <Link to={"/shop"} style={{ textDecoration: "none", color: "black" }}>
            <h5>Fall Flavors</h5>
          </Link>
          <p>{categoriesCount["Fall Flavors"] || 0} products</p>
        </article>
      </div>
      <div className="counted-products-card forth">
        <div className="counted-product-image">
          <img
            src="https://demo2.wpopal.com/xocora/wp-content/uploads/2023/11/h1_cat-4.jpg"
            alt=""
          />
        </div>
        <article>
          <Link to={"/shop"} style={{ textDecoration: "none", color: "black" }}>
            <h5>Chocolate Bars</h5>
          </Link>
          <p>{categoriesCount["Chocolate Bars"] || 0} products</p>
        </article>
      </div>
    </div>
  );
};

export default ProductCount;
