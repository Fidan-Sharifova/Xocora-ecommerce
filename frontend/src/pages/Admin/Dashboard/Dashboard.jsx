import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import dataContext from "../../../context/dataContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

function Dashboard() {
  const { handleDelete, data, setData } = useContext(dataContext);
  const [isUsersDataVisible, setIsUsersDataVisible] = useState(false);
  const {usersDatas, setUsersDatas}= useContext(dataContext)

  useEffect(() => {
    axios
      .get("http://localhost:1212/users/")
      .then((res) => {
        setUsersDatas(res.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    axios
      .get("http://localhost:1212/xocora/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [setData]);

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:1212/users/${id}`)
      .then((res) => {
        const deletedUser = usersDatas.filter((user) => user._id !== id);
        setUsersDatas(deletedUser);
        toast.success("User Account Deleted Successfully!");
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const handleUsersDataClick = () => {
    setIsUsersDataVisible(true);
  };

  const handleProductsDataClick = () => {
    setIsUsersDataVisible(false);
  };

  const renderUsersData = () => {
    return (
      <tbody>
        {usersDatas.map((user, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.surName}</td>
            <td>{user.email}</td>
            <td>
              <button
                type="button"
                onClick={() => {
                  deleteUser(user._id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  };

  const renderProductsData = () => {
    return (
      
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
    );
  };

  return (
    <>
      <div className="admin-main-section">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Admin</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="admin-sidebar">
          <ul>
            <li>
              <Link to="" onClick={handleProductsDataClick}>
                Product Datas
              </Link>
            </li>
            <li>
              <Link to="" onClick={handleUsersDataClick}>
                Users Datas
              </Link>
            </li>
            <li>
              <Link to="/admin/add">Add Products</Link>
            </li>
          </ul>
        </div>
        <div className="admin-datas-section">
          <table className="table table-striped table-dark admin-table">
          
            {isUsersDataVisible ? renderUsersData() : renderProductsData()}
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
