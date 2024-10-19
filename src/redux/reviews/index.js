import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./getReviews";
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
      .addCase(getReviews.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = "fulfilled";
      })
      .addCase(getReviews.rejected, (state) => {
        state.requestStatus = "rejected";
      }),
});

export const { selectReviewIds, selectReviewById, selectRewiesRequestStatus } =
  reviewSlice.selectors;
