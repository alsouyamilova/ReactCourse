import { useEffect, useState } from "react";
import { DishCounter } from "./DishCounter";
import styles from "./Counter.module.css";
import classNames from "classnames";
import { useThemeUser } from "../theme-context/useThemeUser";

export const Counter = ({ value, increase, decrease }) => {
  const { theme } = useThemeUser();
  return (
    <div className={styles.counter}>
      <button
        type="button"
        onClick={decrease}
        className={classNames(styles.button, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })}
      >
        -
      </button>
      <span className={classNames(styles.number)}>{value}</span>
      <button
        type="button"
        onClick={increase}
        className={classNames(styles.button, {
          [styles.light]: theme === "light",
          [styles.dark]: theme === "dark",
        })}
      >
        +
      </button>
    </div>
  );
};
