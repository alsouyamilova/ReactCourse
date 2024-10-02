import { restaurants } from "../../data/mock";
import { Layout } from "../layout/Layout";
import { Restaurant } from "../restaurant/Restaurant";
import { useState } from "react";
import Button from "../button/Button";
import "./App.css";

export const App = ({ title }) => {
  const [activeRestaurantId, setaActiveRestaurantId] = useState(
    restaurants[0].id
  );

  return (
    <Layout>
      <h1 style={{ color: "#386890" }}>{title}</h1>
      <section style={{ marginBottom: "1rem" }}>
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
      <Restaurant
        key={3}
        {...restaurants.find(
          (restaurants) => restaurants.id == activeRestaurantId
        )}
      />
    </Layout>
  );
};
