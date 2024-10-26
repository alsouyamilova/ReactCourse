"use client";

import { useParams } from "next/navigation";
import { DishPage } from "../../../components/dish/DishPage";

export default function Dish({ children }) {
  const { dishId } = useParams();
  return <DishPage dishId={dishId}>{children}</DishPage>;
}
