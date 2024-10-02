import { useState, useReducer } from "react";
import { useForm } from "./useForm";
import { Counter } from "../counter/counter";
import styles from "./Form.module.css";
import classNames from "classnames";

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
    <>
      <form className={styles.form}>
        <fieldset>
          <legend>Your feedback</legend>
          <label>
            <span>
              Name <span className={styles.required}>*</span>
            </span>
            <input
              type="text"
              value={name}
              className={classNames(styles.input, styles.field)}
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label>
            <span>
              Review <span className={styles.required}>*</span>
            </span>
            <input
              type="text"
              value={review}
              onChange={(event) => setReview(event.target.value)}
            />
          </label>
          <div>
            <label>
              <span>
                Rating <span className={styles.required}>*</span>
              </span>
              <Counter value={rating} increase={increase} decrease={decrease} />
            </label>
          </div>
          <button type="button" onClick={clear} className={styles.button}>
            Clear
          </button>
        </fieldset>
      </form>
    </>
  );
};
