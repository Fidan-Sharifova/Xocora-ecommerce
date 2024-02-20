import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="adminNavbar">
      <h1>Admin Page</h1>
      <div className="admin_navbar_links">
        <ul>
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home Page
            </Link>
          </li>

          <li>
            <Link
              to="add"
              style={{ color: "white", textDecoration: "none" }}
            >
              Add Product
            </Link>
          </li>

          <li>
            <Link
              to="edit"
              style={{ color: "white", textDecoration: "none" }}
            >
              Edit Product
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
