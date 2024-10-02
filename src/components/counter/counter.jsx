import { useEffect, useState } from "react";
import { DishCounter } from "./DishCounter";
import styles from "./Counter.module.css";
import classNames from "classnames";

export const Counter = ({ value, increase, decrease }) => {
  return (
    <div className={styles.counter}>
      <button type="button" onClick={decrease} className={styles.button}>
        -
      </button>
      <span className={classNames(styles.number)}>{value}</span>
      <button type="button" onClick={increase} className={styles.button}>
        +
      </button>
    </div>
  );
};
