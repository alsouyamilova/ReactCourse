import { useEffect, useState } from "react";
import { DishCounter } from "./DishCounter";
import styles from "./Counter.module.css";
import classNames from "classnames";
import { useTheme } from "../theme-context/useTheme";

export const Counter = ({ value, increase, decrease }) => {
  const { theme } = useTheme();
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
