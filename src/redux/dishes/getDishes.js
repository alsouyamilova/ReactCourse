import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from ".";
export const getDishes = createAsyncThunk(
  "dishes/getDishes",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("no data");
      return;
    }
    return result;
  }
);

export const getDishById = createAsyncThunk(
  "dishes/getDishById",
  async (dishId, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
    const result = await response.json();

    if (!result) {
      rejectWithValue("no data");
      return;
    }
    return result;
  },
  {
    condition: (dishId, { getState }) => {
      return selectDishById(getState(), dishId).length === 0;
    },
  }
);
