import { restaurants } from "../../data/mock";
import { Layout } from "../layout/Layout";
import { Restaurant } from "../restaurants/Restaurants";
import { useState } from "react";
import Button from "../button/Button";

export const App = ({ title }) => {
  const [activeRestaurantId, setaActiveRestaurantId] = useState(restaurants[0].id);
  console.log(restaurants.find(r => r.id =='a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2'))

  return (
      <Layout>
        <h1 style={{ color: "#386890" }}>{title}</h1>
        <section style={{ marginBottom: "1rem" }}>
          {restaurants.map(({id, name, menu }) =>
            Boolean(name) & (menu.length > 0) ? (
              <Button isActive={activeRestaurantId == id} onClick={() => {setaActiveRestaurantId(id)
              }}>
                {name}
              </Button>
            ) : null
          )}
        </section>

              {/* <Restaurant name={name} menu={menu} reviews={reviews} /> */}
              <Restaurant {...restaurants.find(restaurants => restaurants.id == activeRestaurantId)} />

      </Layout>
  );
};