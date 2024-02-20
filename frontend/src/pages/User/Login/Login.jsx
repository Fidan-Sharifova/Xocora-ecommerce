import React from "react";
import "./Login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      axios
        .post("http://localhost:1212/users/login", { ...values })
        .then((res) => {
          toast.success(`${res.data.name} Welcome Back!`);
          navigate("/");
        })
        .catch((error) => {
          toast.error("Email or Password incorrect");
        });
      formik.resetForm();
    },
  });
  return (
    <div className="login-page">
      <div className="other-page-header-backg"></div>

      <div className="login-box">
        <form onSubmit={formik.handleSubmit}>
          <h3>Log in</h3>

          <label htmlFor="email"></label>
          <input
            className="formikInp"
            placeholder="Email Address"
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

          <button type="submit" className="submit-btn">
            Submit
          </button>
          <p>
            Don't have an account? <Link to={"/register"}>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
