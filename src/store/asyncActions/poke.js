import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios.info";

export const pokeFetch = createAsyncThunk(
  "poke/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/pokemon-form/?offset=0&limit=20`);
      if (!res?.data) {
        throw new Error();
      }
      console.log(res.data );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res.data);
    }
  }
);