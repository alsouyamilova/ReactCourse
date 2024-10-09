import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDishById } from "../../redux/dishes";
import { addToCart, removeFromCart } from "../../redux/uiCart";
import { Counter } from "../counter/counter";

export const CartItem = ({ id, amount }) => {
  const { name } = useSelector((state) => selectDishById(state, id)) || {};
  const dispatch = useDispatch();
  const increase = () => dispatch(addToCart(id));
  const decrease = () => dispatch(removeFromCart(id));
  if (!name) {
    return null;
  }
  return (
    <div>
      {name} <Counter value = {amount} increase = {increase} decrease = {decrease} />
    </div>
  );
};
