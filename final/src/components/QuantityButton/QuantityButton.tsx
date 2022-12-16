import { useContext, useState } from "react";
import { ShopContext } from "../../context";
import { Product } from "../../models";

export const QuantityButton = ({ name, price, quantity}: Product) => {
  const { increaseOrder, decreaseOrder } = useContext(ShopContext);

  const handleIncrease = () => {
    const product = { name, price, quantity};
    increaseOrder(product);
    console.log(product);
  };
  
  const handleDecrease = () => {
    const product = { name, price, quantity};
    decreaseOrder(product);
  }

  return (
    <div>
      <button onClick={() => handleIncrease()}>+</button>
      <p>{quantity}</p>
      <button onClick = {() => handleDecrease()}>-</button>
    </div>
  );
};
