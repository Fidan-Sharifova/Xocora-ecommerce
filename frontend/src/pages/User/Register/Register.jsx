import React from "react";
import "./Register.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      surName: "",
      email: "",
      password: "",
      age: "",
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
      age: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      //   console.log(values);
      axios
        .post("http://localhost:1212/users/register", values)
        .then((res) => {
          //   console.log(res);
          toast.success("register olundu");
          navigate("/");
        })
        .catch((error) => {
          console.error("Error occurred:", error);
        });
      formik.resetForm();
    },
  });

  return (
    <div>
      <div className="other-page-header-backg"></div>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
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

        <label htmlFor="surName">Last Name</label>
        <input
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

        <label htmlFor="email">Email Address</label>
        <input
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

        <label htmlFor="password">Password</label>
        <input
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

        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.age}
        />
        {formik.touched.age && formik.errors.age ? (
          <div>{formik.errors.age}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
