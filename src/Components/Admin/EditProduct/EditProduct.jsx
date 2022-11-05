import React from "react";
import "./EditProduct.css";

const EditProduct = () => {
  return (
    <>
      <div className="editProduct-container">
        <input type="text" placeholder="Категория" />
        <input type="text" placeholder="Характеристика" />
        <input type="text" placeholder="Описания" />
        <input type="text" placeholder="Цвет" />
        <input type="number" placeholder="Цена" />
        <input type="text" placeholder="Добавить 1 картинку" />
        <input type="text" placeholder="Добавить 2 картинку" />
        <input type="text" placeholder="Добавить 3 картинку" />
        <input type="text" placeholder="Добавить 4 картинку" />
      </div>
    </>
  );
};

export default EditProduct;
