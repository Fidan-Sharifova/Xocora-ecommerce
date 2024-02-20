import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import dataContext from "../../../context/dataContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const [search, setSearch] = useState("");
  const { handleDelete, data, setData } = useContext(dataContext);

  useEffect(() => {
    axios.get("http://localhost:1212/xocora/products").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="inp_sort">
        <input
          className="admin_search"
          type="text"
          placeholder="Search.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div>
        <table className="table admin-table">
          <thead></thead>
          <tbody>
            {filteredData.map((item, index) => (
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
    </>
  );
}

export default Dashboard;
