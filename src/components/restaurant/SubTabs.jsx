import { useEffect } from "react";
import Button from "../button/Button";
import { useLocation, useNavigate } from "react-router-dom";
export const SubTabs = ({ id }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("menu");
  }, [id]);

  return (
    <div>
      <Button onClick={() => navigate("menu")} isActive={false}>
        Menu
      </Button>
      <Button onClick={() => navigate("reviews")} isActive={false}>
        Reviews
      </Button>
    </div>
  );
};
