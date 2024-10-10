import { DishCounter } from "../counter/DishCounter";
import styles from "./Menu.module.css";

import { Dish } from "../dish/Dish";

export const Menu = ({ menu }) => {
  return (
    <section className={styles.articles}>
      {menu.map((dishId) => (
        <Dish key={dishId} id={dishId} />
      ))}
    </section>
  );
};
