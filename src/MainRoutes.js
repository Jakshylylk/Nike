import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import HomePage from "./Components/Home/HomePage";
import ProductList from "./Components/Products/ProductList/ProductList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/list" element={<ProductList />} />
    </Routes>
  );
};

export default MainRoutes;
