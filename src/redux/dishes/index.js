import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../data/normalized-mock";

const initialState = {
    entities: normalizedDishes.reduce((acc, item) => {
      acc[item.id] = item;
  
      return acc;
    }, {}),
    ids: normalizedDishes.map(({ id }) => id),
  };
  


export const dishSlice = createSlice({
    name: "dishes",
    initialState,
    selectors: {
        selectDishIds: (state) => state.ids,
        selectDishById: (state, id) => state.entities[id],
    },
  });

export const {selectDishIds, selectDishById} = dishSlice.selectors
