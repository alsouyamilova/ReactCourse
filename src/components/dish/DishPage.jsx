import { useParams } from "react-router-dom";
import styles from "./Dish.module.css";
import { useUser } from "../user-context/useUser";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDishById,
  selectDishByIdRequestStatus,
} from "../../redux/dishes";
import { DishCounter } from "../counter/DishCounter";
import { useEffect } from "react";
import { getDishById } from "../../redux/dishes/getDishes";

export const DishPage = () => {
  const { user } = useUser();
  const { dishId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishById(dishId));
  }, [dispatch, dishId]);
  const dish = useSelector((state) => selectDishById(state, dishId));
  const requestStatus = useSelector(selectDishByIdRequestStatus);
  if (requestStatus === "idle" || requestStatus === "pending") {
    return <div>loading</div>;
  }
  const { name, price, ingredients } = dish || {};
  return (
    <article key={dishId} className={styles.card}>
      <div className={styles.body}>
        <h2 className={styles.header}>{name}</h2>
        <p className={styles.price}>Price: ${price}</p>
        <p>ingredients: {ingredients.join(", ")}</p>
        <div className={styles.counter}>
          {Boolean(user) ? <DishCounter key={dishId} id={dishId} /> : null}
        </div>
      </div>
    </article>
  );
};
