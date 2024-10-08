import { restaurants } from "../../data/mock";
import { Layout } from "../layout/Layout";
import { Restaurant } from "../restaurant/Restaurant";
import { useState } from "react";
import { ThemeContextProvider } from "../theme-context/themeContext";
import { UserContextProvider } from "../user-context/userContext";
import Button from "../button/Button";
import styles from "./App.module.css";

export const App = ({ title }) => {
  const [activeRestaurantId, setaActiveRestaurantId] = useState(
    restaurants[0].id
  );

  return (
    <ThemeContextProvider>
        <UserContextProvider>
      <Layout>
        <h1 className={styles.header}>{title}</h1>
        <section>
          {restaurants.map(({ id, name, menu }) =>
            Boolean(name) & (menu.length > 0) ? (
              <Button
                key={id}
                isActive={activeRestaurantId == id}
                onClick={() => {
                  setaActiveRestaurantId(id);
                }}
              >
                {name}
              </Button>
            ) : null
          )}
        </section>
        <Restaurant
          key={1}
          {...restaurants.find(
            (restaurants) => restaurants.id == activeRestaurantId
          )}
        />

        <Restaurant
          key={2}
          {...restaurants.find(
            (restaurants) => restaurants.id == activeRestaurantId
          )}
        />
      </Layout>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};
