import { ProgressBar } from "../progressBar/progressBar";
import styles from "./Layout.module.css";
import { ToggleThemeButton } from "../theme-context/ThemeButton";
import Button from "../button/Button";

import { useTheme } from "../theme-context/useTheme";

export const Layout = ({ children }) => {
  const { theme, toggleTheme, user, authUser } = useTheme();
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
      <footer>Test React application, 2024</footer>
    </div>
  );
};
