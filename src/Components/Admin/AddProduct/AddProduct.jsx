import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";
import React, { useContext, useState } from "react";
import { productContext } from "../../../Context/ProductContextProvider";
import "./AddProduct.css";

const CssTextField = styled(TextField, {
  shouldForwardProp: props => props !== "focusColor",
})(p => ({
  "& label.Mui-focused": {
    color: "#000",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: p.focusColor,
  },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: p.focusColor,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: grey[800],
    },
  },
}));

const AddProduct = () => {
  const { addProduct } = useContext(productContext);

  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(0);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");

  function handleAdd(e) {
    // todo останавливает автообнавление браузера при отправке данных через form
    e.preventDefault();

    if (
      !category.trim() ||
      !description.trim() ||
      !color.trim() ||
      !price ||
      !img1.trim() ||
      !img2.trim() ||
      !img3.trim() ||
      !img4.trim()
    ) {
      alert("Заполните все поля!");
      return;
    }

    let productobj = {
      category,
      description,
      color,
      price: +price,
      img1,
      img2,
      img3,
      img4,
    };
    addProduct(productobj);

    setCategory("");
    setDescription("");
    setColor("");
    setPrice(0);
    setImg1("");
    setImg2("");
    setImg3("");
    setImg4("");
  }

  return (
    <>
      <div className="body">
        <form id="form-add" onSubmit={e => handleAdd(e)}>
          <CssTextField
            className="outlined-basic"
            label="Категория"
            variant="outlined"
            value={category}
            sx={{}}
            onChange={e => setCategory(e.target.value)}
          />
          <CssTextField
            className="outlined-basic"
            label="Описание"
            variant="outlined"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <CssTextField
            className="outlined-basic"
            vlauue={color}
            onChange={e => setColor(e.target.value)}
            label="Цвет"
            variant="outlined"
          />
          <CssTextField
            className="outlined-basic"
            type="number"
            vlauue={price}
            onChange={e => setPrice(e.target.value)}
            label="Цена"
            variant="outlined"
          />

          <CssTextField
            className="outlined-basic"
            label="Фото 1"
            variant="outlined"
            value={img1}
            onChange={e => setImg1(e.target.value)}
          />
          <CssTextField
            className="outlined-basic"
            label="Фото 2"
            variant="outlined"
            value={img2}
            onChange={e => setImg2(e.target.value)}
          />
          <CssTextField
            className="outlined-basic"
            label="Фото 3"
            variant="outlined"
            value={img3}
            onChange={e => setImg3(e.target.value)}
          />
          <CssTextField
            className="outlined-basic"
            label="Фото 4"
            variant="outlined"
            value={img4}
            onChange={e => setImg4(e.target.value)}
          />
          <Button
            sx={{ color: "white", backgroundColor: "grey" }}
            variant="contained"
            type="submit">
            Добавить
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
