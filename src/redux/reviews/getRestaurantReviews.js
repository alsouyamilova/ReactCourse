import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurantReviews = createAsyncThunk(
  "dishes/getRestaurantReviews",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("no data");
      return;
    }
    return result;
  }
);
