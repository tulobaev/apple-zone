import React, { useEffect, useState } from "react";
import scss from "./Form.module.scss";
import { useProduct } from "../context/AppleProductContext";
import { useNavigate, useParams } from "react-router-dom";

const initialValue = {
  name: "",
  category: "",
  price: "",
  description: "",
  stockQuantity: "",
  photo: "",
};

const Form = ({ isEdit }) => {
  const { addProduct, getOneProduct, updateProduct, oneProduct } = useProduct();
  const [product, setProduct] = useState(initialValue);
  const [previewUrl, setPreviewUrl] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct && isEdit) {
      setProduct(oneProduct);
      setPreviewUrl(oneProduct.photo);
    }
  }, [oneProduct]);

  //! обработчик инпута и его значение
  const handleChange = (e) => {
    if (e.target.name === "price" || e.target.name === "stockQuantity") {
      let productObj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(productObj);
    } else {
      let productObj = { ...product, [e.target.name]: e.target.value };
      setProduct(productObj);
    }
    if (e.target.name === "photo") {
      setPreviewUrl(e.target.value);
    }
  };
  //! обработчик инпута и его значение

  //! отправка данных, проверка на пустоту полей
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !product.name ||
      !product.category ||
      !product.price ||
      !product.stockQuantity
    ) {
      alert("Пожалуйста заполните поле!!!");
      return;
    }
    //!
    if (isEdit) {
      updateProduct(id, product);
    } else {
      addProduct(product);
    }
    //!
    navigate("/list");
    setProduct(initialValue);
    setPreviewUrl("");
  };
  //! отправка данных, проверка на пустоту полей

  //! очистка данных в инпуте
  const handleCancel = () => {
    setProduct(initialValue);
    setPreviewUrl("");
  };
  //! очистка данных в инпуте

  const appleCategories = [
    "iPhone",
    "iPad",
    "Mac",
    "AppleWatch",
    "AirPods",
    "AppleTV",
    "HomePod",
    "Accessories",
  ];

  return (
    <div className="container">
      <div className={scss.apple_zone_container}>
        <div className={scss.form_header}>
          <h2>{isEdit ? "Edit Apple Product" : "Add New Apple Product"}</h2>
          <p>
            {isEdit
              ? "Edit the product details below"
              : "Complete the form below to add a new product to inventory"}
          </p>
        </div>

        <form className={scss.apple_product_form}>
          <div className={scss.form_grid}>
            <div className={scss.form_column}>
              <div className={scss.form_group}>
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="e.g. iPhone 15 Pro Max"
                  required
                  value={product.name}
                  onChange={handleChange}
                />
              </div>

              <div className={scss.form_group}>
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  required
                  value={product.category}
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>
                  {appleCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className={scss.form_group}>
                <label htmlFor="price">Price ($)</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="e.g. 999.99"
                  min="0"
                  step="0.01"
                  required
                  value={product.price}
                  onChange={handleChange}
                />
              </div>

              <div className={scss.form_group}>
                <label htmlFor="stockQuantity">Stock Quantity</label>
                <input
                  type="number"
                  id="stockQuantity"
                  name="stockQuantity"
                  placeholder="e.g. 50"
                  min="0"
                  required
                  value={product.stockQuantity}
                  onChange={handleChange}
                />
              </div>

              <div className={scss.form_group}>
                <label htmlFor="stockQuantity">Image URL</label>
                <input
                  type="text"
                  id="ImageURL"
                  name="photo"
                  placeholder="e.g. Image Url"
                  required
                  value={product.photo}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={scss.form_column}>
              <div className={scss.form_group_photo_upload}>
                <label htmlFor="photo">Product Photo URL</label>
                <div className={scss.photo_upload_area}>
                  {previewUrl ? (
                    <div className={scss.photo_preview}>
                      <img src={previewUrl} alt="Product preview" />
                      <button
                        type="button"
                        className={scss.remove_photo}
                        onClick={handleCancel}
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <div className={scss.upload_placeholder}>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                        <path d="M17 8l-5-5-5 5" />
                        <path d="M12 3v12" />
                      </svg>
                      <span>Your img will appear here</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className={scss.form_group_full_width}>
            <label htmlFor="description">Product Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Provide a detailed description of the product..."
              rows="3"
              value={product.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className={scss.form_actions}>
            <button
              type="button"
              className={scss.cancel_button}
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              onClick={(e) => handleSubmit(e)}
              className={scss.submit_button}
            >
              <span>{isEdit ? "Update Product" : "Add Product"}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
