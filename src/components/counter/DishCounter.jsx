import { Counter } from "./counter";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAmountById,
} from "../../redux/uiCart";

export const DishCounter = ({ id }) => {
  const amount = useSelector((state) => selectAmountById(state, id));
  const dispatch = useDispatch();
  const increase = () => dispatch(addToCart(id));
  const decrease = () => dispatch(removeFromCart(id));

  return <Counter value={amount} increase={increase} decrease={decrease} />;
};
