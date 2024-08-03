import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice";
import fetchStatusSlice from "./fetchingstatusSlice";

const store = configureStore({
  reducer: {
    users: UserSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});

export default store;
