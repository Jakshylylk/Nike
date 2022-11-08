import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { productContext } from "../../../Context/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const { readProduct, productsArr } = useContext(productContext);

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        sx={{ width: "90%" }}
        mx="auto"
        my="40px">
        {productsArr ? (
          productsArr.map(item => (
            <div key={item.id}>{<ProductCard productObj={item} />}</div>
          ))
        ) : (
          <p>Null</p>
        )}
      </Grid>
    </>
  );
};

export default ProductList;
