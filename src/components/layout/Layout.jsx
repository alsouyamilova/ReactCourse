'use client'
import { ProgressBar } from "../progressBar/progressBar";
import styles from "./Layout.module.css";
import { ToggleThemeButton } from "../theme-context/ThemeButton";
import Button from "../button/Button";
import { useUser } from "../user-context/useUser";
import { Cart } from "../cart/Cart";
import { Timer } from "../../timer/Timer";

export const Layout = ({children}) => {
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
            {user.isAuth? <>Выйти</> : <>Войти</>}
          </Button>
        </span>
        <span>
          <Timer />
        </span>
      </header>
      {children}
      {user.isAuth? <Cart /> : null}
      <footer>Test React application, 2024</footer>
    </div>
  );
};
