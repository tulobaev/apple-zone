import React, { useEffect } from "react";
import { useProduct } from "../../context/AppleProductContext";
import scss from "../../cart/productCart/Cart.module.scss";
import CartProduct from "../../cart/productCart/CartProduct";

const ListProduct = () => {
  const { dataProduct, readProduct } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  return (
    <div className={scss.carousel}>
      <div className={scss.product_cards}>
        {dataProduct.map((item) => (
          <CartProduct item={item} key={`original-${item._id}`} />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
