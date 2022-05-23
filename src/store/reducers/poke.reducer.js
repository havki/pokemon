import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios.info";
import { initialState } from "./state";

export const pokeFetch = createAsyncThunk(
  "poke/get",
  async (_, { rejectWithValue, getState }) => {
    try {
      let limit = getState().poke.limitReq;
      const res = await axios.get(`/pokemon-form/?offset=0&limit=${limit}`);
      if (!res?.data) {
        throw new Error();
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);

export const pokePush = createAsyncThunk(
  "poke/push",
  async (url, { rejectWithValue }) => {
    try {
      const res = await axios.get(url);
      if (!res?.data) {
        throw new Error();
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);

export const pokeSlice = createSlice({
  name: "poke",
  initialState,
  reducers: {
    doSome: (state, action) => {},
    filterCategories: (state, action) => {
      let full = [];
      for (let i = 0; i < state.pokesData.length; i++) {
        const element = state.pokesData[i];
        let each = element.types.map((i) => i.type.name);
        full.push(each);
      }

      const flatted = full.flat();
      for (let item of flatted) {
        if (!state.categories.includes(item)) {
          state.categories.push(item);
        }
      }
    },
  },
  extraReducers: {
    [pokeFetch.pending]: (state) => {
      state.loading = true;
    },
    [pokeFetch.fulfilled]: (state, action) => {
      state.pokes = action.payload;

      state.loading = false;
    },
    [pokeFetch.rejected]: (state) => {
      state.loading = true;
    },
    [pokePush.pending]: (state) => {
      state.loading = true;
    },
    [pokePush.fulfilled]: (state, action) => {
      state.pokesData.push(action.payload);
      state.loading = false;
    },
    [pokePush.rejected]: (state) => {
      state.loading = true;
    },
  },
});

export const { doSome, filterCategories } = pokeSlice.actions;

