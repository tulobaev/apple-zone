import React, { createContext, useContext, useReducer } from "react";
import { stateType } from "../ helpers/const";

const cartProduct = createContext();
export const useCart = () => useContext(cartProduct);

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case stateType.GET:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalCount: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };
    cart.products.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function getProductPromCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalCount: 0,
      };
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    dispatch({
      type: stateType.GET,
      payload: cart,
    });
  }

  // Проверка, есть ли товар в корзине
  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      let obj = cart.products.find((item) => item.item._id === id);
      return obj ? true : false;
    }
  }

  function deleteOneCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart = cart.products.filter((item) => item.item._id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    getProductPromCart();
  }

  const values = {
    addProductToCart,
    checkProductInCart,
    getProductPromCart,
    cart: state.cart,
    deleteOneCart,
  };
  return <cartProduct.Provider value={values}>{children}</cartProduct.Provider>;
};

export default CartContext;
