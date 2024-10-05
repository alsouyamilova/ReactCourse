import { DishCounter } from "../counter/DishCounter";
import styles from "./Menu.module.css";
export const Menu = ({ menu }) => {
  return (
    <section className={styles.articles}>
      {menu.map((dish) => (
        <article key={dish.id} className={styles.card}>
          <div className={styles.body}>
            <h2>{dish.name}</h2>
            <p className={styles.price}>Price: ${dish.price}</p>
            <p>ingredients: {dish.ingredients.join(", ")}</p>
            <div className={styles.counter}>
              <DishCounter key={dish.id} />
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
