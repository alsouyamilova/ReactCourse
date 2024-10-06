import { useThemeUser } from "./useThemeUser";
import styles from "./ThemeButton.module.css";
import classNames from "classnames";
export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useThemeUser();

  return (
    <button
      className={classNames(styles.button, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
      onClick={toggleTheme}
    >
      {theme === "light" ? "dark mode" : "light mode"}
    </button>
  );
};
