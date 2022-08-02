import { createSlice } from "@reduxjs/toolkit";

export const ipdataSlice = createSlice({
  name: "ipData",
  initialState: {
    data: {},
    error: "",
    loading: false,
  },
  reducers: {
    SetIpData: (state, action) => {
      state.data = action.payload;
    },
    SetError: (state, action) => {
      state.error = action.payload;
    },
    ChangeLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { SetIpData, SetError, ChangeLoading } = ipdataSlice.actions;

export default ipdataSlice.reducer;
