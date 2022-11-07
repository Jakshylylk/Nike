import axios from "axios";
import React, { createContext, useReducer } from "react";

export const productContext = createContext();

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...prevState, product: action.payload.data };
    default:
      return prevState;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // console.log(state);

  // ! =================== CREATE START =================
  async function addProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      return error;
    }
  }
  // ? =================== CREATE FINISH =================

  //  todo ************************************************************************

  // ! =================== READ START ====================
  async function readProduct() {
    const res = await axios(API);
    dispatch({
      type: "GET_PRODUCT",
      payload: res,
    });
  }
  // readProduct();

  // ? =================== READ END ======================
  // console.log(state.product);
  let productCloud = {
    addProduct,
    readProduct,
    productsArr: state.product,
  };
  return (
    <productContext.Provider value={productCloud}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
