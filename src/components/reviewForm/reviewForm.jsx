import { useState, useReducer } from "react";
import { useForm } from "./useForm";
import { Counter } from "../counter/counter";

export const ReviewForm = (props) => {
  const {
    name,
    setName,
    review,
    setReview,
    rating,
    increase,
    decrease,
    clear,
  } = useForm();

  return (
    <form>
      <div>
        <span> Name </span>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <span> Review </span>
        <input
          type="text"
          value={review}
          onChange={(event) => setReview(event.target.value)}
        />
      </div>
      <div>
        <span> Rating </span>
        <Counter value={rating} increase={increase} decrease={decrease} />
      </div>
      <button type="button" onClick={clear}>
        Clear
      </button>
    </form>
  );
};
