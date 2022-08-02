import { configureStore } from "@reduxjs/toolkit";
import RouteReducer from "./Slices/RouteSlice";
import IpDataReducer from "./Slices/IpDataSlice";
export default configureStore({
  reducer: {
    route: RouteReducer,
    ipData: IpDataReducer,
  },
});
