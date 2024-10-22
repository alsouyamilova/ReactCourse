import { ProgressBar } from "../progressBar/progressBar";
import styles from "./Layout.module.css";
import { ToggleThemeButton } from "../theme-context/ThemeButton";
import Button from "../button/Button";
import { useTheme } from "../theme-context/useTheme";
import { useUser } from "../user-context/useUser";
import { Cart } from "../cart/Cart";
import { Outlet } from "react-router-dom";
import { Timer } from "../../timer/Timer";

export const Layout = () => {
  const { user, authUser } = useUser();
  return (
    <div className={styles.layout}>
      <ProgressBar />
      <header>
        <span>React App</span>
        <span>
          {" "}
          <ToggleThemeButton />
        </span>
        <span>
          <Button onClick={authUser}>
            {Object.values(user).length > 0 ? <>Выйти</> : <>Войти</>}
          </Button>
        </span>
        <span>
          <Timer />
        </span>
      </header>
      <Outlet />
      {Object.values(user).length > 0 ? <Cart /> : null}
      <footer>Test React application, 2024</footer>
    </div>
  );
};
