import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/uiCart";
import { Counter } from "../counter/counter";
import { useGetDishByIdQuery } from "../../redux/services/api/api";

export const CartItem = ({ id, amount }) => {
  const { data, isLoading, isError } = useGetDishByIdQuery(id);

  const dispatch = useDispatch();
  const increase = () => dispatch(addToCart(id));
  const decrease = () => dispatch(removeFromCart(id));  if (isLoading) {
    return "loading";
  }
  if (isError) {
    return "error";
  }
  if (!data) {
    return null;
  }
  const { name } = data;
  return (
    <div>
      {name} <Counter value={amount} increase={increase} decrease={decrease} />
    </div>
  );
};
