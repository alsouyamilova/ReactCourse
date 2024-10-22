import { useLocation, useNavigate } from "react-router-dom";
import Button from "../button/Button";

export const RestaurantTab = ({ id, name }) => {

  const navigate = useNavigate();

  const location = useLocation();
  const isActive = location.pathname.includes(`/restaurantspage/${id}`)

  return (
    <Button onClick={() => navigate(id)} isActive={isActive}>
      {name}
    </Button>
  );
};
