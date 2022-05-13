import { configureStore } from "@reduxjs/toolkit";
import { pokeSlice } from "./reducers/poke.reducer";

export const store = configureStore({
  reducer:{
    poke: pokeSlice.reducer
  }
});