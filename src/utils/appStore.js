import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionSlices";
import requestReducer from "./requestSlice"

const appStore = configureStore({
  reducer: {
     user: userReducer ,
     feed: feedReducer,
     connections: connectionReducer,
     requests: requestReducer,
    },
});

export default appStore;
