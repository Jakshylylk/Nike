import { Grid, Pagination, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productContext } from "../../../Context/ProductContextProvider";
import Filter from "../../Filter/Filter";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const { readProduct, productsArr, pageCount } = useContext(productContext);

  const [paramsSearch, setParamsSearch] = useSearchParams();
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState([0, 100000]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (category === "all") {
      setParamsSearch({
        price_gte: price[0],
        price_lte: price[1],
        q: paramsSearch.get("q") || "",
        _page: page,
        _limit: 8,
      });
    } else {
      setParamsSearch({
        category: category,
        price_gte: price[0],
        price_lte: price[1],
        q: paramsSearch.get("q") || "",
        _page: page,
        _limit: 8,
      });
    }
  }, [paramsSearch, category, price, page]);

  useEffect(() => {
    readProduct();
  }, [paramsSearch, pageCount]);

  return (
    <>
      <Grid sx={{ width: "40%" }} ml="50px" my="20px">
        <Typography variant="h4">FILTER</Typography>
        <Filter
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
        />
      </Grid>
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
      <Grid
        sx={{ width: "40%", display: "flex", justifyContent: "center" }}
        mx="auto"
        my="20px">
        <Pagination
          count={pageCount}
          color="primary"
          page={page}
          onChange={(e, value) => setPage(value)}
        />
      </Grid>
    </>
  );
};

export default ProductList;
