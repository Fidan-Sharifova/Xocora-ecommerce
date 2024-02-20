import React, { useContext, useState } from "react";
import "./Basket.css";
import dataContext from "../../../context/dataContext";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const Basket = () => {
  const { basket, removeFromBasket, decreaseCountBasket, increaseCountBasket } =
    useContext(dataContext);
  const clientMessage = "Basket is empty!";

  return (
    <div className="basket">
      <div className="other-page-header-backg"></div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Basket</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <table className="table">
        <tbody>
          {basket.length == 0 ? (
            <div className="client-msg">
              <p className="clientMsg">{clientMessage}</p>
            </div>
          ) : (
            basket.map((item, index) => (
              <tr key={index}>
                <th scope="row">
                  <p>{index + 1}</p>
                </th>
                <td>
                  <img src={item.item.image} alt={item.name} />
                </td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "rgb(90,79,61)" }}
                    to={`/${item._id}`}
                  >
                    <p>{item.item.name}</p>
                  </Link>
                </td>
                <td>
                  <p>${item.totalPrice}</p>
                </td>
                <td>
                  <button
                    className="decreaseBtn"
                    onClick={() => decreaseCountBasket(item)}
                  >
                    -
                  </button>
                </td>
                <td>
                  <p>{item.count}</p>
                </td>
                <td>
                  <button
                    className="increaseBtn"
                    onClick={() => increaseCountBasket(item)}
                  >
                    +
                  </button>
                </td>
                <td>
                  <i
                    onClick={() => removeFromBasket(item._id)}
                    className="fa-regular fa-trash-can x-icon"
                  ></i>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Basket;
