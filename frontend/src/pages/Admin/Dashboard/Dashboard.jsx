import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import dataContext from "../../../context/dataContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";

function Dashboard() {
  const { handleDelete, data, setData } = useContext(dataContext);
  const [usersDatas, setUsersDatas] = useState([]);
  const [isUsersDataVisible, setIsUsersDataVisible] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:1212/users/").then((res) => {
      setUsersDatas(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:1212/xocora/products").then((res) => {
      setData(res.data);
    });
  }, []);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:1212/users/${id}`).then((res) => {
      const deletedUser = data.filter((user) => user._id !== id);
      setUsersDatas(deletedUser);
    });
    toast.success("User Account Deleted Successfully!");
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
            <button
              type="button"
              onClick={() => {
                deleteUser(user._id);
              }}
            >
              Delete
            </button>
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
              <Link onClick={handleProductsDataClick}>
                Product Datas
              </Link>
            </li>
            <li>
              <Link to={""} onClick={handleUsersDataClick}>Users Datas</Link>
            </li>
            <li>
              <Link to={"/admin/add"}>Add Products</Link>
            </li>
            <li>
              <Link></Link>
            </li>
          </ul>
        </div>
        <div className="admin-datas-section">
          <table className="table table-striped table-dark admin-table">
            <thead></thead>
            {isUsersDataVisible ? renderUsersData() : renderProductsData()}
            <td> </td>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
