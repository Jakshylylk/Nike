import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import EditProduct from "./Components/Admin/EditProduct/EditProduct";
import Authorization from "./Components/Auth/Authorization";
import Cart from "./Components/Cart/Cart";
import HomePage from "./Components/Home/HomePage";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";
import ProductList from "./Components/Products/ProductList/ProductList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/list" element={<ProductList />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/basket" element={<Cart />} />
      <Route path="/auth" element={<Authorization />} />
    </Routes>
  );
};

export default MainRoutes;
