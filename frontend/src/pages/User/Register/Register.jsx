import React, { useContext } from "react";
import "./Register.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import dataContext from "../../../context/dataContext";
import { Helmet } from "react-helmet";

const Register = () => {
  const { usersDatas } = useContext(dataContext);
  const navigate = useNavigate();
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      surName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      surName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      axios.post("http://localhost:1212/users/register", values).then((res) => {
        toast.success("Successfully registered.");
        navigate("/");
      });

      formik.resetForm();
    },
  });

  return (
    <div className="register-page">
      <div className="other-page-header-backg"></div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="register-box">
        {" "}
        <form className="register-form" onSubmit={formik.handleSubmit}>
          <h1>Register</h1>
          <label htmlFor="name"></label>
          <input
            className="formikInp"
            placeholder="Name"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <label htmlFor="surName"></label>
          <input
            className="formikInp"
            placeholder="Surname"
            id="surName"
            name="surName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.surName}
          />
          {formik.touched.surName && formik.errors.surName ? (
            <div>{formik.errors.surName}</div>
          ) : null}

          <label htmlFor="email"></label>
          <input
            className="formikInp"
            placeholder="Email"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          {formik.values.email &&
          usersDatas.some((user) => user.email === formik.values.email)
            ? alert("mail var")
            : null}

          <label htmlFor="password"></label>
          <input
            className="formikInp"
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <button onClick={toTop} type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
