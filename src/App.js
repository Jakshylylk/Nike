import React from "react";
import Authorization from "./Components/Auth/Authorization";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/NavBar/NavBar";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      {/* <Footer /> */}
      {/* <Authorization /> */}
    </div>
  );
};

export default App;
