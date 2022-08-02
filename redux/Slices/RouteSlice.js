import { createSlice } from "@reduxjs/toolkit";

export const routeSlice = createSlice({
  name: "route",
  initialState: {
    RouteName: "Summary",
  },
  reducers: {
    RouteNameSet: (state, action) => {
      state.RouteName = action.payload;
    },
  },
});

export const { RouteNameSet } = routeSlice.actions;

export default routeSlice.reducer;
