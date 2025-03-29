import React, { useEffect } from "react";
import { useProduct } from "../context/AppleProductContext";
import DetailsCart from "../cart/detailsCart/DetailsCart";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { getOnePage, onePage } = useProduct();
  const { id } = useParams();

  useEffect(() => {
    getOnePage(id);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="content">
          {onePage ? <DetailsCart item={onePage} /> : <h1>loading</h1>}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
