import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../button/Button";

export const RestaurantTab = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const navigate = useNavigate();
  if (!restaurant) {
    return null;
  }
  const location = useLocation();

  const isActive = location.pathname === `/restaurantspage/${id}`;

  return (
    <Button onClick={() => navigate(id)} isActive={isActive}>
      {restaurant.name}
    </Button>
  );
};
