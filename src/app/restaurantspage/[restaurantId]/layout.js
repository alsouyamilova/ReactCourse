"use client";
import { useParams } from "next/navigation";
import { RestaurantPage } from "../../../components/restaurantPage/RestaurantPage";

export default function Restaurantpage({children}) {
  const { restaurantId } = useParams();
  return (
    <RestaurantPage restaurantId = {restaurantId}>{children}</RestaurantPage>
  )
}
