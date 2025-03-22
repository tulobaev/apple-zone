import React, { useEffect } from "react";
import { useProduct } from "../context/AppleProductContext";
import Cart from "../components/cart/Cart";

const StorePage = () => {
  const { dataProduct, readProduct } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);
  return (
    <div>
      {dataProduct.map((item, index) => (
        <Cart item={item} key={index} />
      ))}
    </div>
  );
};

export default StorePage;
