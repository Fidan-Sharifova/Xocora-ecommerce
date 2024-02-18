import React from "react";
import "./Contact.css";
import { Helmet } from "react-helmet";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="other-page-header-backg"></div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="get-in-touch-img">
        <img
          src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/contact_us_1_breadscrumb.png"
          alt=""
        />
      </div>

      <div className="get-in-touch">
        <p>GET IN TOUCH</p>
        <h1>CONTACT US</h1>
      </div>
      <div className="contact-me-section">
        <div className="contact-me-bgimg">
          <img
            src="https://demo2.wpopal.com/xocora/wp-content/uploads/2021/11/h1_decor.png"
            alt=""
          />
        </div>
        <div className="contact-me-text-area">
          <span>Contact Me</span>
          <h1>Keep In Touch</h1>
          <span>
            Do you have a question? There might already be an answer on our
            frequently asked questions page.
          </span>
        </div>
      </div>
      <div className="contact-inputs-section">
        <div className="contact-inputs">
          <div className="name-email">
            <input placeholder="Name" className="name-email-inp" type="text" />
            <input
              placeholder="Email"
              className="name-email-inp"
              type="email"
            />
          </div>
          <input placeholder="Subjects" type="text" className="subject-inp" />
          <textarea
            placeholder="Message"
            className="msg-box"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="submitBtn">Submit</button>
        </div>
      </div>
      <div className="contact-map">
        {
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1181554.0398339927!2d12.005104023967865!3d42.921887331028046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1707920434862!5m2!1sen!2saz"
            style={{
              width: "100%",
              height: "100%",
              style: "border:0;",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        }
      </div>
      <div className="contact-info-section">
        <div className="contact-info-box">
          <div className="contact-info-box-heading">
            <CiLocationOn className="contact-icon" />
            <h1>Address</h1>
          </div>
          <span>Head Office: 785 15h Street, Office 478</span>
          <span>Berlin, De 81566</span>
        </div>
        <div className="contact-info-box">
          <div className="contact-info-box-heading">
            <FiPhone className="contact-icon" />
            <h1>CONTACT</h1>
          </div>
          <span>Mobile: +(084) 1200-567-990</span>
          <span>Hotline: 1800 – 1102</span>
          <span>Mail: Xocora-Info@Chocolate.Com</span>
        </div>
        <div className="contact-info-box">
          <div className="contact-info-box-heading">
            <MdOutlineWatchLater className="contact-icon" />
            <h1>HOUR OF OPERATION</h1>
          </div>
          <span>Monday-Saturday: 9:00 Am - 8:00 Pm Cst</span>
          <span>Sundays: 10:00 Am - 6:00 Pm Cst</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
