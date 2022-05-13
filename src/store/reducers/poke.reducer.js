import { createSlice } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import { extraReducers } from "./extraReducers"

export const pokeSlice = createSlice({
  name:'poke',
  initialState,
  reducers: {
    doSome:(state,action)=>{
      
    }
  },
  extraReducers

})

export const {doSome} = pokeSlice.actions