import styles from "./Dish.module.css";
import { DishCounter } from "../counter/DishCounter";
import { useUser } from "../user-context/useUser";

export const Dish = ({ id, name, ingredients, price , ...props}) => {
  const { user } = useUser();
  return (
    <article key={id} className={styles.card} {...props}>
      <div className={styles.body}>
        <h2 className={styles.header}>{name}</h2>
        <p className={styles.price}>Price: ${price}</p>
        <p>ingredients: {ingredients.join(", ")}</p>
        <div className={styles.counter}>
          {Object.values(user).length > 0 ? <DishCounter key={id} id={id} /> : null}
        </div>
      </div>
    </article>
  );
};
