import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById, selectRestaurantIds } from ".";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/restaurants/");
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("no data");
      return;
    }
    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectRestaurantIds(getState()).length === 0;
    },
  }
);

export const getRestaurantById = createAsyncThunk(
  "restaurants/getRestaurantById",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/restaurant/${id}`);

    const result = await response.json();
    if (!result) {
      rejectWithValue("no data");
      return;
    }
    return result;
  },
  {
    condition: (id, { getState }) => {
      return !selectRestaurantById(getState(), id);
    },
  }
);
