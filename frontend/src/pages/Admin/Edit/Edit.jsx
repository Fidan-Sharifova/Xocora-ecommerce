import React, { useContext, useEffect, useState } from "react";
import "./Edit.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import dataContext from "../../../context/dataContext";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

const Edit = () => {
  const { data, setData } = useContext(dataContext);
  const navigate= useNavigate()
  const [update, setUpdate] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:1212/xocora/products/${id}`).then((res) => {
      setUpdate(res.data);
    });
  }, [id]);
  useEffect(() => {
    formik.setValues({
      image: update?.image,
      name: update?.name,
      desc: update?.desc,
      price: update?.price,
      category: update?.category,
      isPopular: update?.isPopular,
    });
  }, [update]);
  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      desc: "",
      price: "",
      category: "",
      isPopular: false,
    },
    validationSchema: Yup.object({
      image: Yup.string().required("Required"),
      name: Yup.string()
        .max(200, "Must be 200 characters or less")
        .required("Required"),
      desc: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      category: Yup.string()
        .max(200, "Must be 200 characters or less")
        .required("Required"),
      isPopular: Yup.boolean().required("Required"),
    }),
    onSubmit: (values) => {
      axios
        .put(`http://localhost:1212/xocora/products/${id}`, { ...values })
        .then((res) => {
          setData(data.map((item) => (item._id === id ? values : item)));
          toast.success("Item edited successfully.");
        })
        .catch((error) => {
          console.error("Edit request error:", error);
        });
      formik.resetForm();
      navigate("/admin/dashboard");
    },
  });
  return (
    <div className="editPage">
      <form onSubmit={formik.handleSubmit} className="admin-form">
        <label htmlFor="Image"></label>
        <input
          className="formikInp"
          placeholder="Image Url"
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image ? (
          <div>{formik.errors.image}</div>
        ) : null}

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
        <label htmlFor="desc"></label>
        <input
          className="formikInp"
          placeholder="Description"
          id="desc"
          name="desc"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.desc}
        />
        {formik.touched.desc && formik.errors.desc ? (
          <div>{formik.errors.desc}</div>
        ) : null}

        <label htmlFor="Price"></label>
        <input
          className="formikInp"
          placeholder="Price"
          id="price"
          name="price"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div>{formik.errors.price}</div>
        ) : null}

        <label htmlFor="category"></label>
        <input
          className="formikInp"
          placeholder="Category"
          id="category"
          name="category"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.category}
        />
        {formik.touched.category && formik.errors.category ? (
          <div>{formik.errors.category}</div>
        ) : null}

        <div className="isPopularBox">
          <label htmlFor="isPopular">Is Popular</label>
          <input
            id="isPopular"
            name="isPopular"
            type="checkbox"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.isPopular}
            value={false}
          />

          {formik.touched.isPopular && formik.errors.isPopular ? (
            <div>{formik.errors.isPopular}</div>
          ) : null}
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
