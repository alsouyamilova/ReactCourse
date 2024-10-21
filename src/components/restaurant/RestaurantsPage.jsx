import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurantIds,
  selectRestaurantRequestStatus,
} from "../../redux/restaurants";
import { RestaurantTab } from "../restaurantTab/restaurantTab";
import styles from "./Restaurant.module.css";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/restaurants/getRestaurants";

export const RestaurantsPage = ({ title }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);
  const restaurantIds = useSelector(selectRestaurantIds);
  const requestStatus = useSelector(selectRestaurantRequestStatus);
  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading";
  }
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
