import { useEffect } from "react";
import Button from "../button/Button";
import { useLocation, useNavigate } from "react-router-dom";
export const SubTabs = ({ id }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("menu");
  }, [id]);

  const location = useLocation();

  return (
    <div>
      <Button onClick={() => navigate("menu")} isActive={location.pathname.split("/").includes("menu")}>
        Menu
      </Button>
      <Button onClick={() => navigate("reviews")} isActive={location.pathname.split("/").includes("reviews")}>
        Reviews
      </Button>
    </div>
  );
};
