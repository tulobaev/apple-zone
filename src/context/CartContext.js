import React, { createContext, useContext, useReducer } from "react";
import { stateType } from "../ helpers/const";
import { calcSubPrice, calcTotalPrice } from "../ helpers/function";

const cartProduct = createContext();
export const useCart = () => useContext(cartProduct);

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
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
    getProductPromCart();
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
    cart.products = cart.products.filter((item) => item.item._id !== id);
    cart.totalCount = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getProductPromCart();
  }

  function changeProductCount(count, id) {
    if (count < 1) {
      alert("error");
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((el) => {
      if (el.item._id === id) {
        el.count = count;
        el.subPrice = calcSubPrice(el);
      }
      return el;
    });
    cart.totalCount = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getProductPromCart();
  }

  const values = {
    addProductToCart,
    checkProductInCart,
    getProductPromCart,
    cart: state.cart,
    deleteOneCart,
    changeProductCount,
  };
  return <cartProduct.Provider value={values}>{children}</cartProduct.Provider>;
};

export default CartContext;
