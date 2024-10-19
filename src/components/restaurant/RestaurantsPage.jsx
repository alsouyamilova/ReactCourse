import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/restaurants";
import { RestaurantTab } from "../restaurantTab/restaurantTab";
import styles from "./Restaurant.module.css";
import { Outlet } from "react-router-dom";

export const RestaurantsPage = ({ title }) => {
  const restaurantIds = useSelector(selectRestaurantIds);
  return (
    <div>
      <h1 className={styles.header}>{title}</h1>
      <section>
        {restaurantIds.map((id) => (
          <RestaurantTab key={id} id={id} />
        ))}
      </section>
      <Outlet />
    </div>
  );
};
