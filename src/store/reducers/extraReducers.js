import { pokeFetch } from "../asyncActions/poke";


export const  extraReducers = {
  [pokeFetch.pending]: (state) => {
    state.loading = true;
  },
  [pokeFetch.fulfilled]: (state, action) => {
    state.pokes = action.payload;
    console.log(action.payload);

    state.loading = false;
  },
  [pokeFetch.rejected]: (state) => {
    state.loading = true;
  },
}