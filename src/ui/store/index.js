import { configureStore } from "@reduxjs/toolkit";

import ariaStore from "./ariaSlice";

const store = configureStore({reducer:{ariaStore:ariaStore.reducer}})

export const ariaStoreAction = ariaStore.actions;

export default store;