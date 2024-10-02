import { DishCounter } from "../counter/DishCounter";
import styles from "./Menu.module.css";
export const Menu = ({ menu }) => {
  return (
    <section className={styles.articles}>
      {menu.map((dish) => (
        <article key={dish.id}>
          <div className={styles.body}>
            <h2>{dish.name}</h2>
            <p className={styles.price}>Price: ${dish.price}</p>
            <p>ingredients: {dish.ingredients.join(", ")}</p>
            <p className={styles.counter}>
              <DishCounter key={dish.id} />
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};
