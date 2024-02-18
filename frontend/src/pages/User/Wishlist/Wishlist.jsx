import React, { useContext } from "react";
import "./Wishlist.css";
import dataContext from "../../../context/dataContext";
import { Helmet } from "react-helmet";

const Wishlist = () => {
  const { wishlist, deleteFromWishlist, handleSearch } =
    useContext(dataContext);
  return (
    <div className="wishlist">
      <div className="other-page-header-backg"></div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="wishlist-table">
        <table className="table">
          {wishlist.map((item, index) => (
            <tbody>
              <tr key={index}>
                <th scope="row">
                  <p>{index + 1}</p>
                </th>
                <td>
                  <img src={item.image} alt="" />
                </td>
                <td>
                  <p>{item.name}</p>
                </td>
                <td>
                  <p>${item.price}</p>
                </td>
                <td>
                  <p>
                    <i
                      onClick={() => deleteFromWishlist(item._id)}
                      className="fa-solid fa-xmark"
                    ></i>
                  </p>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
