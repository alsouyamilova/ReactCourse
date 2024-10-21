import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurantReviews } from "./getRestaurantReviews";
const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectReviewIds: (state) => state.ids,
    selectReviewById: (state, id) => state.entities[id],
    selectRewiesRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurantReviews.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getRestaurantReviews.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = "fulfilled";
      })
      .addCase(getRestaurantReviews.rejected, (state) => {
        state.requestStatus = "rejected";
      }),
});

export const { selectReviewIds, selectReviewById, selectRewiesRequestStatus } =
  reviewSlice.selectors;
