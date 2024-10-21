import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishById, getDishes } from "./getDishes";
const entityAdapter = createEntityAdapter();
export const dishSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState({
    requestStatus: "idle",
    dishRequestStatus: "fulfilled",
  }),
  selectors: {
    selectDishIds: (state) => state.ids,
    selectDishById: (state, id) => state.entities[id],
    selectDishRequestStatus: (state) => state.requestStatus,
    selectDishByIdRequestStatus: (state) => state.dishRequestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = "fulfilled";
      })
      .addCase(getDishes.rejected, (state) => {
        state.requestStatus = "rejected";
      })
      .addCase(getDishById.pending, (state) => {
        state.dishRequestStatus = "pending";
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
        state.dishRequestStatus = "fulfilled";
      })
      .addCase(getDishById.rejected, (state) => {
        state.dishRequestStatus = "rejected";
      }),
});

export const {
  selectDishIds,
  selectDishById,
  selectDishRequestStatus,
  selectDishByIdRequestStatus,
} = dishSlice.selectors;
