import styles from "./Restaurant.module.css";
import { useUser } from "../user-context/useUser";
import { Outlet, useLocation } from "react-router-dom";
import { useGetRestaurantByIdQuery } from "../../redux/services/api/api";

export const Restaurant = ({ id }) => {
  const location = useLocation();
 
  const { data, isLoading, isError } = useGetRestaurantByIdQuery(id);

  if (isLoading) {
    return "loading";
  }
  if (isError) {
    return "error";
  }
  if (!data) {
    return null;
  }

  const { name, menu } = data || {};
  if (!name || menu.length == 0) {
    return null;
  }


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
