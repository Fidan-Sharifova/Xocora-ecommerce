import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-img">
        <img src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/logo.svg" />
      </div>
      <div className="footer-text-area">
        <div className="shop">
          <h4>Shop</h4>
          <ul>
            <li>
              <Link style={{ textDecoration: "none", color: "rgb(113,97,71)" }}>
                Boxed Chocolates
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "rgb(113,97,71)" }}>
                Gift Boxes
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "rgb(113,97,71)" }}>
                Caramels
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "rgb(113,97,71)" }}>
                Chocolate Bars
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "rgb(113,97,71)" }}>
                Fruits & Nuts
              </Link>
            </li>
          </ul>
        </div>
        <div className="shop">
          <h4>Information</h4>
          <ul>
            <li>
              <Link style={{ textDecoration: "none", color: "rgb(113,97,71)" }}>
                About Us
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "rgb(113,97,71)" }}>
                FAQs
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "rgb(113,97,71)" }}>
                Our Producers
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "rgb(113,97,71)" }}>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "rgb(113,97,71)" }}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="shop">
          <h4>My Account</h4>
          <ul>
            <li>
              <Link style={{ textDecoration: "none", color: "rgb(113,97,71)" }}>
                Delivery Infomation
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "rgb(113,97,71)" }}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "rgb(113,97,71)" }}>
                Discount
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none", color: "rgb(113,97,71)" }}>
                Custom
              </Link>
            </li>
            <li>
              <Link
                style={{
                  textDecoration: "none",
                  color: "rgb(113,97,71)",
                  paddingTop: "5px",
                }}
              >
                Service Term
              </Link>
            </li>
          </ul>
        </div>
        <div className="contact-us">
          <h4>Contact Us</h4>
          <p>
            Head Office: 785 15h Street, Office 478 <br />
            Berlin, De 81566
          </p>
          <p>Tel: 0123456778</p>
          <p>Email: Demo@Demo.com</p>
          <div className="footer-icons-area">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-vk"></i>
          </div>
        </div>
      </div>
      <div className="second-footer">
        <p>Copyright © 2023 Xocora. All Rights Reserved</p>
        <img
          src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/footer1_01.png"
          alt=""
        />
        <div className="second-footer-content">
          <p>Terms Of Use</p>
          <p>Privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
