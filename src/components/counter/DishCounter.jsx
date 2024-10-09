import { Counter } from "./counter";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAmountById,
} from "../../redux/uiCart";

export const DishCounter = ({ id }) => {
  console.log(id);
  //const [value, setValue] = useState(0);
  // const increase = () => {
  //   let newVal;
  //   if (value + 1 > 5) {
  //     newVal = 5;
  //   } else {
  //     newVal = value + 1;
  //   }
  //   setValue(newVal);
  // };
  // const decrease = () => {
  //   let newVal;
  //   if (value - 1 < 0) {
  //     newVal = 0;
  //   } else {
  //     newVal = value - 1;
  //   }
  //   setValue(newVal);
  // };

  const amount = useSelector((state) => selectAmountById(state, id));
  const dispatch = useDispatch();
  const increase = () => dispatch(addToCart(id));
  const decrease = () => dispatch(removeFromCart(id));

  return <Counter value={amount} increase={increase} decrease={decrease} />;
};
