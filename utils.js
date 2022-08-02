import axios from "axios";
import { ChangeLoading, SetError, SetIpData } from "./redux/Slices/IpDataSlice";
import store from "./redux/store";
import { REACT_APP_DEV_MODE_IPDATA_API } from "@env";

export const QueryData = (ip) => {
  store.dispatch(ChangeLoading(false));
  axios({
    method: "get",
    url: `https://api.ipdata.co/${ip ? ip : ""}`,
    headers: {
      Referer: "https://ipdata.co/",
    },
    params: {
      "api-key": REACT_APP_DEV_MODE_IPDATA_API,
    },
  })
    .then((result) => {
      if (result.data.message) {
        store.dispatch(SetError(result.data.message));
      } else {
        store.dispatch(SetIpData(result.data));
        store.dispatch(SetError(""));
      }
      store.dispatch(ChangeLoading(true));
    })
    .catch((error) => {
      store.dispatch(SetError(error.message));
      store.dispatch(ChangeLoading(true));
    });
};
