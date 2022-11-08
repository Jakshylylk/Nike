import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { productContext } from "../../../Context/ProductContextProvider";
import "./EditProduct.css";

const EditProduct = () => {
  const { editProducts, productDetails, readOneProduct } =
    useContext(productContext);

  const [inpValue, setInpValue] = useState(productDetails);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    readOneProduct(id);
  }, [id]);

  function handleChange(e) {
    let obj = {
      ...inpValue,
      [e.target.name]: e.target.value,
    };
    setInpValue(obj);
  }

  function saveEditProduct(e) {
    e.preventDefault();
    if (
      !inpValue.category.trim() ||
      !inpValue.description.trim() ||
      !inpValue.color.trim() ||
      !inpValue.price ||
      !inpValue.img1.trim() ||
      !inpValue.img2.trim() ||
      !inpValue.img3.trim() ||
      !inpValue.img4.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }
    editProducts(id, inpValue);
    navigate("/list");
  }
  return (
    <>
      <div className="editProduct-container">
        <form onSubmit={e => saveEditProduct(e)}>
          <input
            value={inpValue.category}
            type="text"
            placeholder="Категория"
            name="category"
            onChange={e => handleChange(e)}
          />
          <input
            value={inpValue.description}
            type="text"
            placeholder="Описания"
            name="description"
            onChange={e => handleChange(e)}
          />
          <input
            value={inpValue.color}
            type="text"
            placeholder="Цвет"
            name="color"
            onChange={e => handleChange(e)}
          />
          <input
            value={inpValue.price}
            type="number"
            placeholder="Цена"
            name="price"
            onChange={e => handleChange(e)}
          />
          <input
            value={inpValue.img1}
            type="text"
            placeholder="Добавить 1 картинку"
            name="img1"
            onChange={e => handleChange(e)}
          />
          <input
            value={inpValue.img2}
            type="text"
            placeholder="Добавить 2 картинку"
            name="img2"
            onChange={e => handleChange(e)}
          />
          <input
            value={inpValue.img3}
            type="text"
            placeholder="Добавить 3 картинку"
            name="img3"
            onChange={e => handleChange(e)}
          />
          <input
            value={inpValue.img4}
            type="text"
            placeholder="Добавить 4 картинку"
            name="img4"
            onChange={e => handleChange(e)}
          />
          <Button variant="contained" type="submit">
            Сохранить
          </Button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
