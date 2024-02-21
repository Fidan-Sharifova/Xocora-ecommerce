import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import dataContext from "../../../context/dataContext";

function Header() {
  const { handleSearch } = useContext(dataContext);
  return (
    <div className="adminNavbar">
      <img
        src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/logo_light.svg"
        alt=""
      />
      <hr />
      <div className="inp_sort">
        <input
          className="admin_search"
          type="text"
          placeholder="Search.."
          onChange={handleSearch}
        />
      </div>
      <div className="admin_navbar_links">
        <ul>
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home Page
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
