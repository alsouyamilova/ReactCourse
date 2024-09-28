import { useEffect, useState } from "react";
import { DishCounter } from "./DishCounter";

export const Counter = ({ value, increase, decrease }) => {
  return (
    <>
      <button type="button" onClick={decrease}>
        -
      </button>
      {value}
      <button type="button" onClick={increase}>
        +
      </button>
    </>
  );
};
