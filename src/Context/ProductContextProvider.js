import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router";

export const productContext = createContext();

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: null,
  productDetails: null,
  pageTotalCount: 1,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...prevState,
        product: action.payload.data,

        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 8),
      };

    case "GET_ONE_PRODUCT":
      return { ...prevState, productDetails: action.payload };
    default:
      return prevState;
  }
}

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // console.log(state);
  const location = useLocation();

  const navigate = useNavigate();

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
    const res = await axios(`${API}${location.search}`);
    dispatch({
      type: "GET_PRODUCT",
      payload: res,
    });
  }

  // ? =================== READ END ======================

  // todo ************************************************************************

  // ! ================== DETAILS START ===================
  async function readOneProduct(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  }
  // ? ================== DETAILS END = ===================

  // ! ================== DELETE START ====================
  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      readProduct();
      navigate("/list");
    } catch (error) {
      return error;
    }
  }
  // ? ================== DELETE END ======================

  // ! ================== EDIT START ======================

  async function editProducts(id, editProduct) {
    await axios.patch(`${API}/${id}`, editProduct);
    readProduct();
  }

  // ? ================== EDIT END ========================

  let productCloud = {
    addProduct,
    readProduct,
    readOneProduct,
    deleteProduct,
    editProducts,

    productsArr: state.product,
    productDetails: state.productDetails,
    pageCount: state.pageTotalCount,
  };

  return (
    <productContext.Provider value={productCloud}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
