import React, { useEffect, useRef } from "react";
import { useProduct } from "../../context/AppleProductContext";
import scss from "../../cart/productCart/Cart.module.scss";
import CartProduct from "../../cart/productCart/CartProduct";

const ListProduct = () => {
  const { dataProduct, readProduct, fullData } = useProduct();
  console.log(fullData);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    readProduct();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const models = [
    "All Models",
    "Shopping guides",
    "Ways to Save",
    "Apple Watch Bands",
    "Setup and Support",
    "The Apple Watch Experience",
    "Special Stores",
  ];

  return (
    <div className="container">
      <div className={scss.title}>
        <h1>
          Shop{" "}
          {dataProduct.map((item, index) => (index === 1 ? item.category : ""))}
        </h1>
      </div>
      <div className={scss.carousel_container}>
        <div className={scss.models}>
          {models.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <button className={scss.scroll_button_left} onClick={scrollLeft}>
          &lt;
        </button>

        <div className={scss.text}>
          <h1>
            <span>All models. </span>Take your pick.
          </h1>
        </div>

        <div className={scss.carousel} ref={scrollContainerRef}>
          <div className={scss.product_cards}>
            {fullData
              ? fullData.map((item) => (
                  <CartProduct item={item} key={item._id} />
                ))
              : ""}
          </div>
        </div>

        <button className={scss.scroll_button_right} onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ListProduct;
