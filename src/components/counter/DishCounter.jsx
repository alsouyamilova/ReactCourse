import { useState } from "react";
import { Counter } from "./counter";
export const DishCounter = () => {
  const [value, setValue] = useState(0);
  const increase = () => {
    let newVal;
    if (value + 1 > 5) {
      newVal = 5;
    } else {
      newVal = value + 1;
    }
    setValue(newVal);
  };
  const decrease = () => {
    let newVal;
    if (value - 1 < 0) {
      newVal = 0;
    } else {
      newVal = value - 1;
    }
    setValue(newVal);
  };

  return <Counter value={value} increase={increase} decrease={decrease} />;
};
