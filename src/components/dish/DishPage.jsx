import { useParams } from "react-router-dom";
import styles from "./Dish.module.css";
import { useUser } from "../user-context/useUser";
import { DishCounter } from "../counter/DishCounter";
import { useGetDishByIdQuery } from "../../redux/services/api/api";

export const DishPage = () => {
  const { user } = useUser();
  const { dishId } = useParams();

  const { data, isLoading, isError } = useGetDishByIdQuery(dishId);

  if (isLoading) {
    return "loading";
  }
  if (isError) {
    return "error";
  }
  if (!data) {
    return null;
  }

  const { name, price, ingredients } = data || {};
  return (
    <article key={dishId} className={styles.card}>
      <div className={styles.body}>
        <h2 className={styles.header}>{name}</h2>
        <p className={styles.price}>Price: ${price}</p>
        <p>ingredients: {ingredients.join(", ")}</p>
        <div className={styles.counter}>
          {user.isAuth?  <DishCounter key={dishId} id={dishId} /> : null}
        </div>
      </div>
    </article>
  );
};
