import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import CartBasket from "../cart/BasketCart/CartBasket";
import scss from "../cart/BasketCart/CartBasket.module.scss";
import { Button } from "@mui/material";
import Loader from "../loader/Loader";

const BasketPage = () => {
  const { cart, getProductPromCart } = useCart();

  useEffect(() => {
    getProductPromCart();
  }, []);

  return (
    <div style={{ paddingBlock: "40px" }}>
      <div className="container">
        {!cart ? (
          <Loader />
        ) : cart.products && cart.products.length > 0 ? (
          cart.products.map((item, index) => (
            <CartBasket
              item={item}
              key={item.item._id || index}
              products={cart.products}
            />
          ))
        ) : (
          <h1>Корзина пуста</h1>
        )}

        {cart.products.length > 0 ? (
          <div className={scss.cartSummary}>
            <h2>
              There is 1 item in your cart for a total of {cart.totalCount} $
            </h2>

            <Button
              onClick={() => alert("Thank you for your purchase 😊")}
              variant="contained"
            >
              Buy
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BasketPage;
