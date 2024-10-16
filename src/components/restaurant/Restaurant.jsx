import styles from "./Restaurant.module.css";
import { useUser } from "../user-context/useUser";
import { selectRestaurantById } from "../../redux/restaurants";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

export const Restaurant = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const { name, menu } = restaurant || {};

  const { user } = useUser();
  if (!Boolean(name.length) || menu.length == 0) {
    return null;
  }
  const location = useLocation();
  let title;
  if (location.pathname.split("/").includes("menu")) {
    title = "Menu";
  } else if (location.pathname.split("/").includes("reviews")) {
    title = "Reviews";
  }
  return (
    <>
      <div>
        <h3 className={styles.divider}>{title}</h3>
      </div>
      <Outlet />
      <hr></hr>
    </>
  );
};
