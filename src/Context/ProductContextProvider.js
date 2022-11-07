import axios from "axios";
import React, { createContext, useReducer } from "react";

export const productContext = createContext();

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: null,
  productDetails: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...prevState, product: action.payload.data };
    case "GET_ONE_PRODUCT":
      return { ...prevState, productDetails: action.payload };
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
    readProduct();
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

  // ? =================== READ END ======================

  // todo ************************************************************************

  // ! ================== DETAILS START ===================
  async function redOneProduct(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  }
  // ? ================== DETAILS END = ===================

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
