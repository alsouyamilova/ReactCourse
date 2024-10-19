import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../data/normalized-mock";

const initialState = {
    entities: normalizedUsers.reduce((acc, item) => {
      acc[item.id] = item;
  
      return acc;
    }, {}),
    ids: normalizedUsers.map(({ id }) => id),
  };
  


export const userSlice = createSlice({
    name: "users",
    initialState,
    selectors: {
        selectUserIds: (state) => state.ids,
        selectUserById: (state, id) => state.entities[id],
    },
  });

export const {selectUserIds, selectUserById} = userSlice.selectors
