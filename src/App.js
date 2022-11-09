import React from "react";
import Authorization from "./Components/Auth/Authorization";
import Footer from "./Components/Footer/Footer";
import SimpleMap from "./Components/Map/Map";
import Navbar from "./Components/NavBar/NavBar";
import BasketContextProvider from "./Context/BasketContextProvider";
import ProductContextProvider from "./Context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <BasketContextProvider>
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
        {/* <Footer /> */}
        {/* <Authorization /> */}
        <SimpleMap />
      </ProductContextProvider>
    </BasketContextProvider>
  );
};

export default App;
