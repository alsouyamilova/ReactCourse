import styles from "./Button.module.css";
import classNames from "classnames";
import { useThemeUser } from "../theme-context/useThemeUser";
export default function Button({ children, isActive, ...props }) {
  const { theme } = useThemeUser();
  return (
    //изолированные классы кнопки
    <button
      {...props} //spread
      className={classNames(styles.button, {
        [styles.active]: isActive,
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
      })}
    >
      {children}
    </button>
  );
}
