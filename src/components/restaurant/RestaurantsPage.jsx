import { RestaurantTab } from "../restaurantTab/restaurantTab";
import styles from "./Restaurant.module.css";
import { Outlet } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../redux/services/api/api";

export const RestaurantsPage = ({ title }) => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();
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
    <div>
      <h1 className={styles.header}>{title}</h1>
      <section>
        {data.map(({ id, name }) => (
          <RestaurantTab key={id} id={id} name={name} />
        ))}
      </section>
      <Outlet />
    </div>
  );
};
