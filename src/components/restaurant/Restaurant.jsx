import styles from "./Restaurant.module.css";
import { Outlet, useLocation } from "react-router-dom";
import { useGetRestaurantByIdQuery } from "../../redux/services/api/api";
import { usePathname } from "next/navigation";

export const Restaurant = ({ id, children }) => {
  const pathname = usePathname();
  
 
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
  if (pathname.split("/").includes("menu")) {
    title = "Menu";
  } else if (pathname.split("/").includes("reviews")) {
    title = "Reviews";
  }

  return (
    <>
      <div>
        <h3 className={styles.divider}>{title}</h3>
      </div>
      {children}
      <hr></hr>
    </>
  );
};
