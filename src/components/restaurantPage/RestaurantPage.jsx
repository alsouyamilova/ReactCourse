import React from "react";
import { useParams } from "react-router-dom";
import { Restaurant } from "../restaurant/Restaurant";
import { SubTabs } from "../restaurant/SubTabs";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  return (
    <div>
      <SubTabs id={restaurantId} />
      <Restaurant id={restaurantId} />
    </div>
  );
};
