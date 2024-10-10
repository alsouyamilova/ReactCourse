import { restaurants } from "../../data/mock";
import { Layout } from "../layout/Layout";
import { Restaurant } from "../restaurant/Restaurant";
import { useState } from "react";
import { ThemeContextProvider } from "../theme-context/themeContext";
import { UserContextProvider } from "../user-context/userContext";
import Button from "../button/Button";
import styles from "./App.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/restaurants";
import { RestaurantTab } from "../restaurantTab/restaurantTab";

export const App = ({ title }) => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setaActiveRestaurantId] = useState(
    restaurantIds[0]
  );
  console.log(restaurantIds)

  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <Layout>
          <h1 className={styles.header}>{title}</h1>
          <section>
            {restaurantIds.map((id) => (
              <RestaurantTab
                key={id}
                id = {id}
                isActive={activeRestaurantId == id}
                onClick={() => {
                  setaActiveRestaurantId(id);
                }}
              />
            ))}
          </section>
          <Restaurant key={1} id={activeRestaurantId} />

          <Restaurant key={2} id={activeRestaurantId} />
        </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};
