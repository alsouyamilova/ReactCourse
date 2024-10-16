import { useParams } from "react-router-dom";
import styles from "./Dish.module.css";
import { useUser } from "../user-context/useUser";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/dishes";
import { DishCounter } from "../counter/DishCounter";

export const DishPage = () => {
  const { user } = useUser();
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDishById(state, dishId));
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
