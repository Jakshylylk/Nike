import React from "react";
import "./ProductCard.css";

const ProductCard = ({ productObj }) => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img className="main-img" src={productObj.img1} alt="" />
          <div className="slide-img">
            <img src={productObj.img2} alt="" />
            <img src={productObj.img3} alt="" />
            <img src={productObj.img4} alt="" />
          </div>
          <p>{productObj.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
