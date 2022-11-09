import React, { useContext, useState } from "react";
import { productContext } from "../../../Context/ProductContextProvider";
import "./AddProduct.css";

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
  const [selects, setSelects] = useState();

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
        <div className="addProduct-container">
          <form onSubmit={e => handleAdd(e)}>
            <select value={selects} onChange={e => setSelects(e.target.value)}>
              <option>Man</option>
              <option>Woman</option>
            </select>
            <input
              value={category}
              onChange={e => setCategory(e.target.value)}
              type="text"
              placeholder="Категория"
            />
            <input
              value={description}
              onChange={e => setDescription(e.target.value)}
              type="text"
              placeholder="Описания"
            />
            <input
              value={color}
              onChange={e => setColor(e.target.value)}
              type="text"
              placeholder="Цвет"
            />
            <input
              value={price}
              onChange={e => setPrice(e.target.value)}
              type="number"
              placeholder="Цена"
            />
            <input
              value={img1}
              onChange={e => setImg1(e.target.value)}
              type="text"
              placeholder="Добавить 1 картинку"
            />
            <input
              value={img2}
              onChange={e => setImg2(e.target.value)}
              type="text"
              placeholder="Добавить 2 картинку"
            />
            <input
              value={img3}
              onChange={e => setImg3(e.target.value)}
              type="text"
              placeholder="Добавить 3 картинку"
            />
            <input
              value={img4}
              onChange={e => setImg4(e.target.value)}
              type="text"
              placeholder="Добавить 4 картинку"
            />
            <button type="submit">Добавить</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
