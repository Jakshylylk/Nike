import { Button, TextField } from "@mui/material";
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
      <div className="edit-body">
        <form id="form-add" onSubmit={e => saveEditProduct(e)}>
          <TextField
            className="outlined-basic"
            label="Категория"
            variant="outlined"
            name="category"
            value={inpValue.category}
            onChange={e => handleChange(e)}
          />
          <TextField
            className="outlined-basic"
            label="Название"
            variant="outlined"
            name="title"
            value={inpValue.title}
            onChange={e => handleChange(e)}
          />
          <TextField
            className="outlined-basic"
            label="Модель"
            variant="outlined"
            name="model"
            value={inpValue.model}
            onChange={e => handleChange(e)}
          />
          <TextField
            className="outlined-basic"
            label="Описание"
            variant="outlined"
            name="description"
            value={inpValue.description}
            onChange={e => handleChange(e)}
          />
          <TextField
            className="outlined-basic"
            label="Цвет"
            variant="outlined"
            name="color"
            value={inpValue.color}
            onChange={e => handleChange(e)}
          />
          <TextField
            className="outlined-basic"
            type="number"
            label="Цена"
            variant="outlined"
            name="price"
            value={inpValue.price}
            onChange={e => handleChange(e)}
          />
          <TextField
            className="outlined-basic"
            label="Фото 1"
            variant="outlined"
            name="img1"
            value={inpValue.img1}
            onChange={e => handleChange(e)}
          />
          <TextField
            className="outlined-basic"
            label="Фото 2"
            variant="outlined"
            name="img2"
            value={inpValue.img2}
            onChange={e => handleChange(e)}
          />
          <TextField
            className="outlined-basic"
            label="Фото 3"
            variant="outlined"
            name="img3"
            value={inpValue.img3}
            onChange={e => handleChange(e)}
          />
          <TextField
            className="outlined-basic"
            label="Фото 3"
            variant="outlined"
            name="img3"
            value={inpValue.img4}
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
