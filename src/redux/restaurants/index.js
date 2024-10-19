import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurantById, getRestaurants } from "./getRestaurants";

const entityAdapter = createEntityAdapter();
export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState({
    requestStatus: "idle",
    selectedRestaurantRequestStatus: "fulfilled",
  }),
  selectors: {
    selectRestaurantIds: (state) => state.ids,
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantRequestStatus: (state) => state.requestStatus,
    selectedRestaurantRequestStatus: (state) =>
      state.selectedRestaurantRequestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = "fulfilled";
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.requestStatus = "rejected";
      })
      .addCase(getRestaurantById.pending, (state) => {
        state.selectedRestaurantRequestStatus = "pending";
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
        state.selectedRestaurantRequestStatus = "fulfilled";
      })
      .addCase(getRestaurantById.rejected, (state) => {
        state.selectedRestaurantRequestStatus = "rejected";
      }),
});

export const {
  selectRestaurantIds,
  selectRestaurantById,
  selectRestaurantRequestStatus,
  selectedRestaurantRequestStatus,
} = restaurantSlice.selectors;
