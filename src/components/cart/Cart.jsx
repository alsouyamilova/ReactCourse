import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/uiCart";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const items = useSelector(selectCartItems);
  if (!items.length) {
    return null;
  }
  return (
    <ul>
      {items.map(({ id, amount }) => (
        <li key={id}>
          <CartItem id={id} amount={amount} />
        </li>
      ))}
    </ul>
  );
};
