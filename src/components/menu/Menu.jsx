import { DishCounter } from "../counter/DishCounter";
import styles from "./Menu.module.css";
import { useUser } from "../user-context/useUser";

export const Menu = ({ menu }) => {
  const { user } = useUser();

  return (
    <section className={styles.articles}>
      {menu.map((dish) => (
        <article key={dish.id} className={styles.card}>
          <div className={styles.body}>
            <h2 className={styles.header}>{dish.name}</h2>
            <p className={styles.price}>Price: ${dish.price}</p>
            <p>ingredients: {dish.ingredients.join(", ")}</p>
            <div className={styles.counter}>
              {Boolean(user) ? <DishCounter key={dish.id} /> : null}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
