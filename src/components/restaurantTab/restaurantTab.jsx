import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants";
import Button from "../button/Button";

export const RestaurantTab = ({ id, onClick, isActive }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return <Button onClick={onClick} isActive={isActive}>{restaurant.name}</Button>;
};