import { configureStore } from "@reduxjs/toolkit";
import ipGeolocationReducer from "./features/ipGeolocationSlice";

const store = configureStore({
  reducer: {
    ipGeolocation: ipGeolocationReducer,
  },
});

export default store;
