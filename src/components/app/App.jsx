import { restaurants } from "../../data/mock";
import { Layout } from "../layout/Layout";
import { Restaurants } from "../restaurants/Restaurants";
import { useState } from "react";
import Button from "../button/Button";

export const App = ({ title }) => {
  const [tab, setTab] = useState(restaurants[0].name);
  const [selRest, setSelRest] = useState(restaurants[0])
  console.log(tab);

  return (
    <>
      <Layout>
        <h1 style={{ color: "#386890" }}>{title}</h1>
        <section style={{ marginBottom: "1rem" }}>
          {restaurants.map(({ name, menu }) =>
            (name.length > 0) & (menu.length > 0) ? (
              <Button isActive={tab == name} onClick={() => {setTab(name)
              }}>
                {name}
              </Button>
            ) : null
          )}
        </section>
        {restaurants
          .filter((r) => r.name == tab)
          .map(({ name, menu, reviews }) => (
            <>
              <Restaurants name={name} menu={menu} reviews={reviews} />
            </>
          ))}
      </Layout>
    </>
  );
};
