import styles from "./Menu.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { Dish } from "../dish/Dish";
import { useGetDishesQuery } from "../../redux/services/api/api";

export const Menu = () => {
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetDishesQuery(restaurantId);
  if (isLoading) {
    return "loading";
  }
  if (isError) {
    return "error";
  }
  if (!data?.length) {
    return null;
  }
  return (
    <section className={styles.articles}>
      {data.map(({ id, name, ingredients, price }) => (
        <Dish
          key={id}
          id={id}
          name={name}
          ingredients={ingredients}
          price={price}
          onClick={() => navigate(`/dish/${id}`)}
        />
      ))}
    </section>
  );
};
