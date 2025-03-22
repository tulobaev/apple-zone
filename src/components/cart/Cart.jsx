import React from "react";
import { useProduct } from "../../context/AppleProductContext";
import { useNavigate } from "react-router-dom";

const Cart = ({ item }) => {
  const { deleteProduct } = useProduct();
  const navigate = useNavigate();
  return (
    <div>
      <img src={item.photo} alt="" />
      <h3>{item.name}</h3>
      <button onClick={() => deleteProduct(item._id)}>delete</button>
      <button onClick={() => navigate(`/edit/${item._id}`)}>edit</button>
    </div>
  );
};

export default Cart;
