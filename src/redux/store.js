import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./restaurants";
import { cartSlice } from "./uiCart";
import { dishSlice } from "./dishes";
import { reviewSlice } from "./reviews";
import { userSlice } from "./users";

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});