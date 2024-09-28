import { useReducer } from "react";
const SET_NAME_ACTION_TYPE = "setName";
const INCREASE_ACTION_TYPE = "increase";
const DECREASE_ACTION_TYPE = "decrease";
const SET_REVIEW_ACTION_TYPE = "setReview";
const CLEAR_FORM = "clear";
const reducer = (state, action) => {
  //функция, меняющая состояние. state - текущее состояние
  const { type, payload } = action;
  switch (type) {
    case CLEAR_FORM:
      return {
        ...DEFAULT_FORM_VALUE,
      };
    case SET_NAME_ACTION_TYPE:
      return {
        ...state,
        name: payload, //новое значение name
      };
    case INCREASE_ACTION_TYPE:
      return {
        ...state,
        rating: payload,
      };
    case DECREASE_ACTION_TYPE:
      return {
        ...state,
        rating: payload,
      };
    case SET_REVIEW_ACTION_TYPE:
      return {
        ...state,
        review: payload,
      };
    default:
      return state;
  }
};
const DEFAULT_FORM_VALUE = {
  name: "",
  rating: 0,
  review: "",
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
  const { name, rating, review } = form;

  const setName = (value) => {
    dispatch({ type: SET_NAME_ACTION_TYPE, payload: value });
  };
  const setReview = (value) => {
    dispatch({ type: SET_REVIEW_ACTION_TYPE, payload: value });
  };
  const clear = () => {
    dispatch({ type: CLEAR_FORM });
  };
  const increase = () => {
    let newVal;
    if (rating + 1 > 5) {
      newVal = 5;
    } else {
      newVal = rating + 1;
    }
    dispatch({ type: INCREASE_ACTION_TYPE, payload: newVal });
  };
  const decrease = () => {
    let newVal;
    if (rating - 1 < 0) {
      newVal = 0;
    } else {
      newVal = rating - 1;
    }
    dispatch({ type: DECREASE_ACTION_TYPE, payload: newVal });
  };

  return {
    name,
    setName,
    review,
    setReview,
    rating,
    increase,
    decrease,
    clear,
  };
};
