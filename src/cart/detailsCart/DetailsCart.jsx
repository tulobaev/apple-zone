import React, { useState } from "react";
import scss from "./DetailsCart.module.scss";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import RepeatOneOnIcon from "@mui/icons-material/RepeatOneOn";
import RecyclingIcon from "@mui/icons-material/Recycling";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../../context/CartContext";
import { Button } from "@mui/material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const DetailsCart = ({ item }) => {
  const { addProductToCart, checkProductInCart } = useCart();
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(false);
  const text = item.description || "";
  const words = text.split(" ");
  const isLongText = words.length > 30;
  const shortText = words.slice(0, 30).join(" ");

  return (
    <div id={scss.card}>
      <div className="container">
        <div className={scss.container}>
          <div className={scss.h1} onClick={() => navigate("/list")}>
            <CloseIcon />
          </div>
          <div className={scss.main_content}>
            <div className={scss.content}>
              <div className={scss.product}>
                <div className={scss.imageBox}>
                  <Zoom>
                    <img src={item.photo} alt={item.name} />
                  </Zoom>
                  <div className={scss.colors}>
                    <h4>Available in 4 case finishes</h4>
                    <div className={scss.color_box}>
                      <div className={scss.color1}></div>
                      <div className={scss.color2}></div>
                      <div className={scss.color3}></div>
                      <div className={scss.color4}></div>
                    </div>
                  </div>
                </div>
                <div className={scss.information_product}>
                  <div className={scss.info}>
                    <h2>{item.name}</h2>
                    <div className={scss.product_price}>
                      <h4>
                        From ${item.price} or ${(item.price / 12).toFixed(2)}
                        /mo.for 12 mo
                      </h4>
                      {checkProductInCart(item._id) ? (
                        <Button
                          sx={{ fontSize: "10px", padding: "5px" }}
                          variant="contained"
                          disabled
                        >
                          Add to Bag
                        </Button>
                      ) : (
                        <Button
                          sx={{ fontSize: "10px", padding: "5px" }}
                          onClick={() => addProductToCart(item)}
                          variant="contained"
                        >
                          Add to Bag
                        </Button>
                      )}
                    </div>
                    <h4>Stock Quantity: {item.stockQuantity}</h4>
                  </div>

                  <div className={scss.description}>
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/1239/1239773.png"
                      alt=""
                    />
                    <span>
                      {isExpanded || !isLongText ? item.description : shortText}
                      {isLongText && (
                        <p
                          style={{
                            color: "blue",
                            cursor: "pointer",
                            fontWeight: "bold",
                          }}
                          onClick={() => setIsExpanded(!isExpanded)}
                        >
                          {isExpanded ? " Show less" : " Learn more"}
                        </p>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={scss.payment_box}>
              <div className={scss.box}>
                <div>
                  <CreditCardIcon sx={{ color: "rgb(0,217,89)" }} />
                </div>
                <div className={scss.text_pay}>
                  <h4>Apple Card Monthly Installments</h4>
                  <p>
                    Pay over time, interest-free when you choose to check out
                    with Apple Card Monthly Installments. Footnote ◊
                  </p>
                </div>
              </div>
              <div className={scss.box}>
                <div>
                  <RepeatOneOnIcon sx={{ color: "rgb(188,111,249)" }} />
                </div>
                <div className={scss.text_pay}>
                  <h4>Apple Trade In</h4>
                  <p>
                    Trade in your eligible device for credit toward your next
                    purchase. footnote **
                  </p>
                </div>
              </div>
              <div className={scss.box}>
                <div>
                  <RecyclingIcon sx={{ color: "rgb(0,217,89)" }} />
                </div>
                <div className={scss.text_pay}>
                  <h4>Carbon Neutral</h4>
                  <p>
                    Look for this logo to find carbon neutral combinations.
                    Learn more about our plan at
                  </p>
                  <a href="https://www.apple.com/environment/">
                    apple.com/2030
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCart;
