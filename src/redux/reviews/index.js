import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../data/normalized-mock";

const initialState = {
    entities: normalizedReviews.reduce((acc, item) => {
      acc[item.id] = item;
  
      return acc;
    }, {}),
    ids: normalizedReviews.map(({ id }) => id),
  };
  


export const reviewSlice = createSlice({
    name: "reviews",
    initialState,
    selectors: {
        selectReviewIds: (state) => state.ids,
        selectReviewById: (state, id) => state.entities[id],
    },
  });

export const {selectReviewIds, selectReviewById} = reviewSlice.selectors
