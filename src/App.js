import React, { useState } from "react";
import Authorization from "./Components/Auth/Authorization";
import Footer from "./Components/Footer/Footer";
import SimpleMap from "./Components/Map/Map";
import Navbar from "./Components/NavBar/NavBar";
import AuthContextProvider from "./Context/AuthContextProvider";
import BasketContextProvider from "./Context/BasketContextProvider";
import ProductContextProvider from "./Context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <AuthContextProvider>
      <BasketContextProvider>
        <ProductContextProvider>
          <Navbar />
          <MainRoutes />
          <SimpleMap />
          <Footer />
        </ProductContextProvider>
      </BasketContextProvider>
    </AuthContextProvider>
  );
};

export default App;
