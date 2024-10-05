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
      <form className={styles.reviewform}>
        <fieldset className={styles.formbox}>
          <legend className={styles.top}>Your feedback</legend>
          <label className={styles.formlabel}>
            <span className={styles.formspan}>
              Name <span className={styles.required}>*</span>
            </span>
            <input
              type="text"
              className={styles.textinput}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label className={styles.formlabel}>
            <span className={styles.formspan}>
              Review <span className={styles.required}>*</span>
            </span>
            <input
              type="text"
              className={styles.textinput}
              value={review}
              onChange={(event) => setReview(event.target.value)}
            />
          </label>
          <div>
            <label className={styles.formlabel}>
              <span className={styles.formspan}>
                Rating <span className={styles.required}>*</span>
              </span>
              <Counter value={rating} increase={increase} decrease={decrease} />
            </label>
          </div>
          <button type="button" onClick={clear} className={styles.clearbutton}>
            Clear
          </button>
        </fieldset>
      </form>
    </>
  );
};
