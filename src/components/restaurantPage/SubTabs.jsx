"use client";
import { useEffect } from "react";
import Button from "../button/Button";
import { usePathname, useRouter } from "next/navigation";
export const SubTabs = ({ id }) => {
  const router = useRouter();
  const pathname = usePathname()

  useEffect(() => {
    router.push(`/restaurantspage/${id}/menu`);
  }, []);

  return (
    <div>
      <Button
        onClick={() => router.push(`/restaurantspage/${id}/menu`)}
        isActive={pathname.split("/").includes("menu")}
      >
        Menu
      </Button>
      <Button
        onClick={() => router.push(`/restaurantspage/${id}/reviews`)}
        isActive={pathname.split("/").includes("reviews")}
      >
        Reviews
      </Button>
    </div>
  );
};
