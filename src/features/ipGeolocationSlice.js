/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const selectIP = (state) => state.ipGeolocation.ip;
export const selectGeolocation = (state) => state.ipGeolocation.geolocation;

export const fetchClientIP = createAsyncThunk(
  "ipGeolocation/fetchClientIP",
  async () => {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data;
  }
);

export const fetchGeolocation = createAsyncThunk(
  "ipGeolocation/fetchGeolocation",
  async (ip) => {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_eSZLZveyOwfbFKFy1hB4mH4iO50mj&ipAddress=${ip}`
    );
    const data = await response.json();
    return data;
  }
);

const initialState = {
  isLoading: false,
  hasError: false,
  ip: "",
  geolocation: {},
};

const sliceOptions = {
  name: "ipGeolocation",
  initialState,
  reducers: {
    setIP: (state, action) => {
      state.ip = action.payload;
    },
  },
  extraReducers: {
    [fetchClientIP.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchClientIP.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.ip = action.payload.ip;
    },
    [fetchClientIP.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
    [fetchGeolocation.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [fetchGeolocation.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.geolocation = {
        ip: action.payload.ip,
        location: {
          country: action.payload.location.country,
          city: action.payload.location.city,
          region: action.payload.location.region,
          postalCode: action.payload.location.postalCode,
          lat: action.payload.location.lat,
          lng: action.payload.location.lng,
        },
        timezone: action.payload.location.timezone,
        isp: action.payload.isp,
      };
    },
    [fetchGeolocation.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
};

const ipGeolocationSlice = createSlice(sliceOptions);

export const { setIP } = ipGeolocationSlice.actions;

export default ipGeolocationSlice.reducer;
