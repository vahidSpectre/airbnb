import { createSlice } from "@reduxjs/toolkit";

const initialState = { aria: "all" };

const ariaStore = createSlice({
  name: "ariaStore",
  initialState,
  reducers: {
    all(state) {
      state.aria = "all";
    },
    spain(state) {
      state.aria = "spain";
    },
    africa(state) {
      state.aria = "africa";
    },
    america(state) {
      state.aria = "america";
    },
    asia(state) {
      state.aria = "asia";
    },
    italy(state) {
      state.aria = "italy";
    },
  },
});

export default ariaStore;
