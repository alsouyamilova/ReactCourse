import styles from "./Restaurant.module.css";
import { useUser } from "../user-context/useUser";
import {
  selectedRestaurantRequestStatus,
  selectRestaurantById,
} from "../../redux/restaurants";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantById } from "../../redux/restaurants/getRestaurants";
import { useEffect } from "react";

export const Restaurant = ({ id }) => {
  const { user } = useUser();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurantById(id));
  }, [dispatch, id]);
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const requestStatus = useSelector(selectedRestaurantRequestStatus);

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loading";
  } else if (requestStatus === "rejected") {
    return "error";
  }
  const { name, menu } = restaurant || {};
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
