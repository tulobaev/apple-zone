import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const initialState = {
  dataProduct: [],
  oneProduct: {},
};

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, dataProduct: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};

const AppleProductContext = ({ children }) => {
  const API_PRODUCT = process.env.REACT_APP_API;
  const [state, dispatch] = useReducer(reduce, initialState);

  async function addProduct(newProduct) {
    await axios.post(API_PRODUCT, newProduct);
  }

  async function readProduct() {
    let { data } = await axios.get(API_PRODUCT);
    dispatch({
      type: "GET_PRODUCT",
      payload: data.data,
    });
  }

  async function deleteProduct(id) {
    await axios.delete(`${API_PRODUCT}/${id}`);
    readProduct();
  }

  async function getOneProduct(id) {
    let data = await axios.get(`${API_PRODUCT}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  }

  // async function updateProduct(id, )

  const values = {
    addProduct,
    deleteProduct,
    readProduct,
    dataProduct: state.dataProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default AppleProductContext;
