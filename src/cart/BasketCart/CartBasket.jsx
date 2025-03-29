import React from "react";
import scss from "./CartBasket.module.scss";
import { Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartBasket = ({ item }) => {
  return (
    <div id={scss.basket}>
      <div className="container">
        <div className={scss.basket}>
          <div className={scss.basketCard}>
            <div className={scss.imageBox}>
              <div>
                <img src={item.item.photo} alt="" />
              </div>
              <div className={scss.text}>
                <div>
                  <p>{item.item.name}</p>
                  <span>Category: {item.item.category}</span>
                </div>
                <div className={scss.buttonIncrease}>
                  <button className={scss.decBtn}>-</button>
                  <h3>{1}</h3>
                  <button className={scss.incBtn}>+</button>
                </div>
              </div>
            </div>

            <div className={scss.priceButtonDelete}>
              <h2>{item.item.price}$</h2>
              <Tooltip title="Убрать из корзины">
                <DeleteIcon className={scss.DeleteIcon} />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBasket;
