import React from "react";
import { useParams } from "react-router-dom";
import { Restaurant } from "../restaurant/Restaurant";
import { SubTabs } from "../restaurant/SubTabs";
import { ReviewForm } from "../reviewForm/reviewForm";
import { useUser } from "../user-context/useUser";

export const RestaurantPage = () => {
  const { user } = useUser();
  const { restaurantId } = useParams();
  return (
    <div>
      <SubTabs id={restaurantId} />
      <Restaurant id={restaurantId} />
      {Object.values(user).length > 0 ?  <ReviewForm restaurantId = {restaurantId}/> : null}
      
    </div>
  );
};
