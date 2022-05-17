import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios.info";

export const pokeFetch = createAsyncThunk(
  "poke/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/pokemon-form/?offset=0&limit=898`);
      if (!res?.data) {
        throw new Error();
      }
      // console.log(res.data );
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
  initialState: {
    value: "asdas",
    loading: null,
    pokes: null,
    pokesData: [],
    categories: [],
  },
  reducers: {
    doSome: (state, action) => {},
    filterCategories: (state, action) => {
      
      
      let full = []
      for (let i = 0; i < state.pokesData.length; i++) {
        const element = state.pokesData[i];
       let each =element.types.map(i=>  i.type.name)
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
      // console.log(action.payload);
      state.pokesData.push(action.payload);

      state.loading = false;
    },
    [pokePush.rejected]: (state) => {
      state.loading = true;
    },
  },
});

export const { doSome, filterCategories } = pokeSlice.actions;


// let arr = [
//   {
//     types: [
//       {
//         type: {
//           name: "grass",
//         },
//       },
//       {
//         type: {
//           name: "poison",
//         },
//       },
//     ],
//   },
//   {
//     types: [
//       {
//         type: {
//           name: "water",
//         },
//       },
//       {
//         type: {
//           name: "gro",
//         },
//       },
//     ],
//   },
//   {
//     types: [
//       {
//         type: {
//           name: "sand",
//         },
//       },
//       {
//         slot: 2,
//         type: {
//           name: "fire",
//         },
//       },
//     ],
//   },
// ];