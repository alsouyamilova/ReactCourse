"use client";

import { RestaurantsPage } from "../../components/restaurant/RestaurantsPage";

export default function Restaurants({ children }) {
  return <RestaurantsPage title={"Restaurants"}>{children}</RestaurantsPage>;
}
