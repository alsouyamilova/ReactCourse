"use client"
import styles from "./Menu.module.css";
import { Router, useNavigate, useParams } from "react-router-dom";
import { Dish } from "../dish/Dish";
import { useGetDishesQuery } from "../../redux/services/api/api";
import { useRouter } from "next/navigation";

export const Menu = ({children}) => {
  const { restaurantId } = useParams();
  const router = useRouter();
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
          onClick={() => router.push(`/dish/${id}`)}
        />
      ))}
    </section>
  );
};
