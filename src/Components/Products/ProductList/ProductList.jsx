import React, { useContext, useEffect } from "react";
import { productContext } from "../../../Context/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const { readProduct, productsArr } = useContext(productContext);
  // console.log(productsArr);

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <>
      <div>
        {productsArr ? (
          productsArr.map(item => (
            <div key={item.id}>{<ProductCard productObj={item} />}</div>
          ))
        ) : (
          <p>Null</p>
        )}
      </div>
    </>
  );
};

export default ProductList;
