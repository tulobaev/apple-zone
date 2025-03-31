import React, { useEffect, useState } from "react";
import scss from "./CartBasket.module.scss";
import { Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../../context/CartContext";

const CartBasket = ({ item }) => {
  const { deleteOneCart, changeProductCount } = useCart();
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    changeProductCount(count, item.item._id);
  }, [count]);

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
                  <button
                    onClick={() => setCount(count > 1 ? count - 1 : count)}
                    className={scss.decBtn}
                  >
                    -
                  </button>
                  <h3>{count}</h3>
                  <button
                    onClick={() => setCount(count + 1)}
                    className={scss.incBtn}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className={scss.priceButtonDelete}>
              <h2>{item.item.price * count}$</h2>
              <Tooltip
                onClick={() => deleteOneCart(item.item._id)}
                title="Убрать из корзины"
              >
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
