import React from "react";
import Authorization from "./Components/Auth/Authorization";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";
import ProductContextProvider from "./Context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <ProductContextProvider>
      <Navbar />
      <MainRoutes />
      {/* <Footer /> */}
      <Authorization />
    </ProductContextProvider>
  );
};

export default App;
