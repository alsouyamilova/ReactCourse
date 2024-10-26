"use client";
import { Restaurant } from "../restaurant/Restaurant";
import { SubTabs } from "./SubTabs";
import { ReviewForm } from "../reviewForm/reviewForm";
import { useUser } from "../user-context/useUser";

export const RestaurantPage = ({restaurantId, children}) => {
  const { user } = useUser();
  return (
    <div>
      <SubTabs id={restaurantId} />
      <Restaurant id={restaurantId}>{children}</Restaurant>
      {user.isAuth?  <ReviewForm restaurantId = {restaurantId}/> : null}
      
    </div>
  );
};
