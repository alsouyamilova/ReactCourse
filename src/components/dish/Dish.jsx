import styles from "./Dish.module.css";
import { DishCounter } from "../counter/DishCounter";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/dishes";
import { useUser } from "../user-context/useUser";

export const Dish = ({id}) => {
    const { user } = useUser();
    const dish =useSelector((state) => selectDishById(state, id));
    const {name, price, ingredients} = dish || {};
    return(
        <article key={id} className={styles.card}>
        <div className={styles.body}>
          <h2 className={styles.header}>{name}</h2>
          <p className={styles.price}>Price: ${price}</p>
          <p>ingredients: {ingredients.join(", ")}</p>
          <div className={styles.counter}>
            {Boolean(user) ? <DishCounter key={id} id = {id}/> : null}
          </div>
        </div>
      </article>
    )
}