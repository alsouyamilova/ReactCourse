import { ProgressBar } from "../progressBar/progressBar";
import styles from "./Layout.module.css";
import { ToggleThemeButton } from "../theme-context/ThemeButton";
import Button from "../button/Button";
import { useTheme } from "../theme-context/useTheme";
import { useUser } from "../user-context/useUser";
import { Cart } from "../cart/Cart";

export const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
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
            {Boolean(user) ? <>Выйти</> : <>Войти</>}
          </Button>
        </span>
      </header>
      {children}
      <Cart />
      <footer>Test React application, 2024</footer>
    </div>
  );
};
