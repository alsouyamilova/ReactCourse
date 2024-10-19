import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./getUsers";
const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectUserIds: (state) => state.ids,
    selectUserById: (state, id) => state.entities[id],
    selectUserRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
        state.requestStatus = "fulfilled";
      })
      .addCase(getUsers.rejected, (state) => {
        state.requestStatus = "rejected";
      }),
});

export const { selectUserIds, selectUserById, selectUserRequestStatus } =
  userSlice.selectors;
