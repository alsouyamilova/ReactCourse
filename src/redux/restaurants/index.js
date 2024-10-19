import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../data/normalized-mock";

const initialState = {
    entities: normalizedRestaurants.reduce((acc, item) => {
      acc[item.id] = item;
  
      return acc;
    }, {}),
    ids: normalizedRestaurants.map(({ id }) => id),
  };
  


export const restaurantSlice = createSlice({
    name: "restaurants",
    initialState,
    selectors: {
        selectRestaurantIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
    },
  });

export const {selectRestaurantIds, selectRestaurantById} = restaurantSlice.selectors
