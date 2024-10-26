"use client";
import Button from "../button/Button";
import { usePathname, useRouter } from "next/navigation";


export const RestaurantTab = ({ id, name }) => {
  const router = useRouter();
  const pathname = usePathname()
  const isActive = pathname.includes(`/restaurantspage/${id}`);

  return (
    <Button onClick={() => router.push(`/restaurantspage/${id}`)} isActive={isActive}>
      {name}
    </Button>
  );
};
