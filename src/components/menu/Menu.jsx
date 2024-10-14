import styles from "./Menu.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Dish } from "../dish/Dish";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants";

export const Menu = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const { menu } = restaurant || {};
  const navigate = useNavigate();
  return (
    <section className={styles.articles}>
      {menu.map((dishId) => (
        <Dish
          key={dishId}
          id={dishId}
          onClick={() => navigate(`/dish/${dishId}`)}
        />
      ))}
    </section>
  );
};
