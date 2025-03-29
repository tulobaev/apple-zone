import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import { useNavigate } from "react-router-dom";
import scss from "./Cart.module.scss";
import { useProduct } from "../../context/AppleProductContext";
import { useAuth } from "../../context/AppleAuthContext";

const CartProduct = ({ item }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const { deleteProduct } = useProduct();
  const { user } = useAuth();

  return (
    <div
      className={scss.product_card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className={scss.product_title}>{item.name}</h2>
      <div className={scss.product_image}>
        <img src={item.photo} alt={item.name} />
      </div>
      {isHovered && (
        <button
          onClick={() => navigate(`/details/${item._id}`)}
          className={scss.closerLookButton}
        >
          Take a closer look
        </button>
      )}
      <div className={scss.product_price}>
        <h4>
          From ${item.price} or ${(item.price / 12).toFixed(2)}/mo.
        </h4>
        <div>
          {user && user.email === "talgattulobaev519@gmail.com" && (
            <>
              <Tooltip onClick={() => deleteProduct(item._id)} title="Delete">
                <DeleteForeverIcon className={scss.delete} />
              </Tooltip>
              <Tooltip
                onClick={() => navigate(`/edit/${item._id}`)}
                title="Edit"
              >
                <CreditScoreIcon className={scss.edit} />
              </Tooltip>
            </>
          )}
        </div>
        <button className={scss.buy_button}>Buy</button>
      </div>
    </div>
  );
};

export default CartProduct;
