"use client"
import { Counter } from "./counter";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAmountById,
} from "../../redux/uiCart";
import { store } from "../../redux/store";

export const DishCounter = ({ id }) => {
  const amount = useSelector((state) => selectAmountById(state, id));
  const dispatch = useDispatch();
  const increase = () => dispatch(addToCart(id));
  const decrease = () => dispatch(removeFromCart(id));

  return <Provider store={store}><Counter value={amount} increase={increase} decrease={decrease} /> </Provider>;
};
