import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import dataContext from "../../../context/dataContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


function Dashboard() {
  const { handleDelete, data, setData } = useContext(dataContext);

  useEffect(() => {
    axios.get("http://localhost:1212/xocora/products").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  

  return (
    <>
      <div className="admin-main-section">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Admin</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="admin-sidebar">
          <img src="" alt="" />
          <ul>
            <li>
              <Link>Product Datas</Link>
            </li>
            <li>
              <Link>Users Datas</Link>
            </li>
            <li>
              <Link>Add Products</Link>
            </li>
            <li>
              <Link></Link>
            </li>
          </ul>
        </div>
        <div className="admin-datas-section">
          <table className="table table-striped table-dark admin-table">
            <thead></thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <img src={item.image} alt="" />
                  </td>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td>
                    <p>{item.category}</p>
                  </td>
                  <td>
                    <p>${item.price}</p>
                  </td>

                  <td>
                    <p>
                      <button
                        className="deleteBtn"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </p>
                  </td>
                  <td>
                    <p>
                      <Link to={`/admin/edit/${item._id}`}>
                        <button className="editBtn">Edit</button>
                      </Link>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
