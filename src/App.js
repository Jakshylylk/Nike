import React from "react";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import ProductCard from "./Components/Products/ProductCard/ProductCard";
import ProductList from "./Components/Products/ProductList/ProductList";
import ProductContextProvider from "./Context/ProductContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <AddProduct />
      <ProductList />
      {/* <ProductCard /> */}
    </ProductContextProvider>
  );
};

export default App;
