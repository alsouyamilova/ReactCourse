import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserIds } from ".";

export const getUsers = createAsyncThunk(
  "getUsers",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/users/");
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("no data");
      return;
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectUserIds(getState()).length === 0;
    },
  }
);
