import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API_PRODUCT, stateType } from "../ helpers/const";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const initialState = {
  dataProduct: [],
  oneProduct: {},
  onePage: {},
  fullData: [],
};

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case stateType.GET:
      return {
        ...state,
        dataProduct: action.payload,
        fullData: action.payload,
      };
    case stateType.GET_ONE_DATA:
      return { ...state, oneProduct: action.payload };
    case stateType.ONE_PAGE:
      return { ...state, onePage: action.payload };
    case stateType.FILTER:
      return { ...state, dataProduct: action.payload };
    default:
      return state;
  }
};

const AppleProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reduce, initialState);

  //! crud start
  async function addProduct(newProduct) {
    await axios.post(API_PRODUCT, newProduct);
    readProduct();
  }

  async function readProduct() {
    let { data } = await axios.get(API_PRODUCT);
    dispatch({
      type: stateType.GET,
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
      type: stateType.GET_ONE_DATA,
      payload: data.data,
    });
  }

  async function updateProduct(id, editedProduct) {
    delete editedProduct._id;
    await axios.patch(`${API_PRODUCT}/${id}`, editedProduct);
    readProduct();
  }
  //! crud end

  //! one page
  async function getOnePage(id) {
    let data = await axios.get(`${API_PRODUCT}/${id}`);
    dispatch({
      type: stateType.ONE_PAGE,
      payload: data.data,
    });
  }
  //! one page

  //! search
  function searchProduct(searchValue) {
    let result = state.dataProduct.filter((item) => {
      item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    dispatch({
      type: stateType.GET,
      payload: result,
    });

    if (!searchValue) {
      readProduct();
    }
  }
  //! search

  // //! filter
  // function filterProduct(value) {
  //   value = value.trim().toLowerCase();

  //   if (value === "all") {
  //     dispatch({
  //       type: stateType.FILTER,
  //       payload: state.fullData,
  //     });
  //   } else {
  //     let result = state.fullData.filter(
  //       (item) => item.category.trim().toLowerCase() === value
  //     );
  //     dispatch({
  //       type: stateType.FILTER,
  //       payload: result,
  //     });
  //   }
  // }
  // //! filter

  const values = {
    addProduct,
    deleteProduct,
    readProduct,
    dataProduct: state.dataProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    updateProduct,
    getOnePage,
    onePage: state.onePage,
    searchProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default AppleProductContext;
