import styles from "./Menu.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { Dish } from "../dish/Dish";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/restaurants";
import { getDishes } from "../../redux/dishes/getDishes";
import { useEffect } from "react";
import { selectDishIds, selectDishRequestStatus } from "../../redux/dishes";

export const Menu = () => {
  const { restaurantId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishes(restaurantId));
  }, [dispatch, restaurantId]);
  const dishIds = useSelector(selectDishIds);
  const requestStatus = useSelector(selectDishRequestStatus);
  if (requestStatus === "idle" || requestStatus === "pending") {
    return <div>loading</div>;
  }
  return (
    <section className={styles.articles}>
      {dishIds.map((dishId) => (
        <Dish
          key={dishId}
          id={dishId}
          onClick={() => navigate(`/dish/${dishId}`)}
        />
      ))}
    </section>
  );
};
